import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAdsense } from "@/components/GoogleAdsense";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000"
  ),
  title: {
    default: "전생탐정 - 사주로 알아보는 나의 전생",
    template: "%s | 전생탐정",
  },
  description:
    "생년월일시를 입력하면 사주팔자(四柱八字)로 당신의 전생을 알려드립니다. 60가지 전생 유형, 오행 분석, 친구와 비교까지!",
  keywords: ["전생", "사주", "사주팔자", "전생탐정", "운세", "전생 확인", "나의 전생"],
  openGraph: {
    title: "전생탐정 - 사주로 알아보는 나의 전생",
    description: "나의 전생은 무엇이었을까? 사주팔자로 알아보세요!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "전생탐정 - 사주로 알아보는 나의 전생",
    description: "나의 전생은 무엇이었을까? 사주팔자로 알아보세요!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <GoogleAdsense />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
