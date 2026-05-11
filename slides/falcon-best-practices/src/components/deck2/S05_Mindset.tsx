"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const shifts = [
  {
    from: "「AI 幫我想」",
    to: "「我想清楚，AI 幫我執行」",
    desc: "越清楚的問題，越好的答案",
  },
  {
    from: "「一次性用完就算」",
    to: "「重複的需求包成工具或 Skill」",
    desc: "好工具讓整個團隊受益",
  },
  {
    from: "「AI 說的應該都對」",
    to: "「AI 是助手，人負責最終判斷」",
    desc: "AI 輔助決策，不替代決策",
  },
  {
    from: "「越多資料越好」",
    to: "「精準的資料比大量資料更有用」",
    desc: "品質 > 數量",
  },
];

export function S05_Mindset() {
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
            思維轉換
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", marginTop: 8 }}>
            用 AI 工具最重要的不是技術，是心態
          </p>
        </motion.div>

        <div className="space-y-4">
          {shifts.map((s, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
              className="card flex items-center gap-4"
              style={{ padding: "1rem 1.5rem" }}
            >
              <div
                className="flex-1 rounded-lg px-4 py-2.5 text-center"
                style={{ background: "#fef2f2", border: "1px solid #fecaca" }}
              >
                <p style={{ fontSize: 15, fontWeight: 600, color: "#991b1b" }}>{s.from}</p>
              </div>
              <ArrowRight size={18} style={{ color: "var(--muted)", flexShrink: 0 }} />
              <div
                className="flex-1 rounded-lg px-4 py-2.5 text-center"
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
              >
                <p style={{ fontSize: 15, fontWeight: 600, color: "#166534" }}>{s.to}</p>
              </div>
              <div
                className="w-36 text-center"
                style={{ fontSize: 12, color: "var(--muted)", flexShrink: 0 }}
              >
                {s.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
