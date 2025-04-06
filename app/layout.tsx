import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kajing1077.github.io/wangzzang/"),
  title: {
    default: "Wangzzang.net",
    template: "%s | Wangzzang.net",
  },
  description: "왕짱과 개발에 대한 블로그",
  keywords: ["개발", "프로그래밍", "기술 블로그", "Next.js", "React"],
  authors: [{ name: "Wangzzang" }],
  creator: "Wangzzang",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://kajing1077.github.io/wangzzang/",
    title: "Wangzzang.net",
    description: "왕짱과 개발에 대한 블로그",
    siteName: "Wangzzang.net",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "Google Search Console 인증 코드", // Search Console에서 받은 코드로 교체
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="icon" href="/wangzzang/favicon.ico" sizes="any" />
      <body
        className={`${geistSans.variable}  ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
