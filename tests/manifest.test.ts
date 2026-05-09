import { describe, expect, test } from 'bun:test'
import { buildManifest } from '../scripts/build-manifest'

describe('buildManifest', () => {
  test('valid slide → produces correct manifest entry', async () => {
    const manifest = await buildManifest('tests/fixtures/valid-slide')

    expect(manifest).toEqual([
      {
        slug: 'vue3-composition',
        title: 'Vue 3 Composition API 實戰',
        description: '從 Options API 換到 Composition API 過程踩到的坑。',
        tags: ['vue', 'workshop'],
        event: 'MOPCON 2025',
        date: '2025-08-23',
        links: { video: 'https://youtube.com/watch?v=xxx' },
        url: '/vue3-composition/',
      },
    ])
  })

  test('missing required field (tags) → throws with field name', async () => {
    await expect(buildManifest('tests/fixtures/missing-tags')).rejects.toThrow(/tags/)
  })

  test('slug does not match folder name → throws', async () => {
    await expect(buildManifest('tests/fixtures/slug-mismatch')).rejects.toThrow(
      /must match folder name/
    )
  })

  test('draft: true is excluded from manifest', async () => {
    const manifest = await buildManifest('tests/fixtures/with-draft')
    expect(manifest.map((t) => t.slug)).toEqual(['published'])
  })

  test('manifest is sorted by date desc when sorted by build-manifest CLI', async () => {
    const manifest = await buildManifest('tests/fixtures/sorting')
    manifest.sort((a, b) => b.date.localeCompare(a.date))
    expect(manifest.map((t) => t.slug)).toEqual(['new', 'old'])
  })
})
