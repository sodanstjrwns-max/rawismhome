import type { FC } from 'hono/jsx'

type Language = 'ko' | 'en' | 'ja' | 'zh'

// Menu translations
const menuTranslations: Record<Language, {
  pageTitle: string
  pageSubtitle: string
  backToHome: string
  signatureLabel: string
  signatureTitle: string
  signaturePrice: string
  signatureDesc: string
  signatureStory: string
  whatIsTitle: string
  whatIsText: string
  harmonyTitle: string
  harmonyText: string
  ingredientsLabel: string
  signatureIngredients: string
  hanwooSection: string
  cheeseSection: string
  finisherSection: string
  reserveTitle: string
  reserveSubtitle: string
  reserveCta: string
  menuItems: Array<{
    name: string
    desc: string
    detail: string
    price: string
    ingredients: string
  }>
}> = {
  ko: {
    pageTitle: 'RAWISM The Black 메뉴',
    pageSubtitle: '트러플 한우 뭉티기 · 샴페인 페어링 — 연남동 프리미엄 다이닝',
    backToHome: '← 메인으로',
    signatureLabel: 'Signature',
    signatureTitle: '로위즘 뭉티기 시그니처',
    signaturePrice: '₩69,000',
    signatureDesc: 'RAWISM의 철학을 담은 시그니처 메뉴',
    signatureStory: '로위즘 뭉티기 시그니처는 RAWISM The Black의 정체성을 가장 잘 보여주는 대표 메뉴입니다. 당일 도축된 온도체 한우만을 사용하여 체온이 남아있는 신선함을 그대로 느낄 수 있습니다.',
    whatIsTitle: '뭉티기란?',
    whatIsText: '뭉티기는 한우를 얇게 저며 썬 후 별도의 양념 없이 그대로 즐기는 전통 요리입니다. 육회와 달리 참기름이나 소금 양념을 하지 않아 고기 본연의 풍미를 느낄 수 있습니다.',
    harmonyTitle: '프리미엄 재료의 완벽한 조화',
    harmonyText: '로위즘 뭉티기 시그니처 위에는 이탈리아산 부라타 치즈가 통째로 올라갑니다. 크림이 풍부한 부라타 치즈와 담백한 한우의 조화에, 블랙 트러플과 파르미지아노 레지아노가 더해져 깊은 감칠맛을 완성합니다.',
    ingredientsLabel: '재료',
    signatureIngredients: '한우 뭉티기 · 부라타 치즈 · 블랙 트러플 · 파르미지아노 레지아노 · 소금 · 후추',
    hanwooSection: '한우 요리',
    cheeseSection: '치즈 & 사이드',
    finisherSection: '피니셔',
    reserveTitle: '맛있는 메뉴를 경험하세요',
    reserveSubtitle: '8석 한정 예약제 프라이빗 다이닝',
    reserveCta: '네이버 예약',
    menuItems: [
      {
        name: '제비추리 그릴드 베지터블',
        desc: '한우 제비추리와 8종 제철 채소의 그릴 향연',
        detail: '부드러운 한우 제비추리와 엄선된 8종 채소를 그릴에 구워 고소함과 풍미를 극대화한 메뉴입니다. 채소 본연의 단맛과 그릴의 스모키한 풍미가 어우러져, 스파클링과 함께 즐기기 완벽한 핫 디쉬입니다.',
        price: '₩39,000',
        ingredients: '한우 제비추리 · 파 · 방울양배추 · 아스파라거스 · 래디쉬 · 가지 · 미니당근 · 양송이버섯 · 브로콜리'
      },
      {
        name: '청양 오일 육회',
        desc: '전통 육회에 더한 매콤한 불꽃',
        detail: '전통적인 한우 육회에 자체 제작 고추기름 소스의 매콤한 킥을 더한 메뉴입니다. 신선한 한우 육회 위에 직접 만든 고추기름 소스를 둘러, 기존 육회에서는 느낄 수 없었던 매콤하고 알싸한 풍미를 더했습니다.',
        price: '₩25,000',
        ingredients: '한우 육회 · 고추기름 소스 · 청양고추 · 다진 마늘 · 노른자 · 실고추'
      },
      {
        name: '치즈 셀렉션',
        desc: '소믈리에가 큐레이팅한 6종 치즈 컬렉션',
        detail: '샴페인바의 꽃이라 할 수 있는 치즈 셀렉션. 소믈리에가 직접 큐레이팅한 6종의 프리미엄 치즈를 한 플레이트에 담았습니다.',
        price: '₩35,000',
        ingredients: '브리 · 콩테 · 에멘탈 · 콜비잭 · 크림치즈 · 다피누아 · 하몽 · 살라미 · 그린 올리브 · 블루베리'
      },
      {
        name: '아보카도 카프레제',
        desc: '클래식 카프레제의 현대적 재해석',
        detail: '이탈리아 카프리 섬에서 유래한 카프레제에 아보카도와 블랙 올리브를 더해 더욱 크리미하게 재해석했습니다. 아보카도는 주문 후 바로 잘라 갈변 없이 신선하게 제공됩니다.',
        price: '₩23,000',
        ingredients: '아보카도 · 미니 모짜렐라 · 대추방울토마토 · 블랙 올리브 · 발사믹 드레싱 · 바질'
      },
      {
        name: '들기름 육회 메밀면',
        desc: '한 끼의 완벽한 마무리',
        detail: '고객 설문에서 "의외로 가장 좋았던 메뉴"로 꼽힌 시그니처 마무리 메뉴입니다. 들기름에 쯔유, 식초, 설탕을 배합한 소스가 느끼하지 않고 상큼해서 식사 후에도 가볍게 즐길 수 있습니다.',
        price: '₩15,000',
        ingredients: '메밀면 · 한우 육회 · 들기름 소스 · 깻잎 · 조미김 · 통깨 · 와사비'
      }
    ]
  },
  en: {
    pageTitle: 'RAWISM The Black Menu',
    pageSubtitle: 'Truffle Hanwoo Tartare · Champagne Pairing — Yeonnam-dong Premium Dining',
    backToHome: '← Back to Home',
    signatureLabel: 'Signature',
    signatureTitle: 'RAWISM Mungti-gi Signature',
    signaturePrice: '₩69,000',
    signatureDesc: 'The signature dish embodying RAWISM philosophy',
    signatureStory: 'The RAWISM Mungti-gi Signature best represents the identity of RAWISM The Black. Using only same-day slaughtered Korean beef, you can experience freshness with body heat still intact.',
    whatIsTitle: 'What is Mungti-gi?',
    whatIsText: 'Mungti-gi is a traditional dish of thinly sliced Korean beef enjoyed without any seasoning. Unlike yukhoe, it has no sesame oil or salt, allowing you to taste the pure flavor of the meat.',
    harmonyTitle: 'Perfect Harmony of Premium Ingredients',
    harmonyText: 'A whole Italian burrata cheese sits atop our Mungti-gi Signature. The cream-rich burrata harmonizes with the mild Korean beef, while black truffle and Parmigiano-Reggiano complete the umami depth.',
    ingredientsLabel: 'Ingredients',
    signatureIngredients: 'Hanwoo Mungti-gi · Burrata Cheese · Black Truffle · Parmigiano-Reggiano · Salt · Pepper',
    hanwooSection: 'Hanwoo Dishes',
    cheeseSection: 'Cheese & Sides',
    finisherSection: 'Finisher',
    reserveTitle: 'Experience Our Delicious Menu',
    reserveSubtitle: 'Private dining with only 8 seats, reservation required',
    reserveCta: 'Book on Naver',
    menuItems: [
      {
        name: 'Jebichuri Grilled Vegetables',
        desc: 'Grilled Hanwoo flank steak with 8 seasonal vegetables',
        detail: 'Tender Hanwoo Jebichuri and 8 carefully selected vegetables grilled to maximize savory flavors. The natural sweetness of vegetables combined with smoky grill notes makes this a perfect hot dish with sparkling wine.',
        price: '₩39,000',
        ingredients: 'Hanwoo Jebichuri · Scallion · Brussels Sprouts · Asparagus · Radish · Eggplant · Baby Carrots · Mushrooms · Broccoli'
      },
      {
        name: 'Cheongyang Oil Yukhoe',
        desc: 'Traditional beef tartare with a spicy kick',
        detail: 'Traditional Korean beef tartare elevated with our house-made chili oil sauce. The fresh Hanwoo tartare is drizzled with handcrafted chili oil, adding a spicy and aromatic dimension.',
        price: '₩25,000',
        ingredients: 'Hanwoo Tartare · Chili Oil Sauce · Cheongyang Pepper · Minced Garlic · Egg Yolk · Chili Threads'
      },
      {
        name: 'Cheese Selection',
        desc: 'Sommelier-curated 6-cheese collection',
        detail: 'The highlight of any champagne bar - our cheese selection. 6 premium cheeses personally curated by our sommelier on one plate.',
        price: '₩35,000',
        ingredients: 'Brie · Comté · Emmental · Colby Jack · Cream Cheese · Daphinois · Ham · Salami · Green Olives · Blueberries'
      },
      {
        name: 'Avocado Caprese',
        desc: 'Modern interpretation of classic Caprese',
        detail: 'The classic Caprese from Capri, Italy, reimagined with avocado and black olives for extra creaminess. Avocado is cut fresh upon order to prevent browning.',
        price: '₩23,000',
        ingredients: 'Avocado · Mini Mozzarella · Cherry Tomatoes · Black Olives · Balsamic Dressing · Basil'
      },
      {
        name: 'Perilla Oil Yukhoe Buckwheat Noodles',
        desc: 'The perfect finishing touch',
        detail: 'Voted "unexpectedly favorite menu" in customer surveys. The sauce made with perilla oil, tsuyu, vinegar, and sugar is light and refreshing, perfect even after a full meal.',
        price: '₩15,000',
        ingredients: 'Buckwheat Noodles · Hanwoo Tartare · Perilla Oil Sauce · Perilla Leaves · Seasoned Seaweed · Sesame Seeds · Wasabi'
      }
    ]
  },
  ja: {
    pageTitle: 'RAWISM The Black メニュー',
    pageSubtitle: 'トリュフ韓牛タルタル · シャンパンペアリング — 延南洞プレミアムダイニング',
    backToHome: '← メインへ',
    signatureLabel: 'シグネチャー',
    signatureTitle: 'ロウィズム ムンティギ シグネチャー',
    signaturePrice: '₩69,000',
    signatureDesc: 'RAWISMの哲学を込めたシグネチャーメニュー',
    signatureStory: 'ロウィズム ムンティギ シグネチャーはRAWISM The Blackのアイデンティティを最もよく表す代表メニューです。当日屠畜された韓牛のみを使用し、体温が残る新鮮さをそのまま感じられます。',
    whatIsTitle: 'ムンティギとは？',
    whatIsText: 'ムンティギは韓牛を薄く切り、味付けをせずにそのまま楽しむ伝統料理です。ユッケと違い、ごま油や塩で味付けしないため、肉本来の風味を味わえます。',
    harmonyTitle: 'プレミアム食材の完璧な調和',
    harmonyText: 'ロウィズム ムンティギ シグネチャーの上には、イタリア産ブッラータチーズが丸ごと乗ります。クリーミーなブッラータと淡白な韓牛の調和に、ブラックトリュフとパルミジャーノ・レッジャーノが加わり深い旨みを完成させます。',
    ingredientsLabel: '食材',
    signatureIngredients: '韓牛ムンティギ · ブッラータチーズ · ブラックトリュフ · パルミジャーノ・レッジャーノ · 塩 · コショウ',
    hanwooSection: '韓牛料理',
    cheeseSection: 'チーズ＆サイド',
    finisherSection: 'フィニッシャー',
    reserveTitle: '美味しいメニューを体験してください',
    reserveSubtitle: '8席限定 予約制プライベートダイニング',
    reserveCta: 'Naver予約',
    menuItems: [
      {
        name: 'ジェビチュリ グリル野菜',
        desc: '韓牛ジェビチュリと8種の旬野菜のグリル饗宴',
        detail: '柔らかい韓牛ジェビチュリと厳選された8種の野菜をグリルして香ばしさと風味を最大化したメニューです。野菜本来の甘みとグリルのスモーキーな風味が調和し、スパークリングと共に楽しむのに最適なホットディッシュです。',
        price: '₩39,000',
        ingredients: '韓牛ジェビチュリ · ネギ · 芽キャベツ · アスパラガス · ラディッシュ · ナス · ミニニンジン · マッシュルーム · ブロッコリー'
      },
      {
        name: '青陽オイル ユッケ',
        desc: '伝統ユッケにスパイシーな炎を添えて',
        detail: '伝統的な韓牛ユッケに自家製唐辛子油ソースのスパイシーなキックを加えたメニュー。新鮮な韓牛ユッケに手作りの唐辛子油ソースをかけ、従来のユッケでは味わえなかったピリ辛で爽やかな風味を加えました。',
        price: '₩25,000',
        ingredients: '韓牛ユッケ · 唐辛子油ソース · 青陽唐辛子 · おろしニンニク · 卵黄 · 糸唐辛子'
      },
      {
        name: 'チーズセレクション',
        desc: 'ソムリエがキュレーションした6種チーズコレクション',
        detail: 'シャンパンバーの華といえるチーズセレクション。ソムリエが直接キュレーションした6種のプレミアムチーズを一皿に盛り合わせました。',
        price: '₩35,000',
        ingredients: 'ブリー · コンテ · エメンタール · コルビージャック · クリームチーズ · ダフィノワ · ハム · サラミ · グリーンオリーブ · ブルーベリー'
      },
      {
        name: 'アボカド カプレーゼ',
        desc: 'クラシックカプレーゼの現代的再解釈',
        detail: 'イタリア・カプリ島発祥のカプレーゼにアボカドとブラックオリーブを加え、よりクリーミーに再解釈しました。アボカドは注文後すぐにカットし、変色なく新鮮にご提供します。',
        price: '₩23,000',
        ingredients: 'アボカド · ミニモッツァレラ · ミニトマト · ブラックオリーブ · バルサミコドレッシング · バジル'
      },
      {
        name: 'エゴマ油 ユッケ 蕎麦麺',
        desc: '食事の完璧な締めくくり',
        detail: 'お客様アンケートで「意外に一番良かったメニュー」に選ばれたシグネチャーの締めメニュー。エゴマ油につゆ、酢、砂糖を配合したソースがさっぱりとして、食後でも軽く楽しめます。',
        price: '₩15,000',
        ingredients: '蕎麦麺 · 韓牛ユッケ · エゴマ油ソース · エゴマの葉 · 味付け海苔 · 白ゴマ · わさび'
      }
    ]
  },
  zh: {
    pageTitle: 'RAWISM The Black 菜单',
    pageSubtitle: '松露韩牛肉脍 · 香槟搭配 — 延南洞高级餐饮',
    backToHome: '← 返回首页',
    signatureLabel: '招牌',
    signatureTitle: 'RAWISM 肉脍招牌',
    signaturePrice: '₩69,000',
    signatureDesc: '承载RAWISM哲学的招牌菜',
    signatureStory: 'RAWISM肉脍招牌是最能体现RAWISM The Black特色的代表菜品。仅使用当日屠宰的韩牛，让您感受到保留体温的新鲜口感。',
    whatIsTitle: '什么是肉脍？',
    whatIsText: '肉脍是将韩牛切成薄片，不加任何调味料直接享用的传统料理。与生拌不同，不使用香油或盐调味，可以品尝到肉的原味。',
    harmonyTitle: '顶级食材的完美和谐',
    harmonyText: 'RAWISM肉脍招牌上放着整颗意大利布拉塔奶酪。奶油丰富的布拉塔奶酪与清淡的韩牛和谐搭配，再加上黑松露和帕玛森奶酪，完成深邃的鲜味。',
    ingredientsLabel: '食材',
    signatureIngredients: '韩牛肉脍 · 布拉塔奶酪 · 黑松露 · 帕玛森奶酪 · 盐 · 胡椒',
    hanwooSection: '韩牛料理',
    cheeseSection: '奶酪 & 配菜',
    finisherSection: '收尾菜',
    reserveTitle: '体验美味菜单',
    reserveSubtitle: '仅8席 预约制私密用餐',
    reserveCta: 'Naver预订',
    menuItems: [
      {
        name: '牛肩肉烤蔬菜',
        desc: '韩牛肩肉与8种时令蔬菜的烧烤盛宴',
        detail: '将柔嫩的韩牛肩肉和精选8种蔬菜烤制，最大化香味和风味。蔬菜本身的甜味与烧烤的烟熏风味和谐融合，是搭配起泡酒的完美热菜。',
        price: '₩39,000',
        ingredients: '韩牛肩肉 · 大葱 · 抱子甘蓝 · 芦笋 · 小萝卜 · 茄子 · 迷你胡萝卜 · 蘑菇 · 西兰花'
      },
      {
        name: '青阳油拌生牛肉',
        desc: '传统生拌加入辣味火花',
        detail: '在传统韩牛生拌上加入自制辣椒油酱的辣味。新鲜韩牛生拌淋上手工辣椒油酱，增添了传统生拌所没有的辛辣爽口风味。',
        price: '₩25,000',
        ingredients: '韩牛生拌 · 辣椒油酱 · 青阳辣椒 · 蒜末 · 蛋黄 · 辣椒丝'
      },
      {
        name: '奶酪拼盘',
        desc: '侍酒师精选6种奶酪系列',
        detail: '香槟吧的亮点——奶酪拼盘。侍酒师亲自挑选的6种顶级奶酪汇集一盘。',
        price: '₩35,000',
        ingredients: '布里 · 孔泰 · 埃门塔尔 · 科尔比杰克 · 奶油奶酪 · 达菲诺 · 火腿 · 萨拉米 · 青橄榄 · 蓝莓'
      },
      {
        name: '牛油果卡普雷塞',
        desc: '经典卡普雷塞的现代诠释',
        detail: '源自意大利卡普里岛的卡普雷塞，加入牛油果和黑橄榄，更加奶香浓郁。牛油果在下单后立即切开，新鲜上桌不变色。',
        price: '₩23,000',
        ingredients: '牛油果 · 迷你马苏里拉 · 小番茄 · 黑橄榄 · 香醋酱 · 罗勒'
      },
      {
        name: '紫苏油生牛肉荞麦面',
        desc: '一餐的完美收尾',
        detail: '在顾客调查中被评为"出乎意料最好吃的菜"的招牌收尾菜。紫苏油配酱油、醋、糖调制的酱汁清爽不腻，即使饭后也能轻松享用。',
        price: '₩15,000',
        ingredients: '荞麦面 · 韩牛生拌 · 紫苏油酱 · 紫苏叶 · 调味海苔 · 白芝麻 · 芥末'
      }
    ]
  }
}

