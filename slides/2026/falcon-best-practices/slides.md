---
theme: default
title: Falcon 最佳實踐
info: Falcon 平台的好用法與壞用法對照、思維轉換建議與 P0 bug 回報流程。
class: text-center
transition: slide-left
mdc: true
colorSchema: light

talk:
  title: Falcon 最佳實踐
  description: Falcon 平台的好用法與壞用法對照、思維轉換建議與 P0 bug 回報流程。
  tags: [SAT]
  event: SAT
  date: 2026-05-11
---

<div class="h-full flex flex-col items-center justify-center text-center" style="gap:2.2rem;">
  <div class="icon-tile" style="width:80px; height:80px; border-radius:16px; background:var(--accent); font-size:40px;">⚡</div>
  <div class="flex flex-col items-center" style="gap:1rem;">
    <div class="tag">Falcon System</div>
    <h1 style="font-size:4.2rem; line-height:1;">Falcon<br/><span class="accent">最佳實踐</span></h1>
    <p style="font-size:1.25rem; color:var(--muted); font-weight:400;">Falcon 系統的好用法與壞用法</p>
  </div>
</div>

---

<div class="accent-bar" style="margin-bottom:1rem;"></div>
<h2 style="font-size:2.6rem;">Falcon 有哪些模組？</h2>
<p style="font-size:1rem; color:var(--muted); margin-top:0.4rem;">了解各模組的定位，才知道怎麼組合發揮最大價值</p>

<div class="grid grid-cols-2" style="gap:1.2rem; margin-top:1.6rem;">
  <div class="card flex items-center" style="gap:1.2rem;">
    <div class="icon-tile" style="width:56px; height:56px; background:#eef2ff; border:1px solid #4f46e522; font-size:26px;">💬</div>
    <div>
      <p style="font-weight:800; font-size:1.25rem; margin:0 0 0.2rem;">Chat</p>
      <p style="font-size:0.9rem; color:var(--muted); margin:0;">和 AI 對話、建立工具、部署應用</p>
    </div>
  </div>
  <div class="card flex items-center" style="gap:1.2rem;">
    <div class="icon-tile" style="width:56px; height:56px; background:#f5f3ff; border:1px solid #7c3aed22; font-size:26px;">⚡</div>
    <div>
      <p style="font-weight:800; font-size:1.25rem; margin:0 0 0.2rem;">Skills</p>
      <p style="font-size:0.9rem; color:var(--muted); margin:0;">可重複使用的提示詞模板</p>
    </div>
  </div>
  <div class="card flex items-center" style="gap:1.2rem;">
    <div class="icon-tile" style="width:56px; height:56px; background:#f0f9ff; border:1px solid #0369a122; font-size:26px;">📖</div>
    <div>
      <p style="font-weight:800; font-size:1.25rem; margin:0 0 0.2rem;">知識庫</p>
      <p style="font-size:0.9rem; color:var(--muted); margin:0;">公司知識的 AI 記憶庫</p>
    </div>
  </div>
  <div class="card flex items-center" style="gap:1.2rem;">
    <div class="icon-tile" style="width:56px; height:56px; background:#f0fdf4; border:1px solid #05966922; font-size:26px;">🤖</div>
    <div>
      <p style="font-weight:800; font-size:1.25rem; margin:0 0 0.2rem;">Agent</p>
      <p style="font-size:0.9rem; color:var(--muted); margin:0;">自動化執行多步驟任務的 AI 代理</p>
    </div>
  </div>
</div>

---

<div class="accent-bar" style="margin-bottom:1rem;"></div>
<h2 style="font-size:2.6rem;">先釐清 Falcon 的能力邊界</h2>
<p style="font-size:1rem; color:var(--muted); margin-top:0.4rem;">知道它能做什麼、不能做什麼，才能用在對的地方</p>

