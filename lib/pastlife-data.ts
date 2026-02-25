// 사주 전생 데이터 - 60갑자 기반 전생 유형 정의

export type Element = '목' | '화' | '토' | '금' | '수';

export interface PastLifeType {
  ganji: string;          // 간지 (예: 갑자)
  ganjiHanja: string;     // 한자 표기
  occupation: string;     // 전생 직업/신분
  personality: string[];  // 전생 성격 특성
  environment: string;    // 전생 환경/배경
  mission: string;        // 이번 생의 사명
  element: Element;       // 주 오행
  era: string;            // 전생 시대적 배경
  symbol: string;         // 상징 아이콘 이모지
}

// 천간 오행 매핑
export const HEAVENLY_STEM_ELEMENT: Record<string, Element> = {
  갑: '목', 을: '목',
  병: '화', 정: '화',
  무: '토', 기: '토',
  경: '금', 신: '금',
  임: '수', 계: '수',
};

// 지지 오행 매핑
export const EARTHLY_BRANCH_ELEMENT: Record<string, Element> = {
  자: '수', 축: '토', 인: '목', 묘: '목',
  진: '토', 사: '화', 오: '화', 미: '토',
  신: '금', 유: '금', 술: '토', 해: '수',
};

// 오행 색상 클래스 매핑
export const ELEMENT_STYLES: Record<Element, { bg: string; text: string; border: string; label: string }> = {
  목: { bg: 'element-wood', text: 'text-green-700 dark:text-green-400', border: 'border-green-500/30', label: '木 목' },
  화: { bg: 'element-fire', text: 'text-orange-700 dark:text-orange-400', border: 'border-orange-500/30', label: '火 화' },
  토: { bg: 'element-earth', text: 'text-yellow-700 dark:text-yellow-400', border: 'border-yellow-500/30', label: '土 토' },
  금: { bg: 'element-metal', text: 'text-purple-700 dark:text-purple-400', border: 'border-purple-500/30', label: '金 금' },
  수: { bg: 'element-water', text: 'text-blue-700 dark:text-blue-400', border: 'border-blue-500/30', label: '水 수' },
};

