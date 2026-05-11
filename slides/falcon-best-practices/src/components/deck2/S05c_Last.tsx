"use client";

import { motion } from "framer-motion";

export function S05c_Last() {
  return (
    <div className="slide-container">
      <div className="flex flex-col items-center text-center gap-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: 96, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.04em", lineHeight: 1 }}
        >
          最後....
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          style={{ width: 60, height: 3, borderRadius: 2, background: "var(--accent)" }}
        />
      </div>
    </div>
  );
}
