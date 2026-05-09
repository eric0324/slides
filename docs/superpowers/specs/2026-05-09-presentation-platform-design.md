# 個人簡報平台設計文件

**日期**：2026-05-09
**作者**：Eric
**狀態**：設計確認中

## 1. 專案目標

打造一個**公開的個人簡報作品集網站**，同時也能作為**現場演講時的投影工具**。網站收錄過去與未來的所有簡報，首頁可依標籤瀏覽，點擊任一場 talk 進入該場簡報的播放介面。

新增一場簡報的成本必須低（一行 CLI 指令 + 寫 markdown），這是這個專案的設計核心。

### 範圍內

- 首頁：簡報列表、標籤單選篩選
- 每場簡報的獨立投影頁（含 Slidev 內建的鍵盤導覽、雷射筆、講者模式、PDF 匯出）
- CLI 指令快速建立新簡報
- 自動化 build & 部署到 GitHub Pages

### 明確不在範圍內

- 標題搜尋框
- 多選標籤篩選
- 後台 / CMS / 登入機制
- 統計、留言、分享數
- 自製 Slidev 主題（先用預設，未來可加）

## 2. 確認的決策

| 項目 | 決策 | 備註 |
|---|---|---|
| 用途 | 公開作品集 + 現場投影 | 影響：要 SEO 友善、要支援 Slidev 進階功能 |
| 前端框架 | Nuxt 4（SSG mode） | 用於首頁與標籤篩選 |
| 簡報引擎 | Slidev | 每場 talk 一個 `.md` 檔，frontmatter + Vue 元件 |
| Runtime / 套件管理 | Bun | 原生 TS 跑 script、裝得快 |
| 部署 | GitHub Pages | 純靜態，零成本 |
| 首頁排版 | 列表 + 簡介 + 標籤 chip + 場合 | 對應 brainstorming 排版 B |
| 新增工作流 | CLI 指令（`bun new-talk "..."`） | 自動建資料夾、預填 frontmatter |
| 標籤篩選 | 單選（一次只看一個 tag） | 個人作品集，多選不必要 |
| 搜尋 | 無 | 預期 talk 數量 10–30，標籤 + Cmd+F 已足 |
| Slidev 主題 | 預設主題 | 未來再客製化 |

## 3. 整體架構

### 3.1 目錄結構

```
sldies/
├── package.json
├── bun.lock
├── web/                          ← Nuxt 4 (SSG)
│   ├── nuxt.config.ts
│   ├── app/
│   │   ├── pages/
│   │   │   └── index.vue         ← 唯一頁面：列表 + 標籤篩選
│   │   ├── components/
│   │   │   ├── TalkRow.vue       ← 列表單筆
│   │   │   └── TagFilter.vue     ← 標籤 chip
│   │   ├── composables/
│   │   │   └── useTalks.ts       ← 載入 talks.json + 篩選邏輯
│   │   └── app.vue
│   ├── public/
│   │   └── CNAME                 ← (選用) custom domain
│   └── data/
│       └── talks.json            ← build 時產生（gitignored）
├── slides/
│   └── <slug>/
│       ├── slides.md             ← Slidev 簡報本體
│       ├── components/           ← 該 deck 專用 Vue 元件（選用）
│       └── public/               ← 該 deck 專用圖片資源（選用）
├── scripts/
│   ├── new-talk.ts               ← CLI：bun new-talk "..."
│   ├── build-manifest.ts         ← 產 talks.json + types
│   └── build-all.ts              ← 編排整個 build
├── templates/
│   └── slides.template.md        ← new-talk 用的模板
├── tests/
│   ├── manifest.test.ts
│   └── fixtures/
├── dist/                         ← build 輸出（gitignored）
└── .github/workflows/deploy.yml
```

### 3.2 分層責任

- **`web/`** — 「列表渲染器」。只認識 `talks.json`，不直接讀任何 markdown。
- **`slides/<slug>/`** — Slidev 領域，每個 deck 自治。
- **`scripts/`** — 黏合層。讓 `web/` 與 `slides/` 不需互相知道對方存在。

這個 boundary 讓未來想換 Slidev 為其他簡報引擎、或想換 Nuxt 為其他框架時，只動 `scripts/`。

## 4. 簡報 frontmatter Schema

每個 `slides/<slug>/slides.md` 的 frontmatter 是**首頁列表的唯一 source of truth**。

