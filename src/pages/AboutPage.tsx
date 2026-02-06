// About Page Component - Brand Story for SEO
type Language = 'ko' | 'en' | 'ja' | 'zh'

function getLangPath(lang: Language): string {
  return lang === 'ko' ? '/' : `/${lang}`
}

const aboutText = {
  ko: {
    pageTitle: 'About',
    pageSubtitle: '날것의 철학, ROWISM',
    backToHome: '← 홈으로',
    reserveBtn: '예약하기',
    storyTitle: 'Our Story',
    storySubtitle: 'ROWISM의 시작',
    story1Title: 'RAW + ism = ROWISM',
    story1Text: '로위즘(ROWISM)은 \'날것\'을 뜻하는 RAW와 \'주의·철학\'을 의미하는 ism을 결합한 이름입니다. 우리는 최상급 재료 본연의 맛을 가장 순수한 방식으로 전달하는 것을 철학으로 삼습니다.',
    story2Title: '연남동의 숨은 보석',
    story2Text: '홍대입구역에서 도보 5분, 연남동 골목 속에 자리한 ROWISM The Black은 프리미엄 샴페인과 당일 도축 한우 뭉티기가 만나는 유일한 공간입니다.',
    story3Title: '8석의 프라이빗 다이닝',
    story3Text: '루이스폴센의 은은한 조명, 제네바 스피커가 전하는 큐레이팅된 선율. 단 8석만을 위한 특별한 경험을 선사합니다.',
    philosophyTitle: 'Philosophy',
    philosophySubtitle: '우리의 철학',
    philosophy1: '최상급 재료만을 사용합니다',
    philosophy1Desc: '당일 도축 온도체 한우, 이탈리아산 부라타 치즈, 프랑스산 블랙 트러플',
    philosophy2: '본연의 맛을 존중합니다',
    philosophy2Desc: '최소한의 조리로 재료가 가진 고유의 풍미를 극대화합니다',
    philosophy3: '완벽한 페어링을 추구합니다',
    philosophy3Desc: '소믈리에가 엄선한 샴페인과 스파클링으로 미식의 완성을 제안합니다',
    philosophy4: '특별한 순간을 디자인합니다',
    philosophy4Desc: '기념일, 데이트, 프로포즈... 당신의 소중한 순간을 위한 무대를 만듭니다',
    spaceTitle: 'Space',
    spaceSubtitle: '공간의 미학',
    space1: '루이스폴센 조명',
    space1Desc: '덴마크 명품 조명 브랜드의 은은한 빛이 만드는 분위기',
    space2: '제네바 스피커',
    space2Desc: '스위스 하이엔드 오디오로 즐기는 큐레이팅된 음악',
    space3: '프라이빗 테이블',
    space3Desc: '단 8석, 예약제로 운영되는 프라이빗한 공간',
    space4: '와인 셀러',
    space4Desc: '엄선된 샴페인과 스파클링 와인 컬렉션',
    teamTitle: 'Team',
    teamSubtitle: '함께하는 사람들',
    team1: '셰프',
    team1Desc: '한우의 본연의 맛을 살리는 최소한의 조리 철학',
    team2: '소믈리에',
    team2Desc: '음식과 완벽한 조화를 이루는 와인 페어링 전문',
    team3: '서비스',
    team3Desc: '특별한 순간을 더욱 빛나게 하는 세심한 케어',
    visitTitle: 'Visit Us',
    visitSubtitle: '방문 안내',
    address: '서울 마포구 동교로 262-4',
    addressDetail: '연남동, 홍대입구역 3번 출구 도보 5분',
    hours: '화 - 일 18:00 - 24:00',
    closed: '매주 월요일 휴무',
    parking: '인근 공영주차장 이용'
  },
  en: {
    pageTitle: 'About',
    pageSubtitle: 'The Philosophy of Raw, ROWISM',
    backToHome: '← Home',
    reserveBtn: 'Reserve',
    storyTitle: 'Our Story',
    storySubtitle: 'The Beginning of ROWISM',
    story1Title: 'RAW + ism = ROWISM',
    story1Text: 'ROWISM combines "RAW" meaning unprocessed and "ism" meaning philosophy. We believe in delivering the purest taste of premium ingredients.',
    story2Title: 'Hidden Gem in Yeonnam-dong',
    story2Text: '5 minutes walk from Hongdae Station, ROWISM The Black is the only place where premium champagne meets same-day slaughtered Hanwoo tartare.',
    story3Title: '8 Seats Private Dining',
    story3Text: 'Louis Poulsen lighting, Geneva speakers with curated music. A special experience reserved for only 8 seats.',
    philosophyTitle: 'Philosophy',
    philosophySubtitle: 'Our Beliefs',
    philosophy1: 'Only Premium Ingredients',
    philosophy1Desc: 'Same-day slaughtered Hanwoo, Italian burrata, French black truffle',
    philosophy2: 'Respect for Natural Flavors',
    philosophy2Desc: 'Minimal cooking to maximize inherent flavors of ingredients',
    philosophy3: 'Perfect Pairing',
    philosophy3Desc: 'Sommelier-selected champagne and sparkling wines',
    philosophy4: 'Designing Special Moments',
    philosophy4Desc: 'Anniversary, date, proposal... creating the stage for your precious moments',
    spaceTitle: 'Space',
    spaceSubtitle: 'Aesthetics of Space',
    space1: 'Louis Poulsen Lighting',
    space1Desc: 'Ambient atmosphere created by Danish luxury lighting',
    space2: 'Geneva Speakers',
    space2Desc: 'Curated music through Swiss high-end audio',
    space3: 'Private Tables',
    space3Desc: 'Only 8 seats, reservation-only private space',
    space4: 'Wine Cellar',
    space4Desc: 'Curated champagne and sparkling wine collection',
    teamTitle: 'Team',
    teamSubtitle: 'Our People',
    team1: 'Chef',
    team1Desc: 'Minimal cooking philosophy to preserve Hanwoo\'s natural taste',
    team2: 'Sommelier',
    team2Desc: 'Expert wine pairing that harmonizes with food',
    team3: 'Service',
    team3Desc: 'Attentive care that makes special moments shine',
    visitTitle: 'Visit Us',
    visitSubtitle: 'Location',
    address: '262-4 Donggyo-ro, Mapo-gu, Seoul',
    addressDetail: 'Yeonnam-dong, 5 min walk from Hongdae Station Exit 3',
    hours: 'Tue - Sun 18:00 - 24:00',
    closed: 'Closed on Mondays',
    parking: 'Public parking nearby'
  },
  ja: {
    pageTitle: 'About',
    pageSubtitle: '生の哲学、ROWISM',
    backToHome: '← ホームへ',
    reserveBtn: '予約する',
    storyTitle: 'Our Story',
    storySubtitle: 'ROWISMの始まり',
    story1Title: 'RAW + ism = ROWISM',
    story1Text: 'ROWISM（ロウイズム）は「生」を意味するRAWと「主義・哲学」を意味するismを組み合わせた名前です。最高級食材本来の味を最も純粋な方法でお届けします。',
    story2Title: '延南洞の隠れた宝石',
    story2Text: '弘大入口駅から徒歩5分、延南洞の路地に位置するROWISM The Blackは、プレミアムシャンパンと当日屠畜韓牛タルタルが出会う唯一の空間です。',
    story3Title: '8席のプライベートダイニング',
    story3Text: 'ルイスポールセンの照明、ジュネーブスピーカーが奏でる音楽。8席限定の特別な体験をお届けします。',
    philosophyTitle: 'Philosophy',
    philosophySubtitle: '私たちの哲学',
    philosophy1: '最高級食材のみを使用',
    philosophy1Desc: '当日屠畜韓牛、イタリア産ブッラータ、フランス産ブラックトリュフ',
    philosophy2: '本来の味を尊重',
    philosophy2Desc: '最小限の調理で食材固有の風味を最大化',
    philosophy3: '完璧なペアリングを追求',
    philosophy3Desc: 'ソムリエ厳選のシャンパンとスパークリング',
    philosophy4: '特別な瞬間をデザイン',
    philosophy4Desc: '記念日、デート、プロポーズ...大切な瞬間のための舞台を',
    spaceTitle: 'Space',
    spaceSubtitle: '空間の美学',
    space1: 'ルイスポールセン照明',
    space1Desc: 'デンマーク高級照明ブランドが作る雰囲気',
    space2: 'ジュネーブスピーカー',
    space2Desc: 'スイスハイエンドオーディオで楽しむ音楽',
    space3: 'プライベートテーブル',
    space3Desc: '8席限定、予約制のプライベート空間',
    space4: 'ワインセラー',
    space4Desc: '厳選されたシャンパンとスパークリングワイン',
    teamTitle: 'Team',
    teamSubtitle: '共に歩む人々',
    team1: 'シェフ',
    team1Desc: '韓牛本来の味を活かす最小限の調理哲学',
    team2: 'ソムリエ',
    team2Desc: '料理と完璧な調和を成すワインペアリング',
    team3: 'サービス',
    team3Desc: '特別な瞬間をより輝かせる細やかなケア',
    visitTitle: 'Visit Us',
    visitSubtitle: 'アクセス',
    address: 'ソウル市麻浦区東橋路262-4',
    addressDetail: '延南洞、弘大入口駅3番出口から徒歩5分',
    hours: '火 - 日 18:00 - 24:00',
    closed: '月曜定休',
    parking: '近隣公営駐車場利用'
  },
  zh: {
    pageTitle: 'About',
    pageSubtitle: '生食哲学，ROWISM',
    backToHome: '← 返回首页',
    reserveBtn: '预约',
    storyTitle: 'Our Story',
    storySubtitle: 'ROWISM的起源',
    story1Title: 'RAW + ism = ROWISM',
    story1Text: 'ROWISM结合了意为"生"的RAW和意为"主义·哲学"的ism。我们以最纯粹的方式传递顶级食材的本真味道。',
    story2Title: '延南洞的隐藏瑰宝',
    story2Text: '距弘大站步行5分钟，ROWISM The Black是顶级香槟与当日屠宰韩牛肉脍相遇的唯一空间。',
    story3Title: '8席私密用餐',
    story3Text: 'Louis Poulsen灯光，Geneva音响播放的精选音乐。仅为8席打造的特别体验。',
    philosophyTitle: 'Philosophy',
    philosophySubtitle: '我们的理念',
    philosophy1: '只用顶级食材',
    philosophy1Desc: '当日屠宰韩牛、意大利布拉塔、法国黑松露',
    philosophy2: '尊重原味',
    philosophy2Desc: '最少的烹饪最大化食材固有风味',
    philosophy3: '追求完美搭配',
    philosophy3Desc: '侍酒师精选香槟和起泡酒',
    philosophy4: '设计特别时刻',
    philosophy4Desc: '纪念日、约会、求婚...为珍贵时刻打造舞台',
    spaceTitle: 'Space',
    spaceSubtitle: '空间美学',
    space1: 'Louis Poulsen灯光',
    space1Desc: '丹麦奢侈灯具品牌营造的氛围',
    space2: 'Geneva音响',
    space2Desc: '瑞士高端音响播放精选音乐',
    space3: '私密餐桌',
    space3Desc: '仅8席，预约制私密空间',
    space4: '酒窖',
    space4Desc: '精选香槟和起泡酒收藏',
    teamTitle: 'Team',
    teamSubtitle: '我们的团队',
    team1: '主厨',
    team1Desc: '以最少烹饪保留韩牛本味的哲学',
    team2: '侍酒师',
    team2Desc: '与美食完美和谐的葡萄酒搭配专家',
    team3: '服务',
    team3Desc: '让特别时刻更加闪耀的细心关怀',
    visitTitle: 'Visit Us',
    visitSubtitle: '访问指南',
    address: '首尔市麻浦区东桥路262-4',
    addressDetail: '延南洞，弘大站3号出口步行5分钟',
    hours: '周二 - 周日 18:00 - 24:00',
    closed: '周一休息',
    parking: '附近公共停车场'
  }
}

