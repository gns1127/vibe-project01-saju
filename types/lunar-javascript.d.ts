// lunar-javascript 타입 선언 파일
declare module 'lunar-javascript' {
  export class Solar {
    static fromYmd(year: number, month: number, day: number): Solar;
    static fromYmdHms(year: number, month: number, day: number, hour: number, minute: number, second: number): Solar;
    getYear(): number;
    getMonth(): number;
    getDay(): number;
    getLunar(): Lunar;
  }

  export class Lunar {
    getYear(): number;
    getMonth(): number;   // 윤달이면 음수
    getDay(): number;
    getYearGanIndexExact(): number;
    getYearZhiIndexExact(): number;
    getMonthGanIndexExact(): number;
    getMonthZhiIndexExact(): number;
    getDayGanIndexExact2(): number;
    getDayZhiIndexExact2(): number;
    getEightChar(): EightChar;
    getYearInGanZhi(): string;
    getMonthInGanZhi(): string;
    getDayInGanZhi(): string;
    getTimeInGanZhi(hour: number): string;
  }

  export class EightChar {
    getYearGan(): string;
    getYearZhi(): string;
    getMonthGan(): string;
    getMonthZhi(): string;
    getDayGan(): string;
    getDayZhi(): string;
    getTimeGan(): string;
    getTimeZhi(): string;
  }

  export class HolidayUtil {
    static getHoliday(year: number, month: number, day: number): unknown;
  }
}
