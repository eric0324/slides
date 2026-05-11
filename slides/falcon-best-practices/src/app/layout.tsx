import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Falcon 最佳實踐",
  description: "Falcon 平台的好用法與壞用法對照，以及思維轉換建議",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className="h-full">
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
