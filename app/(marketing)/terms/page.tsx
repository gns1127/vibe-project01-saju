import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관",
  description: "전생탐정 이용약관 안내",
};

export default function TermsPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">이용약관</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
        <p className="text-sm text-muted-foreground">
          시행일: 2026년 2월 26일
        </p>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">제1조 (목적)</h2>
          <p>
            이 약관은 전생탐정(이하 &quot;서비스&quot;)의 이용 조건 및 절차, 서비스 제공자와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">제2조 (서비스 설명)</h2>
          <p>
            전생탐정은 이용자가 입력한 생년월일 및 출생시간을 기반으로 사주팔자(四柱八字)를 분석하여 전생 유형 등 흥미로운 정보를 제공하는 엔터테인먼트 서비스입니다.
          </p>
          <p className="mt-2">
            서비스에서 제공하는 모든 전생 분석 결과는 <strong className="text-foreground">오락·참고 목적</strong>으로만 활용되어야 하며,
            의학적·법적·재정적 판단의 근거로 사용할 수 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">제3조 (이용 조건)</h2>
          <p>서비스를 이용하기 위해 이용자는 다음 조건에 동의해야 합니다:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>만 14세 이상이어야 합니다.</li>
            <li>본 약관의 모든 내용에 동의해야 합니다.</li>
            <li>적법한 목적으로만 서비스를 이용해야 합니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">제4조 (금지 행위)</h2>
          <p>이용자는 다음 행위를 해서는 안 됩니다:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>서비스의 정상적인 운영을 방해하는 행위</li>
            <li>자동화된 수단(봇, 스크래퍼 등)을 이용한 대량 접속</li>
            <li>서비스 내 콘텐츠를 무단으로 복제·배포·상업적으로 이용하는 행위</li>
            <li>타인의 정보를 도용하거나 허위 정보를 입력하는 행위</li>
            <li>서비스의 소스코드를 역공학·해킹하는 행위</li>
            <li>관련 법령을 위반하는 일체의 행위</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">제5조 (서비스 변경 및 중단)</h2>
          <p>
            서비스 제공자는 운영상·기술상 필요에 따라 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다.
            서비스 변경·중단으로 인한 손해에 대해 서비스 제공자는 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">제6조 (면책 조항)</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              서비스에서 제공하는 전생 분석 결과는 통계적·엔터테인먼트적 콘텐츠로,
              정확성이나 사실성을 보장하지 않습니다.
            </li>
            <li>
              이용자가 서비스 결과를 실제 의사결정에 사용하여 발생한 손해에 대해 서비스 제공자는 책임을 지지 않습니다.
            </li>
            <li>
              천재지변, 네트워크 장애, 제3자 서비스(Google 등) 장애로 인한 서비스 중단에 대해 책임을 지지 않습니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">제7조 (광고)</h2>
          <p>
            서비스는 Google AdSense를 통한 광고를 포함할 수 있습니다.
            광고 내용은 서비스 제공자가 통제하지 않으며, 광고주와의 거래에서 발생하는 문제에 대해 서비스 제공자는 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">제8조 (저작권)</h2>
          <p>
            서비스 내 모든 콘텐츠(텍스트, 디자인, 로고 등)의 저작권은 서비스 제공자에게 있습니다.
            이용자는 서비스 내 콘텐츠를 서비스 제공자의 사전 동의 없이 상업적으로 이용하거나 무단으로 복제·배포할 수 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">제9조 (준거법 및 관할)</h2>
          <p>
            이 약관은 대한민국 법령에 따라 해석되며, 서비스와 관련한 분쟁은 대한민국 법원을 관할 법원으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">제10조 (약관 변경)</h2>
          <p>
            서비스 제공자는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 본 페이지를 통해 공지합니다.
            변경 후 서비스를 계속 이용하면 변경된 약관에 동의한 것으로 간주합니다.
          </p>
        </section>
      </div>
    </main>
  );
}
