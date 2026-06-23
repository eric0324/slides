---
theme: default
title: 把聊天室變成第二大腦
info: 把聊天室變成第二大腦的入口：用 chatbot 把片段想法、知識、待辦自動歸檔進 Obsidian vault。
class: text-center
transition: slide-left
mdc: true
colorSchema: light
routerMode: hash

talk:
  title: 把聊天室變成第二大腦
  description: 把聊天室變成第二大腦的入口：用 chatbot 把片段想法、知識、待辦自動歸檔進 Obsidian vault。
  tags: [chatbot, meetup]
  event: Chatbot meetup
  date: 2026-04-26
---

<div class="h-full flex flex-col justify-between">
  <div></div>
  <div class="flex flex-col gap-6">
    <h1 class="display" style="font-size:3.4rem;">把聊天室<br/>變成<em>第二大腦</em></h1>
    <div style="font-size:1.1rem; color:var(--ink-2);">Bot 收、Agent 想、Vault 存。</div>
  </div>
  <div class="mono" style="font-size:0.7rem; color:var(--ink-4); letter-spacing:0.12em;">
    ─── 60 MIN · LIVE DEMO INCLUDED
  </div>
</div>

---

<div class="h-full flex flex-col justify-between">
  <div class="flex justify-between items-start">
    <div class="mono" style="font-size:0.7rem; letter-spacing:0.18em; color:var(--ink-4);">─── ABOUT THE SPEAKER</div>
    <div class="eyebrow muted">講者</div>
  </div>

  <div class="flex items-center" style="gap:4rem;">
    <div class="flex-1 flex flex-col" style="gap:1.4rem;">
      <div class="mono" style="font-size:1rem; letter-spacing:0.2em; color:var(--ink-3);">HELLO &nbsp;·&nbsp; 我是</div>
      <h1 class="display" style="font-size:6rem; line-height:0.95;"><em>Eric</em></h1>
      <div class="flex flex-col" style="gap:0.4rem;">
        <div style="font-size:1.5rem; color:var(--ink); font-weight:600;">資深工程師</div>
        <div style="font-size:1rem; color:var(--ink-3);">知識衛星</div>
        <div class="flex" style="gap:0.5rem; margin-top:0.4rem;">
          <span class="tag purple">AI</span>
          <span class="tag lime">Chatbot</span>
          <span class="tag amber">WordPress</span>
        </div>
      </div>
    </div>
    <div style="width:190px; flex-shrink:0;"></div>
  </div>

  <div class="mono" style="font-size:0.7rem; color:var(--ink-3); letter-spacing:0.08em;">第二大腦 / Second Brain</div>
</div>

<div class="qr-card">

![Eric Facebook QR](./assets/eric-fb-qr.png){class="qr-img"}

<div class="mono qr-cap">↗ fb.me/eric0324</div>

</div>

<style>
.qr-card {
  position: absolute;
  right: 64px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}
.qr-card .qr-img {
  width: 150px; height: 150px; display: block;
  background: #fff; padding: 10px; border-radius: 6px;
}
.qr-cap { font-size: 0.72rem; color: var(--ink-3); }
</style>

---

<div class="h-full flex flex-col justify-between">
  <div>
    <div class="mono" style="font-size:0.7rem; letter-spacing:0.18em; color:var(--ink-4);">─── OUTLINE · 60 分鐘地圖</div>
    <h1 style="font-size:2.8rem; margin-top:0.6rem; font-weight:600;">今天會走過<span class="purple">這幾段</span>。</h1>
  </div>

  <div class="flex flex-col">
    <div class="ol-row"><div class="mono dim" style="letter-spacing:0.18em;">WHY</div><div class="ol-t">為什麼要做這件事</div><div class="muted ol-d">痛點與選型</div></div>
    <div class="ol-row"><div class="mono purple ol-n">01</div><div class="ol-t">整體架構</div><div class="muted ol-d">一條訊息的旅程</div></div>
    <div class="ol-row"><div class="mono purple ol-n">02</div><div class="ol-t">Telegram Bot</div><div class="muted ol-d">三步接上 Claude Code</div></div>
    <div class="ol-row"><div class="mono purple ol-n">03</div><div class="ol-t">Claude Agent</div><div class="muted ol-d">Agent · Skill · 9 個指令</div></div>
    <div class="ol-row"><div class="mono purple ol-n">04</div><div class="ol-t">Obsidian Vault</div><div class="muted ol-d">8 個資料夾、模板設計</div></div>
    <div class="ol-row"><div class="mono dim" style="letter-spacing:0.18em;">DEMO</div><div class="ol-t">Live Demo</div><div class="muted ol-d">9 個指令現場示範</div></div>
    <div class="ol-row" style="border-bottom:1px solid var(--line);"><div class="mono purple ol-n">05</div><div class="ol-t">收尾</div><div class="muted ol-d">帶回家的三件事 + Q&amp;A</div></div>
  </div>
</div>

<style>
.ol-row { display:grid; grid-template-columns: 70px 220px 1fr; gap:1.4rem; align-items:baseline; padding:0.4rem 0; border-top:1px solid var(--line); }
.ol-n { font-size:1rem; }
.ol-t { font-size:1rem; font-weight:600; color:var(--ink); }
.ol-d { font-size:0.78rem; }
</style>

---

<div class="eyebrow muted">OPENING · 為什麼需要這套</div>
<h2 class="title" style="margin-top:0.4rem;">一些我的<span class="purple">壞習慣</span>。</h2>

<div class="grid-2" style="margin-top:1rem;">
  <div class="card">
    <div class="num">01 — TABS</div>
    <h3>瀏覽器開了 47 個分頁</h3>
    <p class="muted">每一個都「之後再看」，然後就再也沒看過了。</p>
  </div>
  <div class="card">
    <div class="num">02 — SCREENSHOTS</div>
    <h3>截圖 2,341 張</h3>
    <p class="muted">相簿裡有去年某天的金句，但你永遠找不到它。</p>
  </div>
  <div class="card">
    <div class="num">03 — MESSAGES TO SELF</div>
    <h3>傳給自己的訊息躺在那</h3>
    <p class="muted">「這個很重要」「明天處理」「記得查」<span class="dim">— 沒有明天。</span></p>
  </div>
  <div class="card">
    <div class="num">04 — IDEAS</div>
    <h3>想法在洗澡時冒出來</h3>
    <p class="muted">擦乾頭髮坐到電腦前，已經忘了。</p>
  </div>
</div>

---

<div class="eyebrow muted">OPENING · 為什麼需要這套</div>
<h2 class="title" style="margin-top:0.4rem;">我想要的其實<span class="purple">很簡單</span>。</h2>

<div class="flex flex-col justify-center" style="gap:2rem; margin-top:1.5rem;">
  <div class="flex items-baseline" style="gap:1.5rem;">
    <div class="mono" style="font-size:3.2rem; color:var(--ink-4); line-height:1; min-width:90px;">01</div>
    <div>
      <div class="serif" style="font-size:2rem; color:var(--ink);">「想到就丟。」</div>
      <div class="mono" style="font-size:0.72rem; color:var(--ink-3); margin-top:0.4rem; letter-spacing:0.1em;">NO FRICTION · NO APP TO OPEN · NO FOLDER TO PICK</div>
    </div>
  </div>
  <div class="flex items-baseline" style="gap:1.5rem;">
    <div class="mono" style="font-size:3.2rem; color:var(--ink-4); line-height:1; min-width:90px;">02</div>
    <div>
      <div class="serif" style="font-size:2rem; color:var(--ink);">「不用我分類。」</div>
      <div class="mono" style="font-size:0.72rem; color:var(--ink-3); margin-top:0.4rem; letter-spacing:0.1em;">AI DOES THE TAGGING · I JUST WRITE</div>
    </div>
  </div>
  <div class="flex items-baseline" style="gap:1.5rem;">
    <div class="mono" style="font-size:3.2rem; color:var(--ink-4); line-height:1; min-width:90px;">03</div>
    <div>
      <div class="serif" style="font-size:2rem; color:var(--ink);">「未來找得到。」</div>
      <div class="mono" style="font-size:0.72rem; color:var(--ink-3); margin-top:0.4rem; letter-spacing:0.1em;">ONE VAULT · MARKDOWN · FOREVER MINE</div>
    </div>
  </div>