<div class="grid grid-cols-2" style="gap:1.5rem; margin-top:1.6rem;">
  <div class="card" style="border-top:3px solid var(--green);">
    <p class="label-good" style="margin-bottom:1rem;">✅ 可以做到</p>
    <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.7rem;">
      <li style="display:flex; align-items:center; gap:0.7rem;"><span class="green">✓</span><span style="font-size:0.95rem;">查詢資料庫（SELECT）</span></li>
      <li style="display:flex; align-items:center; gap:0.7rem;"><span class="green">✓</span><span style="font-size:0.95rem;">根據公司知識回答問題</span></li>
      <li style="display:flex; align-items:center; gap:0.7rem;"><span class="green">✓</span><span style="font-size:0.95rem;">產生報表、摘要、草稿</span></li>
      <li style="display:flex; align-items:center; gap:0.7rem;"><span class="green">✓</span><span style="font-size:0.95rem;">建立可重複使用的工具</span></li>
      <li style="display:flex; align-items:center; gap:0.7rem;"><span class="green">✓</span><span style="font-size:0.95rem;">串接很多公司正在用的第三方服務</span></li>
    </ul>
  </div>
  <div class="card" style="border-top:3px solid var(--red);">
    <p class="label-bad" style="margin-bottom:1rem;">❌ 不支援</p>
    <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.7rem;">
      <li style="display:flex; align-items:center; gap:0.7rem;"><span class="red">✕</span><span style="font-size:0.95rem;">自動爬取外部網站資料</span></li>
      <li style="display:flex; align-items:center; gap:0.7rem;"><span class="red">✕</span><span style="font-size:0.95rem;">寫入或修改資料</span></li>
      <li style="display:flex; align-items:center; gap:0.7rem;"><span class="red">✕</span><span style="font-size:0.95rem;">即時監控或排程自動執行</span></li>
      <li style="display:flex; align-items:center; gap:0.7rem;"><span class="red">✕</span><span style="font-size:0.95rem;">保證輸出 100% 正確</span></li>
      <li style="display:flex; align-items:center; gap:0.7rem;"><span class="red">✕</span><span style="font-size:0.95rem;">取代需要人工判斷的決策</span></li>
    </ul>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="flex flex-col items-center" style="gap:1.6rem;">
  <div class="icon-tile" style="width:80px; height:80px; border-radius:16px; background:var(--green); font-size:40px;">✅</div>
  <div class="flex flex-col items-center" style="gap:0.9rem;">
    <div class="accent-bar bar-green"></div>
    <h1 style="font-size:4.5rem;">好的用法</h1>
    <p style="font-size:1.25rem; color:var(--muted); font-weight:400;">這樣用，才能發揮 Falcon 的最大價值</p>
  </div>
</div>

---

<div class="dots green" style="margin-bottom:2rem;">
  <span class="accent-bar bar-green" style="margin-right:0.6rem;"></span>
  <span style="font-size:0.85rem; color:var(--muted); font-weight:600; margin-right:0.6rem;">好的用法 1 / 5</span>
  <i class="on"></i><i></i><i></i><i></i><i></i>
</div>

<div class="flex flex-col" style="gap:1.6rem;">
  <div class="flex items-center" style="gap:1.5rem;">
    <div class="icon-tile good-tile" style="width:80px; height:80px; font-size:40px;">🎯</div>
    <h2 style="font-size:2.6rem;">先想清楚你要解決什麼問題</h2>
  </div>
  <div class="card callout-good">
    <p style="font-size:1rem; margin:0 0 0.6rem;">💡</p>
    <p style="font-size:1.1rem; line-height:1.75; margin:0;">問題不清楚，答案就廢。先花 10 秒想清楚目的，才不會在來回修正上浪費更多時間。</p>
  </div>
</div>

---

