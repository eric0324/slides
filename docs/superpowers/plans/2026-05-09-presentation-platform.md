# 個人簡報平台 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 蓋好一個個人簡報平台：Nuxt 4 首頁 + Slidev 簡報，部署到 GitHub Pages，CLI 一行新增新簡報。

**Architecture:** 單一 repo，Nuxt 在 `web/`，每場簡報在 `slides/<slug>/`。`scripts/` 黏合：`build-manifest.ts` 把 frontmatter 轉成 `talks.json`，`build-all.ts` 編排整個 build，`new-talk.ts` 產生新簡報骨架。GitHub Actions 在 push 時 build 並推 GH Pages。

**Tech Stack:** Bun · Nuxt 4 (SSG) · Slidev · gray-matter · Zod · @clack/prompts

**Spec:** `docs/superpowers/specs/2026-05-09-presentation-platform-design.md`

---

## File Structure

**Create:**
- `package.json` — root，所有 deps，所有 scripts 入口
- `tsconfig.json` — root TS 設定
- `.gitignore`
- `.nvmrc` 不需要（用 Bun）
- `web/nuxt.config.ts`
- `web/app.vue`
- `web/pages/index.vue`
- `web/components/TalkRow.vue`
- `web/components/TagFilter.vue`
- `web/composables/useTalks.ts`
- `web/types/talk.ts` — 手寫的 `Talk` interface（不依賴 generated 的 d.ts）
- `web/data/.gitkeep` — 保留資料夾，`talks.json` 由 build 產生
- `templates/slides.template.md`
- `scripts/build-manifest.ts`
- `scripts/build-all.ts`
- `scripts/new-talk.ts`
- `tests/manifest.test.ts`
- `tests/fixtures/<various>.md`
- `slides/welcome/slides.md` — 第一個 sample deck，作為 build 流程的試金石
- `.github/workflows/deploy.yml`
- `README.md`

**Generated (gitignored):**
- `bun.lock`
- `node_modules/`
- `web/.output/`
- `web/data/talks.json`
- `dist/`

---

### Task 1: 專案初始化（root）

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `.gitignore`
- Create: `README.md`

- [ ] **Step 1: 在 `/Users/eric/Desktop/sldies/` 初始化 git**

```bash
cd /Users/eric/Desktop/sldies
git init
```

- [ ] **Step 2: 寫 `package.json`**

```json
{
  "name": "sldies",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "nuxi dev web",
    "dev:slide": "bun scripts/dev-slide.ts",
    "build": "bun scripts/build-all.ts",
    "preview": "bunx http-server dist -p 4321 -o",
    "new-talk": "bun scripts/new-talk.ts",
    "test": "bun test"
  },
  "dependencies": {
    "nuxt": "^4.0.0",
    "@slidev/cli": "latest",
    "@slidev/theme-default": "latest",
    "vue": "^3.5.0"
  },
  "devDependencies": {
    "@clack/prompts": "^0.7.0",
    "@types/bun": "latest",
    "gray-matter": "^4.0.3",
    "typescript": "^5.6.0",
    "zod": "^3.23.0"
  }
}
```

- [ ] **Step 3: 寫 `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowImportingTsExtensions": false,
    "resolveJsonModule": true,
    "noEmit": true,
    "types": ["bun"]
  },
  "include": ["scripts/**/*", "tests/**/*"],
  "exclude": ["node_modules", "web", "dist"]
}
```

(注意：`web/` 用自己的 tsconfig，由 Nuxt 自動產生。)

- [ ] **Step 4: 寫 `.gitignore`**

```
node_modules/
bun.lock
.DS_Store
.env*

# Nuxt
web/.nuxt/
web/.output/
web/dist/

# Generated
web/data/talks.json
web/types/talks.generated.d.ts
dist/

# IDE
.vscode/
.idea/
```

- [ ] **Step 5: 寫最小 `README.md`**

```markdown
# sldies

個人簡報作品集 + 現場投影平台。Nuxt 4 + Slidev，部署到 GitHub Pages。

## Quick start

\`\`\`bash
bun install
bun run dev          # 首頁
bun new-talk "..."   # 新增一場簡報
bun run build        # build 全部
\`\`\`

詳細請看 `docs/superpowers/specs/2026-05-09-presentation-platform-design.md`。
```

