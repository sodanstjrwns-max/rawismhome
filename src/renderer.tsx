import { jsxRenderer } from 'hono/jsx-renderer'
import type { Context } from 'hono'

// Language types
type Language = 'ko' | 'en' | 'ja' | 'zh'

// SEO metadata for each language
const seoData: Record<Language, {
  lang: string
  title: string
  description: string
  keywords: string
  ogDescription: string
}> = {
  ko: {
    lang: 'ko',
    title: 'ROWISM The Black | 연남동 프리미엄 샴페인바 & 한우 뭉티기 | 홍대 데이트 기념일 맛집',
    description: '서울 연남동 프리미엄 샴페인바 ROWISM The Black. 당일 도축 온도체 한우 뭉티기와 샴페인이 만나는 특별한 밤. 체온이 남아있는 신선함 그대로, 부라타 치즈와 트러플의 조화. 홍대입구역 5분, 8석 한정 예약제. 2인 평균 18만원.',
    keywords: '연남동 샴페인바, 연남동 데이트, 연남동 기념일, 홍대 샴페인바, 홍대 데이트, 홍대 기념일 레스토랑, 한우 뭉티기, 트러플 육회, 연남동 분위기 좋은 곳, 기념일 레스토랑, 연남동 맛집, 홍대 데이트 코스, 연남동 프라이빗 다이닝, 연남동 한우, 홍대입구역 맛집, 연남동 럭셔리 레스토랑, 서울 샴페인바 추천, 연트럴파크 맛집, 경의선숲길 맛집',
    ogDescription: '당일 도축 온도체 한우의 생생한 육향. 체온이 남아있는 신선함 그대로 즐기는 뭉티기와 샴페인의 만남. 홍대입구역 5분, 8석 한정 예약제.'
  },
  en: {
    lang: 'en',
    title: 'ROWISM The Black | Premium Champagne Bar in Seoul Yeonnam-dong | Hongdae Date Anniversary',
    description: 'ROWISM The Black - Premium Champagne Bar in Yeonnam-dong, Seoul. Fresh same-day slaughtered Korean beef tartare (Mungti-gi) with Italian burrata cheese and black truffle. 5 min from Hongdae Station, 8 seats only, reservation required. Perfect for dates and anniversaries.',
    keywords: 'Hongdae restaurant, Yeonnam-dong restaurant, Seoul champagne bar, Korean beef tartare, Seoul date spot, Hongdae date restaurant, Seoul anniversary dinner, Yeonnam-dong fine dining, Seoul romantic restaurant, Hongdae wine bar, Seoul private dining, Korean raw beef, Seoul foodie, Hongdae hidden gem',
    ogDescription: 'Premium champagne bar in Seoul\'s Yeonnam-dong. Fresh Korean beef tartare with truffle and champagne pairing. 5 min from Hongdae Station, reservation required.'
  },
  ja: {
    lang: 'ja',
    title: 'ROWISM The Black | ソウル延南洞プレミアムシャンパンバー | 弘大デート記念日',
    description: 'ROWISM The Black - ソウル延南洞のプレミアムシャンパンバー。新鮮な韓牛タルタル（ムンティギ）とシャンパンのペアリング。弘大駅から徒歩5分、8席限定、要予約。デートや記念日に最適。',
    keywords: '弘大 レストラン, 延南洞 レストラン, ソウル シャンパンバー, 韓牛 ユッケ, ソウル デート, 弘大 デート, ソウル 記念日, 延南洞 グルメ, ソウル ロマンチック, 弘大 ワインバー, 韓国 生肉, ソウル 隠れ家',
    ogDescription: 'ソウル延南洞のプレミアムシャンパンバー。新鮮な韓牛タルタルとシャンパンのペアリング。弘大駅から徒歩5分、要予約。'
  },
  zh: {
    lang: 'zh',
    title: 'ROWISM The Black | 首尔延南洞高级香槟吧 | 弘大约会纪念日',
    description: 'ROWISM The Black - 首尔延南洞高级香槟吧。新鲜当日屠宰韩牛肉脍配意大利布拉塔奶酪和黑松露。弘大站步行5分钟，仅8席，需预约。约会和纪念日的完美选择。',
    keywords: '弘大餐厅, 延南洞餐厅, 首尔香槟吧, 韩牛生拌, 首尔约会, 弘大约会, 首尔纪念日, 延南洞美食, 首尔浪漫餐厅, 弘大酒吧, 韩国生牛肉, 首尔网红餐厅',
    ogDescription: '首尔延南洞高级香槟吧。新鲜韩牛肉脍与香槟搭配。弘大站步行5分钟，需预约。'
  }
}