<div class="dots green" style="margin-bottom:2rem;">
  <span class="accent-bar bar-green" style="margin-right:0.6rem;"></span>
  <span style="font-size:0.85rem; color:var(--muted); font-weight:600; margin-right:0.6rem;">好的用法 2 / 5</span>
  <i></i><i class="on"></i><i></i><i></i><i></i>
</div>

<div class="flex flex-col" style="gap:1.6rem;">
  <div class="flex items-center" style="gap:1.5rem;">
    <div class="icon-tile good-tile" style="width:80px; height:80px; font-size:40px;">🧱</div>
    <h2 style="font-size:2.6rem;">把重複的需求做成 Skill</h2>
  </div>
  <div class="card callout-good">
    <p style="font-size:1rem; margin:0 0 0.6rem;">💡</p>
    <p style="font-size:1.1rem; line-height:1.75; margin:0;">每次重打提示詞，輸出就每次不一樣。包成 Skill，一個標準、全員共用、結果穩定。</p>
  </div>
</div>

---

<div class="dots green" style="margin-bottom:2rem;">
  <span class="accent-bar bar-green" style="margin-right:0.6rem;"></span>
  <span style="font-size:0.85rem; color:var(--muted); font-weight:600; margin-right:0.6rem;">好的用法 3 / 5</span>
  <i></i><i></i><i class="on"></i><i></i><i></i>
</div>

<div class="flex flex-col" style="gap:1.6rem;">
  <div class="flex items-center" style="gap:1.5rem;">
    <div class="icon-tile good-tile" style="width:80px; height:80px; font-size:40px;">📚</div>
    <h2 style="font-size:2.6rem;">讓知識庫幫你補充背景知識</h2>
  </div>
  <div class="card callout-good">
    <p style="font-size:1rem; margin:0 0 0.6rem;">💡</p>
    <p style="font-size:1.1rem; line-height:1.75; margin:0;">沒掛知識庫的 AI 不認識你的公司。每次手動貼資料既累又容易漏，直接掛上去才是正解。</p>
  </div>
</div>

---

<div class="dots green" style="margin-bottom:2rem;">
  <span class="accent-bar bar-green" style="margin-right:0.6rem;"></span>
  <span style="font-size:0.85rem; color:var(--muted); font-weight:600; margin-right:0.6rem;">好的用法 4 / 5</span>
  <i></i><i></i><i></i><i class="on"></i><i></i>
</div>

<div class="flex flex-col" style="gap:1.6rem;">
  <div class="flex items-center" style="gap:1.5rem;">
    <div class="icon-tile good-tile" style="width:80px; height:80px; font-size:40px;">🔁</div>
    <h2 style="font-size:2.6rem;">好工具分享到 Marketplace</h2>
  </div>
  <div class="card callout-good">
    <p style="font-size:1rem; margin:0 0 0.6rem;">💡</p>
    <p style="font-size:1.1rem; line-height:1.75; margin:0;">每個人各做一份一樣的工具，是最大的浪費。做好一個、發布出去，全公司都省時間。</p>
  </div>
</div>

---

<div class="dots green" style="margin-bottom:2rem;">
  <span class="accent-bar bar-green" style="margin-right:0.6rem;"></span>
  <span style="font-size:0.85rem; color:var(--muted); font-weight:600; margin-right:0.6rem;">好的用法 5 / 5</span>
  <i></i><i></i><i></i><i></i><i class="on"></i>
</div>

<div class="flex flex-col" style="gap:1.6rem;">
  <div class="flex items-center" style="gap:1.5rem;">
    <div class="icon-tile good-tile" style="width:80px; height:80px; font-size:40px;">✅</div>
    <h2 style="font-size:2.6rem;">每次用完確認輸出是否正確</h2>
  </div>
  <div class="card callout-good">
    <p style="font-size:1rem; margin:0 0 0.6rem;">💡</p>
    <p style="font-size:1.1rem; line-height:1.75; margin:0;">AI 很會產出「看起來正確」的內容，但它可能是錯的。輸出只是草稿，最終責任在你。</p>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="flex flex-col items-center" style="gap:1.6rem;">
  <div class="icon-tile" style="width:80px; height:80px; border-radius:16px; background:var(--red); font-size:40px;">⛔</div>
  <div class="flex flex-col items-center" style="gap:0.9rem;">
    <div class="accent-bar bar-red"></div>
    <h1 style="font-size:4.5rem;">壞的用法</h1>
    <p style="font-size:1.25rem; color:var(--muted); font-weight:400;">這些習慣，會讓 Falcon 發揮不了作用</p>
  </div>
