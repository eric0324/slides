"use client";

import { motion } from "framer-motion";

const formats = [
  {
    emoji: "📝",
    name: "Notion",
    desc: "直接匯入 Notion 頁面內容",
    tip: "連接 Notion Integration 後直接搜尋頁面匯入",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    emoji: "📁",
    name: "Google Drive",
    desc: "從 Google Drive 直接選取文件匯入",
    tip: "連接 Google 帳號後可直接瀏覽並選取 Drive 中的檔案",
    color: "#0369a1",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    emoji: "✍️",
    name: "手動輸入",
    desc: "直接輸入文字知識點",
    tip: "適合短篇的 FAQ、注意事項、補充說明",
    color: "#4f46e5",
    bg: "#eef2ff",
    border: "#c7d2fe",
  },
];

export function S05_Formats() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-5xl px-16">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <div className="accent-bar mb-5" />
          <h2 style={{ fontSize: 44, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}>
            知識點怎麼放進去？
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-5">
          {formats.map((f, i) => (
            <motion.div
              key={i}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
              className="card flex flex-col gap-4"
              style={{ height: "100%" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
                style={{ background: f.bg, border: `1px solid ${f.border}` }}
              >
                {f.emoji}
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <p style={{ fontWeight: 700, fontSize: 16, color: "var(--text)" }}>{f.name}</p>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
              <div
                className="px-3 py-2.5 rounded-lg text-xs"
                style={{ background: f.bg, border: `1px solid ${f.border}`, color: f.color, lineHeight: 1.6 }}
              >
                💡 {f.tip}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
