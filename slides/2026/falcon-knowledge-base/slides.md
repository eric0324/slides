---
theme: default
title: Falcon 知識庫功能指南
info: Falcon 平台知識庫的核心功能、建立流程、知識點格式、審核機制與成員管理。
class: text-center
transition: slide-left
mdc: true
colorSchema: light

talk:
  title: Falcon 知識庫功能指南
  description: Falcon 平台知識庫的核心功能、建立流程、知識點格式、審核機制與成員管理。
  tags: [SAT]
  event: SAT
  date: 2026-05-11
---

<div class="h-full flex flex-col items-center justify-center text-center" style="gap:2.5rem;">
  <div class="icon-chip solid lg">📖</div>
  <div class="flex flex-col items-center" style="gap:1rem;">
    <div class="tag">Knowledge Base</div>
    <h1 style="font-size:4.6rem; font-weight:900; letter-spacing:-0.03em; line-height:1;">知識庫<br/><span class="accent">功能指南</span></h1>
  </div>
</div>

---

<div class="accent-bar" style="margin-bottom:1rem;"></div>
<h2>什麼是知識庫？</h2>

<div class="grid-3" style="margin-top:1.5rem;">
  <div class="card">
    <div class="icon-chip">🗄️</div>
    <h3>結構化的知識儲存庫</h3>
    <p>把公司的 SOP、產品知識、FAQ 整理成 AI 可讀取的知識點</p>
  </div>
  <div class="card">
    <div class="icon-chip">💬</div>
    <h3>對話時即時召回</h3>
    <p>AI 在回答問題時自動找到最相關的資訊，不需要你貼出處</p>
  </div>
  <div class="card">
    <div class="icon-chip">⚡</div>
    <h3>從通用 AI 變專業助手</h3>
    <p>沒有知識庫 = 通用 AI；有知識庫 = 懂你公司的 AI 專家</p>
  </div>
</div>

<div class="note" style="margin-top:1.5rem;">
  <span style="font-size:1.25rem;">💡</span>
  <p>想像成「AI 的公司百科全書」— 你塞進去什麼知識，AI 就會用什麼知識回答</p>
</div>

---

<div class="accent-bar" style="margin-bottom:1rem;"></div>
<h2>知識庫四大功能</h2>

<div class="grid-2" style="margin-top:1.5rem;">
  <div class="card" style="flex-direction:row; align-items:center;">
    <div class="icon-chip">📄</div>
    <div>
      <p style="font-weight:700; font-size:1rem; color:var(--text);">知識點管理</p>
      <p style="font-size:0.85rem;">手動新增或批次上傳</p>
    </div>
  </div>
  <div class="card" style="flex-direction:row; align-items:center;">
    <div class="icon-chip">⬆️</div>
    <div>
      <p style="font-weight:700; font-size:1rem; color:var(--text);">多格式上傳</p>
      <p style="font-size:0.85rem;">Notion、Google Drive、手動輸入</p>
    </div>
  </div>
  <div class="card" style="flex-direction:row; align-items:center;">
    <div class="icon-chip">✅</div>
    <div>
      <p style="font-weight:700; font-size:1rem; color:var(--text);">審核機制</p>
      <p style="font-size:0.85rem;">確保知識品質</p>
    </div>
  </div>
  <div class="card" style="flex-direction:row; align-items:center;">
    <div class="icon-chip">👥</div>
    <div>
      <p style="font-weight:700; font-size:1rem; color:var(--text);">成員協作</p>
      <p style="font-size:0.85rem;">多人共同維護</p>
    </div>
  </div>
</div>

---

<div class="accent-bar" style="margin-bottom:1rem;"></div>
<h2>三步驟建立知識庫</h2>

<div class="grid-3" style="margin-top:1.2rem;">
  <div class="card">
    <div class="flex items-center justify-between">
      <span style="font-size:2.2rem; font-weight:900; color:var(--border); letter-spacing:-0.02em;">01</span>
      <div class="icon-chip solid">📖</div>
    </div>
    <h3>建立知識庫</h3>
    <p style="font-size:0.85rem;">取一個清楚的名稱和描述</p>
    <div class="note" style="font-size:0.78rem;">例：「客服 FAQ」「產品規格庫」</div>
  </div>
  <div class="card">
    <div class="flex items-center justify-between">
      <span style="font-size:2.2rem; font-weight:900; color:var(--border); letter-spacing:-0.02em;">02</span>
      <div class="icon-chip solid">✏️</div>
    </div>
    <h3>設定 System Prompt</h3>
    <p style="font-size:0.85rem;">告訴 AI 這個知識庫的用途和回答方式</p>
    <div class="note" style="font-size:0.78rem;">例：「你是客服助手，語氣要親切，用這個知識庫回答問題」</div>
  </div>
  <div class="card">
    <div class="flex items-center justify-between">
      <span style="font-size:2.2rem; font-weight:900; color:var(--border); letter-spacing:-0.02em;">03</span>
      <div class="icon-chip solid">➕</div>
    </div>
    <h3>加入知識點</h3>
    <p style="font-size:0.85rem;">上傳文件或手動輸入知識內容</p>
    <div class="note" style="font-size:0.78rem;">例：從 Notion、Google Drive 匯入，或直接手動輸入</div>
  </div>