</div>

---

<div class="dots red" style="margin-bottom:1.4rem;">
  <span class="accent-bar bar-red" style="margin-right:0.6rem;"></span>
  <span style="font-size:0.85rem; color:var(--muted); font-weight:600; margin-right:0.6rem;">壞的用法 1 / 5</span>
  <i class="on"></i><i></i><i></i><i></i><i></i>
</div>

<div class="flex items-center" style="gap:1.5rem; margin-bottom:1.2rem;">
  <div class="icon-tile bad-tile" style="width:72px; height:72px; font-size:36px;">🤯</div>
  <h2 style="font-size:2.3rem;">把 AI 當成萬能神</h2>
</div>

<div class="flex flex-col" style="gap:0.9rem;">
  <div class="card callout-bad">
    <p class="label-bad" style="margin:0 0 0.5rem;">常見錯誤</p>
    <p style="font-size:1.02rem; line-height:1.7; margin:0;">「AI 應該什麼都知道」— 把所有事情丟給 AI，不管有沒有給足夠的背景資訊，期待它自己猜出你要什麼。</p>
  </div>
  <div class="card callout-good">
    <p class="label-good" style="margin:0 0 0.5rem;">正確做法</p>
    <p style="font-size:1.02rem; line-height:1.7; margin:0;">先給資料、先設定情境。AI 的輸出品質完全取決於你給的輸入品質，問題越清楚，答案越準確。</p>
  </div>
</div>

---

<div class="dots red" style="margin-bottom:1.4rem;">
  <span class="accent-bar bar-red" style="margin-right:0.6rem;"></span>
  <span style="font-size:0.85rem; color:var(--muted); font-weight:600; margin-right:0.6rem;">壞的用法 2 / 5</span>
  <i></i><i class="on"></i><i></i><i></i><i></i>
</div>

<div class="flex items-center" style="gap:1.5rem; margin-bottom:1.2rem;">
  <div class="icon-tile bad-tile" style="width:72px; height:72px; font-size:36px;">📋</div>
  <h2 style="font-size:2.3rem;">每次手動貼一大堆資料</h2>
</div>

<div class="flex flex-col" style="gap:0.9rem;">
  <div class="card callout-bad">
    <p class="label-bad" style="margin:0 0 0.5rem;">常見錯誤</p>
    <p style="font-size:1.02rem; line-height:1.7; margin:0;">每次問 AI 都要複製貼上同一份文件或表格，既浪費時間，也容易貼錯或漏掉重要資訊。</p>
  </div>
  <div class="card callout-good">
    <p class="label-good" style="margin:0 0 0.5rem;">正確做法</p>
    <p style="font-size:1.02rem; line-height:1.7; margin:0;">把常用的資料放進知識庫，讓 AI 自動取用，不用每次手動貼，也不會因為忘記貼而拿到錯誤答案。</p>
  </div>
</div>

---

<div class="dots red" style="margin-bottom:1.4rem;">
  <span class="accent-bar bar-red" style="margin-right:0.6rem;"></span>
  <span style="font-size:0.85rem; color:var(--muted); font-weight:600; margin-right:0.6rem;">壞的用法 3 / 5</span>
  <i></i><i></i><i class="on"></i><i></i><i></i>
</div>

