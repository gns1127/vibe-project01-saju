'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Download, Link2, Twitter, Share2 } from 'lucide-react';
import { toPng } from 'html-to-image';
import type { PastLifeResult } from '@/lib/pastlife';
import type { SajuResult } from '@/lib/saju';
import { encodeSajuToParam } from '@/lib/saju';

interface ShareButtonsProps {
  result: PastLifeResult;
  saju: SajuResult;
  cardRef: React.RefObject<HTMLDivElement | null>;
}

export function ShareButtons({ result, saju, cardRef }: ShareButtonsProps) {
  const [saving, setSaving] = useState(false);

  // 결과 카드를 이미지로 저장
  const saveImage = async () => {
    if (!cardRef.current) return;
    setSaving(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });
      const link = document.createElement('a');
      link.download = `전생탐정_${saju.dayPillar.ganji}.png`;
      link.href = dataUrl;
      link.click();
      toast.success('이미지가 저장되었습니다!');
    } catch {
      toast.error('이미지 저장에 실패했습니다.');
    } finally {
      setSaving(false);
    }
  };

  // X(트위터) 공유
  const shareToX = () => {
    const text = encodeURIComponent(result.shareText);
    const url = encodeURIComponent(
      typeof window !== 'undefined' ? window.location.href : ''
    );
    window.open(
      `https://x.com/intent/tweet?text=${text}&url=${url}`,
      '_blank',
      'width=550,height=450'
    );
  };

  // 카카오톡 공유 (SDK 없이 링크 공유 방식)
  const shareToKakao = async () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    // 카카오 SDK가 있으면 사용, 없으면 링크 복사로 폴백
    const kakao = (window as typeof window & { Kakao?: { isInitialized: () => boolean; Share: { sendDefault: (opts: unknown) => void } } }).Kakao;
    if (kakao && kakao.isInitialized()) {
      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `나의 전생은 ${result.pastLife.occupation}!`,
          description: `${saju.dayPillar.ganji}(${result.pastLife.ganjiHanja}) 일주 • ${result.pastLife.environment}`,
          imageUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`,
          link: { mobileWebUrl: shareUrl, webUrl: shareUrl },
        },
        buttons: [
          {
            title: '내 전생 확인하기',
            link: {
              mobileWebUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/saju`,
              webUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/saju`,
            },
          },
        ],
      });
    } else {
      // 폴백: 링크 복사
      await copyLink();
    }
  };

  // 인스타그램 공유 (Web Share API + 이미지 폴백)
  const shareToInstagram = async () => {
    if (!cardRef.current) return;
    setSaving(true);
    try {
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 });
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], '전생탐정.png', { type: 'image/png' });

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: `나의 전생은 ${result.pastLife.occupation}!`,
          text: result.shareText,
        });
      } else {
        // 데스크톱: 이미지 저장 후 안내
        const link = document.createElement('a');
        link.download = `전생탐정_${saju.dayPillar.ganji}.png`;
        link.href = dataUrl;
        link.click();
        toast.info('이미지를 저장했습니다. 인스타그램에 직접 올려보세요!', {
          duration: 4000,
        });
      }
    } catch {
      toast.error('공유에 실패했습니다.');
    } finally {
      setSaving(false);
    }
  };

  // 친구 비교 링크 복사
  const copyCompareLink = async () => {
    const param = encodeSajuToParam(saju);
    const url = `${window.location.origin}/saju/compare?a=${param}`;
    await navigator.clipboard.writeText(url);
    toast.success('친구 비교 링크가 복사되었습니다!', {
      description: '카카오톡, 인스타 DM으로 친구에게 보내보세요.',
    });
  };

  // 현재 페이지 링크 복사
  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    toast.success('링크가 복사되었습니다!');
  };

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-center text-muted-foreground">
        결과 공유하기
      </p>

      {/* 주요 공유 버튼 */}
      <div className="grid grid-cols-2 gap-2">
        {/* 카카오톡 */}
        <Button
          variant="outline"
          size="sm"
          onClick={shareToKakao}
          className="border-yellow-400/30 hover:bg-yellow-400/10 text-foreground"
        >
          <svg className="h-4 w-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C6.477 3 2 6.477 2 11c0 2.954 1.728 5.524 4.31 7.037L5.5 21l3.063-1.594A10.6 10.6 0 0 0 12 19c5.523 0 10-3.477 10-8s-4.477-8-10-8z"/>
          </svg>
          카카오톡
        </Button>

        {/* X (트위터) */}
        <Button
          variant="outline"
          size="sm"
          onClick={shareToX}
          className="border-foreground/20 hover:bg-foreground/5"
        >
          <Twitter className="h-4 w-4 mr-1.5" />
          X (트위터)
        </Button>

        {/* 인스타그램 */}
        <Button
          variant="outline"
          size="sm"
          onClick={shareToInstagram}
          disabled={saving}
          className="border-pink-400/30 hover:bg-pink-400/10"
        >
          <Share2 className="h-4 w-4 mr-1.5" />
          {saving ? '처리 중...' : '인스타그램'}
        </Button>

        {/* 이미지 저장 */}
        <Button
          variant="outline"
          size="sm"
          onClick={saveImage}
          disabled={saving}
          className="border-primary/30 hover:bg-primary/10"
        >
          <Download className="h-4 w-4 mr-1.5" />
          {saving ? '저장 중...' : '이미지 저장'}
        </Button>
      </div>

      {/* 친구 비교 링크 복사 */}
      <Button
        variant="default"
        size="sm"
        onClick={copyCompareLink}
        className="w-full"
      >
        <Link2 className="h-4 w-4 mr-1.5" />
        친구와 전생 비교하기 (링크 복사)
      </Button>
    </div>
  );
}