</div>

---

<div class="eyebrow muted">選型</div>
<h2 class="title" style="margin-top:0.3rem;">為什麼選<span class="purple">這三個</span>工具？</h2>

<div class="grid-3" style="margin-top:1rem;">
  <div class="card">
    <div class="flex justify-between items-start">
      <div><div class="num">INPUT</div><h3 style="margin-top:0.2rem; font-size:1.3rem;">Telegram</h3></div>
      <div class="tag purple">入口</div>
    </div>
    <div class="hr"></div>
    <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.4rem;">
      <li class="muted">天天都在用，不用裝新 app</li>
      <li class="muted">手機桌機同步，想到就丟</li>
    </ul>
    <div class="mono" style="margin-top:auto; padding-top:0.6rem; color:var(--ink-4); font-size:0.62rem;">↓ webhook</div>
  </div>

  <div class="card">
    <div class="flex justify-between items-start">
      <div><div class="num">BRAIN</div><h3 style="margin-top:0.2rem; font-size:1.3rem;">Claude Code</h3></div>
      <div class="tag">Agent</div>
    </div>
    <div class="hr"></div>
    <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.4rem;">
      <li class="muted">會自己判斷分類、摘要、放哪裡</li>
      <li class="muted">有 Tools / Skills，給工具就會用</li>
    </ul>
    <div class="mono" style="margin-top:auto; padding-top:0.6rem; color:var(--ink-4); font-size:0.62rem;">↓ writes markdown</div>
  </div>

  <div class="card">
    <div class="flex justify-between items-start">
      <div><div class="num">STORAGE</div><h3 style="margin-top:0.2rem; font-size:1.3rem;">Obsidian</h3></div>
      <div class="tag">歸檔</div>
    </div>
    <div class="hr"></div>
    <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.4rem;">
      <li class="muted">純 Markdown，十年後還打得開</li>
      <li class="muted">本機檔案，不被任何服務綁架</li>
      <li class="muted">雙向連結 + Graph view 自然成網</li>
    </ul>
    <div class="mono" style="margin-top:auto; padding-top:0.6rem; color:var(--ink-4); font-size:0.62rem;">✓ owned forever</div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-between">
  <div class="mono" style="font-size:0.7rem; letter-spacing:0.18em; color:var(--ink-4);">─── SECTION 01 / 05</div>
  <div>
    <div class="bignum" style="font-size:6rem;">01</div>
    <h2 style="font-size:3rem; margin:0.4rem 0 0.6rem; font-weight:600;">整體架構</h2>
    <div style="font-size:1rem; color:var(--ink-3); line-height:1.5;">
      一條訊息從手指到 Vault 的完整旅程。<br/>
      <span class="mono" style="font-size:0.78rem; color:var(--ink-4);">10 minutes · architecture overview</span>
    </div>
  </div>
  <div></div>
</div>

---

<div class="eyebrow">ARCHITECTURE</div>
<h2 class="title" style="margin-top:0.3rem;">一條訊息的<span class="purple">旅程</span>。</h2>

<div class="flex flex-col justify-center" style="gap:0.8rem; margin-top:1.5rem;">
  <div style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items:stretch;">
    <div class="card">
      <div class="mono" style="color:var(--ink-4); font-size:0.6rem; letter-spacing:0.15em;">STAGE 01</div>
      <div style="font-size:1.1rem; font-weight:600;">CAPTURE</div>
      <div class="mono lime" style="font-size:0.75rem;">Telegram Bot</div>
      <div class="muted" style="font-size:0.75rem;">收訊息</div>
    </div>
    <div class="flex items-center mono" style="padding:0 0.8rem; color:var(--ink-4); font-size:1.4rem;">→</div>
    <div class="card">
      <div class="mono" style="color:var(--ink-4); font-size:0.6rem; letter-spacing:0.15em;">STAGE 02</div>
      <div style="font-size:1.1rem; font-weight:600;">UNDERSTAND</div>
      <div class="mono purple" style="font-size:0.75rem;">Claude Code</div>
      <div class="muted" style="font-size:0.75rem;">分類 / tag /<br/>摘要 / 決定路徑</div>
    </div>
    <div class="flex items-center mono" style="padding:0 0.8rem; color:var(--ink-4); font-size:1.4rem;">→</div>
    <div class="card">
      <div class="mono" style="color:var(--ink-4); font-size:0.6rem; letter-spacing:0.15em;">STAGE 03</div>
      <div style="font-size:1.1rem; font-weight:600;">FILE</div>
      <div class="mono amber" style="font-size:0.75rem;">Obsidian Vault</div>
      <div class="muted" style="font-size:0.75rem;">寫成 .md<br/>進對應資料夾</div>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items:center; margin-top:0.4rem;">
    <div class="mono dim" style="font-size:0.7rem; text-align:center;">~200ms</div>
    <div></div>
    <div class="mono dim" style="font-size:0.7rem; text-align:center;">~1.5s</div>
    <div></div>
    <div class="mono dim" style="font-size:0.7rem; text-align:center;">~100ms</div>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="flex flex-col items-center" style="gap:1.8rem;">
  <div class="mono" style="font-size:0.78rem; letter-spacing:0.25em; color:var(--ink-3);">─── REPO · 全部都在這</div>
  <h1 class="mono" style="font-size:3.4rem; font-weight:600; letter-spacing:-0.04em; white-space:nowrap;">
    <span style="color:var(--ink);">go.ericwu.asia</span><span class="purple">/ob-ai</span>
  </h1>
  <div class="serif" style="font-size:1.4rem; color:var(--ink-2);"><span class="purple">開箱即用</span>。</div>
</div>

---

<div class="h-full flex flex-col justify-between">
  <div class="mono" style="font-size:0.7rem; letter-spacing:0.18em; color:var(--ink-4);">─── SECTION 02 / 05</div>
  <div>
    <div class="bignum" style="font-size:6rem;">02</div>
    <h2 style="font-size:3rem; margin:0.4rem 0 0.6rem; font-weight:600;">Input 層 — Telegram Bot</h2>
    <div style="font-size:1rem; color:var(--ink-3); line-height:1.5;">
      把任何東西都接住的入口。<br/>
      <span class="mono" style="font-size:0.78rem; color:var(--ink-4);">15 minutes · the entry point</span>
    </div>
  </div>
  <div></div>
</div>

---

<div class="eyebrow">STEP 01 · TELEGRAM</div>
<h2 class="title" style="margin-top:0.3rem;">跟 <span class="mono lime">@BotFather</span> 拿一張 <span class="purple">token</span>。</h2>

