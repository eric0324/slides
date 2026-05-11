"use client";

import { motion } from "framer-motion";
import { MonitorPlay } from "lucide-react";

export function S07_LiveDemo() {
  return (
    <div className="slide-container">
      <div className="flex flex-col items-center text-center gap-10">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{ background: "var(--accent)" }}
        >
          <MonitorPlay size={36} color="white" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="tag">Demo</div>
          <h1 style={{ fontSize: 80, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.04em", lineHeight: 1 }}>
            Live Demo
          </h1>
          <p style={{ fontSize: 20, color: "var(--muted)", fontWeight: 400 }}>
            實際操作知識庫功能
          </p>
        </motion.div>
      </div>
    </div>
  );
}
