"use client";

import { motion } from "framer-motion";

const rants = [
  {
    emoji: "📄",
    text: "上傳了 200 頁 PDF",
  },
  {
    emoji: "🤔",
    text: "同一句話問了三次",
  },
  {
    emoji: "🪄",
    text: "把十個需求塞進一句話",
  },
  {
    emoji: "💀",
    text: "我不知道怎麼說，你猜一下",
  },
  {
    emoji: "🎤",
    text: "不要叫他去搶演唱會門票",
  },
  {
    emoji: "🐛",
    text: "回報 bug 時，請附上 ID",
  },
  {
    emoji: "🙏",
    text: "一定要好好使用",
  },
];

export function S06_DevRambling() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-3xl px-16">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <div className="accent-bar mb-5" />
          <h2 style={{ fontSize: 44, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}>
            開發者的小碎嘴
          </h2>
        </motion.div>

        <div className="space-y-3">
          {rants.map((r, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.08 + i * 0.1, duration: 0.35 }}
              className="card flex items-center gap-4"
              style={{ padding: "0.9rem 1.4rem" }}
            >
              <span style={{ fontSize: 22, flexShrink: 0 }}>{r.emoji}</span>
              <p style={{ fontSize: 15, color: "var(--text)", fontWeight: 500 }}>{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
