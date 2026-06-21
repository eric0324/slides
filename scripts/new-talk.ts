#!/usr/bin/env bun
import { intro, outro, text, isCancel, cancel, log } from '@clack/prompts'
import { mkdir, writeFile, access } from 'node:fs/promises'
import { join } from 'node:path'

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

async function exists(path: string): Promise<boolean> {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

async function uniqueSlug(base: string): Promise<string> {
  if (!base) return ''
  let slug = base
  let n = 2
  while (await exists(join('slides', slug))) {
    slug = `${base}-${n}`
    n++
  }
  return slug
}

const titleArg = process.argv[2]
if (!titleArg) {
  console.error('Usage: bun new-talk "<title>"')
  process.exit(1)
}

intro('🆕 New talk')

const initialSlug = slugify(titleArg)
let slug: string

if (!initialSlug) {
  const r = await text({
    message: 'Slug (URL 用，建議英文 / 數字 / 連字號)',
    validate: (v) => (/^[a-z0-9-]+$/.test(v) ? undefined : '只允許小寫英文、數字、連字號'),
  })
  if (isCancel(r)) {
    cancel('已取消')
    process.exit(0)
  }
  slug = await uniqueSlug(r)
} else {
  const proposed = await uniqueSlug(initialSlug)
  const r = await text({
    message: 'Slug',
    initialValue: proposed,
    validate: (v) => (/^[a-z0-9-]+$/.test(v) ? undefined : '只允許小寫英文、數字、連字號'),
  })
  if (isCancel(r)) {
    cancel('已取消')
    process.exit(0)
  }
  slug = r
}

if (await exists(join('slides', slug))) {
  cancel(`slides/${slug} 已存在`)
  process.exit(1)
}

const tagsRaw = await text({
  message: 'Tags (逗號分隔)',
  validate: (v) =>
    v
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean).length === 0
      ? '至少需要一個 tag'
      : undefined,
})
if (isCancel(tagsRaw)) {
  cancel('已取消')
  process.exit(0)
}
const tags = tagsRaw
  .split(',')
  .map((t) => t.trim())
  .filter(Boolean)

const event = await text({
  message: 'Event (場合名稱)',
  validate: (v) => (v.trim() ? undefined : '不能為空'),
})
if (isCancel(event)) {
  cancel('已取消')
  process.exit(0)
}

const today = new Date().toISOString().slice(0, 10)
const date = await text({
  message: 'Date (YYYY-MM-DD)',
  initialValue: today,
  validate: (v) => (/^\d{4}-\d{2}-\d{2}$/.test(v) ? undefined : '格式錯誤'),
})
if (isCancel(date)) {
  cancel('已取消')
  process.exit(0)
}

const description = await text({
  message: 'Description (一句話)',
  validate: (v) => (v.trim() ? undefined : '不能為空'),
})
if (isCancel(description)) {
  cancel('已取消')
  process.exit(0)
}

const filled = `---
theme: default
title: ${titleArg}
info: |
  ${description}
class: text-center
transition: slide-left
mdc: true
colorSchema: light

talk:
  description: ${description}
  tags: [${tags.join(', ')}]
  event: ${event}
  date: ${date}
---

# ${titleArg}

${event} · ${date}

<!--
Slidev 語法： https://sli.dev/guide/syntax
\`---\` 分頁；per-slide 選項放在 \`---\` 後的 frontmatter（layout: center / two-cols ...）。
-->

---

## 第二張投影片

\`---\` 用來分頁。

---
layout: center
---

## 結語

謝謝聆聽
`

const dir = join('slides', slug)
await mkdir(dir, { recursive: true })
await writeFile(join(dir, 'slides.md'), filled)

log.success(`slides/${slug}/slides.md 已建立`)
outro(`下一步：bunx slidev slides/${slug}/slides.md`)
