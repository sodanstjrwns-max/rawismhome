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
    title: '메뉴 | RAWISM The Black | 연남동 샴페인바 트러플 한우 뭉티기',
    description: 'RAWISM The Black 메뉴 - 시그니처 트러플 한우 뭉티기 부라타 ₩69,000, 제비추리 그릴드 ₩39,000, 치즈 셀렉션 ₩35,000, 청양 오일 육회 ₩25,000. 당일 도축 온도체 한우와 소믈리에 큐레이션 샴페인.',
    keywords: '연남동 메뉴, RAWISM 메뉴, 한우 뭉티기 가격, 트러플 육회, 연남동 한우 가격, 홍대 샴페인바 메뉴, 연남동 프리미엄 다이닝 메뉴, 부라타 치즈 한우',
    ogDescription: '시그니처 트러플 한우 뭉티기 부라타 ₩69,000 - 당일 도축 온도체 한우의 생생한 육향과 이탈리아 부라타 치즈의 조화'
  },
  en: {
    lang: 'en',
    title: 'Menu | RAWISM The Black | Seoul Yeonnam-dong Champagne Bar',
    description: 'RAWISM The Black Menu - Signature Truffle Hanwoo Tartare Burrata ₩69,000, Grilled Jebichuri ₩39,000, Cheese Selection ₩35,000. Fresh same-day slaughtered Korean beef with sommelier-curated champagne.',
    keywords: 'RAWISM menu, Hongdae restaurant menu, Korean beef tartare price, Seoul champagne bar menu, Yeonnam-dong dining menu, truffle beef Seoul',
    ogDescription: 'Signature Truffle Hanwoo Tartare Burrata ₩69,000 - Fresh same-day slaughtered Korean beef with Italian burrata cheese'
  },
  ja: {
    lang: 'ja',
    title: 'メニュー | RAWISM The Black | ソウル延南洞シャンパンバー',
    description: 'RAWISM The Black メニュー - シグネチャー トリュフ韓牛タルタル ブッラータ ₩69,000、ジェビチュリグリル ₩39,000、チーズセレクション ₩35,000。当日屠畜韓牛とソムリエ厳選シャンパン。',
    keywords: 'RAWISM メニュー, 弘大 レストラン メニュー, 韓牛 ユッケ 価格, ソウル シャンパンバー メニュー, 延南洞 ダイニング',
    ogDescription: 'シグネチャー トリュフ韓牛タルタル ブッラータ ₩69,000 - 当日屠畜韓牛とイタリア産ブッラータチーズ'
  },
  zh: {
    lang: 'zh',
    title: '菜单 | RAWISM The Black | 首尔延南洞香槟吧',
    description: 'RAWISM The Black 菜单 - 招牌松露韩牛肉脍布拉塔 ₩69,000，烤牛肩肉 ₩39,000，奶酪拼盘 ₩35,000。当日屠宰韩牛配侍酒师精选香槟。',
    keywords: 'RAWISM 菜单, 弘大餐厅菜单, 韩牛生拌价格, 首尔香槟吧菜单, 延南洞美食菜单',
    ogDescription: '招牌松露韩牛肉脍布拉塔 ₩69,000 - 当日屠宰韩牛配意大利布拉塔奶酪'
  }
}

function getMenuLangPath(lang: Language): string {
  return lang === 'ko' ? '/menu' : `/${lang}/menu`
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
          <meta name="author" content="RAWISM The Black" />
          <meta name="robots" content="index, follow" />
          
          <link rel="canonical" href={`https://rawism.kr${getMenuLangPath(pageLang)}`} />
          
          <link rel="alternate" hreflang="ko" href="https://rawism.kr/menu" />
          <link rel="alternate" hreflang="en" href="https://rawism.kr/en/menu" />
          <link rel="alternate" hreflang="ja" href="https://rawism.kr/ja/menu" />
          <link rel="alternate" hreflang="zh" href="https://rawism.kr/zh/menu" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/menu" />
          
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="theme-color" content="#080808" />
          
          <meta name="geo.region" content="KR-11" />
          <meta name="geo.placename" content="연남동, 마포구, 서울" />
          <meta name="geo.position" content="37.5595;126.9224" />
          
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.ogDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={pageLang === 'ko' ? 'ko_KR' : pageLang === 'ja' ? 'ja_JP' : pageLang === 'zh' ? 'zh_CN' : 'en_US'} />
          <meta property="og:site_name" content="RAWISM The Black" />
          <meta property="og:url" content={`https://rawism.kr${getMenuLangPath(pageLang)}`} />
          <meta property="og:image" content="https://rawism.kr/static/menu_signature.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.ogDescription} />
          <meta name="twitter:image" content="https://rawism.kr/static/menu_signature.jpg" />
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Noto+Serif+KR:wght@300;400;500;600;700&family=Pretendard:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          
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
          
          {/* Menu Page Schema - MenuSection with full items */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": pageLang === 'ko' ? "RAWISM The Black 메뉴" : pageLang === 'ja' ? "RAWISM The Black メニュー" : pageLang === 'zh' ? "RAWISM The Black 菜单" : "RAWISM The Black Menu",
            "description": seo.description,
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": "Signature",
                "hasMenuItem": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "로위즘 뭉티기 시그니처" : pageLang === 'ja' ? "ロウイズム ムンティギ シグネチャー" : pageLang === 'zh' ? "罗伊斯姆肉脍招牌" : "RAWISM Mungti-gi Signature",
                  "offers": { "@type": "Offer", "price": "69000", "priceCurrency": "KRW" },
                  "image": "https://rawism.kr/static/menu_signature.jpg"
                }
              },
              {
                "@type": "MenuSection",
                "name": pageLang === 'ko' ? "메인 요리" : "Main Dishes",
                "hasMenuItem": [
                  { "@type": "MenuItem", "name": pageLang === 'ko' ? "제비추리 그릴드 베지터블" : "Jebichuri Grilled Vegetables", "offers": { "@type": "Offer", "price": "39000", "priceCurrency": "KRW" } },
                  { "@type": "MenuItem", "name": pageLang === 'ko' ? "치즈 셀렉션" : "Cheese Selection", "offers": { "@type": "Offer", "price": "35000", "priceCurrency": "KRW" } },
                  { "@type": "MenuItem", "name": pageLang === 'ko' ? "청양 오일 육회" : "Cheongyang Oil Yukhoe", "offers": { "@type": "Offer", "price": "25000", "priceCurrency": "KRW" } },
                  { "@type": "MenuItem", "name": pageLang === 'ko' ? "아보카도 카프레제" : "Avocado Caprese", "offers": { "@type": "Offer", "price": "23000", "priceCurrency": "KRW" } }
                ]
              },
              {
                "@type": "MenuSection",
                "name": "Finisher",
                "hasMenuItem": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "들기름 육회 메밀면" : "Perilla Oil Buckwheat Noodles",
                  "offers": { "@type": "Offer", "price": "15000", "priceCurrency": "KRW" }
                }
              }
            ],
            "inLanguage": seo.lang
          })}} />
          
          {/* BreadcrumbList for Menu page */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "RAWISM The Black", "item": "https://rawism.kr" },
              { "@type": "ListItem", "position": 2, "name": pageLang === 'ko' ? "메뉴" : pageLang === 'ja' ? "メニュー" : pageLang === 'zh' ? "菜单" : "Menu", "item": `https://rawism.kr${getMenuLangPath(pageLang)}` }
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
