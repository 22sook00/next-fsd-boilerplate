import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pretendard = localFont({
  src: [
    {
      path: "../public/asset/Pretendard-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/asset/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/asset/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/asset/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/asset/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/asset/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/asset/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],

  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Boilerplate for Next.js with FSD",
  description:
    "created Next.js App router with FSD boilerplate by Sookyoung lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
