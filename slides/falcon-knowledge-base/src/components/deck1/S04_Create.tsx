"use client";

import { motion } from "framer-motion";
import { BookOpen, Pencil, Plus } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    num: "01",
    title: "建立知識庫",
    desc: "取一個清楚的名稱和描述",
    example: "例：「客服 FAQ」「產品規格庫」",
  },
  {
    icon: Pencil,
    num: "02",
    title: "設定 System Prompt",
    desc: "告訴 AI 這個知識庫的用途和回答方式",
    example: "例：「你是客服助手，語氣要親切，用這個知識庫回答問題」",
  },
  {
    icon: Plus,
    num: "03",
    title: "加入知識點",
    desc: "上傳文件或手動輸入知識內容",
    example: "例：從 Notion、Google Drive 匯入，或直接手動輸入",
  },
];

export function S04_Create() {
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
            三步驟建立知識庫
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.4 }}
              className="card flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span style={{ fontSize: 36, fontWeight: 900, color: "var(--border)", letterSpacing: "-0.02em" }}>
                  {step.num}
                </span>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--accent)" }}
                >
                  <step.icon size={18} color="white" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "var(--text)", marginBottom: 6 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
              <div
                className="rounded-lg px-3 py-2.5"
                style={{ background: "var(--subtle)", border: "1px solid var(--border)", fontSize: 13, color: "var(--muted)" }}
              >
                {step.example}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 rounded-xl p-4 flex items-center gap-3"
          style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
        >
          <span>✅</span>
          <p style={{ fontSize: 14, color: "#166534" }}>
            <strong>System Prompt 最重要</strong> — 決定 AI 怎麼使用這個知識庫。沒有設定時，AI 不知道怎麼回答。
          </p>
        </motion.div>
      </div>
    </div>
  );
}
