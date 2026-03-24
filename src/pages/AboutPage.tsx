import type { FC } from 'hono/jsx'

type Language = 'ko' | 'en' | 'ja' | 'zh'

// About page translations
const aboutTranslations: Record<Language, {
  pageTitle: string
  pageSubtitle: string
  backToHome: string
  reserveCta: string
  
  // Brand Story
  storyLabel: string
  storyTitle: string
  storyP1: string
  storyP2: string
  storyP3: string
  
  // Philosophy
  philosophyLabel: string
  philosophyTitle: string
  philosophyItems: Array<{
    title: string
    desc: string
    detail: string
  }>
  
  // Space
  spaceLabel: string
  spaceTitle: string
  spaceDesc: string
  spaceFeatures: Array<{
    icon: string
    title: string
    desc: string
  }>
  
  // Team
  teamLabel: string
  teamTitle: string
  teamDesc: string
  
  // Values
  valuesLabel: string
  valuesTitle: string
  valuesItems: Array<{
    title: string
    desc: string
  }>
  
  // CTA
  ctaTitle: string
  ctaSubtitle: string
}> = {
  ko: {
    pageTitle: 'RAWISM The Black 브랜드 스토리',
    pageSubtitle: '연남동 프리미엄 샴페인바 RAWISM의 철학과 이야기',
    backToHome: '← 메인으로',
    reserveCta: '네이버 예약',
    
    storyLabel: 'Our Story',
    storyTitle: '날것의 미학, RAWISM',
    storyP1: 'RAWISM은 "날것"을 뜻하는 RAW와 "주의·철학"을 의미하는 ism을 결합한 이름입니다. 우리는 최상급 재료 본연의 맛을 가장 순수한 방식으로 전달하는 것을 철학으로 삼습니다.',
    storyP2: '2023년 연남동 골목 속에 문을 연 RAWISM The Black은 단순한 샴페인바를 넘어, 감각의 경험을 디자인하는 공간입니다. 당일 도축된 온도체 한우만을 사용하여 체온이 남아있는 신선함을 그대로 전달합니다.',
    storyP3: '매일 새벽, 그날의 최상급 한우를 직접 선별하고, 소믈리에가 큐레이팅한 샴페인과의 완벽한 페어링을 제안합니다. RAWISM The Black에서의 모든 순간이 특별한 기억으로 남길 바랍니다.',
    
    philosophyLabel: 'Philosophy',
    philosophyTitle: '우리의 철학',
    philosophyItems: [
      {
        title: 'RAW - 날것의 순수함',
        desc: '재료 본연의 맛',
        detail: '최상급 재료를 가장 순수한 방식으로 전달합니다. 불필요한 가공을 최소화하고, 재료 자체의 풍미를 극대화합니다.'
      },
      {
        title: 'CRAFT - 장인의 정성',
        desc: '매일 새벽의 선별',
        detail: '매일 새벽 그날의 최상급 한우를 직접 선별합니다. 당일 도축 온도체만을 사용하여 신선함을 보장합니다.'
      },
      {
        title: 'PAIRING - 조화의 미학',
        desc: '소믈리에 큐레이션',
        detail: '소믈리에가 엄선한 샴페인과 요리의 완벽한 조화. 각 요리에 맞는 최적의 페어링을 제안합니다.'
      },
      {
        title: 'EXPERIENCE - 감각의 경험',
        desc: '오감을 위한 설계',
        detail: '루이스폴센 조명, 제네바 스피커, 프라이빗한 공간. 모든 감각이 어우러지는 특별한 경험을 선사합니다.'
      }
    ],
    
    spaceLabel: 'Space',
    spaceTitle: '공간 이야기',
    spaceDesc: 'RAWISM The Black은 단 8석의 프라이빗 다이닝 공간입니다. 홍대입구역에서 도보 5분, 연남동 골목 속에 숨겨진 이곳에서 특별한 밤을 경험하세요.',
    spaceFeatures: [
      { icon: '🪑', title: '8석 한정', desc: '프라이빗 다이닝을 위한 최적의 규모' },
      { icon: '💡', title: '루이스폴센 조명', desc: '덴마크의 명품 조명이 만드는 분위기' },
      { icon: '🔊', title: '제네바 스피커', desc: '큐레이팅된 음악과 함께하는 시간' },
      { icon: '🍾', title: '와인 셀러', desc: '엄선된 샴페인 & 스파클링 컬렉션' },
      { icon: '❄️', title: '에어컨', desc: '쾌적한 온도 유지' },
      { icon: '📶', title: '무료 와이파이', desc: '빠른 인터넷 연결' }
    ],
    
    teamLabel: 'Team',
    teamTitle: '팀 소개',
    teamDesc: 'RAWISM The Black의 팀은 각 분야 전문가들로 구성되어 있습니다. 셰프는 매일 새벽 최상급 한우를 직접 선별하고, 소믈리에는 요리에 맞는 최적의 샴페인을 큐레이팅합니다. 서비스 팀은 모든 손님에게 잊지 못할 경험을 선사하기 위해 세심하게 준비합니다.',
    
    valuesLabel: 'Values',
    valuesTitle: '핵심 가치',
    valuesItems: [
      { title: '신선함', desc: '당일 도축 온도체 한우만을 사용합니다' },
      { title: '정직함', desc: '최상급 재료를 있는 그대로 전달합니다' },
      { title: '섬세함', desc: '모든 디테일에 정성을 담습니다' },
      { title: '특별함', desc: '잊지 못할 경험을 선사합니다' }
    ],
    
    ctaTitle: '특별한 밤을 예약하세요',
    ctaSubtitle: '8석 한정 예약제 프라이빗 다이닝'
  },
  en: {
    pageTitle: 'RAWISM The Black Brand Story',
    pageSubtitle: 'The philosophy and story behind Yeonnam-dong\'s premium champagne bar',
    backToHome: '← Back to Home',
    reserveCta: 'Book on Naver',
    
    storyLabel: 'Our Story',
    storyTitle: 'The Aesthetics of RAW, RAWISM',
    storyP1: 'RAWISM combines "RAW" meaning unprocessed, with "ism" representing philosophy and principle. Our philosophy is to deliver the authentic taste of premium ingredients in the purest way possible.',
    storyP2: 'Opened in 2023 in a Yeonnam-dong alley, RAWISM The Black transcends being just a champagne bar—it\'s a space designed to craft sensory experiences. Using only same-day slaughtered Korean beef, we deliver freshness with body heat still intact.',
    storyP3: 'Every dawn, we personally select the day\'s finest Korean beef and propose perfect pairings with sommelier-curated champagnes. We hope every moment at RAWISM The Black becomes a special memory.',
    
    philosophyLabel: 'Philosophy',
    philosophyTitle: 'Our Philosophy',
    philosophyItems: [
      {
        title: 'RAW - Purity of Ingredients',
        desc: 'Authentic taste of ingredients',
        detail: 'We deliver premium ingredients in the purest way. Minimizing unnecessary processing, maximizing the natural flavors.'
      },
      {
        title: 'CRAFT - Artisan Dedication',
        desc: 'Dawn selection every day',
        detail: 'Every dawn, we personally select the finest Korean beef. Using only same-day slaughtered beef to ensure freshness.'
      },
      {
        title: 'PAIRING - Art of Harmony',
        desc: 'Sommelier curation',
        detail: 'Perfect harmony between sommelier-selected champagnes and dishes. We suggest optimal pairings for each dish.'
      },
      {
        title: 'EXPERIENCE - Sensory Journey',
        desc: 'Designed for all senses',
        detail: 'Louis Poulsen lighting, Geneva speakers, private space. A special experience where all senses come together.'
      }
    ],
    
    spaceLabel: 'Space',
    spaceTitle: 'The Space',
    spaceDesc: 'RAWISM The Black is a private dining space with only 8 seats. Just 5 minutes walk from Hongdae Station, hidden in a Yeonnam-dong alley, experience a special night.',
    spaceFeatures: [
      { icon: '🪑', title: '8 Seats Only', desc: 'Optimal size for private dining' },
      { icon: '💡', title: 'Louis Poulsen', desc: 'Ambiance created by Danish luxury lighting' },
      { icon: '🔊', title: 'Geneva Speakers', desc: 'Time with curated music' },
      { icon: '🍾', title: 'Wine Cellar', desc: 'Curated champagne & sparkling collection' },
      { icon: '❄️', title: 'Air Conditioning', desc: 'Comfortable temperature maintained' },
      { icon: '📶', title: 'Free WiFi', desc: 'Fast internet connection' }
    ],
    
    teamLabel: 'Team',
    teamTitle: 'Our Team',
    teamDesc: 'The RAWISM The Black team consists of experts in their respective fields. Our chef personally selects the finest Korean beef every dawn, while our sommelier curates the perfect champagne for each dish. Our service team meticulously prepares to give every guest an unforgettable experience.',
    
    valuesLabel: 'Values',
    valuesTitle: 'Core Values',
    valuesItems: [
      { title: 'Freshness', desc: 'Using only same-day slaughtered Korean beef' },
      { title: 'Honesty', desc: 'Delivering premium ingredients as they are' },
      { title: 'Delicacy', desc: 'Putting care into every detail' },
      { title: 'Uniqueness', desc: 'Creating unforgettable experiences' }
    ],
    
    ctaTitle: 'Reserve Your Special Night',
    ctaSubtitle: 'Private dining with only 8 seats, reservation required'
  },
  ja: {
    pageTitle: 'RAWISM The Black ブランドストーリー',
    pageSubtitle: '延南洞プレミアムシャンパンバーRAWISMの哲学と物語',
    backToHome: '← メインへ',
    reserveCta: 'Naver予約',
    
    storyLabel: 'Our Story',
    storyTitle: '生の美学、RAWISM',
    storyP1: 'RAWISMは「生」を意味するRAWと「主義・哲学」を意味するismを組み合わせた名前です。最高級食材本来の味を最も純粋な方法で届けることを哲学としています。',
    storyP2: '2023年、延南洞の路地裏にオープンしたRAWISM The Blackは、単なるシャンパンバーを超え、感覚の体験をデザインする空間です。当日屠畜された韓牛のみを使用し、体温が残る新鮮さをそのままお届けします。',
    storyP3: '毎日夜明け、その日の最高級韓牛を直接選別し、ソムリエがキュレーションしたシャンパンとの完璧なペアリングを提案します。RAWISM The Blackでのすべての瞬間が特別な思い出となることを願っています。',
    
    philosophyLabel: 'Philosophy',
    philosophyTitle: '私たちの哲学',
    philosophyItems: [
      {
        title: 'RAW - 生の純粋さ',
        desc: '食材本来の味',
        detail: '最高級食材を最も純粋な方法でお届けします。不要な加工を最小限に抑え、食材自体の風味を最大化します。'
      },
      {
        title: 'CRAFT - 職人の心',
        desc: '毎日夜明けの選別',
        detail: '毎日夜明け、その日の最高級韓牛を直接選別します。当日屠畜のもののみを使用し、新鮮さを保証します。'
      },
      {
        title: 'PAIRING - 調和の美学',
        desc: 'ソムリエキュレーション',
        detail: 'ソムリエが厳選したシャンパンと料理の完璧な調和。各料理に合った最適なペアリングを提案します。'
      },
      {
        title: 'EXPERIENCE - 感覚の体験',
        desc: '五感のための設計',
        detail: 'ルイスポールセン照明、ジュネーブスピーカー、プライベートな空間。すべての感覚が調和する特別な体験をお届けします。'
      }
    ],
    
    spaceLabel: 'Space',
    spaceTitle: '空間の物語',
    spaceDesc: 'RAWISM The Blackはわずか8席のプライベートダイニング空間です。弘大入口駅から徒歩5分、延南洞の路地裏に隠れたこの場所で特別な夜を体験してください。',
    spaceFeatures: [
      { icon: '🪑', title: '8席限定', desc: 'プライベートダイニングに最適な規模' },
      { icon: '💡', title: 'ルイスポールセン照明', desc: 'デンマークの名品照明が作る雰囲気' },
      { icon: '🔊', title: 'ジュネーブスピーカー', desc: 'キュレーションされた音楽とともに' },
      { icon: '🍾', title: 'ワインセラー', desc: '厳選されたシャンパン＆スパークリングコレクション' },
      { icon: '❄️', title: 'エアコン', desc: '快適な温度を維持' },
      { icon: '📶', title: '無料WiFi', desc: '高速インターネット接続' }
    ],
    
    teamLabel: 'Team',
    teamTitle: 'チーム紹介',
    teamDesc: 'RAWISM The Blackのチームは各分野の専門家で構成されています。シェフは毎日夜明け最高級韓牛を直接選別し、ソムリエは料理に合った最適なシャンパンをキュレーションします。サービスチームはすべてのお客様に忘れられない体験をお届けするため、細心の注意を払って準備します。',
    
    valuesLabel: 'Values',
    valuesTitle: '核心価値',
    valuesItems: [
      { title: '新鮮さ', desc: '当日屠畜韓牛のみを使用' },
      { title: '誠実さ', desc: '最高級食材をありのままお届け' },
      { title: '繊細さ', desc: 'すべてのディテールに心を込めて' },
      { title: '特別さ', desc: '忘れられない体験を' }
    ],
    
    ctaTitle: '特別な夜をご予約ください',
    ctaSubtitle: '8席限定 予約制プライベートダイニング'
  },
  zh: {
    pageTitle: 'RAWISM The Black 品牌故事',
    pageSubtitle: '延南洞高级香槟吧RAWISM的哲学与故事',
    backToHome: '← 返回首页',
    reserveCta: 'Naver预订',
    
    storyLabel: 'Our Story',
    storyTitle: '生食美学，RAWISM',
    storyP1: 'RAWISM是将意味"生"的RAW与意味"主义·哲学"的ism结合而成的名字。我们的哲学是以最纯粹的方式传递顶级食材的原味。',
    storyP2: '2023年在延南洞小巷开业的RAWISM The Black，不仅仅是一家香槟吧，更是一个设计感官体验的空间。仅使用当日屠宰的韩牛，传递保留体温的新鲜口感。',
    storyP3: '每天凌晨，我们亲自挑选当日最顶级的韩牛，并由侍酒师策划与之完美搭配的香槟。希望在RAWISM The Black的每一刻都能成为特别的回忆。',
    
    philosophyLabel: 'Philosophy',
    philosophyTitle: '我们的哲学',
    philosophyItems: [
      {
        title: 'RAW - 生食的纯粹',
        desc: '食材的原味',
        detail: '以最纯粹的方式传递顶级食材。最小化不必要的加工，最大化食材本身的风味。'
      },
      {
        title: 'CRAFT - 匠人精神',
        desc: '每日凌晨精选',
        detail: '每天凌晨亲自挑选当日最顶级的韩牛。仅使用当日屠宰的牛肉以保证新鲜。'
      },
      {
        title: 'PAIRING - 和谐之美',
        desc: '侍酒师策划',
        detail: '侍酒师精选的香槟与料理的完美和谐。为每道菜推荐最佳搭配。'
      },
      {
        title: 'EXPERIENCE - 感官体验',
        desc: '为五感而设计',
        detail: 'Louis Poulsen灯光、Geneva音箱、私密空间。所有感官融为一体的特别体验。'
      }
    ],
    
    spaceLabel: 'Space',
    spaceTitle: '空间故事',
    spaceDesc: 'RAWISM The Black是仅有8席的私密用餐空间。从弘大入口站步行5分钟，隐藏在延南洞小巷中，在此体验特别的夜晚。',
    spaceFeatures: [
      { icon: '🪑', title: '仅8席', desc: '私密用餐的最佳规模' },
      { icon: '💡', title: 'Louis Poulsen灯光', desc: '丹麦名品灯具营造的氛围' },
      { icon: '🔊', title: 'Geneva音箱', desc: '与精选音乐共度时光' },
      { icon: '🍾', title: '酒窖', desc: '精选香槟和起泡酒系列' },
      { icon: '❄️', title: '空调', desc: '保持舒适温度' },
      { icon: '📶', title: '免费WiFi', desc: '高速网络连接' }
    ],
    
    teamLabel: 'Team',
    teamTitle: '团队介绍',
    teamDesc: 'RAWISM The Black团队由各领域专家组成。主厨每天凌晨亲自挑选最顶级的韩牛，侍酒师策划与料理相配的最佳香槟。服务团队精心准备，为每位客人带来难忘的体验。',
    
    valuesLabel: 'Values',
    valuesTitle: '核心价值',
    valuesItems: [
      { title: '新鲜', desc: '仅使用当日屠宰的韩牛' },
      { title: '真诚', desc: '原汁原味呈现顶级食材' },
      { title: '细腻', desc: '用心对待每一个细节' },
      { title: '特别', desc: '打造难忘体验' }
    ],
    
    ctaTitle: '预订您的特别之夜',
    ctaSubtitle: '仅8席 预约制私密用餐'
  }
}

