// Wine Column Data Part 3 - Articles 21~32
import type { WineColumn } from './wineColumns'

export const wineColumns3: WineColumn[] = [
  {
    id: 21,
    slug: 'grower-champagne',
    category: '프리미엄 와인',
    categorySlug: 'premium-selection',
    title: '가성비 좋은 그로워 샴페인 추천',
    subtitle: '대형 하우스 반값에 즐기는 장인의 샴페인',
    description: '그로워 샴페인(RM) 추천 가이드. 대형 하우스 반값에 즐기는 소규모 장인 샴페인. 가성비 좋은 그로워 샴페인 5가지와 고르는 법.',
    keywords: ['그로워 샴페인', '가성비 샴페인', 'RM 샴페인', '소규모 샴페인', '샴페인 추천'],
    date: '2026-04-10',
    readTime: 7,
    content: `
      <p>대형 하우스 샴페인만 알고 계셨다면, <strong>그로워 샴페인(Grower Champagne)</strong>의 세계가 기다리고 있습니다. 라벨에 'RM'이라고 적힌 이 샴페인들은, 자기 밭에서 직접 포도를 키우고 직접 만드는 <strong>장인의 작품</strong>입니다.</p>
      
      <h3>그로워 샴페인이란?</h3>
      <p>대형 하우스(NM)가 여러 곳에서 포도를 사들여 대량 생산하는 것과 달리, 그로워(RM)는 <strong>자기 포도밭의 포도만으로</strong> 소량 생산합니다. 연간 수천 병 단위. 그래서 개성이 강하고, 떼루아의 표현이 직접적입니다.</p>
      
      <h3>왜 가성비가 좋을까?</h3>
      <ul>
        <li>마케팅·광고비가 거의 없음 → 가격에 반영 안 됨</li>
        <li>대형 하우스의 NV 브뤼 가격(7~9만원)으로 그로워의 빈티지급을 살 수 있음</li>
        <li>품질은 대형 하우스 프레스티지 큐베에 견줄 만한 것들도 있음</li>
      </ul>
      
      <h3>추천 그로워 샴페인 5선</h3>
      <p><strong>1. 피에르 지모네 (Pierre Gimonnet) — 블랑 드 블랑의 교과서</strong></p>
      <p>코트 데 블랑의 샤르도네 전문가. 가스티크 큐베는 5만원대에서 놀라운 미네랄과 우아함.</p>
      
      <p><strong>2. 에그리 우리에 (Egly-Ouriet) — 피노 누아의 거장</strong></p>
      <p>앙보네이의 전설. NV 브뤼 트라디시옹이 10만원대인데, 대형 하우스 프레스티지 큐베급 복합성.</p>
      
      <p><strong>3. 라르마디에 베르니에 (Larmandier-Bernier) — 바이오다이나믹 개척자</strong></p>
      <p>유기농·바이오다이나믹 선구자. 테르 드 베르튀스는 7만원대에 블랑 드 블랑의 진수.</p>
      
      <p><strong>4. 제롬 프레보 (Jérôme Prévost) — 뫼니에의 재발견</strong></p>
      <p>피노 뫼니에 100%로 만드는 라 클로즈리. 뫼니에가 이렇게 복합적일 수 있다는 것을 증명. 10만원대.</p>
      
      <p><strong>5. 자크 셀로스 (Jacques Selosse) — 그로워의 신</strong></p>
      <p>그로워 샴페인의 전설. 가격이 대형 하우스 프레스티지 큐베를 넘지만, 독보적인 산화 숙성 스타일은 다른 어떤 샴페인에서도 찾을 수 없음. 버킷리스트.</p>
      
      <h3>RAWISM 팁</h3>
      <p>RAWISM The Black에서는 대형 하우스뿐 아니라 소믈리에가 엄선한 그로워 샴페인도 만나보실 수 있습니다. 한우 뭉티기와 그로워 샴페인의 조합은 <strong>"이런 맛이 있었어?"</strong> 하는 새로운 발견이 될 겁니다.</p>
    `,
    faq: [
      { question: '그로워 샴페인이 뭔가요?', answer: '자기 포도밭에서 직접 재배한 포도만으로 소량 생산하는 샴페인입니다. 라벨에 RM(Récoltant Manipulant)이라고 표기됩니다. 개성이 강하고 떼루아 표현이 직접적입니다.' },
      { question: '그로워 샴페인은 어디서 살 수 있나요?', answer: '와인 전문매장이나 온라인 와인숍에서 구매 가능합니다. RAWISM The Black에서도 소믈리에가 큐레이팅한 그로워 샴페인을 잔으로 즐기실 수 있습니다.' },
    ],
    relatedSlugs: ['champagne-label-reading', 'first-champagne-recommendations', 'prestige-cuvee'],
  },
  {
    id: 22,
    slug: 'rose-champagne-guide',
    category: '프리미엄 와인',
    categorySlug: 'premium-selection',
    title: '로제 샴페인의 매력 — 빛깔 속 이야기',
    subtitle: '핑크빛 기포에 담긴 낭만과 기술의 결정체',
    description: '로제 샴페인 가이드. 만드는 법(블렌딩 vs 세니에), 추천 로제 샴페인, 음식 페어링까지. 기념일과 데이트에 완벽한 로제 샴페인의 모든 것.',
    keywords: ['로제 샴페인 추천', '로제 샴페인', '핑크 샴페인', '로제 샴페인 만드는 법', '기념일 샴페인'],
    date: '2026-04-12',
    readTime: 7,
    content: `
      <p>로제 샴페인의 핑크빛은 단순한 색이 아닙니다. 그 안에는 <strong>수백 년의 양조 기술과 낭만</strong>이 담겨 있습니다. 기념일, 프로포즈, 특별한 데이트에 이보다 완벽한 선택은 없습니다.</p>
      
      <h3>로제 샴페인, 어떻게 만들까?</h3>
      <p><strong>방법 1: 블렌딩 (Assemblage) — 가장 일반적</strong></p>
      <p>화이트 베이스 와인에 <strong>적포도주(피노 누아)를 소량(5~15%) 블렌딩</strong>합니다. 양조가가 색상과 맛을 정밀하게 컨트롤할 수 있어 대부분의 하우스가 이 방식을 사용합니다. 다른 와인 지역에서는 금지된 방식이지만, 샹파뉴에서만 예외적으로 허용됩니다.</p>
      
      <p><strong>방법 2: 세니에 (Saignée) — 전통 방식</strong></p>
      <p>적포도를 짧은 시간 껍질과 접촉시켜 <strong>원하는 색이 나오면 즙을 분리</strong>합니다. 더 진한 색상과 풍부한 과실미가 특징. 생산이 까다롭지만 개성이 강합니다.</p>
      
      <h3>로제 샴페인 추천 5선</h3>
      <p><strong>1. 뵈브 클리코 로제:</strong> 입문용으로 완벽. 딸기·체리향에 비스킷 풍미. ₩80,000~₩110,000</p>
      <p><strong>2. 빌카르 살몽 로제:</strong> "로제 샴페인의 왕". 섬세하고 우아한 스타일의 교과서. ₩90,000~₩130,000</p>
      <p><strong>3. 루이나르 로제:</strong> 가장 오래된 샴페인 하우스의 로제. 산딸기·석류향. ₩100,000~₩140,000</p>
      <p><strong>4. 돔 페리뇽 로제:</strong> 프레스티지 로제의 정점. 파워와 우아함의 극치. ₩500,000+</p>
      <p><strong>5. 로랑 페리에 큐베 로제:</strong> 세니에 방식의 대표주자. 진한 색상과 풍부한 과실미. ₩80,000~₩110,000</p>
      
      <h3>로제 샴페인 × 음식 페어링</h3>
      <ul>
        <li><strong>연어/참치 회:</strong> 핑크빛 생선과 핑크빛 와인의 시각+미각 하모니</li>
        <li><strong>청양 오일 육회:</strong> 과실미가 매콤함을 부드럽게 감싸줌</li>
        <li><strong>딸기 디저트:</strong> 같은 계열의 향끼리 시너지</li>
        <li><strong>한우 뭉티기:</strong> 화이트 샴페인보다 약간 더 무게감 있는 페어링</li>
      </ul>
      
      <h3>RAWISM에서의 로제</h3>
      <p>RAWISM The Black에서 프로포즈나 기념일 디너를 계획하신다면, 로제 샴페인을 미리 요청해주세요. 소믈리에가 <strong>그날의 메뉴와 분위기에 맞는 최적의 로제</strong>를 준비해드립니다. 루이 풀센 조명 아래 핑크빛으로 빛나는 한 잔은, 잊지 못할 순간을 만들어줄 겁니다.</p>
    `,
    faq: [
      { question: '로제 샴페인은 일반 샴페인보다 비싼가요?', answer: '네, 일반적으로 같은 하우스의 화이트 브뤼보다 20~50% 정도 비쌉니다. 제조 과정이 더 복잡하고, 피노 누아 적포도주를 추가로 사용하기 때문입니다.' },
      { question: '로제 샴페인 입문으로 추천하는 것은?', answer: '뵈브 클리코 로제 또는 로랑 페리에 큐베 로제를 추천합니다. 8~11만원대로 로제 샴페인의 매력을 충분히 경험할 수 있습니다.' },
    ],
    relatedSlugs: ['first-champagne-recommendations', 'champagne-sweetness-brut', 'spicy-food-wine'],
  },
  {
    id: 23,
    slug: 'blanc-de-blancs-vs-noirs',
    category: '프리미엄 와인',
    categorySlug: 'premium-selection',
    title: '블랑 드 블랑 vs 블랑 드 누아',
    subtitle: '화이트에서 온 화이트, 블랙에서 온 화이트',
    description: '블랑 드 블랑과 블랑 드 누아 차이 완전 정리. 샤르도네 100% vs 피노 누아 100% 샴페인의 맛, 스타일, 음식 페어링 차이를 비교합니다.',
    keywords: ['블랑드블랑 블랑드누아 차이', '블랑 드 블랑', '블랑 드 누아', '샤르도네 샴페인', '피노 누아 샴페인'],
    date: '2026-04-14',
    readTime: 7,
    content: `
      <p>프랑스어로 <strong>'Blanc de Blancs'는 "화이트에서 만든 화이트"</strong>, <strong>'Blanc de Noirs'는 "블랙(레드)에서 만든 화이트"</strong>라는 뜻입니다. 둘 다 화이트 샴페인이지만, 성격이 완전히 다릅니다.</p>
      
      <h3>블랑 드 블랑 (Blanc de Blancs)</h3>
      <p><strong>포도:</strong> 샤르도네 100%</p>
      <p><strong>핵심 산지:</strong> 코트 데 블랑(Côte des Blancs) — 르 메닐 쉬르 오제, 크라망 등</p>
      <p><strong>맛 프로필:</strong> 섬세, 우아, 미네랄, 시트러스, 흰 꽃, 아몬드. 산미가 높고 바디는 라이트~미디엄.</p>
      <p><strong>숙성 후:</strong> 토스트, 브리오슈, 꿀, 마르지팬으로 진화. 오래 숙성할수록 빛남.</p>
      <p><strong>한마디:</strong> 레이피어(가는 검) — 날카롭고 정밀한 우아함.</p>
      
      <h3>블랑 드 누아 (Blanc de Noirs)</h3>
      <p><strong>포도:</strong> 피노 누아 100% (또는 피노 뫼니에 포함)</p>
      <p><strong>핵심 산지:</strong> 몽타뉴 드 랭스(Montagne de Reims) — 앙보네이, 부지, 베르즈네 등</p>
      <p><strong>맛 프로필:</strong> 풍성, 힘, 구조감, 빨간 사과, 라즈베리, 빵. 바디가 더 풀하고 풍미가 진함.</p>
      <p><strong>숙성 후:</strong> 견과류, 캐러멜, 말린 과일. 힘이 있어 오래 버팀.</p>
      <p><strong>한마디:</strong> 브로드소드(넓은 검) — 힘 있고 풍성한 카리스마.</p>
      
      <h3>비교표</h3>
      <table>
        <tr><th>항목</th><th>블랑 드 블랑</th><th>블랑 드 누아</th></tr>
        <tr><td>포도</td><td>샤르도네 100%</td><td>피노 누아 (±뫼니에)</td></tr>
        <tr><td>색상</td><td>연한 금색, 녹색 반사</td><td>진한 금색, 약간의 핑크</td></tr>
        <tr><td>바디</td><td>라이트~미디엄</td><td>미디엄~풀</td></tr>
        <tr><td>산미</td><td>높음 (레이저)</td><td>중간~높음</td></tr>
        <tr><td>풍미</td><td>시트러스, 미네랄, 우아</td><td>빨간 과일, 빵, 풍성</td></tr>
        <tr><td>숙성력</td><td>매우 뛰어남</td><td>뛰어남</td></tr>
        <tr><td>음식 매칭</td><td>해산물, 생고기, 섬세한 요리</td><td>가금류, 치즈, 풍미 진한 요리</td></tr>
      </table>
      
      <h3>RAWISM 페어링 추천</h3>
      <p><strong>한우 뭉티기 + 블랑 드 블랑:</strong> 생고기의 섬세함에 샤르도네의 우아한 미네랄이 완벽한 반주. 트러플의 earthy함과도 잘 연결.</p>
      <p><strong>치즈 셀렉션 + 블랑 드 누아:</strong> 풍미 진한 숙성 치즈에는 피노 누아의 힘이 필요합니다.</p>
    `,
    faq: [
      { question: '블랑 드 블랑과 블랑 드 누아 중 어떤 게 더 비싼가요?', answer: '일반적으로 블랑 드 블랑이 더 비쌉니다. 샤르도네는 샹파뉴에서 재배 면적이 더 적고, 숙성 잠재력이 높아 장기 숙성 비용이 추가되기 때문입니다.' },
      { question: '초보자는 어떤 것을 먼저 마셔볼까요?', answer: '블랑 드 블랑부터 추천합니다. 가볍고 우아한 스타일이라 부담 없이 시작할 수 있고, 샤르도네 특유의 깨끗한 맛이 샴페인의 매력을 잘 보여줍니다.' },
    ],
    relatedSlugs: ['champagne-vs-sparkling', 'first-champagne-recommendations', 'grower-champagne'],
  },
  {
    id: 24,
    slug: 'prestige-cuvee',
    category: '프리미엄 와인',
    categorySlug: 'premium-selection',
    title: '프레스티지 큐베란? 샴페인 하우스의 최고봉',
    subtitle: '각 하우스가 심혈을 기울이는 단 하나의 병',
    description: '프레스티지 큐베 뜻과 주요 하우스별 대표 라인업. 돔 페리뇽, 크리스탈, 그랑 다메, 벨 에포크 등 세계 최고 샴페인들의 특징과 가격 총정리.',
    keywords: ['프레스티지 큐베 뜻', '프레스티지 큐베', '최고급 샴페인', '돔 페리뇽', '샴페인 하우스'],
    date: '2026-04-16',
    readTime: 8,
    content: `
      <p>프레스티지 큐베(Prestige Cuvée)는 각 샴페인 하우스가 <strong>자사의 최고 기술, 최상의 포도, 최장의 숙성</strong>으로 만드는 플래그십 샴페인입니다. 가장 좋은 해에만, 가장 좋은 밭의 포도만으로, 가장 오래 숙성하여 출시합니다.</p>
      
      <h3>프레스티지 큐베의 조건</h3>
      <ul>
        <li><strong>최상의 포도:</strong> 그랑 크뤼(최고 등급 밭) 포도만 사용</li>
        <li><strong>빈티지 한정:</strong> 대부분 빈티지 샴페인 (예외: 크뤼그 그랑 큐베)</li>
        <li><strong>장기 숙성:</strong> 법적 최소 3년이지만, 실제로는 5~10년+</li>
        <li><strong>소량 생산:</strong> 하우스 전체 생산량의 극소 비율</li>
      </ul>
      
      <h3>하우스별 프레스티지 큐베 총정리</h3>
      <table>
        <tr><th>하우스</th><th>프레스티지 큐베</th><th>특징</th><th>가격대</th></tr>
        <tr><td>모엣 & 샹동</td><td>돔 페리뇽</td><td>화려+우아, 빈티지만</td><td>₩250,000~</td></tr>
        <tr><td>루이 로드레</td><td>크리스탈</td><td>순수+미네랄, 차르의 샴페인</td><td>₩350,000~</td></tr>
        <tr><td>크뤼그</td><td>크뤼그 빈티지</td><td>독보적 개성, 오크 발효</td><td>₩500,000~</td></tr>
        <tr><td>페리에 주에</td><td>벨 에포크</td><td>아르누보 병, 섬세+플로랄</td><td>₩200,000~</td></tr>
        <tr><td>뵈브 클리코</td><td>라 그랑 다메</td><td>피노 누아 중심, 힘+우아</td><td>₩250,000~</td></tr>
        <tr><td>테탱제</td><td>콩트 드 샹파뉴</td><td>블랑 드 블랑, 미네랄의 극치</td><td>₩250,000~</td></tr>
        <tr><td>폴 로제</td><td>윈스턴 처칠</td><td>처칠 경 헌정, 파워풀</td><td>₩300,000~</td></tr>
        <tr><td>볼랭저</td><td>R.D.</td><td>최근 데고르주망, 최장 숙성</td><td>₩250,000~</td></tr>
        <tr><td>살롱</td><td>살롱 (전량 프레스티지)</td><td>블랑 드 블랑, 단일 빈티지만</td><td>₩500,000~</td></tr>
      </table>
      
      <h3>프레스티지 큐베 마시는 법</h3>
      <ul>
        <li><strong>온도:</strong> 11~13°C. 일반 샴페인보다 약간 높게. 복합적 향을 위해.</li>
        <li><strong>잔:</strong> 튤립 글라스 또는 와이드 와인잔. 플루트는 아까움.</li>
        <li><strong>타이밍:</strong> 개봉 후 10~15분 대기. 향이 서서히 열림.</li>
        <li><strong>음식:</strong> 최상의 재료로 만든 간결한 요리. 트러플, 캐비어, 생고기.</li>
      </ul>
      
      <h3>RAWISM과 프레스티지 큐베</h3>
      <p>RAWISM The Black에서 기념일 디너를 계획하신다면, 프레스티지 큐베를 미리 예약해주세요. <strong>트러플 한우 뭉티기와 프레스티지 큐베의 만남</strong>은 미식의 정점입니다. 소믈리에가 취향에 맞는 최적의 한 병을 추천해드립니다.</p>
    `,
    faq: [
      { question: '프레스티지 큐베는 뭔가요?', answer: '각 샴페인 하우스가 최고의 포도, 최고의 기술, 최장의 숙성으로 만드는 플래그십 샴페인입니다. 돔 페리뇽, 크리스탈 등이 대표적입니다.' },
      { question: '프레스티지 큐베는 반드시 비싸야 하나요?', answer: '대부분 20만원 이상이지만, 페리에 주에 벨 에포크처럼 20만원대에서 시작하는 것도 있습니다. 가격 대비 만족도가 매우 높은 카테고리입니다.' },
    ],
    relatedSlugs: ['dom-krug-roederer-comparison', 'champagne-how-its-made', 'grower-champagne'],
  },
  {
    id: 25,
    slug: 'yeonnam-date-champagne',
    category: '다이닝 문화',
    categorySlug: 'dining-culture',
    title: '연남동 데이트, 샴페인바에서 즐기는 법',
    subtitle: '특별한 밤을 위한 연남동 데이트 코스 가이드',
    description: '연남동 데이트 코스 가이드. 연트럴파크 산책부터 샴페인바 디너까지 완벽한 데이트 플랜. RAWISM The Black 예약 팁과 추천 코스.',
    keywords: ['연남동 데이트', '연남동 샴페인바', '홍대 데이트', '연남동 데이트코스', '연트럴파크 데이트'],
    date: '2026-04-18',
    readTime: 6,
    content: `
      <p>연남동은 서울에서 가장 로맨틱한 데이트 스팟 중 하나입니다. 연트럴파크의 여유로운 산책로, 개성 넘치는 카페와 레스토랑, 그리고 <strong>특별한 밤을 완성해줄 프라이빗 다이닝</strong>까지.</p>
      
      <h3>완벽한 연남동 데이트 타임라인</h3>
      
      <p><strong>17:00 — 연트럴파크 산책</strong></p>
      <p>경의선 숲길(연트럴파크)을 걸으며 대화를 나누세요. 해 질 녘의 골목골목이 특히 아름답습니다. 가벼운 카페에서 커피 한 잔도 좋고요.</p>
      
      <p><strong>18:00 — RAWISM The Black 입장</strong></p>
      <p>해가 지기 시작하는 시간에 맞춰 RAWISM에 도착합니다. 어둡고 아늑한 분위기, 루이 풀센 조명이 만드는 <strong>프라이빗한 공간</strong>에서 두 사람만의 시간이 시작됩니다.</p>
      
      <p><strong>18:15 — 웰컴 샴페인</strong></p>
      <p>소믈리에의 추천으로 첫 잔을 선택합니다. 가벼운 브뤼 샴페인이나, 분위기를 위해 로제 샴페인을 시작으로.</p>
      
      <p><strong>18:30 — 시그니처 뭉티기</strong></p>
      <p>메인 이벤트! 트러플 한우 뭉티기가 테이블에 올라오는 순간, 소믈리에가 직접 블랙 트러플을 셰이빙합니다. 이 비주얼만으로도 데이트의 반은 성공.</p>
      
      <p><strong>19:00 — 사이드 메뉴 탐험</strong></p>
      <p>청양 오일 육회, 아보카도 카프레제, 치즈 셀렉션을 나누어 드세요. 각 메뉴에 맞는 와인을 소믈리에가 잔 단위로 추천해드립니다.</p>
      
      <p><strong>19:30 — 대화와 여운</strong></p>
      <p>들기름 육회 메밀면으로 마무리하면서 여유로운 대화. 8석뿐인 공간이기에 소란스럽지 않고, 두 사람에게 집중할 수 있습니다.</p>
      
      <h3>예약 필수 팁</h3>
      <ul>
        <li><strong>최소 2~3일 전 예약:</strong> 8석 한정이라 주말은 일주일 전 필수</li>
        <li><strong>네이버 예약:</strong> <a href="https://naver.me/5qLSfCNC">RAWISM 네이버 예약</a></li>
        <li><strong>기념일 알림:</strong> 예약 시 기념일이라고 말씀해주시면 특별한 준비를 해드립니다</li>
        <li><strong>예산:</strong> 2인 기준 약 15~18만원 (시그니처 + 사이드 + 샴페인)</li>
      </ul>
      
      <h3>RAWISM이 데이트에 좋은 이유</h3>
      <p><strong>8석 한정:</strong> 시끄럽지 않은 프라이빗한 공간. <strong>소믈리에 서비스:</strong> 와인을 몰라도 괜찮습니다. <strong>비주얼:</strong> 트러플 셰이빙, 부라타 컷팅 — 자연스러운 대화 소재. <strong>조명:</strong> 루이 풀센의 은은한 빛이 분위기를 만듭니다.</p>
    `,
    faq: [
      { question: 'RAWISM The Black 예약은 어떻게 하나요?', answer: '네이버 예약(naver.me/5qLSfCNC)으로 가능합니다. 8석 한정이므로 주말은 최소 일주일 전, 평일도 2~3일 전 예약을 권장합니다.' },
      { question: '2인 기준 예산은 얼마 정도인가요?', answer: '시그니처 뭉티기 + 사이드 메뉴 1~2개 + 샴페인으로 약 15~18만원 정도입니다. 프레스티지 큐베를 선택하시면 더 올라갈 수 있습니다.' },
    ],
    relatedSlugs: ['anniversary-wine-guide', 'mungtige-champagne-pairing', 'wine-etiquette'],
  },
  {
    id: 26,
    slug: 'anniversary-wine-guide',
    category: '다이닝 문화',
    categorySlug: 'dining-culture',
    title: '기념일 와인 고르는 법 — 100일부터 결혼기념일까지',
    subtitle: '특별한 날을 더 특별하게 만드는 와인 선택의 기술',
    description: '기념일 와인 추천 가이드. 100일, 1주년, 프로포즈, 결혼기념일 등 상황별 추천 와인과 샴페인. 특별한 날을 위한 와인 선택 팁.',
    keywords: ['기념일 와인 추천', '프로포즈 와인', '결혼기념일 와인', '기념일 샴페인', '특별한 날 와인'],
    date: '2026-04-20',
    readTime: 7,
    content: `
      <p>기념일에 어울리는 와인을 고르는 것은 <strong>그 순간의 무게와 감정을 액체로 표현하는 것</strong>입니다. 상황별로 최적의 선택을 정리했습니다.</p>
      
      <h3>💯 100일 기념 — 설렘의 기포</h3>
      <p><strong>추천:</strong> 모엣 & 샹동 임페리얼 브뤼 또는 페리에 주에 그랑 브뤼</p>
      <p><strong>이유:</strong> 아직 서로를 알아가는 과정. 부담스럽지 않으면서 특별한 한 잔. 브뤼 샴페인의 경쾌한 기포가 초기의 설렘을 닮았습니다.</p>
      <p><strong>예산:</strong> ₩60,000~₩80,000</p>
      
      <h3>🎂 1주년 — 깊어지는 사랑</h3>
      <p><strong>추천:</strong> 뵈브 클리코 로제 또는 루이나르 블랑 드 블랑</p>
      <p><strong>이유:</strong> 1년간 함께한 시간의 무게. 로제의 낭만 또는 블랑 드 블랑의 우아함으로 한 단계 업그레이드된 경험.</p>
      <p><strong>예산:</strong> ₩80,000~₩130,000</p>
      
      <h3>💍 프로포즈 — 인생의 한 잔</h3>
      <p><strong>추천:</strong> 돔 페리뇽, 크리스탈, 또는 페리에 주에 벨 에포크</p>
      <p><strong>이유:</strong> 인생에서 단 한 번뿐인 순간. 프레스티지 큐베의 격이 이 순간에 걸맞습니다. 벨 에포크의 아름다운 병은 프로포즈의 비주얼을 완성.</p>
      <p><strong>팁:</strong> RAWISM에 미리 연락하시면 링 세레모니와 함께 준비 가능.</p>
      <p><strong>예산:</strong> ₩200,000~₩500,000</p>
      
      <h3>💒 결혼기념일 — 함께 익어가는 시간</h3>
      <p><strong>추천:</strong> 결혼한 해의 빈티지 샴페인 또는 와인</p>
      <p><strong>이유:</strong> 같은 해에 태어난 와인과 함께 지나온 시간을 돌아보는 것. 2015년에 결혼했다면, 2015 빈티지 샴페인이나 보르도를 찾아보세요.</p>
      <p><strong>팁:</strong> RAWISM 소믈리에에게 빈티지를 미리 말씀해주시면 준비.</p>
      <p><strong>예산:</strong> 빈티지에 따라 천차만별</p>
      
      <h3>🎓 기타 기념일 퀵 가이드</h3>
      <ul>
        <li><strong>승진/합격:</strong> 크뤼그 그랑 큐베 — "당신의 노력에 건배"</li>
        <li><strong>생일:</strong> 그 사람이 좋아하는 스타일로 (모르면 로제가 무난)</li>
        <li><strong>크리스마스:</strong> 돔 페리뇽 + 디너 — 특별한 밤의 정석</li>
        <li><strong>발렌타인데이:</strong> 로제 샴페인 + 초콜릿 디저트</li>
      </ul>
      
      <h3>기념일 와인 선물 팁</h3>
      <ol>
        <li>상대방의 <strong>와인 취향</strong>을 미리 파악 (레드? 화이트? 달콤한?)</li>
        <li>모르겠으면 <strong>샴페인이 가장 안전</strong> (싫어하는 사람이 거의 없음)</li>
        <li><strong>의미 있는 빈티지</strong>를 찾아보세요 (만난 해, 함께한 특별한 해)</li>
        <li>병 자체가 예쁜 것도 중요 (벨 에포크, 루이나르 등)</li>
      </ol>
    `,
    faq: [
      { question: '프로포즈에 가장 추천하는 샴페인은?', answer: '페리에 주에 벨 에포크를 추천합니다. 아르누보 스타일의 아름다운 병 디자인이 프로포즈의 비주얼을 완성하고, 섬세하고 우아한 맛이 특별한 순간에 어울립니다.' },
      { question: '기념일에 RAWISM에서 특별한 준비가 가능한가요?', answer: '네, 예약 시 기념일임을 말씀해주시면 소믈리에가 특별한 와인을 준비하고, 프로포즈의 경우 링 세레모니도 도와드립니다.' },
    ],
    relatedSlugs: ['yeonnam-date-champagne', 'rose-champagne-guide', 'prestige-cuvee'],
  },
  {
    id: 27,
    slug: 'wine-etiquette',
    category: '다이닝 문화',
    categorySlug: 'dining-culture',
    title: '와인 에티켓 — 레스토랑에서 당황하지 않는 법',
    subtitle: '주문부터 건배까지, 세련된 와인 매너의 모든 것',
    description: '레스토랑 와인 에티켓 완전 가이드. 와인 주문법, 테이스팅 방법, 건배 매너, 잔 잡는 법까지. 와인 초보도 자신감 있게 즐기는 실전 팁.',
    keywords: ['와인 에티켓', '레스토랑 와인 주문', '와인 매너', '와인 건배', '와인 잔 잡는 법'],
    date: '2026-04-22',
    readTime: 7,
    content: `
      <p>와인 리스트를 받는 순간 긴장되시나요? 소믈리에 앞에서 뭘 어떻게 해야 할지 모르겠다고요? <strong>걱정 마세요. 에티켓의 핵심은 '잘 아는 것'이 아니라 '즐기는 것'</strong>입니다. 그래도 기본을 알면 더 여유롭게 즐길 수 있으니, 핵심만 짚어드립니다.</p>
      
      <h3>와인 주문하기</h3>
      <p><strong>1. 솔직하게 말하기:</strong> "와인 잘 모르는데, 추천해주세요"가 가장 좋은 시작입니다. 소믈리에는 이런 손님을 가장 좋아합니다. 추천을 위해 존재하는 사람이니까요.</p>
      <p><strong>2. 예산 힌트 주기:</strong> 직접 가격을 말하기 부담스러우면 메뉴판에서 원하는 가격대의 와인을 가리키며 "이 정도 스타일로"라고 하면 소믈리에가 알아서 파악합니다.</p>
      <p><strong>3. 취향 알려주기:</strong> "가벼운 거", "단 건 싫어요", "지난번에 ○○ 마셨는데 좋았어요" 같은 정보만 줘도 충분합니다.</p>
      
      <h3>테이스팅 확인 절차</h3>
      <p>소믈리에가 와인을 따르기 전 소량을 드리면:</p>
      <ol>
        <li><strong>보기:</strong> 색상을 잠깐 확인 (형식적으로 OK)</li>
        <li><strong>맡기:</strong> 코를 가져가 향 확인. 이상한 냄새(젖은 골판지, 식초)가 아닌지 체크</li>
        <li><strong>맛보기:</strong> 한 모금 맛봄. 결함이 없으면 끄덕이거나 "좋아요" 한마디</li>
      </ol>
      <p><strong>주의:</strong> 이 절차는 '맛이 마음에 드는지' 확인이 아니라 <strong>'결함이 있는지'</strong> 확인하는 것입니다. "이거 제 취향이 아니에요"라고 반품하는 건 에티켓에 어긋납니다.</p>
      
      <h3>잔 잡는 법</h3>
      <p><strong>와인잔:</strong> 스템(다리 부분)을 잡습니다. 볼(둥근 부분)을 잡으면 체온이 와인을 데워 맛이 변합니다.</p>
      <p><strong>샴페인 플루트:</strong> 역시 스템. 기포를 오래 유지하려면 체온을 전달하지 않는 게 중요.</p>
      <p><strong>캐주얼 자리:</strong> 너무 신경 쓸 필요 없습니다. 편하게 잡아도 됩니다.</p>
      
      <h3>건배 매너</h3>
      <ul>
        <li><strong>눈 마주치기:</strong> 건배할 때 상대방 눈을 봅니다. 유럽에서는 눈 안 마주치면 7년 불운이란 미신도.</li>
        <li><strong>잔 부딪치기:</strong> 와인잔은 얇고 깨지기 쉬우니 가볍게. 또는 잔을 들어 올리기만 해도 OK.</li>
        <li><strong>한국식:</strong> 윗사람에게 두 손으로 건네도 좋지만, 와인 문화에서는 너무 격식 차릴 필요 없습니다.</li>
      </ul>
      
      <h3>따르는 순서와 양</h3>
      <ul>
        <li>소믈리에가 따라주면 직접 따를 필요 없음</li>
        <li>셀프로 따를 때: 잔의 <strong>1/3 정도</strong> (향을 맡을 공간 확보)</li>
        <li>순서: 여성 먼저, 호스트 마지막이 전통이지만 요즘은 자유로움</li>
      </ul>
      
      <h3>RAWISM에서는</h3>
      <p>RAWISM The Black은 에티켓을 몰라도 전혀 부담 없는 공간입니다. 소믈리에가 모든 과정을 <strong>자연스럽게 리드</strong>해드리며, 편하게 즐기시는 것이 저희가 가장 원하는 것입니다. 와인의 본질은 격식이 아니라 <strong>함께하는 시간의 즐거움</strong>이니까요.</p>
    `,
    faq: [
      { question: '와인을 잘 모르는데 레스토랑에서 주문해도 되나요?', answer: '물론입니다! "추천해주세요"가 가장 좋은 시작입니다. 취향, 예산, 함께 먹을 음식만 알려주시면 소믈리에가 최적의 와인을 찾아드립니다.' },
      { question: '테이스팅 때 맛이 마음에 안 들면 바꿀 수 있나요?', answer: '테이스팅은 결함(산화, TCA 오염 등) 확인용이지 취향 확인이 아닙니다. 결함이 있으면 당연히 교환 가능하지만, 단순히 취향에 안 맞는다고 반품하는 것은 에티켓에 어긋납니다.' },
    ],
    relatedSlugs: ['wine-tasting-steps', 'yeonnam-date-champagne', 'first-champagne-recommendations'],
  },
  {
    id: 28,
    slug: 'private-dining-explained',
    category: '다이닝 문화',
    categorySlug: 'dining-culture',
    title: '프라이빗 다이닝이란? 특별한 날의 선택',
    subtitle: '8석 한정의 세계, 왜 프라이빗 다이닝에 열광할까',
    description: '프라이빗 다이닝 뜻과 매력. 일반 레스토랑과의 차이, 프라이빗 다이닝 예약 팁, 연남동 RAWISM The Black의 프라이빗 다이닝 경험.',
    keywords: ['프라이빗 다이닝 뜻', '프라이빗 다이닝', '연남동 프라이빗 다이닝', '예약제 레스토랑', '8석 한정'],
    date: '2026-04-24',
    readTime: 6,
    content: `
      <p>'프라이빗 다이닝(Private Dining)'은 <strong>소수의 손님만을 위한 예약제 식사 경험</strong>입니다. 대형 레스토랑의 웅성거림 대신, 조용하고 친밀한 공간에서 셰프와 소믈리에의 집중적인 서비스를 받을 수 있죠.</p>
      
      <h3>프라이빗 다이닝 vs 일반 레스토랑</h3>
      <table>
        <tr><th>항목</th><th>프라이빗 다이닝</th><th>일반 레스토랑</th></tr>
        <tr><td>좌석</td><td>8~20석 한정</td><td>50~200석</td></tr>
        <tr><td>예약</td><td>필수 (예약제)</td><td>워크인 가능</td></tr>
        <tr><td>소음</td><td>조용, 대화 집중</td><td>배경 소음 있음</td></tr>
        <tr><td>서비스</td><td>1:1~1:4 밀착 서비스</td><td>서버 1인당 다수 테이블</td></tr>
        <tr><td>메뉴</td><td>큐레이팅/코스</td><td>개별 주문</td></tr>
        <tr><td>경험</td><td>셰프·소믈리에와 소통</td><td>주방은 보이지 않음</td></tr>
      </table>
      
      <h3>프라이빗 다이닝이 특별한 이유</h3>
      <p><strong>1. 집중:</strong> 적은 테이블 수 = 당신의 테이블에 더 많은 시간과 관심.</p>
      <p><strong>2. 커스터마이징:</strong> 알레르기, 선호도, 기념일 등 개인 요청을 세밀하게 반영.</p>
      <p><strong>3. 소통:</strong> 소믈리에가 와인 설명을, 셰프가 요리 설명을 직접 해주는 경험.</p>
      <p><strong>4. 프라이버시:</strong> 프로포즈, 비즈니스 미팅, 가족 모임 등 외부 방해 없이.</p>
      <p><strong>5. 기억:</strong> 독특한 경험은 더 오래 기억됩니다. 인스타그램 사진보다 중요한 건 그 순간의 감동.</p>
      
      <h3>RAWISM The Black의 프라이빗 다이닝</h3>
      <p>RAWISM은 <strong>8석 한정 완전 예약제</strong>로 운영됩니다.</p>
      <ul>
        <li><strong>좌석:</strong> 8석. 4개 테이블.</li>
        <li><strong>운영:</strong> 화~일 18:00~24:00 (라스트오더 22:30). 월요일 휴무.</li>
        <li><strong>예약:</strong> 네이버 예약 필수. 주말은 1주일 전.</li>
        <li><strong>소믈리에:</strong> 상주하며 와인·샴페인 큐레이팅.</li>
        <li><strong>분위기:</strong> 루이 풀센 조명, 에어샤워, 블랙톤 인테리어.</li>
      </ul>
      
      <p>연남동 동교로 262-4. 홍대입구역 3번 출구에서 도보 5분. 트러플 한우 뭉티기와 샴페인이 만드는 <strong>날것의 철학</strong>을 경험해보세요.</p>
    `,
    faq: [
      { question: '프라이빗 다이닝은 가격이 비싼가요?', answer: '일반 레스토랑보다는 높은 편이지만, RAWISM의 경우 2인 기준 15~18만원(시그니처 + 사이드 + 샴페인)으로 프라이빗 다이닝 경험을 즐길 수 있어 가성비가 좋습니다.' },
      { question: 'RAWISM은 단체 예약도 가능한가요?', answer: '8석 한정이므로 대규모 단체는 어렵지만, 4~6인 소규모 모임은 가능합니다. 전체 대관을 원하시면 미리 문의해주세요.' },
    ],
    relatedSlugs: ['yeonnam-date-champagne', 'anniversary-wine-guide', 'wine-etiquette'],
  },
  {
    id: 29,
    slug: 'wine-glossary-basics',
    category: '용어 사전',
    categorySlug: 'wine-dictionary',
    title: '와인 용어 사전 A-Z (기초편)',
    subtitle: '이것만 알면 와인 대화가 된다',
    description: '와인 용어 사전 기초편. 아로마, 바디, 큐베, 디캔팅부터 떼루아, 빈티지까지 와인 초보가 반드시 알아야 할 핵심 용어 30개 완전 정리.',
    keywords: ['와인 용어 정리', '와인 용어 사전', '와인 용어', '와인 초보 용어', '바디감 뜻'],
    date: '2026-04-26',
    readTime: 9,
    content: `
      <p>와인을 배울 때 가장 먼저 부딪히는 벽이 <strong>용어</strong>입니다. 프랑스어, 이탈리아어, 영어가 뒤섞인 와인 용어들을 정리했습니다. 이것만 알면 와인 대화가 됩니다.</p>
      
      <h3>A</h3>
      <p><strong>아로마 (Aroma):</strong> 와인의 향. 1차(포도 품종), 2차(발효), 3차(숙성) 아로마로 나뉨.</p>
      <p><strong>아상블라주 (Assemblage):</strong> 블렌딩. 여러 와인을 섞어 최종 와인을 만드는 과정.</p>
      <p><strong>AOC/AOP:</strong> 프랑스 원산지 명칭 통제. 생산지, 품종, 양조법이 법으로 규정됨.</p>
      
      <h3>B</h3>
      <p><strong>바디 (Body):</strong> 와인의 무게감. 라이트(물 같은) → 미디엄 → 풀(우유 같은).</p>
      <p><strong>브뤼 (Brut):</strong> 드라이한 스파클링 와인. 잔당 12g/L 이하.</p>
      <p><strong>부케 (Bouquet):</strong> 숙성에서 오는 복합적인 향 (3차 아로마).</p>
      
      <h3>C</h3>
      <p><strong>큐베 (Cuvée):</strong> 블렌드 또는 특정 와인을 지칭. 샴페인에서는 첫 번째 압착 즙.</p>
      <p><strong>크뤼 (Cru):</strong> 포도밭의 등급. 그랑 크뤼(최상급), 프리미에 크뤼(1등급).</p>
      <p><strong>코르크 (Cork):</strong> 와인병 마개. 코르크참나무 껍질로 제작. 'Corked' = TCA 오염된 와인.</p>
      
      <h3>D</h3>
      <p><strong>디캔팅 (Decanting):</strong> 와인을 디캔터에 옮겨 공기 접촉시키거나 침전물 분리.</p>
      <p><strong>도자주 (Dosage):</strong> 샴페인 제조 마지막에 당분을 첨가하는 과정.</p>
      <p><strong>드라이 (Dry):</strong> 단맛이 없는. 잔당이 4g/L 이하인 와인.</p>
      
      <h3>F</h3>
      <p><strong>피니시 (Finish):</strong> 여운. 와인을 마신 후 풍미가 지속되는 시간과 느낌.</p>
      <p><strong>플루트 (Flute):</strong> 길고 좁은 샴페인 전용 잔.</p>
      
      <h3>L-M</h3>
      <p><strong>레그/티어 (Legs/Tears):</strong> 잔 벽을 타고 흐르는 와인 줄기. 알코올·당분의 지표.</p>
      <p><strong>말로락틱 발효 (MLF):</strong> 사과산→젖산 변환. 와인이 부드러워짐.</p>
      <p><strong>마리아주 (Mariage):</strong> 음식과 와인의 페어링. 프랑스어로 '결혼'.</p>
      <p><strong>미네랄 (Mineral):</strong> 토양에서 오는 돌·분필·금속 같은 풍미.</p>
      
      <h3>N-O</h3>
      <p><strong>논빈티지 (NV):</strong> 여러 해의 와인을 블렌딩. 연도 표기 없음.</p>
      <p><strong>노즈 (Nose):</strong> 와인의 향을 총칭. "좋은 노즈를 가진 와인".</p>
      <p><strong>오크 (Oak):</strong> 와인 숙성에 사용하는 나무통. 바닐라·토스트·스모키 풍미.</p>
      
      <h3>S-T</h3>
      <p><strong>소믈리에 (Sommelier):</strong> 와인 전문 서비스 담당자. 선별·추천·서빙.</p>
      <p><strong>스월링 (Swirling):</strong> 잔을 돌려 와인에 산소를 접촉시키는 동작.</p>
      <p><strong>탄닌 (Tannin):</strong> 포도 껍질·씨의 폴리페놀. 떫은맛과 구조감의 원인.</p>
      <p><strong>떼루아 (Terroir):</strong> 포도밭의 토양·기후·지형 등 환경의 총체.</p>
      
      <h3>V</h3>
      <p><strong>빈티지 (Vintage):</strong> 포도 수확 연도. 또는 그 해에 만든 와인.</p>
      <p><strong>비노 (Vino):</strong> 이탈리아어/스페인어로 '와인'.</p>
    `,
    faq: [
      { question: '바디감이 뭔가요?', answer: '와인이 입안에서 느껴지는 무게감입니다. 물처럼 가벼우면 라이트 바디, 우유처럼 묵직하면 풀 바디라고 합니다. 알코올, 탄닌, 잔당 등이 바디에 영향을 줍니다.' },
      { question: '와인 초보가 가장 먼저 알아야 할 용어는?', answer: '바디, 탄닌, 아로마, 드라이/스위트, 빈티지 이 5개만 알면 와인 대화의 80%가 됩니다.' },
    ],
    relatedSlugs: ['champagne-glossary', 'wine-tasting-steps', 'red-white-rose-difference'],
  },
  {
    id: 30,
    slug: 'champagne-glossary',
    category: '용어 사전',
    categorySlug: 'wine-dictionary',
    title: '샴페인 용어 사전 — 큐베, 도자주, 데고르주망',
    subtitle: '샴페인 세계의 프랑스어를 해독하다',
    description: '샴페인 전문 용어 사전. 큐베, 도자주, 데고르주망, 르뮈아주, 아상블라주 등 샴페인에서만 쓰이는 핵심 용어를 완전 정리합니다.',
    keywords: ['샴페인 용어', '큐베 뜻', '도자주 뜻', '데고르주망', '샴페인 용어 정리'],
    date: '2026-04-28',
    readTime: 8,
    content: `
      <p>샴페인의 세계에는 일반 와인에서 쓰지 않는 <strong>전문 용어</strong>들이 있습니다. 대부분 프랑스어이며, 샴페인 제조 과정과 관련된 것들입니다.</p>
      
      <h3>제조 과정 용어</h3>
      <p><strong>메토드 트라디시오넬 (Méthode Traditionnelle):</strong> 전통 방식. 병 안에서 2차 발효를 하는 샴페인 제조법. 옛날에는 '메토드 샹프누아즈'라고 했지만, 법적으로 샹파뉴 이외 지역 사용 금지.</p>
      <p><strong>아상블라주 (Assemblage):</strong> 여러 원액(품종, 밭, 빈티지)을 블렌딩하는 과정. 샴페인 하우스의 핵심 기술.</p>
      <p><strong>티라주 (Tirage):</strong> 블렌딩된 와인에 당분+효모를 넣고 병에 담아 밀봉하는 과정. 2차 발효의 시작점.</p>
      <p><strong>프리즈 드 무스 (Prise de Mousse):</strong> "거품을 잡다". 병 안에서 일어나는 2차 발효. 기포가 탄생하는 순간.</p>
      <p><strong>쉬르 리 (Sur Lie/Sur Lattes):</strong> 효모 침전물(리) 위에서 숙성하는 과정. 토스트·브리오슈 풍미의 원천.</p>
      <p><strong>오토리시스 (Autolyse):</strong> 효모의 자가 분해. 숙성 중 효모가 분해되면서 복합적인 향과 크리미한 질감이 생김.</p>
      <p><strong>르뮈아주 (Remuage):</strong> 회전과 기울이기. 효모 찌꺼기를 병목으로 모으는 과정. 뛰르(Pupitre) 또는 지로팔레트(Gyropalette) 사용.</p>
      <p><strong>데고르주망 (Dégorgement):</strong> 병목의 얼린 효모 찌꺼기를 날려보내는 과정. 라벨에 '데고르주망 날짜'가 적히기도.</p>
      <p><strong>도자주 (Dosage):</strong> 데고르주망 후 부족분을 리큐르로 채우며 당도를 조절하는 과정.</p>
      <p><strong>리큐르 데스페디시옹 (Liqueur d'Expédition):</strong> 도자주에 사용하는 당분 용액.</p>
      
      <h3>분류 용어</h3>
      <p><strong>NV (Non-Vintage):</strong> 논빈티지. 여러 해 원액 블렌딩. 하우스 스타일의 표준.</p>
      <p><strong>밀레짐 (Millésime):</strong> 빈티지. 특정 연도 포도만으로 만든 샴페인.</p>
      <p><strong>블랑 드 블랑 (Blanc de Blancs):</strong> 화이트 포도(샤르도네)만으로 만든 샴페인.</p>
      <p><strong>블랑 드 누아 (Blanc de Noirs):</strong> 레드 포도(피노 누아/뫼니에)로 만든 화이트 샴페인.</p>
      <p><strong>프레스티지 큐베 (Prestige Cuvée):</strong> 하우스 최고급 라인. 떼트 드 큐베(Tête de Cuvée)라고도.</p>
      
      <h3>생산자 용어</h3>
      <p><strong>NM (Négociant Manipulant):</strong> 포도를 사들여 만드는 대형 하우스.</p>
      <p><strong>RM (Récoltant Manipulant):</strong> 자기 밭 포도로만 만드는 그로워.</p>
      <p><strong>셰프 드 카브 (Chef de Cave):</strong> 양조 책임자. 아상블라주를 총괄하는 핵심 인물.</p>
      
      <h3>포도밭 용어</h3>
      <p><strong>그랑 크뤼 (Grand Cru):</strong> 최상급 마을 (17개). 에셸 데 크뤼 100%.</p>
      <p><strong>프리미에 크뤼 (Premier Cru):</strong> 1급 마을 (42개). 에셸 데 크뤼 90~99%.</p>
      <p><strong>에셸 데 크뤼 (Échelle des Crus):</strong> 샹파뉴의 마을 등급 시스템. 포도 가격의 기준.</p>
    `,
    faq: [
      { question: '데고르주망이 뭔가요?', answer: '샴페인 병목의 효모 찌꺼기를 얼려서 날려보내는 과정입니다. 이후 도자주(당분 조절)를 하고 코르크를 끼워 완성합니다.' },
      { question: '큐베와 프레스티지 큐베는 다른 건가요?', answer: '큐베(Cuvée)는 블렌드 또는 특정 와인을 지칭하는 일반 용어이고, 프레스티지 큐베는 하우스 최고급 라인을 의미합니다. 돔 페리뇽, 크리스탈 등이 프레스티지 큐베에 해당합니다.' },
    ],
    relatedSlugs: ['wine-glossary-basics', 'champagne-how-its-made', 'champagne-label-reading'],
  },
  {
    id: 31,
    slug: 'cheese-wine-dictionary',
    category: '용어 사전',
    categorySlug: 'wine-dictionary',
    title: '치즈 용어 사전 — 숙성, 워시드, 블루',
    subtitle: '치즈보드를 이해하는 핵심 용어 가이드',
    description: '치즈 용어 사전. 숙성 치즈, 워시드 린드, 블루 치즈, 브리, 콩테 등 치즈 종류와 와인 페어링을 위한 필수 용어 정리.',
    keywords: ['치즈 종류', '치즈 용어', '숙성 치즈', '블루 치즈', '치즈 와인 페어링'],
    date: '2026-04-30',
    readTime: 7,
    content: `
      <p>RAWISM의 치즈 셀렉션을 더 깊이 즐기기 위해, <strong>치즈의 분류와 핵심 용어</strong>를 정리했습니다. 와인과의 페어링 팁도 함께!</p>
      
      <h3>치즈 분류: 6가지 카테고리</h3>
      
      <p><strong>1. 프레시 치즈 (Fresh Cheese)</strong></p>
      <p>숙성하지 않은 치즈. 모차렐라, 부라타, 리코타, 크림치즈. 부드럽고 순한 맛. 수분이 많음.</p>
      <p>🍷 <strong>페어링:</strong> 프로세코, 소비뇽 블랑, 브뤼 샴페인</p>
      
      <p><strong>2. 연질 숙성 치즈 (Soft-Ripened)</strong></p>
      <p>겉에 하얀 곰팡이 껍질(블루미 린드). 브리, 카망베르. 크리미하고 버터 같은 질감.</p>
      <p>🍷 <strong>페어링:</strong> 샤르도네, 샴페인, 피노 누아</p>
      
      <p><strong>3. 워시드 린드 (Washed Rind)</strong></p>
      <p>소금물·맥주·브랜디로 껍질을 씻어가며 숙성. 에푸아스, 뮌스터. 강한 냄새 but 의외로 부드러운 맛.</p>
      <p>🍷 <strong>페어링:</strong> 게뷔르츠트라미너, 피노 그리, 맥주도 OK</p>
      
      <p><strong>4. 반경질 치즈 (Semi-Hard)</strong></p>
      <p>적당히 숙성. 고다, 에담, 에멘탈, 콜비잭. 온화하고 고소한 맛.</p>
      <p>🍷 <strong>페어링:</strong> 메를로, 리오하, 드라이 로제</p>
      
      <p><strong>5. 경질 치즈 (Hard Cheese)</strong></p>
      <p>장기 숙성으로 단단해진 치즈. 파르미지아노 레지아노, 콩테, 그뤼에르, 펙코리노. 감칠맛 폭발. 결정체가 씹힘.</p>
      <p>🍷 <strong>페어링:</strong> 바롤로, 카베르네 소비뇽, 빈티지 샴페인</p>
      
      <p><strong>6. 블루 치즈 (Blue Cheese)</strong></p>
      <p>내부에 푸른 곰팡이. 로크포르, 고르곤졸라, 스틸턴. 강렬하고 짭짤한 맛.</p>
      <p>🍷 <strong>페어링:</strong> 소테른(스위트 와인), 포트 와인, 드미 섹 샴페인</p>
      
      <h3>RAWISM 치즈 셀렉션 해부</h3>
      <p>RAWISM의 치즈 셀렉션(₩35,000)에는 6종의 치즈가 포함됩니다:</p>
      <ul>
        <li><strong>브리:</strong> 연질 숙성. 크리미한 입문용</li>
        <li><strong>8개월 숙성 콩테:</strong> 경질. 고소하고 감칠맛</li>
        <li><strong>에멘탈:</strong> 반경질. 구멍 뚫린 그 치즈</li>
        <li><strong>콜비잭:</strong> 반경질. 오렌지+화이트 마블링</li>
        <li><strong>크림치즈:</strong> 프레시. 부드럽고 순한</li>
        <li><strong>도피노:</strong> 연질. 허브향 가미</li>
      </ul>
      <p>스페인산 하몽, 이탈리안 제노바 살라미, 올리브, 블루베리, 크래커와 함께 제공됩니다. 소믈리에가 추천하는 샴페인과 함께라면 치즈보드 하나로 한 시간이 훌쩍.</p>
    `,
    faq: [
      { question: '치즈와 가장 잘 맞는 와인 타입은?', answer: '치즈 종류에 따라 다릅니다. 연질 치즈(브리)는 샴페인/샤르도네, 경질 치즈(콩테)는 풀바디 레드, 블루 치즈는 스위트 와인이 잘 맞습니다.' },
      { question: 'RAWISM 치즈 셀렉션에 어떤 치즈가 들어있나요?', answer: '브리, 8개월 숙성 콩테, 에멘탈, 콜비잭, 크림치즈, 도피노 6종과 함께 하몽, 살라미, 올리브, 블루베리, 크래커가 제공됩니다.' },
    ],
    relatedSlugs: ['burrata-wine-pairing', 'wine-glossary-basics', 'hanwoo-cut-wine-pairing'],
  },
  {
    id: 32,
    slug: 'hanwoo-cuts-dictionary',
    category: '용어 사전',
    categorySlug: 'wine-dictionary',
    title: '한우 부위 사전 — 뭉티기부터 살치살까지',
    subtitle: '한우를 알아야 페어링이 완성된다',
    description: '한우 부위 완전 사전. 뭉티기, 등심, 안심, 채끝, 살치살, 제비추리 등 한우 부위별 특징, 맛, 식감, 최적 와인 페어링 총정리.',
    keywords: ['한우 부위 정리', '한우 부위', '한우 부위별 맛', '뭉티기란', '한우 등급'],
    date: '2026-05-02',
    readTime: 8,
    content: `
      <p>한우를 제대로 즐기려면 <strong>부위별 특성</strong>을 아는 것이 필수입니다. 각 부위의 지방량, 식감, 풍미가 다르고, 그에 따라 최적의 조리법과 와인도 달라지니까요.</p>
      
      <h3>특수 부위 (희소 부위)</h3>
      
      <p><strong>뭉티기 (Mungtige)</strong></p>
      <p>당일 도축한 온도체(냉장하지 않은) 한우를 얇게 저며 양념 없이 즐기는 전통 방식. 부드러운 살코기 부분을 사용하며, 신선도가 생명. RAWISM의 시그니처.</p>
      <p><em>지방:</em> 적당 | <em>식감:</em> 부드럽고 녹는 듯한 | <em>맛:</em> 한우 본연의 순수한 풍미</p>
      <p>🍷 <strong>최적 와인:</strong> 브뤼 샴페인 (블랑 드 블랑)</p>
      
      <p><strong>살치살 (Salmchi-sal / Chuck Flap)</strong></p>
      <p>목심과 등심 사이. 마블링이 매우 풍부해 '꽃등심'이라 불리기도. 한 마리에서 소량만 나옴.</p>
      <p><em>지방:</em> 높음 | <em>식감:</em> 부드럽고 입에서 녹음 | <em>맛:</em> 진한 육향과 고소함</p>
      <p>🍷 <strong>최적 와인:</strong> 부르고뉴 피노 누아 또는 로제 샴페인</p>
      
      <p><strong>제비추리 (Jebichuri / Flank Steak)</strong></p>
      <p>갈비 아래쪽의 얇은 근육. 부드럽고 담백한 맛. 적당한 마블링. 한 마리에서 약 2kg만 나오는 희소 부위.</p>
      <p><em>지방:</em> 중간 | <em>식감:</em> 부드러운 씹힘 | <em>맛:</em> 담백하고 고소</p>
      <p>🍷 <strong>최적 와인:</strong> 키안티 클라시코 또는 미디엄 바디 레드</p>
      
      <p><strong>토시살 (Toshi-sal / Intercostal Meat)</strong></p>
      <p>갈비뼈 사이 근육. 갈비의 맛이 농축된 부위. 극소량 생산.</p>
      <p><em>지방:</em> 중간~높음 | <em>식감:</em> 쫄깃탱글 | <em>맛:</em> 갈비 풍미 농축</p>
      <p>🍷 <strong>최적 와인:</strong> 론 밸리 시라</p>
      
      <h3>주요 부위 (일반 부위)</h3>
      
      <p><strong>등심 (Deungsim / Rib Eye)</strong></p>
      <p>한우의 대표 부위. 마블링이 풍부하고 풍성한 육향. 구이의 왕.</p>
      <p>🍷 <strong>최적 와인:</strong> 보르도 카베르네 소비뇽 블렌드</p>
      
      <p><strong>안심 (Ansim / Tenderloin)</strong></p>
      <p>가장 부드러운 부위. 지방이 적고 섬세한 맛. 두께감 있게 구워야 제맛.</p>
      <p>🍷 <strong>최적 와인:</strong> 부르고뉴 피노 누아 (프리미에 크뤼 이상)</p>
      
      <p><strong>채끝 (Chaekkut / Striploin)</strong></p>
      <p>등심과 안심 사이. 적당한 지방에 씹는 맛이 좋음. 스테이크의 정석.</p>
      <p>🍷 <strong>최적 와인:</strong> 바로사 밸리 쉬라즈 또는 바롤로</p>
      
      <p><strong>갈비 (Galbi / Short Rib)</strong></p>
      <p>뼈에서 우러나는 깊은 맛. 양념 구이의 국민 부위.</p>
      <p>🍷 <strong>최적 와인:</strong> 로제 샴페인 또는 오프드라이 리슬링</p>
      
      <h3>한우 등급 이해하기</h3>
      <p><strong>1++:</strong> 최고 등급. 마블링 극대화. BMS(근내지방도) 8~9.</p>
      <p><strong>1+:</strong> 고급. BMS 6~7.</p>
      <p><strong>1:</strong> 상급. BMS 4~5.</p>
      <p><strong>2~3:</strong> 보통~일반.</p>
      <p>RAWISM에서는 <strong>당일 도축 1++ 등급 한우</strong>만을 사용합니다.</p>
    `,
    faq: [
      { question: '뭉티기가 뭔가요?', answer: '당일 도축한 온도체(냉장 전) 한우를 얇게 저며 양념 없이 그대로 즐기는 전통 방식입니다. 신선도가 생명이며, 한우 본연의 순수한 풍미를 경험할 수 있습니다.' },
      { question: '한우 1++ 등급은 어떤 의미인가요?', answer: '한국 한우 등급 중 최고 등급으로, 근내지방도(BMS) 8~9에 해당합니다. 마블링이 가장 풍부하고 맛이 깊습니다.' },
    ],
    relatedSlugs: ['hanwoo-cut-wine-pairing', 'mungtige-champagne-pairing', 'yukhoe-wine-pairing'],
  },
]
