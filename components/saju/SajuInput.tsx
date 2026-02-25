'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Calendar, Clock, User } from 'lucide-react';

interface SajuInputProps {
  onSubmit: (data: {
    year: number;
    month: number;
    day: number;
    hour: number;
    gender: '남' | '여';
  }) => void;
  loading?: boolean;
}

// 시진(時辰) 선택 옵션
const HOUR_OPTIONS = [
  { label: '자시 (23:00~01:00)', value: '23' },
  { label: '축시 (01:00~03:00)', value: '2' },
  { label: '인시 (03:00~05:00)', value: '4' },
  { label: '묘시 (05:00~07:00)', value: '6' },
  { label: '진시 (07:00~09:00)', value: '8' },
  { label: '사시 (09:00~11:00)', value: '10' },
  { label: '오시 (11:00~13:00)', value: '12' },
  { label: '미시 (13:00~15:00)', value: '14' },
  { label: '신시 (15:00~17:00)', value: '16' },
  { label: '유시 (17:00~19:00)', value: '18' },
  { label: '술시 (19:00~21:00)', value: '20' },
  { label: '해시 (21:00~23:00)', value: '22' },
  { label: '모름 (오시 기본값)', value: '12_unknown' },
];

export function SajuInput({ onSubmit, loading = false }: SajuInputProps) {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [gender, setGender] = useState<'남' | '여' | ''>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const y = parseInt(year);
    const m = parseInt(month);
    const d = parseInt(day);

    if (!year || isNaN(y) || y < 1900 || y > 2024) {
      newErrors.year = '1900~2024년 사이의 연도를 입력하세요';
    }
    if (!month || isNaN(m) || m < 1 || m > 12) {
      newErrors.month = '1~12월을 입력하세요';
    }
    if (!day || isNaN(d) || d < 1 || d > 31) {
      newErrors.day = '1~31일을 입력하세요';
    }
    if (!hour) {
      newErrors.hour = '태어난 시간을 선택하세요';
    }
    if (!gender) {
      newErrors.gender = '성별을 선택하세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const hourValue = hour === '12_unknown' ? 12 : parseInt(hour);
    onSubmit({
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
      hour: hourValue,
      gender: gender as '남' | '여',
    });
  };

  return (
    <Card className="w-full max-w-lg mx-auto border-primary/20 shadow-xl shadow-primary/10">
      <CardHeader className="text-center pb-2">
        <div className="flex justify-center mb-3">
          <div className="p-3 rounded-full bg-primary/10">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl">생년월일시 입력</CardTitle>
        <CardDescription>
          정확한 전생을 알려면 태어난 시간까지 입력하세요.<br />
          절기 기준으로 정밀하게 계산됩니다.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 생년 */}
          <div className="space-y-1.5">
            <Label htmlFor="year" className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              출생 연도
            </Label>
            <Input
              id="year"
              type="number"
              placeholder="예: 1990"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              min={1900}
              max={2024}
              className={errors.year ? 'border-destructive' : ''}
            />
            {errors.year && (
              <p className="text-xs text-destructive">{errors.year}</p>
            )}
          </div>

          {/* 생월/생일 */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="month">월</Label>
              <Input
                id="month"
                type="number"
                placeholder="1~12"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                min={1}
                max={12}
                className={errors.month ? 'border-destructive' : ''}
              />
              {errors.month && (
                <p className="text-xs text-destructive">{errors.month}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="day">일</Label>
              <Input
                id="day"
                type="number"
                placeholder="1~31"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                min={1}
                max={31}
                className={errors.day ? 'border-destructive' : ''}
              />
              {errors.day && (
                <p className="text-xs text-destructive">{errors.day}</p>
              )}
            </div>
          </div>

          {/* 태어난 시간 */}
          <div className="space-y-1.5">
            <Label className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary" />
              태어난 시간 (시주)
            </Label>
            <Select onValueChange={setHour}>
              <SelectTrigger className={errors.hour ? 'border-destructive' : ''}>
                <SelectValue placeholder="시진을 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                {HOUR_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.hour && (
              <p className="text-xs text-destructive">{errors.hour}</p>
            )}
          </div>

          {/* 성별 */}
          <div className="space-y-1.5">
            <Label className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-primary" />
              성별
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant={gender === '남' ? 'default' : 'outline'}
                onClick={() => setGender('남')}
                className={`w-full ${errors.gender && !gender ? 'border-destructive' : ''}`}
              >
                남성
              </Button>
              <Button
                type="button"
                variant={gender === '여' ? 'default' : 'outline'}
                onClick={() => setGender('여')}
                className={`w-full ${errors.gender && !gender ? 'border-destructive' : ''}`}
              >
                여성
              </Button>
            </div>
            {errors.gender && (
              <p className="text-xs text-destructive">{errors.gender}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full shadow-lg shadow-primary/25"
            size="lg"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                사주 분석 중...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                전생 확인하기
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            입력하신 정보는 저장되지 않으며 계산에만 사용됩니다.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
