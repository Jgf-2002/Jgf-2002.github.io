import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jgf-2002.github.io"),
  title: "贾格非 | 个人学术主页",
  description: "贾格非的个人学术主页：博弈论、随机过程、滤波控制与量化研究。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://jgf-2002.github.io/",
    title: "贾格非 | 个人学术主页",
    description: "博弈论、随机过程、滤波控制与量化研究。",
    images: [{ url: "/og.png", alt: "贾格非个人学术主页" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "贾格非 | 个人学术主页",
    description: "博弈论、随机过程、滤波控制与量化研究。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
