import { jsxRenderer } from 'hono/jsx-renderer'
import type { Language } from '../types'

// SEO metadata for Menu page in each language
const menuSeoData: Record<Language, {
  lang: string
  title: string
  description: string
  keywords: string
  ogDescription: string
}> = {
  ko: {
    lang: 'ko',
    title: '메뉴 | ROWISM The Black | 연남동 프리미엄 샴페인바 & 한우 뭉티기',
    description: 'ROWISM The Black 메뉴: 당일 도축 온도체 한우 뭉티기 시그니처(₩92,000), 제비추리 그릴드, 치즈 셀렉션, 청양 오일 육회 등. 소믈리에 큐레이팅 샴페인 & 스파클링 컬렉션. 연남동 프리미엄 다이닝.',
    keywords: '연남동 메뉴, 한우 뭉티기 가격, 홍대 샴페인바 메뉴, 연남동 코스요리, 트러플 한우 가격, 연남동 데이트 메뉴, 홍대 기념일 코스, 연남동 프리미엄 다이닝 메뉴, 한우 육회 가격',
    ogDescription: 'ROWISM The Black 메뉴: 당일 도축 한우 뭉티기 시그니처 ₩92,000. 트러플, 부라타치즈, 파르미지아노. 8석 한정 예약제.'
  },
  en: {
    lang: 'en',
    title: 'Menu | ROWISM The Black | Seoul Yeonnam-dong Premium Champagne Bar',
    description: 'ROWISM The Black Menu: Signature Hanwoo Tartare (₩92,000), Jebichuri Grilled Vegetables, Cheese Selection, Cheongyang Oil Yukhoe. Curated champagne & sparkling collection. Premium dining in Yeonnam-dong.',
    keywords: 'Yeonnam-dong menu, Hanwoo tartare price, Hongdae champagne bar menu, Seoul fine dining menu, Korean beef tartare price, Yeonnam date menu, Seoul anniversary course',
    ogDescription: 'ROWISM The Black Menu: Same-day Hanwoo tartare signature ₩92,000. With truffle, burrata cheese, Parmigiano. 8 seats only, reservation required.'
  },
  ja: {
    lang: 'ja',
    title: 'メニュー | ROWISM The Black | ソウル延南洞プレミアムシャンパンバー',
    description: 'ROWISM The Black メニュー: シグネチャー韓牛タルタル(₩92,000)、ジェビチュリグリル、チーズセレクション、青陽オイルユッケなど。ソムリエ厳選シャンパン&スパークリングコレクション。',
    keywords: '延南洞 メニュー, 韓牛タルタル 価格, 弘大 シャンパンバー メニュー, ソウル ファインダイニング メニュー, 韓牛 ユッケ 価格',
    ogDescription: 'ROWISM The Black メニュー: 当日屠畜韓牛タルタルシグネチャー ₩92,000。トリュフ、ブッラータチーズ、パルミジャーノ。8席限定、要予約。'
  },
  zh: {
    lang: 'zh',
    title: '菜单 | ROWISM The Black | 首尔延南洞高级香槟吧',
    description: 'ROWISM The Black菜单：招牌韩牛肉脍(₩92,000)、牛肩肉烤蔬菜、奶酪拼盘、青阳油拌生牛肉等。侍酒师精选香槟起泡酒系列。延南洞高级用餐。',
    keywords: '延南洞菜单, 韩牛肉脍价格, 弘大香槟吧菜单, 首尔高级餐厅菜单, 韩牛生拌价格',
    ogDescription: 'ROWISM The Black菜单：当日屠宰韩牛肉脍招牌 ₩92,000。松露、布拉塔奶酪、帕玛森。仅8席，需预约。'
  }
}

// Get URL path for a language
function getMenuLangPath(lang: Language): string {
  return lang === 'ko' ? '/menu' : `/${lang}/menu`
}

// Create menu page renderer
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
          <link rel="canonical" href={`https://rawism.kr${getMenuLangPath(pageLang)}`} />
          
          {/* hreflang tags */}
          <link rel="alternate" hreflang="ko" href="https://rawism.kr/menu" />
          <link rel="alternate" hreflang="en" href="https://rawism.kr/en/menu" />
          <link rel="alternate" hreflang="ja" href="https://rawism.kr/ja/menu" />
          <link rel="alternate" hreflang="zh" href="https://rawism.kr/zh/menu" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/menu" />
          
          {/* Favicon */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="theme-color" content="#080808" />
          
          {/* Open Graph */}
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.ogDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={pageLang === 'ko' ? 'ko_KR' : pageLang === 'ja' ? 'ja_JP' : pageLang === 'zh' ? 'zh_CN' : 'en_US'} />
          <meta property="og:site_name" content="ROWISM The Black" />
          <meta property="og:url" content={`https://rawism.kr${getMenuLangPath(pageLang)}`} />
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
          
          {/* Menu Page Schema.org */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": pageLang === 'ko' ? "ROWISM The Black 메뉴" : pageLang === 'ja' ? "ROWISM The Black メニュー" : pageLang === 'zh' ? "ROWISM The Black 菜单" : "ROWISM The Black Menu",
            "description": seo.description,
            "url": `https://rawism.kr${getMenuLangPath(pageLang)}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://rawism.kr${getMenuLangPath(pageLang)}`
            },
            "inLanguage": seo.lang,
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": "Signature",
                "hasMenuItem": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "로위즘 뭉티기 시그니처" : pageLang === 'ja' ? "ロウイズム ムンティギ シグネチャー" : pageLang === 'zh' ? "罗伊斯姆肉脍招牌" : "ROWISM Mungti-gi Signature",
                  "offers": { "@type": "Offer", "price": "92000", "priceCurrency": "KRW" },
                  "image": "https://rawism.kr/static/menu_signature.jpg"
                }
              }
            ]
          })}} />
          
          {/* BreadcrumbList */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "ROWISM The Black",
                "item": pageLang === 'ko' ? "https://rawism.kr/" : `https://rawism.kr/${pageLang}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": pageLang === 'ko' ? "메뉴" : pageLang === 'ja' ? "メニュー" : pageLang === 'zh' ? "菜单" : "Menu",
                "item": `https://rawism.kr${getMenuLangPath(pageLang)}`
              }
            ]
          })}} />
        </head>
        <body class="bg-deep-black text-off-white font-pretendard">
          {children}
        </body>
      </html>
    )
  })
}
