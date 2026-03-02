import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "전생탐정 개인정보처리방침 안내",
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">개인정보처리방침</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
        <p className="text-sm text-muted-foreground">
          시행일: 2026년 2월 26일
        </p>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. 개요</h2>
          <p>
            전생탐정(이하 &quot;서비스&quot;)은 이용자의 개인정보를 소중히 여기며, 「개인정보 보호법」을 준수합니다.
            본 방침은 서비스가 수집하는 정보와 그 활용 방법을 설명합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. 수집하는 정보</h2>
          <p>서비스는 다음 정보를 수집합니다:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong className="text-foreground">생년월일 및 출생시간:</strong> 사주팔자 계산을 위해 이용자가 직접 입력하는 정보입니다.
              서버에 저장되지 않으며, 브라우저 세션 내에서만 사용됩니다.
            </li>
            <li>
              <strong className="text-foreground">쿠키 및 유사 기술:</strong> Google AdSense 등 제3자 광고 서비스가 광고 맞춤화 및 분석을 위해 쿠키를 사용할 수 있습니다.
            </li>
            <li>
              <strong className="text-foreground">자동 수집 정보:</strong> 접속 IP, 브라우저 유형, 방문 페이지 등 서버 로그 정보가 자동으로 수집될 수 있습니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. 정보 수집 목적</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>사주팔자 기반 전생 분석 서비스 제공</li>
            <li>서비스 개선 및 통계 분석</li>
            <li>광고 서비스 운영 (Google AdSense)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. 제3자 정보 제공</h2>
          <p>
            서비스는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            단, 다음의 경우는 예외로 합니다:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong className="text-foreground">Google AdSense:</strong> 광고 게재를 위해 Google이 쿠키를 통해 광고 관련 데이터를 수집할 수 있습니다.
              Google의 개인정보 처리 방침은{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                여기
              </a>
              에서 확인할 수 있습니다.
            </li>
            <li>법령에 의한 경우 또는 수사기관의 적법한 요청이 있는 경우</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. 광고 및 쿠키</h2>
          <p>
            서비스는 Google AdSense를 통해 광고를 게재합니다. Google은 쿠키를 사용하여 이용자의 이전 방문 기록을 기반으로 광고를 제공합니다.
            이용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Google 광고 설정</a>에서
            맞춤 광고를 해제할 수 있습니다.
          </p>
          <p className="mt-2">
            또한 <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">aboutads.info</a>를 통해
            제3자 쿠키를 사용한 맞춤 광고를 비활성화할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. 정보 보유 기간</h2>
          <p>
            이용자가 입력한 생년월일 및 출생시간은 서버에 저장되지 않으며, 브라우저 세션이 종료되면 자동으로 삭제됩니다.
            서버 로그는 최대 30일간 보관 후 삭제됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. 이용자의 권리</h2>
          <p>이용자는 다음과 같은 권리를 갖습니다:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>개인정보 수집·이용에 대한 동의 철회</li>
            <li>쿠키 저장을 거부할 권리 (단, 일부 서비스 이용이 제한될 수 있음)</li>
          </ul>
          <p className="mt-2">브라우저 설정을 통해 쿠키를 거부할 수 있습니다.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. 방침 변경</h2>
          <p>
            본 개인정보처리방침은 법령·정책 변경에 따라 개정될 수 있습니다.
            변경 시 본 페이지를 통해 공지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. 문의</h2>
          <p>
            개인정보 관련 문의사항은 아래 이메일로 연락해 주세요.
          </p>
          <p className="mt-2">
            이메일:{" "}
            <a
              href="mailto:tkdgns1127@naver.com"
              className="text-primary underline underline-offset-4"
            >
              tkdgns1127@naver.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
