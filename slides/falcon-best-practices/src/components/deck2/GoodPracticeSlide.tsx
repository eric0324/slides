"use client";

import { motion } from "framer-motion";

interface Props {
  index: number;
  total: number;
  icon: string;
  title: string;
  why: string;
}

export function GoodPracticeSlide({ index, total, icon, title, why }: Props) {
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
          <div style={{ width: 36, height: 3, borderRadius: 2, background: "#059669" }} />
          <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 600 }}>
            好的用法 {index} / {total}
          </span>
          <div className="flex gap-1.5 ml-2">
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: i + 1 === index ? 20 : 6,
                  height: 4,
                  borderRadius: 2,
                  background: i + 1 === index ? "#059669" : "var(--border)",
                  transition: "width 0.3s",
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
              style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", fontSize: 40 }}
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
            style={{ borderLeft: "4px solid #059669", padding: "1.5rem 1.75rem" }}
          >
            <p style={{ fontSize: 16, marginBottom: 10 }}>💡</p>
            <p style={{ fontSize: 18, color: "var(--text)", lineHeight: 1.75 }}>{why}</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
