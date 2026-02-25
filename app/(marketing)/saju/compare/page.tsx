'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { decodeSajuParam, type SajuResult } from '@/lib/saju';
import {
  interpretPastLife,
  comparePastLives,
  ELEMENT_STYLES,
  type PastLifeResult,
} from '@/lib/pastlife';
import { HEAVENLY_STEM_ELEMENT, EARTHLY_BRANCH_ELEMENT } from '@/lib/pastlife-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, ArrowLeft, Link2 } from 'lucide-react';
import { toast } from 'sonner';
import type { Element } from '@/lib/pastlife-data';

// URL 파라미터의 ganji 문자열로 SajuResult 모의 생성
function buildSajuFromParam(param: string): SajuResult | null {
  const decoded = decodeSajuParam(param);
  if (!decoded) return null;

  const pillars = [decoded.year, decoded.month, decoded.day, decoded.hour];
  const elementCounts: Record<Element, number> = { 목: 0, 화: 0, 토: 0, 금: 0, 수: 0 };
  for (const p of pillars) {
    elementCounts[HEAVENLY_STEM_ELEMENT[p.heavenlyStem]]++;
    elementCounts[EARTHLY_BRANCH_ELEMENT[p.earthlyBranch]]++;
  }

  return {
    yearPillar: decoded.year,
    monthPillar: decoded.month,
    dayPillar: decoded.day,
    hourPillar: decoded.hour,
    elementCounts,
    birthInfo: {
      solar: { year: 0, month: 0, day: 0 },
      lunar: { year: 0, month: 0, day: 0, isLeap: false },
    },
  };
}

// 인연 스타일 정의
const AFFINITY_STYLES = {
  '천생연분': {
    icon: '💫',
    color: 'text-yellow-500',
    barColor: 'bg-yellow-500',
    border: 'bg-yellow-500/10 border-yellow-500/30',
  },
  '전생 인연': {
    icon: '✨',
    color: 'text-primary',
    barColor: 'bg-primary',
    border: 'bg-primary/10 border-primary/30',
  },
  '새로운 인연': {
    icon: '🌱',
    color: 'text-green-500',
    barColor: 'bg-green-500',
    border: 'bg-green-500/10 border-green-500/30',
  },
  '인연 없음': {
    icon: '🌙',
    color: 'text-muted-foreground',
    barColor: 'bg-muted-foreground',
    border: 'bg-muted border-border',
  },
} as const;