</div>

<div class="note good" style="margin-top:1.2rem;">
  <span>✅</span>
  <p><strong>System Prompt 最重要</strong> — 決定 AI 怎麼使用這個知識庫。沒有設定時，AI 不知道怎麼回答。</p>
</div>

---

<div class="accent-bar" style="margin-bottom:1rem;"></div>
<h2>知識點怎麼放進去？</h2>

<div class="grid-3" style="margin-top:1.5rem;">
  <div class="card" style="height:100%;">
    <div class="icon-chip lg" style="width:48px; height:48px; border-radius:16px; font-size:1.4rem; background:#fffbeb; border-color:#fde68a;">📝</div>
    <p style="font-weight:700; font-size:1rem; color:var(--text);">Notion</p>
    <p style="font-size:0.85rem; flex:1;">直接匯入 Notion 頁面內容</p>
    <div style="background:#fffbeb; border:1px solid #fde68a; color:#d97706; border-radius:8px; padding:0.6rem 0.75rem; font-size:0.75rem; line-height:1.6;">💡 連接 Notion Integration 後直接搜尋頁面匯入</div>
  </div>
  <div class="card" style="height:100%;">
    <div class="icon-chip lg" style="width:48px; height:48px; border-radius:16px; font-size:1.4rem; background:#f0f9ff; border-color:#bae6fd;">📁</div>
    <p style="font-weight:700; font-size:1rem; color:var(--text);">Google Drive</p>
    <p style="font-size:0.85rem; flex:1;">從 Google Drive 直接選取文件匯入</p>
    <div style="background:#f0f9ff; border:1px solid #bae6fd; color:#0369a1; border-radius:8px; padding:0.6rem 0.75rem; font-size:0.75rem; line-height:1.6;">💡 連接 Google 帳號後可直接瀏覽並選取 Drive 中的檔案</div>
  </div>
  <div class="card" style="height:100%;">
    <div class="icon-chip lg" style="width:48px; height:48px; border-radius:16px; font-size:1.4rem; background:#eef2ff; border-color:#c7d2fe;">✍️</div>
    <p style="font-weight:700; font-size:1rem; color:var(--text);">手動輸入</p>
    <p style="font-size:0.85rem; flex:1;">直接輸入文字知識點</p>
    <div style="background:#eef2ff; border:1px solid #c7d2fe; color:#4f46e5; border-radius:8px; padding:0.6rem 0.75rem; font-size:0.75rem; line-height:1.6;">💡 適合短篇的 FAQ、注意事項、補充說明</div>
  </div>
</div>

---

<div class="accent-bar" style="margin-bottom:1rem;"></div>
<h2>審核機制確保知識品質</h2>

<div class="flex items-stretch" style="gap:0.75rem; margin-top:1.5rem;">
  <div class="card" style="flex:1;">
    <div class="flex items-center justify-between" style="margin-bottom:0.5rem;">
      <span style="font-size:1.4rem;">🕒</span>
      <span class="status-pill">PENDING</span>
    </div>
    <p style="font-weight:700; font-size:1.1rem; color:var(--text);">待審核</p>
    <p style="font-size:0.85rem;">上傳後自動進入此狀態，AI 尚未使用這批知識</p>
  </div>
  <div class="flex items-center" style="color:var(--border); font-size:1rem;">→</div>
  <div class="card" style="flex:1;">
    <div class="flex items-center justify-between" style="margin-bottom:0.5rem;">
      <span style="font-size:1.4rem;">✅</span>
      <span class="status-pill">APPROVED</span>
    </div>
    <p style="font-weight:700; font-size:1.1rem; color:var(--text);">已核准</p>
    <p style="font-size:0.85rem;">通過審核，AI 對話時會主動召回這些知識點</p>
  </div>
  <div class="flex items-center" style="color:var(--border); font-size:1rem;">→</div>
  <div class="card" style="flex:1;">
    <div class="flex items-center justify-between" style="margin-bottom:0.5rem;">
      <span style="font-size:1.4rem;">❌</span>
      <span class="status-pill">REJECTED</span>
    </div>
    <p style="font-weight:700; font-size:1.1rem; color:var(--text);">已拒絕</p>
    <p style="font-size:0.85rem;">不符合品質，AI 不會使用這些知識點</p>
  </div>
</div>

---

<div class="h-full flex flex-col items-center justify-center text-center" style="gap:2.5rem;">
  <div class="icon-chip solid lg">▶️</div>
  <div class="flex flex-col items-center" style="gap:1rem;">
    <div class="tag">Demo</div>
    <h1 style="font-size:5rem; font-weight:900; letter-spacing:-0.04em; line-height:1;">Live Demo</h1>
    <p style="font-size:1.25rem; color:var(--muted);">實際操作知識庫功能</p>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="flex flex-col items-center" style="gap:1.5rem;">
  <div class="icon-chip solid lg">💬</div>
  <div class="accent-bar"></div>
  <h1 style="font-size:5rem; font-weight:900; letter-spacing:-0.04em; line-height:1;">Q & A</h1>
  <p style="font-size:1.25rem; color:var(--muted);">有任何問題都可以問</p>
</div>
