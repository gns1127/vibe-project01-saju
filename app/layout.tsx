import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "전생탐정 - 사주로 알아보는 나의 전생",
    template: "%s | 전생탐정",
  },
  description: "생년월일시를 입력하면 사주팔자(四柱八字)로 당신의 전생을 알려드립니다. 60가지 전생 유형, 오행 분석, 친구와 비교까지!",
  openGraph: {
    title: "전생탐정 - 사주로 알아보는 나의 전생",
    description: "나의 전생은 무엇이었을까? 사주팔자로 알아보세요!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
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
