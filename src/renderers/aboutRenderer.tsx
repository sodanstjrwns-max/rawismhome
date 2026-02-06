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
    title: '브랜드 스토리 | ROWISM The Black | 연남동 샴페인바 소개',
    description: 'ROWISM The Black 브랜드 스토리 - RAW와 ism의 결합, 날것의 철학. 2023년 연남동에 문을 연 8석 한정 프라이빗 다이닝. 당일 도축 한우와 소믈리에 큐레이션 샴페인.',
    keywords: 'ROWISM 브랜드, 연남동 샴페인바 소개, 로위즘 스토리, 연남동 프라이빗 다이닝, 홍대 고급 레스토랑, 연남동 데이트 장소 소개, ROWISM The Black 철학',
    ogDescription: 'RAW와 ism의 결합, 날것의 철학. ROWISM The Black의 브랜드 스토리를 확인하세요.'
  },
  en: {
    lang: 'en',
    title: 'Brand Story | ROWISM The Black | Seoul Yeonnam-dong Champagne Bar',
    description: 'ROWISM The Black Brand Story - The combination of RAW and ism, philosophy of rawness. Private dining with only 8 seats, opened in Yeonnam-dong in 2023. Same-day slaughtered Korean beef and sommelier-curated champagne.',
    keywords: 'ROWISM brand, Yeonnam champagne bar about, ROWISM story, Yeonnam private dining, Hongdae luxury restaurant, ROWISM The Black philosophy',
    ogDescription: 'The combination of RAW and ism, philosophy of rawness. Discover the ROWISM The Black brand story.'
  },
  ja: {
    lang: 'ja',
    title: 'ブランドストーリー | ROWISM The Black | ソウル延南洞シャンパンバー',
    description: 'ROWISM The Black ブランドストーリー - RAWとismの結合、生の哲学。2023年延南洞にオープンした8席限定プライベートダイニング。当日屠畜韓牛とソムリエキュレーションシャンパン。',
    keywords: 'ROWISMブランド, 延南洞シャンパンバー紹介, ロウィズムストーリー, 延南洞プライベートダイニング, 弘大高級レストラン, ROWISM The Black哲学',
    ogDescription: 'RAWとismの結合、生の哲学。ROWISM The Blackのブランドストーリーをご覧ください。'
  },
  zh: {
    lang: 'zh',
    title: '品牌故事 | ROWISM The Black | 首尔延南洞香槟吧',
    description: 'ROWISM The Black 品牌故事 - RAW与ism的结合，生食哲学。2023年在延南洞开业的仅8席私密用餐。当日屠宰韩牛和侍酒师策划香槟。',
    keywords: 'ROWISM品牌, 延南洞香槟吧介绍, ROWISM故事, 延南洞私密用餐, 弘大高级餐厅, ROWISM The Black哲学',
    ogDescription: 'RAW与ism的结合，生食哲学。了解ROWISM The Black的品牌故事。'
  }
}

