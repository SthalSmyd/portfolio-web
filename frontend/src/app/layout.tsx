import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Google Fonts を読み込み（CSS変数化）
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ページ共通のメタデータ（SEO / タイトルなど）
export const metadata: Metadata = {
  title: "Masashi's Portfolio",
  description: "フルスタックエンジニア Masashi Fujimoto のポートフォリオサイト。Next.js × Django × TypeScript を使った構成例。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased bg-gradient-to-b from-white via-gray-50 to-blue-50 text-gray-800
        `}
      >
        {children}
      </body>
    </html>
  );
}
