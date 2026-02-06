import { jsxRenderer } from 'hono/jsx-renderer'

type Language = 'ko' | 'en' | 'ja' | 'zh'

// Menu page SEO data
const menuSeoData: Record<Language, {
  lang: string
  title: string
  description: string
  keywords: string
  ogDescription: string
}> = {
  ko: {
    lang: 'ko',
    title: '메뉴 | ROWISM The Black | 연남동 샴페인바 트러플 한우 뭉티기',
    description: 'ROWISM The Black 메뉴 - 당일 도축 온도체 한우 뭉티기, 부라타 치즈, 블랙 트러플의 시그니처 요리. 제비추리, 청양 오일 육회, 치즈 셀렉션. 연남동 프리미엄 샴페인바.',
    keywords: '연남동 메뉴, 한우 뭉티기 가격, 트러플 육회, 연남동 샴페인바 메뉴, 홍대 한우 가격, 부라타 치즈, 제비추리, 육회 메밀면, ROWISM 메뉴, 연남동 맛집 메뉴판',
    ogDescription: '당일 도축 온도체 한우 뭉티기와 샴페인 페어링. ROWISM The Black 시그니처 메뉴를 확인하세요.'
  },
  en: {
    lang: 'en',
    title: 'Menu | ROWISM The Black | Seoul Yeonnam-dong Champagne Bar',
    description: 'ROWISM The Black Menu - Same-day slaughtered Korean beef tartare with burrata cheese and black truffle. Jebichuri, Cheongyang oil yukhoe, cheese selection. Premium champagne bar in Yeonnam-dong.',
    keywords: 'Yeonnam menu, Korean beef tartare price, truffle yukhoe, Seoul champagne bar menu, Hongdae beef price, burrata cheese, ROWISM menu, Seoul restaurant menu',
    ogDescription: 'Same-day slaughtered Korean beef tartare with champagne pairing. Check out ROWISM The Black signature menu.'
  },
  ja: {
    lang: 'ja',
    title: 'メニュー | ROWISM The Black | ソウル延南洞シャンパンバー',
    description: 'ROWISM The Black メニュー - 当日屠畜韓牛タルタル、ブッラータチーズ、ブラックトリュフのシグネチャー料理。ジェビチュリ、青陽オイルユッケ、チーズセレクション。延南洞プレミアムシャンパンバー。',
    keywords: '延南洞メニュー, 韓牛タルタル価格, トリュフユッケ, ソウルシャンパンバーメニュー, 弘大韓牛価格, ブッラータチーズ, ROWISMメニュー',
    ogDescription: '当日屠畜韓牛タルタルとシャンパンペアリング。ROWISM The Blackシグネチャーメニューをご確認ください。'
  },
  zh: {
    lang: 'zh',
    title: '菜单 | ROWISM The Black | 首尔延南洞香槟吧',
    description: 'ROWISM The Black 菜单 - 当日屠宰韩牛肉脍配布拉塔奶酪和黑松露的招牌菜。牛肩肉、青阳油拌生牛肉、奶酪拼盘。延南洞高级香槟吧。',
    keywords: '延南洞菜单, 韩牛肉脍价格, 松露生拌, 首尔香槟吧菜单, 弘大韩牛价格, 布拉塔奶酪, ROWISM菜单',
    ogDescription: '当日屠宰韩牛肉脍与香槟搭配。查看ROWISM The Black招牌菜单。'
  }
}

function getLangPath(lang: Language): string {
  return lang === 'ko' ? '' : `/${lang}`
}

