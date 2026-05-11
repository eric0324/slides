"use client";

import { motion } from "framer-motion";
import { Bug } from "lucide-react";

const examples = [
  { label: "資安漏洞", desc: "可能導致未授權存取或資料洩漏" },
  { label: "資料異常", desc: "資料遭竄改、刪除或不應顯示給使用者" },
];

export function S05b_BugReport() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-4xl px-16">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex items-center gap-5"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: "#fef2f2", border: "1px solid #fecaca" }}
          >
            <Bug size={30} style={{ color: "#dc2626" }} strokeWidth={1.5} />
          </div>
          <div>
            <div className="accent-bar mb-3" style={{ background: "#dc2626" } as React.CSSProperties} />
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1 }}>
              P0 Bug 回報計劃
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {examples.map((e, i) => (
            <motion.div
              key={i}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.4 }}
              className="card"
              style={{ padding: "1.1rem" }}
            >
              <p style={{ fontWeight: 700, fontSize: 14, color: "var(--text)", marginBottom: 6 }}>{e.label}</p>
              <p style={{ fontSize: 13, color: "var(--muted)" }}>{e.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75 }}
        >
          P0 是最高優先等級，指的是<strong style={{ color: "var(--text)" }}>影響安全或造成業務中斷的緊急問題</strong>，不是一般的小問題。
          發現任何符合條件的情況，請立即回報給我，我會 6 小時內回應。
        </motion.p>

      </div>
    </div>
  );
}
