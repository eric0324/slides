import { readdir, readFile, access } from 'node:fs/promises'
import { join } from 'node:path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { z } from 'zod'

// Metadata lives in the `talk:` block of each deck's slides.md headmatter.
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
  if (parsed.data.slug !== slug) {
    throw new Error(`${slidesPath}: slug "${parsed.data.slug}" must match folder name "${slug}"`)
  }
  if (parsed.data.draft) return null

  const title = typeof data.title === 'string' && data.title.length > 0 ? data.title : slug
  return {
    slug: parsed.data.slug,
    title,
    description: parsed.data.description,
    tags: parsed.data.tags,
    event: parsed.data.event,
    date: parsed.data.date,
    links: parsed.data.links,
    url: `/${parsed.data.slug}/`,
    ...(parsed.data.unlisted ? { unlisted: true } : {}),
  }
}

export async function buildManifest(slidesDir: string): Promise<ManifestEntry[]> {
  const dirs = await readdir(slidesDir, { withFileTypes: true })
  const entries: ManifestEntry[] = []

  for (const dirent of dirs) {
    if (!dirent.isDirectory()) continue
    const slug = dirent.name
    const slidesPath = join(slidesDir, slug, 'slides.md')
    if (!(await exists(slidesPath))) continue

    const entry = await parseDeck(slug, slidesPath)
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
