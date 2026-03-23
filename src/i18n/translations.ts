// RAWISM The Black - Server-side Multilingual Translations
// This file is used for SSR (Server-Side Rendering) to generate language-specific pages

export type Language = 'ko' | 'en' | 'ja' | 'zh';

export const supportedLanguages: Language[] = ['ko', 'en', 'ja', 'zh'];

export const languageNames: Record<Language, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  zh: '中文'
};

export const languageFlags: Record<Language, string> = {
  ko: '🇰🇷',
  en: '🇺🇸',
  ja: '🇯🇵',
  zh: '🇨🇳'
};

// SEO Meta data for each language
export const seoMeta: Record<Language, {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
}> = {
  ko: {
    title: 'RAWISM The Black | 연남동 프리미엄 샴페인바 & 한우 뭉티기 | 홍대 데이트 기념일 맛집',
    description: '서울 연남동 프리미엄 샴페인바 RAWISM The Black. 당일 도축 온도체 한우 뭉티기와 샴페인이 만나는 특별한 밤. 체온이 남아있는 신선함 그대로, 부라타 치즈와 트러플의 조화. 홍대입구역 5분, 8석 한정 예약제. 2인 평균 15만원.',
    keywords: '연남동 샴페인바, 연남동 데이트, 연남동 기념일, 홍대 샴페인바, 홍대 데이트, 홍대 기념일 레스토랑, 한우 뭉티기, 트러플 육회, 연남동 분위기 좋은 곳, 기념일 레스토랑, 연남동 맛집, 홍대 데이트 코스',
    ogTitle: 'RAWISM The Black | 연남동 프리미엄 샴페인바 & 한우 뭉티기',
    ogDescription: '당일 도축 온도체 한우의 생생한 육향. 체온이 남아있는 신선함 그대로 즐기는 뭉티기와 샴페인의 만남. 홍대입구역 5분, 8석 한정 예약제.'
  },
  en: {
    title: 'RAWISM The Black | Premium Champagne Bar in Hongdae Seoul | Korean Beef Tartare',
    description: 'RAWISM The Black - Premium champagne bar in Yeonnam-dong, Seoul. Fresh same-day slaughtered Korean beef tartare (Mungti-gi) paired with champagne. Italian burrata cheese and black truffle. 5 min from Hongdae Station, 8 seats only, reservation required.',
    keywords: 'Hongdae restaurant, Yeonnam-dong restaurant, Seoul champagne bar, Korean beef tartare, Seoul date spot, Hongdae date restaurant, Seoul anniversary dinner, Yeonnam-dong fine dining, Seoul romantic restaurant, Korean raw beef, Seoul foodie, Hongdae hidden gem',
    ogTitle: 'RAWISM The Black | Premium Champagne Bar in Hongdae Seoul',
    ogDescription: 'Fresh same-day slaughtered Korean beef tartare with champagne pairing. A hidden gem in Seoul\'s trendy Yeonnam-dong. 5 min from Hongdae Station.'
  },
  ja: {
    title: 'RAWISM The Black | 弘大プレミアムシャンパンバー | 韓牛ムンティギ | ソウル延南洞',
    description: 'RAWISM The Black - ソウル延南洞のプレミアムシャンパンバー。当日屠畜の新鮮な韓牛タルタル（ムンティギ）とシャンパンのペアリング。イタリア産ブラータチーズとブラックトリュフ。弘大駅から徒歩5分、8席限定、要予約。',
    keywords: '弘大 レストラン, 延南洞 レストラン, ソウル シャンパンバー, 韓牛 ユッケ, ソウル デート, 弘大 デート, ソウル 記念日, 延南洞 グルメ, ソウル ロマンチック, 韓国 生肉',
    ogTitle: 'RAWISM The Black | 弘大プレミアムシャンパンバー | ソウル延南洞',
    ogDescription: '当日屠畜の新鮮な韓牛ムンティギとシャンパンのペアリング。ソウル延南洞の隠れ家。弘大駅から徒歩5分。'
  },
  zh: {
    title: 'RAWISM The Black | 弘大高级香槟酒吧 | 韩牛生拌 | 首尔延南洞',
    description: 'RAWISM The Black - 首尔延南洞高级香槟酒吧。当日屠宰的新鲜韩牛生拌（Mungti-gi）与香槟搭配。意大利布拉塔奶酪和黑松露。弘大站步行5分钟，仅8席，需预约。',
    keywords: '弘大餐厅, 延南洞餐厅, 首尔香槟吧, 韩牛生拌, 首尔约会, 弘大约会, 首尔纪念日, 延南洞美食, 首尔浪漫餐厅, 韩国生牛肉',
    ogTitle: 'RAWISM The Black | 弘大高级香槟酒吧 | 首尔延南洞',
    ogDescription: '当日屠宰的新鲜韩牛生拌与香槟搭配。首尔延南洞的隐藏名店。弘大站步行5分钟。'
  }
};

