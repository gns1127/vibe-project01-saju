import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-0">
      <div className="container mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium text-foreground">전생탐정</span>
          <span>— 사주팔자로 알아보는 나의 전생</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/saju" className="hover:text-foreground transition-colors">
            전생 확인
          </Link>
          <Link href="/saju/compare" className="hover:text-foreground transition-colors">
            친구 비교
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            개인정보처리방침
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            이용약관
          </Link>
          <span>&copy; {new Date().getFullYear()} 전생탐정</span>
        </div>
      </div>
    </footer>
  );
}
