import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="relative rounded-2xl overflow-hidden px-8 py-16 text-center md:py-24"
          style={{
            background: 'linear-gradient(135deg, oklch(0.35 0.2 290) 0%, oklch(0.25 0.18 300) 50%, oklch(0.2 0.12 270) 100%)',
          }}
        >
          {/* 배경 장식 */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute bottom-8 right-8 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-10 w-10 text-yellow-300" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              지금 바로 전생을 확인해보세요
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              생년월일시만 입력하면 1분 안에<br />
              당신의 전생 이야기를 알 수 있습니다.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="shadow-lg">
                <Link href="/saju">
                  <Sparkles className="mr-2 h-4 w-4" />
                  전생 확인하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/saju/compare">
                  친구와 비교하기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