export function AboutPage({ lang }: { lang: Language }) {
  const homePath = getLangPath(lang)
  const text = aboutText[lang]
  
  return (
    <div class="min-h-screen bg-deep-black text-off-white font-pretendard">
      {/* Navigation */}
      <nav class="fixed top-0 left-0 right-0 z-50 bg-deep-black/95 backdrop-blur-xl border-b border-white/5">
        <div class="max-w-7xl mx-auto px-8 md:px-12 py-6 flex justify-between items-center">
          <a href={homePath} class="group">
            <img src="/static/logo.png" alt="ROWISM The Black" class="h-8 md:h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
          </a>
          <div class="flex items-center gap-6">
            <a href={homePath} class="text-[11px] tracking-[0.25em] uppercase text-off-white/50 hover:text-champagne transition-colors">{text.backToHome}</a>
            <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer" class="px-6 py-2 bg-champagne text-deep-black text-[11px] tracking-[0.15em] uppercase hover:bg-champagne/90 transition-colors">{text.reserveBtn}</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section class="pt-32 pb-20 px-8 md:px-12">
        <div class="max-w-6xl mx-auto text-center">
          <p class="text-[10px] tracking-[0.5em] text-champagne/60 mb-6 uppercase">ROWISM The Black</p>
          <h1 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">{text.pageTitle}</h1>
          <p class="text-off-white/50 text-sm md:text-base max-w-xl mx-auto">{text.pageSubtitle}</p>
        </div>
      </section>

      {/* Story Section */}
      <section class="py-20 px-8 md:px-12 bg-soft-black/30">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">{text.storyTitle}</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">{text.storySubtitle}</h2>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="p-8 border border-white/5 hover:border-champagne/20 transition-colors">
              <span class="text-champagne/40 text-[10px] tracking-widest">01</span>
              <h3 class="font-playfair text-lg mt-4 mb-4 text-off-white">{text.story1Title}</h3>
              <p class="text-off-white/40 text-sm font-light leading-relaxed">{text.story1Text}</p>
            </div>
            <div class="p-8 border border-white/5 hover:border-champagne/20 transition-colors">
              <span class="text-champagne/40 text-[10px] tracking-widest">02</span>
              <h3 class="font-playfair text-lg mt-4 mb-4 text-off-white">{text.story2Title}</h3>
              <p class="text-off-white/40 text-sm font-light leading-relaxed">{text.story2Text}</p>
            </div>
            <div class="p-8 border border-white/5 hover:border-champagne/20 transition-colors">
              <span class="text-champagne/40 text-[10px] tracking-widest">03</span>
              <h3 class="font-playfair text-lg mt-4 mb-4 text-off-white">{text.story3Title}</h3>
              <p class="text-off-white/40 text-sm font-light leading-relaxed">{text.story3Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section class="py-20 px-8 md:px-12">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">{text.philosophyTitle}</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">{text.philosophySubtitle}</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-px bg-white/5">
            <div class="bg-deep-black p-10 group hover:bg-soft-black/30 transition-colors">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-2xl">🥩</span>
                <h3 class="font-playfair text-lg text-off-white group-hover:text-champagne transition-colors">{text.philosophy1}</h3>
              </div>
              <p class="text-off-white/40 text-sm font-light">{text.philosophy1Desc}</p>
            </div>
            <div class="bg-deep-black p-10 group hover:bg-soft-black/30 transition-colors">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-2xl">✨</span>
                <h3 class="font-playfair text-lg text-off-white group-hover:text-champagne transition-colors">{text.philosophy2}</h3>
              </div>
              <p class="text-off-white/40 text-sm font-light">{text.philosophy2Desc}</p>
            </div>
            <div class="bg-deep-black p-10 group hover:bg-soft-black/30 transition-colors">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-2xl">🍾</span>
                <h3 class="font-playfair text-lg text-off-white group-hover:text-champagne transition-colors">{text.philosophy3}</h3>
              </div>
              <p class="text-off-white/40 text-sm font-light">{text.philosophy3Desc}</p>
            </div>
            <div class="bg-deep-black p-10 group hover:bg-soft-black/30 transition-colors">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-2xl">💫</span>
                <h3 class="font-playfair text-lg text-off-white group-hover:text-champagne transition-colors">{text.philosophy4}</h3>
              </div>
              <p class="text-off-white/40 text-sm font-light">{text.philosophy4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Space Section */}
      <section class="py-20 px-8 md:px-12 bg-soft-black/30">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">{text.spaceTitle}</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">{text.spaceSubtitle}</h2>
          </div>
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center p-6">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-champagne/10 flex items-center justify-center">
                <span class="text-2xl">💡</span>
              </div>
              <h3 class="font-playfair text-base text-off-white mb-2">{text.space1}</h3>
              <p class="text-off-white/40 text-xs">{text.space1Desc}</p>
            </div>
            <div class="text-center p-6">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-champagne/10 flex items-center justify-center">
                <span class="text-2xl">🎵</span>
              </div>
              <h3 class="font-playfair text-base text-off-white mb-2">{text.space2}</h3>
              <p class="text-off-white/40 text-xs">{text.space2Desc}</p>
            </div>
            <div class="text-center p-6">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-champagne/10 flex items-center justify-center">
                <span class="text-2xl">🪑</span>
              </div>
              <h3 class="font-playfair text-base text-off-white mb-2">{text.space3}</h3>
              <p class="text-off-white/40 text-xs">{text.space3Desc}</p>
            </div>
            <div class="text-center p-6">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-champagne/10 flex items-center justify-center">
                <span class="text-2xl">🍷</span>
              </div>
              <h3 class="font-playfair text-base text-off-white mb-2">{text.space4}</h3>
              <p class="text-off-white/40 text-xs">{text.space4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class="py-20 px-8 md:px-12">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">{text.teamTitle}</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">{text.teamSubtitle}</h2>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center p-8 border border-white/5 hover:border-champagne/20 transition-colors">
              <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-champagne/20 to-champagne/5 flex items-center justify-center">
                <span class="text-3xl">👨‍🍳</span>
              </div>
              <h3 class="font-playfair text-lg text-off-white mb-3">{text.team1}</h3>
              <p class="text-off-white/40 text-sm font-light">{text.team1Desc}</p>
            </div>
            <div class="text-center p-8 border border-white/5 hover:border-champagne/20 transition-colors">
              <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-champagne/20 to-champagne/5 flex items-center justify-center">
                <span class="text-3xl">🍾</span>
              </div>
              <h3 class="font-playfair text-lg text-off-white mb-3">{text.team2}</h3>
              <p class="text-off-white/40 text-sm font-light">{text.team2Desc}</p>
            </div>
            <div class="text-center p-8 border border-white/5 hover:border-champagne/20 transition-colors">
              <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-champagne/20 to-champagne/5 flex items-center justify-center">
                <span class="text-3xl">🤵</span>
              </div>
              <h3 class="font-playfair text-lg text-off-white mb-3">{text.team3}</h3>
              <p class="text-off-white/40 text-sm font-light">{text.team3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section class="py-20 px-8 md:px-12 bg-soft-black/30">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">{text.visitTitle}</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">{text.visitSubtitle}</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-12">
            <div class="space-y-6">
              <div class="border-l-2 border-champagne/20 pl-6">
                <p class="text-[10px] tracking-widest text-champagne/40 uppercase mb-2">Address</p>
                <p class="text-off-white/80">{text.address}</p>
                <p class="text-off-white/40 text-sm mt-1">{text.addressDetail}</p>
              </div>
              <div class="border-l-2 border-champagne/20 pl-6">
                <p class="text-[10px] tracking-widest text-champagne/40 uppercase mb-2">Hours</p>
                <p class="text-off-white/80">{text.hours}</p>
                <p class="text-champagne/50 text-sm mt-1">{text.closed}</p>
              </div>
              <div class="border-l-2 border-champagne/20 pl-6">
                <p class="text-[10px] tracking-widest text-champagne/40 uppercase mb-2">Parking</p>
                <p class="text-off-white/80">{text.parking}</p>
              </div>
            </div>
            <div class="aspect-[4/3] bg-soft-black overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8!2d126.9224!3d37.5595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMzJzM0LjIiTiAxMjbCsDU1JzIwLjYiRQ!5e0!3m2!1sen!2skr!4v1"
                width="100%" 
                height="100%" 
                style="border:0; filter: grayscale(100%) invert(92%) contrast(83%);" 
                allowfullscreen 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-20 px-8 md:px-12 text-center">
        <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-12 py-4 bg-champagne hover:bg-champagne/90 transition-colors">
          <svg class="w-4 h-4 text-deep-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
          </svg>
          <span class="text-[11px] tracking-[0.2em] uppercase text-deep-black font-medium">{text.reserveBtn}</span>
        </a>
      </section>

      {/* Footer */}
      <footer class="py-12 border-t border-white/5 text-center">
        <p class="text-off-white/20 text-[10px] tracking-[0.3em]">© 2024 ROWISM The Black</p>
      </footer>
    </div>
  )
}
