import type { ManifestEntry } from './build-manifest'

const SITE_TITLE = 'Talks'
const SITE_TAGLINE = 'Slides by Eric Wu'

function formatDate(iso: string): string {
  const [y] = iso.split('-')
  const month = new Date(`${iso}T00:00:00Z`).toLocaleString('en-US', {
    month: 'short',
    timeZone: 'UTC',
  })
  return `${month} ${y}`
}

function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)
}

function talkRow(t: ManifestEntry): string {
  const tags = t.tags.map((tag) => `<span class="tag">${esc(tag)}</span>`).join('')
  return `      <a class="talk" href="${t.url}" data-tags="${esc(t.tags.join(' '))}">
        <div class="title">${esc(t.title)}</div>
        <div class="desc">${esc(t.description)}</div>
        <div class="meta">${tags}<span class="event">· ${esc(t.event)} · ${formatDate(t.date)}</span></div>
      </a>`
}

// Generate a self-contained static index.html listing the (listed) decks.
export function renderIndex(entries: ManifestEntry[]): string {
  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date))
  const rows = sorted.map(talkRow).join('\n')
  const allTags = [...new Set(sorted.flatMap((t) => t.tags))].sort((a, b) => a.localeCompare(b))
  const filters = [
    `<button class="chip active" data-tag="">全部</button>`,
    ...allTags.map((tag) => `<button class="chip" data-tag="${esc(tag)}">${esc(tag)}</button>`),
  ].join('\n        ')

  return `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(SITE_TITLE)}</title>
<style>
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0; padding: 48px 20px; line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", sans-serif;
    color: #1a1a1a; background: #fafafa;
  }
  .wrap { max-width: 720px; margin: 0 auto; }
  header { margin-bottom: 20px; }
  h1 { font-size: 28px; margin: 0 0 4px; }
  .tagline { color: #888; font-size: 14px; }
  .filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
  .chip {
    border: 1px solid #e0e0e0; background: #fff; color: #555;
    padding: 4px 12px; border-radius: 999px; font-size: 13px; cursor: pointer;
    font-family: inherit;
  }
  .chip:hover { border-color: #c7c7c7; }
  .chip.active { background: #4338ca; border-color: #4338ca; color: #fff; }
  .talk { display: block; padding: 16px 0; border-bottom: 1px solid #ececec; text-decoration: none; color: inherit; }
  .talk:hover .title { text-decoration: underline; }
  .talk.hidden { display: none; }
  .title { font-size: 17px; font-weight: 600; color: #111; margin-bottom: 4px; }
  .desc { font-size: 14px; color: #555; margin-bottom: 8px; }
  .meta { font-size: 12px; color: #999; }
  .tag {
    display: inline-block; padding: 2px 8px; margin-right: 6px;
    background: #eef2ff; color: #4338ca; border-radius: 999px; font-size: 11px; font-weight: 500;
  }
  .event { margin-left: 2px; }
</style>
</head>
<body>
  <div class="wrap">
    <header>
      <h1>${esc(SITE_TITLE)}</h1>
      <div class="tagline">${esc(SITE_TAGLINE)}</div>
    </header>
    <div class="filters">
        ${filters}
    </div>
    <main>
${rows}
    </main>
  </div>
  <script>
    const chips = document.querySelectorAll('.chip')
    const talks = document.querySelectorAll('.talk')
    chips.forEach((chip) => chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('active'))
      chip.classList.add('active')
      const tag = chip.dataset.tag
      talks.forEach((t) => {
        const tags = (t.dataset.tags || '').split(' ')
        t.classList.toggle('hidden', tag !== '' && !tags.includes(tag))
      })
    }))
  </script>
</body>
</html>
`
}
