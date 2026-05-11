"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, BookOpen, Bot } from "lucide-react";

const modules = [
  {
    icon: MessageSquare,
    name: "Chat",
    desc: "和 AI 對話、建立工具、部署應用",
    color: "#4f46e5",
    bg: "#eef2ff",
  },
  {
    icon: Zap,
    name: "Skills",
    desc: "可重複使用的提示詞模板",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    icon: BookOpen,
    name: "知識庫",
    desc: "公司知識的 AI 記憶庫",
    color: "#0369a1",
    bg: "#f0f9ff",
  },
  {
    icon: Bot,
    name: "Agent",
    desc: "自動化執行多步驟任務的 AI 代理",
    color: "#059669",
    bg: "#f0fdf4",
  },
];

export function S02_SystemOverview() {
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
            Falcon 有哪些模組？
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", marginTop: 8 }}>
            了解各模組的定位，才知道怎麼組合發揮最大價值
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
              className="card flex items-center gap-5"
              style={{ padding: "1.5rem" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: m.bg, border: `1px solid ${m.color}22` }}
              >
                <m.icon size={28} style={{ color: m.color }} strokeWidth={1.5} />
              </div>
              <div>
                <p style={{ fontWeight: 800, fontSize: 20, color: "var(--text)", marginBottom: 4 }}>{m.name}</p>
                <p style={{ fontSize: 14, color: "var(--muted)" }}>{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
