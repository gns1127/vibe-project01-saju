'use client';

import { useState } from 'react';
import { SajuInput } from '@/components/saju/SajuInput';
import { SajuLoading } from '@/components/saju/SajuLoading';
import { SajuResult } from '@/components/saju/SajuResult';
import { calculateSaju, type SajuResult as SajuResultType } from '@/lib/saju';

type Step = 'input' | 'loading' | 'result';

interface FormData {
  year: number;
  month: number;
  day: number;
  hour: number;
  gender: '남' | '여';
}

export default function SajuPage() {
  const [step, setStep] = useState<Step>('input');
  const [saju, setSaju] = useState<SajuResultType | null>(null);
  const [gender, setGender] = useState<'남' | '여'>('남');

  const handleSubmit = (data: FormData) => {
    setGender(data.gender);
    setStep('loading');

    // 신비로운 로딩 효과 (1.5초)
    setTimeout(() => {
      try {
        const result = calculateSaju(data.year, data.month, data.day, data.hour);
        setSaju(result);
        setStep('result');
      } catch (e) {
        console.error('사주 계산 오류:', e);
        alert('사주 계산 중 오류가 발생했습니다. 날짜를 다시 확인해주세요.');
        setStep('input');
      }
    }, 1800);
  };

  const handleReset = () => {
    setSaju(null);
    setStep('input');
  };

  return (
    <section className="relative min-h-[80vh] star-bg py-12 md:py-20">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-screen-xl px-4">
        {/* 페이지 타이틀 */}
        {step !== 'result' && (
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gradient-purple">전생</span> 확인하기
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              생년월일시를 입력하면 사주팔자로 당신의 전생을 알려드립니다.
            </p>
          </div>
        )}

        {/* 단계별 렌더링 */}
        {step === 'input' && (
          <>
            <SajuInput onSubmit={handleSubmit} />

            {/* 입력 안내 — AdSense 정책: 콘텐츠 보강 */}
            <div className="max-w-xl mx-auto mt-10 glass-card rounded-2xl p-6 text-sm text-muted-foreground space-y-4">
              <h2 className="text-base font-semibold text-foreground">사주팔자 입력 안내</h2>
              <div>
                <p className="font-medium text-foreground mb-1">양력 / 음력 선택</p>
                <p>기본값은 양력(그레고리력)입니다. 음력 생년월일을 알고 계신다면 &apos;음력&apos; 체크박스를 선택하세요.
                  양력·음력 모두 정확한 간지(干支) 변환을 지원합니다.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">출생 시간을 모를 때</p>
                <p>시간 선택란에서 &apos;모름&apos;을 선택하면 연·월·일 세 기둥만으로 결과를 계산합니다.
                  일주(日柱)가 핵심 지표이므로 시간을 몰라도 전생 유형을 충분히 확인할 수 있습니다.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">1~2월생 입춘 기준</p>
                <p>사주명리학에서 한 해의 시작은 양력 1월 1일이 아니라 입춘(立春, 매년 2월 4~5일경)입니다.
                  전생탐정은 입춘 시각을 자동으로 반영하여 정확한 연주(年柱)를 계산합니다.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">결과 활용 안내</p>
                <p>결과는 재미와 자기 성찰을 위한 엔터테인먼트 콘텐츠입니다.
                  이미지로 저장하거나 카카오톡·X(트위터)로 친구에게 공유할 수 있습니다.</p>
              </div>
            </div>
          </>
        )}

        {step === 'loading' && (
          <SajuLoading />
        )}

        {step === 'result' && saju && (
          <div className="mt-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
              <span className="gradient-gold">전생 분석 결과</span>
            </h1>
            <SajuResult saju={saju} gender={gender} onReset={handleReset} />
          </div>
        )}
      </div>
    </section>
  );
}
