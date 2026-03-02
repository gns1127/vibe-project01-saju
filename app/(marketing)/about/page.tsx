import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Star, BookOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "소개 | 전생탐정",
  description:
    "전생탐정은 동양 철학의 정수인 사주팔자(四柱八字)를 기반으로 당신의 전생을 탐구하는 엔터테인먼트 서비스입니다. 60갑자와 오행 이론을 활용해 흥미로운 전생 스토리를 제공합니다.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      {/* 헤더 */}
      <div className="flex items-center gap-3 mb-2">
        <Sparkles className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold gradient-gold">전생탐정 소개</h1>
      </div>
      <p className="text-muted-foreground mb-10">
        사주팔자로 알아보는 나의 전생
      </p>

      <div className="space-y-10 text-muted-foreground leading-relaxed">
        {/* 서비스 소개 */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Star className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              전생탐정이란?
            </h2>
          </div>
          <p className="mb-3">
            전생탐정은 동양 철학의 정수인{" "}
            <strong className="text-foreground">사주팔자(四柱八字)</strong>를
            기반으로 당신의 전생을 탐구하는 엔터테인먼트 서비스입니다.
          </p>
          <p className="mb-3">
            생년월일시를 입력하면 음력 환산 및 천간·지지(天干地支) 분석을 통해
            60갑자 중 당신에게 해당하는 전생 유형을 찾아드립니다. 오행(五行,
            목화토금수) 분석을 통해 당신의 기질과 전생의 직업·성격도 함께
            알려드립니다.
          </p>
          <p>
            이 서비스는 순수한{" "}
            <strong className="text-foreground">엔터테인먼트 목적</strong>으로
            제공됩니다. 실제 운명이나 미래를 예측하는 서비스가 아니며, 동양
            철학에 담긴 선조들의 지혜를 현대적으로 재해석해 즐거운 경험을
            제공하는 것을 목표로 합니다.
          </p>
        </section>

        {/* 사주팔자 설명 */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              사주팔자(四柱八字)란?
            </h2>
          </div>
          <p className="mb-4">
            사주팔자는 태어난 연(年)·월(月)·일(日)·시(時)의 네 기둥(四柱)과
            각 기둥을 구성하는 여덟 글자(八字)로 사람의 운명을 분석하는 동양
            철학 체계입니다. 약 2,000년의 역사를 가진 이 학문은 한국, 중국,
            일본 등 동아시아 문화권에서 널리 활용되어 왔습니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border/50 p-4 bg-muted/30">
              <h3 className="font-semibold text-foreground mb-2">
                천간(天干) — 10개
              </h3>
              <p className="text-sm">
                갑(甲) 을(乙) 병(丙) 정(丁) 무(戊) 기(己) 경(庚) 신(辛)
                임(壬) 계(癸)
              </p>
              <p className="text-sm mt-2">
                하늘의 기운을 나타내며 오행(목화토금수)과 연결됩니다.
              </p>
            </div>
            <div className="rounded-lg border border-border/50 p-4 bg-muted/30">
              <h3 className="font-semibold text-foreground mb-2">
                지지(地支) — 12개
              </h3>
              <p className="text-sm">
                자(子) 축(丑) 인(寅) 묘(卯) 진(辰) 사(巳) 오(午) 미(未)
                신(申) 유(酉) 술(戌) 해(亥)
              </p>
              <p className="text-sm mt-2">
                땅의 기운을 나타내며 12지신(쥐·소·호랑이 등)과 대응됩니다.
              </p>
            </div>
          </div>

          <p className="mt-4">
            천간 10개와 지지 12개의 조합으로{" "}
            <strong className="text-foreground">60갑자(甲子)</strong>가
            만들어집니다. 전생탐정은 이 60가지 유형에 각각 고유한 전생
            스토리를 담았습니다.
          </p>
        </section>

        {/* 오행 설명 */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            오행(五行) 분석
          </h2>
          <p className="mb-4">
            오행은 세상 만물을 목(木)·화(火)·토(土)·금(金)·수(水)의 다섯
            원소로 분류하는 동양 철학의 핵심 개념입니다. 전생탐정은 당신의
            사주에서 가장 강한 오행을 분석해 전생의 특성과 기질을 해석합니다.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-sm text-center">
            {[
              { name: "목(木)", desc: "성장·창조", cls: "element-wood" },
              { name: "화(火)", desc: "열정·리더십", cls: "element-fire" },
              { name: "토(土)", desc: "안정·신뢰", cls: "element-earth" },
              { name: "금(金)", desc: "결단·정의", cls: "element-metal" },
              { name: "수(水)", desc: "지혜·적응", cls: "element-water" },
            ].map((el) => (
              <div
                key={el.name}
                className={`rounded-lg p-3 font-medium ${el.cls}`}
              >
                <div>{el.name}</div>
                <div className="text-xs mt-1 opacity-80">{el.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 사용 방법 */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            이용 방법
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong className="text-foreground">생년월일 입력</strong> —
              양력/음력을 선택하고 생년월일을 입력합니다.
            </li>
            <li>
              <strong className="text-foreground">출생시간 선택</strong> —
              태어난 시간을 선택합니다. (모르는 경우 &quot;모름&quot; 선택
              가능)
            </li>
            <li>
              <strong className="text-foreground">전생 확인</strong> — 사주
              분석 후 당신의 전생 유형과 오행 특성을 확인합니다.
            </li>
            <li>
              <strong className="text-foreground">친구와 비교</strong> — 두
              사람의 사주를 비교해 전생 인연과 궁합을 확인할 수 있습니다.
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="text-center pt-4">
          <Button asChild size="lg" className="gradient-purple text-white">
            <Link href="/saju">나의 전생 확인하기</Link>
          </Button>
        </section>

        {/* 연락처 */}
        <section className="border-t border-border/40 pt-8">
          <div className="flex items-center gap-2 mb-3">
            <Mail className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">연락처</h2>
          </div>
          <p className="mb-2">
            서비스 이용 중 문의사항이나 의견이 있으시면 아래 이메일로
            연락해주세요.
          </p>
          <a
            href="mailto:tkdgns1127@naver.com"
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            tkdgns1127@naver.com
          </a>
          <p className="text-sm mt-3">
            전생탐정은 개인 개발자가 운영하는 서비스로, 동양 철학에 대한 관심과
            열정으로 만들었습니다. 소중한 의견 감사히 받겠습니다.
          </p>
        </section>
      </div>
    </main>
  );
}
