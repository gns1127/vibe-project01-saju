// lunar-javascript를 사용한 사주팔자 계산 래퍼
// 절기 기준 월주 계산, 음력 변환 포함

import { Solar } from 'lunar-javascript';
import { HEAVENLY_STEM_ELEMENT, EARTHLY_BRANCH_ELEMENT, type Element } from './pastlife-data';

// 천간 (10개)
export const HEAVENLY_STEMS = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
// 지지 (12개)
export const EARTHLY_BRANCHES = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];

// 시주 지지 (자시 = 23시~01시부터 시작)
const HOUR_TO_BRANCH: Record<number, string> = {
  23: '자', 0: '자', 1: '자',
  2: '축', 3: '축',
  4: '인', 5: '인',
  6: '묘', 7: '묘',
  8: '진', 9: '진',
  10: '사', 11: '사',
  12: '오', 13: '오',
  14: '미', 15: '미',
  16: '신', 17: '신',
  18: '유', 19: '유',
  20: '술', 21: '술',
  22: '해',
};

export interface SajuPillar {
  heavenlyStem: string;   // 천간
  earthlyBranch: string;  // 지지
  ganji: string;          // 간지 (천간 + 지지)
  element: Element;       // 주 오행 (천간 기준)
}

export interface SajuResult {
  yearPillar: SajuPillar;   // 년주
  monthPillar: SajuPillar;  // 월주
  dayPillar: SajuPillar;    // 일주
  hourPillar: SajuPillar;   // 시주
  elementCounts: Record<Element, number>; // 오행 분포
  birthInfo: {
    solar: { year: number; month: number; day: number };
    lunar: { year: number; month: number; day: number; isLeap: boolean };
  };
}

// 간지 생성 유틸리티
function makePillar(stemIndex: number, branchIndex: number): SajuPillar {
  const heavenlyStem = HEAVENLY_STEMS[((stemIndex % 10) + 10) % 10];
  const earthlyBranch = EARTHLY_BRANCHES[((branchIndex % 12) + 12) % 12];
  return {
    heavenlyStem,
    earthlyBranch,
    ganji: `${heavenlyStem}${earthlyBranch}`,
    element: HEAVENLY_STEM_ELEMENT[heavenlyStem],
  };
}

// 오행 분포 계산 (8글자 모두 포함)
function calcElementCounts(pillars: SajuPillar[]): Record<Element, number> {
  const counts: Record<Element, number> = { 목: 0, 화: 0, 토: 0, 금: 0, 수: 0 };
  for (const p of pillars) {
    counts[HEAVENLY_STEM_ELEMENT[p.heavenlyStem]]++;
    counts[EARTHLY_BRANCH_ELEMENT[p.earthlyBranch]]++;
  }
  return counts;
}

/**
 * 양력 생년월일시를 받아 사주팔자를 계산합니다.
 * lunar-javascript의 Solar 객체를 활용해 절기 기준 월주를 계산합니다.
 */
export function calculateSaju(
  year: number,
  month: number,
  day: number,
  hour: number = 12,
): SajuResult {
  // Solar 객체 생성
  const solar = Solar.fromYmd(year, month, day);
  const lunar = solar.getLunar();

  // 인덱스 메서드로 직접 각 주(柱)의 천간·지지 인덱스를 가져옴
  // (getEightChar()는 중국어 문자를 반환해 한국어 배열 indexOf가 -1이 되는 버그 있음)

  // 년주 (절기 기준 exact)
  const yearStemIdx   = lunar.getYearGanIndexExact();
  const yearBranchIdx = lunar.getYearZhiIndexExact();

  // 월주 (절기 기준 exact)
  const monthStemIdx   = lunar.getMonthGanIndexExact();
  const monthBranchIdx = lunar.getMonthZhiIndexExact();

  // 일주 (sect 2 exact)
  const dayStemIdx   = lunar.getDayGanIndexExact2();
  const dayBranchIdx = lunar.getDayZhiIndexExact2();

  // 일간 한국어 문자열 (시주 천간 계산에 사용)
  const dayStem = HEAVENLY_STEMS[dayStemIdx];

  // 시주 - 시간 기반 지지 결정 후 일간 기준 천간 계산
  const hourBranch = HOUR_TO_BRANCH[hour] ?? '자';
  const hourBranchIdx = EARTHLY_BRANCHES.indexOf(hourBranch);

  // 시간 천간: 일간(日干) 기준으로 계산
  // 갑/기일 → 갑자시 시작, 을/경일 → 병자시, 병/신일 → 무자시, 정/임일 → 경자시, 무/계일 → 임자시
  const DAY_TO_HOUR_START: Record<string, number> = {
    갑: 0, 기: 0,
    을: 2, 경: 2,
    병: 4, 신: 4,
    정: 6, 임: 6,
    무: 8, 계: 8,
  };
  const hourStartStemIdx = DAY_TO_HOUR_START[dayStem] ?? 0;
  // 시간 천간 계산: (일간기준시작 + 시지지순번) % 10
  const correctedHourStemIdx = (hourStartStemIdx + hourBranchIdx) % 10;

  const yearPillar = makePillar(yearStemIdx, yearBranchIdx);
  const monthPillar = makePillar(monthStemIdx, monthBranchIdx);
  const dayPillar = makePillar(dayStemIdx, dayBranchIdx);
  const hourPillar = makePillar(correctedHourStemIdx, hourBranchIdx);

  const elementCounts = calcElementCounts([yearPillar, monthPillar, dayPillar, hourPillar]);

  return {
    yearPillar,
    monthPillar,
    dayPillar,
    hourPillar,
    elementCounts,
    birthInfo: {
      solar: { year, month, day },
      lunar: {
        year: lunar.getYear(),
        month: lunar.getMonth(),
        day: lunar.getDay(),
        isLeap: lunar.getMonth() < 0,  // 음수 월 = 윤달
      },
    },
  };
}

// 시주 지지 한글 → 시각 범위 안내
export const BRANCH_HOUR_LABEL: Record<string, string> = {
  자: '23:00~01:00',
  축: '01:00~03:00',
  인: '03:00~05:00',
  묘: '05:00~07:00',
  진: '07:00~09:00',
  사: '09:00~11:00',
  오: '11:00~13:00',
  미: '13:00~15:00',
  신: '15:00~17:00',
  유: '17:00~19:00',
  술: '19:00~21:00',
  해: '21:00~23:00',
};

// 결과를 URL 파라미터 문자열로 인코딩 (친구 비교용)
export function encodeSajuToParam(result: SajuResult): string {
  const { yearPillar, monthPillar, dayPillar, hourPillar } = result;
  return encodeURIComponent(
    `${yearPillar.ganji}${monthPillar.ganji}${dayPillar.ganji}${hourPillar.ganji}`
  );
}

// URL 파라미터 문자열에서 사주 글자 디코딩
export function decodeSajuParam(param: string): {
  year: SajuPillar;
  month: SajuPillar;
  day: SajuPillar;
  hour: SajuPillar;
} | null {
  try {
    const decoded = decodeURIComponent(param);
    if (decoded.length !== 8) return null;

    const parse = (stem: string, branch: string): SajuPillar => ({
      heavenlyStem: stem,
      earthlyBranch: branch,
      ganji: `${stem}${branch}`,
      element: HEAVENLY_STEM_ELEMENT[stem],
    });

    return {
      year: parse(decoded[0], decoded[1]),
      month: parse(decoded[2], decoded[3]),
      day: parse(decoded[4], decoded[5]),
      hour: parse(decoded[6], decoded[7]),
    };
  } catch {
    return null;
  }
}