function PersonCard({ result, saju, label }: { result: PastLifeResult; saju: SajuResult; label: string }) {
  const { pastLife, dominantElement } = result;
  return (
    <Card className="border-primary/20 flex-1">
      <CardHeader className="pb-3">
        <div className="text-xs text-muted-foreground mb-1">{label}</div>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{pastLife.symbol}</span>
          <div>
            <div className="text-xl font-bold">{pastLife.ganjiHanja}</div>
            <div className="text-sm text-muted-foreground">({saju.dayPillar.ganji})</div>
          </div>
        </div>
        <CardTitle className="text-base mt-1 text-primary">{pastLife.occupation}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div>
          <p className="text-xs text-muted-foreground mb-1">전생의 삶</p>
          <p className="leading-relaxed">{pastLife.environment}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">주 오행</p>
          <span className={`px-2 py-0.5 rounded-full text-xs border ${ELEMENT_STYLES[dominantElement].bg} ${ELEMENT_STYLES[dominantElement].text} ${ELEMENT_STYLES[dominantElement].border}`}>
            {ELEMENT_STYLES[dominantElement].label}
          </span>
        </div>
        <div className="rounded-lg bg-primary/5 border border-primary/20 p-3">
          <p className="text-xs text-primary font-medium mb-1">이번 생의 사명</p>
          <p className="text-xs leading-relaxed">{pastLife.mission}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function CompareContent() {
  const searchParams = useSearchParams();
  const paramA = searchParams.get('a') ?? '';
  const paramB = searchParams.get('b') ?? '';

  const sajuA = paramA ? buildSajuFromParam(paramA) : null;
  const sajuB = paramB ? buildSajuFromParam(paramB) : null;

  const resultA = sajuA ? interpretPastLife(sajuA) : null;
  const resultB = sajuB ? interpretPastLife(sajuB) : null;

  const comparison =
    resultA && resultB && sajuA && sajuB
      ? comparePastLives(resultA, resultB, sajuA, sajuB)
      : null;

  // 내 링크 복사
  const copyMyLink = async () => {
    const url = `${window.location.origin}/saju/compare?a=${paramA}`;
    await navigator.clipboard.writeText(url);
    toast.success('내 전생 링크가 복사되었습니다!', {
      description: '친구에게 보내서 함께 비교해보세요.',
    });
  };

  // a만 있고 b 없는 경우: 내 결과 + 링크 공유 대기
  if (sajuA && !sajuB && resultA) {
    return (
      <div className="max-w-lg mx-auto space-y-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              내 전생 결과
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-5xl">{resultA.pastLife.symbol}</span>
              <div>
                <div className="text-2xl font-bold">{resultA.pastLife.ganjiHanja}</div>
                <div className="text-primary font-medium">{resultA.pastLife.occupation}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{resultA.pastLife.environment}</p>
          </CardContent>
        </Card>

        <Card className="border-dashed border-primary/30">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="text-4xl">👥</div>
            <h3 className="font-semibold">친구의 전생과 비교하기</h3>
            <p className="text-sm text-muted-foreground">
              아래 링크를 복사해서 친구에게 보내세요.<br />
              친구가 자신의 전생을 확인하면 함께 비교됩니다!
            </p>
            <Button onClick={copyMyLink} className="w-full">
              <Link2 className="h-4 w-4 mr-2" />
              내 전생 링크 복사하기
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/saju">
            <Button variant="ghost" className="text-muted-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              전생 확인 페이지로 돌아가기
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // a, b 모두 있는 경우: 비교 결과
  if (sajuA && sajuB && resultA && resultB && comparison) {
    const affinityStyle = AFFINITY_STYLES[comparison.affinity];

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        {/* 인연 결과 */}
        <Card className={`border ${affinityStyle.border}`}>
          <CardContent className="pt-6 text-center space-y-3">
            <div className="text-5xl">{affinityStyle.icon}</div>
            <div className={`text-2xl font-bold ${affinityStyle.color}`}>
              {comparison.affinity}
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${affinityStyle.barColor}`}
                  style={{ width: `${comparison.affinityScore}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
              {comparison.description}
            </p>
          </CardContent>
        </Card>

        {/* 두 전생 카드 비교 */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          <PersonCard result={resultA} saju={sajuA} label="첫 번째 사람" />
          <div className="flex items-center justify-center text-2xl text-muted-foreground font-bold py-2 md:py-0">
            vs
          </div>
          <PersonCard result={resultB} saju={sajuB} label="두 번째 사람" />
        </div>

        {/* 공통 오행 */}
        {comparison.sharedElements.length > 0 && (
          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <p className="text-sm text-muted-foreground">두 사람의 공통 오행</p>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                {comparison.sharedElements.map((el) => (
                  <span
                    key={el}
                    className={`px-3 py-1 rounded-full text-sm border ${ELEMENT_STYLES[el].bg} ${ELEMENT_STYLES[el].text} ${ELEMENT_STYLES[el].border}`}
                  >
                    {ELEMENT_STYLES[el].label}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center">
          <Link href="/saju">
            <Button variant="ghost" className="text-muted-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              내 전생 확인하기
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // 파라미터 없는 경우: 안내
  return (
    <div className="max-w-md mx-auto text-center space-y-6">
      <div className="text-6xl">👥</div>
      <h2 className="text-xl font-bold">친구와 전생 비교하기</h2>
      <p className="text-muted-foreground leading-relaxed">
        먼저 자신의 전생을 확인한 후,<br />
        결과 페이지에서 &quot;친구와 비교하기&quot; 버튼을 눌러<br />
        링크를 생성해보세요!
      </p>
      <Link href="/saju">
        <Button>
          <Sparkles className="h-4 w-4 mr-2" />
          내 전생 먼저 확인하기
        </Button>
      </Link>
    </div>
  );
}

export default function ComparePage() {
  return (
    <section className="relative min-h-[80vh] star-bg py-12 md:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      </div>

      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-purple">전생 인연</span> 비교
          </h1>
          <p className="text-muted-foreground">
            두 사람의 전생이 어떤 관계였는지 알아보세요
          </p>
        </div>

        <Suspense fallback={
          <div className="flex justify-center py-20">
            <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <CompareContent />
        </Suspense>
      </div>
    </section>
  );
}