// Get URL path for a language
function getLangPath(lang: Language): string {
  return lang === 'ko' ? '/' : `/${lang}`
}

// Create a renderer factory that accepts language parameter
export const createRenderer = (pageLang: Language = 'ko') => {
  const seo = seoData[pageLang]
  
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
          
          {/* Canonical URL - points to current language version */}
          <link rel="canonical" href={`https://rawism.kr${getLangPath(pageLang)}`} />
          
          {/* hreflang tags for all languages - CRITICAL for multilingual SEO */}
          <link rel="alternate" hreflang="ko" href="https://rawism.kr/" />
          <link rel="alternate" hreflang="en" href="https://rawism.kr/en" />
          <link rel="alternate" hreflang="ja" href="https://rawism.kr/ja" />
          <link rel="alternate" hreflang="zh" href="https://rawism.kr/zh" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/" />
          
          {/* Favicon & App Icons */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
          <meta name="theme-color" content="#080808" />
          <meta name="msapplication-TileColor" content="#080808" />
          
          {/* Geographic Tags for Local SEO */}
          <meta name="geo.region" content="KR-11" />
          <meta name="geo.placename" content="연남동, 마포구, 서울" />
          <meta name="geo.position" content="37.5595;126.9224" />
          <meta name="ICBM" content="37.5595, 126.9224" />
          <meta name="place:location:latitude" content="37.5595" />
          <meta name="place:location:longitude" content="126.9224" />
          
          {/* Additional Local SEO Tags */}
          <meta name="city" content="서울" />
          <meta name="country" content="대한민국" />
          <meta name="zipcode" content="04030" />
          <meta name="classification" content="Restaurant, Champagne Bar, Wine Bar, Fine Dining" />
          
          {/* Naver Specific Meta Tags */}
          <meta name="naver-site-verification" content="verify-code-here" />
          <meta property="naverbot" content="index, follow" />
          
          {/* Open Graph - Dynamic based on language */}
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.ogDescription} />
          <meta property="og:type" content="restaurant" />
          <meta property="og:locale" content={pageLang === 'ko' ? 'ko_KR' : pageLang === 'ja' ? 'ja_JP' : pageLang === 'zh' ? 'zh_CN' : 'en_US'} />
          <meta property="og:locale:alternate" content="ko_KR" />
          <meta property="og:locale:alternate" content="en_US" />
          <meta property="og:locale:alternate" content="ja_JP" />
          <meta property="og:locale:alternate" content="zh_CN" />
          <meta property="og:site_name" content="ROWISM The Black" />
          <meta property="og:url" content={`https://rawism.kr${getLangPath(pageLang)}`} />
          
          {/* OG Image - 대표 이미지 (카카오톡, 페이스북 등 공유 시 표시) */}
          <meta property="og:image" content="https://rawism.kr/static/og-image.jpg" />
          <meta property="og:image:secure_url" content="https://rawism.kr/static/og-image.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="ROWISM The Black - 연남동 프리미엄 샴페인바 | 트러플 한우 뭉티기" />
          
          {/* 추가 OG 이미지들 - 로고 */}
          <meta property="og:image" content="https://rawism.kr/static/logo.png" />
          <meta property="og:image:alt" content="ROWISM The Black 로고" />
          
          {/* 추가 OG 이미지들 - 시그니처 메뉴 */}
          <meta property="og:image" content="https://rawism.kr/static/menu_signature.jpg" />
          <meta property="og:image:alt" content="로위즘 뭉티기 시그니처 - 트러플 한우 뭉티기 부라타치즈" />
          
          {/* 추가 OG 이미지들 - 제비추리 */}
          <meta property="og:image" content="https://rawism.kr/static/menu_jebichuri.jpg" />
          <meta property="og:image:alt" content="제비추리 그릴드 베지터블 - 한우 제비추리와 8종 제철 채소" />
          
          {/* 추가 OG 이미지들 - 치즈 */}
          <meta property="og:image" content="https://rawism.kr/static/menu_cheese.jpg" />
          <meta property="og:image:alt" content="치즈 셀렉션 - 소믈리에 큐레이팅 6종 치즈" />
          
          {/* 추가 OG 이미지들 - 육회 */}
          <meta property="og:image" content="https://rawism.kr/static/menu_yukhoe.jpg" />
          <meta property="og:image:alt" content="청양 오일 육회 - 매콤한 한우 육회" />
          
          {/* 추가 OG 이미지들 - 카프레제 */}
          <meta property="og:image" content="https://rawism.kr/static/menu_caprese.jpg" />
          <meta property="og:image:alt" content="아보카도 카프레제 - 신선한 아보카도와 토마토" />
          
          {/* 추가 OG 이미지들 - 메밀면 */}
          <meta property="og:image" content="https://rawism.kr/static/menu_memil.jpg" />
          <meta property="og:image:alt" content="들기름 육회 메밀면 - 고소한 피니셔" />
          
          {/* Restaurant Specific OG Tags */}
          <meta property="restaurant:contact_info:street_address" content="동교로 262-4" />
          <meta property="restaurant:contact_info:locality" content="마포구" />
          <meta property="restaurant:contact_info:region" content="서울" />
          <meta property="restaurant:contact_info:country_name" content="대한민국" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.ogDescription} />
          <meta name="twitter:image" content="https://rawism.kr/static/og-image.jpg" />
          <meta name="twitter:image:alt" content="ROWISM The Black - 연남동 프리미엄 샴페인바 | 트러플 한우 뭉티기" />
          
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
          
          {/* Custom Styles */}
          <link href="/static/style.css" rel="stylesheet" />
          
          {/* Multilingual Translations - Load before other scripts */}
          <script src="/static/translations.js"></script>
          
          {/* Set initial language based on URL */}
          <script dangerouslySetInnerHTML={{__html: `
            // Set language from URL path before page renders
            window.INITIAL_LANG = '${pageLang}';
          `}} />
          
          {/* Schema.org Structured Data - Restaurant (Multilingual) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "ROWISM The Black",
            "alternateName": ["로위즘 더 블랙", "ロウイズム ザ ブラック", "罗伊斯姆黑"],
            "description": seo.description,
            "url": `https://rawism.kr${getLangPath(pageLang)}`,
            "telephone": "+82-10-0000-0000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "동교로 262-4",
              "addressLocality": "마포구",
              "addressRegion": "서울특별시",
              "postalCode": "04030",
              "addressCountry": "KR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.5595",
              "longitude": "126.9224"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "18:00",
                "closes": "24:00"
              }
            ],
            "servesCuisine": ["Korean", "Champagne Bar", "Korean Beef Tartare", "Hanwoo"],
            "menu": `https://rawism.kr${getLangPath(pageLang)}#menu`,
            "priceRange": "₩₩₩",
            "currenciesAccepted": "KRW",
            "acceptsReservations": true,
            "reservations": "https://naver.me/5qLSfCNC",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "image": [
              "https://rawism.kr/static/og-image.jpg",
              "https://rawism.kr/static/logo.png",
              "https://rawism.kr/static/menu_signature.jpg",
              "https://rawism.kr/static/menu_jebichuri.jpg",
              "https://rawism.kr/static/menu_cheese.jpg",
              "https://rawism.kr/static/menu_yukhoe.jpg",
              "https://rawism.kr/static/menu_caprese.jpg",
              "https://rawism.kr/static/menu_memil.jpg"
            ]
          })}} />
          
          {/* Schema.org - BreadcrumbList with language */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": pageLang === 'ko' ? '서울 맛집' : pageLang === 'ja' ? 'ソウルレストラン' : pageLang === 'zh' ? '首尔餐厅' : 'Seoul Restaurants',
                "item": `https://rawism.kr${getLangPath(pageLang)}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": pageLang === 'ko' ? '연남동 샴페인바' : pageLang === 'ja' ? '延南洞シャンパンバー' : pageLang === 'zh' ? '延南洞香槟吧' : 'Yeonnam-dong Champagne Bar',
                "item": `https://rawism.kr${getLangPath(pageLang)}`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "ROWISM The Black",
                "item": `https://rawism.kr${getLangPath(pageLang)}`
              }
            ]
          })}} />
        </head>
        <body class="bg-deep-black text-off-white font-pretendard">
          {children}
          <script src="/static/app.js"></script>
        </body>
      </html>
    )
  })
}

// Default renderer for backward compatibility (Korean)
export const renderer = createRenderer('ko')
