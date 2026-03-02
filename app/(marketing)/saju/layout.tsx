import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "전생 확인하기 | 전생탐정",
  description:
    "생년월일시를 입력하면 사주팔자로 당신의 전생을 알려드립니다. 60갑자 기반 60가지 전생 유형과 오행 분석을 제공합니다.",
};

export default function SajuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