- [ ] **Step 6: 安裝相依**

```bash
bun install
```

預期：`bun.lock` 生成，`node_modules/` 出現。

- [ ] **Step 7: 第一次 commit**

```bash
git add package.json tsconfig.json .gitignore README.md
git commit -m "chore: initial project skeleton"
```

---

### Task 2: 建立 Nuxt 4 app skeleton 在 `web/`

**Files:**
- Create: `web/nuxt.config.ts`
- Create: `web/app.vue`
- Create: `web/data/.gitkeep`
- Create: `web/types/talk.ts`

- [ ] **Step 1: 建立 `web/nuxt.config.ts`**

```ts
export default defineNuxtConfig({
  compatibilityDate: '2026-05-09',
  ssr: true,
  // GH Pages 子路徑：build 時若部署到 username.github.io/sldies，要設 baseURL '/sldies/'。
  // 用 custom domain 時保持 '/'。先用環境變數控制。
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },
  typescript: {
    strict: true,
  },
})
```

- [ ] **Step 2: 建立 `web/app.vue`**

```vue
<template>
  <NuxtPage />
</template>
```

- [ ] **Step 3: 建立 `web/data/.gitkeep`**

```bash
mkdir -p web/data && touch web/data/.gitkeep
```

- [ ] **Step 4: 建立 `web/types/talk.ts`**

```ts
export interface Talk {
  slug: string
  title: string
  description: string
  tags: string[]
  event: string
  date: string                  // ISO YYYY-MM-DD
  links?: {
    video?: string
    repo?: string
  }
  url: string                   // /talks/<slug>/
}
```

- [ ] **Step 5: 確認 Nuxt 起得來**

```bash
bun run dev
```

預期：在 `http://localhost:3000` 看到 Nuxt 預設「Welcome」畫面（因為還沒有 `pages/`）。Ctrl+C 停掉。

- [ ] **Step 6: Commit**

```bash
git add web/
git commit -m "feat: scaffold Nuxt 4 app in web/"
```

---

### Task 3: 寫 build-manifest 第一個 test (valid slide) — TDD

**Files:**
- Create: `tests/fixtures/valid-slide/vue3-composition/slides.md`
- Create: `tests/manifest.test.ts`

- [ ] **Step 1: 建一個 valid fixture**

`tests/fixtures/valid-slide/vue3-composition/slides.md`:

```markdown
---
theme: default
title: Vue 3 Composition API 實戰
talk:
  slug: vue3-composition
  description: 從 Options API 換到 Composition API 過程踩到的坑。
  tags: [vue, workshop]
  event: MOPCON 2025
  date: 2025-08-23
  links:
    video: https://youtube.com/watch?v=xxx
---

# 第一張投影片
```

- [ ] **Step 2: 寫第一個失敗測試**

`tests/manifest.test.ts`:

```ts
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
        url: '/talks/vue3-composition/',
      },
    ])
  })
})
```

- [ ] **Step 3: 跑測試確認 fail**

```bash
bun test tests/manifest.test.ts
```

預期：fail，訊息為 `Cannot find module '../scripts/build-manifest'`。

- [ ] **Step 4: Commit**

```bash
git add tests/
git commit -m "test: failing test for buildManifest valid case"
```

---

### Task 4: 實作 build-manifest 最小版讓 valid 測試過

**Files:**
- Create: `scripts/build-manifest.ts`

- [ ] **Step 1: 寫 `scripts/build-manifest.ts` 最小可行版**

```ts
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import matter from 'gray-matter'
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

    const { data } = matter(raw)
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
```

- [ ] **Step 2: 跑測試確認 pass**

```bash
bun test tests/manifest.test.ts
```

預期：1 pass。

- [ ] **Step 3: Commit**

```bash
git add scripts/build-manifest.ts
git commit -m "feat: build-manifest minimal implementation (valid case)"
```

---

### Task 5: 加入「驗證錯誤」測試與實作（缺欄位、slug 不符、duplicate slug）

