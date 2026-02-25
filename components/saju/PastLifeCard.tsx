'use client';

import { forwardRef } from 'react';
import { type PastLifeResult, ELEMENT_STYLES } from '@/lib/pastlife';
import { type SajuResult } from '@/lib/saju';
import { Sparkles, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// 별빛 파티클 위치 (고정값으로 서버/클라이언트 불일치 방지)
const STAR_POSITIONS = [
  { top: '8%', left: '12%', opacity: 0.6 },
  { top: '25%', left: '85%', opacity: 0.4 },
  { top: '55%', left: '7%', opacity: 0.7 },
  { top: '72%', left: '78%', opacity: 0.5 },
  { top: '38%', left: '42%', opacity: 0.3 },
  { top: '88%', left: '25%', opacity: 0.6 },
  { top: '15%', left: '60%', opacity: 0.5 },
  { top: '65%', left: '53%', opacity: 0.4 },
  { top: '45%', left: '92%', opacity: 0.7 },
  { top: '80%', left: '68%', opacity: 0.5 },
  { top: '5%', left: '35%', opacity: 0.4 },
  { top: '95%', left: '90%', opacity: 0.6 },
];

interface PastLifeCardProps {
  result: PastLifeResult;
  saju: SajuResult;
  gender: '남' | '여';
}

// 공명도 색상 및 라벨
const COMPATIBILITY_STYLES: Record<'상' | '중' | '하', { label: string; color: string }> = {
  상: { label: '🌟 전생과 강한 공명', color: 'text-yellow-600 dark:text-yellow-400' },
  중: { label: '✨ 전생과 중간 공명', color: 'text-primary' },
  하: { label: '🌙 전생과 약한 공명', color: 'text-muted-foreground' },
};

// 결과 카드 (이미지 저장 시 캡처 대상)
export const PastLifeCard = forwardRef<HTMLDivElement, PastLifeCardProps>(
  ({ result, saju, gender }, ref) => {
    const { pastLife, compatibility } = result;
    const compatStyle = COMPATIBILITY_STYLES[compatibility];

    return (
      <div
        ref={ref}
        className="relative rounded-2xl overflow-hidden p-6 md:p-8 space-y-6"
        style={{
          background: 'linear-gradient(135deg, oklch(0.22 0.08 290) 0%, oklch(0.18 0.06 300) 50%, oklch(0.15 0.05 270) 100%)',
          minWidth: '320px',
        }}
      >
        {/* 배경 별빛 장식 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {STAR_POSITIONS.map((pos, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/30"
              style={{ top: pos.top, left: pos.left, opacity: pos.opacity }}
            />
          ))}
        </div>

        {/* 헤더 */}
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm tracking-wider">전생탐정</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className={`text-xs font-medium ${compatStyle.color}`}>
              {compatStyle.label}
            </span>
          </div>
        </div>

        {/* 일주 + 상징 */}
        <div className="relative text-center space-y-3">
          <div className="flex justify-center">
            <div className="text-7xl float-animation">{pastLife.symbol}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white/90 mb-1">
              {pastLife.ganjiHanja}
            </div>
            <div className="text-xl text-white/60">
              ({saju.dayPillar.ganji}) {gender}
            </div>
          </div>
        </div>

        {/* 전생 직업/신분 */}
        <div className="relative text-center space-y-2">
          <div className="text-sm text-white/50 uppercase tracking-widest">전생의 모습</div>
          <h2 className="text-2xl font-bold text-yellow-300">{pastLife.occupation}</h2>
          <p className="text-sm text-white/70 leading-relaxed">{pastLife.environment}</p>
          <p className="text-xs text-white/55 leading-relaxed">{pastLife.occupationDetail}</p>
        </div>

        {/* 주 오행 배지 */}
        <div className="relative flex justify-center gap-2 flex-wrap">
          <Badge
            variant="outline"
            className={`border-white/20 text-white/70 bg-white/10`}
          >
            {ELEMENT_STYLES[pastLife.element].label} 일주
          </Badge>
          <Badge
            variant="outline"
            className={`border-white/20 text-white/70 bg-white/10`}
          >
            {pastLife.era}
          </Badge>
        </div>

        {/* 성격 특성 */}
        <div className="relative space-y-2">
          <div className="text-xs text-white/40 text-center">전생의 성격</div>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {pastLife.personality.map((trait) => (
              <span
                key={trait}
                className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* 이번 생의 사명 */}
        <div className="relative rounded-xl bg-white/5 border border-white/10 p-4 space-y-3">
          <div className="text-xs text-yellow-400/80 font-medium">이번 생의 사명 ✦</div>
          <p className="text-sm text-white/80 leading-relaxed">{pastLife.mission}</p>
          <div className="space-y-1.5">
            <div className="text-xs text-white/40">💼 추천 직업</div>
            <div className="flex flex-wrap gap-1.5">
              {pastLife.recommendedJobs.map(({ job }) => (
                <span
                  key={job}
                  className="text-xs px-2 py-0.5 rounded-full bg-yellow-400/10 text-yellow-300/80 border border-yellow-400/20"
                >
                  {job}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 워터마크 */}
        <div className="relative text-center">
          <p className="text-xs text-white/25">전생탐정 • pastlife.vercel.app</p>
        </div>
      </div>
    );
  }
);

PastLifeCard.displayName = 'PastLifeCard';