```yaml
---
# Slidev 標準欄位
theme: default
title: Vue 3 Composition API 實戰
info: |
  從 Options API 換到 Composition API 過程踩到的坑。
class: text-center
transition: slide-left
mdc: true

# 自訂欄位（用 talk: 物件包起，避免與 Slidev 命名衝突）
talk:
  slug: vue3-composition          # 必填，必須與資料夾名稱一致
  description: 從 Options API 換到 Composition API 過程踩到的坑，以及實戰上 composables 的設計準則。  # 必填，首頁列表的一句話描述
  tags: [vue, workshop]            # 必填，至少 1 個
  event: MOPCON 2025               # 必填，場合名稱
  date: 2025-08-23                 # 必填，ISO 格式（用於排序）
  draft: false                     # 選填，true 時不會出現在首頁
  links:                           # 選填
    video: https://youtube.com/...
    repo: https://github.com/...
---

# 第一張投影片
```

### 4.1 Zod schema（驗證用）

```ts
const TalkSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().min(1),
  tags: z.array(z.string()).min(1),
  event: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  draft: z.boolean().optional().default(false),
  links: z.object({
    video: z.string().url().optional(),
    repo: z.string().url().optional(),
  }).optional(),
})
```

### 4.2 額外驗證規則（schema 之外）

- `talk.slug` 必須等於資料夾名稱，否則 build 失敗
- 兩個 deck 不能撞 slug，否則 build 失敗
- `draft: true` 的 deck 不進 manifest，但仍被 Slidev build（你可以 preview）

## 5. 資料流

```
slides/<slug>/slides.md (frontmatter)
       │
       │ scripts/build-manifest.ts (gray-matter 解析 + Zod 驗證)
       ▼
web/data/talks.json   ← 純資料檔（陣列，按 date 由新到舊）
       │
       │ Nuxt build time import
       ▼
useTalks() composable ← 載入 + 篩選邏輯
       │
       ▼
pages/index.vue       ← 渲染列表
```

### 5.1 `talks.json` 結構

```json
[
  {
    "slug": "vue3-composition",
    "title": "Vue 3 Composition API 實戰",
    "description": "從 Options API 換到 Composition API…",
    "tags": ["vue", "workshop"],
    "event": "MOPCON 2025",
    "date": "2025-08-23",
    "links": { "video": "https://..." },
    "url": "/talks/vue3-composition/"
  }
]
```

### 5.2 `useTalks.ts` 的形狀

```ts
import talksData from '~/data/talks.json'

export interface Talk {
  slug: string
  title: string
  description: string
  tags: string[]
  event: string
  date: string
  links?: { video?: string; repo?: string }
  url: string
}

export function useTalks() {
  const talks = talksData as Talk[]
  const selectedTag = useState<string | null>('selectedTag', () => null)

  const allTags = computed(() =>
    [...new Set(talks.flatMap(t => t.tags))].sort()
  )

  const filteredTalks = computed(() => {
    const list = selectedTag.value
      ? talks.filter(t => t.tags.includes(selectedTag.value!))
      : talks
    return [...list].sort((a, b) => b.date.localeCompare(a.date))
  })

  return { talks, allTags, selectedTag, filteredTalks }
}
```

### 5.3 標籤狀態與 URL 同步

`selectedTag` 透過 query param `?tag=<name>` 與 URL 同步，方便分享「已篩選」的連結。

- 進站時：讀 `route.query.tag` 初始化 `selectedTag`
- 點 tag chip：`router.push({ query: { tag } })`
- 點「全部」：`router.push({ query: {} })`
- 帶不存在的 tag（typo / 已刪除）：UI 顯示「沒有符合條件的 talk」+「清除篩選」按鈕

### 5.4 簡報 URL 怎麼解析

使用者在首頁點某個 talk → `<a href="/talks/vue3-composition/">` → 實際命中 `dist/talks/vue3-composition/index.html`，那是 Slidev build 出來的靜態頁面。Nuxt 完全不接管 `/talks/` 底下的 routing，純粹當外部連結處理。

## 6. CLI 工具

### 6.1 `bun new-talk "<title>"` 行為

```
$ bun new-talk "Vue 3 Composition API 實戰"

? Slug (URL 用，已自動產生): vue3-composition-api
? Tags (逗號分隔): vue, workshop
? Event (場合名稱): MOPCON 2025
? Date (預設今天) [2026-05-09]:

✓ slides/vue3-composition-api/ 已建立
✓ slides.md frontmatter 已預填
✓ 開啟 dev server: bun dev:slide vue3-composition-api
```

### 6.2 Slug 自動產生規則

- 英文 / 數字輸入 → kebab-case，去掉特殊字元
- 中文輸入 → 不亂猜拼音，直接提示「請手動輸入 slug」
- 衝突（已存在同名資料夾）→ 加數字後綴 `-2`、`-3`

### 6.3 模板來源

`templates/slides.template.md`，包含：
- 已預填的 frontmatter（含 `talk:` 區塊，欄位用使用者輸入填入）
- 一張封面投影片
- 一張示範用 `---` 分頁
- 註解寫上 Slidev 常用 layout 與 syntax 的官方連結

