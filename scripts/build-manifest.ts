import { readdir, readFile } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { z } from 'zod'

// Metadata lives in the `talk:` block of each deck's slides.md headmatter.
// The slug (URL path) is derived from the deck's folder path under slides/,
// e.g. "2026/falcon-knowledge-base" or "2026/moe-camp/wordpress-workshop/day1".
// It is NOT set in frontmatter — move the folder to change the URL.
const TalkMetaSchema = z.object({
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

const yamlEngine = (s: string) =>
  yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as Record<string, unknown>

async function parseDeck(slug: string, slidesPath: string): Promise<ManifestEntry | null> {
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
        .join('\n')}`,
    )
  }
  if (parsed.data.draft) return null

  const title = typeof data.title === 'string' && data.title.length > 0 ? data.title : slug
  return {
    slug,
    title,
    description: parsed.data.description,
    tags: parsed.data.tags,
    event: parsed.data.event,
    date: parsed.data.date,
    links: parsed.data.links,
    url: `/${slug}/`,
    ...(parsed.data.unlisted ? { unlisted: true } : {}),
  }
}

// Recursively find every deck (a folder containing slides.md). The deck's
// slug is its path relative to slidesDir, e.g. "chatbot" or
// "2026/moe-camp/wordpress-workshop/day1". A folder with slides.md is a deck
// and is not descended into further.
async function findDeckDirs(dir: string): Promise<string[]> {
  const ents = await readdir(dir, { withFileTypes: true })
  if (ents.some((e) => e.isFile() && e.name === 'slides.md')) return [dir]
  const found: string[] = []
  for (const e of ents) {
    if (e.isDirectory() && e.name !== 'node_modules' && e.name !== 'assets') {
      found.push(...(await findDeckDirs(join(dir, e.name))))
    }
  }
  return found
}

export async function buildManifest(slidesDir: string): Promise<ManifestEntry[]> {
  const deckDirs = await findDeckDirs(slidesDir)
  const entries: ManifestEntry[] = []

  for (const deckDir of deckDirs) {
    const slug = relative(slidesDir, deckDir).split(sep).join('/')
    const entry = await parseDeck(slug, join(deckDir, 'slides.md'))
    if (entry) entries.push(entry)
  }

  return entries
}

// Standalone run: validate every deck's frontmatter and print a summary.
if (import.meta.main) {
  const manifest = await buildManifest('slides')
  const listed = manifest.filter((t) => !t.unlisted)
  listed.sort((a, b) => b.date.localeCompare(a.date))
  const hidden = manifest.length - listed.length
  for (const t of listed) console.log(`  ${t.date}  ${t.slug}`)
  for (const t of manifest.filter((t) => t.unlisted)) console.log(`  ${t.date}  ${t.slug}  (unlisted)`)
  console.log(`✓ ${listed.length} listed` + (hidden ? ` + ${hidden} unlisted` : ''))
}
