"use client";

import { motion } from "framer-motion";
import { Upload, CheckSquare, Users, FileText } from "lucide-react";

const features = [
  { icon: FileText, label: "知識點管理", desc: "手動新增或批次上傳" },
  { icon: Upload, label: "多格式上傳", desc: "Notion、Google Drive、手動輸入" },
  { icon: CheckSquare, label: "審核機制", desc: "確保知識品質" },
  { icon: Users, label: "成員協作", desc: "多人共同維護" },
];

export function S03_Features() {
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
            知識庫四大功能
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.08 + i * 0.08, duration: 0.35 }}
              className="card flex items-center gap-4"
              style={{ padding: "1.1rem 1.25rem" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--subtle)", border: "1px solid var(--border)" }}
              >
                <f.icon size={18} style={{ color: "var(--accent)" }} strokeWidth={1.5} />
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: 15, color: "var(--text)" }}>{f.label}</p>
                <p style={{ fontSize: 13, color: "var(--muted)" }}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
