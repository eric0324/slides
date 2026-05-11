"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function S01_Title() {
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
          <Zap size={36} color="white" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="tag">Falcon System</div>
          <h1 style={{ fontSize: 68, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.03em", lineHeight: 1 }}>
            Falcon
            <br />
            <span style={{ color: "var(--accent)" }}>最佳實踐</span>
          </h1>
          <p style={{ fontSize: 20, color: "var(--muted)", fontWeight: 400 }}>
            Falcon 系統的好用法與壞用法
          </p>
        </motion.div>

      </div>
    </div>
  );
}
