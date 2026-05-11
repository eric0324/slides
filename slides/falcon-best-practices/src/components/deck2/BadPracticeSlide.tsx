"use client";

import { motion } from "framer-motion";

interface Props {
  index: number;
  total: number;
  icon: string;
  title: string;
  bad: string;
  fix: string;
}

export function BadPracticeSlide({ index, total, icon, title, bad, fix }: Props) {
  return (
    <div className="slide-container">
      <div className="w-full max-w-4xl px-16">
        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3 mb-12"
        >
          <div style={{ width: 36, height: 3, borderRadius: 2, background: "#dc2626" }} />
          <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 600 }}>
            壞的用法 {index} / {total}
          </span>
          <div className="flex gap-1.5 ml-2">
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: i + 1 === index ? 20 : 6,
                  height: 4,
                  borderRadius: 2,
                  background: i + 1 === index ? "#dc2626" : "var(--border)",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="flex items-center gap-6"
          >
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center shrink-0"
              style={{ background: "#fef2f2", border: "1px solid #fecaca", fontSize: 40 }}
            >
              {icon}
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              {title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="card"
            style={{ borderLeft: "4px solid #dc2626", padding: "1.5rem 1.75rem" }}
          >
            <p style={{ fontSize: 13, fontWeight: 700, color: "#dc2626", marginBottom: 10, letterSpacing: "0.08em" }}>
              常見錯誤
            </p>
            <p style={{ fontSize: 18, color: "var(--text)", lineHeight: 1.75 }}>{bad}</p>
          </motion.div>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.32, duration: 0.4 }}
            className="card"
            style={{ borderLeft: "4px solid #059669", padding: "1.5rem 1.75rem" }}
          >
            <p style={{ fontSize: 13, fontWeight: 700, color: "#059669", marginBottom: 10, letterSpacing: "0.08em" }}>
              正確做法
            </p>
            <p style={{ fontSize: 18, color: "var(--text)", lineHeight: 1.75 }}>{fix}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
