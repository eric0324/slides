"use client";

import { motion } from "framer-motion";

const goods = [
  {
    icon: "🎯",
    title: "先想清楚你要解決什麼問題",
    desc: "問 AI 之前先想：「我需要的是一次性回答，還是可以重複使用的工具？」。前者用 Chat，後者用 Chat + Deploy。",
  },
  {
    icon: "🧱",
    title: "把重複的需求做成 Skill",
    desc: "同樣的事情第二次要做，就把它包成 Skill。讓整個部門都可以用同一個標準提示詞，答案才會一致。",
  },
  {
    icon: "📚",
    title: "讓知識庫幫你補充背景知識",
    desc: "在 Chat 選擇對應知識庫，AI 就能用你公司的資料回答問題，不用每次都手動貼資料。",
  },
  {
    icon: "🛡️",
    title: "透過 API Bridge 查詢公司資料",
    desc: "需要查訂單、庫存、客戶資料？透過 Bridge 讓 AI 直接查，不用把資料複製貼上進聊天室。",
  },
  {
    icon: "🔁",
    title: "好工具分享到 Marketplace",
    desc: "自己做的好工具，發布到 Marketplace 讓同事也用。避免大家重複造輪子。",
  },
  {
    icon: "✅",
    title: "每次用完確認輸出是否正確",
    desc: "AI 不是 100% 正確。重要決策前，要人工確認 AI 的回答，不要盲目複製貼上。",
  },
];

export function S03_GoodUsage() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-5xl px-16">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div style={{ width: 36, height: 3, borderRadius: 2, background: "#059669", marginBottom: 20 }} />
          <div className="flex items-center gap-3">
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}>
              好的用法
            </h2>
            <span style={{ fontSize: 36 }}>✅</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-4">
          {goods.map((g, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.07 + i * 0.07, duration: 0.35 }}
              className="card"
              style={{ padding: "1.1rem", borderLeft: "3px solid #059669" }}
            >
              <div style={{ fontSize: 22, marginBottom: 8 }}>{g.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: 14, color: "var(--text)", marginBottom: 6 }}>{g.title}</h3>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
