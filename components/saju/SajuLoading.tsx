'use client';

import { useEffect, useState } from 'react';

const LOADING_MESSAGES = [
  '천간과 지지를 배열하고 있습니다...',
  '절기를 계산하고 있습니다...',
  '오행의 흐름을 읽고 있습니다...',
  '전생의 기억을 소환하고 있습니다...',
  '우주의 별자리와 대조하고 있습니다...',
  '당신의 전생이 모습을 드러내고 있습니다...',
];

export function SajuLoading() {
  const [messageIdx, setMessageIdx] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    // 메시지 순환
    const msgTimer = setInterval(() => {
      setMessageIdx((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 700);

    // 점 애니메이션
    const dotTimer = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 400);

    return () => {
      clearInterval(msgTimer);
      clearInterval(dotTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      {/* 신비로운 오브 애니메이션 */}
      <div className="relative w-40 h-40">
        {/* 외부 링 */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin"
          style={{ animationDuration: '8s' }} />
        <div className="absolute inset-2 rounded-full border-2 border-primary/30 animate-spin"
          style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
        <div className="absolute inset-4 rounded-full border-2 border-primary/40 animate-spin"
          style={{ animationDuration: '4s' }} />

        {/* 중앙 오브 */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/60 via-primary/40 to-accent/30 blur-sm animate-pulse" />
        <div className="absolute inset-10 rounded-full bg-gradient-to-br from-primary via-primary/80 to-accent/60 flex items-center justify-center">
          <span className="text-3xl">☯</span>
        </div>

        {/* 별빛 파티클 */}
        {['top-2 left-1/2 -translate-x-1/2', 'bottom-2 left-1/2 -translate-x-1/2',
          'left-2 top-1/2 -translate-y-1/2', 'right-2 top-1/2 -translate-y-1/2'].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-2 h-2 rounded-full bg-accent star`}
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>

      {/* 오행 오브들 */}
      <div className="flex gap-4">
        {[
          { label: '木', delay: '0s', color: 'bg-green-500/70' },
          { label: '火', delay: '0.3s', color: 'bg-orange-500/70' },
          { label: '土', delay: '0.6s', color: 'bg-yellow-500/70' },
          { label: '金', delay: '0.9s', color: 'bg-purple-500/70' },
          { label: '水', delay: '1.2s', color: 'bg-blue-500/70' },
        ].map(({ label, delay, color }) => (
          <div
            key={label}
            className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold loading-orb`}
            style={{ animationDelay: delay }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* 로딩 메시지 */}
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-primary">
          {LOADING_MESSAGES[messageIdx]}{dots}
        </p>
        <p className="text-sm text-muted-foreground">
          사주팔자를 분석하고 있습니다
        </p>
      </div>

      {/* 진행 바 */}
      <div className="w-64 h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
          style={{
            animation: 'shimmer 2s linear infinite',
            backgroundSize: '200% 100%',
            width: '60%',
          }}
        />
      </div>
    </div>
  );
}
