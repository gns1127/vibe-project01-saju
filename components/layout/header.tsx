import Link from "next/link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-bold text-lg gradient-gold">전생탐정</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              홈
            </Link>
            <Link
              href="/saju"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              전생 확인
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <Button variant="default" size="sm" asChild>
            <Link href="/saju">지금 확인하기</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
