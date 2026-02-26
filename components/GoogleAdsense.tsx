/**
 * Google AdSense 스크립트 컴포넌트
 * NEXT_PUBLIC_ADSENSE_ID 환경변수가 설정된 경우에만 렌더링됩니다.
 * Next.js Script 컴포넌트 대신 일반 script 태그를 사용하여
 * AdSense 크롤러가 HTML 소스에서 스크립트를 직접 감지할 수 있도록 합니다.
 */
export function GoogleAdsense() {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  if (!adsenseId) {
    return null;
  }

  return (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      crossOrigin="anonymous"
    />
  );
}
