"use client";

import { motion } from "framer-motion";

const bads = [
  {
    icon: "🤯",
    title: "把 AI 當成萬能神",
    bad: "「AI 應該什麼都知道」— 把所有事情丟給 AI，不管有沒有給足夠的上下文",
    fix: "先給資料、先設定情境，AI 才能給出有意義的答案",
  },
  {
    icon: "📋",
    title: "每次手動貼一大堆資料",
    bad: "每次問 AI 都要複製貼上同一份文件或表格",
    fix: "把常用的資料放進知識庫或連接 API Bridge，讓 AI 自己取用",
  },
  {
    icon: "🏗️",
    title: "工具做了從來不更新",
    bad: "建了工具之後就放著不管，資料或邏輯過時了也不維護",
    fix: "定期檢查工具是否還能正常執行，資料源有沒有過期",
  },
  {
    icon: "💬",
    title: "用 Chat 做應該用工具做的事",
    bad: "同樣的需求每天重複問 AI，沒有把它包裝成可重複使用的工具",
    fix: "超過三次的重複任務，考慮 Deploy 成工具或包成 Skill",
  },
  {
    icon: "🔓",
    title: "API Bridge 不設欄位限制",
    bad: "讓所有人可以查所有欄位，包括密碼、身分證、薪資等敏感欄位",
    fix: "一定要設 blocked columns，用部門權限控制可查的資料範圍",
  },
  {
    icon: "🗂️",
    title: "一個知識庫放所有東西",
    bad: "把全公司所有文件都丟進一個知識庫，以為越多越好",
    fix: "按主題分庫，讓每個知識庫聚焦，AI 才能找到對的資料",
  },
];

export function S04_BadUsage() {
  return (
    <div className="slide-container">
      <div className="w-full max-w-5xl px-16">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div style={{ width: 36, height: 3, borderRadius: 2, background: "#dc2626", marginBottom: 20 }} />
          <div className="flex items-center gap-3">
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}>
              壞的用法
            </h2>
            <span style={{ fontSize: 36 }}>❌</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-4">
          {bads.map((b, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.07 + i * 0.07, duration: 0.35 }}
              className="card flex flex-col gap-3"
              style={{ padding: "1.1rem", borderLeft: "3px solid #dc2626" }}
            >
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 20 }}>{b.icon}</span>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>{b.title}</h3>
              </div>
              <div
                className="rounded-lg px-3 py-2 text-xs flex gap-2"
                style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#991b1b" }}
              >
                <span className="shrink-0">✗</span>
                <span>{b.bad}</span>
              </div>
              <div
                className="rounded-lg px-3 py-2 text-xs flex gap-2"
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#166534" }}
              >
                <span className="shrink-0">→</span>
                <span>{b.fix}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