<div style="display:grid; grid-template-columns: 1fr 240px; gap:3rem; margin-top:0.6rem; align-items:center;">
  <div class="flex flex-col" style="gap:1.1rem;">
    <div class="flex items-start" style="gap:0.8rem;">
      <div class="mono purple" style="font-size:0.85rem; min-width:24px;">▸</div>
      <h3 style="font-size:1rem; line-height:1.3;">傳 <span class="mono">/newbot</span> 開始對話</h3>
    </div>
    <div class="flex items-start" style="gap:0.8rem;">
      <div class="mono purple" style="font-size:0.85rem; min-width:24px;">▸</div>
      <h3 style="font-size:1rem; line-height:1.3;">取顯示名稱（中文沒差）</h3>
    </div>
    <div class="flex items-start" style="gap:0.8rem;">
      <div class="mono purple" style="font-size:0.85rem; min-width:24px;">▸</div>
      <h3 style="font-size:1rem; line-height:1.3;">取 username，結尾必須是 <span class="mono">bot</span></h3>
    </div>
    <div class="flex items-start" style="gap:0.8rem;">
      <div class="mono lime" style="font-size:0.85rem; min-width:24px;">✓</div>
      <div>
        <h3 class="lime" style="font-size:1rem; line-height:1.3;">收下 token</h3>
        <div class="muted" style="font-size:0.78rem; margin-top:0.3rem;">就是 bot 的身份證 — 別 push 進 git。</div>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="phone">
      <div class="notch"></div>
      <div class="tg-head">
        <div class="tg-ava">B</div>
        <div>
          <div style="color:#fff; font-weight:600; font-size:0.72rem;">BotFather</div>
          <div style="color:#6c7783; font-size:0.55rem;">bot</div>
        </div>
      </div>
      <div class="tg-body">
        <div class="tg-out">/newbot</div>
        <div class="tg-in">Alright, a new bot. What are we going to call it?</div>
        <div class="tg-out">Second Brain Bot</div>
        <div class="tg-in">Now a username (must end in <code style="background:#000; padding:0 3px; border-radius:3px;">bot</code>).</div>
        <div class="tg-out">my_second_brain_bot</div>
        <div class="tg-in">Done! Use this token:<br/><span class="mono" style="color:#7eccf3; font-size:0.5rem; word-break:break-all;">7891234567:AAH-xyZ...vbn</span></div>
      </div>
    </div>
  </div>
</div>

---

<div class="eyebrow">STEP 02 · CLAUDE CODE</div>
<h2 class="title" style="margin-top:0.3rem;">把 token 跟 <span class="purple">access</span> 設定好。</h2>

<div style="display:grid; grid-template-columns: 1fr 1.4fr; gap:3rem; margin-top:0.6rem; align-items:center;">
  <div class="flex flex-col" style="gap:1.2rem;">
    <div>
      <div class="eyebrow">依序執行</div>
      <div class="flex flex-col" style="gap:0.6rem; margin-top:0.6rem;">
        <div class="flex items-baseline" style="gap:0.7rem;">
          <span class="mono purple" style="font-size:0.7rem; min-width:24px;">01</span>
          <div style="font-size:0.82rem; color:var(--ink-2);">在 vault 啟動 <span class="mono lime">$ claude</span></div>
        </div>
        <div class="flex items-baseline" style="gap:0.7rem;">
          <span class="mono purple" style="font-size:0.7rem; min-width:24px;">02</span>
          <div style="font-size:0.82rem; color:var(--ink-2);">session 內跑 <span class="mono lime">/telegram:configure</span> <span class="dim">— 貼 token</span></div>
        </div>
        <div class="flex items-baseline" style="gap:0.7rem;">
          <span class="mono purple" style="font-size:0.7rem; min-width:24px;">03</span>
          <div style="font-size:0.82rem; color:var(--ink-2);">再跑 <span class="mono lime">/telegram:access add &lt;id&gt;</span> <span class="dim">— 加 allowlist</span></div>
        </div>
      </div>
    </div>
    <div class="hr"></div>
    <div>
      <div class="eyebrow muted">數字 ID 怎麼拿</div>
      <div style="font-size:0.82rem; margin-top:0.4rem; color:var(--ink-2); line-height:1.55;">
        在 Telegram 打開<span class="lime">你的 bot</span>，<br/>傳一句話就能看到自己的 ID。
      </div>
    </div>
  </div>

  <div class="term">
    <div class="term-bar"><div class="dots"><i></i><i></i><i></i></div><div class="ttl">~/vault — claude</div></div>
    <pre><span class="c">~/vault $</span> claude
<span class="dim">&gt;</span> /telegram:configure
  <span class="c">paste your bot token:</span>
  <span class="lime">▸</span> <span class="s">7891234567:AAH-xyZ...vbn</span>
  <span class="lime">✓</span> token saved
<span> </span>
<span class="c"># 把自己加進 allowlist</span>
<span class="dim">&gt;</span> /telegram:access add <span class="s">12345678</span>
  <span class="lime">✓</span> user 12345678 allowed</pre>
  </div>
</div>

---

<div class="eyebrow">STEP 03 · LAUNCH</div>
<h2 class="title" style="margin-top:0.3rem;">用 <span class="mono purple">--channels</span> 重啟 — bot <span class="lime">上線</span>。</h2>

<div style="display:grid; grid-template-columns: 1.5fr 1fr; gap:2.5rem; margin-top:0.6rem;">
  <div class="term" style="align-self:flex-start;">
    <div class="term-bar"><div class="dots"><i></i><i></i><i></i></div><div class="ttl">~/vault — claude --channels</div></div>
    <pre><span class="c">~/vault $</span> claude <span class="k">--channels</span> <span class="s">plugin:telegram@claude-plugins-official</span>
<span> </span>
  <span class="lime">✓</span> telegram channel ready
  <span class="lime">✓</span> listening as <span class="purple">@my_second_brain_bot</span>
  <span class="dim">▸</span> <span class="c">waiting for messages…</span>
<span> </span>
<span class="c"># 你在手機傳一句話進來</span>
<span class="dim">[16:43]</span> <span class="amber">message</span> from <span class="purple">@eric</span>:
  <span class="dim">&gt;</span> 提醒我明天買牛奶
<span> </span>
<span class="dim">[16:43]</span> <span class="lime">handling</span> with skill: <span class="mono">parse-knowledge</span>
<span class="dim">[16:43]</span> <span class="lime">writing</span> to vault: <span class="amber">00_收件匣/2026-04-25-1643.md</span>
<span class="dim">[16:43]</span> <span class="lime">reply</span>: ✓ 已存進 00_收件匣</pre>
  </div>

  <div class="flex flex-col justify-center" style="gap:1.2rem;">
    <div>
      <div class="eyebrow">從此</div>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.5rem; margin-top:0.5rem;">
        <li class="muted" style="font-size:0.85rem;">隨時打開 Telegram</li>
        <li class="muted" style="font-size:0.85rem;">把<span class="ink">想法、連結、照片</span>傳給 bot</li>
        <li class="muted" style="font-size:0.85rem;">Claude Code 看到就照 skills 處理</li>
        <li class="muted" style="font-size:0.85rem;">訊息 <span class="purple">→</span> 進 vault</li>
      </ul>
    </div>
    <div class="insight">
      <div class="label">KEY INSIGHT</div>
      <div style="margin-top:0.3rem;">沒有 server 要養，<br/>Claude Code 自己就是 runtime。</div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-between">
  <div class="mono" style="font-size:0.7rem; letter-spacing:0.18em; color:var(--ink-4);">─── SECTION 03 / 05</div>
  <div>
    <div class="bignum" style="font-size:6rem;">03</div>
    <h2 style="font-size:3rem; margin:0.4rem 0 0.6rem; font-weight:600;">Brain 層 — Claude Agent</h2>
    <div style="font-size:1rem; color:var(--ink-3); line-height:1.5;">
      會思考、會用工具、會決定下一步要做什麼的那塊。<br/>
      <span class="mono" style="font-size:0.78rem; color:var(--ink-4);">15 minutes · the brain</span>
    </div>
  </div>
  <div></div>
</div>

---

<div class="eyebrow">COMMAND DESIGN</div>
<h2 class="title" style="margin-top:0.3rem;">傳統 vs <span class="purple">Agent</span> 做法。</h2>