// Main translations object
export const translations: Record<Language, any> = {
  ko: {
    // Quote Section
    quote: {
      line1: "날것의 철학,",
      line2: "최상급 재료를 가장 순수한 방식으로."
    },
    // Navigation
    nav: {
      philosophy: "Philosophy",
      menu: "Menu",
      recommend: "추천",
      location: "Location",
      reservation: "Reservation"
    },
    // Hero Section
    hero: {
      subtitle: "연남동 프리미엄 샴페인 라운지",
      title1: "특별한 밤을",
      title2: "시작하는 곳",
      description: "당일 도축 온도체 한우 뭉티기와 샴페인이 만나는 곳",
      cta: "예약하기",
      scroll: "Scroll",
      keywords: "트러플 한우 뭉티기 · 샴페인 & 스파클링 · 프라이빗 다이닝"
    },
    // Question Section
    question: {
      title: "오늘, 특별한 밤을 원하신다면",
      subtitle: "연남동 데이트, 홍대 기념일 장소를 찾고 계신가요?",
      items: [
        "✨ 분위기와 맛, 모두를 원할 때",
        "🍾 평범한 레스토랑이 아닌 곳을 찾을 때",
        "💑 둘만의 프라이빗한 시간이 필요할 때",
        "🎁 기억에 남을 경험을 선물하고 싶을 때"
      ]
    },
    // Philosophy Section
    philosophy: {
      label: "Our Philosophy",
      titleLine1: "날것의 미학,",
      title: "RAWISM",
      subtitle: "RAW + ISM",
      description: "최상급 재료를 가장 순수한 방식으로",
      p1Title: "RAW와 ism의 결합.",
      p1Text: "로위즘(RAWISM)은 '날것'을 뜻하는 RAW와 '주의·철학'을 의미하는 ism을 결합한 이름입니다. 우리는 최상급 재료 본연의 맛을 가장 순수한 방식으로 전달하는 것을 철학으로 삼습니다.",
      p2Title: "연남동 프리미엄 샴페인바.",
      p2Text: "홍대입구역에서 도보 5분, 연남동 골목 속에 자리한 RAWISM The Black은 최상급 한우 뭉티기에 이탈리아 부라타 치즈, 블랙 트러플, 파르미지아노 레지아노가 만나는 시그니처 요리를 선보입니다.",
      p3Title: "8개의 프라이빗 테이블.",
      p3Text: "루이스폴센의 은은한 조명, 제네바 스피커가 전하는 큐레이팅된 선율. RAWISM The Black은 단순한 샴페인바가 아닌, 감각의 경험을 디자인하는 연남동 다이닝 공간입니다.",
      features: [
        { icon: "🥩", title: "당일 도축", desc: "온도체 한우" },
        { icon: "🧀", title: "부라타 치즈", desc: "이탈리아산" },
        { icon: "🍾", title: "샴페인", desc: "큐레이팅 셀렉션" },
        { icon: "✨", title: "블랙 트러플", desc: "테이블 그레이팅" }
      ]
    },
    // Menu Section
    menu: {
      label: "Menu",
      title: "Signature Menu",
      ingredientsLabel: "구성",
      finisherBadge: "Finisher",
      signature: {
        price: "₩69,000",
        name: "로위즘 뭉티기 시그니처",
        badge: "Signature",
        description: "RAWISM의 철학을 담은 시그니처 메뉴",
        story: "로위즘 뭉티기 시그니처는 RAWISM The Black의 정체성을 가장 잘 보여주는 대표 메뉴입니다.",
        whatIsTitle: "뭉티기란?",
        whatIsText: "뭉티기는 한우를 얇게 저며 양념 없이 그대로 즐기는 전통 음식입니다.",
        harmonyTitle: "최상급 재료의 완벽한 조화",
        harmonyText: "로위즘 뭉티기 시그니처 위에는 이탈리아산 부라타 치즈가 통째로 올라갑니다.",
        highlight: "매일 엄선된 최상급 한우 뭉티기 200g을 아낌없이 사용합니다.",
        pairing: "이탈리아산 부라타 치즈가 통째로 올라가고, 블랙 트러플이 눈앞에서 슬라이스되어 깊은 향을 더합니다. 파르미지아노 레지아노가 눈꽃처럼 내려앉습니다.",
        ingredients: "한우 뭉티기, 부라타 치즈, 블랙 트러플, 파르미지아노 레지아노, 소금, 후추"
      },
      items: [
        {
          name: "치즈 셀렉션",
          price: "₩35,000",
          description: "소믈리에가 큐레이팅한 6종 치즈 컬렉션",
          detail: "브리, 8개월 숙성 콩테, 에멘탈, 콜비잭, 크림치즈, 다피누아(래핑 치즈). 스페인산 하몽, 이탈리아 제노아 살라미, 그린 올리브, 블루베리와 크래커가 함께 제공됩니다.",
          ingredients: "브리, 콩테, 에멘탈, 콜비잭, 크림치즈, 다피누아, 하몽, 살라미, 올리브, 블루베리, 크래커"
        },
        {
          name: "청양 오일 육회",
          price: "₩25,000",
          description: "전통 육회에 더한 매콤한 불꽃",
          detail: "직접 만드는 고추기름 소스가 핵심입니다. 굵은 고춧가루와 파로 향을 낸 고추기름에 참기름, 연두, 설탕, 깨를 배합한 특제 소스. 정중앙 노른자를 터뜨려 비벼 드세요.",
          ingredients: "한우 육회, 청양 오일 소스, 청양고추, 다진 마늘, 노른자, 고추실"
        },
        {
          name: "아보카도 카프레제",
          price: "₩23,000",
          description: "클래식 카프레제의 현대적 재해석",
          detail: "이탈리아 카프리 섬에서 유래한 카프레제에 아보카도와 블랙 올리브를 더해 더욱 크리미하게. 아보카도는 주문 후 바로 잘라 갈변 없이 신선하게 제공됩니다.",
          ingredients: "아보카도, 미니 모짜렐라, 방울토마토, 블랙 올리브, 발사믹 드레싱, 바질"
        },
        {
          name: "들기름 육회 메밀면",
          price: "₩15,000",
          badge: "Finisher",
          description: "한 끼의 완벽한 마무리",
          detail: "고객 설문에서 의외로 가장 좋았던 메뉴로 선정. 들기름에 쯔유, 식초, 설탕을 배합한 소스가 느끼하지 않고 상큼해서 식사 후에도 가볍게 즐길 수 있습니다.",
          ingredients: "메밀면, 한우 육회, 들기름 소스, 깻잎, 조미김, 통깨, 와사비"
        }
      ]
    },
    // Experience Section
    experience: {
      label: "Experience",
      title: "The RAWISM Experience",
      subtitle: "감각으로 완성되는 경험",
      steps: [
        { step: "01", title: "Arrival", subtitle: "웰컴 스파클링", desc: "입장과 함께 제공되는 웰컴 스파클링으로 특별한 저녁의 시작을 알립니다." },
        { step: "02", title: "Ambience", subtitle: "무드 라이팅, 8개 테이블 한정", desc: "덴마크 루이스폴센 조명이 만드는 은은한 무드. 8개 테이블만의 프라이빗한 공간." },
        { step: "03", title: "Sound", subtitle: "큐레이팅 뮤직", desc: "제네바 스피커로 전해지는 큐레이팅된 재즈와 라운지 음악이 대화를 감쌉니다." },
        { step: "04", title: "Finale", subtitle: "고디바 피니시", desc: "식사의 마무리는 고디바 초콜릿과 함께. 달콤한 여운을 선물합니다." }
      ]
    },
    // Recommend Section
    recommend: {
      label: "Recommend",
      title: "이런 분께 추천드립니다",
      subtitle: "연남동 데이트, 기념일, 특별한 날을 계획 중이시라면",
      items: [
        { icon: "💕", title: "연남동 데이트", desc: "특별한 데이트를 원하는 커플", detail: "홍대/연남동에서 평범하지 않은 데이트 코스를 찾고 계신가요? 분위기와 맛 모두를 원하는 20-40대 커플에게 추천합니다." },
        { icon: "🎂", title: "기념일 디너", desc: "100일, 1주년, 생일을 축하하고 싶은 분", detail: "기념일은 특별한 장소에서. 프라이빗한 공간과 분위기 있는 조명, 샴페인이 어우러진 완벽한 기념일 디너를 경험하세요." },
        { icon: "💼", title: "비즈니스 미팅", desc: "중요한 미팅이나 접대가 있는 분", detail: "프라이빗한 공간, 품격 있는 음식, 세련된 서비스. 비즈니스 접대나 중요한 미팅에 적합한 분위기를 제공합니다." },
        { icon: "🥂", title: "샴페인 & 스파클링", desc: "좋은 술과 음식의 페어링을 즐기는 분", detail: "소믈리에가 큐레이팅한 프리미엄 샴페인과 스파클링 셀렉션. 한우 뭉티기와 샴페인의 완벽한 페어링을 경험해보세요." },
        { icon: "🍽️", title: "미식 탐험가", desc: "새롭고 특별한 맛을 찾는 분", detail: "트러플 한우 뭉티기, 부라타 치즈, 파르미지아노 레지아노의 조합. 어디서도 경험할 수 없는 시그니처 요리를 만나보세요." },
        { icon: "👨‍👩‍👧", title: "소중한 사람과 함께", desc: "부모님, 친구, 소중한 지인과의 식사", detail: "특별한 날, 소중한 사람과 함께하는 프라이빗한 저녁. 편안하면서도 품격 있는 분위기에서 대화를 나눠보세요." },
        { icon: "🌙", title: "혼자만의 시간", desc: "나를 위한 특별한 저녁", detail: "바 테이블에서 즐기는 조용한 저녁. 좋은 음악과 함께 혼자만의 시간을 보내기에 완벽한 공간입니다." },
        { icon: "🎄", title: "시즌 이벤트", desc: "크리스마스, 발렌타인, 화이트데이", detail: "특별한 시즌은 더 특별하게. 크리스마스 디너, 발렌타인데이, 화이트데이를 분위기 있는 공간에서. 연트럴파크 야경과 함께." },
        { icon: "🌿", title: "연트럴파크 산책 후", desc: "경의선숲길 산책 후 특별한 디너", detail: "연트럴파크, 경의선숲길 산책 후 완벽한 디너. 도보 2-3분 거리에서 분위기 있는 디너를 즐겨보세요." },
        { icon: "🌏", title: "한국 미식 체험", desc: "진짜 한국 먹거리 문화를 느끼고 싶은 외국인", detail: "관광지 음식이 아닌 현지인이 사랑하는 진짜 한국 미식. 신선한 한우 뭉티기와 샴페인의 특별한 페어링을 경험해보세요. English menu available." }
      ]
    },
    // Occasions Section
    occasions: {
      label: "Special Moments",
      title: "소중한 순간을 더욱 특별하게",
      subtitle: "소중한 순간을 더욱 특별하게",
      items: [
        { icon: "🎉", title: "Anniversary", subtitle: "기념일", desc: "100일, 200일, 1주년, 생일, 결혼기념일 등 특별한 기념일을 위한 공간", event: "프라이빗 공간" },
        { icon: "💑", title: "Date", subtitle: "데이트", desc: "특별한 하루를 만들고 싶은 날을 위한 프라이빗한 분위기와 은은한 조명의 로맨틱한 공간", event: "로맨틱한 분위기" },
        { icon: "🎊", title: "Celebration", subtitle: "축하", desc: "승진, 합격, 계약 성사, 취업 등 축하할 모든 순간에 샴페인과 함께 건배", event: "웰컴 샴페인 서비스" },
        { icon: "🤫", title: "Private", subtitle: "프라이빗", desc: "오늘 하루만큼은 나를 위한 시간, 혼자만의 여유 또는 소중한 사람과의 프라이빗한 저녁", event: "조용한 코너석" }
      ]
    },
    // Location Section
    location: {
      label: "Location",
      title: "오시는 길",
      address: "서울 마포구 동교로 262-4",
      zipcode: "04030",
      parking: "인근 공영주차장 이용",
      hours: "화-일 18:00 - 24:00",
      lastOrder: "라스트오더 22:30",
      closed: "매주 월요일 휴무",
      subway: "홍대입구역 3번 출구 도보 5분",
      landmarks: {
        title: "주변 랜드마크",
        items: ["연트럴파크 도보 2분", "경의선숲길 도보 3분", "동진시장 도보 3분", "홍대 걷고싶은거리 도보 8분"]
      },
      nearby: "서교동·합정동·망원동 인접",
      naverMap: "네이버 지도",
      kakaoMap: "카카오맵"
    },
    // Reviews Section
    reviews: {
      label: "Reviews",
      title: "고객 리뷰",
      subtitle: "RAWISM The Black을 경험하신 분들의 이야기",
      count: "127개의 리뷰",
      more: "더 많은 리뷰 보기 →",
      items: [
        { name: "김지현", date: "2025.01.15", rating: 5, badge: "100일 기념", review: "남자친구와 100일 기념으로 방문했어요. 뭉티기가 정말 입에서 녹더라고요! 당일 도축이라 그런지 식감이 완전 달랐어요. 샴페인도 추천해주셔서 페어링이 완벽했습니다. 조명도 은은하고 분위기 최고예요 💕" },
        { name: "박준영", date: "2025.01.10", rating: 5, badge: "데이트", review: "홍대 근처 데이트 코스 찾다가 발견했는데 대박이에요. 8테이블이라 프라이빗하고, 뭉티기 위에 트러플 갈아주는 거 너무 멋있었어요. 여자친구가 완전 좋아했습니다!" },
        { name: "이소연", date: "2025.01.05", rating: 5, badge: "재방문", review: "연남동 맛집 많이 다녀봤는데 여긴 진짜 다릅니다. 뭉티기가 뭔지 처음 알았는데, 육회랑 완전 다른 식감이에요. 부라타 치즈랑 같이 먹으면 미쳐요 🧀" },
        { name: "최민수", date: "2024.12.28", rating: 5, badge: "생일", review: "와이프 생일에 예약했습니다. 웰컴 스파클링부터 마지막 고디바 초콜릿까지 세심한 서비스에 감동받았어요. 뭉티기도 입에서 녹더라고요!" },
        { name: "정하윤", date: "2024.12.20", rating: 5, badge: "연트럴파크", review: "연트럴파크 산책하고 저녁 먹을 곳 찾다가 왔어요. 분위기가 정말 좋고, 음악도 대화하기 딱 좋은 볼륨이에요. 청양 오일 육회 매콤한 거 좋아하시면 꼭 드셔보세요 🔥" },
        { name: "강태우", date: "2024.12.15", rating: 5, badge: "1주년", review: "결혼 1주년 기념으로 방문. 덴마크 루이스폴센 조명이라니, 세심한 디테일에 감탄했습니다. 뭉티기 + 샴페인 조합은 인생 최고의 페어링이에요. 내년에도 꼭 올게요!" }
      ]
    },
    // FAQ Section
    faq: {
      label: "FAQ",
      title: "자주 묻는 질문",
      subtitle: "연남동 샴페인바 RAWISM The Black에 대해 궁금하신 점",
      items: [
        { q: "예약 없이 방문해도 되나요?", a: "RAWISM The Black은 예약제로 운영됩니다. 8개 테이블 한정으로 운영되며, 특히 금요일, 토요일, 기념일에는 예약이 필수입니다. 네이버 예약을 통해 예약 가능하며, 최소 2-3일 전 예약을 권장드립니다." },
        { q: "2인 방문 시 예상 금액은 얼마인가요?", a: "2인 기준 평균 객단가는 약 15만원입니다. 시그니처 뭉티기(69,000원) + 사이드 메뉴 + 샴페인 1병 구성을 추천드리며, 좀 더 가볍게 즐기시려면 10-12만원대로도 이용 가능합니다." },
        { q: "뭉티기가 뭔가요?", a: "뭉티기는 당일 도축한 온도체 한우를 신선한 상태 그대로 얇게 저며 즐기는 대구의 보물 같은 음식입니다. 아침에 도축된 한우가 체온이 남아있는 상태로 바로 손질되어, 일반 냉장 숙성육에서는 절대 느낄 수 없는 부드러움과 생생한 육향을 선사합니다." },
        { q: "위치가 어디인가요?", a: "서울 마포구 동교로 262-4에 위치해 있습니다. 지하철 2호선 홍대입구역 3번 출구에서 도보 5분(약 400m) 거리이며, 연트럴파크 인근 연남동 골목에 자리하고 있습니다." },
        { q: "주차가 가능한가요?", a: "매장 내 주차 공간은 없습니다. 인근 연남동 공영주차장(도보 3분)을 이용해주시거나, 샴페인을 드시는 경우 대리운전을 권장드립니다." },
        { q: "영업시간과 휴무일은 어떻게 되나요?", a: "화요일부터 일요일까지 18:00 - 24:00 영업하며, 라스트오더는 22:30입니다. 매주 월요일은 정기 휴무입니다." },
        { q: "단체 예약도 가능한가요?", a: "최대 8명까지 예약 가능합니다. 그 이상의 단체는 별도 문의 부탁드립니다. 대관은 불가합니다." }
      ]
    },
    // Reserve Section
    reserve: {
      label: "Reservation",
      title: "특별한 밤을 예약하세요",
      subtitle: "8석 한정 예약제 프라이빗 다이닝",
      notice: "금요일, 토요일, 기념일은 최소 3일 전 예약을 권장합니다",
      cta: "네이버 예약하기",
      info: {
        hours: "영업시간",
        hoursValue: "화-일 18:00 - 24:00",
        lastOrder: "라스트오더",
        lastOrderValue: "22:30",
        closed: "정기휴무",
        closedValue: "매주 월요일"
      }
    },
    // Footer
    footer: {
      name: "RAWISM The Black",
      address: "서울 마포구 동교로 262-4",
      hours: "화 - 일 18:00 - 24:00",
      closed: "월요일 휴무",
      naver: "네이버 예약으로 예약하기",
      slogan: "날것의 철학으로,<br/>당신의 특별한 밤을 위해.",
      desc: "연남동 프리미엄 샴페인바<br/>홍대입구역 5분",
      copyright: "© 2024 RAWISM The Black"
    },
    // Mobile CTA
    mobileCta: "예약하기"
  },
  en: {
    // Quote Section
    quote: {
      line1: "The philosophy of RAW,",
      line2: "Premium ingredients in their purest form."
    },
    // Navigation
    nav: {
      philosophy: "Philosophy",
      menu: "Menu",
      recommend: "Recommend",
      location: "Location",
      reservation: "Reservation"
    },
    // Hero Section
    hero: {
      subtitle: "Premium Champagne Lounge in Yeonnam-dong",
      title1: "Where Special",
      title2: "Nights Begin",
      description: "Where same-day slaughtered Korean beef tartare meets champagne",
      cta: "Reserve",
      scroll: "Scroll",
      keywords: "Truffle Korean Beef Tartare · Champagne & Sparkling · Private Dining"
    },
    // Question Section
    question: {
      title: "Looking for a Special Night?",
      subtitle: "Planning a date in Yeonnam-dong or anniversary in Hongdae?",
      items: [
        "✨ When you want both ambiance and taste",
        "🍾 When you're looking for something beyond ordinary",
        "💑 When you need private time for two",
        "🎁 When you want to gift an unforgettable experience"
      ]
    },
    // Philosophy Section
    philosophy: {
      label: "Our Philosophy",
      titleLine1: "The aesthetics of RAW,",
      title: "RAWISM",
      subtitle: "RAW + ISM",
      description: "Premium ingredients in their purest form",
      p1Title: "The union of RAW and -ism.",
      p1Text: "RAWISM combines 'RAW' meaning unprocessed, with '-ism' representing philosophy. We believe in delivering the true taste of premium ingredients in their purest form.",
      p2Title: "Premium Champagne Bar in Yeonnam-dong.",
      p2Text: "Just 5 minutes from Hongdae Station, RAWISM The Black presents signature dishes where premium Korean beef tartare meets Italian burrata cheese, black truffle, and Parmigiano-Reggiano.",
      p3Title: "8 Private Tables.",
      p3Text: "Soft lighting by Louis Poulsen, curated melodies through Geneva speakers. RAWISM The Black is not just a champagne bar, but a Yeonnam-dong dining space that designs sensory experiences.",
      features: [
        { icon: "🥩", title: "Same-day", desc: "Fresh Hanwoo" },
        { icon: "🧀", title: "Burrata", desc: "From Italy" },
        { icon: "🍾", title: "Champagne", desc: "Curated Selection" },
        { icon: "✨", title: "Black Truffle", desc: "Table Grating" }
      ]
    },
    // Menu Section
    menu: {
      label: "Menu",
      title: "Signature Menu",
      ingredientsLabel: "Ingredients",
      finisherBadge: "Finisher",
      signature: {
        price: "₩69,000",
        name: "RAWISM Signature Beef Tartare",
        badge: "Signature",
        description: "Our signature dish embodying the RAWISM philosophy",
        story: "RAWISM Signature Beef Tartare is our flagship dish that best represents RAWISM The Black's identity.",
        whatIsTitle: "What is Mungti-gi?",
        whatIsText: "Mungti-gi is a traditional Korean dish of thinly sliced fresh beef enjoyed without any seasoning.",
        harmonyTitle: "Perfect Harmony of Premium Ingredients",
        harmonyText: "Our signature beef tartare is topped with a whole Italian burrata cheese. 'RAWISM' combines 'RAW' and '-ISM (philosophy)', representing our brand's commitment to enjoying premium ingredients in their purest form.",
        highlight: "We generously use 200g of premium Korean beef (Hanwoo), carefully selected daily.",
        pairing: "Topped with a whole Italian burrata cheese, black truffle shaved tableside for deep aroma, and Parmigiano-Reggiano falling like snowflakes.",
        ingredients: "Korean beef tartare, Burrata cheese, Black truffle, Parmigiano-Reggiano, Salt, Pepper"
      },
      items: [
        {
          name: "Cheese Selection",
          price: "₩35,000",
          description: "Sommelier-curated 6-cheese collection",
          detail: "Brie, 8-month aged Comté, Emmental, Colby Jack, Cream cheese, Dauphinois (wrapped cheese). Served with Spanish Jamón, Italian Genoa salami, green olives, blueberries and crackers.",
          ingredients: "Brie, Comté, Emmental, Colby Jack, Cream cheese, Dauphinois, Jamón, Salami, Olives, Blueberries, Crackers"
        },
        {
          name: "Spicy Cheongyang Oil Beef Tartare",
          price: "₩25,000",
          description: "Traditional beef tartare with a spicy kick",
          detail: "Our house-made chili oil sauce is the key. A special blend of coarse chili flakes, green onion-infused chili oil, sesame oil, and seasonings. Break the egg yolk in the center and mix.",
          ingredients: "Korean beef tartare, Chili oil sauce, Cheongyang pepper, Minced garlic, Egg yolk, Chili threads"
        },
        {
          name: "Avocado Caprese",
          price: "₩23,000",
          description: "Modern twist on the classic Caprese",
          detail: "Classic Caprese from Italy's Capri Island, elevated with avocado and black olives for extra creaminess. Avocado is cut fresh to order, served without browning.",
          ingredients: "Avocado, Mini mozzarella, Cherry tomatoes, Black olives, Balsamic dressing, Basil"
        },
        {
          name: "Perilla Oil Beef Tartare Buckwheat Noodles",
          price: "₩15,000",
          badge: "Finisher",
          description: "The perfect finale to your meal",
          detail: "Voted 'surprisingly the best dish' in customer surveys. The perilla oil sauce with tsuyu, vinegar, and sugar is refreshing, not heavy, perfect even after a full meal.",
          ingredients: "Buckwheat noodles, Korean beef tartare, Perilla oil sauce, Perilla leaves, Seasoned seaweed, Sesame seeds, Wasabi"
        }
      ]
    },
    // Experience Section
    experience: {
      label: "Experience",
      title: "The RAWISM Experience",
      subtitle: "An experience completed by the senses",
      steps: [
        { step: "01", title: "Arrival", subtitle: "Welcome Sparkling", desc: "Your special evening begins with a welcome sparkling upon arrival." },
        { step: "02", title: "Ambience", subtitle: "Mood Lighting, 8 Tables Only", desc: "Subtle mood created by Danish Louis Poulsen lighting. A private space with only 8 tables." },
        { step: "03", title: "Sound", subtitle: "Curated Music", desc: "Curated jazz and lounge music through Geneva speakers wraps around your conversation." },
        { step: "04", title: "Finale", subtitle: "Godiva Finish", desc: "Your meal concludes with Godiva chocolates. A sweet lingering note as a gift." }
      ]
    },
    // Recommend Section
    recommend: {
      label: "Recommend",
      title: "Perfect For",
      subtitle: "Planning a date, anniversary, or special occasion in Yeonnam-dong?",
      items: [
        { icon: "💕", title: "Date Night", desc: "Couples seeking a special date", detail: "Looking for an extraordinary date course in Hongdae/Yeonnam-dong? Recommended for couples in their 20s-40s who want both ambiance and great food." },
        { icon: "🎂", title: "Anniversary Dinner", desc: "Celebrating 100 days, 1 year, birthdays", detail: "Celebrate special occasions in a special place. Experience the perfect anniversary dinner with private space, ambient lighting, and champagne." },
        { icon: "💼", title: "Business Meeting", desc: "Important meetings or client entertainment", detail: "Private space, refined cuisine, sophisticated service. Perfect atmosphere for business entertainment or important meetings." },
        { icon: "🥂", title: "Champagne Lovers", desc: "Those who enjoy fine champagne pairings", detail: "Premium champagne and sparkling selection curated by our sommelier. Experience the perfect pairing of Korean beef tartare and champagne." },
        { icon: "🍽️", title: "Food Explorers", desc: "Seeking new and unique flavors", detail: "The combination of truffle Korean beef tartare, burrata cheese, and Parmigiano-Reggiano. Discover signature dishes you won't find anywhere else." },
        { icon: "👨‍👩‍👧", title: "With Loved Ones", desc: "Dining with parents, friends, or dear ones", detail: "A private evening with your precious people on special days. Enjoy conversations in a comfortable yet refined atmosphere." },
        { icon: "🌙", title: "Solo Dining", desc: "A special evening just for yourself", detail: "A quiet evening at the bar table. Perfect space for some me-time with great music." },
        { icon: "🎄", title: "Seasonal Events", desc: "Christmas, Valentine's, White Day", detail: "Make special seasons even more special. Christmas dinner, Valentine's Day, White Day in an atmospheric space with Yeontral Park night views." },
        { icon: "🌿", title: "After Yeontral Park", desc: "Dinner after a walk along Gyeongui Line Forest", detail: "The perfect dinner after walking Yeontral Park or Gyeongui Line Forest. Just 2-3 minutes walk for an atmospheric dining experience." },
        { icon: "🌏", title: "Authentic Korean Experience", desc: "Foreigners seeking real Korean food culture", detail: "Not tourist food, but authentic Korean cuisine loved by locals. Experience the special pairing of fresh Hanwoo beef tartare and champagne. A hidden gem in Seoul's trendy Yeonnam-dong neighborhood." }
      ]
    },
    // Occasions Section
    occasions: {
      label: "Special Moments",
      title: "Make Your Moments Special",
      subtitle: "Make Your Moments Special",
      items: [
        { icon: "🎉", title: "Anniversary", subtitle: "Celebration", desc: "Perfect space for 100 days, 200 days, 1 year, birthdays, wedding anniversaries", event: "Private Space" },
        { icon: "💑", title: "Date", subtitle: "Romance", desc: "Romantic space with private atmosphere and soft lighting for your special day", event: "Romantic Ambiance" },
        { icon: "🎊", title: "Celebration", subtitle: "Toast", desc: "Toast with champagne for all celebrations - promotions, acceptances, deals, new jobs", event: "Welcome Champagne" },
        { icon: "🤫", title: "Private", subtitle: "Personal", desc: "Time for yourself today, solo relaxation or a private evening with someone special", event: "Quiet Corner Seat" }
      ]
    },
    // Location Section
    location: {
      label: "Location",
      title: "How to Find Us",
      address: "262-4 Donggyo-ro, Mapo-gu, Seoul",
      zipcode: "04030",
      parking: "Use nearby public parking",
      hours: "Tue-Sun 6:00 PM - 12:00 AM",
      lastOrder: "Last Order 10:30 PM",
      closed: "Closed every Monday",
      subway: "5 min walk from Hongdae Station Exit 3",
      landmarks: {
        title: "Nearby Landmarks",
        items: ["Yeontral Park 2 min walk", "Gyeongui Line Forest 3 min", "Dongjin Market 3 min", "Hongdae Walking Street 8 min"]
      },
      nearby: "Near Seogyo-dong, Hapjeong-dong, Mangwon-dong",
      naverMap: "Naver Map",
      kakaoMap: "Kakao Map"
    },
    // Reviews Section
    reviews: {
      label: "Reviews",
      title: "Guest Reviews",
      subtitle: "Stories from those who experienced RAWISM The Black",
      count: "127 reviews",
      more: "See more reviews →",
      items: [
        { name: "Jihyun K.", date: "Jan 15, 2025", rating: 5, badge: "100 Days", review: "Visited for our 100-day anniversary. The beef tartare literally melted in my mouth! The texture was completely different because it's same-day slaughtered. The champagne pairing they recommended was perfect. Soft lighting and amazing atmosphere 💕" },
        { name: "Junyoung P.", date: "Jan 10, 2025", rating: 5, badge: "Date", review: "Found this place looking for a date spot near Hongdae - it's amazing! With only 8 tables it's super private, and watching them shave truffle over the tartare was so impressive. My girlfriend loved it!" },
        { name: "Soyeon L.", date: "Jan 5, 2025", rating: 5, badge: "Return Visit", review: "I've been to many Yeonnam-dong restaurants but this place is truly different. I learned what Mungti-gi is for the first time - completely different texture from regular beef tartare. With burrata cheese, it's incredible 🧀" },
        { name: "Minsu C.", date: "Dec 28, 2024", rating: 5, badge: "Birthday", review: "Reserved for my wife's birthday. I was touched by the thoughtful service from welcome sparkling to Godiva chocolates at the end. The beef tartare was absolutely incredible!" },
        { name: "Hayun J.", date: "Dec 20, 2024", rating: 5, badge: "Yeontral Park", review: "Came here looking for dinner after walking in Yeontral Park. The atmosphere is amazing and the music is at just the right volume for conversation. Highly recommend the spicy Cheongyang beef tartare if you like spicy food 🔥" },
        { name: "Taewoo K.", date: "Dec 15, 2024", rating: 5, badge: "1st Anniversary", review: "Visited for our 1st wedding anniversary. Danish Louis Poulsen lighting - impressed by the attention to detail. Tartare + champagne combo was the best pairing of my life. We'll definitely be back next year!" }
      ]
    },
    // FAQ Section
    faq: {
      label: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Find answers about RAWISM The Black champagne bar in Yeonnam-dong",
      items: [
        { q: "Do I need a reservation?", a: "RAWISM The Black operates by reservation only. With only 8 tables, reservations are essential, especially on Fridays, Saturdays, and special occasions. You can book through Naver Reservation. We recommend booking at least 2-3 days in advance." },
        { q: "How much for two people?", a: "The average price for two is about ₩180,000 (~$115 USD). We recommend the Signature Tartare (₩69,000) + side dishes + 1 bottle of champagne. For a lighter option, ₩100,000-120,000 with sparkling wine is also possible." },
        { q: "What is Mungti-gi?", a: "Mungti-gi is a treasured Daegu delicacy - thinly sliced fresh beef from same-day slaughtered Korean cattle, enjoyed without seasoning. The beef is processed while still warm, offering incredible tenderness and fresh beef aroma impossible with aged meat." },
        { q: "Where are you located?", a: "We're at 262-4 Donggyo-ro, Mapo-gu, Seoul. It's a 5-minute walk (about 400m) from Hongdae Station (Line 2) Exit 3, in the Yeonnam-dong alley near Yeontral Park." },
        { q: "Is parking available?", a: "We don't have on-site parking. We recommend the nearby Yeonnam-dong public parking lot (3 min walk). If you're enjoying champagne, we recommend using a designated driver service." },
        { q: "What are your hours?", a: "We're open Tuesday through Sunday, 6:00 PM to 12:00 AM. Last order is at 10:30 PM. We're closed every Monday." },
        { q: "Can I book for a group?", a: "We accept reservations for up to 8 people. For larger groups, please contact us to check availability. Private venue rental is not available." }
      ]
    },
    // Reserve Section
    reserve: {
      label: "Reservation",
      title: "Reserve Your Special Night",
      subtitle: "8 Seats Only - Private Dining by Reservation",
      notice: "We recommend booking at least 3 days ahead for Fridays, Saturdays, and special occasions",
      cta: "Book on Naver",
      info: {
        hours: "Hours",
        hoursValue: "Tue-Sun 6PM - 12AM",
        lastOrder: "Last Order",
        lastOrderValue: "10:30 PM",
        closed: "Closed",
        closedValue: "Every Monday"
      }
    },
    // Footer
    footer: {
      name: "RAWISM The Black",
      address: "262-4 Donggyo-ro, Mapo-gu, Seoul",
      hours: "Tue - Sun 6:00 PM - 12:00 AM",
      closed: "Closed Mondays",
      naver: "Book on Naver Reservation",
      slogan: "With the philosophy of RAW,<br/>for your special night.",
      desc: "Premium Champagne Bar in Yeonnam-dong<br/>5 min walk from Hongdae Station",
      copyright: "© 2024 RAWISM The Black"
    },
    // Mobile CTA
    mobileCta: "Reserve"
  },
  ja: {
    // Quote Section
    quote: {
      line1: "生の哲学,",
      line2: "最高級の食材を最も純粋な方法で。"
    },
    // Navigation
    nav: {
      philosophy: "Philosophy",
      menu: "Menu",
      recommend: "おすすめ",
      location: "Location",
      reservation: "Reservation"
    },
    // Hero Section
    hero: {
      subtitle: "延南洞プレミアムシャンパンラウンジ",
      title1: "特別な夜が",
      title2: "始まる場所",
      description: "当日屠畜の韓牛ムンティギとシャンパンが出会う場所",
      cta: "予約する",
      scroll: "Scroll",
      keywords: "トリュフ韓牛ムンティギ · シャンパン & スパークリング · プライベートダイニング"
    },
    // Question Section
    question: {
      title: "特別な夜をお探しなら",
      subtitle: "延南洞でのデート、弘大での記念日スポットをお探しですか？",
      items: [
        "✨ 雰囲気と味、両方を求めるとき",
        "🍾 普通のレストランじゃない場所を探すとき",
        "💑 二人だけのプライベートな時間が必要なとき",
        "🎁 記憶に残る体験をプレゼントしたいとき"
      ]
    },
    // Philosophy Section
    philosophy: {
      label: "Our Philosophy",
      titleLine1: "生の美学,",
      title: "RAWISM",
      subtitle: "RAW + ISM",
      description: "最高級の食材を最も純粋な方法で",
      p1Title: "RAWとismの結合。",
      p1Text: "ロウイズム(RAWISM)は「生」を意味するRAWと「主義・哲学」を意味するismを組み合わせた名前です。私たちは最高級の食材本来の味を最も純粋な方法で届けることを哲学としています。",
      p2Title: "延南洞プレミアムシャンパンバー。",
      p2Text: "弘大入口駅から徒歩5分、延南洞の路地に位置するRAWISM The Blackは、最高級韓牛ムンティギにイタリア産ブラータチーズ、ブラックトリュフ、パルミジャーノ・レッジャーノが出会うシグネチャー料理を提供します。",
      p3Title: "8つのプライベートテーブル。",
      p3Text: "ルイスポールセンの穏やかな照明、ジュネーブスピーカーが届けるキュレーションされた旋律。RAWISM The Blackは単なるシャンパンバーではなく、感覚の体験をデザインする延南洞のダイニング空間です。",
      features: [
        { icon: "🥩", title: "当日屠畜", desc: "新鮮な韓牛" },
        { icon: "🧀", title: "ブラータ", desc: "イタリア産" },
        { icon: "🍾", title: "シャンパン", desc: "キュレーションセレクション" },
        { icon: "✨", title: "ブラックトリュフ", desc: "テーブルグレーティング" }
      ]
    },
    // Menu Section
    menu: {
      label: "Menu",
      title: "Signature Menu",
      ingredientsLabel: "構成",
      finisherBadge: "Finisher",
      signature: {
        price: "₩69,000",
        name: "ロウイズム ムンティギ シグネチャー",
        badge: "Signature",
        description: "RAWISMの哲学を込めたシグネチャーメニュー",
        story: "ロウイズム ムンティギ シグネチャーはRAWISM The Blackのアイデンティティを最もよく表す代表メニューです。",
        whatIsTitle: "ムンティギとは？",
        whatIsText: "ムンティギは韓牛を薄く切って味付けなしでそのまま楽しむ伝統料理です。",
        harmonyTitle: "プレミアム食材の完璧な調和",
        harmonyText: "ロウイズム ムンティギ シグネチャーの上にはイタリア産ブラータチーズが丸ごと乗ります。「RAWISM」は「RAW（生）」と「-ISM（哲学）」の組み合わせで、最高級の食材を純粋に楽しむブランド哲学を表しています。",
        highlight: "毎日厳選された最高級韓牛ムンティギ200gを惜しみなく使用しています。",
        pairing: "イタリア産ブラータチーズが丸ごと乗り、ブラックトリュフが目の前でスライスされて深い香りを加えます。パルミジャーノ・レッジャーノが雪のように降りかかります。",
        ingredients: "韓牛ムンティギ、ブラータチーズ、ブラックトリュフ、パルミジャーノ・レッジャーノ、塩、胡椒"
      },
      items: [
        {
          name: "チーズセレクション",
          price: "₩35,000",
          description: "ソムリエがキュレーションした6種チーズコレクション",
          detail: "ブリー、8ヶ月熟成コンテ、エメンタール、コルビージャック、クリームチーズ、ダフィノワ（ラッピングチーズ）。スペイン産ハモン、イタリア産ジェノアサラミ、グリーンオリーブ、ブルーベリーとクラッカー付き。",
          ingredients: "ブリー、コンテ、エメンタール、コルビージャック、クリームチーズ、ダフィノワ、ハモン、サラミ、オリーブ、ブルーベリー、クラッカー"
        },
        {
          name: "チョンヤンオイルユッケ",
          price: "₩25,000",
          description: "伝統ユッケにピリ辛の炎を加えて",
          detail: "自家製唐辛子オイルソースがポイント。粗挽き唐辛子と青ネギで香りをつけた唐辛子オイルにごま油、醤油、砂糖、ごまを配合した特製ソース。真ん中の卵黄を崩して混ぜてお召し上がりください。",
          ingredients: "韓牛ユッケ、唐辛子オイルソース、チョンヤン唐辛子、にんにく、卵黄、糸唐辛子"
        },
        {
          name: "アボカドカプレーゼ",
          price: "₩23,000",
          description: "クラシックカプレーゼの現代的解釈",
          detail: "イタリア・カプリ島由来のカプレーゼにアボカドとブラックオリーブを加えてさらにクリーミーに。アボカドは注文後すぐにカットして変色なしで新鮮に提供。",
          ingredients: "アボカド、ミニモッツァレラ、ミニトマト、ブラックオリーブ、バルサミコドレッシング、バジル"
        },
        {
          name: "えごま油ユッケ蕎麦",
          price: "₩15,000",
          badge: "Finisher",
          description: "完璧な締めくくり",
          detail: "お客様アンケートで「意外と一番良かったメニュー」に選ばれました。えごま油につゆ、酢、砂糖を配合したソースがさっぱりしていて、食後でも軽く楽しめます。",
          ingredients: "蕎麦、韓牛ユッケ、えごま油ソース、大葉、味付け海苔、ごま、わさび"
        }
      ]
    },
    // Experience Section
    experience: {
      label: "Experience",
      title: "The RAWISM Experience",
      subtitle: "感覚で完成する体験",
      steps: [
        { step: "01", title: "Arrival", subtitle: "ウェルカムスパークリング", desc: "入店と共に提供されるウェルカムスパークリングで特別な夜の始まりを告げます。" },
        { step: "02", title: "Ambience", subtitle: "ムードライティング、8テーブル限定", desc: "デンマーク・ルイスポールセン照明が作る穏やかなムード。8テーブルだけのプライベート空間。" },
        { step: "03", title: "Sound", subtitle: "キュレーティングミュージック", desc: "ジュネーブスピーカーから流れるキュレーションされたジャズとラウンジミュージックが会話を包みます。" },
        { step: "04", title: "Finale", subtitle: "ゴディバフィニッシュ", desc: "お食事の締めくくりはゴディバチョコレートと共に。甘い余韻をプレゼントします。" }
      ]
    },
    // Recommend Section
    recommend: {
      label: "Recommend",
      title: "こんな方におすすめ",
      subtitle: "延南洞でのデート、記念日、特別な日を計画中なら",
      items: [
        { icon: "💕", title: "延南洞デート", desc: "特別なデートを望むカップル", detail: "弘大/延南洞で普通じゃないデートコースをお探しなら。雰囲気も味も両方求める20-40代カップルにおすすめ。" },
        { icon: "🎂", title: "記念日ディナー", desc: "100日、1周年、誕生日を祝いたい方", detail: "記念日は特別な場所で。プライベート空間と雰囲気ある照明、シャンパンが調和した完璧な記念日ディナーを体験してください。" },
        { icon: "💼", title: "ビジネスミーティング", desc: "重要な会議や接待がある方", detail: "プライベートな空間、品格ある料理、洗練されたサービス。ビジネス接待や重要な会議に適した雰囲気を提供します。" },
        { icon: "🥂", title: "シャンパン愛好家", desc: "上質なシャンパンと料理のペアリングを楽しみたい方", detail: "ソムリエがキュレーションしたプレミアムシャンパンとスパークリングセレクション。韓牛ムンティギとシャンパンの完璧なペアリングを体験してください。" },
        { icon: "🍽️", title: "美食探検家", desc: "新しく特別な味を探す方", detail: "トリュフ韓牛ムンティギ、ブラータチーズ、パルミジャーノ・レッジャーノの組み合わせ。どこでも体験できないシグネチャー料理に出会ってください。" },
        { icon: "👨‍👩‍👧", title: "大切な人と一緒に", desc: "両親、友人、大切な知人との食事", detail: "特別な日、大切な人と過ごすプライベートな夜。快適でありながら品格ある雰囲気で会話を楽しんでください。" },
        { icon: "🌙", title: "一人の時間", desc: "自分へのご褒美ディナー", detail: "バーテーブルで楽しむ静かな夜。良い音楽と共に一人の時間を過ごすのに完璧な空間です。" },
        { icon: "🎄", title: "シーズンイベント", desc: "クリスマス、バレンタイン、ホワイトデー", detail: "特別なシーズンはもっと特別に。クリスマスディナー、バレンタインデー、ホワイトデーを雰囲気ある空間で。ヨントラルパークの夜景と共に。" },
        { icon: "🌿", title: "ヨントラルパーク散歩後", desc: "京義線森の道散歩後の特別なディナー", detail: "ヨントラルパーク、京義線森の道散歩後の完璧なディナー。徒歩2-3分の距離で雰囲気あるディナーをお楽しみください。" },
        { icon: "🌏", title: "本場の韓国料理体験", desc: "韓国の本当の食文化を体験したい外国人の方へ", detail: "観光客向けの料理ではなく、地元の人々が愛する本格的な韓国料理。新鮮な韓牛ムンティギとシャンパンの特別なペアリングを体験してください。ソウルのトレンディな延南洞の隠れた名店です。" }
      ]
    },
    // Occasions Section
    occasions: {
      label: "Special Moments",
      title: "大切な瞬間をもっと特別に",
      subtitle: "大切な瞬間をもっと特別に",
      items: [
        { icon: "🎉", title: "Anniversary", subtitle: "記念日", desc: "100日、200日、1周年、誕生日、結婚記念日など特別な記念日のための空間", event: "プライベート空間" },
        { icon: "💑", title: "Date", subtitle: "デート", desc: "特別な一日を作りたい日のためのプライベートな雰囲気と穏やかな照明のあるロマンチックな空間", event: "ロマンチックな雰囲気" },
        { icon: "🎊", title: "Celebration", subtitle: "お祝い", desc: "昇進、合格、契約成立、就職など祝うべきすべての瞬間にシャンパンで乾杯", event: "ウェルカムシャンパンサービス" },
        { icon: "🤫", title: "Private", subtitle: "プライベート", desc: "今日一日は自分のための時間、一人の余裕または大切な人とのプライベートな夜", event: "静かなコーナー席" }
      ]
    },
    // Location Section
    location: {
      label: "Location",
      title: "アクセス",
      address: "ソウル市麻浦区東橋路262-4",
      zipcode: "04030",
      parking: "近隣の公営駐車場をご利用ください",
      hours: "火-日 18:00 - 24:00",
      lastOrder: "ラストオーダー 22:30",
      closed: "毎週月曜定休",
      subway: "弘大入口駅3番出口 徒歩5分",
      landmarks: {
        title: "周辺ランドマーク",
        items: ["ヨントラルパーク 徒歩2分", "京義線森の道 徒歩3分", "東津市場 徒歩3分", "弘大歩きたい通り 徒歩8分"]
      },
      nearby: "西橋洞・合井洞・望遠洞 隣接",
      naverMap: "Naverマップ",
      kakaoMap: "Kakaoマップ"
    },
    // Reviews Section
    reviews: {
      label: "Reviews",
      title: "お客様の声",
      subtitle: "RAWISM The Blackを体験された方々のストーリー",
      count: "127件のレビュー",
      more: "もっと見る →",
      items: [
        { name: "キム・ジヒョン", date: "2025.01.15", rating: 5, badge: "100日記念", review: "彼氏と100日記念で訪問しました。ムンティギが本当に口の中で溶けました！当日屠畜だからか食感が全然違いました。シャンパンもおすすめしてもらってペアリングが完璧でした。照明も穏やかで雰囲気最高です 💕" },
        { name: "パク・ジュニョン", date: "2025.01.10", rating: 5, badge: "デート", review: "弘大近くでデートコース探していて見つけたんですが最高です。8テーブルだからプライベートで、ムンティギの上にトリュフ削ってくれるのがすごくかっこよかったです。彼女がとても喜びました！" },
        { name: "イ・ソヨン", date: "2025.01.05", rating: 5, badge: "再訪問", review: "延南洞のグルメたくさん行きましたがここは本当に違います。ムンティギが何か初めて知りましたが、ユッケと全然違う食感です。ブラータチーズと一緒に食べると最高です 🧀" },
        { name: "チェ・ミンス", date: "2024.12.28", rating: 5, badge: "誕生日", review: "妻の誕生日に予約しました。ウェルカムスパークリングから最後のゴディバチョコレートまで細やかなサービスに感動しました。ムンティギも口の中で溶けるようで最高でした！" },
        { name: "チョン・ハユン", date: "2024.12.20", rating: 5, badge: "ヨントラルパーク", review: "ヨントラルパーク散歩後にディナー探していて来ました。雰囲気が本当に良くて、音楽も会話にちょうど良い音量です。チョンヤンオイルユッケ、辛いの好きな方はぜひ食べてみてください 🔥" },
        { name: "カン・テウ", date: "2024.12.15", rating: 5, badge: "1周年", review: "結婚1周年記念で訪問。デンマークのルイスポールセン照明だなんて、細部にこだわりに感心しました。ムンティギ＋シャンパンの組み合わせは人生最高のペアリングです。来年もぜひ来ます！" }
      ]
    },
    // FAQ Section
    faq: {
      label: "FAQ",
      title: "よくある質問",
      subtitle: "延南洞シャンパンバー RAWISM The Blackについてのご質問",
      items: [
        { q: "予約なしでも大丈夫ですか？", a: "RAWISM The Blackは予約制で運営しています。8テーブル限定で運営しており、特に金曜日、土曜日、記念日は予約が必須です。Naver予約でご予約いただけます。最低2-3日前の予約をおすすめします。" },
        { q: "2人での予算はいくらですか？", a: "2人基準の平均客単価は約18万ウォン（約2万円）です。シグネチャームンティギ(69,000ウォン) + サイドメニュー + シャンパン1本の構成をおすすめします。もう少し軽くなら10-12万ウォンでも可能です。" },
        { q: "ムンティギとは何ですか？", a: "ムンティギは当日屠畜した韓牛を新鮮な状態のまま薄く切って楽しむ大邱の宝のような料理です。朝屠畜された韓牛が体温が残っている状態ですぐに処理され、一般の冷蔵熟成肉では絶対に感じられない柔らかさと生き生きとした肉の香りを提供します。" },
        { q: "場所はどこですか？", a: "ソウル市麻浦区東橋路262-4にあります。地下鉄2号線弘大入口駅3番出口から徒歩5分（約400m）、ヨントラルパーク近くの延南洞路地にあります。" },
        { q: "駐車場はありますか？", a: "店内駐車場はありません。近くの延南洞公営駐車場（徒歩3分）をご利用いただくか、シャンパンをお召し上がりの場合は代行運転をおすすめします。" },
        { q: "営業時間と定休日は？", a: "火曜日から日曜日まで18:00 - 24:00営業、ラストオーダーは22:30です。毎週月曜日は定休日です。" },
        { q: "団体予約も可能ですか？", a: "最大8名まで予約を受け付けています。それ以上の団体は別途お問い合わせください。貸切は不可です。" }
      ]
    },
    // Reserve Section
    reserve: {
      label: "Reservation",
      title: "特別な夜をご予約ください",
      subtitle: "8席限定 予約制プライベートダイニング",
      notice: "金曜日、土曜日、記念日は最低3日前のご予約をおすすめします",
      cta: "Naver予約",
      info: {
        hours: "営業時間",
        hoursValue: "火-日 18:00 - 24:00",
        lastOrder: "ラストオーダー",
        lastOrderValue: "22:30",
        closed: "定休日",
        closedValue: "毎週月曜日"
      }
    },
    // Footer
    footer: {
      name: "RAWISM The Black",
      address: "ソウル市麻浦区東橋路262-4",
      hours: "火 - 日 18:00 - 24:00",
      closed: "月曜定休",
      naver: "Naver予約で予約する",
      slogan: "生の哲学で、<br/>あなたの特別な夜のために。",
      desc: "延南洞プレミアムシャンパンバー<br/>弘大入口駅から徒歩5分",
      copyright: "© 2024 RAWISM The Black"
    },
    // Mobile CTA
    mobileCta: "予約する"
  },
  zh: {
    // Quote Section
    quote: {
      line1: "生的哲学,",
      line2: "以最纯粹的方式享用顶级食材。"
    },
    // Navigation
    nav: {
      philosophy: "Philosophy",
      menu: "Menu",
      recommend: "推荐",
      location: "Location",
      reservation: "Reservation"
    },
    // Hero Section
    hero: {
      subtitle: "延南洞高级香槟酒廊",
      title1: "特别之夜",
      title2: "开始的地方",
      description: "当日屠宰的新鲜韩牛生拌与香槟相遇的地方",
      cta: "立即预约",
      scroll: "Scroll",
      keywords: "松露韩牛生拌 · 香槟 & 起泡酒 · 私密用餐"
    },
    // Question Section
    question: {
      title: "如果您想要一个特别的夜晚",
      subtitle: "正在寻找延南洞约会、弘大纪念日场所吗？",
      items: [
        "✨ 当您想要氛围与美味兼得时",
        "🍾 当您在寻找非凡的餐厅时",
        "💑 当您需要二人私密时光时",
        "🎁 当您想送上难忘的体验时"
      ]
    },
    // Philosophy Section
    philosophy: {
      label: "Our Philosophy",
      titleLine1: "生的美学,",
      title: "RAWISM",
      subtitle: "RAW + ISM",
      description: "以最纯粹的方式享用顶级食材",
      p1Title: "RAW与ism的结合。",
      p1Text: "RAWISM是将代表'生'的RAW与代表'主义·哲学'的ism结合的名称。我们以最纯粹的方式传达顶级食材本身的味道为哲学。",
      p2Title: "延南洞高级香槟酒吧。",
      p2Text: "距弘大入口站步行5分钟，位于延南洞小巷的RAWISM The Black呈现顶级韩牛生拌与意大利布拉塔奶酪、黑松露、帕马森奶酪相遇的招牌料理。",
      p3Title: "8个私密餐桌。",
      p3Text: "路易斯·波尔森的柔和灯光，日内瓦音响传来的精选旋律。RAWISM The Black不仅仅是香槟酒吧，更是设计感官体验的延南洞用餐空间。",
      features: [
        { icon: "🥩", title: "当日屠宰", desc: "新鲜韩牛" },
        { icon: "🧀", title: "布拉塔", desc: "意大利进口" },
        { icon: "🍾", title: "香槟", desc: "精选系列" },
        { icon: "✨", title: "黑松露", desc: "现场刨丝" }
      ]
    },
    // Menu Section
    menu: {
      label: "Menu",
      title: "Signature Menu",
      ingredientsLabel: "配料",
      finisherBadge: "Finisher",
      signature: {
        price: "₩69,000",
        name: "RAWISM招牌生拌牛肉",
        badge: "Signature",
        description: "蕴含RAWISM哲学的招牌菜品",
        story: "RAWISM招牌生拌牛肉是最能代表RAWISM The Black身份的招牌菜。",
        whatIsTitle: "什么是Mungti-gi？",
        whatIsText: "Mungti-gi是将韩牛切成薄片，不加任何调味直接享用的传统料理。",
        harmonyTitle: "顶级食材的完美和谐",
        harmonyText: "RAWISM招牌生拌牛肉上面放着整块意大利布拉塔奶酪。\"RAWISM\"是\"RAW（生）\"和\"-ISM（主义）\"的结合，代表以最纯粹的方式享用顶级食材的品牌哲学。",
        highlight: "每天精选200克顶级韩牛生拌，毫不吝啬地使用。",
        pairing: "整块意大利布拉塔奶酪覆盖其上，黑松露在您面前现场刨片增添深邃香气。帕马森奶酪如雪花般飘落。",
        ingredients: "韩牛生拌、布拉塔奶酪、黑松露、帕马森奶酪、盐、胡椒"
      },
      items: [
        {
          name: "芝士精选",
          price: "₩35,000",
          description: "侍酒师精选6种奶酪系列",
          detail: "布里、8个月熟成孔泰、埃曼塔尔、科尔比杰克、奶油奶酪、多菲诺（包裹奶酪）。搭配西班牙火腿、意大利热那亚萨拉米、绿橄榄、蓝莓和饼干。",
          ingredients: "布里、孔泰、埃曼塔尔、科尔比杰克、奶油奶酪、多菲诺、火腿、萨拉米、橄榄、蓝莓、饼干"
        },
        {
          name: "青阳辣油生拌牛肉",
          price: "₩25,000",
          description: "传统生拌牛肉加上辣味",
          detail: "自制辣椒油酱是关键。粗辣椒粉和葱香辣椒油加上芝麻油、酱油、糖、芝麻调制的特制酱料。打散中间的蛋黄拌匀享用。",
          ingredients: "韩牛生拌、辣椒油酱、青阳辣椒、蒜末、蛋黄、辣椒丝"
        },
        {
          name: "牛油果卡普雷塞",
          price: "₩23,000",
          description: "经典卡普雷塞的现代演绎",
          detail: "源自意大利卡普里岛的卡普雷塞，加入牛油果和黑橄榄更加绵密。牛油果现切现做，新鲜无氧化。",
          ingredients: "牛油果、迷你马苏里拉、圣女果、黑橄榄、香醋酱、罗勒"
        },
        {
          name: "紫苏油生拌牛肉荞麦面",
          price: "₩15,000",
          badge: "Finisher",
          description: "完美的收尾",
          detail: "在顾客调查中被评为\"意外最好吃的菜品\"。紫苏油配日式酱油、醋、糖调制的酱汁清爽不腻，餐后也能轻松享用。",
          ingredients: "荞麦面、韩牛生拌、紫苏油酱、紫苏叶、调味海苔、芝麻、芥末"
        }
      ]
    },
    // Experience Section
    experience: {
      label: "Experience",
      title: "The RAWISM Experience",
      subtitle: "用感官完成的体验",
      steps: [
        { step: "01", title: "Arrival", subtitle: "欢迎起泡酒", desc: "入场时提供的欢迎起泡酒，宣告特别之夜的开始。" },
        { step: "02", title: "Ambience", subtitle: "氛围灯光，限8桌", desc: "丹麦路易斯·波尔森灯具营造的柔和氛围。仅8桌的私密空间。" },
        { step: "03", title: "Sound", subtitle: "精选音乐", desc: "日内瓦音响传来的精选爵士和休闲音乐环绕您的对话。" },
        { step: "04", title: "Finale", subtitle: "歌帝梵收尾", desc: "用餐的收尾是歌帝梵巧克力。送上甜蜜的余韵。" }
      ]
    },
    // Recommend Section
    recommend: {
      label: "Recommend",
      title: "推荐给这样的您",
      subtitle: "如果您正在计划延南洞约会、纪念日或特别的日子",
      items: [
        { icon: "💕", title: "延南洞约会", desc: "想要特别约会的情侣", detail: "在弘大/延南洞寻找不平凡的约会路线？推荐给追求氛围与美味兼得的20-40岁情侣。" },
        { icon: "🎂", title: "纪念日晚餐", desc: "想庆祝100天、1周年、生日的人", detail: "纪念日要在特别的地方度过。体验私密空间、氛围灯光与香槟完美融合的纪念日晚餐。" },
        { icon: "💼", title: "商务会议", desc: "有重要会议或宴请的人", detail: "私密空间、高档美食、精致服务。为商务宴请或重要会议提供适宜的氛围。" },
        { icon: "🥂", title: "香槟爱好者", desc: "喜欢享用美酒与美食搭配的人", detail: "侍酒师精选的高级香槟和起泡酒。体验韩牛生拌与香槟的完美搭配。" },
        { icon: "🍽️", title: "美食探险家", desc: "寻找新鲜特别口味的人", detail: "松露韩牛生拌、布拉塔奶酪、帕马森奶酪的组合。遇见别处无法体验的招牌料理。" },
        { icon: "👨‍👩‍👧", title: "与重要的人一起", desc: "与父母、朋友、珍贵的人用餐", detail: "特别的日子，与珍贵的人共度私密的夜晚。在舒适而有格调的氛围中畅谈。" },
        { icon: "🌙", title: "独处时光", desc: "犒赏自己的特别晚餐", detail: "在吧台享用安静的夜晚。配着好音乐度过独处时光的完美空间。" },
        { icon: "🎄", title: "季节活动", desc: "圣诞节、情人节、白色情人节", detail: "特别的季节更要特别。在氛围十足的空间度过圣诞晚餐、情人节、白色情人节。配着延特拉尔公园的夜景。" },
        { icon: "🌿", title: "延特拉尔公园散步后", desc: "京义线林荫道散步后的特别晚餐", detail: "延特拉尔公园、京义线林荫道散步后的完美晚餐。步行2-3分钟即可享用氛围十足的晚餐。" },
        { icon: "🌏", title: "正宗韩国美食体验", desc: "想体验韩国真正饮食文化的外国人", detail: "不是游客餐厅，而是当地人喜爱的正宗韩国料理。体验新鲜韩牛生拌与香槟的特别搭配。首尔潮流区延南洞的隐藏名店。" }
      ]
    },
    // Occasions Section
    occasions: {
      label: "Special Moments",
      title: "让珍贵时刻更加特别",
      subtitle: "让珍贵时刻更加特别",
      items: [
        { icon: "🎉", title: "Anniversary", subtitle: "纪念日", desc: "100天、200天、1周年、生日、结婚纪念日等特别纪念日的空间", event: "私密空间" },
        { icon: "💑", title: "Date", subtitle: "约会", desc: "为想创造特别一天的日子准备的私密氛围和柔和灯光的浪漫空间", event: "浪漫氛围" },
        { icon: "🎊", title: "Celebration", subtitle: "庆祝", desc: "升职、录取、签约、就业等所有值得庆祝的时刻，用香槟干杯", event: "欢迎香槟服务" },
        { icon: "🤫", title: "Private", subtitle: "私密", desc: "今天这一天是属于自己的时间，独自的悠闲或与重要的人共度的私密夜晚", event: "安静角落座位" }
      ]
    },
    // Location Section
    location: {
      label: "Location",
      title: "如何到达",
      address: "首尔市麻浦区东桥路262-4",
      parking: "附近公共停车场",
      zipcode: "04030",
      hours: "周二-周日 18:00 - 24:00",
      lastOrder: "最后点单 22:30",
      closed: "每周一休息",
      subway: "弘大入口站3号出口 步行5分钟",
      landmarks: {
        title: "周边地标",
        items: ["延特拉尔公园 步行2分钟", "京义线林荫道 步行3分钟", "东津市场 步行3分钟", "弘大想走的路 步行8分钟"]
      },
      nearby: "邻近西桥洞·合井洞·望远洞",
      naverMap: "Naver地图",
      kakaoMap: "Kakao地图"
    },
    // Reviews Section
    reviews: {
      label: "Reviews",
      title: "顾客评价",
      subtitle: "体验过RAWISM The Black的客人们的故事",
      count: "127条评价",
      more: "查看更多评价 →",
      items: [
        { name: "金智贤", date: "2025.01.15", rating: 5, badge: "100天纪念", review: "和男朋友来庆祝100天纪念。生拌牛肉真的入口即化！因为是当天屠宰的，口感完全不一样。推荐的香槟搭配也很完美。灯光柔和，氛围超棒 💕" },
        { name: "朴俊英", date: "2025.01.10", rating: 5, badge: "约会", review: "在弘大附近找约会地点时发现的，太棒了。只有8桌很私密，现场在生拌牛肉上刨松露的样子太帅了。女朋友非常喜欢！" },
        { name: "李素妍", date: "2025.01.05", rating: 5, badge: "再次光顾", review: "去过很多延南洞的餐厅，但这里真的不一样。第一次知道什么是Mungti-gi，和普通生拌牛肉口感完全不同。配布拉塔奶酪一起吃太绝了 🧀" },
        { name: "崔民洙", date: "2024.12.28", rating: 5, badge: "生日", review: "为妻子的生日预约的。从欢迎起泡酒到最后的歌帝梵巧克力，细致的服务让我很感动。肉脍也是入口即化，太棒了！" },
        { name: "郑夏允", date: "2024.12.20", rating: 5, badge: "延特拉尔公园", review: "在延特拉尔公园散步后来找晚餐的地方。氛围真的很好，音乐音量也正好适合聊天。喜欢辣的话一定要试试青阳辣油生拌牛肉 🔥" },
        { name: "姜泰宇", date: "2024.12.15", rating: 5, badge: "1周年", review: "来庆祝结婚1周年。丹麦路易斯·波尔森的灯具，细节用心让人印象深刻。生拌牛肉+香槟的组合是人生最棒的搭配。明年还会再来！" }
      ]
    },
    // FAQ Section
    faq: {
      label: "FAQ",
      title: "常见问题",
      subtitle: "关于延南洞香槟酒吧RAWISM The Black的疑问",
      items: [
        { q: "可以不预约直接来吗？", a: "RAWISM The Black采用预约制运营。限8桌运营，特别是周五、周六、纪念日必须预约。可通过Naver预约。建议至少提前2-3天预约。" },
        { q: "两人预算大概多少？", a: "两人平均消费约18万韩元（约1000元人民币）。推荐招牌生拌牛肉(69,000韩元) + 配菜 + 香槟1瓶的组合。想轻松一点的话10-12万韩元也可以。" },
        { q: "什么是Mungti-gi？", a: "Mungti-gi是当天屠宰的韩牛在新鲜状态下切成薄片直接享用的大邱传统美食。早上屠宰的韩牛在体温尚存的状态下立即处理，提供普通冷藏熟成肉绝对无法感受到的嫩滑和鲜活肉香。" },
        { q: "位置在哪里？", a: "位于首尔市麻浦区东桥路262-4。从地铁2号线弘大入口站3号出口步行5分钟（约400米），在延特拉尔公园附近的延南洞小巷里。" },
        { q: "可以停车吗？", a: "店内没有停车位。请使用附近的延南洞公共停车场（步行3分钟），如果要喝香槟建议使用代驾服务。" },
        { q: "营业时间和休息日是？", a: "周二至周日18:00 - 24:00营业，最后点单22:30。每周一定期休息。" },
        { q: "可以团体预约吗？", a: "最多可预约8人。更大的团体请另行咨询。不提供包场服务。" }
      ]
    },
    // Reserve Section
    reserve: {
      label: "Reservation",
      title: "预约您的特别之夜",
      subtitle: "限8席 预约制私密用餐",
      notice: "周五、周六、纪念日建议至少提前3天预约",
      cta: "Naver预约",
      info: {
        hours: "营业时间",
        hoursValue: "周二-周日 18:00 - 24:00",
        lastOrder: "最后点单",
        lastOrderValue: "22:30",
        closed: "定期休息",
        closedValue: "每周一"
      }
    },
    // Footer
    footer: {
      name: "RAWISM The Black",
      address: "首尔市麻浦区东桥路262-4",
      hours: "周二 - 周日 18:00 - 24:00",
      closed: "周一休息",
      naver: "通过Naver预约",
      slogan: "以生的哲学，<br/>为您的特别之夜。",
      desc: "延南洞高级香槟酒吧<br/>弘大入口站步行5分钟",
      copyright: "© 2024 RAWISM The Black"
    },
    // Mobile CTA
    mobileCta: "立即预约"
  }
};

// Helper function to get translation
export function t(lang: Language, key: string): any {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      // Fallback to Korean
      value = translations['ko'];
      for (const kk of keys) {
        if (value && value[kk] !== undefined) {
          value = value[kk];
        } else {
          return key;
        }
      }
      break;
    }
  }
  return value;
}

// Get language from URL path
export function getLanguageFromPath(path: string): Language {
  if (path.startsWith('/en')) return 'en';
  if (path.startsWith('/ja')) return 'ja';
  if (path.startsWith('/zh')) return 'zh';
  return 'ko';
}

// Get base path for language
export function getBasePath(lang: Language): string {
  if (lang === 'ko') return '';
  return `/${lang}`;
}
