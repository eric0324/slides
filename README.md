# Slides

簡報作品集 + 現場投影平台。每場簡報都是一個 [Slidev](https://sli.dev) deck，部署到 GitHub Pages（自訂網域 `slides.ericwu.asia`）。

## Quick start

```bash
bun install
bun run dev:slide 2026/falcon-knowledge-base   # 開單一 deck（熱更新）
bun run build                                   # build 首頁 + 全部 deck → dist/
bun run preview                                 # 本機預覽整站（等同線上）
bun run new-talk "標題"                          # 產生新 deck 樣板
```

## 結構

每個 deck = 一個含 `slides.md` 的資料夾，依「年份／活動」分層放在 `slides/`：

```
slides/
└── 2026/
    ├── falcon-knowledge-base/slides.md
    ├── chatbot-second-brain/slides.md
    └── moe-camp/wordpress-workshop/
        ├── day1/slides.md
        ├── day2/slides.md
        └── day3/slides.md
```

- **網址 = 資料夾路徑**：`slides/2026/foo/bar/slides.md` → `/2026/foo/bar/`。
  搬資料夾就等於改網址，frontmatter 不用寫 slug。
- deck 內可放 `style.css`（Slidev 自動載入）、`global-bottom.vue`、`assets/` 圖檔。

### deck metadata

每個 `slides.md` 的 headmatter 要有 `talk:` 區塊：

```yaml
talk:
  description: 一句話描述
  tags: [tag1, tag2]
  event: 場合名稱
  date: 2026-08-03
  unlisted: true   # 選填：照常部署，但不出現在首頁清單
  draft: true      # 選填：完全不建置／不部署
```

## 建置流程（`bun run build` → `scripts/build-all.ts`）

1. `build-manifest.ts` 遞迴掃 `slides/**/slides.md`，slug 由資料夾路徑推導。
2. `build-index.ts` 產生靜態首頁 `index.html`（列出非 unlisted 的 deck，含標籤篩選）。
3. 每個 deck 各自 `slidev build --base /<slug>/ --out dist/<slug>`。
4. 寫入 `CNAME`、`.nojekyll`。

## 注意：Slidev 子路徑翻頁 patch

部署在子路徑（`/<slug>/`）時，Slidev 預設導覽會把 base 疊兩層（`/deck/deck/2` → 404）。
已用 `bun patch @slidev/client` 修正（在 `router.push/replace` 前剝掉 `BASE_URL`），記錄於
`patches/` 與 `package.json` 的 `patchedDependencies`，CI 安裝時自動套用。
**升級 Slidev 後請重測子路徑翻頁**，必要時重做 patch。

## 部署

push 到 `main` → GitHub Actions（`.github/workflows/deploy.yml`）跑 `bun run build` → GitHub Pages。
