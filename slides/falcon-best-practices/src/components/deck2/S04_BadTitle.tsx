"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export function S04_BadTitle() {
  return (
    <div className="slide-container">
      <div className="flex flex-col items-center text-center gap-10">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{ background: "#dc2626" }}
        >
          <XCircle size={36} color="white" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div style={{ width: 36, height: 3, borderRadius: 2, background: "#dc2626" }} />
          <h1 style={{ fontSize: 80, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.04em", lineHeight: 1 }}>
            壞的用法
          </h1>
          <p style={{ fontSize: 20, color: "var(--muted)", fontWeight: 400 }}>
            這些習慣，會讓 Falcon 發揮不了作用
          </p>
        </motion.div>
      </div>
    </div>
  );
}
