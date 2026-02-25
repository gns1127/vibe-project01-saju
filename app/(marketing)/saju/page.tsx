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
          <SajuInput onSubmit={handleSubmit} />
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
