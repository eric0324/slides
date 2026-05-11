import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Falcon 知識庫功能指南",
  description: "Falcon 平台知識庫的核心功能、建立流程、審核機制與成員管理",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className="h-full">
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