function getLangPath(lang: Language): string {
  return lang === 'ko' ? '' : `/${lang}`
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
          <meta name="author" content="ROWISM The Black" />
          <meta name="robots" content="index, follow" />
          
          {/* Canonical URL */}
          <link rel="canonical" href={`https://rawism.kr${getLangPath(pageLang)}/about`} />
          
          {/* hreflang tags - Note: ko and x-default may be deduplicated by JSX, but sitemap.xml has complete hreflang coverage */}
          <link rel="alternate" hreflang="ko" href="https://rawism.kr/about" />
          <link rel="alternate" hreflang="en" href="https://rawism.kr/en/about" />
          <link rel="alternate" hreflang="ja" href="https://rawism.kr/ja/about" />
          <link rel="alternate" hreflang="zh" href="https://rawism.kr/zh/about" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/about" />
          
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
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={pageLang === 'ko' ? 'ko_KR' : pageLang === 'ja' ? 'ja_JP' : pageLang === 'zh' ? 'zh_CN' : 'en_US'} />
          <meta property="og:site_name" content="ROWISM The Black" />
          <meta property="og:url" content={`https://rawism.kr${getLangPath(pageLang)}/about`} />
          <meta property="og:image" content="https://rawism.kr/static/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.ogDescription} />
          <meta name="twitter:image" content="https://rawism.kr/static/og-image.jpg" />
          
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
          
          {/* About Page Schema.org */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": `https://rawism.kr${getLangPath(pageLang)}/about#aboutpage`,
            "name": seo.title,
            "description": seo.description,
            "url": `https://rawism.kr${getLangPath(pageLang)}/about`,
            "inLanguage": seo.lang,
            "mainEntity": {
              "@type": "Organization",
              "name": "ROWISM The Black",
              "url": "https://rawism.kr",
              "logo": "https://rawism.kr/static/logo.png",
              "foundingDate": "2023",
              "foundingLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "마포구",
                  "addressRegion": "서울특별시",
                  "addressCountry": "KR"
                }
              },
              "description": seo.description
            }
          })}} />
          
          {/* BreadcrumbList for About Page */}
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
                "name": pageLang === 'ko' ? "브랜드 스토리" : pageLang === 'ja' ? "ブランドストーリー" : pageLang === 'zh' ? "品牌故事" : "Brand Story",
                "item": `https://rawism.kr${getLangPath(pageLang)}/about`
              }
            ]
          })}} />
          
          {/* Article Schema (브랜드 스토리) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": pageLang === 'ko' ? "ROWISM - 날것의 철학, 부라타 치즈와 트러플이 만나는 한우 뭉티기" : pageLang === 'ja' ? "ROWISM - 生の哲学、ブッラータチーズとトリュフが出会う韓牛ムンティギ" : pageLang === 'zh' ? "ROWISM - 生食哲学，布拉塔奶酪与松露相遇的韩牛肉脍" : "ROWISM - Philosophy of Raw, Hanwoo Tartare meets Burrata Cheese and Truffle",
            "description": seo.description,
            "image": "https://rawism.kr/static/og-image.jpg",
            "datePublished": "2023-01-01",
            "dateModified": "2026-02-06",
            "author": {
              "@type": "Organization",
              "name": "ROWISM The Black",
              "url": "https://rawism.kr"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ROWISM The Black",
              "logo": {
                "@type": "ImageObject",
                "url": "https://rawism.kr/static/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://rawism.kr${getLangPath(pageLang)}/about`
            },
            "articleBody": pageLang === 'ko' ? "ROWISM은 RAW와 ism의 결합입니다. 최상급 재료 본연의 맛을 가장 순수한 방식으로 전달하는 철학. 2023년 연남동 골목 속에 문을 열어 감각의 경험을 디자인합니다." : pageLang === 'ja' ? "ROWISMはRAWとismの結合です。最高級食材本来の味を最も純粋な方法で届ける哲学。2023年延南洞の路地裏にオープンし、感覚の体験をデザインします。" : pageLang === 'zh' ? "ROWISM是RAW与ism的结合。以最纯粹的方式传递顶级食材原味的哲学。2023年在延南洞小巷开业，设计感官体验。" : "ROWISM is the combination of RAW and ism. Philosophy of delivering the authentic taste of premium ingredients in the purest way. Opened in a Yeonnam-dong alley in 2023, designing sensory experiences.",
            "inLanguage": seo.lang
          })}} />
          
          {/* Organization (확장된 브랜드 정보) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://rawism.kr/#organization-detailed",
            "name": "ROWISM The Black",
            "alternateName": ["로위즘 더 블랙", "ロウイズム ザ ブラック", "罗伊斯姆黑"],
            "url": "https://rawism.kr",
            "logo": {
              "@type": "ImageObject",
              "url": "https://rawism.kr/static/logo.png",
              "width": 512,
              "height": 512
            },
            "image": "https://rawism.kr/static/og-image.jpg",
            "description": seo.description,
            "foundingDate": "2023",
            "foundingLocation": {
              "@type": "Place",
              "name": pageLang === 'ko' ? "연남동" : pageLang === 'ja' ? "延南洞" : pageLang === 'zh' ? "延南洞" : "Yeonnam-dong",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "마포구",
                "addressRegion": "서울특별시",
                "addressCountry": "KR"
              }
            },
            "brand": {
              "@type": "Brand",
              "name": "ROWISM",
              "slogan": pageLang === 'ko' ? "날것의 철학, 최상급 재료를 가장 순수한 방식으로" : pageLang === 'ja' ? "生の哲学、最高級食材を最も純粋な方法で" : pageLang === 'zh' ? "生食哲学，以最纯粹的方式呈现顶级食材" : "Philosophy of Raw, premium ingredients in the purest way",
              "logo": "https://rawism.kr/static/logo.png"
            },
            "knowsAbout": [
              pageLang === 'ko' ? "한우 뭉티기" : pageLang === 'ja' ? "韓牛ムンティギ" : pageLang === 'zh' ? "韩牛肉脍" : "Hanwoo Mungti-gi",
              pageLang === 'ko' ? "샴페인 페어링" : pageLang === 'ja' ? "シャンパンペアリング" : pageLang === 'zh' ? "香槟搭配" : "Champagne Pairing",
              pageLang === 'ko' ? "프라이빗 다이닝" : pageLang === 'ja' ? "プライベートダイニング" : pageLang === 'zh' ? "私密用餐" : "Private Dining"
            ],
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "minValue": 5,
              "maxValue": 10
            },
            "slogan": pageLang === 'ko' ? "날것의 철학, RAWism" : pageLang === 'ja' ? "生の哲学、RAWism" : pageLang === 'zh' ? "生食哲学，RAWism" : "Philosophy of Raw, RAWism",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+82-10-0000-0000",
                "contactType": "reservations",
                "availableLanguage": ["Korean", "English", "Japanese", "Chinese"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "18:00",
                  "closes": "24:00"
                }
              }
            ],
            "sameAs": [
              "https://www.instagram.com/rowism_theblack",
              "https://naver.me/5qLSfCNC"
            ]
          })}} />
          
          {/* About WebPage Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://rawism.kr${getLangPath(pageLang)}/about#webpage`,
            "url": `https://rawism.kr${getLangPath(pageLang)}/about`,
            "name": seo.title,
            "description": seo.description,
            "inLanguage": seo.lang,
            "isPartOf": {
              "@id": "https://rawism.kr/#website"
            },
            "about": {
              "@id": "https://rawism.kr/#organization-detailed"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://rawism.kr/static/og-image.jpg"
            },
            "datePublished": "2024-01-01",
            "dateModified": "2026-02-06",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".brand-story"]
            }
          })}} />
          
          {/* CreativeWork (브랜드 철학 컨텐츠) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": pageLang === 'ko' ? "ROWISM - 날것의 미학" : pageLang === 'ja' ? "ROWISM - 生の美学" : pageLang === 'zh' ? "ROWISM - 生食美学" : "ROWISM - Aesthetics of Raw",
            "author": {
              "@type": "Organization",
              "name": "ROWISM The Black"
            },
            "dateCreated": "2023-01-01",
            "description": pageLang === 'ko' ? "RAW와 ism의 결합. RAW(날것) + ism(철학) = 최상급 재료 본연의 맛을 가장 순수한 방식으로 전달하는 철학." : pageLang === 'ja' ? "RAWとismの結合。RAW(生) + ism(哲学) = 最高級食材本来の味を最も純粋な方法で届ける哲学。" : pageLang === 'zh' ? "RAW与ism的结合。RAW(生食) + ism(哲学) = 以最纯粹的方式传递顶级食材原味的哲学。" : "Combination of RAW and ism. RAW(raw) + ism(philosophy) = Philosophy of delivering the authentic taste of premium ingredients in the purest way.",
            "inLanguage": ["ko", "en", "ja", "zh"],
            "keywords": seo.keywords,
            "url": `https://rawism.kr${getLangPath(pageLang)}/about#philosophy`
          })}} />
        </head>
        <body class="bg-deep-black text-off-white font-pretendard">
          {children}
        </body>
      </html>
    )
  })
}