// Get base path for language
function getLangPath(lang: Language): string {
  return lang === 'ko' ? '' : `/${lang}`
}

export const MenuPage: FC<{ lang: Language }> = ({ lang }) => {
  const t = menuTranslations[lang]
  const basePath = getLangPath(lang)
  
  // Language paths for switcher
  const koPath = '/menu'
  const enPath = '/en/menu'
  const jaPath = '/ja/menu'
  const zhPath = '/zh/menu'
  
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
            <a href={`${basePath}/about`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500">About</a>
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
      <section class="pt-32 pb-20 md:pt-40 md:pb-28 bg-deep-black">
        <div class="max-w-6xl mx-auto px-8 md:px-12 text-center">
          <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">Menu</p>
          <h1 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            {t.pageTitle}
          </h1>
          <p class="text-off-white/40 text-sm md:text-base font-light max-w-2xl mx-auto">
            {t.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Signature Menu - Hero Style */}
      <section class="py-20 md:py-28 bg-soft-black/30">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <div class="grid lg:grid-cols-2 gap-0">
            {/* Photo */}
            <div class="relative aspect-[4/3] lg:aspect-auto bg-soft-black overflow-hidden group">
              <img 
                src="/static/menu_signature.jpg" 
                alt={t.signatureTitle}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-deep-black/30 to-transparent"></div>
              <div class="absolute top-6 left-6">
                <span class="text-[9px] tracking-[0.3em] text-champagne/80 uppercase bg-deep-black/70 px-3 py-1">
                  {t.signatureLabel}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div class="bg-deep-black p-10 lg:p-14 flex flex-col justify-center">
              <div class="mb-6">
                <div class="flex justify-between items-start flex-wrap gap-4">
                  <h2 class="font-playfair text-2xl md:text-3xl text-off-white mb-2">
                    {t.signatureTitle}
                  </h2>
                  <span class="font-playfair text-2xl text-champagne">{t.signaturePrice}</span>
                </div>
                <p class="text-champagne/60 text-sm tracking-wide">
                  {t.signatureDesc}
                </p>
              </div>
              
              <div class="space-y-4 mb-6">
                <p class="text-off-white/50 text-sm font-light leading-relaxed">
                  {t.signatureStory}
                </p>
                <div class="border-l-2 border-champagne/20 pl-4 my-4">
                  <p class="text-champagne/50 text-xs font-medium mb-2">{t.whatIsTitle}</p>
                  <p class="text-off-white/35 text-xs font-light leading-relaxed">
                    {t.whatIsText}
                  </p>
                </div>
                <div class="border-l-2 border-champagne/20 pl-4">
                  <p class="text-champagne/50 text-xs font-medium mb-2">{t.harmonyTitle}</p>
                  <p class="text-off-white/35 text-xs font-light leading-relaxed">
                    {t.harmonyText}
                  </p>
                </div>
              </div>
              
              <div class="border-t border-white/5 pt-5">
                <p class="text-[10px] tracking-[0.2em] text-champagne/40 uppercase mb-2">{t.ingredientsLabel}</p>
                <p class="text-off-white/30 text-xs leading-relaxed">
                  {t.signatureIngredients}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hanwoo Section */}
      <section class="py-20 md:py-28 bg-deep-black">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <h2 class="font-playfair text-2xl md:text-3xl font-light tracking-wide mb-12 text-center">
            {t.hanwooSection}
          </h2>
          
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Jebichuri */}
            <div class="group">
              <div class="relative aspect-[16/10] bg-soft-black overflow-hidden mb-6">
                <img 
                  src="/static/menu_jebichuri.jpg" 
                  alt={t.menuItems[0].name}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h3 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors">
                    {t.menuItems[0].name}
                  </h3>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase">{t.menuItems[0].desc}</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70">{t.menuItems[0].price}</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-3">{t.menuItems[0].detail}</p>
              <p class="text-off-white/25 text-xs">
                <span class="text-champagne/30 mr-2">{t.ingredientsLabel}</span>
                {t.menuItems[0].ingredients}
              </p>
            </div>

            {/* Yukhoe */}
            <div class="group">
              <div class="relative aspect-[16/10] bg-soft-black overflow-hidden mb-6">
                <img 
                  src="/static/menu_yukhoe.jpg" 
                  alt={t.menuItems[1].name}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h3 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors">
                    {t.menuItems[1].name}
                  </h3>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase">{t.menuItems[1].desc}</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70">{t.menuItems[1].price}</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-3">{t.menuItems[1].detail}</p>
              <p class="text-off-white/25 text-xs">
                <span class="text-champagne/30 mr-2">{t.ingredientsLabel}</span>
                {t.menuItems[1].ingredients}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cheese & Sides Section */}
      <section class="py-20 md:py-28 bg-soft-black/30">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <h2 class="font-playfair text-2xl md:text-3xl font-light tracking-wide mb-12 text-center">
            {t.cheeseSection}
          </h2>
          
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Cheese Selection */}
            <div class="group">
              <div class="relative aspect-[16/10] bg-soft-black overflow-hidden mb-6">
                <img 
                  src="/static/menu_cheese.jpg" 
                  alt={t.menuItems[2].name}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h3 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors">
                    {t.menuItems[2].name}
                  </h3>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase">{t.menuItems[2].desc}</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70">{t.menuItems[2].price}</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-3">{t.menuItems[2].detail}</p>
              <p class="text-off-white/25 text-xs">
                <span class="text-champagne/30 mr-2">{t.ingredientsLabel}</span>
                {t.menuItems[2].ingredients}
              </p>
            </div>

            {/* Caprese */}
            <div class="group">
              <div class="relative aspect-[16/10] bg-soft-black overflow-hidden mb-6">
                <img 
                  src="/static/menu_caprese.jpg" 
                  alt={t.menuItems[3].name}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h3 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors">
                    {t.menuItems[3].name}
                  </h3>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase">{t.menuItems[3].desc}</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70">{t.menuItems[3].price}</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-3">{t.menuItems[3].detail}</p>
              <p class="text-off-white/25 text-xs">
                <span class="text-champagne/30 mr-2">{t.ingredientsLabel}</span>
                {t.menuItems[3].ingredients}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Finisher Section */}
      <section class="py-20 md:py-28 bg-deep-black">
        <div class="max-w-4xl mx-auto px-8 md:px-12">
          <h2 class="font-playfair text-2xl md:text-3xl font-light tracking-wide mb-12 text-center">
            {t.finisherSection}
          </h2>
          
          <div class="group">
            <div class="relative aspect-[16/10] bg-soft-black overflow-hidden mb-6">
              <img 
                src="/static/menu_memil.jpg" 
                alt={t.menuItems[4].name}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute bottom-4 right-4">
                <span class="text-[9px] tracking-[0.2em] text-off-white/60 uppercase bg-deep-black/70 px-2 py-1">
                  Finisher
                </span>
              </div>
            </div>
            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors">
                  {t.menuItems[4].name}
                </h3>
                <p class="text-[10px] tracking-wider text-off-white/30 uppercase">{t.menuItems[4].desc}</p>
              </div>
              <span class="font-playfair text-xl text-champagne/70">{t.menuItems[4].price}</span>
            </div>
            <p class="text-off-white/40 text-sm font-light leading-relaxed mb-3">{t.menuItems[4].detail}</p>
            <p class="text-off-white/25 text-xs">
              <span class="text-champagne/30 mr-2">{t.ingredientsLabel}</span>
              {t.menuItems[4].ingredients}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 md:py-32 bg-soft-black/30 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-champagne/5 via-transparent to-champagne/5"></div>
        <div class="relative max-w-3xl mx-auto px-8 md:px-12 text-center">
          <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide mb-6">
            {t.reserveTitle}
          </h2>
          <p class="text-off-white/40 text-sm font-light mb-10">
            {t.reserveSubtitle}
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

      {/* Footer */}
      <footer class="py-12 bg-deep-black border-t border-white/5">
        <div class="max-w-6xl mx-auto px-8 md:px-12 text-center">
          <p class="text-off-white/15 text-[10px] tracking-[0.3em]">
            © 2024 RAWISM The Black
          </p>
        </div>
      </footer>
    </div>
  )
}