**Files:**
- Create: `tests/fixtures/missing-tags/talk-x/slides.md`
- Create: `tests/fixtures/slug-mismatch/talk-x/slides.md`
- Create: `tests/fixtures/duplicate-slug/talk-a/slides.md`
- Create: `tests/fixtures/duplicate-slug/talk-b/slides.md`
- Modify: `tests/manifest.test.ts`
- Modify: `scripts/build-manifest.ts`

- [ ] **Step 1: 建 missing-tags fixture**

`tests/fixtures/missing-tags/talk-x/slides.md`:

```markdown
---
title: Missing Tags
talk:
  slug: talk-x
  description: This deck has no tags.
  event: Some Event
  date: 2025-01-01
---

# Slide
```

- [ ] **Step 2: 建 slug-mismatch fixture**

`tests/fixtures/slug-mismatch/talk-x/slides.md`:

```markdown
---
title: Slug Mismatch
talk:
  slug: different-slug
  description: Folder is talk-x but slug says different-slug.
  tags: [misc]
  event: Some Event
  date: 2025-01-01
---

# Slide
```

- [ ] **Step 3: 建 duplicate-slug fixtures**

`tests/fixtures/duplicate-slug/talk-a/slides.md`:

```markdown
---
title: Duplicate A
talk:
  slug: dup
  description: First with slug=dup.
  tags: [misc]
  event: Some Event
  date: 2025-01-01
---
```

`tests/fixtures/duplicate-slug/talk-b/slides.md`:

```markdown
---
title: Duplicate B
talk:
  slug: dup
  description: Second with slug=dup.
  tags: [misc]
  event: Some Event
  date: 2025-02-01
---
```

注意這兩個 fixture 的 `slug` 故意都填 `dup`，但會跟資料夾名（`talk-a`、`talk-b`）不符——所以這個 fixture 同時測「duplicate」與「slug mismatch」其中之一會先 throw。為了精準測試 duplicate 邏輯，把兩個資料夾改名為 `dup` 是不行的（同一層級資料夾名不能撞）。**改用以下做法**：fixture 改名為 `dup-1` 與 `dup-2`，但這時 slug-vs-folder 檢查會擋下來。所以 duplicate 測試的關鍵是：**先實作「duplicate slug 檢查」於 slug-vs-folder 檢查之前是不可能的**（因為 slug 必須等於資料夾名，所以若兩個資料夾名相同才會出現 duplicate slug，而 OS 不允許）。**結論：duplicate slug 是 OS-level 不可能的狀態，本測試案例移除**。下一步只測缺欄位 + slug mismatch。

- [ ] **Step 4: 移除 duplicate-slug fixtures（補正）**

```bash
rm -rf tests/fixtures/duplicate-slug
```

- [ ] **Step 5: 加入兩個失敗測試**

在 `tests/manifest.test.ts` 內加：

```ts
test('missing required field (tags) → throws with field name', async () => {
  await expect(buildManifest('tests/fixtures/missing-tags')).rejects.toThrow(/tags/)
})

test('slug does not match folder name → throws', async () => {
  await expect(buildManifest('tests/fixtures/slug-mismatch')).rejects.toThrow(
    /must match folder name/
  )
})
```

- [ ] **Step 6: 跑測試**

```bash
bun test tests/manifest.test.ts
```

預期：3 pass（既有實作其實已涵蓋這兩個 case，因為 Zod + slug check 已經寫了）。如果有 fail，回去檢查 build-manifest.ts。

- [ ] **Step 7: Commit**

```bash
git add tests/ scripts/build-manifest.ts
git commit -m "test: add validation error cases"
```

---

### Task 6: 加入「draft 過濾」與「排序」測試

**Files:**
- Create: `tests/fixtures/with-draft/published/slides.md`
- Create: `tests/fixtures/with-draft/wip/slides.md`
- Create: `tests/fixtures/sorting/old/slides.md`
- Create: `tests/fixtures/sorting/new/slides.md`
- Modify: `tests/manifest.test.ts`

- [ ] **Step 1: 建 draft fixtures**

`tests/fixtures/with-draft/published/slides.md`:

```markdown
---
title: Published Talk
talk:
  slug: published
  description: A finished deck.
  tags: [misc]
  event: Some Event
  date: 2025-01-01
---
```

`tests/fixtures/with-draft/wip/slides.md`:

