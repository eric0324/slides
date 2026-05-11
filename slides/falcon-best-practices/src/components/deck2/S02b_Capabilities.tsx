"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const cans = [
  "查詢資料庫（SELECT）",
  "根據公司知識回答問題",
  "產生報表、摘要、草稿",
  "建立可重複使用的工具",
  "串接很多公司正在用的第三方服務",
];

const cannots = [
  "自動爬取外部網站資料",
  "寫入或修改資料",
  "即時監控或排程自動執行",
  "保證輸出 100% 正確",
  "取代需要人工判斷的決策",
];

export function S02b_Capabilities() {
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
            先釐清 Falcon 的能力邊界
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", marginTop: 8 }}>
            知道它能做什麼、不能做什麼，才能用在對的地方
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="card"
            style={{ borderTop: "3px solid #059669" }}
          >
            <p style={{ fontSize: 13, fontWeight: 700, color: "#059669", letterSpacing: "0.08em", marginBottom: 16 }}>
              ✅ 可以做到
            </p>
            <ul className="space-y-3">
              {cans.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
                  >
                    <Check size={11} style={{ color: "#059669" }} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: 15, color: "var(--text)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="card"
            style={{ borderTop: "3px solid #dc2626" }}
          >
            <p style={{ fontSize: 13, fontWeight: 700, color: "#dc2626", letterSpacing: "0.08em", marginBottom: 16 }}>
              ❌ 不支援
            </p>
            <ul className="space-y-3">
              {cannots.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "#fef2f2", border: "1px solid #fecaca" }}
                  >
                    <X size={11} style={{ color: "#dc2626" }} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: 15, color: "var(--text)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