<div class="grid-2" style="margin-top:0.6rem;">
  <div class="card">
    <div class="flex justify-between items-center">
      <div class="num">傳統做法 — 指令導向</div>
      <span class="tag rose">繁瑣</span>
    </div>
    <h3>我們要記指令。</h3>
    <div class="mono" style="background:#0e0c09; border-radius:4px; padding:0.8rem; font-size:0.7rem; line-height:1.7; color:var(--ink-2);">
      <div><span class="dim">$</span> /save_article https://...</div>
      <div><span class="dim">$</span> /tag tech ai claude</div>
      <div><span class="dim">$</span> /folder Inbox/Reading</div>
      <div><span class="dim">$</span> /summary short</div>
      <div class="dim" style="margin-top:0.3rem;">// 4 個指令才存一篇文章</div>
    </div>
    <p class="muted" style="margin-top:auto;">要記指令、要改 code，懶了就不用了。</p>
  </div>

  <div class="card warm" style="border-color:rgba(179,157,219,0.3);">
    <div class="flex justify-between items-center">
      <div class="num purple">AGENT 做法 — 意圖導向</div>
      <span class="tag purple">自然</span>
    </div>
    <h3>我們只要丟東西。</h3>
    <div class="mono" style="background:#0e0c09; border-radius:4px; padding:0.8rem; font-size:0.7rem; line-height:1.7; color:var(--ink-2);">
      <div><span class="dim">→</span> https://...</div>
      <div class="dim" style="margin-top:0.3rem;">// 就這樣。</div>
    </div>
    <p class="muted" style="margin-top:auto;">想到就丟，Agent 自己看內容判斷。</p>
  </div>
</div>

<div class="insight" style="margin-top:0.8rem; background:none;">
  <span class="label">KEY INSIGHT &nbsp;·&nbsp;</span>
  <span style="font-size:0.85rem;">把「決定要做什麼」這件事，從<span class="dim">我們</span>移到<span class="purple">模型</span>身上。</span>
</div>

---

<div class="eyebrow">ANATOMY</div>
<h2 class="title" style="margin-top:0.3rem;">Agent 的<span class="purple">四個組成</span>。</h2>

<div class="grid-4" style="margin-top:0.8rem;">
  <div class="card">
    <div class="num">01</div>
    <div class="mono purple" style="font-size:1.6rem; margin:0.3rem 0;">LLM</div>
    <div style="font-size:0.85rem; color:var(--ink); font-weight:500;">會思考的那顆腦袋</div>
    <div class="muted" style="font-size:0.75rem; margin-top:auto; padding-top:0.6rem;">Claude 4.5 Sonnet。<br/>負責「想清楚要做什麼」。</div>
  </div>
  <div class="card">
    <div class="num">02</div>
    <div class="mono lime" style="font-size:1.6rem; margin:0.3rem 0;">TOOLS</div>
    <div style="font-size:0.85rem; color:var(--ink); font-weight:500;">伸出去的手腳</div>
    <div class="muted" style="font-size:0.75rem; margin-top:auto; padding-top:0.6rem;">function calling。<br/>讀網頁、寫檔案、查 vault。</div>
  </div>
  <div class="card">
    <div class="num">03</div>
    <div class="mono amber" style="font-size:1.6rem; margin:0.3rem 0;">MEMORY</div>
    <div style="font-size:0.85rem; color:var(--ink); font-weight:500;">脈絡感</div>
    <div class="muted" style="font-size:0.75rem; margin-top:auto; padding-top:0.6rem;">歷史 tag 列表 +<br/>最近寫的筆記摘要。</div>
  </div>
  <div class="card">
    <div class="num">04</div>
    <div class="mono rose" style="font-size:1.6rem; margin:0.3rem 0;">LOOP</div>
    <div style="font-size:0.85rem; color:var(--ink); font-weight:500;">想 → 做 → 看結果</div>
    <div class="muted" style="font-size:0.75rem; margin-top:auto; padding-top:0.6rem;">重複到任務完成。<br/>中間可以改主意。</div>
  </div>
</div>

---

<div class="eyebrow">RELATIONSHIP</div>
<h2 class="title" style="margin-top:0.3rem;">Agent <span class="purple">×</span> Skill 怎麼<span class="purple">分工</span>？</h2>