<div class="flex items-center" style="gap:1.5rem; margin-bottom:1.2rem;">
  <div class="icon-tile bad-tile" style="width:72px; height:72px; font-size:36px;">🏗️</div>
  <h2 style="font-size:2.3rem;">工具做了從來不更新</h2>
</div>

<div class="flex flex-col" style="gap:0.9rem;">
  <div class="card callout-bad">
    <p class="label-bad" style="margin:0 0 0.5rem;">常見錯誤</p>
    <p style="font-size:1.02rem; line-height:1.7; margin:0;">建了工具之後就放著不管，資料來源過期了、流程改了、邏輯不對了，工具還在跑舊的版本。</p>
  </div>
  <div class="card callout-good">
    <p class="label-good" style="margin:0 0 0.5rem;">正確做法</p>
    <p style="font-size:1.02rem; line-height:1.7; margin:0;">定期檢查工具是否還能正常執行，知識庫內容有沒有過期。工具就像程式碼，需要維護才能保持有效。</p>
  </div>
</div>

---

<div class="dots red" style="margin-bottom:1.4rem;">
  <span class="accent-bar bar-red" style="margin-right:0.6rem;"></span>
  <span style="font-size:0.85rem; color:var(--muted); font-weight:600; margin-right:0.6rem;">壞的用法 4 / 5</span>
  <i></i><i></i><i></i><i class="on"></i><i></i>
</div>

<div class="flex items-center" style="gap:1.5rem; margin-bottom:1.2rem;">
  <div class="icon-tile bad-tile" style="width:72px; height:72px; font-size:36px;">💬</div>
  <h2 style="font-size:2.3rem;">用 Chat 做應該用工具做的事</h2>
</div>

<div class="flex flex-col" style="gap:0.9rem;">
  <div class="card callout-bad">
    <p class="label-bad" style="margin:0 0 0.5rem;">常見錯誤</p>
    <p style="font-size:1.02rem; line-height:1.7; margin:0;">同樣的需求每天重複問 AI，每次都要重新說明一遍背景，花了大量時間在重複的對話上。</p>
  </div>
  <div class="card callout-good">
    <p class="label-good" style="margin:0 0 0.5rem;">正確做法</p>
    <p style="font-size:1.02rem; line-height:1.7; margin:0;">同樣的任務做超過三次，就該把它包成 Skill 或 Deploy 成工具。一次設定，之後一鍵執行。</p>
  </div>
</div>

---

<div class="dots red" style="margin-bottom:1.4rem;">
  <span class="accent-bar bar-red" style="margin-right:0.6rem;"></span>
  <span style="font-size:0.85rem; color:var(--muted); font-weight:600; margin-right:0.6rem;">壞的用法 5 / 5</span>
  <i></i><i></i><i></i><i></i><i class="on"></i>
</div>

<div class="flex items-center" style="gap:1.5rem; margin-bottom:1.2rem;">
  <div class="icon-tile bad-tile" style="width:72px; height:72px; font-size:36px;">🗂️</div>
  <h2 style="font-size:2.3rem;">一個知識庫放所有東西</h2>
</div>

<div class="flex flex-col" style="gap:0.9rem;">
  <div class="card callout-bad">
    <p class="label-bad" style="margin:0 0 0.5rem;">常見錯誤</p>
    <p style="font-size:1.02rem; line-height:1.7; margin:0;">把全公司所有文件都丟進同一個知識庫，以為資料越多 AI 越聰明，結果 AI 反而在一堆雜訊裡找不到對的答案。</p>
  </div>
  <div class="card callout-good">
    <p class="label-good" style="margin:0 0 0.5rem;">正確做法</p>
    <p style="font-size:1.02rem; line-height:1.7; margin:0;">按主題分庫，每個知識庫只放一個領域的內容。知識庫越聚焦，AI 召回的準確率越高。</p>
  </div>
</div>

---