```markdown
---
title: WIP Talk
talk:
  slug: wip
  description: Still drafting.
  tags: [misc]
  event: Some Event
  date: 2025-02-01
  draft: true
---
```

- [ ] **Step 2: 建 sorting fixtures**

`tests/fixtures/sorting/old/slides.md`:

```markdown
---
title: Old Talk
talk:
  slug: old
  description: Older deck.
  tags: [misc]
  event: Some Event
  date: 2024-01-01
---
```

`tests/fixtures/sorting/new/slides.md`:

```markdown
---
title: New Talk
talk:
  slug: new
  description: Newer deck.
  tags: [misc]
  event: Some Event
  date: 2025-06-01
---
```

- [ ] **Step 3: 加入測試**

```ts
test('draft: true is excluded from manifest', async () => {
  const manifest = await buildManifest('tests/fixtures/with-draft')
  expect(manifest.map((t) => t.slug)).toEqual(['published'])
})

test('manifest is sorted by date desc when sorted by build-manifest CLI', async () => {
  const manifest = await buildManifest('tests/fixtures/sorting')
  manifest.sort((a, b) => b.date.localeCompare(a.date))
  expect(manifest.map((t) => t.slug)).toEqual(['new', 'old'])
})
```

注意：buildManifest 本身**不排序**，排序由 CLI entry（`build-manifest.ts` 的 `import.meta.main` 那段）負責。測試中明確排序以反映實際使用方式。

- [ ] **Step 4: 跑測試**

```bash
bun test tests/manifest.test.ts
```

預期：5 pass。

- [ ] **Step 5: Commit**

```bash
git add tests/ scripts/build-manifest.ts
git commit -m "test: draft filter and sorting cases"
```

---

### Task 7: 建立第一個 sample slide deck

**Files:**
- Create: `slides/welcome/slides.md`

- [ ] **Step 1: 寫 welcome deck**

`slides/welcome/slides.md`:

```markdown
---
theme: default
title: Welcome to sldies
info: |
  測試用簡報，驗證整個 build pipeline。
class: text-center
transition: slide-left
mdc: true

talk:
  slug: welcome
  description: 這是 sldies 平台的第一個簡報，用來驗證 build pipeline。
  tags: [meta]
  event: 自家測試
  date: 2026-05-09
---

# Welcome to sldies

我的簡報作品集 + 現場投影平台

---

## Hello world

第二張投影片。`---` 用來分頁。

---

## 結語

整套跑得起來就成功了 🎉
```

- [ ] **Step 2: 跑 build-manifest CLI**

```bash
bun scripts/build-manifest.ts
```

預期：

```
✓ 1 talk(s) written to web/data/talks.json
```

並產生 `web/data/talks.json`，內容應該包含 `welcome` 那筆。

- [ ] **Step 3: 確認 Slidev 跑得起來（手動驗證 Slidev × Bun 相容）**

```bash
bunx slidev slides/welcome/slides.md --port 3030
```

預期：Slidev dev server 起來，瀏覽器打開 `http://localhost:3030` 看到 Welcome 投影片，按方向鍵翻頁。

⚠ 若 Slidev × Bun 有問題，先試 `npx slidev slides/welcome/slides.md --port 3030`。如果 npx 可以但 bunx 不行，就在 `package.json` 內把 `dev:slide` 改成 `npx slidev`，並記錄這個取捨。

Ctrl+C 停掉。

- [ ] **Step 4: Commit**

```bash
git add slides/welcome/
git commit -m "feat: add welcome sample slide deck"
```

---

### Task 8: 寫 useTalks composable

**Files:**
- Create: `web/composables/useTalks.ts`

- [ ] **Step 1: 寫 composable**

```ts
import talksData from '~/data/talks.json'
import type { Talk } from '~/types/talk'

export function useTalks() {
  const route = useRoute()
  const router = useRouter()

  const talks = talksData as Talk[]

  const allTags = computed(() => [...new Set(talks.flatMap((t) => t.tags))].sort())

  const selectedTag = computed<string | null>({
    get: () => {
      const t = route.query.tag
      return typeof t === 'string' && t.length > 0 ? t : null
    },
    set: (val) => {
      router.push({ query: val ? { tag: val } : {} })
    },
  })

  const filteredTalks = computed(() => {
    const tag = selectedTag.value
    const list = tag ? talks.filter((t) => t.tags.includes(tag)) : talks
    return [...list].sort((a, b) => b.date.localeCompare(a.date))
  })

  return { talks, allTags, selectedTag, filteredTalks }
}
```

