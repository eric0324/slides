"use client";

import { motion } from "framer-motion";
import { Database, MessageSquare, Zap } from "lucide-react";

const items = [
  {
    icon: Database,
    title: "結構化的知識儲存庫",
    desc: "把公司的 SOP、產品知識、FAQ 整理成 AI 可讀取的知識點",
  },
  {
    icon: MessageSquare,
    title: "對話時即時召回",
    desc: "AI 在回答問題時自動找到最相關的資訊，不需要你貼出處",
  },
  {
    icon: Zap,
    title: "從通用 AI 變專業助手",
    desc: "沒有知識庫 = 通用 AI；有知識庫 = 懂你公司的 AI 專家",
  },
];

export function S02_WhatIsKB() {
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
          <h2 style={{ fontSize: 44, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            什麼是知識庫？
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
              className="card flex flex-col gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "var(--subtle)", border: "1px solid var(--border)" }}
              >
                <item.icon size={20} style={{ color: "var(--accent)" }} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--text)" }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 rounded-xl p-5 flex items-center gap-4"
          style={{ background: "var(--subtle)", border: "1px solid var(--border)" }}
        >
          <span style={{ fontSize: 20 }}>💡</span>
          <p style={{ fontSize: 14, color: "var(--muted)" }}>
            想像成「AI 的公司百科全書」— 你塞進去什麼知識，AI 就會用什麼知識回答
          </p>
        </motion.div>
      </div>
    </div>
  );
}
