"use client";

import { motion } from "framer-motion";
import { MessageCircle, Home } from "lucide-react";
import Link from "next/link";

export function S08_QA() {
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
          <MessageCircle size={36} color="white" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="accent-bar" />
          <h1 style={{ fontSize: 80, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.04em", lineHeight: 1 }}>
            Q & A
          </h1>
          <p style={{ fontSize: 20, color: "var(--muted)", fontWeight: 400 }}>
            有任何問題都可以問
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer"
              style={{ background: "var(--subtle)", border: "1px solid var(--border)", color: "var(--muted)", fontSize: 13 }}
            >
              <Home size={14} />
              回首頁
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