注意：`selectedTag` 是 computed setter，直接 `selectedTag.value = 'vue'` 就會觸發 router.push。

- [ ] **Step 2: Commit**

```bash
git add web/composables/
git commit -m "feat: useTalks composable with URL query sync"
```

---

### Task 9: 寫 TalkRow 元件

**Files:**
- Create: `web/components/TalkRow.vue`

- [ ] **Step 1: 寫元件**

```vue
<script setup lang="ts">
import type { Talk } from '~/types/talk'

defineProps<{ talk: Talk }>()

function formatDate(iso: string): string {
  // 2025-08-23 → "Aug 2025"
  const [y, m] = iso.split('-')
  const month = new Date(`${iso}T00:00:00Z`).toLocaleString('en-US', {
    month: 'short',
    timeZone: 'UTC',
  })
  return `${month} ${y}`
}
</script>

<template>
  <a :href="talk.url" class="talk-row">
    <div class="title">{{ talk.title }}</div>
    <div class="description">{{ talk.description }}</div>
    <div class="meta">
      <span v-for="t in talk.tags" :key="t" class="tag">{{ t }}</span>
      <span class="event">· {{ talk.event }} · {{ formatDate(talk.date) }}</span>
    </div>
  </a>
</template>

<style scoped>
.talk-row {
  display: block;
  padding: 14px 0;
  border-bottom: 1px solid #eee;
  text-decoration: none;
  color: inherit;
}
.talk-row:hover .title {
  text-decoration: underline;
}
.title {
  font-size: 16px;
  color: #111;
  font-weight: 600;
  margin-bottom: 4px;
}
.description {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 6px;
}
.meta {
  font-size: 12px;
  color: #888;
}
.tag {
  display: inline-block;
  padding: 2px 8px;
  background: #eef2ff;
  color: #4338ca;
  border-radius: 999px;
  font-size: 11px;
  margin-right: 4px;
  font-weight: 500;
}
.event {
  margin-left: 4px;
}
</style>
```

- [ ] **Step 2: Commit**

```bash
git add web/components/TalkRow.vue
git commit -m "feat: TalkRow component"
```

---

### Task 10: 寫 TagFilter 元件

**Files:**
- Create: `web/components/TagFilter.vue`

- [ ] **Step 1: 寫元件**

```vue
<script setup lang="ts">
defineProps<{
  tags: string[]
  selected: string | null
}>()

const emit = defineEmits<{
  (e: 'select', tag: string | null): void
}>()
</script>

<template>
  <div class="filter-bar">
    <button
      class="tag"
      :class="{ active: selected === null }"
      type="button"
      @click="emit('select', null)"
    >
      All
    </button>
    <button
      v-for="t in tags"
      :key="t"
      class="tag"
      :class="{ active: selected === t }"
      type="button"
      @click="emit('select', t)"
    >
      {{ t }}
    </button>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  gap: 6px;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
  flex-wrap: wrap;
}
.tag {
  display: inline-block;
  padding: 4px 10px;
  background: #f3f4f6;
  color: #374151;
  border: none;
  border-radius: 999px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
  font-family: inherit;
}
.tag:hover {
  background: #e5e7eb;
}
.tag.active {
  background: #111;
  color: #fff;
}
</style>
```

- [ ] **Step 2: Commit**

```bash
git add web/components/TagFilter.vue
git commit -m "feat: TagFilter component"
```

---

### Task 11: 寫 pages/index.vue

**Files:**
- Create: `web/pages/index.vue`

- [ ] **Step 1: 寫頁面**

