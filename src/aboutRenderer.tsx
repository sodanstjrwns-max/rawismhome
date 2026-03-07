import { jsxRenderer } from 'hono/jsx-renderer'

type Language = 'ko' | 'en' | 'ja' | 'zh'

// About page SEO data
const aboutSeoData: Record<Language, {
  lang: string
  title: string
  description: string
  keywords: string
  ogDescription: string
}> = {
  ko: {
    lang: 'ko',
    title: 'About | RAWISM The Black | 연남동 프리미엄 샴페인바 브랜드 스토리',
    description: 'RAWISM The Black - RAW와 ism의 결합, 날것의 철학. 연남동 프리미엄 샴페인바의 브랜드 스토리. 최상급 한우 뭉티기와 소믈리에 큐레이션 샴페인, 8석 프라이빗 다이닝의 특별한 공간.',
    keywords: 'RAWISM 브랜드, 연남동 샴페인바 소개, RAWISM 철학, 연남동 프라이빗 다이닝, 홍대 프리미엄 레스토랑, 연남동 분위기 좋은 곳, 한우 뭉티기 전문점',
    ogDescription: 'RAW + ism = RAWISM. 날것의 철학으로 최상급 재료 본연의 맛을 가장 순수한 방식으로.'
  },
  en: {
    lang: 'en',
    title: 'About | RAWISM The Black | Seoul Premium Champagne Bar Story',
    description: 'RAWISM The Black - The Philosophy of Raw. Brand story of premium champagne bar in Yeonnam-dong, Seoul. Premium Hanwoo tartare with sommelier-curated champagne in an 8-seat private dining space.',
    keywords: 'RAWISM brand, Seoul champagne bar about, RAWISM philosophy, Yeonnam-dong private dining, Hongdae premium restaurant, Seoul romantic restaurant',
    ogDescription: 'RAW + ism = RAWISM. The philosophy of delivering the purest taste of premium ingredients.'
  },
  ja: {
    lang: 'ja',
    title: 'About | RAWISM The Black | ソウル延南洞シャンパンバーのストーリー',
    description: 'RAWISM The Black - 生の哲学。ソウル延南洞プレミアムシャンパンバーのブランドストーリー。最高級韓牛タルタルとソムリエ厳選シャンパン、8席プライベートダイニング。',
    keywords: 'RAWISM ブランド, ソウル シャンパンバー 紹介, 延南洞 プライベートダイニング, 弘大 プレミアムレストラン',
    ogDescription: 'RAW + ism = RAWISM。最高級食材本来の味を最も純粋な方法でお届けする哲学。'
  },
  zh: {
    lang: 'zh',
    title: 'About | RAWISM The Black | 首尔延南洞香槟吧品牌故事',
    description: 'RAWISM The Black - 生食哲学。首尔延南洞顶级香槟吧的品牌故事。顶级韩牛肉脍配侍酒师精选香槟，8席私密用餐空间。',
    keywords: 'RAWISM 品牌, 首尔香槟吧介绍, 延南洞私密用餐, 弘大顶级餐厅',
    ogDescription: 'RAW + ism = RAWISM。以最纯粹的方式传递顶级食材本真味道的哲学。'
  }
}

function getAboutLangPath(lang: Language): string {
  return lang === 'ko' ? '/about' : `/${lang}/about`
}

export const createAboutRenderer = (pageLang: Language = 'ko') => {
  const seo = aboutSeoData[pageLang]
  
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
          
          <link rel="canonical" href={`https://rawism.kr${getAboutLangPath(pageLang)}`} />
          
          <link rel="alternate" hreflang="ko" href="https://rawism.kr/about" />
          <link rel="alternate" hreflang="en" href="https://rawism.kr/en/about" />
          <link rel="alternate" hreflang="ja" href="https://rawism.kr/ja/about" />
          <link rel="alternate" hreflang="zh" href="https://rawism.kr/zh/about" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/about" />
          
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
          <meta property="og:url" content={`https://rawism.kr${getAboutLangPath(pageLang)}`} />
          <meta property="og:image" content="https://rawism.kr/static/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.ogDescription} />
          <meta name="twitter:image" content="https://rawism.kr/static/og-image.jpg" />
          
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
          
          {/* About Page Schema - Organization with full details */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": seo.title,
            "description": seo.description,
            "url": `https://rawism.kr${getAboutLangPath(pageLang)}`,
            "mainEntity": {
              "@type": "Organization",
              "name": "RAWISM The Black",
              "alternateName": ["로위즘 더 블랙", "ロウイズム ザ ブラック", "罗伊斯姆黑"],
              "description": seo.description,
              "url": "https://rawism.kr",
              "logo": "https://rawism.kr/static/logo.png",
              "foundingDate": "2023",
              "slogan": pageLang === 'ko' ? "날것의 철학, RAWISM" : pageLang === 'ja' ? "生の哲学、RAWISM" : pageLang === 'zh' ? "生食哲学，RAWISM" : "The Philosophy of Raw, RAWISM",
              "knowsAbout": ["Korean Beef Tartare", "Champagne", "Fine Dining", "Private Dining"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "동교로 262-4",
                "addressLocality": "마포구",
                "addressRegion": "서울특별시",
                "postalCode": "04030",
                "addressCountry": "KR"
              }
            },
            "inLanguage": seo.lang
          })}} />
          
          {/* BreadcrumbList for About page */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "RAWISM The Black", "item": "https://rawism.kr" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": `https://rawism.kr${getAboutLangPath(pageLang)}` }
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
