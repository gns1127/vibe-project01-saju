import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40 star-bg">
      {/* 우주 배경 그라디언트 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl loading-orb" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-accent/10 blur-3xl loading-orb" style={{ animationDelay: '1s' }} />
      </div>

      {/* 별빛 장식 */}
      <div className="absolute top-16 left-16 star text-primary/40">
        <Star className="h-4 w-4 fill-current" />
      </div>
      <div className="absolute top-32 right-24 star text-accent/50">
        <Star className="h-3 w-3 fill-current" />
      </div>
      <div className="absolute bottom-24 left-32 star text-primary/30">
        <Star className="h-5 w-5 fill-current" />
      </div>
      <div className="absolute top-48 right-16 star text-accent/40">
        <Star className="h-4 w-4 fill-current" />
      </div>

      <div className="container mx-auto max-w-screen-xl px-4 text-center relative z-10">
        <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1 border border-primary/20">
          <Sparkles className="mr-1.5 h-3.5 w-3.5 text-primary" />
          사주팔자로 밝혀내는 전생의 비밀
        </Badge>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          당신의{" "}
          <span className="gradient-purple">전생</span>
          은{" "}
          <br className="hidden sm:block" />
          무엇이었을까요?
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          생년월일시를 입력하면 사주팔자(四柱八字)를 분석해<br />
          당신이 전생에 어떤 삶을 살았는지 알려드립니다.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="shadow-lg shadow-primary/25">
            <Link href="/saju">
              <Sparkles className="mr-2 h-4 w-4" />
              전생 확인하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/saju/compare">
              친구와 전생 비교하기
            </Link>
          </Button>
        </div>

        {/* 하단 신뢰 지표 */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-element-wood" />
            <span>음력/절기 정밀 계산</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>60가지 전생 유형</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span>결과 이미지 저장</span>
          </div>
        </div>
      </div>
    </section>
  );
}