<div class="accent-bar" style="margin-bottom:1rem;"></div>
<h2 style="font-size:2.6rem;">思維轉換</h2>
<p style="font-size:1rem; color:var(--muted); margin-top:0.4rem;">用 AI 工具最重要的不是技術，是心態</p>

<div class="flex flex-col" style="gap:0.8rem; margin-top:1.3rem;">
  <div class="card flex items-center" style="gap:1rem; padding:0.9rem 1.4rem;">
    <div class="pill-from flex-1 text-center" style="border-radius:8px; padding:0.55rem 1rem; font-size:0.95rem; font-weight:600;">「AI 幫我想」</div>
    <span style="color:var(--muted); flex-shrink:0;">→</span>
    <div class="pill-to flex-1 text-center" style="border-radius:8px; padding:0.55rem 1rem; font-size:0.95rem; font-weight:600;">「我想清楚，AI 幫我執行」</div>
    <div class="text-center" style="width:140px; font-size:0.78rem; color:var(--muted); flex-shrink:0;">越清楚的問題，越好的答案</div>
  </div>
  <div class="card flex items-center" style="gap:1rem; padding:0.9rem 1.4rem;">
    <div class="pill-from flex-1 text-center" style="border-radius:8px; padding:0.55rem 1rem; font-size:0.95rem; font-weight:600;">「一次性用完就算」</div>
    <span style="color:var(--muted); flex-shrink:0;">→</span>
    <div class="pill-to flex-1 text-center" style="border-radius:8px; padding:0.55rem 1rem; font-size:0.95rem; font-weight:600;">「重複的需求包成工具或 Skill」</div>
    <div class="text-center" style="width:140px; font-size:0.78rem; color:var(--muted); flex-shrink:0;">好工具讓整個團隊受益</div>
  </div>
  <div class="card flex items-center" style="gap:1rem; padding:0.9rem 1.4rem;">
    <div class="pill-from flex-1 text-center" style="border-radius:8px; padding:0.55rem 1rem; font-size:0.95rem; font-weight:600;">「AI 說的應該都對」</div>
    <span style="color:var(--muted); flex-shrink:0;">→</span>
    <div class="pill-to flex-1 text-center" style="border-radius:8px; padding:0.55rem 1rem; font-size:0.95rem; font-weight:600;">「AI 是助手，人負責最終判斷」</div>
    <div class="text-center" style="width:140px; font-size:0.78rem; color:var(--muted); flex-shrink:0;">AI 輔助決策，不替代決策</div>
  </div>
  <div class="card flex items-center" style="gap:1rem; padding:0.9rem 1.4rem;">
    <div class="pill-from flex-1 text-center" style="border-radius:8px; padding:0.55rem 1rem; font-size:0.95rem; font-weight:600;">「越多資料越好」</div>
    <span style="color:var(--muted); flex-shrink:0;">→</span>
    <div class="pill-to flex-1 text-center" style="border-radius:8px; padding:0.55rem 1rem; font-size:0.95rem; font-weight:600;">「精準的資料比大量資料更有用」</div>
    <div class="text-center" style="width:140px; font-size:0.78rem; color:var(--muted); flex-shrink:0;">品質 &gt; 數量</div>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="flex flex-col items-center" style="gap:1.4rem;">
  <h1 style="font-size:6rem;">最後....</h1>
  <div class="accent-bar" style="width:60px;"></div>
</div>

---

<div class="accent-bar" style="margin-bottom:1rem;"></div>
<h2 style="font-size:2.6rem;">開發者的小碎嘴</h2>