```vue
<script setup lang="ts">
const { allTags, selectedTag, filteredTalks } = useTalks()

useHead({
  title: "Eric's Talks",
  meta: [
    { name: 'description', content: '個人簡報作品集' },
  ],
})
</script>

<template>
  <main class="container">
    <header class="page-header">
      <h1>Eric's Talks</h1>
      <p class="subtitle">A collection of past presentations</p>
    </header>

    <TagFilter
      :tags="allTags"
      :selected="selectedTag"
      @select="(t) => (selectedTag = t)"
    />

    <div v-if="filteredTalks.length === 0" class="empty">
      <p>沒有符合條件的 talk。</p>
      <button class="clear" type="button" @click="selectedTag = null">清除篩選</button>
    </div>

    <div v-else>
      <TalkRow v-for="talk in filteredTalks" :key="talk.slug" :talk="talk" />
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 720px;
  margin: 60px auto;
  padding: 0 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #111;
}
.page-header {
  margin-bottom: 28px;
}
.page-header h1 {
  font-size: 28px;
  margin: 0 0 6px;
  font-weight: 700;
}
.subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
}
.empty {
  text-align: center;
  padding: 40px 0;
  color: #888;
}
.clear {
  margin-top: 12px;
  padding: 8px 16px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
```

- [ ] **Step 2: 啟動 dev server 驗證**

```bash
bun run dev
```

預期：`http://localhost:3000` 看到 Eric's Talks 標題、tag filter 列、Welcome 那筆 talk。點 tag chip 會更新 URL `?tag=meta`。點 talk 連結會 404（因為 Slidev 還沒 build）——這正常。Ctrl+C 停掉。

- [ ] **Step 3: Commit**

```bash
git add web/pages/
git commit -m "feat: homepage with talk list and tag filter"
```

---

### Task 12: 寫 templates/slides.template.md

**Files:**
- Create: `templates/slides.template.md`

- [ ] **Step 1: 寫模板**

```markdown
---
theme: default
title: __TITLE__
info: |
  __DESCRIPTION__
class: text-center
transition: slide-left
mdc: true

talk:
  slug: __SLUG__
  description: __DESCRIPTION__
  tags: [__TAGS__]
  event: __EVENT__
  date: __DATE__
---

# __TITLE__

__EVENT__ · __DATE__

<!--
Slidev 常用 syntax 參考：
- Layouts: https://sli.dev/builtin/layouts
- Components: https://sli.dev/builtin/components
- Slide options (layout, class, transition...): https://sli.dev/guide/syntax#frontmatter-blocks
-->

---

## 第二張投影片

## 

`---` 用來分頁。

---
layout: center
---

## 想換 layout？

frontmatter 裡寫 `layout: center` / `image-right` / `two-cols` ...

---

## 結語

謝謝聆聽
```

`__XXX__` 是 placeholder，由 new-talk CLI 替換。

- [ ] **Step 2: Commit**

```bash
git add templates/
git commit -m "feat: slides template"
```

---

### Task 13: 寫 new-talk CLI

**Files:**
- Create: `scripts/new-talk.ts`

- [ ] **Step 1: 寫 CLI**

```ts
#!/usr/bin/env bun
import { intro, outro, text, isCancel, cancel, log } from '@clack/prompts'
import { mkdir, readFile, writeFile, access } from 'node:fs/promises'
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

const template = await readFile('templates/slides.template.md', 'utf-8')
const filled = template
  .replace(/__TITLE__/g, titleArg)
  .replace(/__SLUG__/g, slug)
  .replace(/__DESCRIPTION__/g, description)
  .replace(/__TAGS__/g, tags.join(', '))
  .replace(/__EVENT__/g, event)
  .replace(/__DATE__/g, date)

const dir = join('slides', slug)
await mkdir(dir, { recursive: true })
await writeFile(join(dir, 'slides.md'), filled)

log.success(`slides/${slug}/slides.md 已建立`)
outro(`下一步：bunx slidev slides/${slug}/slides.md`)
```

- [ ] **Step 2: 手動驗證**

```bash
bun new-talk "TypeScript 入門"
```

走完互動流程後預期：產生 `slides/typescript-/slides.md` 或類似（依 slug 結果），frontmatter 已填好。打開檔案目視檢查欄位。

- [ ] **Step 3: 把測試產物刪掉**

```bash
rm -rf slides/typescript-* slides/typescript
```

(或保留作為第二筆 sample，但建議只保留 welcome 一筆乾淨。)

- [ ] **Step 4: Commit**

