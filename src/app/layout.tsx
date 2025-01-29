import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import type { PropsWithChildren } from "react";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UEC卒論タイマー",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
