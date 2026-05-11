"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle, XCircle, ArrowRight } from "lucide-react";

const stages = [
  {
    icon: Clock,
    status: "PENDING",
    label: "待審核",
    desc: "上傳後自動進入此狀態，AI 尚未使用這批知識",
  },
  {
    icon: CheckCircle,
    status: "APPROVED",
    label: "已核准",
    desc: "通過審核，AI 對話時會主動召回這些知識點",
  },
  {
    icon: XCircle,
    status: "REJECTED",
    label: "已拒絕",
    desc: "不符合品質，AI 不會使用這些知識點",
  },
];

export function S06_Review() {
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
            審核機制確保知識品質
          </h2>
        </motion.div>

        <div className="flex items-stretch gap-3">
          {stages.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.13, duration: 0.4 }}
              className="flex items-center gap-3 flex-1"
            >
              <div className="card flex-1 h-full" style={{ padding: "1.5rem" }}>
                <div className="flex items-center justify-between mb-4">
                  <s.icon size={22} style={{ color: "var(--muted)" }} strokeWidth={1.5} />
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: "monospace",
                      color: "var(--muted)",
                      background: "var(--subtle)",
                      border: "1px solid var(--border)",
                      padding: "2px 8px",
                      borderRadius: 999,
                    }}
                  >
                    {s.status}
                  </span>
                </div>
                <p style={{ fontWeight: 700, fontSize: 18, color: "var(--text)", marginBottom: 8 }}>{s.label}</p>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
              {i < stages.length - 1 && (
                <ArrowRight size={16} style={{ color: "var(--border)", flexShrink: 0 }} />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