// 60갑자 전생 유형 데이터
export const PAST_LIFE_DATA: PastLifeType[] = [
  {
    ganji: '갑자', ganjiHanja: '甲子', occupation: '선비 학자',
    personality: ['탐구적', '정직함', '고집스러움', '지혜로움'],
    environment: '조선 시대 서원, 방대한 장서와 함께한 삶',
    mission: '지식을 나누고 다음 세대를 이끄는 스승이 되세요',
    element: '목', era: '조선 중기', symbol: '📚',
  },
  {
    ganji: '을축', ganjiHanja: '乙丑', occupation: '약초 의원',
    personality: ['섬세함', '인내심', '봉사 정신', '꼼꼼함'],
    environment: '산골 마을 약방, 자연과 함께한 치유의 나날',
    mission: '주변 사람들의 아픔을 헤아리고 치유하는 역할을 맡으세요',
    element: '목', era: '조선 초기', symbol: '🌿',
  },
  {
    ganji: '병인', ganjiHanja: '丙寅', occupation: '용맹한 장군',
    personality: ['리더십', '과감함', '정의감', '열정적'],
    environment: '전장과 군영, 부하들을 이끌던 삶',
    mission: '정의를 위해 싸우되, 지혜로운 방식을 택하세요',
    element: '화', era: '고려 시대', symbol: '⚔️',
  },
  {
    ganji: '정묘', ganjiHanja: '丁卯', occupation: '궁중 화원',
    personality: ['예술적 감각', '섬세함', '완벽주의', '낭만적'],
    environment: '왕실 화원, 아름다운 그림을 그리며 보낸 삶',
    mission: '아름다움을 창조하고 감동을 전하는 예술가가 되세요',
    element: '화', era: '조선 후기', symbol: '🎨',
  },
  {
    ganji: '무진', ganjiHanja: '戊辰', occupation: '왕실 점술사',
    personality: ['직관력', '신비로움', '통찰력', '사려깊음'],
    environment: '궁궐 내 점성관, 별과 천기를 읽던 삶',
    mission: '자신의 직관을 믿고 타인에게 방향을 제시하세요',
    element: '토', era: '삼국 시대', symbol: '🔮',
  },
  {
    ganji: '기사', ganjiHanja: '己巳', occupation: '무역 상인',
    personality: ['사교적', '영리함', '적응력', '현실적'],
    environment: '실크로드와 해상 무역로, 다양한 문화를 경험한 삶',
    mission: '사람과 사람을 연결하고 교류를 촉진하세요',
    element: '토', era: '고려 시대', symbol: '🏺',
  },
  {
    ganji: '경오', ganjiHanja: '庚午', occupation: '철장 대장장이',
    personality: ['강인함', '집중력', '장인 정신', '독립적'],
    environment: '뜨거운 용광로 앞, 금속을 다루던 장인의 삶',
    mission: '끝까지 해내는 집중력으로 최고의 작품을 만드세요',
    element: '금', era: '조선 초기', symbol: '🔨',
  },
  {
    ganji: '신미', ganjiHanja: '辛未', occupation: '왕실 악사',
    personality: ['감수성', '조화로움', '온화함', '예술적'],
    environment: '왕실 연회, 음악으로 마음을 달래던 삶',
    mission: '화합과 조화를 추구하며 주변을 밝히세요',
    element: '금', era: '조선 중기', symbol: '🎵',
  },
  {
    ganji: '임신', ganjiHanja: '壬申', occupation: '바다 탐험가',
    personality: ['모험심', '자유로움', '호기심', '용감함'],
    environment: '광활한 바다, 새로운 땅을 발견하며 살았던 삶',
    mission: '두려움 없이 새로운 길을 개척하는 선구자가 되세요',
    element: '수', era: '조선 중기', symbol: '⚓',
  },
  {
    ganji: '계유', ganjiHanja: '癸酉', occupation: '신비로운 무당',
    personality: ['영적 감수성', '공감 능력', '신비로움', '직관력'],
    environment: '산 속 신당, 신과 인간을 이어주던 삶',
    mission: '보이지 않는 것을 보는 능력으로 타인을 인도하세요',
    element: '수', era: '삼국 시대', symbol: '🌙',
  },
  {
    ganji: '갑술', ganjiHanja: '甲戌', occupation: '절의 주지 스님',
    personality: ['명상적', '지혜로움', '자비로움', '초연함'],
    environment: '깊은 산 사찰, 깨달음을 구하던 수행의 삶',
    mission: '마음의 평화를 찾고 타인에게 자비를 베푸세요',
    element: '목', era: '통일신라', symbol: '🏯',
  },
  {
    ganji: '을해', ganjiHanja: '乙亥', occupation: '왕실 시녀/내관',
    personality: ['충직함', '세심함', '눈치 빠름', '헌신적'],
    environment: '궁궐 내전, 왕실 사람들을 가까이서 모시던 삶',
    mission: '자신을 위한 삶을 살되, 진정한 자아를 찾으세요',
    element: '목', era: '조선 후기', symbol: '👘',
  },
  {
    ganji: '병자', ganjiHanja: '丙子', occupation: '유랑 시인',
    personality: ['낭만적', '자유로움', '감수성', '표현력'],
    environment: '전국을 떠돌며 시를 짓고 노래하던 풍류 인생',
    mission: '감정을 솔직하게 표현하고 예술로 세상과 소통하세요',
    element: '화', era: '조선 후기', symbol: '✍️',
  },
  {
    ganji: '정축', ganjiHanja: '丁丑', occupation: '조선 실학자',
    personality: ['개혁적', '분석적', '실용적', '탐구적'],
    environment: '도서관과 현장 사이, 개혁을 꿈꾸던 지식인의 삶',
    mission: '현실에 뿌리를 둔 변화를 이끌어 세상을 개선하세요',
    element: '화', era: '조선 후기', symbol: '🌟',
  },
  {
    ganji: '무인', ganjiHanja: '戊寅', occupation: '호랑이 사냥꾼',
    personality: ['용감함', '신중함', '단호함', '야성적'],
    environment: '깊은 산림, 맹수와 겨루며 살아온 거친 삶',
    mission: '두려움을 직시하고 진정한 용기의 의미를 배우세요',
    element: '토', era: '조선 초기', symbol: '🐯',
  },
  {
    ganji: '기묘', ganjiHanja: '己卯', occupation: '왕실 요리사',
    personality: ['창의성', '섬세함', '친화력', '풍요로움'],
    environment: '왕실 수라간, 최고의 음식으로 왕을 모신 삶',
    mission: '나누는 기쁨을 알고 풍요를 주변과 함께 누리세요',
    element: '토', era: '조선 중기', symbol: '🍜',
  },
  {
    ganji: '경진', ganjiHanja: '庚辰', occupation: '금속 공예 장인',
    personality: ['완벽주의', '인내심', '미적 감각', '집중력'],
    environment: '왕실 공방, 정교한 금은 공예품을 만들던 삶',
    mission: '섬세함을 발휘해 세상에 하나뿐인 작품을 남기세요',
    element: '금', era: '고려 시대', symbol: '💎',
  },
  {
    ganji: '신사', ganjiHanja: '辛巳', occupation: '외교 사신',
    personality: ['외교적', '유연함', '언변', '지략'],
    environment: '국경을 넘나들며 협상하던 국제적인 삶',
    mission: '다름을 인정하고 소통과 화합의 다리를 놓으세요',
    element: '금', era: '고려 시대', symbol: '🤝',
  },
  {
    ganji: '임오', ganjiHanja: '壬午', occupation: '역마 파발꾼',
    personality: ['신속함', '책임감', '강건함', '의리'],
    environment: '전국 도로를 질주하며 소식을 전달하던 삶',
    mission: '정확하고 신속하게 소통하며 연결 고리가 되세요',
    element: '수', era: '조선 중기', symbol: '🐎',
  },
  {
    ganji: '계미', ganjiHanja: '癸未', occupation: '민간 의술사',
    personality: ['따뜻함', '희생정신', '관찰력', '인자함'],
    environment: '가난한 마을을 돌아다니며 병자를 치료한 삶',
    mission: '자신의 재능을 어려운 이들을 위해 사용하세요',
    element: '수', era: '조선 후기', symbol: '💊',
  },
  {
    ganji: '갑신', ganjiHanja: '甲申', occupation: '밀림 원주민 지도자',
    personality: ['카리스마', '자연친화', '보호본능', '지혜로움'],
    environment: '울창한 자연 속, 부족을 이끌던 족장의 삶',
    mission: '공동체를 위한 지도자 역할을 두려움 없이 맡으세요',
    element: '목', era: '고대', symbol: '🌳',
  },
  {
    ganji: '을유', ganjiHanja: '乙酉', occupation: '도자기 장인',
    personality: ['예술성', '인내력', '섬세함', '전통 존중'],
    environment: '가마터 옆, 흙을 빚어 아름다운 도자기를 만들던 삶',
    mission: '하나의 일에 깊이 몰입해 장인의 경지에 도달하세요',
    element: '목', era: '고려 시대', symbol: '🏺',
  },
  {
    ganji: '병술', ganjiHanja: '丙戌', occupation: '봉수대 수문장',
    personality: ['충성심', '경계심', '책임감', '과묵함'],
    environment: '높은 봉화대, 홀로 나라를 지키던 고독한 삶',
    mission: '묵묵히 자리를 지키는 것이 얼마나 위대한지 알게 하세요',
    element: '화', era: '조선 초기', symbol: '🔥',
  },
  {
    ganji: '정해', ganjiHanja: '丁亥', occupation: '궁녀 출신 화가',
    personality: ['감수성', '억압된 열정', '재능', '고독함'],
    environment: '궁궐 담장 안, 붓을 통해 세상과 교감한 삶',
    mission: '억눌린 감정을 표현하고 진정한 자유를 찾으세요',
    element: '화', era: '조선 후기', symbol: '🖌️',
  },
  {
    ganji: '무자', ganjiHanja: '戊子', occupation: '왕실 천문학자',
    personality: ['분석적', '집중력', '학구열', '냉철함'],
    environment: '관천대(觀天臺), 밤마다 별을 관측하던 삶',
    mission: '큰 그림을 보는 시야로 세상의 흐름을 읽으세요',
    element: '토', era: '조선 중기', symbol: '⭐',
  },
  {
    ganji: '기축', ganjiHanja: '己丑', occupation: '농부 마을 어른',
    personality: ['성실함', '인내심', '공동체 의식', '겸손함'],
    environment: '비옥한 농촌, 땅을 일구며 이웃을 살뜰히 챙긴 삶',
    mission: '작은 것에 감사하고 주변의 성장을 돕는 조력자가 되세요',
    element: '토', era: '조선 초기', symbol: '🌾',
  },
  {
    ganji: '경인', ganjiHanja: '庚寅', occupation: '전쟁 무기 장인',
    personality: ['집념', '강인함', '현실적', '전략적'],
    environment: '병기 공방, 전쟁의 도구를 만들며 평화를 갈망한 삶',
    mission: '자신의 힘을 파괴가 아닌 창조와 방어에 사용하세요',
    element: '금', era: '고려 시대', symbol: '🛡️',
  },
  {
    ganji: '신묘', ganjiHanja: '辛卯', occupation: '궁중 문서 기록관',
    personality: ['정확성', '성실함', '관찰력', '기억력'],
    environment: '춘추관, 역사를 기록하며 후대를 위해 산 삶',
    mission: '진실을 기록하고 역사의 증인 역할을 다하세요',
    element: '금', era: '조선 중기', symbol: '📜',
  },
  {
    ganji: '임진', ganjiHanja: '壬辰', occupation: '임진왜란 의병장',
    personality: ['애국심', '카리스마', '희생정신', '불굴의 의지'],
    environment: '전란의 시대, 백성을 지키기 위해 일어선 삶',
    mission: '불의에 맞서는 용기와 함께하는 연대의 힘을 배우세요',
    element: '수', era: '조선 중기', symbol: '🗡️',
  },
  {
    ganji: '계사', ganjiHanja: '癸巳', occupation: '신탁 전달자',
    personality: ['예언적', '신비로움', '카리스마', '고독함'],
    environment: '산 속 신전, 신의 뜻을 인간에게 전달하던 삶',
    mission: '자신의 직관과 영적 감각을 신뢰하고 표현하세요',
    element: '수', era: '고대', symbol: '🐍',
  },
  {
    ganji: '갑오', ganjiHanja: '甲午', occupation: '기병대 장수',
    personality: ['활동적', '자유분방', '강한 의지', '독립적'],
    environment: '광야와 전장, 말을 달리며 자유를 갈망한 삶',
    mission: '자유를 추구하되 책임의 무게를 함께 지는 법을 배우세요',
    element: '목', era: '고려 시대', symbol: '🏇',
  },
  {
    ganji: '을미', ganjiHanja: '乙未', occupation: '한의학 침술사',
    personality: ['치유 능력', '집중력', '인내', '관찰력'],
    environment: '한의원, 침 하나로 수많은 생명을 고친 의술의 삶',
    mission: '세밀하고 정확한 분석력으로 핵심 문제를 해결하세요',
    element: '목', era: '조선 후기', symbol: '🩺',
  },
  {
    ganji: '병신', ganjiHanja: '丙申', occupation: '외래 문물 전파자',
    personality: ['개방적', '호기심', '적응력', '언어 능력'],
    environment: '이국 문물이 들어오는 항구, 문화 교류의 중심에 선 삶',
    mission: '새로운 것을 두려워 말고 변화의 선두에 서세요',
    element: '화', era: '조선 후기', symbol: '🌏',
  },
  {
    ganji: '정유', ganjiHanja: '丁酉', occupation: '왕실 식의(食醫)',
    personality: ['세심함', '학구적', '청결함', '예민함'],
    environment: '수라간과 의약방, 왕의 건강을 책임진 삶',
    mission: '몸과 마음의 균형을 중시하며 건강한 삶을 영위하세요',
    element: '화', era: '조선 중기', symbol: '🍵',
  },
  {
    ganji: '무술', ganjiHanja: '戊戌', occupation: '국경 수비 병사',
    personality: ['충직함', '강인함', '경계심', '단순함'],
    environment: '차가운 변방의 국경, 나라를 위해 홀로 선 삶',
    mission: '자신을 먼저 돌보며, 내면의 경계도 지키는 법을 배우세요',
    element: '토', era: '조선 초기', symbol: '🏔️',
  },
  {
    ganji: '기해', ganjiHanja: '己亥', occupation: '뱃사공 뱃길 안내자',
    personality: ['여유로움', '지혜로움', '안정감', '친절함'],
    environment: '강과 바다, 사람들을 안전하게 건네주던 삶',
    mission: '다른 이들이 목적지에 닿도록 안내하는 조력자가 되세요',
    element: '토', era: '조선 중기', symbol: '⛵',
  },
  {
    ganji: '경자', ganjiHanja: '庚子', occupation: '의금부 포도대장',
    personality: ['정의감', '강직함', '추진력', '카리스마'],
    environment: '한성 포도청, 법과 정의를 집행하던 삶',
    mission: '정의는 때로 유연함과 함께할 때 더 빛남을 배우세요',
    element: '금', era: '조선 중기', symbol: '⚖️',
  },
  {
    ganji: '신축', ganjiHanja: '辛丑', occupation: '수공예 비단 장인',
    personality: ['인내심', '섬세함', '전통 존중', '차분함'],
    environment: '비단 직조 공방, 한 올 한 올 정성 들여 천을 짠 삶',
    mission: '서두르지 말고 한 가지를 깊이 파고드는 장인이 되세요',
    element: '금', era: '고려 시대', symbol: '🧵',
  },
  {
    ganji: '임인', ganjiHanja: '壬寅', occupation: '산신령의 제자',
    personality: ['자연 친화', '영적 감수성', '담대함', '야생적'],
    environment: '깊은 산속, 자연의 비밀을 배우며 수행한 삶',
    mission: '자연과의 조화를 통해 내면의 야성을 다듬으세요',
    element: '수', era: '고대', symbol: '🐻',
  },
  {
    ganji: '계묘', ganjiHanja: '癸卯', occupation: '민간 전설의 방랑 선비',
    personality: ['자유로움', '통찰력', '유머', '무욕'],
    environment: '어디도 정착하지 않은 채, 지혜를 나누며 떠돈 삶',
    mission: '집착을 내려놓고 흐르는 물처럼 유연하게 살아가세요',
    element: '수', era: '조선 후기', symbol: '🌊',
  },
  {
    ganji: '갑진', ganjiHanja: '甲辰', occupation: '용의 후예 왕족',
    personality: ['고귀함', '리더십', '자존심', '책임감'],
    environment: '왕궁, 태생적 권위와 책임을 짊어지고 살았던 삶',
    mission: '진정한 리더는 섬기는 마음에서 나온다는 것을 배우세요',
    element: '목', era: '삼국 시대', symbol: '🐉',
  },
  {
    ganji: '을사', ganjiHanja: '乙巳', occupation: '비밀 정보 수집가',
    personality: ['민첩함', '영리함', '관찰력', '적응력'],
    environment: '어둠 속에서 정보를 수집하던 그림자 같은 삶',
    mission: '투명하게 행동하고 숨김없이 자신을 드러내는 용기를 키우세요',
    element: '목', era: '조선 중기', symbol: '🐍',
  },
  {
    ganji: '병오', ganjiHanja: '丙午', occupation: '전통 무예 사범',
    personality: ['열정적', '규율적', '강인함', '모범적'],
    environment: '무예 도장, 수백 명의 제자를 키워낸 무인의 삶',
    mission: '자기 수련을 통해 얻은 것을 아낌없이 후대에 전수하세요',
    element: '화', era: '조선 중기', symbol: '🥋',
  },
  {
    ganji: '정미', ganjiHanja: '丁未', occupation: '궁중 무희',
    personality: ['우아함', '표현력', '강한 내면', '예술성'],
    environment: '화려한 궁중 연회, 몸으로 이야기를 전하던 삶',
    mission: '아름다운 표현으로 사람들의 마음을 움직이세요',
    element: '화', era: '조선 후기', symbol: '💃',
  },
  {
    ganji: '무신', ganjiHanja: '戊申', occupation: '토목 건축 설계자',
    personality: ['실용적', '계획적', '창의력', '결단력'],
    environment: '거대한 건축 현장, 도시를 설계하고 건설한 삶',
    mission: '큰 비전을 세우고 단계적으로 현실화하는 능력을 발휘하세요',
    element: '토', era: '고려 시대', symbol: '🏗️',
  },
  {
    ganji: '기유', ganjiHanja: '己酉', occupation: '가을 수확 농부',
    personality: ['근면함', '감사함', '안정 추구', '현실적'],
    environment: '황금빛 들판, 가족과 함께 풍요를 나누던 삶',
    mission: '현재에 감사하며 작은 것의 소중함을 발견하세요',
    element: '토', era: '조선 초기', symbol: '🌻',
  },
  {
    ganji: '경술', ganjiHanja: '庚戌', occupation: '야생 동물 조련사',
    personality: ['인내심', '직관력', '강한 의지', '소통 능력'],
    environment: '야생과 인간 사이, 동물과 교감하며 살았던 삶',
    mission: '다름과 야성을 이해하고 포용하는 넓은 마음을 키우세요',
    element: '금', era: '고대', symbol: '🦅',
  },
  {
    ganji: '신해', ganjiHanja: '辛亥', occupation: '항해 지도 제작자',
    personality: ['탐구심', '정확성', '독창성', '선구자적'],
    environment: '선박 위, 미지의 바다를 탐험하며 지도를 그린 삶',
    mission: '아무도 가지 않은 길을 개척하는 용기를 발휘하세요',
    element: '금', era: '조선 후기', symbol: '🗺️',
  },
  {
    ganji: '임자', ganjiHanja: '壬子', occupation: '깊은 바다 잠수부',
    personality: ['고독 선호', '강인함', '비밀스러움', '깊이'],
    environment: '바다 속, 인간이 닿지 못하는 깊이를 탐색한 삶',
    mission: '자신의 내면 깊숙이 파고들어 진정한 자아를 발견하세요',
    element: '수', era: '고대', symbol: '🌊',
  },
  {
    ganji: '계축', ganjiHanja: '癸丑', occupation: '겨울 산 수도승',
    personality: ['금욕적', '인내심', '깊은 사고', '내면 집중'],
    environment: '눈 덮인 산사, 극한의 환경에서 정신을 수련한 삶',
    mission: '물질보다 정신적 풍요를 추구하며 내면의 힘을 키우세요',
    element: '수', era: '통일신라', symbol: '❄️',
  },
  {
    ganji: '갑인', ganjiHanja: '甲寅', occupation: '호랑이 부족 수호자',
    personality: ['보호 본능', '용맹함', '신뢰할 수 있음', '의협심'],
    environment: '부족 마을, 모든 위협으로부터 약자를 지키던 삶',
    mission: '강한 자가 약한 자를 지키는 진정한 영웅이 되세요',
    element: '목', era: '고대', symbol: '🐯',
  },
  {
    ganji: '을묘', ganjiHanja: '乙卯', occupation: '봄의 약초 수집가',
    personality: ['온화함', '치유력', '자연 사랑', '신중함'],
    environment: '산과 들, 생명의 기운을 담은 약초를 채집하던 삶',
    mission: '자연의 순환에서 배우고 치유의 에너지를 나누세요',
    element: '목', era: '조선 초기', symbol: '🌱',
  },
  {
    ganji: '병진', ganjiHanja: '丙辰', occupation: '화룡(火龍)의 기사',
    personality: ['열정', '혁신적', '카리스마', '변화를 이끔'],
    environment: '신화의 시대, 불을 다스리는 능력으로 세상을 이끈 삶',
    mission: '변화와 혁신을 두려워 말고 새 시대를 여는 불꽃이 되세요',
    element: '화', era: '신화 시대', symbol: '🐲',
  },
  {
    ganji: '정사', ganjiHanja: '丁巳', occupation: '왕실 예언 점술가',
    personality: ['통찰력', '냉철함', '영향력', '신중함'],
    environment: '조용한 점술방, 왕의 운명까지 좌우하던 삶',
    mission: '직관을 갈고닦아 중요한 순간에 올바른 판단을 내리세요',
    element: '화', era: '삼국 시대', symbol: '🔮',
  },
  {
    ganji: '무오', ganjiHanja: '戊午', occupation: '황야의 방랑 약장수',
    personality: ['자유분방', '언변', '적응력', '낙천적'],
    environment: '전국을 떠돌며 민심을 얻고 약을 파는 삶',
    mission: '언어의 힘을 선하게 사용하여 사람들에게 희망을 주세요',
    element: '토', era: '조선 후기', symbol: '💬',
  },
  {
    ganji: '기미', ganjiHanja: '己未', occupation: '마을 우물 관리인',
    personality: ['봉사 정신', '안정감', '꾸준함', '공공 의식'],
    environment: '마을 중심부, 모든 이의 생명줄인 우물을 지킨 삶',
    mission: '보이지 않는 곳에서 사람들을 돕는 묵묵한 기여자가 되세요',
    element: '토', era: '조선 중기', symbol: '💧',
  },
  {
    ganji: '경신', ganjiHanja: '庚申', occupation: '전략 군사 참모',
    personality: ['냉철함', '전략적 사고', '분석력', '결단력'],
    environment: '전쟁 막사, 뛰어난 두뇌로 전략을 짜던 삶',
    mission: '냉정한 분석력을 현명한 판단에 결합하는 리더가 되세요',
    element: '금', era: '고려 시대', symbol: '♟️',
  },
  {
    ganji: '신유', ganjiHanja: '辛酉', occupation: '왕실 보석 감정사',
    personality: ['심미안', '예민함', '완벽주의', '독립성'],
    environment: '보물창고, 진귀한 보석을 감별하던 안목 높은 삶',
    mission: '진짜 가치와 가짜 가치를 구별하는 혜안을 발휘하세요',
    element: '금', era: '조선 중기', symbol: '💍',
  },
  {
    ganji: '임술', ganjiHanja: '壬戌', occupation: '바다 항구 수문장',
    personality: ['강인함', '책임감', '신뢰성', '보수적'],
    environment: '항구 관문, 들어오고 나가는 모든 것을 통제한 삶',
    mission: '경계를 설정하되 흐름을 막지 말고 조율하는 법을 배우세요',
    element: '수', era: '조선 중기', symbol: '⚓',
  },
  {
    ganji: '계해', ganjiHanja: '癸亥', occupation: '겨울 바다 어부',
    personality: ['끈기', '자연 친화', '소박함', '깊은 인내'],
    environment: '거친 바다, 파도와 싸우며 생계를 이어온 삶',
    mission: '삶의 풍랑에 흔들리지 않는 내면의 닻을 내리세요',
    element: '수', era: '조선 후기', symbol: '🎣',
  },
];

// ganji 문자열로 데이터 빠르게 검색
export const PAST_LIFE_MAP: Map<string, PastLifeType> = new Map(
  PAST_LIFE_DATA.map((item) => [item.ganji, item])
);
