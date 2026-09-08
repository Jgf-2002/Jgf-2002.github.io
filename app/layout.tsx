import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "贾格非 | Control, AI & Quantitative Research",
  description: "贾格非的个人简历与研究作品集：控制理论、机器学习、系统验证与量化研究。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