export const createMenuRenderer = (pageLang: Language = 'ko') => {
  const seo = menuSeoData[pageLang]
  
  return jsxRenderer(({ children }) => {
    return (
      <html lang={seo.lang}>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <meta name="author" content="ROWISM The Black" />
          <meta name="robots" content="index, follow" />
          
          {/* Canonical URL */}
          <link rel="canonical" href={`https://rawism.kr${getLangPath(pageLang)}/menu`} />
          
          {/* hreflang tags */}
          <link rel="alternate" hreflang="ko" href="https://rawism.kr/menu" />
          <link rel="alternate" hreflang="en" href="https://rawism.kr/en/menu" />
          <link rel="alternate" hreflang="ja" href="https://rawism.kr/ja/menu" />
          <link rel="alternate" hreflang="zh" href="https://rawism.kr/zh/menu" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/menu" />
          
          {/* Favicon */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="theme-color" content="#080808" />
          
          {/* Geographic Tags */}
          <meta name="geo.region" content="KR-11" />
          <meta name="geo.placename" content="연남동, 마포구, 서울" />
          <meta name="geo.position" content="37.5595;126.9224" />
          
          {/* Open Graph */}
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.ogDescription} />
          <meta property="og:type" content="restaurant.menu" />
          <meta property="og:locale" content={pageLang === 'ko' ? 'ko_KR' : pageLang === 'ja' ? 'ja_JP' : pageLang === 'zh' ? 'zh_CN' : 'en_US'} />
          <meta property="og:site_name" content="ROWISM The Black" />
          <meta property="og:url" content={`https://rawism.kr${getLangPath(pageLang)}/menu`} />
          <meta property="og:image" content="https://rawism.kr/static/menu_signature.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.ogDescription} />
          <meta name="twitter:image" content="https://rawism.kr/static/menu_signature.jpg" />
          
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Noto+Serif+KR:wght@300;400;500;600;700&family=Pretendard:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          
          {/* Tailwind CSS */}
          <script src="https://cdn.tailwindcss.com"></script>
          <script dangerouslySetInnerHTML={{__html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'deep-black': '#080808',
                    'soft-black': '#141414',
                    'champagne': '#B8A060',
                    'off-white': '#E0E0E0',
                  },
                  fontFamily: {
                    'playfair': ['Playfair Display', 'serif'],
                    'noto-serif': ['Noto Serif KR', 'serif'],
                    'pretendard': ['Pretendard', 'sans-serif'],
                  }
                }
              }
            }
          `}} />
          
          <link href="/static/style.css" rel="stylesheet" />
          
          {/* Menu Page Schema.org */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            "@id": "https://rawism.kr/menu#menu",
            "name": pageLang === 'ko' ? "ROWISM The Black 메뉴" : pageLang === 'ja' ? "ROWISM The Black メニュー" : pageLang === 'zh' ? "ROWISM The Black 菜单" : "ROWISM The Black Menu",
            "description": seo.description,
            "inLanguage": seo.lang,
            "url": `https://rawism.kr${getLangPath(pageLang)}/menu`,
            "mainEntity": {
              "@type": "Restaurant",
              "name": "ROWISM The Black",
              "url": "https://rawism.kr"
            },
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": pageLang === 'ko' ? "시그니처" : pageLang === 'ja' ? "シグネチャー" : pageLang === 'zh' ? "招牌" : "Signature",
                "hasMenuItem": [
                  {
                    "@type": "MenuItem",
                    "name": pageLang === 'ko' ? "로위즘 뭉티기 시그니처" : pageLang === 'ja' ? "ロウィズム ムンティギ シグネチャー" : pageLang === 'zh' ? "ROWISM 肉脍招牌" : "ROWISM Mungti-gi Signature",
                    "offers": { "@type": "Offer", "price": "92000", "priceCurrency": "KRW" },
                    "image": "https://rawism.kr/static/menu_signature.jpg"
                  }
                ]
              }
            ]
          })}} />
          
          {/* BreadcrumbList for Menu Page */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "ROWISM The Black",
                "item": `https://rawism.kr${getLangPath(pageLang)}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": pageLang === 'ko' ? "메뉴" : pageLang === 'ja' ? "メニュー" : pageLang === 'zh' ? "菜单" : "Menu",
                "item": `https://rawism.kr${getLangPath(pageLang)}/menu`
              }
            ]
          })}} />
          
          {/* 메뉴 페이지 전용 ItemList Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": pageLang === 'ko' ? "ROWISM The Black 전체 메뉴" : pageLang === 'ja' ? "ROWISM The Black 全メニュー" : pageLang === 'zh' ? "ROWISM The Black 全部菜单" : "ROWISM The Black Full Menu",
            "numberOfItems": 6,
            "itemListOrder": "https://schema.org/ItemListOrderDescending",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "로위즘 뭉티기 시그니처" : pageLang === 'ja' ? "ロウィズム ムンティギ シグネチャー" : pageLang === 'zh' ? "ROWISM 肉脍招牌" : "ROWISM Mungti-gi Signature",
                  "description": pageLang === 'ko' ? "당일 도축 한우, 부라타 치즈, 블랙 트러플, 파르미지아노" : pageLang === 'ja' ? "当日屠畜韓牛、ブッラータチーズ、ブラックトリュフ、パルミジャーノ" : pageLang === 'zh' ? "当日屠宰韩牛、布拉塔奶酪、黑松露、帕玛森" : "Same-day slaughtered Hanwoo, burrata cheese, black truffle, Parmigiano",
                  "offers": { "@type": "Offer", "price": "92000", "priceCurrency": "KRW" },
                  "image": "https://rawism.kr/static/menu_signature.jpg"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "제비추리 그릴드 베지터블" : pageLang === 'ja' ? "ジェビチュリ グリル野菜" : pageLang === 'zh' ? "牛肩肉烤蔬菜" : "Jebichuri Grilled Vegetables",
                  "description": pageLang === 'ko' ? "한우 제비추리와 8종 제철 채소의 그릴 향연" : pageLang === 'ja' ? "韓牛ジェビチュリと8種の旬野菜のグリル馂宴" : pageLang === 'zh' ? "韩牛肩肉与8种时令蔬菜的烧烤盛宴" : "Grilled Hanwoo Jebichuri with 8 seasonal vegetables",
                  "offers": { "@type": "Offer", "price": "49000", "priceCurrency": "KRW" },
                  "image": "https://rawism.kr/static/menu_jebichuri.jpg"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "치즈 셀렉션" : pageLang === 'ja' ? "チーズセレクション" : pageLang === 'zh' ? "奶酪拼盘" : "Cheese Selection",
                  "description": pageLang === 'ko' ? "소미리에가 큐레이팅한 6종 치즈 커펙션" : pageLang === 'ja' ? "ソムリエがキュレーションした6種チーズコレクション" : pageLang === 'zh' ? "侍酒师精选6种奶酪系列" : "6 cheeses curated by sommelier",
                  "offers": { "@type": "Offer", "price": "36000", "priceCurrency": "KRW" },
                  "image": "https://rawism.kr/static/menu_cheese.jpg"
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "청양 오일 육회" : pageLang === 'ja' ? "青陽オイル ユッケ" : pageLang === 'zh' ? "青阳油拌生牛肉" : "Cheongyang Oil Yukhoe",
                  "description": pageLang === 'ko' ? "전통 육회에 더한 매콤한 불꽃" : pageLang === 'ja' ? "伝統ユッケにスパイシーな烎を添えて" : pageLang === 'zh' ? "传统生拌加入辣味火花" : "Traditional tartare with a spicy kick",
                  "offers": { "@type": "Offer", "price": "25000", "priceCurrency": "KRW" },
                  "image": "https://rawism.kr/static/menu_yukhoe.jpg"
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "아보카도 카프레제" : pageLang === 'ja' ? "アボカド カプレーゼ" : pageLang === 'zh' ? "牛油果卡普雷塞" : "Avocado Caprese",
                  "description": pageLang === 'ko' ? "클래식 카프레제의 현대적 재해석" : pageLang === 'ja' ? "クラシックカプレーゼの現代的再解釈" : pageLang === 'zh' ? "经典卡普雷塞的现代诠释" : "Modern interpretation of classic Caprese",
                  "offers": { "@type": "Offer", "price": "23000", "priceCurrency": "KRW" },
                  "image": "https://rawism.kr/static/menu_caprese.jpg"
                }
              },
              {
                "@type": "ListItem",
                "position": 6,
                "item": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "들기름 육회 메밀면" : pageLang === 'ja' ? "エゴマ油 ユッケ 蕎麦麺" : pageLang === 'zh' ? "紫苏油生牛肉荞麦面" : "Perilla Oil Yukhoe Buckwheat Noodles",
                  "description": pageLang === 'ko' ? "한 끼의 완벽한 마무리" : pageLang === 'ja' ? "食事の完璧な締めくくり" : pageLang === 'zh' ? "一餐的完美收尾" : "The perfect finishing touch",
                  "offers": { "@type": "Offer", "price": "15000", "priceCurrency": "KRW" },
                  "image": "https://rawism.kr/static/menu_memil.jpg"
                }
              }
            ]
          })}} />
          
          {/* 메뉴 페이지 전용 FoodMenu Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": pageLang === 'ko' ? "ROWISM The Black 전체 메뉴" : pageLang === 'ja' ? "ROWISM The Black 全メニュー" : pageLang === 'zh' ? "ROWISM The Black 全部菜单" : "ROWISM The Black Full Menu",
            "description": seo.description,
            "url": `https://rawism.kr${getLangPath(pageLang)}/menu`,
            "inLanguage": seo.lang,
            "mainEntityOfPage": `https://rawism.kr${getLangPath(pageLang)}/menu`,
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": pageLang === 'ko' ? "시그니처" : pageLang === 'ja' ? "シグネチャー" : pageLang === 'zh' ? "招牌" : "Signature",
                "description": pageLang === 'ko' ? "ROWISM The Black의 대표 메뉴" : pageLang === 'ja' ? "ROWISM The Blackの代表メニュー" : pageLang === 'zh' ? "ROWISM The Black的代表菜品" : "ROWISM The Black's representative dish",
                "hasMenuItem": [
                  {
                    "@type": "MenuItem",
                    "name": pageLang === 'ko' ? "로위즘 뭉티기 시그니처" : pageLang === 'ja' ? "ロウィズム ムンティギ シグネチャー" : pageLang === 'zh' ? "ROWISM 肉脍招牌" : "ROWISM Mungti-gi Signature",
                    "offers": { "@type": "Offer", "price": "92000", "priceCurrency": "KRW", "availability": "https://schema.org/InStock" },
                    "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                    "nutrition": {
                      "@type": "NutritionInformation",
                      "servingSize": pageLang === 'ko' ? "2인분" : pageLang === 'ja' ? "2人前" : pageLang === 'zh' ? "2人份" : "2 servings",
                      "proteinContent": "35g"
                    }
                  }
                ]
              },
              {
                "@type": "MenuSection",
                "name": pageLang === 'ko' ? "한우 요리" : pageLang === 'ja' ? "韓牛料理" : pageLang === 'zh' ? "韩牛料理" : "Hanwoo Dishes",
                "hasMenuItem": [
                  {
                    "@type": "MenuItem",
                    "name": pageLang === 'ko' ? "제비추리 그릴드 베지터블" : pageLang === 'ja' ? "ジェビチュリ グリル野菜" : pageLang === 'zh' ? "牛肩肉烤蔬菜" : "Jebichuri Grilled Vegetables",
                    "offers": { "@type": "Offer", "price": "49000", "priceCurrency": "KRW" }
                  },
                  {
                    "@type": "MenuItem",
                    "name": pageLang === 'ko' ? "청양 오일 육회" : pageLang === 'ja' ? "青陽オイル ユッケ" : pageLang === 'zh' ? "青阳油拌生牛肉" : "Cheongyang Oil Yukhoe",
                    "offers": { "@type": "Offer", "price": "25000", "priceCurrency": "KRW" }
                  }
                ]
              },
              {
                "@type": "MenuSection",
                "name": pageLang === 'ko' ? "치즈 & 사이드" : pageLang === 'ja' ? "チーズ & サイド" : pageLang === 'zh' ? "奶酪 & 配菜" : "Cheese & Sides",
                "hasMenuItem": [
                  {
                    "@type": "MenuItem",
                    "name": pageLang === 'ko' ? "치즈 셀렉션" : pageLang === 'ja' ? "チーズセレクション" : pageLang === 'zh' ? "奶酪拼盘" : "Cheese Selection",
                    "offers": { "@type": "Offer", "price": "36000", "priceCurrency": "KRW" }
                  },
                  {
                    "@type": "MenuItem",
                    "name": pageLang === 'ko' ? "아보카도 카프레제" : pageLang === 'ja' ? "アボカド カプレーゼ" : pageLang === 'zh' ? "牛油果卡普雷塞" : "Avocado Caprese",
                    "offers": { "@type": "Offer", "price": "23000", "priceCurrency": "KRW" }
                  }
                ]
              },
              {
                "@type": "MenuSection",
                "name": pageLang === 'ko' ? "피니셔" : pageLang === 'ja' ? "フィニッシャー" : pageLang === 'zh' ? "收尾菜" : "Finisher",
                "hasMenuItem": [
                  {
                    "@type": "MenuItem",
                    "name": pageLang === 'ko' ? "들기름 육회 메밀면" : pageLang === 'ja' ? "エゴマ油 ユッケ 蕎麦麺" : pageLang === 'zh' ? "紫苏油生牛肉荞麦面" : "Perilla Oil Yukhoe Buckwheat Noodles",
                    "offers": { "@type": "Offer", "price": "15000", "priceCurrency": "KRW" }
                  }
                ]
              }
            ]
          })}} />
          
          {/* 메뉴 페이지 WebPage Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://rawism.kr${getLangPath(pageLang)}/menu#webpage`,
            "url": `https://rawism.kr${getLangPath(pageLang)}/menu`,
            "name": seo.title,
            "description": seo.description,
            "inLanguage": seo.lang,
            "isPartOf": {
              "@id": "https://rawism.kr/#website"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://rawism.kr/static/menu_signature.jpg"
            },
            "datePublished": "2024-01-01",
            "dateModified": "2026-02-06",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".menu-item"]
            }
          })}} />
        </head>
        <body class="bg-deep-black text-off-white font-pretendard">
          {children}
        </body>
      </html>
    )
  })
}
