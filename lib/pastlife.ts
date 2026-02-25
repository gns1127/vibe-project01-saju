// 전생 해석 로직 - 사주팔자에서 전생 유형을 결정하는 규칙 기반 시스템

import type { SajuResult } from './saju';
import {
  PAST_LIFE_MAP,
  PAST_LIFE_DATA,
  ELEMENT_STYLES,
  type PastLifeType,
  type Element,
} from './pastlife-data';

export interface PastLifeResult {
  pastLife: PastLifeType;
  dominantElement: Element;           // 가장 강한 오행
  secondaryElement: Element;          // 두 번째 오행
  compatibility: '상' | '중' | '하';   // 전생과의 공명도
  shareText: string;                  // SNS 공유 문구
}

/**
 * 일주(日柱) ganji로 전생 유형을 결정합니다.
 * 60갑자 맵에서 직접 조회하며, 없을 경우 폴백 로직 사용
 */
export function interpretPastLife(saju: SajuResult): PastLifeResult {
  const { dayPillar, elementCounts } = saju;

  // 일주 ganji로 전생 유형 조회
  let pastLife = PAST_LIFE_MAP.get(dayPillar.ganji);

  // 폴백: 60갑자에 없는 경우 (이론상 없어야 하지만 안전 처리)
  if (!pastLife) {
    const stemIdx = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'].indexOf(dayPillar.heavenlyStem);
    const branchIdx = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'].indexOf(dayPillar.earthlyBranch);
    const fallbackIdx = ((stemIdx * 12 + branchIdx) % PAST_LIFE_DATA.length + PAST_LIFE_DATA.length) % PAST_LIFE_DATA.length;
    pastLife = PAST_LIFE_DATA[fallbackIdx];
  }

  // 오행 분포에서 우세 오행 결정
  const sortedElements = (Object.entries(elementCounts) as [Element, number][])
    .sort(([, a], [, b]) => b - a);

  const dominantElement = sortedElements[0][0];
  const secondaryElement = sortedElements[1][0];

  // 공명도 계산: 전생 오행과 일주 오행의 일치 여부
  let compatibility: '상' | '중' | '하';
  if (pastLife.element === dayPillar.element) {
    compatibility = '상';
  } else if (
    (pastLife.element === dominantElement) ||
    (pastLife.element === secondaryElement)
  ) {
    compatibility = '중';
  } else {
    compatibility = '하';
  }

  // SNS 공유 문구 생성
  const shareText = generateShareText(pastLife, saju);

  return {
    pastLife,
    dominantElement,
    secondaryElement,
    compatibility,
    shareText,
  };
}

/**
 * SNS 공유용 텍스트 생성
 */
function generateShareText(pastLife: PastLifeType, saju: SajuResult): string {
  const { dayPillar } = saju;
  return `나의 전생은 ${pastLife.symbol} ${pastLife.ganjiHanja}(${dayPillar.ganji})의 ${pastLife.occupation}!\n"${pastLife.mission}"\n\n당신의 전생도 확인해보세요 👇`;
}

/**
 * 오행 분포 퍼센트 계산
 */
export function calcElementPercentages(elementCounts: Record<Element, number>): Record<Element, number> {
  const total = Object.values(elementCounts).reduce((a, b) => a + b, 0);
  if (total === 0) return { 목: 0, 화: 0, 토: 0, 금: 0, 수: 0 };

  return Object.fromEntries(
    Object.entries(elementCounts).map(([el, count]) => [
      el,
      Math.round((count / total) * 100),
    ])
  ) as Record<Element, number>;
}

/**
 * 두 사주의 전생 인연 분석 (친구 비교 기능)
 */
export interface CompareResult {
  affinity: '천생연분' | '전생 인연' | '새로운 인연' | '인연 없음';
  affinityScore: number;   // 0~100
  description: string;
  sharedElements: Element[];
}

export function comparePastLives(
  result1: PastLifeResult,
  result2: PastLifeResult,
  saju1: SajuResult,
  saju2: SajuResult,
): CompareResult {
  // 공통 오행 계산
  const elements: Element[] = ['목', '화', '토', '금', '수'];
  const sharedElements = elements.filter(
    (el) => saju1.elementCounts[el] > 0 && saju2.elementCounts[el] > 0
  );

  // 주 오행 일치 여부
  const dominantMatch = result1.dominantElement === result2.dominantElement;
  const dayGanjiMatch = saju1.dayPillar.element === saju2.dayPillar.element;

  // 점수 계산
  let score = sharedElements.length * 15;
  if (dominantMatch) score += 25;
  if (dayGanjiMatch) score += 20;
  score = Math.min(100, score);

  let affinity: CompareResult['affinity'];
  let description: string;

  if (score >= 80) {
    affinity = '천생연분';
    description = `두 분은 전생에도 깊은 인연이 있었습니다! ${result1.pastLife.occupation}와 ${result2.pastLife.occupation}은 같은 시대를 살며 서로를 알아보았을 것입니다.`;
  } else if (score >= 55) {
    affinity = '전생 인연';
    description = `두 분은 전생에 스쳐 지나간 인연이 있었습니다. ${result1.pastLife.era}와 ${result2.pastLife.era}의 에너지가 이번 생에서 다시 만났네요.`;
  } else if (score >= 30) {
    affinity = '새로운 인연';
    description = `두 분은 이번 생에서 처음 만나는 새로운 인연입니다. 서로 다른 오행의 에너지가 보완적인 관계를 만들어냅니다.`;
  } else {
    affinity = '인연 없음';
    description = `두 분은 전생에 서로 다른 세계를 살았습니다. 이번 생에서의 만남이 새로운 업(業)의 시작입니다.`;
  }

  return { affinity, affinityScore: score, description, sharedElements };
}

export { ELEMENT_STYLES };