<div style="display:grid; grid-template-columns: 1fr auto 1fr; gap:1.5rem; margin-top:0.8rem; align-items:stretch;">
  <div class="card">
    <div class="num">AGENT</div>
    <h3 style="font-size:1.2rem;">Claude Code</h3>
    <p style="font-size:0.82rem; color:var(--ink-2);">會思考、會用工具的引擎。</p>
    <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.4rem;">
      <li class="muted">內建 Read / Write / Bash / WebFetch…</li>
      <li class="muted">會 think → act → observe 的循環</li>
      <li class="muted">本身不知道你「要做什麼」</li>
    </ul>
  </div>

  <div class="flex flex-col items-center justify-center" style="gap:0.5rem;">
    <div class="mono purple" style="font-size:0.8rem;">/command</div>
    <div class="purple" style="font-size:2.4rem; line-height:1;">→</div>
    <div class="mono dim" style="font-size:0.6rem; letter-spacing:0.18em;">READS</div>
  </div>

  <div class="card warm" style="border-color:rgba(179,157,219,0.3);">
    <div class="num purple">SKILL</div>
    <h3 class="purple" style="font-size:1.2rem;">.claude/commands/*.md</h3>
    <p style="font-size:0.82rem; color:var(--ink-2);">教 Agent 怎麼做某件事的 SOP。</p>
    <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.4rem;">
      <li class="muted">就是一個 markdown 檔</li>
      <li class="muted">寫固定步驟、要用哪些工具</li>
      <li class="muted">寫好就能重複用</li>
    </ul>
  </div>
</div>

<div class="insight" style="margin-top:0.8rem;">
  <span class="label">KEY INSIGHT &nbsp;·&nbsp;</span>
  <span style="font-size:0.85rem;">Agent 是<span class="ink">通用引擎</span>，Skill 是<span class="purple">具體任務的指令書</span>。</span>
</div>

---

<div class="eyebrow">SKILLS</div>
<h2 class="title" style="margin-top:0.3rem;"><span class="purple">9 個</span>指令。</h2>

<div style="display:grid; grid-template-columns: 1fr 1.4fr; gap:3rem; margin-top:0.8rem;">
  <div class="flex flex-col" style="gap:0.9rem;">
    <div class="eyebrow muted">DAILY WORKFLOW</div>
    <div class="flex flex-col" style="gap:0.7rem;">
      <div class="flex items-baseline" style="gap:1rem;"><span class="mono purple" style="min-width:150px;">/start-my-day</span><span class="muted" style="font-size:0.82rem;">早晨規劃</span></div>
      <div class="flex items-baseline" style="gap:1rem;"><span class="mono purple" style="min-width:150px;">/ai-newsletters</span><span class="muted" style="font-size:0.82rem;">AI 新聞摘要</span></div>
      <div class="flex items-baseline" style="gap:1rem;"><span class="mono purple" style="min-width:150px;">/ai-products</span><span class="muted" style="font-size:0.82rem;">AI 產品追蹤</span></div>
    </div>
  </div>

  <div class="flex flex-col" style="gap:0.9rem;">
    <div class="eyebrow muted">KNOWLEDGE MANAGEMENT</div>
    <div class="flex flex-col" style="gap:0.7rem;">
      <div class="flex items-baseline" style="gap:1rem;"><span class="mono purple" style="min-width:190px;">/kickoff</span><span class="muted" style="font-size:0.82rem;">想法 → 專案（雙代理）</span></div>
      <div class="flex items-baseline" style="gap:1rem;"><span class="mono purple" style="min-width:190px;">/research</span><span class="muted" style="font-size:0.82rem;">深度研究（雙代理）</span></div>
      <div class="flex items-baseline" style="gap:1rem;"><span class="mono purple" style="min-width:190px;">/ask</span><span class="muted" style="font-size:0.82rem;">先搜 vault，直接回答</span></div>
      <div class="flex items-baseline" style="gap:1rem;"><span class="mono purple" style="min-width:190px;">/parse-knowledge</span><span class="muted" style="font-size:0.82rem;">文本 → 原子化筆記</span></div>
      <div class="flex items-baseline" style="gap:1rem;"><span class="mono purple" style="min-width:190px;">/brainstorm</span><span class="muted" style="font-size:0.82rem;">三階段腦力激盪</span></div>
      <div class="flex items-baseline" style="gap:1rem;"><span class="mono purple" style="min-width:190px;">/archive</span><span class="muted" style="font-size:0.82rem;">歸檔清理</span></div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-between">
  <div class="mono" style="font-size:0.7rem; letter-spacing:0.18em; color:var(--ink-4);">─── SECTION 04 / 05</div>
  <div>
    <div class="bignum" style="font-size:6rem;">04</div>
    <h2 style="font-size:3rem; margin:0.4rem 0 0.6rem; font-weight:600;">Storage 層 — Obsidian</h2>
    <div style="font-size:1rem; color:var(--ink-3); line-height:1.5;">
      檔案怎麼放，未來的自己才找得到。<br/>
      <span class="mono" style="font-size:0.78rem; color:var(--ink-4);">10 minutes · the archive</span>
    </div>
  </div>
  <div></div>
</div>

---

<div class="eyebrow">VAULT</div>
<h2 class="title" style="margin-top:0.3rem;"><span class="purple">8 個</span>資料夾就夠用。</h2>

<div style="display:grid; grid-template-columns: 1.1fr 1fr; gap:2rem; margin-top:0.6rem;">
  <pre class="code" data-label="vault/" style="align-self:flex-start;"><span class="f">~/Vault/</span>
├── <span class="purple">00_收件匣/</span>      <span class="c"># 想到就丟，之後再整</span>
├── <span class="purple">10_日記/</span>        <span class="c"># 每日筆記，活動樞紐</span>
├── <span class="purple">20_專案/</span>        <span class="c"># 活躍專案（扁平）</span>
├── <span class="purple">30_研究/</span>        <span class="c"># 深度研究</span>
├── <span class="purple">40_知識庫/</span>      <span class="c"># 原子化概念</span>
├── <span class="purple">50_資源/</span>        <span class="c"># 策展內容（newsletter…）</span>
├── <span class="purple">90_計畫/</span>        <span class="c"># 執行計畫，做完歸檔</span>
└── <span class="amber">99_系統/</span>        <span class="c"># 模板、prompt、歸檔</span></pre>

  <div class="flex flex-col" style="gap:1rem;">
    <div>
      <div class="eyebrow muted">為什麼這樣切</div>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.4rem; margin-top:0.4rem;">
        <li class="muted" style="font-size:0.82rem;"><span class="purple mono">00–99</span> 數字前綴，重要的在前面</li>
        <li class="muted" style="font-size:0.82rem;"><span class="ink">扁平</span>組織，專案不分領域層級</li>
        <li class="muted" style="font-size:0.82rem;"><span class="ink">原子化</span>，一個概念一個檔</li>
        <li class="muted" style="font-size:0.82rem;">所有東西都連回 <span class="lime mono">[[10_日記]]</span></li>
      </ul>
    </div>
    <div class="hr"></div>
    <div>
      <div class="eyebrow muted">Wikilinks 互聯</div>
      <div class="muted" style="font-size:0.8rem; margin-top:0.4rem; line-height:1.6;">
        知識不是孤島，全靠 <span class="lime mono">[[連結]]</span> 串起來；<br/>Graph view 自然長成一張網。
      </div>
      <div class="flex" style="flex-wrap:wrap; gap:0.4rem; margin-top:0.5rem;">
        <span class="tag mono" style="font-size:0.58rem;">[[20_專案/第二大腦]]</span>
        <span class="tag mono" style="font-size:0.58rem;">[[40_知識庫/atomic-notes]]</span>
        <span class="tag mono" style="font-size:0.58rem;">[[10_日記/2026-04-25]]</span>
      </div>
    </div>
  </div>
</div>

---

<div class="eyebrow">TEMPLATES &nbsp;·&nbsp; 5 個之一：知識模板</div>
<h2 class="title" style="margin-top:0.3rem;">模板都這樣<span class="purple">設計</span>。</h2>

<div style="display:grid; grid-template-columns: 1.3fr 1fr; gap:1.5rem; margin-top:0.6rem;">
  <pre class="code" data-label="知識模板.md" style="font-size:0.6rem; line-height:1.5; align-self:flex-start;"><span class="c">---</span>
<span class="k">area</span>:
<span class="k">tags</span>: []
<span class="k">created</span>: <span class="s">&lcub;&lcub;date:YYYY-MM-DD&rcub;&rcub;</span>
<span class="c">---</span>
<span class="purple"># [概念名稱]</span>
<span> </span>
<span class="purple">## 定義</span>
<span class="dim">[清楚、簡潔的概念定義]</span>
<span> </span>
<span class="purple">## 重點</span>
<span class="dim">- [主要特徵或功能]
- [重要面向]
- [值得注意的細節]</span>
<span> </span>
<span class="purple">## 範例</span>
<span class="dim">[實際範例或使用情境]</span>
<span> </span>
<span class="purple">## 相關概念</span>
<span class="dim">- [[相關概念 1]]
- [[相關概念 2]]</span>
<span> </span>
<span class="purple">## 參考資料</span>
<span class="dim">- [來源或文件]</span></pre>

  <div class="flex flex-col" style="gap:0.9rem;">
    <div class="card">
      <div class="num">FRONTMATTER</div>
      <h3 style="font-size:1rem;">機器看的部分</h3>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.3rem;">
        <li class="muted" style="font-size:0.74rem;"><span class="mono">area</span> 領域，連回主題筆記</li>
        <li class="muted" style="font-size:0.74rem;"><span class="mono">tags</span> 標籤，自由打</li>
        <li class="muted" style="font-size:0.74rem;"><span class="mono">created</span> 建立日期</li>
      </ul>
    </div>
    <div class="card warm" style="border-color:rgba(179,157,219,0.3);">
      <div class="num purple">BODY</div>
      <h3 style="font-size:1rem;">人看的部分</h3>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.3rem;">
        <li class="muted" style="font-size:0.74rem;"><span class="purple">定義</span> 一句話講清楚這是什麼</li>
        <li class="muted" style="font-size:0.74rem;"><span class="purple">重點 / 範例</span> 三個月後也看得懂</li>
        <li class="muted" style="font-size:0.74rem;"><span class="purple">相關概念</span> wikilinks 撐起知識網</li>
        <li class="muted" style="font-size:0.74rem;"><span class="purple">參考資料</span> 留證據</li>
      </ul>
    </div>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="flex flex-col items-center" style="gap:1.6rem;">
  <div class="mono" style="font-size:0.78rem; letter-spacing:0.25em; color:var(--ink-3);">
    <span class="live-dot"></span>LIVE NOW
  </div>
  <h1 style="font-size:5rem; font-weight:600; letter-spacing:-0.03em; line-height:1;">Live Demo</h1>
  <div class="mono dim" style="font-size:0.78rem; letter-spacing:0.15em;">─── 如果出錯了，那也是這場 talk 的一部分。</div>
</div>

---

<div class="eyebrow">DAILY · 早晨</div>
<h2 class="title" style="margin-top:0.2rem;"><span class="mono purple">/start-my-day</span></h2>
<p class="muted" style="font-size:0.9rem;">把昨天接起來，把今天框出來。</p>

<div style="display:grid; grid-template-columns: 1fr 1.3fr; gap:2rem; margin-top:0.5rem;">
  <div class="flex flex-col justify-center" style="gap:1.1rem;">
    <div>
      <div class="eyebrow muted">什麼時候用</div>
      <p style="font-size:0.82rem; margin-top:0.3rem; color:var(--ink-2);">每天早上開機後第一件事。</p>
    </div>
    <div>
      <div class="eyebrow muted">會做什麼</div>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.35rem; margin-top:0.4rem;">
        <li class="muted" style="font-size:0.78rem;">讀昨日的日記</li>
        <li class="muted" style="font-size:0.78rem;">掃 <span class="mono">status:active</span> 的專案</li>
        <li class="muted" style="font-size:0.78rem;">掃收件匣的新想法</li>
        <li class="muted" style="font-size:0.78rem;">問你三個問題、寫好今日筆記</li>
      </ul>
    </div>
  </div>

  <div class="term" style="align-self:flex-start;">
    <div class="term-bar"><div class="dots"><i></i><i></i><i></i></div><div class="ttl">~/vault — claude</div></div>
    <pre><span class="dim">[Telegram]</span> <span class="dim">&gt;</span> 早安
<span> </span>
  <span class="c">[agent picks: start-my-day]</span>
<span> </span>
  <span class="lime">✓</span> 讀 <span class="amber">10_日記/2026-04-24.md</span>
  <span class="lime">✓</span> 掃描 5 個 active 專案、3 個收件匣
<span> </span>
  <span class="amber">?</span> 今天的重點是什麼？
<span class="dim">&gt;</span> 控制熱量 + sprint review
<span> </span>
  <span class="amber">?</span> 有沒有新想法、阻礙？
<span class="dim">&gt;</span> 昨晚吃太飽
<span> </span>
  <span class="lime">✓</span> 建好 <span class="amber">10_日記/2026-04-25.md</span>
  <span class="lime">✓</span> link 到 <span class="purple">[[20_專案/減肥計畫]]</span></pre>
  </div>
</div>

---

<div class="eyebrow">DAILY · 資訊</div>
<h2 class="title" style="margin-top:0.2rem;"><span class="mono purple">/ai-newsletters</span></h2>
<p class="muted" style="font-size:0.9rem;">每天的 AI 新聞，自動摘要進 vault。</p>

<div style="display:grid; grid-template-columns: 1fr 1.3fr; gap:2rem; margin-top:0.5rem;">
  <div class="flex flex-col justify-center" style="gap:1.1rem;">
    <div>
      <div class="eyebrow muted">什麼時候用</div>
      <p style="font-size:0.82rem; margin-top:0.3rem; color:var(--ink-2);">早上想知道 AI 圈昨天發生什麼。</p>
    </div>
    <div>
      <div class="eyebrow muted">會做什麼</div>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.35rem; margin-top:0.4rem;">
        <li class="muted" style="font-size:0.78rem;">抓 TLDR AI、The Rundown AI</li>
        <li class="muted" style="font-size:0.78rem;">抽當天最重要的幾條</li>
        <li class="muted" style="font-size:0.78rem;">寫進 <span class="mono">50_資源/newsletters/</span></li>
      </ul>
    </div>
  </div>

  <div class="term" style="align-self:flex-start;">
    <div class="term-bar"><div class="dots"><i></i><i></i><i></i></div><div class="ttl">~/vault — claude</div></div>
    <pre><span class="dim">[Telegram]</span> <span class="dim">&gt;</span> 今天 AI 圈有什麼
<span> </span>
  <span class="c">[agent picks: ai-newsletters]</span>
<span> </span>
  <span class="lime">✓</span> 抓 TLDR AI (2026-04-25)
  <span class="lime">✓</span> 抓 The Rundown AI (2026-04-25)
<span> </span>
  整理出 8 條重點：
    <span class="dim">·</span> Anthropic 釋出 Claude 4.7
    <span class="dim">·</span> AI 卡路里記錄 app 爆紅
    <span class="dim">·</span> ...
<span> </span>
  <span class="lime">✓</span> 寫進 <span class="amber">50_資源/newsletters/2026-04-25.md</span>
  <span class="lime">✓</span> 連回 <span class="purple">[[10_日記/2026-04-25]]</span></pre>
  </div>
</div>

---

<div class="eyebrow">DAILY · 產品</div>
<h2 class="title" style="margin-top:0.2rem;"><span class="mono purple">/ai-products</span></h2>
<p class="muted" style="font-size:0.9rem;">追蹤新冒出來的 AI 產品。</p>

<div style="display:grid; grid-template-columns: 1fr 1.3fr; gap:2rem; margin-top:0.5rem;">
  <div class="flex flex-col justify-center" style="gap:1.1rem;">
    <div>
      <div class="eyebrow muted">什麼時候用</div>
      <p style="font-size:0.82rem; margin-top:0.3rem; color:var(--ink-2);">想知道今天有沒有值得追的新工具。</p>
    </div>
    <div>
      <div class="eyebrow muted">會做什麼</div>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.35rem; margin-top:0.4rem;">
        <li class="muted" style="font-size:0.78rem;">掃 Product Hunt + Hacker News</li>
        <li class="muted" style="font-size:0.78rem;">看 GitHub Trending</li>
        <li class="muted" style="font-size:0.78rem;">篩出 AI 相關、值得追蹤的</li>
        <li class="muted" style="font-size:0.78rem;">歸檔到 <span class="mono">50_資源/products/</span></li>
      </ul>
    </div>
  </div>

  <div class="term" style="align-self:flex-start;">
    <div class="term-bar"><div class="dots"><i></i><i></i><i></i></div><div class="ttl">~/vault — claude</div></div>
    <pre><span class="dim">[Telegram]</span> <span class="dim">&gt;</span> 今天有什麼新 AI 產品
<span> </span>
  <span class="c">[agent picks: ai-products]</span>
<span> </span>
  <span class="lime">✓</span> Product Hunt top 20
  <span class="lime">✓</span> Hacker News AI 標籤
  <span class="lime">✓</span> GitHub Trending
<span> </span>
  篩出 7 個值得追蹤：
    <span class="dim">·</span> cursor-cli         <span class="dim">(#1 PH)</span>
    <span class="dim">·</span> AI 飲食教練 Cal-AI <span class="dim">(HN 482)</span>
    <span class="dim">·</span> obsidian-claude    <span class="dim">(GH ⭐ 3.1k)</span>
    <span class="dim">·</span> ...
<span> </span>
  <span class="lime">✓</span> 寫進 <span class="amber">50_資源/products/2026-04-25.md</span></pre>
  </div>
</div>

---

<div class="eyebrow">KNOWLEDGE · 專案</div>
<h2 class="title" style="margin-top:0.2rem;"><span class="mono purple">/kickoff</span></h2>
<p class="muted" style="font-size:0.9rem;">把腦中的想法變成有結構的專案。</p>

<div style="display:grid; grid-template-columns: 1fr 1.3fr; gap:2rem; margin-top:0.5rem;">
  <div class="flex flex-col justify-center" style="gap:1.1rem;">
    <div>
      <div class="eyebrow muted">什麼時候用</div>
      <p style="font-size:0.82rem; margin-top:0.3rem; color:var(--ink-2);">收件匣裡有個想法，想動手了。</p>
    </div>
    <div>
      <div class="eyebrow muted">會做什麼</div>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.35rem; margin-top:0.4rem;">
        <li class="muted" style="font-size:0.78rem;"><span class="purple">[planner]</span> 規劃要怎麼做</li>
        <li class="muted" style="font-size:0.78rem;">使用者確認</li>
        <li class="muted" style="font-size:0.78rem;"><span class="purple">[executor]</span> 建立目標 / 任務 / 進度三段式專案</li>
        <li class="muted" style="font-size:0.78rem;">自動連回收件匣來源</li>
      </ul>
    </div>
  </div>

  <div class="term" style="align-self:flex-start;">
    <div class="term-bar"><div class="dots"><i></i><i></i><i></i></div><div class="ttl">~/vault — claude</div></div>
    <pre><span class="dim">[Telegram]</span> <span class="dim">&gt;</span> 我想開始減肥
<span> </span>
  <span class="c">[agent picks: kickoff]</span>
<span> </span>
  <span class="c">[planner] 我建議的計畫：</span>
    <span class="dim">·</span> 階段一：建立飲食紀錄習慣（2 週）
    <span class="dim">·</span> 階段二：熱量赤字 + 運動（6 週）
    <span class="dim">·</span> 階段三：維持期（持續）
  <span class="amber">?</span> 確認嗎？
<span> </span>
<span class="dim">&gt;</span> ok
<span> </span>
  <span class="c">[executor] 建立中…</span>
  <span class="lime">✓</span> <span class="amber">20_專案/減肥計畫.md</span>
        <span class="dim">(目標 / 任務 / 進度 三段式)</span>
  <span class="lime">✓</span> 連回 <span class="purple">[[00_收件匣/想法-減肥]]</span></pre>
  </div>
</div>

---

<div class="eyebrow">KNOWLEDGE · 研究</div>
<h2 class="title" style="margin-top:0.2rem;"><span class="mono purple">/research</span></h2>
<p class="muted" style="font-size:0.9rem;">給一個主題，自己跑完整深度研究。</p>

<div style="display:grid; grid-template-columns: 1fr 1.3fr; gap:2rem; margin-top:0.5rem;">
  <div class="flex flex-col justify-center" style="gap:1.1rem;">
    <div>
      <div class="eyebrow muted">什麼時候用</div>
      <p style="font-size:0.82rem; margin-top:0.3rem; color:var(--ink-2);">想搞懂一個新領域，但懶得自己 google。</p>
    </div>
    <div>
      <div class="eyebrow muted">會做什麼</div>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.35rem; margin-top:0.4rem;">
        <li class="muted" style="font-size:0.78rem;"><span class="purple">[planner]</span> 規劃研究方向</li>
        <li class="muted" style="font-size:0.78rem;">使用者確認 plan</li>
        <li class="muted" style="font-size:0.78rem;"><span class="purple">[executor]</span> 抓資料、整理、寫筆記</li>
        <li class="muted" style="font-size:0.78rem;">自動拆原子知識條目互相 link</li>
      </ul>
    </div>
  </div>

  <div class="term" style="align-self:flex-start;">
    <div class="term-bar"><div class="dots"><i></i><i></i><i></i></div><div class="ttl">~/vault — claude</div></div>
    <pre><span class="dim">[Telegram]</span> <span class="dim">&gt;</span> 幫我研究 168 斷食
<span> </span>
  <span class="c">[agent picks: research]</span>
<span> </span>
  <span class="c">[planner] 規劃方向：</span>
    <span class="dim">·</span> 168 的原理跟代謝機制
    <span class="dim">·</span> 跟其他斷食法對照
    <span class="dim">·</span> 適合誰、不適合誰
  <span class="amber">?</span> 確認嗎？
<span> </span>
<span class="dim">&gt;</span> ok
<span> </span>
  <span class="c">[executor] 執行中…</span>
  <span class="lime">✓</span> 抓 12 篇文章、3 本書摘要
  <span class="lime">✓</span> <span class="amber">30_研究/168-fasting.md</span>
  <span class="lime">✓</span> 拆 8 條原子概念 → <span class="amber">40_知識庫/</span>
  <span class="lime">✓</span> 全部相互 link 完成</pre>
  </div>
</div>

---

<div class="eyebrow">KNOWLEDGE · 拆解</div>
<h2 class="title" style="margin-top:0.2rem;"><span class="mono purple">/parse-knowledge</span></h2>
<p class="muted" style="font-size:0.9rem;">一段文字 → 一群可搜尋的原子知識。</p>

<div style="display:grid; grid-template-columns: 1fr 1.3fr; gap:2rem; margin-top:0.5rem;">
  <div class="flex flex-col justify-center" style="gap:1.1rem;">
    <div>
      <div class="eyebrow muted">什麼時候用</div>
      <p style="font-size:0.82rem; margin-top:0.3rem; color:var(--ink-2);">看完一篇文章 / 一段 YT 逐字稿想留下精華。</p>
    </div>
    <div>
      <div class="eyebrow muted">會做什麼</div>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.35rem; margin-top:0.4rem;">
        <li class="muted" style="font-size:0.78rem;">識別出獨立的「概念」</li>
        <li class="muted" style="font-size:0.78rem;">每個概念一個 .md 檔</li>
        <li class="muted" style="font-size:0.78rem;">寫進 <span class="mono">40_知識庫/</span> 互相 link</li>
        <li class="muted" style="font-size:0.78rem;">連回今日筆記</li>
      </ul>
    </div>
  </div>

  <div class="term" style="align-self:flex-start;">
    <div class="term-bar"><div class="dots"><i></i><i></i><i></i></div><div class="ttl">~/vault — claude</div></div>
    <pre><span class="dim">[Telegram]</span> <span class="dim">&gt;</span> 幫我整理這段：
<span class="dim">[Telegram]</span> <span class="dim">&gt;</span> <span class="c">「(貼上一篇 1500 字減肥文章)」</span>
<span> </span>
  <span class="c">[agent picks: parse-knowledge]</span>
<span> </span>
  分析中…
  識別出 5 個原子概念：
    <span class="dim">·</span> 熱量赤字.md
    <span class="dim">·</span> 基礎代謝率.md
    <span class="dim">·</span> 蛋白質攝取.md
    <span class="dim">·</span> NEAT 非運動消耗.md
    <span class="dim">·</span> 體脂 vs 體重.md
<span> </span>
  <span class="lime">✓</span> 全部寫進 <span class="amber">40_知識庫/</span>
  <span class="lime">✓</span> 5 條原子互相 link
  <span class="lime">✓</span> 連回 <span class="purple">[[10_日記/2026-04-25]]</span></pre>
  </div>
</div>

---

<div class="eyebrow">KNOWLEDGE · 問答</div>
<h2 class="title" style="margin-top:0.2rem;"><span class="mono purple">/ask</span></h2>
<p class="muted" style="font-size:0.9rem;">先搜 vault 再回答，不亂堆筆記。</p>

<div style="display:grid; grid-template-columns: 1fr 1.3fr; gap:2rem; margin-top:0.5rem;">
  <div class="flex flex-col justify-center" style="gap:1.1rem;">
    <div>
      <div class="eyebrow muted">什麼時候用</div>
      <p style="font-size:0.82rem; margin-top:0.3rem; color:var(--ink-2);">心裡冒出一個問題，想快速回答 — 不一定要存。</p>
    </div>
    <div>
      <div class="eyebrow muted">會做什麼</div>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.35rem; margin-top:0.4rem;">
        <li class="muted" style="font-size:0.78rem;">先搜 vault 看以前寫過沒</li>
        <li class="muted" style="font-size:0.78rem;">直接回答，不堆檔</li>
        <li class="muted" style="font-size:0.78rem;">有價值的內容才問你要不要存</li>
      </ul>
    </div>
  </div>

  <div class="term" style="align-self:flex-start;">
    <div class="term-bar"><div class="dots"><i></i><i></i><i></i></div><div class="ttl">~/vault — claude</div></div>
    <pre><span class="dim">[Telegram]</span> <span class="dim">&gt;</span> 我之前看過什麼跟減肥有關的？
<span> </span>
  <span class="c">[agent picks: ask]</span>
<span> </span>
  <span class="c">[搜 vault]</span>
    <span class="dim">·</span> <span class="amber">40_知識庫/熱量赤字.md</span>
    <span class="dim">·</span> <span class="amber">40_知識庫/168-fasting.md</span>
    <span class="dim">·</span> <span class="amber">10_日記/2025-09-15.md</span>
<span> </span>
  <span class="n">你 9 月開始試 168 斷食，</span>
  <span class="n">寫過熱量赤字怎麼計算，</span>
  <span class="n">9/15 那天有記到「下午容易嘴饞」。</span>
<span> </span>
  <span class="amber">?</span> 要整理成一篇 summary 嗎？
<span> </span>
<span class="dim">&gt;</span> ok
<span> </span>
  <span class="lime">✓</span> 寫 <span class="amber">40_知識庫/減肥-我的歷史.md</span></pre>
  </div>
</div>

---

<div class="eyebrow">KNOWLEDGE · 發想</div>
<h2 class="title" style="margin-top:0.2rem;"><span class="mono purple">/brainstorm</span></h2>
<p class="muted" style="font-size:0.9rem;">三階段：發散 → 收斂 → 行動。</p>

<div style="display:grid; grid-template-columns: 1fr 1.3fr; gap:2rem; margin-top:0.5rem;">
  <div class="flex flex-col justify-center" style="gap:1.1rem;">
    <div>
      <div class="eyebrow muted">什麼時候用</div>
      <p style="font-size:0.82rem; margin-top:0.3rem; color:var(--ink-2);">卡住了，需要先把腦袋打開再收回來。</p>
    </div>
    <div>
      <div class="eyebrow muted">會做什麼</div>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.35rem; margin-top:0.4rem;">
        <li class="muted" style="font-size:0.78rem;"><span class="purple">階段 1</span> 發散 — 丟很多方向</li>
        <li class="muted" style="font-size:0.78rem;"><span class="purple">階段 2</span> 收斂 — 挑出主軸</li>
        <li class="muted" style="font-size:0.78rem;"><span class="purple">階段 3</span> 行動 — 先做哪個</li>
      </ul>
    </div>
  </div>

  <div class="term" style="align-self:flex-start;">
    <div class="term-bar"><div class="dots"><i></i><i></i><i></i></div><div class="ttl">~/vault — claude</div></div>
    <pre><span class="dim">[Telegram]</span> <span class="dim">&gt;</span> 我下個月想嘗試什麼減肥方法？
<span> </span>
  <span class="c">[agent picks: brainstorm]</span>
<span> </span>
  <span class="c">[1. 發散]</span> 12 個可能方向：
    <span class="dim">·</span> 168 / 52 / 低碳 / 地中海飲食
    <span class="dim">·</span> HIIT / 飛輪 / 散步打卡
    <span class="dim">·</span> ...
<span> </span>
  <span class="amber">?</span> 你比較有感的是？
<span> </span>
<span class="dim">&gt;</span> 168 + 散步打卡
<span> </span>
  <span class="c">[2. 收斂]</span> 整理成 3 條主軸：
    <span class="dim">·</span> 飲食控制（168）
    <span class="dim">·</span> 每日 8000 步
    <span class="dim">·</span> 一週 2 次重訓
<span> </span>
  <span class="c">[3. 行動]</span> 先做哪個？
<span> </span>
<span class="dim">&gt;</span> 飲食控制
<span> </span>
  <span class="lime">✓</span> <span class="amber">30_研究/brainstorm-2026-04-25.md</span></pre>
  </div>
</div>

---

<div class="eyebrow">KNOWLEDGE · 收尾</div>
<h2 class="title" style="margin-top:0.2rem;"><span class="mono purple">/archive</span></h2>
<p class="muted" style="font-size:0.9rem;">完成的專案、處理過的收件匣，一鍵收掉。</p>

<div style="display:grid; grid-template-columns: 1fr 1.3fr; gap:2rem; margin-top:0.5rem;">
  <div class="flex flex-col justify-center" style="gap:1.1rem;">
    <div>
      <div class="eyebrow muted">什麼時候用</div>
      <p style="font-size:0.82rem; margin-top:0.3rem; color:var(--ink-2);">vault 開始有點亂、想清理現場。</p>
    </div>
    <div>
      <div class="eyebrow muted">會做什麼</div>
      <ul style="padding-left:1.1rem; display:flex; flex-direction:column; gap:0.35rem; margin-top:0.4rem;">
        <li class="muted" style="font-size:0.78rem;">掃 <span class="mono">status:done</span> 的專案</li>
        <li class="muted" style="font-size:0.78rem;">掃收件匣裡已被處理的</li>
        <li class="muted" style="font-size:0.78rem;">移到 <span class="mono">90_計畫/done</span> 跟 <span class="mono">99_系統/archive</span></li>
        <li class="muted" style="font-size:0.78rem;">所有 link 自動更新</li>
      </ul>
    </div>
  </div>

  <div class="term" style="align-self:flex-start;">
    <div class="term-bar"><div class="dots"><i></i><i></i><i></i></div><div class="ttl">~/vault — claude</div></div>
    <pre><span class="dim">[Telegram]</span> <span class="dim">&gt;</span> 整理一下 vault
<span> </span>
  <span class="c">[agent picks: archive]</span>
<span> </span>
  <span class="c">掃描中…</span>
  已完成的：
    <span class="dim">·</span> 20_專案/減肥-基礎期 <span class="dim">(status:done)</span>
    <span class="dim">·</span> 20_專案/2026Q1-OKR  <span class="dim">(status:done)</span>
    <span class="dim">·</span> 00_收件匣/3 個已處理項目
<span> </span>
  <span class="amber">?</span> 確定歸檔嗎？
<span> </span>
<span class="dim">&gt;</span> ok
<span> </span>
  <span class="lime">✓</span> 移到 <span class="amber">90_計畫/done/</span>
  <span class="lime">✓</span> 移到 <span class="amber">99_系統/archive/</span>
  <span class="lime">✓</span> 全 vault 的 link 都更新好</pre>
  </div>
</div>

---

<div class="eyebrow">TAKEAWAYS</div>
<h2 class="title" style="margin-top:0.3rem;">帶回家的<span class="purple">三件事</span>。</h2>

<div class="flex flex-col justify-center" style="gap:1.4rem; margin-top:1rem;">
  <div class="flex items-start" style="gap:1.5rem; padding-bottom:1rem; border-bottom:1px solid var(--line);">
    <div class="mono purple" style="font-size:2.4rem; line-height:1; min-width:70px;">01</div>
    <div>
      <div style="font-size:1.3rem; font-weight:600; color:var(--ink);">入口要在<span class="purple">你已經在的地方</span>。</div>
      <div class="muted" style="font-size:0.82rem; margin-top:0.3rem; line-height:1.5;">再好的工具，多開一個 app 你就不會用。Telegram、LINE、Discord 都可以 — 重點是「不開新 app」。</div>
    </div>
  </div>
  <div class="flex items-start" style="gap:1.5rem; padding-bottom:1rem; border-bottom:1px solid var(--line);">
    <div class="mono purple" style="font-size:2.4rem; line-height:1; min-width:70px;">02</div>
    <div>
      <div style="font-size:1.3rem; font-weight:600; color:var(--ink);">把<span class="purple">決策</span>交給 model，把<span class="purple">資料</span>留給自己。</div>
      <div class="muted" style="font-size:0.82rem; margin-top:0.3rem; line-height:1.5;">分類、標籤、摘要 — 都讓 Claude 來。但檔案永遠是純 Markdown 在自己硬碟，model 換了你也不痛。</div>
    </div>
  </div>
  <div class="flex items-start" style="gap:1.5rem;">
    <div class="mono purple" style="font-size:2.4rem; line-height:1; min-width:70px;">03</div>
    <div>
      <div style="font-size:1.3rem; font-weight:600; color:var(--ink);">Agent ≠ chatbot。<span class="purple">Agent = 會自己用工具的助理。</span></div>
      <div class="muted" style="font-size:0.82rem; margin-top:0.3rem; line-height:1.5;">當你不再把 LLM 當「對話框」，而是當「會替你做事的同事」 — 整個設計思路會打開。</div>
    </div>
  </div>
</div>

---
layout: center
---

<div class="h-full flex flex-col justify-between" style="width:100%;">
  <div class="mono" style="font-size:0.7rem; letter-spacing:0.18em; color:var(--ink-4);">─── END · 60:00 / 60:00</div>

  <div class="flex flex-col" style="gap:1rem;">
    <div class="eyebrow">FINAL</div>
    <h1 class="display" style="font-size:7rem;">Q<span style="color:var(--ink-4);">&amp;</span>A</h1>
  </div>

  <div class="flex justify-between items-end">
    <div class="serif" style="font-size:1.8rem; color:var(--ink-2);">Thanks for listening.</div>
    <div style="text-align:right;">
      <div class="mono" style="font-size:0.7rem; letter-spacing:0.15em; color:var(--ink-4); margin-bottom:0.2rem;">DECK</div>
      <div class="mono" style="font-size:0.78rem; color:var(--ink-3);">把聊天室變成第二大腦</div>
    </div>
  </div>
</div>