<div class="flex flex-col" style="gap:0.7rem; margin-top:1.4rem; max-width:680px;">
  <div class="card flex items-center" style="gap:1rem; padding:0.85rem 1.3rem;"><span style="font-size:1.4rem; flex-shrink:0;">📄</span><p style="font-size:0.98rem; font-weight:500; margin:0;">上傳了 200 頁 PDF</p></div>
  <div class="card flex items-center" style="gap:1rem; padding:0.85rem 1.3rem;"><span style="font-size:1.4rem; flex-shrink:0;">🤔</span><p style="font-size:0.98rem; font-weight:500; margin:0;">同一句話問了三次</p></div>
  <div class="card flex items-center" style="gap:1rem; padding:0.85rem 1.3rem;"><span style="font-size:1.4rem; flex-shrink:0;">🪄</span><p style="font-size:0.98rem; font-weight:500; margin:0;">把十個需求塞進一句話</p></div>
  <div class="card flex items-center" style="gap:1rem; padding:0.85rem 1.3rem;"><span style="font-size:1.4rem; flex-shrink:0;">💀</span><p style="font-size:0.98rem; font-weight:500; margin:0;">我不知道怎麼說，你猜一下</p></div>
  <div class="card flex items-center" style="gap:1rem; padding:0.85rem 1.3rem;"><span style="font-size:1.4rem; flex-shrink:0;">🎤</span><p style="font-size:0.98rem; font-weight:500; margin:0;">不要叫他去搶演唱會門票</p></div>
  <div class="card flex items-center" style="gap:1rem; padding:0.85rem 1.3rem;"><span style="font-size:1.4rem; flex-shrink:0;">🐛</span><p style="font-size:0.98rem; font-weight:500; margin:0;">回報 bug 時，請附上 ID</p></div>
  <div class="card flex items-center" style="gap:1rem; padding:0.85rem 1.3rem;"><span style="font-size:1.4rem; flex-shrink:0;">🙏</span><p style="font-size:0.98rem; font-weight:500; margin:0;">一定要好好使用</p></div>
</div>

---
layout: center
class: text-center
---

<div class="flex flex-col items-center" style="gap:1.4rem;">
  <h1 style="font-size:5.5rem;">最後的最後...</h1>
  <div class="accent-bar" style="width:60px;"></div>
</div>

---

<div class="flex items-center" style="gap:1.2rem; margin-bottom:1.6rem;">
  <div class="icon-tile bad-tile" style="width:64px; height:64px; font-size:30px;">🐛</div>
  <div>
    <div class="accent-bar bar-red" style="margin-bottom:0.6rem;"></div>
    <h2 style="font-size:2.6rem; line-height:1;">P0 Bug 回報計劃</h2>
  </div>
</div>

<div class="grid grid-cols-2" style="gap:1rem; margin-bottom:1.6rem;">
  <div class="card" style="padding:1.1rem;">
    <p style="font-weight:700; font-size:0.95rem; margin:0 0 0.4rem;">資安漏洞</p>
    <p style="font-size:0.88rem; color:var(--muted); margin:0;">可能導致未授權存取或資料洩漏</p>
  </div>
  <div class="card" style="padding:1.1rem;">
    <p style="font-weight:700; font-size:0.95rem; margin:0 0 0.4rem;">資料異常</p>
    <p style="font-size:0.88rem; color:var(--muted); margin:0;">資料遭竄改、刪除或不應顯示給使用者</p>
  </div>
</div>

<p style="font-size:1rem; color:var(--muted); line-height:1.75;">
P0 是最高優先等級，指的是<strong>影響安全或造成業務中斷的緊急問題</strong>，不是一般的小問題。發現任何符合條件的情況，請立即回報給我，我會 6 小時內回應。
</p>

---
layout: center
class: text-center
---

<div class="flex flex-col items-center" style="gap:2rem;">
  <div class="icon-tile" style="width:80px; height:80px; border-radius:16px; background:var(--accent); font-size:40px;">💬</div>
  <div class="flex flex-col items-center" style="gap:0.7rem;">
    <div class="accent-bar"></div>
    <h1 style="font-size:4.5rem;">Q &amp; A</h1>
    <p style="font-size:1.25rem; color:var(--muted); font-weight:400;">有任何問題都可以問</p>
  </div>
</div>
