// Wine Column Data - 32 articles for RAWISM The Black Wine Guide
// Each column has full Korean content + SEO metadata

export interface WineColumn {
  id: number
  slug: string
  category: string
  categorySlug: string
  title: string
  subtitle: string
  description: string // SEO meta description
  keywords: string[]
  date: string // ISO date
  readTime: number // minutes
  content: string // HTML content
  faq?: { question: string; answer: string }[]
  relatedSlugs: string[]
}

export const categories = [
  { slug: 'champagne-basics', name: '샴페인 기초', nameEn: 'Champagne Basics', icon: '🥂', count: 7 },
  { slug: 'wine-101', name: '와인 입문', nameEn: 'Wine 101', icon: '🍷', count: 6 },
  { slug: 'pairing-guide', name: '페어링 가이드', nameEn: 'Pairing Guide', icon: '🥩', count: 6 },
  { slug: 'premium-selection', name: '프리미엄 와인', nameEn: 'Premium Selection', icon: '🏆', count: 5 },
  { slug: 'dining-culture', name: '다이닝 문화', nameEn: 'Dining Culture', icon: '🍽️', count: 4 },
  { slug: 'wine-dictionary', name: '용어 사전', nameEn: 'Wine Dictionary', icon: '📖', count: 4 },
]

export const wineColumns: WineColumn[] = [
  // ============================================
  // CATEGORY 1: 샴페인 기초 (Champagne Basics)
  // ============================================
  {
    id: 1,
    slug: 'champagne-vs-sparkling',
    category: '샴페인 기초',
    categorySlug: 'champagne-basics',
    title: '샴페인과 스파클링 와인, 뭐가 다를까?',
    subtitle: '같은 듯 다른 두 세계, 알면 더 맛있다',
    description: '샴페인과 스파클링 와인의 차이를 완전 정리. 생산지, 제조법, 맛의 차이부터 프로세코, 카바, 크레망까지. RAWISM 소믈리에가 쉽게 설명합니다.',
    keywords: ['샴페인 스파클링 차이', '샴페인이란', '프로세코 샴페인 차이', '스파클링 와인 종류', '카바 크레망'],
    date: '2026-03-01',
    readTime: 8,
    content: `
      <p>"샴페인이랑 스파클링이랑 같은 거 아니야?" — 아마 와인에 관심을 갖기 시작하면 가장 먼저 드는 의문일 겁니다. 결론부터 말하면, <strong>모든 샴페인은 스파클링 와인이지만, 모든 스파클링 와인이 샴페인은 아닙니다.</strong></p>
      
      <h3>샴페인의 정의: 왜 '샴페인'이라 부를까?</h3>
      <p>샴페인(Champagne)은 프랑스 북동부 <strong>샹파뉴(Champagne) 지방</strong>에서 만든 스파클링 와인만을 가리키는 고유명사입니다. 마치 '스카치위스키'가 스코틀랜드산 위스키만을 지칭하는 것과 같은 이치죠.</p>
      <p>1891년 마드리드 조약 이후, EU 법률로 보호받는 <strong>원산지 명칭(AOC)</strong>이기도 합니다. 프랑스 샹파뉴 지방 이외 지역에서 만든 기포 와인은 아무리 같은 방식으로 만들어도 '샴페인'이라 부를 수 없습니다.</p>
      
      <h3>스파클링 와인의 세계: 나라마다 다른 이름</h3>
      <p>스파클링 와인은 <strong>기포(탄산)가 있는 와인의 총칭</strong>입니다. 전 세계 곳곳에서 각자의 방식으로 만들고 있죠.</p>
      <ul>
        <li><strong>프랑스 샹파뉴</strong> → 샴페인(Champagne): 메토드 트라디시오넬(전통 방식)</li>
        <li><strong>프랑스 그 외 지역</strong> → 크레망(Crémant): 알자스, 루아르, 부르고뉴 등</li>
        <li><strong>이탈리아</strong> → 프로세코(Prosecco): 샤르마 방식(탱크 발효)</li>
        <li><strong>스페인</strong> → 카바(Cava): 전통 방식, 가성비 최고</li>
        <li><strong>독일</strong> → 젝트(Sekt): 독일식 스파클링</li>
        <li><strong>남아프리카</strong> → MCC(Méthode Cap Classique): 전통 방식</li>
      </ul>
      
      <h3>제조법의 차이가 맛을 결정한다</h3>
      <p>스파클링 와인의 맛을 결정하는 가장 중요한 요소는 <strong>2차 발효 방식</strong>입니다.</p>
      <p><strong>메토드 트라디시오넬(전통 방식)</strong>은 병 안에서 2차 발효를 진행합니다. 효모와 함께 최소 15개월(빈티지 샴페인은 36개월) 이상 숙성하면서, 빵 껍질·토스트·브리오슈 같은 복합적인 풍미가 생깁니다. 샴페인이 비싼 이유이기도 하죠.</p>
      <p><strong>샤르마 방식(탱크 발효)</strong>은 대형 스테인리스 탱크에서 2차 발효를 합니다. 신선한 과일 향과 꽃 향이 살아있는, 더 가볍고 프레시한 스타일이 만들어집니다. 프로세코가 대표적입니다.</p>
      
      <h3>포도 품종의 차이</h3>
      <p>샴페인은 주로 세 가지 포도 품종을 사용합니다:</p>
      <ul>
        <li><strong>샤르도네(Chardonnay)</strong> — 우아함과 미네랄. 100%면 '블랑 드 블랑'</li>
        <li><strong>피노 누아(Pinot Noir)</strong> — 구조감과 힘. 100%면 '블랑 드 누아'</li>
        <li><strong>피노 뫼니에(Pinot Meunier)</strong> — 과일미와 부드러움</li>
      </ul>
      <p>반면 프로세코는 <strong>글레라(Glera)</strong>, 카바는 <strong>마카베오·파레야다·차렐로</strong> 등 각 지역 고유 품종을 사용합니다.</p>
      
      <h3>RAWISM에서의 경험</h3>
      <p>RAWISM The Black에서는 <strong>트러플 한우 뭉티기와 함께 샴페인과 스파클링 와인을 모두 경험</strong>하실 수 있습니다. 소믈리에가 그날의 기분, 메뉴, 분위기에 맞는 한 잔을 추천해드립니다. 당일 도축 한우의 섬세한 풍미에는 복합적인 샴페인이, 청양 오일 육회의 매콤함에는 프레시한 스파클링이 잘 어울리죠.</p>
      
      <h3>정리: 한눈에 보는 차이</h3>
      <table>
        <tr><th>구분</th><th>샴페인</th><th>프로세코</th><th>카바</th></tr>
        <tr><td>원산지</td><td>프랑스 샹파뉴</td><td>이탈리아 베네토</td><td>스페인 카탈루냐</td></tr>
        <tr><td>제조법</td><td>전통 방식(병 내 발효)</td><td>샤르마(탱크 발효)</td><td>전통 방식</td></tr>
        <tr><td>주요 품종</td><td>샤르도네, 피노 누아</td><td>글레라</td><td>마카베오, 파레야다</td></tr>
        <tr><td>풍미</td><td>토스트, 견과류, 복합적</td><td>사과, 배, 프레시</td><td>레몬, 아몬드</td></tr>
        <tr><td>가격대</td><td>₩50,000~수백만원</td><td>₩15,000~₩50,000</td><td>₩10,000~₩50,000</td></tr>
      </table>
    `,
    faq: [
      { question: '샴페인과 스파클링 와인의 가장 큰 차이는?', answer: '샴페인은 프랑스 샹파뉴 지방에서 전통 방식(메토드 트라디시오넬)으로 만든 스파클링 와인만을 말합니다. 생산지와 제조법이 법적으로 규정되어 있습니다.' },
      { question: '프로세코가 샴페인보다 맛없나요?', answer: '맛의 우열이 아니라 스타일의 차이입니다. 프로세코는 가볍고 과일향이 풍부한 프레시한 스타일, 샴페인은 복합적이고 깊은 풍미가 특징입니다.' },
      { question: 'RAWISM에서 스파클링 와인도 마실 수 있나요?', answer: '네, RAWISM The Black에서는 소믈리에가 큐레이팅한 다양한 샴페인과 스파클링 와인을 즐기실 수 있습니다.' },
    ],
    relatedSlugs: ['champagne-sweetness-brut', 'champagne-how-its-made', 'first-champagne-recommendations'],
  },
  {
    id: 2,
    slug: 'champagne-sweetness-brut',
    category: '샴페인 기초',
    categorySlug: 'champagne-basics',
    title: '브뤼(Brut)가 뭐야? 샴페인 당도 완전 정리',
    subtitle: '엑스트라 브뤼부터 두(Doux)까지, 당도의 비밀',
    description: '샴페인 브뤼(Brut) 뜻과 당도 분류 완전 정리. 엑스트라 브뤼, 브뤼 나튀르, 드미 섹, 두까지 모든 당도 등급을 RAWISM 소믈리에가 설명합니다.',
    keywords: ['브뤼 뜻', '샴페인 당도', '브뤼 나튀르', '드미 섹', '엑스트라 브뤼'],
    date: '2026-03-03',
    readTime: 7,
    content: `
      <p>와인 바에서 메뉴판을 펼치면 'Brut', 'Extra Dry', 'Demi-Sec' 같은 단어들이 눈에 들어옵니다. 이게 다 <strong>샴페인의 당도(Dosage)</strong>를 나타내는 표현인데요, 알고 마시면 자신의 입맛에 딱 맞는 한 잔을 고를 수 있습니다.</p>
      
      <h3>도자주(Dosage): 달콤함의 비밀</h3>
      <p>샴페인 제조의 마지막 단계에서 '리큐어 데스페디시옹(Liqueur d'Expédition)'이라는 소량의 당분 용액을 첨가합니다. 이 과정을 <strong>도자주(Dosage)</strong>라 하며, 이때 넣는 당분의 양에 따라 샴페인의 당도가 결정됩니다.</p>
      
      <h3>샴페인 당도 등급 (리터당 잔당량 기준)</h3>
      <ul>
        <li><strong>브뤼 나튀르 / 제로 도자주 (Brut Nature / Zero Dosage)</strong> — 0~3g/L: 당분 무첨가. 포도 본연의 산미와 미네랄이 극대화. 최근 트렌드.</li>
        <li><strong>엑스트라 브뤼 (Extra Brut)</strong> — 0~6g/L: 거의 드라이. 섬세한 미각의 소유자를 위한 선택.</li>
        <li><strong>브뤼 (Brut)</strong> — 0~12g/L: 가장 대중적인 스타일. 전체 샴페인의 90% 이상. 드라이하면서도 밸런스가 좋음.</li>
        <li><strong>엑스트라 드라이 (Extra Dry/Extra Sec)</strong> — 12~17g/L: 이름과 달리 브뤼보다 달콤! 의외의 반전.</li>
        <li><strong>섹 (Sec)</strong> — 17~32g/L: 미디엄 스위트. 디저트와 잘 어울림.</li>
        <li><strong>드미 섹 (Demi-Sec)</strong> — 32~50g/L: 확실히 달콤. 과일 타르트, 마카롱과 페어링.</li>
        <li><strong>두 (Doux)</strong> — 50g/L 이상: 매우 달콤. 현재는 거의 생산되지 않는 희귀 스타일.</li>
      </ul>
      
      <h3>"Extra Dry"가 "Brut"보다 달다고?</h3>
      <p>네, 가장 많은 분들이 헷갈려하는 부분입니다. 이름만 보면 Extra Dry가 더 드라이할 것 같지만, 실제로는 <strong>Brut이 더 드라이</strong>합니다. 이 명칭 체계는 19세기에 만들어졌는데, 당시에는 달콤한 샴페인이 주류였기 때문입니다. 시대가 바뀌면서 더 드라이한 스타일이 인기를 얻자, 'Brut'과 'Extra Brut' 등급이 추가된 것이죠.</p>
      
      <h3>최근 트렌드: 제로 도자주의 부상</h3>
      <p>요즘 와인 업계에서 가장 핫한 키워드 중 하나가 <strong>'제로 도자주(Zero Dosage)'</strong>입니다. 당분을 전혀 첨가하지 않고, 포도 자체의 순수한 맛과 떼루아를 그대로 표현하겠다는 철학이죠. RAWISM의 '날것의 철학'과도 일맥상통합니다.</p>
      <p>당분이 없으니 포도의 품질이 절대적으로 중요하고, 양조가의 기술이 그대로 드러납니다. 마치 좋은 한우를 양념 없이 뭉티기로 즐기는 것처럼요.</p>
      
      <h3>RAWISM 소믈리에의 추천</h3>
      <p><strong>트러플 한우 뭉티기</strong>에는 <strong>엑스트라 브뤼~브뤼</strong> 스타일이 최고입니다. 당분이 적어 한우의 섬세한 풍미를 가리지 않으면서, 샴페인의 산미가 육향과 트러플의 진한 향을 깨끗하게 정리해줍니다.</p>
      <p><strong>치즈 셀렉션</strong>에는 <strong>브뤼~엑스트라 드라이</strong>가 좋습니다. 치즈의 크리미한 질감과 약간의 당분이 만나면 입안에서 하모니가 완성되거든요.</p>
    `,
    faq: [
      { question: '브뤼(Brut)는 무슨 뜻인가요?', answer: '프랑스어로 "가공되지 않은, 날것의"라는 뜻입니다. 샴페인에서는 리터당 잔당 12g 이하의 드라이한 스타일을 의미하며, 전체 샴페인의 90% 이상이 이 등급입니다.' },
      { question: 'Extra Dry가 Brut보다 단 건가요?', answer: '맞습니다. 이름과 달리 Extra Dry(12~17g/L)는 Brut(0~12g/L)보다 당도가 높습니다. 19세기 명칭 체계의 역사적 이유 때문입니다.' },
      { question: '한우 뭉티기에는 어떤 당도의 샴페인이 잘 맞나요?', answer: 'Extra Brut~Brut 스타일을 추천합니다. 당분이 적어 한우의 섬세한 풍미를 가리지 않으면서 산미가 입맛을 깔끔하게 정리해줍니다.' },
    ],
    relatedSlugs: ['champagne-vs-sparkling', 'champagne-label-reading', 'mungtige-champagne-pairing'],
  },
  {
    id: 3,
    slug: 'champagne-how-its-made',
    category: '샴페인 기초',
    categorySlug: 'champagne-basics',
    title: '샴페인은 어떻게 만들까? 전통 방식의 비밀',
    subtitle: '포도밭에서 당신의 잔까지, 8단계 여정',
    description: '샴페인 제조 과정 완전 가이드. 메토드 트라디시오넬(전통 방식)의 8단계를 상세히 설명. 수확, 1차 발효, 아상블라주, 2차 발효, 르뮈아주, 데고르주망까지.',
    keywords: ['샴페인 제조 과정', '메토드 트라디시오넬', '아상블라주', '르뮈아주', '데고르주망', '샴페인 만드는 법'],
    date: '2026-03-05',
    readTime: 10,
    content: `
      <p>샴페인 한 잔에는 <strong>최소 15개월, 길게는 10년 이상의 시간</strong>이 담겨 있습니다. '메토드 트라디시오넬(Méthode Traditionnelle)'이라 불리는 전통 방식은 수백 년간 이어져 온 장인 정신의 결정체입니다.</p>
      
      <h3>Step 1. 수확 (Vendange)</h3>
      <p>매년 8월 말~10월 초, 샹파뉴 지방의 포도밭에서 <strong>반드시 손으로</strong> 포도를 수확합니다. 기계 수확은 법으로 금지되어 있어요. 포도알이 상하지 않도록 조심스럽게 따서, 바로 양조장으로 보냅니다.</p>
      
      <h3>Step 2. 압착 (Pressurage)</h3>
      <p>4,000kg의 포도에서 최대 2,550리터의 즙만 추출합니다. 첫 번째 짜낸 즙 <strong>'큐베(Cuvée)'</strong>가 가장 품질이 좋고, 두 번째 즙 '따이유(Taille)'는 보디감을 더합니다. 레드 품종(피노 누아)으로도 화이트 와인을 만들 수 있는 비결이 바로 이 섬세한 압착 기술입니다.</p>
      
      <h3>Step 3. 1차 발효 (Première Fermentation)</h3>
      <p>포도즙을 스테인리스 탱크나 오크통에서 발효시켜 '스틸 와인(거품 없는 와인)'을 만듭니다. 이 단계의 와인은 매우 산도가 높고 단순한 맛입니다. 아직 샴페인의 기포는 없어요.</p>
      
      <h3>Step 4. 아상블라주 (Assemblage) — 블렌딩의 예술</h3>
      <p>셰프 드 카브(Chef de Cave, 양조 책임자)가 <strong>수십~수백 가지 원액을 블렌딩</strong>합니다. 서로 다른 포도밭, 다른 품종, 심지어 다른 빈티지(리저브 와인)까지 섞어서 그 하우스만의 일관된 스타일을 만들어냅니다. 샴페인 하우스의 진정한 실력이 드러나는 순간이죠.</p>
      
      <h3>Step 5. 2차 발효 (Prise de Mousse) — 기포의 탄생</h3>
      <p>블렌딩된 와인에 소량의 당분과 효모를 넣고 <strong>병에 담아 밀봉</strong>합니다. 병 안에서 효모가 당분을 먹고 알코올과 CO₂를 만들어내는데, 이 CO₂가 빠져나가지 못하고 와인에 녹아들면서 그 유명한 <strong>샴페인 기포</strong>가 탄생합니다.</p>
      
      <h3>Step 6. 숙성 (Maturation sur Lies)</h3>
      <p>효모 잔해(리, Lees)와 함께 최소 15개월(NV 기준), 빈티지 샴페인은 36개월 이상 숙성합니다. 이 과정에서 효모가 자가 분해(autolysis)되면서 <strong>브리오슈, 토스트, 비스킷, 아몬드</strong> 같은 복합적인 향이 생깁니다. 프레스티지 큐베는 5~10년 이상 숙성하기도 합니다.</p>
      
      <h3>Step 7. 르뮈아주 (Remuage) — 회전과 기울이기</h3>
      <p>숙성이 끝나면 병 안의 효모 찌꺼기를 병목 쪽으로 모아야 합니다. 병을 매일 조금씩 <strong>돌리고(1/8 회전) 기울여서</strong> 8~10주에 걸쳐 찌꺼기를 병목에 모읍니다. 전통적으로 '뛰르(Pupitre)'라는 A자형 나무틀에 꽂아서 했지만, 요즘은 '지로팔레트(Gyropalette)'라는 기계로 효율화했습니다.</p>
      
      <h3>Step 8. 데고르주망 (Dégorgement) & 도자주 (Dosage)</h3>
      <p>병목을 영하 25도 소금물에 담가 찌꺼기를 <strong>얼린 후 뚜껑을 열어 날려보냅니다</strong>. 이때 약간의 와인이 함께 빠져나가는데, 그 부족분을 '리큐르 데스페디시옹'으로 채워넣습니다. 이것이 도자주이며, 여기서 당도가 결정됩니다. 마지막으로 코르크를 끼우고 철사(뮈즐레)로 고정하면 완성!</p>
      
      <h3>왜 이렇게 비쌀까?</h3>
      <p>손 수확, 수개월의 블렌딩, 최소 1년 반의 숙성, 일일이 돌려가며 찌꺼기를 모으는 과정... 이 모든 것이 <strong>한 병의 샴페인에 담긴 시간과 노력</strong>입니다. RAWISM에서 샴페인을 마실 때 이 여정을 떠올려보세요. 한 잔의 무게가 달라질 겁니다.</p>
    `,
    faq: [
      { question: '샴페인은 왜 손으로만 수확하나요?', answer: '기계 수확은 포도알을 상하게 해 즙이 껍질 색소와 접촉하여 변색될 수 있습니다. 특히 피노 누아 같은 적포도로 화이트 와인을 만들어야 하므로, 온전한 포도알 상태를 유지하기 위해 손 수확이 법적으로 의무입니다.' },
      { question: '아상블라주는 무엇인가요?', answer: '서로 다른 포도밭, 품종, 빈티지의 원액을 블렌딩하는 과정입니다. 양조 책임자가 수십~수백 가지 원액을 섞어 하우스 고유의 일관된 스타일을 만들어냅니다.' },
      { question: '샴페인의 최소 숙성 기간은?', answer: '논빈티지(NV) 샴페인은 최소 15개월, 빈티지 샴페인은 최소 36개월 효모와 함께 숙성해야 합니다.' },
    ],
    relatedSlugs: ['champagne-vs-sparkling', 'champagne-sweetness-brut', 'prestige-cuvee'],
  },
  {
    id: 4,
    slug: 'champagne-label-reading',
    category: '샴페인 기초',
    categorySlug: 'champagne-basics',
    title: '샴페인 라벨 읽는 법 - NM, RM, 빈티지 해독',
    subtitle: '라벨 하나로 샴페인의 모든 것을 읽다',
    description: '샴페인 라벨 읽는 법 완전 가이드. NM, RM, CM의 차이, 빈티지와 논빈티지, 블랑 드 블랑/누아 의미까지. 와인 초보도 쉽게 이해하는 라벨 해독법.',
    keywords: ['샴페인 라벨', 'NM RM 차이', '샴페인 빈티지', '블랑 드 블랑', '샴페인 고르는 법'],
    date: '2026-03-07',
    readTime: 8,
    content: `
      <p>샴페인 라벨에는 그 병에 대한 모든 정보가 담겨 있습니다. 마치 와인의 이력서 같은 것이죠. 핵심 코드 몇 가지만 알면, 와인숍에서도 레스토랑에서도 자신 있게 고를 수 있습니다.</p>
      
      <h3>생산자 유형 코드: NM, RM, CM</h3>
      <p>라벨 하단 작은 글씨로 적힌 <strong>알파벳 두 글자</strong>가 생산자의 정체를 알려줍니다.</p>
      <ul>
        <li><strong>NM (Négociant Manipulant)</strong> — 포도를 사들여 만드는 대형 하우스. 모엣 샹동, 뵈브 클리코, 돔 페리뇽 등. 대규모 생산으로 일관된 품질. 전체 샴페인의 약 70%를 차지.</li>
        <li><strong>RM (Récoltant Manipulant)</strong> — 자기 포도밭에서 직접 재배하고 만드는 <strong>그로워 샴페인</strong>. 소규모 생산, 개성 강함. 와인 매니아들이 열광하는 영역. "이거 RM이야"라고 말하면 통합니다.</li>
        <li><strong>CM (Coopérative de Manipulation)</strong> — 협동조합 샴페인. 여러 농가의 포도를 모아 공동 양조.</li>
        <li><strong>SR, RC, MA, ND</strong> — 기타 유형들. 실전에서는 NM과 RM만 알면 충분합니다.</li>
      </ul>
      
      <h3>빈티지(Vintage) vs 논빈티지(NV)</h3>
      <p><strong>빈티지 샴페인</strong>은 라벨에 연도(예: 2015)가 적혀 있습니다. 특별히 좋은 해에만 만들며, 그 해 포도만 100% 사용. 최소 36개월 숙성 의무.</p>
      <p><strong>논빈티지(NV)</strong>는 연도 표기가 없습니다. 여러 해의 원액을 블렌딩해 하우스의 일관된 스타일을 유지합니다. 전체 샴페인의 대부분이 NV입니다.</p>
      
      <h3>스타일 표기</h3>
      <ul>
        <li><strong>Blanc de Blancs(블랑 드 블랑)</strong> — 화이트 포도(샤르도네)만으로 만든 샴페인. 우아하고 섬세.</li>
        <li><strong>Blanc de Noirs(블랑 드 누아)</strong> — 레드 포도(피노 누아/뫼니에)만으로 만든 화이트 샴페인. 구조감이 탄탄.</li>
        <li><strong>Rosé(로제)</strong> — 핑크빛 샴페인. 블렌딩 방식(적포도주 소량 추가) 또는 세니에 방식(짧은 침용).</li>
        <li><strong>Prestige Cuvée(프레스티지 큐베)</strong> — 하우스 최고급 라인. 돔 페리뇽, 크리스탈, 그랑 다메 등.</li>
      </ul>
      
      <h3>용량 표기</h3>
      <ul>
        <li><strong>Piccolo</strong> — 187.5ml (1잔 분량)</li>
        <li><strong>Half</strong> — 375ml</li>
        <li><strong>Standard</strong> — 750ml (가장 일반적)</li>
        <li><strong>Magnum</strong> — 1.5L (선물·파티용. 숙성이 더 균일하게 진행돼 애호가들이 선호)</li>
        <li><strong>Jéroboam</strong> — 3L, <strong>Methuselah</strong> — 6L... (성경 인물 이름 시리즈)</li>
      </ul>
      
      <h3>실전 라벨 읽기 연습</h3>
      <p>예를 들어 라벨에 이렇게 적혀 있다면:</p>
      <p><em>"Moët & Chandon Grand Vintage 2015 Brut — NM"</em></p>
      <p>→ 모엣 샹동(대형 하우스, NM)이 2015년산 포도만으로(빈티지) 만든 드라이한(Brut) 샴페인이라는 뜻입니다.</p>
      
      <h3>RAWISM 팁</h3>
      <p>RAWISM The Black에서는 소믈리에가 라벨의 의미를 직접 설명해드립니다. 궁금한 것이 있으면 편하게 물어보세요. 와인은 아는 만큼 맛있어지니까요.</p>
    `,
    faq: [
      { question: 'NM과 RM 중 어떤 게 더 좋나요?', answer: '품질의 우열이 아니라 스타일의 차이입니다. NM은 대량 생산으로 일관된 품질, RM(그로워)은 소량 생산으로 떼루아의 개성이 돋보입니다. 최근 RM이 와인 매니아들 사이에서 인기가 높아지고 있습니다.' },
      { question: '빈티지 샴페인은 항상 논빈티지보다 좋은가요?', answer: '반드시 그렇지는 않습니다. 다만 빈티지 샴페인은 특별히 좋은 해에만 생산하고 더 오래 숙성하므로, 복합성과 깊이가 더한 경우가 많습니다.' },
    ],
    relatedSlugs: ['champagne-sweetness-brut', 'grower-champagne', 'blanc-de-blancs-vs-noirs'],
  },
  {
    id: 5,
    slug: 'first-champagne-recommendations',
    category: '샴페인 기초',
    categorySlug: 'champagne-basics',
    title: '처음 마시는 샴페인 추천 5가지',
    subtitle: '입문자를 위한 소믈리에의 엄선 리스트',
    description: '샴페인 입문자를 위한 추천 5가지. 모엣 샹동, 뵈브 클리코부터 가성비 그로워까지. RAWISM 소믈리에가 직접 고른 입문 샴페인 가이드.',
    keywords: ['입문 샴페인 추천', '처음 샴페인', '가성비 샴페인', '샴페인 추천', '모엣 샹동'],
    date: '2026-03-09',
    readTime: 7,
    content: `
      <p>"샴페인 처음인데, 뭐 마시면 좋을까요?" RAWISM에서 가장 많이 받는 질문입니다. 수백 가지 샴페인 중에서 입문자도 편하게, 확실하게 즐길 수 있는 5가지를 골랐습니다.</p>
      
      <h3>1. 모엣 & 샹동 임페리얼 브뤼 (Moët & Chandon Impérial Brut)</h3>
      <p><strong>왜 추천?</strong> 세계에서 가장 많이 팔리는 샴페인. 안정적인 품질과 균형 잡힌 맛으로 '샴페인의 기본기'를 완벽하게 보여줍니다.</p>
      <p><strong>맛 프로필:</strong> 청사과, 시트러스, 토스트. 미디엄 바디. 산미와 과일미의 밸런스가 뛰어남.</p>
      <p><strong>이런 분께:</strong> 샴페인을 아예 처음 마시는 분, '표준'이 뭔지 알고 싶은 분.</p>
      <p><strong>가격대:</strong> ₩60,000~₩80,000 (매장 기준)</p>
      
      <h3>2. 뵈브 클리코 옐로우 라벨 (Veuve Clicquot Yellow Label Brut)</h3>
      <p><strong>왜 추천?</strong> 노란 라벨로 유명한 이 샴페인은 모엣보다 약간 더 힘이 있고 구조감이 좋습니다. 피노 누아 비율이 높아서 풍미가 진합니다.</p>
      <p><strong>맛 프로필:</strong> 배, 비스킷, 약간의 바닐라. 미디엄~풀 바디. 긴 여운.</p>
      <p><strong>이런 분께:</strong> 드라이하면서도 맛이 진한 스타일을 좋아하는 분.</p>
      <p><strong>가격대:</strong> ₩65,000~₩90,000</p>
      
      <h3>3. 페리에 주에 그랑 브뤼 (Perrier-Jouët Grand Brut)</h3>
      <p><strong>왜 추천?</strong> 아르누보 스타일의 아름다운 병 디자인으로 유명하지만, 맛도 정말 좋습니다. 샤르도네 비율이 높아 <strong>섬세하고 우아한 스타일</strong>의 대표주자.</p>
      <p><strong>맛 프로필:</strong> 흰 꽃, 시트러스, 살구. 라이트~미디엄 바디. 청량하고 우아함.</p>
      <p><strong>이런 분께:</strong> 가볍고 우아한 스타일을 좋아하는 분, 특별한 날 사진 찍기 좋은 병을 원하는 분.</p>
      <p><strong>가격대:</strong> ₩55,000~₩75,000</p>
      
      <h3>4. 폴 로제 브뤼 (Pol Roger Brut Réserve)</h3>
      <p><strong>왜 추천?</strong> 윈스턴 처칠이 사랑한 샴페인 하우스. 세 품종이 균형있게 블렌딩되어 클래식한 정통 샴페인 스타일을 보여줍니다.</p>
      <p><strong>맛 프로필:</strong> 레몬, 견과류, 살짝 크리미. 미디엄 바디. 기포가 매우 섬세.</p>
      <p><strong>이런 분께:</strong> 정통 클래식 스타일의 샴페인을 경험하고 싶은 분.</p>
      <p><strong>가격대:</strong> ₩55,000~₩80,000</p>
      
      <h3>5. 뤼이나르 블랑 드 블랑 (Ruinart Blanc de Blancs)</h3>
      <p><strong>왜 추천?</strong> 세계에서 가장 오래된 샴페인 하우스(1729년 설립)가 만드는 블랑 드 블랑. 샤르도네 100%의 진수를 보여줍니다. 가격이 좀 나가지만 그 값을 합니다.</p>
      <p><strong>맛 프로필:</strong> 자몽, 열대과일, 토스트, 미네랄. 미디엄 바디. 긴 여운과 복합성.</p>
      <p><strong>이런 분께:</strong> 한 단계 업그레이드된 경험을 원하는 분, 블랑 드 블랑의 매력을 알고 싶은 분.</p>
      <p><strong>가격대:</strong> ₩90,000~₩130,000</p>
      
      <h3>RAWISM에서 만나보세요</h3>
      <p>위 다섯 가지를 포함해 RAWISM The Black에서는 소믈리에가 큐레이팅한 다양한 샴페인을 잔으로도 즐기실 수 있습니다. 한우 뭉티기와 함께라면, 샴페인의 첫 경험이 최고의 기억이 될 겁니다.</p>
    `,
    faq: [
      { question: '샴페인 입문자에게 가장 추천하는 한 병은?', answer: '모엣 & 샹동 임페리얼 브뤼를 추천합니다. 가장 대중적이면서도 샴페인의 기본기를 완벽하게 보여주는 병입니다.' },
      { question: '가성비 좋은 샴페인은?', answer: '페리에 주에 그랑 브뤼나 폴 로제 브뤼가 가격 대비 품질이 뛰어납니다. 5~8만원대에서 훌륭한 경험을 할 수 있습니다.' },
    ],
    relatedSlugs: ['champagne-vs-sparkling', 'champagne-sweetness-brut', 'grower-champagne'],
  },
  {
    id: 6,
    slug: 'champagne-glass-types',
    category: '샴페인 기초',
    categorySlug: 'champagne-basics',
    title: '샴페인 잔, 플루트 vs 쿠프 vs 튤립',
    subtitle: '잔 하나로 맛이 달라지는 과학',
    description: '샴페인 잔 종류 완벽 가이드. 플루트, 쿠프, 튤립 글라스의 차이점과 최적의 선택법. 잔이 샴페인 맛에 미치는 영향을 과학적으로 설명합니다.',
    keywords: ['샴페인 잔 종류', '플루트 글라스', '쿠프 글라스', '튤립 글라스', '와인잔 고르는 법'],
    date: '2026-03-11',
    readTime: 6,
    content: `
      <p>같은 샴페인도 <strong>어떤 잔에 따르느냐에 따라 맛이 확연히 달라집니다.</strong> 과장이 아닙니다. 잔의 모양이 기포의 크기, 향의 집중도, 와인이 혀에 닿는 위치까지 모두 바꿔놓거든요.</p>
      
      <h3>플루트 글라스 (Flute Glass)</h3>
      <p>길고 좁은 형태. 가장 보편적인 샴페인 잔입니다.</p>
      <p><strong>장점:</strong> 좁은 입구가 기포를 오래 유지시킵니다. 바닥에서 꼭대기로 올라오는 기포의 기둥이 시각적으로 아름답죠. 축배를 들 때 가장 포토제닉한 잔.</p>
      <p><strong>단점:</strong> 향을 맡기 어렵습니다. 입구가 너무 좁아 코를 충분히 넣을 수 없고, 와인의 복합적인 아로마가 발산될 공간이 부족합니다.</p>
      <p><strong>언제 쓸까:</strong> 가벼운 건배, 칵테일 파티, 프로세코 같은 프레시한 스파클링에 적합.</p>
      
      <h3>쿠프 글라스 (Coupe Glass)</h3>
      <p>넓고 얕은 접시 형태. 1920년대 개츠비 파티의 그 잔!</p>
      <p><strong>장점:</strong> 클래식하고 우아한 비주얼. 칵테일에도 많이 사용. 마리 앙투아네트의 가슴을 본떠 만들었다는 로맨틱한 전설(사실은 아닙니다만).</p>
      <p><strong>단점:</strong> 넓은 표면적 때문에 기포가 빨리 빠집니다. 향도 사방으로 흩어져서 와인 테이스팅에는 부적합.</p>
      <p><strong>언제 쓸까:</strong> 분위기 있는 칵테일, 디저트 샴페인, 파티 연출용.</p>
      
      <h3>튤립 글라스 (Tulip Glass) — 전문가의 선택</h3>
      <p>플루트처럼 길지만 중간이 볼록하고 입구가 살짝 좁아지는 형태.</p>
      <p><strong>장점:</strong> <strong>최고의 올라운더.</strong> 볼록한 부분이 향을 모으고, 좁아지는 입구가 향을 집중시킵니다. 기포도 적절히 유지. 와인의 풍미를 가장 잘 전달해줍니다.</p>
      <p><strong>단점:</strong> 특별한 단점 없음. 굳이 꼽자면 플루트만큼의 기포 연출력은 아님.</p>
      <p><strong>언제 쓸까:</strong> 빈티지 샴페인, 프레스티지 큐베, 진지한 테이스팅. <strong>RAWISM에서 사용하는 잔이기도 합니다.</strong></p>
      
      <h3>와인 전용 잔으로 마시는 새로운 트렌드</h3>
      <p>최근에는 일반 화이트 와인 잔이나 심지어 부르고뉴 잔으로 고급 샴페인을 마시는 트렌드도 있습니다. 넓은 잔이 복합적인 아로마를 더 잘 표현한다는 이유죠. 크뤼그(Krug)는 아예 자사 전용 와이드 글라스를 제작했을 정도입니다.</p>
      
      <h3>정리</h3>
      <table>
        <tr><th>잔 종류</th><th>기포 유지</th><th>향 집중</th><th>추천 용도</th></tr>
        <tr><td>플루트</td><td>★★★★★</td><td>★★☆☆☆</td><td>건배, 가벼운 스파클링</td></tr>
        <tr><td>쿠프</td><td>★★☆☆☆</td><td>★★☆☆☆</td><td>파티, 칵테일, 연출용</td></tr>
        <tr><td>튤립</td><td>★★★★☆</td><td>★★★★★</td><td>테이스팅, 고급 샴페인</td></tr>
        <tr><td>와인잔</td><td>★★★☆☆</td><td>★★★★★</td><td>빈티지, 프레스티지 큐베</td></tr>
      </table>
    `,
    faq: [
      { question: '샴페인 잔 중 가장 좋은 것은?', answer: '튤립 글라스를 추천합니다. 기포 유지와 향 집중 모두 뛰어나, 샴페인의 풍미를 가장 잘 전달해주는 올라운더입니다.' },
      { question: 'RAWISM에서는 어떤 잔을 사용하나요?', answer: 'RAWISM The Black에서는 튤립 글라스를 주로 사용합니다. 소믈리에가 큐레이팅한 샴페인의 복합적인 아로마를 최대한 즐기실 수 있도록요.' },
    ],
    relatedSlugs: ['champagne-storage-serving', 'champagne-vs-sparkling', 'first-champagne-recommendations'],
  },
  {
    id: 7,
    slug: 'champagne-storage-serving',
    category: '샴페인 기초',
    categorySlug: 'champagne-basics',
    title: '샴페인 보관법 & 완벽한 서빙 온도',
    subtitle: '한 병을 최상의 상태로 즐기는 비법',
    description: '샴페인 보관법과 최적 서빙 온도 가이드. 냉장 보관 vs 와인셀러, 개봉 전후 보관법, 온도별 맛 변화까지. 소믈리에가 알려주는 실전 팁.',
    keywords: ['샴페인 보관법', '샴페인 서빙 온도', '와인 보관 온도', '샴페인 냉장 보관', '와인 서빙'],
    date: '2026-03-13',
    readTime: 7,
    content: `
      <p>좋은 샴페인을 사왔는데, 보관을 잘못해서 맛이 떨어지면 얼마나 억울할까요. 그리고 완벽한 온도로 서빙하면 같은 병도 두 배는 맛있어집니다. 소믈리에의 실전 보관&서빙 노하우를 공개합니다.</p>
      
      <h3>보관의 기본 원칙</h3>
      <p>샴페인(그리고 모든 와인)의 3대 적은 <strong>빛, 열, 진동</strong>입니다.</p>
      <ul>
        <li><strong>온도:</strong> 10~15°C가 이상적. 일정하게 유지되는 것이 중요합니다.</li>
        <li><strong>습도:</strong> 60~70%. 코르크가 마르지 않도록.</li>
        <li><strong>빛:</strong> 직사광선 절대 금지. 형광등도 피하세요.</li>
        <li><strong>진동:</strong> 냉장고 모터 옆 X. 진동은 숙성을 방해합니다.</li>
        <li><strong>냄새:</strong> 강한 냄새가 나는 곳은 피하세요. 코르크를 통해 냄새가 침투할 수 있습니다.</li>
      </ul>
      
      <h3>세워서? 눕혀서?</h3>
      <p><strong>단기 보관(1~2주 이내):</strong> 세워두어도 괜찮습니다. 병 안의 CO₂ 압력이 코르크 윗면을 적셔주기 때문.</p>
      <p><strong>장기 보관(수개월 이상):</strong> 눕혀서 보관. 와인이 코르크에 닿아 건조해지는 것을 방지합니다.</p>
      
      <h3>냉장고 보관, 괜찮을까?</h3>
      <p>결론부터: <strong>단기는 OK, 장기는 NO.</strong></p>
      <p>가정용 냉장고는 약 2~4°C로, 샴페인 보관 적정 온도(10~15°C)보다 너무 낮습니다. 게다가 모터 진동, 다른 음식 냄새, 열었다 닫았다 하는 온도 변화... 장기 보관에는 최악의 환경입니다. 파티 전날 넣어두는 정도만 OK.</p>
      
      <h3>최적 서빙 온도: 종류별 가이드</h3>
      <ul>
        <li><strong>논빈티지 브뤼:</strong> 7~9°C — 차갑게! 청량한 기포와 프레시한 과일 향 극대화.</li>
        <li><strong>빈티지 샴페인:</strong> 10~12°C — 조금 덜 차갑게. 복합적인 아로마가 피어나게.</li>
        <li><strong>프레스티지 큐베:</strong> 11~13°C — 거의 셀러 온도. 섬세한 뉘앙스를 놓치지 않도록.</li>
        <li><strong>로제 샴페인:</strong> 8~10°C — NV 브뤼와 비슷하게.</li>
        <li><strong>드미 섹:</strong> 6~8°C — 더 차갑게. 당분의 무거움을 산미로 상쇄.</li>
      </ul>
      
      <h3>빠르게 냉각하는 법</h3>
      <p><strong>아이스 버킷이 가장 빠릅니다.</strong> 얼음과 물을 반반 채우고 소금을 한 줌 넣으면 약 20분 만에 서빙 온도 도달. 냉동실에 넣는 건? 까먹으면 폭발할 수 있어 위험합니다(절대 금지!).</p>
      
      <h3>개봉 후 보관</h3>
      <p>샴페인은 개봉 후 <strong>기포가 빠르게 사라집니다.</strong> 전용 샴페인 스토퍼를 사용하면 냉장고에서 1~2일 정도는 기포를 유지할 수 있습니다. 은수저를 병목에 넣으면 기포가 유지된다는 속설은... 과학적으로 효과 없습니다 😄</p>
      
      <h3>RAWISM에서는</h3>
      <p>RAWISM The Black에서는 모든 샴페인을 <strong>전문 와인셀러에서 최적 온도로 관리</strong>하며, 주문 후 빈티지와 스타일에 맞는 정확한 서빙 온도로 제공합니다. 한 잔 한 잔이 완벽한 상태로 나가는 것, 그것이 저희가 추구하는 '날것의 철학'입니다.</p>
    `,
    faq: [
      { question: '샴페인 최적 보관 온도는?', answer: '10~15°C가 이상적입니다. 일정한 온도를 유지하는 것이 가장 중요하며, 빛과 진동을 피해야 합니다.' },
      { question: '샴페인 서빙 온도는 몇 도인가요?', answer: '논빈티지 브뤼는 7~9°C, 빈티지 샴페인은 10~12°C, 프레스티지 큐베는 11~13°C가 최적입니다.' },
      { question: '개봉한 샴페인은 얼마나 보관할 수 있나요?', answer: '전용 스토퍼를 사용하면 냉장고에서 1~2일 정도 기포를 유지할 수 있습니다. 가능한 빨리 마시는 것이 좋습니다.' },
    ],
    relatedSlugs: ['champagne-glass-types', 'first-champagne-recommendations', 'wine-tasting-steps'],
  },

  // ============================================
  // CATEGORY 2: 와인 입문 (Wine 101)
  // ============================================
  {
    id: 8,
    slug: 'red-white-rose-difference',
    category: '와인 입문',
    categorySlug: 'wine-101',
    title: '레드 vs 화이트 vs 로제 — 진짜 차이점',
    subtitle: '색깔만 다른 게 아니다, 만드는 법이 다르다',
    description: '레드 와인, 화이트 와인, 로제 와인의 차이를 완전 정리. 제조법, 맛, 페어링까지 초보자도 이해하기 쉽게. RAWISM 소믈리에 가이드.',
    keywords: ['레드 화이트 로제 차이', '와인 종류', '로제 와인이란', '와인 초보 가이드', '와인 색깔 차이'],
    date: '2026-03-15',
    readTime: 7,
    content: `
      <p>"레드는 고기, 화이트는 생선"이라는 공식은 너무 단순합니다. 세 가지 와인의 진짜 차이를 알면, 페어링의 세계가 훨씬 넓어집니다.</p>
      
      <h3>색깔의 비밀: 껍질이 핵심</h3>
      <p>와인의 색깔을 결정하는 건 <strong>포도 껍질과의 접촉 시간</strong>입니다. 포도즙 자체는 레드 품종이든 화이트 품종이든 거의 투명합니다.</p>
      <ul>
        <li><strong>레드 와인:</strong> 적포도 껍질과 함께 발효 (수일~수주간 침용). 껍질의 안토시아닌 색소 + 탄닌이 추출됨.</li>
        <li><strong>화이트 와인:</strong> 청포도(또는 적포도의 즙만) 껍질 없이 발효. 투명하고 가벼운 스타일.</li>
        <li><strong>로제 와인:</strong> 적포도를 짧은 시간(2~24시간) 껍질과 접촉 후 분리. 핑크빛 + 가벼운 탄닌.</li>
      </ul>
      
      <h3>맛의 차이</h3>
      <p><strong>레드 와인</strong>은 탄닌(떫은맛), 진한 과일향(체리, 자두, 블랙베리), 오크 숙성에서 오는 바닐라·스모키 풍미가 특징. 보디감이 있고 복합적.</p>
      <p><strong>화이트 와인</strong>은 산미(신맛)가 주역. 시트러스, 사과, 열대과일, 미네랄 풍미. 경쾌하고 프레시.</p>
      <p><strong>로제 와인</strong>은 두 세계의 장점. 레드의 과일향 + 화이트의 프레시함. 딸기, 수박, 살구 향.</p>
      
      <h3>온도의 차이</h3>
      <ul>
        <li><strong>레드:</strong> 14~18°C (라이트 바디는 좀 더 시원하게)</li>
        <li><strong>화이트:</strong> 7~12°C</li>
        <li><strong>로제:</strong> 8~12°C</li>
      </ul>
      
      <h3>한우와의 페어링</h3>
      <p>RAWISM에서는 한우 뭉티기에 주로 <strong>샴페인(스파클링)</strong>을 추천하지만, 와인도 훌륭한 짝이 됩니다.</p>
      <ul>
        <li><strong>한우 뭉티기 + 가벼운 레드(피노 누아):</strong> 생고기의 섬세한 맛과 피노의 우아함이 환상적</li>
        <li><strong>치즈 셀렉션 + 화이트(샤르도네):</strong> 버터리한 샤르도네와 크리미한 치즈의 마리아주</li>
        <li><strong>청양 육회 + 로제:</strong> 매콤함과 프레시한 로제의 의외의 궁합</li>
      </ul>
    `,
    faq: [
      { question: '레드, 화이트, 로제 중 초보자는 뭘 먼저 마셔볼까요?', answer: '개인 입맛에 따라 다르지만, 화이트 와인이나 로제가 부담 없이 시작하기 좋습니다. 탄닌의 떫은맛이 없어 편하게 즐길 수 있습니다.' },
      { question: '로제 와인은 레드와 화이트를 섞은 건가요?', answer: '아닙니다. 로제는 적포도를 짧은 시간 껍질과 접촉시켜 만듭니다. 다만 샴페인 로제는 예외적으로 레드 와인을 소량 블렌딩하는 방식도 허용됩니다.' },
    ],
    relatedSlugs: ['wine-tasting-steps', 'tannin-explained', 'yukhoe-wine-pairing'],
  },
  {
    id: 9,
    slug: 'wine-decanting',
    category: '와인 입문',
    categorySlug: 'wine-101',
    title: '와인 디캔팅, 꼭 해야 할까?',
    subtitle: '디캔터에 옮겨 담는 이유와 타이밍',
    description: '와인 디캔팅 뜻과 방법 완전 가이드. 디캔팅이 필요한 와인 vs 안 해도 되는 와인, 적정 시간, 주의사항까지. RAWISM 소믈리에 설명.',
    keywords: ['디캔팅 뜻', '와인 디캔팅 방법', '디캔터 사용법', '와인 에어레이션', '디캔팅 시간'],
    date: '2026-03-17',
    readTime: 7,
    content: `
      <p>레스토랑에서 소믈리에가 와인을 예쁜 유리 용기에 옮겨 담는 모습, 보신 적 있으시죠? 그것이 <strong>디캔팅(Decanting)</strong>입니다. 있어 보이려고 하는 게 아니라, 확실한 과학적 이유가 있습니다.</p>
      
      <h3>디캔팅의 두 가지 목적</h3>
      <p><strong>1. 침전물 분리:</strong> 오래 숙성된 와인에는 타르타르산 결정이나 색소 침전물이 있을 수 있습니다. 디캔팅으로 맑은 와인만 분리합니다.</p>
      <p><strong>2. 에어레이션(공기 접촉):</strong> 와인이 공기와 만나면 닫혀 있던 향이 열리고, 거친 탄닌이 부드러워집니다. 마치 꽃봉오리가 피어나는 것처럼요.</p>
      
      <h3>디캔팅이 필요한 와인</h3>
      <ul>
        <li><strong>영 빈티지의 풀바디 레드:</strong> 카베르네 소비뇽, 바롤로, 시라 등. 30분~2시간 디캔팅으로 탄닌이 부드러워짐.</li>
        <li><strong>오래 숙성된 레드(15년+):</strong> 침전물 분리 목적. 단, 조심스럽게! 너무 오래 공기에 노출하면 약해진 향이 날아감.</li>
        <li><strong>고급 화이트 와인:</strong> 부르고뉴 그랑 크뤼 등. 산소 접촉으로 복합성 증가.</li>
      </ul>
      
      <h3>디캔팅 안 해도 되는 와인</h3>
      <ul>
        <li><strong>샴페인/스파클링:</strong> 기포가 빠져나가므로 절대 디캔팅 X (예외: 크뤼그 등 일부 프레스티지 큐베를 와이드 글라스에 따르는 것은 디캔팅이 아닌 서빙 스타일)</li>
        <li><strong>가벼운 화이트/로제:</strong> 이미 프레시함이 매력이므로 불필요</li>
        <li><strong>데일리 와인:</strong> 디캔팅으로 크게 달라지지 않음</li>
      </ul>
      
      <h3>집에서 간단히 에어레이션하는 법</h3>
      <p>디캔터가 없다면? 잔에 와인을 따른 후 <strong>10~15분 정도 그냥 두세요.</strong> 또는 잔을 크게 돌리는 '스월링(Swirling)'만으로도 상당한 에어레이션 효과가 있습니다.</p>
      
      <h3>RAWISM에서의 와인 서비스</h3>
      <p>RAWISM The Black 소믈리에는 와인의 상태, 빈티지, 스타일에 따라 <strong>디캔팅 여부와 시간을 정확히 판단</strong>합니다. 한우 뭉티기와의 페어링에서 최적의 타이밍에 최적의 상태로 서빙하는 것, 그것이 프로의 세계입니다.</p>
    `,
    faq: [
      { question: '디캔팅은 무조건 해야 하나요?', answer: '아닙니다. 와인의 종류, 빈티지, 상태에 따라 다릅니다. 샴페인이나 가벼운 화이트는 디캔팅이 불필요하며, 풀바디 레드나 오래 숙성된 와인에 효과적입니다.' },
      { question: '디캔팅 시간은 얼마나 필요한가요?', answer: '영 빈티지 풀바디 레드는 30분~2시간, 숙성된 와인은 15~30분이 적당합니다. 오래 숙성된 와인은 너무 오래 노출하면 향이 날아갈 수 있어 주의가 필요합니다.' },
    ],
    relatedSlugs: ['tannin-explained', 'wine-tasting-steps', 'red-white-rose-difference'],
  },
  {
    id: 10,
    slug: 'terroir-explained',
    category: '와인 입문',
    categorySlug: 'wine-101',
    title: '떼루아(Terroir)란? 와인 맛을 결정하는 땅의 힘',
    subtitle: '토양, 기후, 지형 — 같은 포도가 다른 와인이 되는 이유',
    description: '떼루아(Terroir) 뜻과 와인에 미치는 영향 완전 가이드. 토양, 기후, 고도, 일조량이 와인 맛을 어떻게 결정하는지. 샹파뉴 떼루아의 비밀까지.',
    keywords: ['떼루아 뜻', '와인 떼루아', '떼루아란', '와인 토양', '샹파뉴 토양'],
    date: '2026-03-19',
    readTime: 8,
    content: `
      <p>프랑스어 'Terroir(떼루아)'는 직역하면 '토지, 풍토'입니다. 하지만 와인 세계에서 떼루아는 <strong>포도가 자라는 환경의 총체</strong>를 의미합니다. 토양, 기후, 지형, 고도, 미생물 생태계, 심지어 양조 전통까지 포함하는 거대한 개념이죠.</p>
      
      <h3>떼루아의 4가지 요소</h3>
      <p><strong>1. 토양 (Sol)</strong></p>
      <p>와인 포도는 척박한 땅에서 더 좋은 품질을 냅니다. 뿌리가 깊이 내려가 다양한 미네랄을 흡수하면서 복합적인 맛이 만들어지거든요.</p>
      <ul>
        <li><strong>석회암:</strong> 산미가 높고 미네랄리한 와인. 샹파뉴, 부르고뉴의 비밀.</li>
        <li><strong>점토:</strong> 보디감이 풍부한 와인. 보르도 우안, 포므롤.</li>
        <li><strong>자갈:</strong> 배수가 좋아 농축된 과실미. 보르도 좌안, 샤또네프 뒤 파프.</li>
        <li><strong>화산암:</strong> 독특한 미네랄과 스모키함. 에트나, 산토리니.</li>
      </ul>
      
      <p><strong>2. 기후 (Climat)</strong></p>
      <p>온도, 강수량, 일조량이 포도의 당도·산도·풍미를 결정합니다.</p>
      <ul>
        <li><strong>서늘한 기후:</strong> 높은 산미, 섬세한 과일향. 샹파뉴, 부르고뉴, 모젤.</li>
        <li><strong>따뜻한 기후:</strong> 높은 당도(=높은 알코올), 진한 과실미. 나파밸리, 바로사.</li>
        <li><strong>해양성:</strong> 안정적인 온도, 적당한 습도. 보르도.</li>
        <li><strong>대륙성:</strong> 큰 일교차, 선명한 산미. 부르고뉴, 알자스.</li>
      </ul>
      
      <p><strong>3. 지형 (Topographie)</strong></p>
      <p>고도, 경사면의 방향, 강·호수의 영향이 미세 기후를 만듭니다. 남향 경사면은 일조량이 많고, 강 옆은 서리 피해가 적죠.</p>
      
      <p><strong>4. 인간의 손길 (Savoir-faire)</strong></p>
      <p>어떤 사람은 떼루아에 인간을 포함하기도 합니다. 수백 년간 축적된 양조 전통, 포도밭 관리 방식, 지역 문화가 와인에 녹아드니까요.</p>
      
      <h3>샹파뉴의 떼루아: 북위 49도의 기적</h3>
      <p>샹파뉴는 포도 재배 한계선인 북위 49도 부근에 위치합니다. 서늘한 기후 덕분에 포도는 천천히 익으며 <strong>높은 산미와 섬세한 풍미</strong>를 갖게 됩니다. 토양은 약 6,500만 년 전 바다였던 시절의 <strong>백악(chalk, 석회질) 토양</strong>. 이 백악 지하 셀러에서 샴페인이 최적의 온도로 숙성됩니다.</p>
      
      <h3>한우에도 떼루아가 있다</h3>
      <p>사실 <strong>'떼루아'라는 개념은 와인에만 적용되는 것이 아닙니다.</strong> 한우도 어디서, 어떻게 키우느냐에 따라 맛이 다릅니다. 사료, 물, 기후, 사육 환경... RAWISM에서 당일 도축 온도체 한우를 고집하는 것도 일종의 '떼루아 존중'입니다. 최상의 재료를 가장 순수한 방식으로, 그것이 날것의 철학이니까요.</p>
    `,
    faq: [
      { question: '떼루아가 뭔가요?', answer: '프랑스어로 \'풍토\'를 뜻하며, 와인에서는 포도가 자라는 환경의 총체(토양, 기후, 지형, 양조 전통 등)를 의미합니다. 같은 품종이라도 떼루아에 따라 전혀 다른 맛의 와인이 됩니다.' },
      { question: '샹파뉴의 토양은 뭐가 특별한가요?', answer: '약 6,500만 년 전 바다였던 곳의 백악(chalk) 토양이 특징입니다. 석회질이 풍부해 높은 산미와 미네랄감을 주고, 지하 셀러는 천연 냉장고 역할을 합니다.' },
    ],
    relatedSlugs: ['champagne-how-its-made', 'wine-vintage-chart', 'champagne-vs-sparkling'],
  },
]
