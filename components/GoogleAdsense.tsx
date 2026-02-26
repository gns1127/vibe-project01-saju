import Script from "next/script";

/**
 * Google AdSense 스크립트 컴포넌트
 * NEXT_PUBLIC_ADSENSE_ID 환경변수가 설정된 경우에만 렌더링됩니다.
 * app/layout.tsx의 <head> 내에 삽입하여 사용합니다.
 */
export function GoogleAdsense() {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  if (!adsenseId) {
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
