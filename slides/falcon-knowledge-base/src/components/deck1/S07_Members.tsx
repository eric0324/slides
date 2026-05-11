"use client";

import { motion } from "framer-motion";
import { Crown, User, Users } from "lucide-react";

const roles = [
  {
    icon: Crown,
    role: "OWNER",
    label: "擁有者",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
    perms: ["建立 & 刪除知識庫", "管理所有成員", "審核知識點", "修改 System Prompt", "查看評分"],
  },
  {
    icon: User,
    role: "MEMBER",
    label: "成員",
    color: "#4f46e5",
    bg: "#eef2ff",
    border: "#c7d2fe",
    perms: ["新增知識點", "上傳文件", "提交待審核", "查看知識點", "給評分"],
  },
];

export function S07_Members() {
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
            成員管理與角色分工
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 mb-6">
          {roles.map((r, i) => (
            <motion.div
              key={i}
              initial={{ x: i === 0 ? -20 : 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: r.bg, border: `1px solid ${r.border}` }}
                >
                  <r.icon size={22} style={{ color: r.color }} strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 18, color: "var(--text)" }}>{r.label}</p>
                  <code style={{ fontSize: 11, color: r.color, background: r.bg, padding: "1px 6px", borderRadius: 4, border: `1px solid ${r.border}` }}>
                    {r.role}
                  </code>
                </div>
              </div>
              <ul className="space-y-2">
                {r.perms.map((p, j) => (
                  <li key={j} className="flex items-center gap-2" style={{ fontSize: 14, color: "var(--muted)" }}>
                    <span style={{ color: r.color, fontWeight: 700 }}>›</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="rounded-xl p-4 flex items-center gap-3"
          style={{ background: "var(--subtle)", border: "1px solid var(--border)" }}
        >
          <Users size={20} style={{ color: "var(--accent)", flexShrink: 0 }} strokeWidth={1.5} />
          <p style={{ fontSize: 14, color: "var(--muted)" }}>
            <strong style={{ color: "var(--text)" }}>建議：</strong>
            每個知識庫由一位負責人（Owner）把關品質，其他同仁以 Member 身份協作上傳，Owner 審核後才正式生效。
          </p>
        </motion.div>
      </div>
    </div>
  );
}
