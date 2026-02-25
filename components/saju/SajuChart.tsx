'use client';

import { type SajuResult } from '@/lib/saju';
import { ELEMENT_STYLES, type Element } from '@/lib/pastlife-data';
import { calcElementPercentages } from '@/lib/pastlife';

interface SajuChartProps {
  saju: SajuResult;
}

const PILLAR_LABELS = ['년주\n年柱', '월주\n月柱', '일주\n日柱', '시주\n時柱'] as const;

export function SajuChart({ saju }: SajuChartProps) {
  const { yearPillar, monthPillar, dayPillar, hourPillar, elementCounts } = saju;
  const pillars = [yearPillar, monthPillar, dayPillar, hourPillar];
  const percentages = calcElementPercentages(elementCounts);

  return (
    <div className="space-y-6">
      {/* 사주팔자 8글자 카드 */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-3 text-center">
          사주팔자 (四柱八字)
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {pillars.map((pillar, i) => {
            const stemStyle = ELEMENT_STYLES[pillar.element];
            return (
              <div key={i} className="flex flex-col items-center gap-1">
                {/* 천간 */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold border ${stemStyle.bg} ${stemStyle.text} ${stemStyle.border}`}
                >
                  {pillar.heavenlyStem}
                </div>
                {/* 지지 */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold border bg-muted/50 text-foreground border-border">
                  {pillar.earthlyBranch}
                </div>
                {/* 기둥 레이블 */}
                <div className="text-xs text-muted-foreground text-center whitespace-pre-line leading-tight mt-1">
                  {PILLAR_LABELS[i]}
                </div>
              </div>
            );
          })}
        </div>
        {/* 일주 강조 */}
        <p className="text-xs text-center text-muted-foreground mt-2">
          <span className="text-primary font-medium">일주(日柱)</span>가 전생 해석의 핵심입니다
        </p>
      </div>

      {/* 음력 정보 */}
      <div className="text-center text-sm text-muted-foreground">
        <span>음력 {saju.birthInfo.lunar.year}년 {saju.birthInfo.lunar.month}월 {saju.birthInfo.lunar.day}일</span>
        {saju.birthInfo.lunar.isLeap && (
          <span className="ml-1 text-primary font-medium">(윤달)</span>
        )}
      </div>

      {/* 오행 분포 */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-3 text-center">
          오행 분포 (五行 分布)
        </h3>
        <div className="space-y-2">
          {(Object.entries(percentages) as [Element, number][])
            .sort(([, a], [, b]) => b - a)
            .map(([element, pct]) => {
              const style = ELEMENT_STYLES[element];
              return (
                <div key={element} className="flex items-center gap-2">
                  <span className={`text-xs font-medium w-10 text-right ${style.text}`}>
                    {style.label}
                  </span>
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${style.bg}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-8">
                    {elementCounts[element]}개
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