### 6.4 互動式提示套件

[`@clack/prompts`](https://github.com/natemoo-re/clack)（小、好看、TS-friendly）。

### 6.5 其他開發指令

```
bun run dev               # Nuxt dev server（首頁）
bun dev:slide <slug>      # 啟某場簡報的 Slidev dev server
bun new-talk "<title>"    # 建新簡報
bun run build             # Build 全部
bun run preview           # 本地預覽 build 結果
bun test                  # 跑 manifest 測試
```

## 7. Build 流程

### 7.1 `scripts/build-all.ts` 步驟

```
1. clean dist/
2. bun scripts/build-manifest.ts
   ├─ glob slides/*/slides.md
   ├─ 每個檔案：用 gray-matter 解析 frontmatter
   ├─ Zod 驗證 → 失敗就 throw
   ├─ 過濾 talk.draft === true
   ├─ 寫入 web/data/talks.json
   └─ 同時寫一份 web/types/talks.d.ts
3. cd web && bunx nuxi generate
   └─ 輸出到 web/.output/public/
4. cp -r web/.output/public/* dist/
5. for each slide in slides/<slug>/:  (Promise.all 平行)
     bunx slidev build slides/<slug>/slides.md \
       --base /talks/<slug>/ \
       --out dist/talks/<slug>/
6. 寫入 dist/.nojekyll  (GH Pages 必要)
7. 若 web/public/CNAME 存在 → 已被 Nuxt 複製進 dist/
```

### 7.2 Build 失敗的常見原因（皆 fail fast）

- frontmatter 缺必填欄位 → manifest step 報哪個檔哪個欄位
- slug 與資料夾名稱不一致 → manifest step 報錯
- 兩個 deck 撞 slug → manifest step 報錯
- Slidev build 任一個失敗 → workflow fail，訊息原樣輸出

## 8. CI/CD

`.github/workflows/deploy.yml`：

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

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install --frozen-lockfile
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

GitHub repo 設定：Settings → Pages → Source 設為 "GitHub Actions"。

## 9. 錯誤處理策略

純靜態 + 內容由作者完全掌控 → **大多數錯誤應在 build time 被擋下**，runtime defensive 程式碼極少。

| 層 | 錯誤類型 | 處理 |
|---|---|---|
| Frontmatter 解析 | YAML 語法錯 | gray-matter throw，build 中斷 |
| Schema 驗證 | 欄位缺漏、型別錯、slug 衝突 | Zod 驗證失敗，build 中斷，列出每個違規 |
| Slidev build | 簡報內容語法錯 | Slidev CLI 非 0 exit，build-all 原樣 propagate |
| Nuxt build | 元件錯誤 | nuxi 直接 fail |
| Runtime（瀏覽器） | URL 帶不存在的 tag | UI 顯示空狀態 + 「清除篩選」按鈕 |

## 10. 測試策略

只測 `build-manifest.ts`（唯一寫資料邏輯的程式碼），其他都是組裝既有工具。

```
tests/
├── manifest.test.ts
└── fixtures/
    ├── valid-slide.md
    ├── invalid-missing-tags.md
    ├── invalid-slug-mismatch.md
    └── duplicate-slug-a.md / duplicate-slug-b.md
```

測試清單：
1. valid frontmatter → 產生對應 manifest entry
2. 缺必填欄位 → throw 含欄位名的錯誤
3. slug 與資料夾名不符 → throw
4. 兩個 deck 撞 slug → throw
5. `draft: true` → 不出現在 manifest，但仍可被 Slidev build
6. 排序：依 `date` 由新到舊

用 `bun test` 跑，不需要其他 framework。

首頁元件不寫單元測試（一個 `v-for` + 一個 `filter` 太簡單），靠 dev server + 人眼驗證。

## 11. 主要相依套件

| 套件 | 用途 |
|---|---|
| `nuxt` (^4) | 首頁框架 |
| `@slidev/cli` | 簡報引擎 |
| `@slidev/theme-default` | 預設主題 |
| `gray-matter` | 解析 frontmatter |
| `zod` | Schema 驗證 |
| `@clack/prompts` | CLI 互動提示 |

不引入：`@nuxt/content`（過度工程）、`inquirer`（被 @clack/prompts 取代）、tsx / ts-node（被 Bun 取代）。

## 12. 開放問題（未來可能要處理）

以下是 spec 範圍之外、但日後可能會想加的功能。**現階段不實作**：

- 自製 Slidev 主題（與首頁視覺統一）
- 多選標籤、AND/OR 篩選
- 標題搜尋框
- 封面圖（cover image）
- OG image 自動產生（每場 talk 一張，分享到社群用）
- RSS / Atom feed
- 簡報觀看數統計（含外部分析工具）
