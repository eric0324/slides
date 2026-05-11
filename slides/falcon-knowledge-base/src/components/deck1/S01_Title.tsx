"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

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
          <BookOpen size={36} color="white" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="tag">Knowledge Base</div>
          <h1 style={{ fontSize: 76, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.03em", lineHeight: 1 }}>
            知識庫
            <br />
            <span style={{ color: "var(--accent)" }}>功能指南</span>
          </h1>
        </motion.div>

      </div>
    </div>
  );
}
