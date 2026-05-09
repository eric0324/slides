import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { z } from 'zod'

const TalkSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().min(1),
  tags: z.array(z.string()).min(1),
  event: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  draft: z.boolean().optional().default(false),
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
}

export async function buildManifest(slidesDir: string): Promise<ManifestEntry[]> {
  const dirs = await readdir(slidesDir, { withFileTypes: true })
  const entries: ManifestEntry[] = []

  for (const dirent of dirs) {
    if (!dirent.isDirectory()) continue
    const slug = dirent.name
    const slidesPath = join(slidesDir, slug, 'slides.md')

    let raw: string
    try {
      raw = await readFile(slidesPath, 'utf-8')
    } catch {
      continue
    }

    const { data } = matter(raw, {
      engines: {
        yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as Record<string, unknown>,
      },
    })
    if (!data.talk) {
      throw new Error(`${slidesPath}: missing 'talk:' frontmatter`)
    }

    const parsed = TalkSchema.safeParse(data.talk)
    if (!parsed.success) {
      throw new Error(
        `${slidesPath}: invalid frontmatter\n${parsed.error.issues
          .map((i) => `  - ${i.path.join('.')}: ${i.message}`)
          .join('\n')}`
      )
    }

    const t = parsed.data
    if (t.slug !== slug) {
      throw new Error(`${slidesPath}: slug "${t.slug}" must match folder name "${slug}"`)
    }

    if (t.draft) continue

    entries.push({
      slug: t.slug,
      title: typeof data.title === 'string' ? data.title : t.slug,
      description: t.description,
      tags: t.tags,
      event: t.event,
      date: t.date,
      links: t.links,
      url: `/talks/${t.slug}/`,
    })
  }

  return entries
}

// CLI entry：直接跑時，掃 slides/ 並寫到 web/data/talks.json
if (import.meta.main) {
  const manifest = await buildManifest('slides')
  manifest.sort((a, b) => b.date.localeCompare(a.date))
  await mkdir('web/data', { recursive: true })
  await writeFile('web/data/talks.json', JSON.stringify(manifest, null, 2) + '\n')
  console.log(`✓ ${manifest.length} talk(s) written to web/data/talks.json`)
}
