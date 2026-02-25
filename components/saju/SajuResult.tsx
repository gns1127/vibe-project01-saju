'use client';

import { useRef } from 'react';
import { type SajuResult as SajuResultType } from '@/lib/saju';
import { interpretPastLife, ELEMENT_STYLES } from '@/lib/pastlife';
import { SajuChart } from './SajuChart';
import { PastLifeCard } from './PastLifeCard';
import { ShareButtons } from './ShareButtons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RotateCcw, Sparkles } from 'lucide-react';

interface SajuResultProps {
  saju: SajuResultType;
  gender: '남' | '여';
  onReset: () => void;
}

export function SajuResult({ saju, gender, onReset }: SajuResultProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const result = interpretPastLife(saju);
  const { pastLife, dominantElement, secondaryElement } = result;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* 전생 결과 카드 (이미지 저장 대상) */}
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
        <PastLifeCard ref={cardRef} result={result} saju={saju} gender={gender} />
      </div>

      {/* 사주팔자 분석 카드 */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="h-5 w-5 text-primary" />
            사주팔자 분석
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SajuChart saju={saju} />
        </CardContent>
      </Card>

      {/* 상세 전생 해석 카드 */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">전생 상세 해석</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* 우세 오행 */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">당신의 오행 기운</p>
            <div className="flex gap-2 flex-wrap">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${ELEMENT_STYLES[dominantElement].bg} ${ELEMENT_STYLES[dominantElement].text} ${ELEMENT_STYLES[dominantElement].border}`}>
                {ELEMENT_STYLES[dominantElement].label} (주기운)
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${ELEMENT_STYLES[secondaryElement].bg} ${ELEMENT_STYLES[secondaryElement].text} ${ELEMENT_STYLES[secondaryElement].border}`}>
                {ELEMENT_STYLES[secondaryElement].label} (보조기운)
              </span>
            </div>
          </div>

          <Separator />

          {/* 전생 직업 */}
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-muted-foreground">전생의 직업 / 신분</p>
            <p className="text-base font-semibold">
              {pastLife.symbol} {pastLife.occupation}
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              시대적 배경: {pastLife.era}
            </p>
            <p className="text-sm leading-relaxed">{pastLife.occupationDetail}</p>
          </div>

          <Separator />

          {/* 전생 환경 */}
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-muted-foreground">전생의 삶의 터전</p>
            <p className="text-sm leading-relaxed">{pastLife.environment}</p>
          </div>

          <Separator />

          {/* 전생 성격 */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">전생의 성격 특성</p>
            <div className="flex flex-wrap gap-1.5">
              {pastLife.personality.map((trait) => (
                <span
                  key={trait}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <Separator />

          {/* 이번 생의 사명 */}
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-muted-foreground">✦ 이번 생의 사명</p>
            <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 space-y-4">
              <p className="text-sm leading-relaxed font-medium">{pastLife.mission}</p>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-medium">💼 현생 추천 직업</p>
                <ul className="space-y-1.5">
                  {pastLife.recommendedJobs.map(({ job, reason }) => (
                    <li key={job} className="text-sm">
                      <span className="font-semibold text-primary">{job}</span>
                      <span className="text-muted-foreground"> — {reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 공유 버튼 카드 */}
      <Card className="border-primary/20">
        <CardContent className="pt-6">
          <ShareButtons result={result} saju={saju} cardRef={cardRef} />
        </CardContent>
      </Card>

      {/* 다시 하기 */}
      <div className="text-center pb-4">
        <Button variant="ghost" onClick={onReset} className="text-muted-foreground">
          <RotateCcw className="h-4 w-4 mr-2" />
          다시 입력하기
        </Button>
      </div>
    </div>
  );
}
