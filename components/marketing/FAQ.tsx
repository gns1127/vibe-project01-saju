const faqs = [
  {
    q: "전생탐정은 실제로 전생을 맞힐 수 있나요?",
    a: "전생탐정은 엔터테인먼트 목적의 서비스입니다. 사주팔자는 수천 년의 동양 철학에 기반한 상징 체계로, 결과는 재미와 자기 성찰의 도구로 활용하시길 권장합니다. 실제 전생이나 운명을 과학적으로 예측하거나 단언하지 않습니다.",
  },
  {
    q: "음력과 양력 중 어떤 것을 입력해야 하나요?",
    a: "기본값은 양력(그레고리력)입니다. 음력으로 생년월일을 알고 계신다면 입력 폼의 '음력' 체크박스를 선택하면 됩니다. 전생탐정은 내부적으로 양력·음력 모두 정확한 간지 계산을 지원합니다.",
  },
  {
    q: "태어난 시간을 모르면 어떻게 되나요?",
    a: "시간 선택란에서 '모름'을 선택하세요. 이 경우 시주(時柱) 없이 연·월·일 세 기둥만으로 전생 유형이 결정됩니다. 일주(日柱)가 핵심 지표이므로 시간을 몰라도 주요 결과는 충분히 정확합니다.",
  },
  {
    q: "60갑자 중 같은 결과가 나오는 사람이 있나요?",
    a: "네, 같은 날 태어난 사람은 같은 일주(日柱)를 가집니다. 일주는 60년 주기로 반복되므로 60년 전·후 같은 날 태어난 사람과 동일한 기본 전생 유형이 나옵니다. 그러나 연주·월주·시주의 조합으로 세부 성격과 운세는 모두 다릅니다.",
  },
  {
    q: "결과를 저장하거나 공유할 수 있나요?",
    a: "결과 화면에서 이미지로 저장하거나 카카오톡·X(트위터)로 바로 공유할 수 있습니다. '친구 비교' 기능을 이용하면 두 사람의 전생 궁합을 확인하고 함께 공유할 수도 있습니다.",
  },
  {
    q: "사주팔자는 과학적인가요?",
    a: "사주팔자는 현대 과학으로 검증된 학문이 아닙니다. 고대 중국에서 시작된 동양 철학·역학(易學)의 일부로, 자연의 순환과 음양오행의 원리를 인간의 삶에 적용한 지혜 체계입니다. 과학적 근거보다는 문화적·철학적 맥락에서 즐겨주시기 바랍니다.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">자주 묻는 질문</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            전생탐정 서비스에 대해 궁금한 점을 모았습니다.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-base mb-2">
                <span className="gradient-gold mr-2">Q.</span>
                {faq.q}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-semibold text-foreground mr-2">A.</span>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