// Get base path for language
function getLangPath(lang: Language): string {
  return lang === 'ko' ? '' : `/${lang}`
}

export const AboutPage: FC<{ lang: Language }> = ({ lang }) => {
  const t = aboutTranslations[lang]
  const basePath = getLangPath(lang)
  
  // Language paths for switcher
  const koPath = '/about'
  const enPath = '/en/about'
  const jaPath = '/ja/about'
  const zhPath = '/zh/about'
  
  const isKo = lang === 'ko'
  const isEn = lang === 'en'
  const isJa = lang === 'ja'
  const isZh = lang === 'zh'
  
  return (
    <div class="overflow-x-hidden min-h-screen bg-deep-black">
      {/* Navigation */}
      <nav class="fixed top-0 left-0 right-0 z-50 bg-deep-black/95 backdrop-blur-xl border-b border-white/5">
        <div class="max-w-7xl mx-auto px-8 md:px-12 py-6 flex justify-between items-center">
          <a href={`${basePath}/`} class="group">
            <img 
              src="/static/logo.png" 
              alt="RAWISM The Black" 
              class="h-8 md:h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
          </a>
          <div class="hidden lg:flex items-center gap-8">
            <a href={`${basePath}/`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500">{t.backToHome}</a>
            <a href={`${basePath}/menu`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500">Menu</a>
            <a href="https://naver.me/5qLSfCNC" target="_blank" class="text-[11px] tracking-[0.25em] uppercase text-champagne border-b border-champagne/30 pb-1">
              {t.reserveCta}
            </a>
            {/* Language Selector */}
            <div class="flex items-center gap-1 ml-4 border-l border-white/10 pl-4">
              <a href={koPath} class={`lang-btn text-[13px] px-2 py-1 rounded transition-all hover:bg-white/5 ${isKo ? 'text-champagne border-b border-champagne' : 'text-off-white/50'}`}>🇰🇷</a>
              <a href={enPath} class={`lang-btn text-[13px] px-2 py-1 rounded transition-all hover:bg-white/5 ${isEn ? 'text-champagne border-b border-champagne' : 'text-off-white/50'}`}>🇺🇸</a>
              <a href={jaPath} class={`lang-btn text-[13px] px-2 py-1 rounded transition-all hover:bg-white/5 ${isJa ? 'text-champagne border-b border-champagne' : 'text-off-white/50'}`}>🇯🇵</a>
              <a href={zhPath} class={`lang-btn text-[13px] px-2 py-1 rounded transition-all hover:bg-white/5 ${isZh ? 'text-champagne border-b border-champagne' : 'text-off-white/50'}`}>🇨🇳</a>
            </div>
          </div>
          {/* Mobile */}
          <div class="lg:hidden flex items-center gap-3">
            <div class="flex items-center gap-1 bg-white/5 rounded-full px-2 py-1">
              <a href={koPath} class={`text-[16px] w-7 h-7 flex items-center justify-center ${isKo ? '' : 'opacity-50'}`}>🇰🇷</a>
              <a href={enPath} class={`text-[16px] w-7 h-7 flex items-center justify-center ${isEn ? '' : 'opacity-50'}`}>🇺🇸</a>
              <a href={jaPath} class={`text-[16px] w-7 h-7 flex items-center justify-center ${isJa ? '' : 'opacity-50'}`}>🇯🇵</a>
              <a href={zhPath} class={`text-[16px] w-7 h-7 flex items-center justify-center ${isZh ? '' : 'opacity-50'}`}>🇨🇳</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section class="pt-32 pb-20 md:pt-40 md:pb-28 bg-deep-black relative">
        <div class="absolute inset-0 bg-gradient-to-b from-champagne/5 via-transparent to-transparent"></div>
        <div class="relative max-w-6xl mx-auto px-8 md:px-12 text-center">
          <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">About</p>
          <h1 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            {t.pageTitle}
          </h1>
          <p class="text-off-white/40 text-sm md:text-base font-light max-w-2xl mx-auto">
            {t.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section class="py-20 md:py-28 bg-soft-black/30">
        <div class="max-w-4xl mx-auto px-8 md:px-12">
          <div class="text-center mb-16">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">{t.storyLabel}</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">
              {t.storyTitle}
            </h2>
          </div>
          
          <div class="space-y-8 text-off-white/50 font-light text-base md:text-lg leading-relaxed">
            <p>{t.storyP1}</p>
            <p>{t.storyP2}</p>
            <p>{t.storyP3}</p>
          </div>
          
          {/* Quote */}
          <div class="mt-16 text-center">
            <span class="text-champagne/40 text-6xl font-playfair leading-none">"</span>
            <p class="font-noto-serif text-xl md:text-2xl text-off-white/80 leading-loose font-light -mt-8">
              <span class="text-champagne">RAW</span>ism.<br/>
              <span class="text-off-white/50">최상급 재료를 가장 순수한 방식으로.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section class="py-20 md:py-28 bg-deep-black">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <div class="text-center mb-16">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">{t.philosophyLabel}</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">
              {t.philosophyTitle}
            </h2>
          </div>
          
          <div class="grid md:grid-cols-2 gap-px bg-white/5">
            {t.philosophyItems.map((item, index) => (
              <div class="bg-deep-black p-10 md:p-12 group hover:bg-soft-black/30 transition-all duration-500">
                <span class="text-[10px] text-champagne/30 tracking-widest">0{index + 1}</span>
                <h3 class="font-playfair text-lg md:text-xl mt-4 mb-2 text-off-white/90 group-hover:text-champagne transition-colors">
                  {item.title}
                </h3>
                <p class="text-[11px] text-off-white/40 tracking-wide mb-4">{item.desc}</p>
                <p class="text-off-white/35 text-sm font-light leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Section */}
      <section class="py-20 md:py-28 bg-soft-black/30">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">{t.spaceLabel}</p>
              <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide mb-8">
                {t.spaceTitle}
              </h2>
              <p class="text-off-white/50 font-light leading-relaxed mb-10">
                {t.spaceDesc}
              </p>
              
              <div class="grid grid-cols-2 gap-4">
                {t.spaceFeatures.map((feature) => (
                  <div class="border border-white/5 p-4 hover:border-champagne/20 transition-colors">
                    <span class="text-2xl mb-2 block">{feature.icon}</span>
                    <h4 class="text-off-white/80 text-sm font-medium mb-1">{feature.title}</h4>
                    <p class="text-off-white/40 text-xs">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div class="relative">
              <div class="aspect-[4/5] bg-soft-black overflow-hidden">
                <img 
                  src="/static/menu_signature.jpg" 
                  alt="RAWISM The Black Interior"
                  class="w-full h-full object-cover opacity-80"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section class="py-20 md:py-28 bg-deep-black">
        <div class="max-w-4xl mx-auto px-8 md:px-12">
          <div class="text-center mb-16">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">{t.valuesLabel}</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">
              {t.valuesTitle}
            </h2>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.valuesItems.map((item) => (
              <div class="text-center">
                <h4 class="font-playfair text-xl text-champagne mb-3">{item.title}</h4>
                <p class="text-off-white/40 text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class="py-20 md:py-28 bg-soft-black/30">
        <div class="max-w-4xl mx-auto px-8 md:px-12 text-center">
          <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">{t.teamLabel}</p>
          <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide mb-8">
            {t.teamTitle}
          </h2>
          <p class="text-off-white/50 font-light leading-relaxed max-w-2xl mx-auto">
            {t.teamDesc}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 md:py-32 bg-deep-black relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-champagne/5 via-transparent to-champagne/5"></div>
        <div class="relative max-w-3xl mx-auto px-8 md:px-12 text-center">
          <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide mb-6">
            {t.ctaTitle}
          </h2>
          <p class="text-off-white/40 text-sm font-light mb-10">
            {t.ctaSubtitle}
          </p>
          <a href="https://naver.me/5qLSfCNC" target="_blank" 
             class="inline-flex items-center gap-3 px-16 py-4 bg-champagne hover:bg-champagne/90 transition-all duration-500">
            <svg class="w-4 h-4 text-deep-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
            </svg>
            <span class="text-[11px] tracking-[0.2em] uppercase text-deep-black font-medium">{t.reserveCta}</span>
          </a>
        </div>
      </section>

      {/* Explore More - Internal Links */}
      <section class="py-20 bg-deep-black">
        <div class="max-w-5xl mx-auto px-8 md:px-12">
          <h2 class="font-playfair text-2xl md:text-3xl font-light tracking-wide text-center mb-4 text-off-white">더 알아보기</h2>
          <p class="text-off-white/40 text-xs text-center mb-12 tracking-wider">RAWISM의 다양한 이야기를 만나보세요</p>
          <div class="grid md:grid-cols-4 gap-6">
            <a href="/quiz" class="group block p-6 border border-white/5 hover:border-champagne/30 transition-all duration-500 text-center">
              <span class="text-2xl mb-3 block">🍾</span>
              <h3 class="font-playfair text-sm text-off-white group-hover:text-champagne transition-colors mb-2">Wine Quiz</h3>
              <p class="text-off-white/30 text-[10px] tracking-wider">나에게 맞는 샴페인 찾기</p>
            </a>
            <a href="/gallery" class="group block p-6 border border-white/5 hover:border-champagne/30 transition-all duration-500 text-center">
              <span class="text-2xl mb-3 block">📸</span>
              <h3 class="font-playfair text-sm text-off-white group-hover:text-champagne transition-colors mb-2">Gallery</h3>
              <p class="text-off-white/30 text-[10px] tracking-wider">RAWISM의 공간과 분위기</p>
            </a>
            <a href="/blog" class="group block p-6 border border-white/5 hover:border-champagne/30 transition-all duration-500 text-center">
              <span class="text-2xl mb-3 block">📝</span>
              <h3 class="font-playfair text-sm text-off-white group-hover:text-champagne transition-colors mb-2">Blog</h3>
              <p class="text-off-white/30 text-[10px] tracking-wider">와인 칼럼 & 다이닝 매거진</p>
            </a>
            <a href="/menu" class="group block p-6 border border-white/5 hover:border-champagne/30 transition-all duration-500 text-center">
              <span class="text-2xl mb-3 block">🍽️</span>
              <h3 class="font-playfair text-sm text-off-white group-hover:text-champagne transition-colors mb-2">Menu</h3>
              <p class="text-off-white/30 text-[10px] tracking-wider">시그니처 메뉴 & 페어링</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-12 bg-deep-black border-t border-white/5">
        <div class="max-w-6xl mx-auto px-8 md:px-12 text-center">
          <div class="flex flex-wrap justify-center gap-6 mb-6">
            <a href="/" class="text-off-white/30 text-[10px] tracking-[0.2em] hover:text-champagne transition-colors">Home</a>
            <a href="/wine" class="text-off-white/30 text-[10px] tracking-[0.2em] hover:text-champagne transition-colors">Wine Guide</a>
            <a href="/gallery" class="text-off-white/30 text-[10px] tracking-[0.2em] hover:text-champagne transition-colors">Gallery</a>
            <a href="/blog" class="text-off-white/30 text-[10px] tracking-[0.2em] hover:text-champagne transition-colors">Blog</a>
            <a href="/quiz" class="text-off-white/30 text-[10px] tracking-[0.2em] hover:text-champagne transition-colors">Quiz</a>
            <a href="/menu" class="text-off-white/30 text-[10px] tracking-[0.2em] hover:text-champagne transition-colors">Menu</a>
          </div>
          <a href="tel:02-332-7753" class="inline-block text-champagne/60 text-[10px] tracking-[0.2em] hover:text-champagne transition-colors mb-4">
            📞 02-332-7753
          </a>
          <p class="text-off-white/15 text-[10px] tracking-[0.3em]">
            © 2024 RAWISM The Black
          </p>
        </div>
      </footer>
    </div>
  )
}
