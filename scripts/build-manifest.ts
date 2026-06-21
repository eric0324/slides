import { readdir, readFile, writeFile, mkdir, access } from 'node:fs/promises'
import { join } from 'node:path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { z } from 'zod'

// Shared metadata fields (slug, description, tags, event, date, draft, links)
const TalkMetaSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().min(1),
  tags: z.array(z.string()).min(1),
  event: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  draft: z.boolean().optional().default(false),
  // unlisted: 照常建置／部署，但不出現在首頁清單（talks.json）
  unlisted: z.boolean().optional().default(false),
  links: z
    .object({
      video: z.string().url().optional(),
      repo: z.string().url().optional(),
    })
    .optional(),
})

// talk.yml: top-level + title + optional build instructions
const TalkYmlSchema = TalkMetaSchema.extend({
  title: z.string().min(1),
  build: z
    .object({
      command: z.string().min(1),
      out: z.string().min(1),
    })
    .optional(),
})

export interface ManifestEntry {
  slug: string
  title: string
  description: string
  tags: string[]
  event: string
  date: string
  links?: { video?: string; repo?: string }
  url: string
  unlisted?: boolean
}

async function exists(path: string): Promise<boolean> {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

const yamlEngine = (s: string) =>
  yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as Record<string, unknown>

interface ParsedDeck {
  meta: z.infer<typeof TalkMetaSchema>
  title: string
  source: string
}

async function parseSlidevDeck(slug: string, slidesPath: string): Promise<ParsedDeck> {
  const raw = await readFile(slidesPath, 'utf-8')
  const { data } = matter(raw, { engines: { yaml: yamlEngine } })

  if (!data.talk) {
    throw new Error(`${slidesPath}: missing 'talk:' frontmatter`)
  }
  const parsed = TalkMetaSchema.safeParse(data.talk)
  if (!parsed.success) {
    throw new Error(
      `${slidesPath}: invalid frontmatter\n${parsed.error.issues
        .map((i) => `  - talk.${i.path.join('.')}: ${i.message}`)
        .join('\n')}`
    )
  }
  if (parsed.data.slug !== slug) {
    throw new Error(
      `${slidesPath}: slug "${parsed.data.slug}" must match folder name "${slug}"`
    )
  }
  const title = typeof data.title === 'string' && data.title.length > 0 ? data.title : slug
  return { meta: parsed.data, title, source: slidesPath }
}

async function parseCustomDeck(slug: string, talkYmlPath: string): Promise<ParsedDeck> {
  const raw = await readFile(talkYmlPath, 'utf-8')
  const data = yamlEngine(raw)

  const parsed = TalkYmlSchema.safeParse(data)
  if (!parsed.success) {
    throw new Error(
      `${talkYmlPath}: invalid talk.yml\n${parsed.error.issues
        .map((i) => `  - ${i.path.join('.')}: ${i.message}`)
        .join('\n')}`
    )
  }
  if (parsed.data.slug !== slug) {
    throw new Error(
      `${talkYmlPath}: slug "${parsed.data.slug}" must match folder name "${slug}"`
    )
  }
  return { meta: parsed.data, title: parsed.data.title, source: talkYmlPath }
}

export async function buildManifest(slidesDir: string): Promise<ManifestEntry[]> {
  const dirs = await readdir(slidesDir, { withFileTypes: true })
  const entries: ManifestEntry[] = []

  for (const dirent of dirs) {
    if (!dirent.isDirectory()) continue
    const slug = dirent.name
    const deckDir = join(slidesDir, slug)
    const slidevPath = join(deckDir, 'slides.md')
    const talkYmlPath = join(deckDir, 'talk.yml')

    const hasSlidev = await exists(slidevPath)
    const hasCustom = await exists(talkYmlPath)

    if (hasSlidev && hasCustom) {
      throw new Error(
        `${deckDir}: both slides.md and talk.yml present (ambiguous deck type)`
      )
    }

    let parsed: ParsedDeck
    if (hasSlidev) {
      parsed = await parseSlidevDeck(slug, slidevPath)
    } else if (hasCustom) {
      parsed = await parseCustomDeck(slug, talkYmlPath)
    } else {
      continue
    }

    if (parsed.meta.draft) continue

    entries.push({
      slug: parsed.meta.slug,
      title: parsed.title,
      description: parsed.meta.description,
      tags: parsed.meta.tags,
      event: parsed.meta.event,
      date: parsed.meta.date,
      links: parsed.meta.links,
      url: `/${parsed.meta.slug}/`,
      ...(parsed.meta.unlisted ? { unlisted: true } : {}),
    })
  }

  return entries
}

if (import.meta.main) {
  const manifest = await buildManifest('slides')
  const listed = manifest.filter((t) => !t.unlisted)
  listed.sort((a, b) => b.date.localeCompare(a.date))
  await mkdir('web/data', { recursive: true })
  await writeFile('web/data/talks.json', JSON.stringify(listed, null, 2) + '\n')
  const hidden = manifest.length - listed.length
  console.log(
    `✓ ${listed.length} talk(s) written to web/data/talks.json` +
      (hidden ? ` (${hidden} unlisted, hidden from homepage)` : '')
  )
}