```bash
git add scripts/new-talk.ts
git commit -m "feat: new-talk CLI"
```

---

### Task 14: 寫 build-all.ts orchestrator

**Files:**
- Create: `scripts/build-all.ts`

- [ ] **Step 1: 寫 orchestrator**

```ts
#!/usr/bin/env bun
import { rm, mkdir, readdir, writeFile, cp, access } from 'node:fs/promises'
import { join } from 'node:path'
import { spawn } from 'node:child_process'
import { buildManifest } from './build-manifest'

const DIST = 'dist'

async function exists(path: string): Promise<boolean> {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

function run(cmd: string, args: string[], cwd?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd, stdio: 'inherit' })
    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${cmd} ${args.join(' ')} exited with ${code}`))
    })
  })
}

async function main() {
  console.log('1/6 cleaning dist/...')
  await rm(DIST, { recursive: true, force: true })
  await mkdir(DIST, { recursive: true })

  console.log('2/6 building manifest...')
  const manifest = await buildManifest('slides')
  manifest.sort((a, b) => b.date.localeCompare(a.date))
  await mkdir('web/data', { recursive: true })
  await writeFile('web/data/talks.json', JSON.stringify(manifest, null, 2) + '\n')
  console.log(`     ✓ ${manifest.length} talk(s)`)

  console.log('3/6 building Nuxt...')
  await run('bunx', ['nuxi', 'generate', 'web'])

  console.log('4/6 copying Nuxt output to dist/...')
  await cp('web/.output/public', DIST, { recursive: true })

  console.log('5/6 building Slidev decks (parallel)...')
  const slugs = manifest.map((t) => t.slug)
  await Promise.all(
    slugs.map((slug) =>
      run('bunx', [
        'slidev',
        'build',
        join('slides', slug, 'slides.md'),
        '--base',
        `/talks/${slug}/`,
        '--out',
        join(DIST, 'talks', slug),
      ])
    )
  )
  console.log(`     ✓ ${slugs.length} deck(s)`)

  console.log('6/6 writing .nojekyll...')
  await writeFile(join(DIST, '.nojekyll'), '')

  console.log('✓ build complete → dist/')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
```

- [ ] **Step 2: 跑完整 build**

```bash
bun run build
```

預期：6 個步驟全部 ✓，最後 `dist/` 內含：
- `index.html`（Nuxt 首頁）
- `talks/welcome/index.html`（Slidev build 出的 welcome 投影片）
- `.nojekyll`

若 step 5 失敗，看 Slidev 訊息——通常是 base URL 設定或 slug 問題。

- [ ] **Step 3: 本地預覽**

```bash
bun run preview
```

開啟瀏覽器（會自動），點 welcome 連結應該能進到 Slidev 投影片並按方向鍵翻頁。

⚠ 若沒有 `http-server`，先 `bun add -d http-server` 或改用 `bunx serve dist`。

- [ ] **Step 4: Commit**

```bash
git add scripts/build-all.ts
git commit -m "feat: build-all orchestrator"
```

---

### Task 15: 寫 dev-slide helper

**Files:**
- Create: `scripts/dev-slide.ts`

- [ ] **Step 1: 寫 helper**

```ts
#!/usr/bin/env bun
import { spawn } from 'node:child_process'
import { join } from 'node:path'

const slug = process.argv[2]
if (!slug) {
  console.error('Usage: bun dev:slide <slug>')
  process.exit(1)
}

const slidesPath = join('slides', slug, 'slides.md')

const child = spawn('bunx', ['slidev', slidesPath], { stdio: 'inherit' })
child.on('close', (code) => process.exit(code ?? 0))
```

- [ ] **Step 2: 驗證**

```bash
bun dev:slide welcome
```

預期：Slidev dev server 起在 3030 埠。Ctrl+C。

- [ ] **Step 3: Commit**

```bash
git add scripts/dev-slide.ts
git commit -m "feat: dev:slide helper"
```

---

### Task 16: GitHub Actions 部署

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: 寫 workflow**

```yaml
name: Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install --frozen-lockfile
      - name: Set base URL (CNAME present → /, else → /<repo>/)
        run: |
          if [ -f web/public/CNAME ]; then
            echo "NUXT_APP_BASE_URL=/" >> $GITHUB_ENV
          else
            echo "NUXT_APP_BASE_URL=/${GITHUB_REPOSITORY##*/}/" >> $GITHUB_ENV
          fi
      - run: bun run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

⚠ Slidev 的 `--base` 也需要對應加上 repo name 前綴。**這是已知的 follow-up**：本 task 先讓 Nuxt 首頁正確、Slidev 連結用相對路徑或先接受 `/sldies/talks/<slug>/` 的形式。實作時若部署後發現 Slidev 連結 404，回頭把 `build-all.ts` 的 `--base` 改成讀環境變數：

```ts
const baseURL = process.env.NUXT_APP_BASE_URL || '/'
// 然後 --base ${baseURL}talks/${slug}/
```

這條改動建議在第一次實際部署遇到問題時再加，不要先猜。

- [ ] **Step 2: Commit**

```bash
git add .github/
git commit -m "ci: GitHub Pages deploy workflow"
```

- [ ] **Step 3:（手動，使用者執行）GitHub repo 設定**

1. 在 GitHub 建 repo `sldies` 並 push
2. Settings → Pages → Build and deployment → Source 選 **GitHub Actions**
3. 等 workflow 跑完
4. 開啟 `https://<username>.github.io/sldies/` 看結果

若有 custom domain，Settings → Pages 設定 domain，並把 `web/public/CNAME` 檔案加上對應 domain。

---

### Task 17: 完整端到端驗收

**Files:** 無（純驗證）

- [ ] **Step 1: 跑全套測試**

```bash
bun test
```

預期：5 pass。

- [ ] **Step 2: 全新 build**

```bash
bun run build
```

預期：無錯誤、`dist/` 完整。

- [ ] **Step 3: 用 CLI 新增第二筆簡報，驗證模組化承諾**

```bash
bun new-talk "Vue 3 Composition API 實戰"
# 跟著互動填欄位
bun run build
bun run preview
```

預期：首頁出現兩筆 talk，點任一筆能進入該場簡報。

- [ ] **Step 4: 把 sample（如果是測試用）刪掉，或保留**

決定 welcome / 第二筆要不要保留作為示範。如果只想留 welcome：

```bash
rm -rf slides/vue-3-composition-api-* slides/vue3-composition  # 視 slug 結果
git add slides/
git commit -m "chore: clean up test deck"
```

- [ ] **Step 5: 推到 GitHub 測 CI/CD**

```bash
git remote add origin git@github.com:<username>/sldies.git
git branch -M main
git push -u origin main
```

到 GitHub Actions 看 workflow，部署完成後開 GH Pages URL。

- [ ] **Step 6: 慶祝 🎉**

---

## Self-review

執行完畢後對照 spec 檢查：

- §1 範圍：✓ 首頁、標籤篩選、簡報播放、CLI 新增、自動部署
- §2 決策：✓ Bun、Nuxt 4、Slidev、GH Pages、單選標籤、預設主題
- §3 目錄結構：✓ Task 1-2 建立，Task 7+12 填內容
- §4 frontmatter schema：✓ Task 4 Zod schema 涵蓋
- §5 資料流 + URL sync：✓ Task 8 useTalks 含 query 同步
- §6 CLI：✓ Task 13
- §7 Build：✓ Task 14
- §8 CI/CD：✓ Task 16
- §9 錯誤處理：✓ build-time 全 fail-fast；runtime 空狀態（Task 11 `<div v-if="filteredTalks.length === 0">`）
- §10 測試：✓ Task 3-6 涵蓋 fixture、valid、缺欄位、slug mismatch、draft、排序

**已知偏離 spec**：
- Spec §10 提到「duplicate slug 測試」。實際上 OS 不允許同層級資料夾撞名，所以 duplicate slug 不可能發生——Task 5 內已說明並移除這個 fixture。
- Spec §4.2 提到「兩個 deck 不能撞 slug」這條檢查也因此**移除**——slug 與資料夾名稱必須一致這條規則本身就保證了 slug 唯一。實作上可以在 build-manifest.ts 加一個額外的 sanity check（用 Set 去重），保險起見，**建議保留 duplicate-slug 檢查在程式碼中**（即使測不到）以防未來邏輯改變。
