export function SajuGuide() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            사주팔자(四柱八字)란 무엇인가?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            수천 년의 동양 철학이 담긴 사주팔자의 원리와 전생탐정의 분석 방법을 알아보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 사주팔자 기본 개념 */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 gradient-gold">
              네 개의 기둥, 여덟 글자
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              사주(四柱)는 태어난 해·달·날·시 네 가지 요소를 뜻합니다. 팔자(八字)는 각 요소가
              두 글자(천간+지지)로 구성되어 총 여덟 글자가 된다는 의미입니다.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="gradient-gold font-bold shrink-0">연주(年柱)</span>
                <span>태어난 해를 나타내는 두 글자. 조상·부모·초년 운을 상징합니다.</span>
              </li>
              <li className="flex gap-2">
                <span className="gradient-gold font-bold shrink-0">월주(月柱)</span>
                <span>태어난 달을 나타내는 두 글자. 부모·형제·청년 운을 상징합니다.</span>
              </li>
              <li className="flex gap-2">
                <span className="gradient-gold font-bold shrink-0">일주(日柱)</span>
                <span>태어난 날을 나타내는 두 글자. 자신·배우자·중년 운의 핵심입니다.</span>
              </li>
              <li className="flex gap-2">
                <span className="gradient-gold font-bold shrink-0">시주(時柱)</span>
                <span>태어난 시간을 나타내는 두 글자. 자녀·노년 운을 상징합니다.</span>
              </li>
            </ul>
          </div>

          {/* 천간과 지지 */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 gradient-purple">
              천간(天干)과 지지(地支)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              각 기둥은 하늘의 기운인 천간(天干) 1자와 땅의 기운인 지지(地支) 1자로 구성됩니다.
              천간 10개와 지지 12개가 조합을 이루어 60갑자를 형성합니다.
            </p>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold text-foreground">천간(天干) 10개: </span>
                <span className="text-muted-foreground">
                  甲(갑) · 乙(을) · 丙(병) · 丁(정) · 戊(무) · 己(기) · 庚(경) · 辛(신) · 壬(임) · 癸(계)
                </span>
              </div>
              <div>
                <span className="font-semibold text-foreground">지지(地支) 12개: </span>
                <span className="text-muted-foreground">
                  子(자) · 丑(축) · 寅(인) · 卯(묘) · 辰(진) · 巳(사) · 午(오) · 未(미) · 申(신) · 酉(유) · 戌(술) · 亥(해)
                </span>
              </div>
              <p className="text-muted-foreground">
                10×12의 최소공배수인 60가지 조합이 반복되므로, 같은 사주를 가진 사람은 60년 주기로 나타납니다.
                이 60가지를 <strong className="text-foreground">육십갑자(六十甲子)</strong>라고 부릅니다.
              </p>
            </div>
          </div>
        </div>

        {/* 오행 섹션 */}
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="text-xl font-bold mb-6 text-center">
            오행(五行) — 세상을 이루는 다섯 가지 기운
          </h3>
          <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
            사주팔자의 여덟 글자에는 반드시 오행 중 하나의 기운이 담겨 있습니다.
            각 글자의 오행 기운이 어떻게 상생(相生)하고 상극(相剋)하는지가 운명의 흐름을 결정합니다.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div className="element-wood rounded-xl p-4 text-center">
              <div className="text-2xl font-bold mb-1">木</div>
              <div className="font-semibold text-sm mb-1">목(木) · 나무</div>
              <div className="text-xs opacity-80">성장, 창의, 인자함. 봄의 기운. 갑·을 천간, 인·묘 지지.</div>
            </div>
            <div className="element-fire rounded-xl p-4 text-center">
              <div className="text-2xl font-bold mb-1">火</div>
              <div className="font-semibold text-sm mb-1">화(火) · 불</div>
              <div className="text-xs opacity-80">열정, 예의, 활력. 여름의 기운. 병·정 천간, 사·오 지지.</div>
            </div>
            <div className="element-earth rounded-xl p-4 text-center">
              <div className="text-2xl font-bold mb-1">土</div>
              <div className="font-semibold text-sm mb-1">토(土) · 흙</div>
              <div className="text-xs opacity-80">안정, 신뢰, 포용력. 환절기의 기운. 무·기 천간, 진·술·축·미 지지.</div>
            </div>
            <div className="element-metal rounded-xl p-4 text-center">
              <div className="text-2xl font-bold mb-1">金</div>
              <div className="font-semibold text-sm mb-1">금(金) · 쇠</div>
              <div className="text-xs opacity-80">결단, 의리, 정의. 가을의 기운. 경·신 천간, 신·유 지지.</div>
            </div>
            <div className="element-water rounded-xl p-4 text-center col-span-2 sm:col-span-1">
              <div className="text-2xl font-bold mb-1">水</div>
              <div className="font-semibold text-sm mb-1">수(水) · 물</div>
              <div className="text-xs opacity-80">지혜, 유연함, 탐구심. 겨울의 기운. 임·계 천간, 해·자 지지.</div>
            </div>
          </div>
        </div>

        {/* 전생탐정 분석 방법 */}
        <div className="glass-card rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold mb-4">전생탐정의 분석 방법</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            전생탐정은 입력된 생년월일시를 바탕으로 사주팔자의 일주(日柱)를 핵심 지표로 삼습니다.
            일주(日柱)는 자기 자신을 상징하는 가장 중요한 기둥으로, 동양 명리학에서 본인의 타고난 기질과
            전생의 인연을 읽는 핵심 단서로 활용됩니다.
          </p>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="gradient-gold font-bold text-base shrink-0">①</span>
              <span>
                <strong className="text-foreground">사주 계산:</strong> 양력·음력 모두 지원하며,
                lunar-javascript 라이브러리로 정확한 간지(干支) 변환을 수행합니다.
                입춘(立春) 기준도 자동 적용됩니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="gradient-gold font-bold text-base shrink-0">②</span>
              <span>
                <strong className="text-foreground">일주 도출:</strong> 계산된 사주에서 태어난 날의
                천간·지지 조합(일주)을 추출합니다. 60갑자 중 하나의 일주가 확정됩니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="gradient-gold font-bold text-base shrink-0">③</span>
              <span>
                <strong className="text-foreground">전생 유형 매핑:</strong> 60가지 일주 각각에 대해
                전문 기획된 전생 유형, 성격, 직업 운, 인연 등의 콘텐츠를 제공합니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="gradient-gold font-bold text-base shrink-0">④</span>
              <span>
                <strong className="text-foreground">궁합 분석:</strong> 두 사람의 일주 오행을 비교해
                상생(相生)·상극(相剋) 관계를 분석, 전생 인연 궁합 점수를 도출합니다.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
