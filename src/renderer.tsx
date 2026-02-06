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
          
          {/* Schema.org - LocalBusiness (지역 비즈니스 SEO 핵심) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://rawism.kr/#localbusiness",
            "name": "ROWISM The Black",
            "alternateName": ["로위즘 더 블랙", "ロウイズム ザ ブラック", "罗伊斯姆黑"],
            "description": seo.description,
            "url": `https://rawism.kr${getLangPath(pageLang)}`,
            "telephone": "+82-10-0000-0000",
            "email": "contact@rawism.kr",
            "priceRange": "₩₩₩",
            "currenciesAccepted": "KRW",
            "paymentAccepted": "현금, 신용카드, 카카오페이, 네이버페이",
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
              "latitude": 37.5595,
              "longitude": 126.9224
            },
            "hasMap": "https://naver.me/5qLSfCNC",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "18:00",
                "closes": "24:00"
              }
            ],
            "specialOpeningHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Monday",
                "opens": "00:00",
                "closes": "00:00",
                "validFrom": "2024-01-01",
                "validThrough": "2026-12-31",
                "description": pageLang === 'ko' ? '월요일 정기휴무' : pageLang === 'ja' ? '月曜定休' : pageLang === 'zh' ? '周一休息' : 'Closed on Mondays'
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.9,
              "reviewCount": 127,
              "bestRating": 5,
              "worstRating": 1
            },
            "areaServed": [
              { "@type": "City", "name": "서울특별시" },
              { "@type": "Place", "name": "연남동" },
              { "@type": "Place", "name": "홍대입구" },
              { "@type": "Place", "name": "합정동" },
              { "@type": "Place", "name": "서교동" }
            ],
            "image": [
              "https://rawism.kr/static/og-image.jpg",
              "https://rawism.kr/static/logo.png",
              "https://rawism.kr/static/menu_signature.jpg"
            ],
            "sameAs": [
              "https://www.instagram.com/rowism_theblack",
              "https://naver.me/5qLSfCNC"
            ]
          })}} />
          
          {/* Schema.org - Organization (브랜드 신뢰도) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://rawism.kr/#organization",
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
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "마포구",
                "addressRegion": "서울특별시",
                "addressCountry": "KR"
              }
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+82-10-0000-0000",
              "contactType": "reservations",
              "availableLanguage": ["Korean", "English", "Japanese", "Chinese"]
            },
            "sameAs": [
              "https://www.instagram.com/rowism_theblack",
              "https://naver.me/5qLSfCNC"
            ]
          })}} />
          
          {/* Schema.org - WebSite (사이트 검색 강화) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://rawism.kr/#website",
            "url": "https://rawism.kr",
            "name": "ROWISM The Black",
            "description": seo.description,
            "publisher": {
              "@id": "https://rawism.kr/#organization"
            },
            "inLanguage": [
              { "@type": "Language", "name": "Korean", "alternateName": "ko" },
              { "@type": "Language", "name": "English", "alternateName": "en" },
              { "@type": "Language", "name": "Japanese", "alternateName": "ja" },
              { "@type": "Language", "name": "Chinese", "alternateName": "zh" }
            ]
          })}} />
          
          {/* Schema.org - WebPage (현재 페이지 정보) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://rawism.kr${getLangPath(pageLang)}#webpage`,
            "url": `https://rawism.kr${getLangPath(pageLang)}`,
            "name": seo.title,
            "description": seo.description,
            "inLanguage": seo.lang,
            "isPartOf": {
              "@id": "https://rawism.kr/#website"
            },
            "about": {
              "@id": "https://rawism.kr/#organization"
            },
            "datePublished": "2024-01-01",
            "dateModified": "2026-02-06"
          })}} />
          
          {/* Schema.org - FAQPage (FAQ 리치 스니펫) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": pageLang === 'ko' ? "ROWISM The Black은 어디에 있나요?" : pageLang === 'ja' ? "ROWISM The Blackはどこにありますか？" : pageLang === 'zh' ? "ROWISM The Black在哪里？" : "Where is ROWISM The Black located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": pageLang === 'ko' ? "서울시 마포구 동교로 262-4에 위치해 있습니다. 홍대입구역 3번 출구에서 도보 5분 거리입니다." : pageLang === 'ja' ? "ソウル市麻浦区東橋路262-4にあります。弘大入口駅3番出口から徒歩5分です。" : pageLang === 'zh' ? "位于首尔市麻浦区东桥路262-4。从弘大入口站3号出口步行5分钟。" : "Located at 262-4 Donggyo-ro, Mapo-gu, Seoul. 5-minute walk from Hongdae Station Exit 3."
                }
              },
              {
                "@type": "Question",
                "name": pageLang === 'ko' ? "예약은 필수인가요?" : pageLang === 'ja' ? "予約は必要ですか？" : pageLang === 'zh' ? "需要预约吗？" : "Is reservation required?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": pageLang === 'ko' ? "네, 8석 한정 프라이빗 다이닝으로 예약제로 운영됩니다. 네이버 예약 또는 전화로 예약해 주세요." : pageLang === 'ja' ? "はい、8席限定のプライベートダイニングのため、予約制で運営しています。ネイバー予約またはお電話でご予約ください。" : pageLang === 'zh' ? "是的，仅8席私密用餐，需预约。请通过Naver预订或电话预约。" : "Yes, we operate by reservation only with 8 seats. Please book via Naver Reservation or phone."
                }
              },
              {
                "@type": "Question",
                "name": pageLang === 'ko' ? "시그니처 메뉴는 무엇인가요?" : pageLang === 'ja' ? "シグネチャーメニューは何ですか？" : pageLang === 'zh' ? "招牌菜是什么？" : "What is the signature menu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": pageLang === 'ko' ? "당일 도축 온도체 한우로 만든 '트러플 한우 뭉티기 부라타'입니다. 체온이 남아있는 신선한 한우에 이탈리안 부라타 치즈와 블랙 트러플을 곁들입니다." : pageLang === 'ja' ? "当日屠畜の韓牛で作る「トリュフ韓牛タルタル ブッラータ」です。体温が残る新鮮な韓牛にイタリアンブッラータチーズとブラックトリュフを添えます。" : pageLang === 'zh' ? "用当日屠宰的韩牛制作的'松露韩牛肉脍布拉塔'。搭配新鲜韩牛、意大利布拉塔奶酪和黑松露。" : "Our signature is 'Truffle Hanwoo Tartare Burrata' made with same-day slaughtered Korean beef, Italian burrata cheese, and black truffle."
                }
              },
              {
                "@type": "Question",
                "name": pageLang === 'ko' ? "영업시간이 어떻게 되나요?" : pageLang === 'ja' ? "営業時間は何時ですか？" : pageLang === 'zh' ? "营业时间是什么时候？" : "What are the opening hours?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": pageLang === 'ko' ? "화요일부터 일요일 오후 6시부터 자정까지 운영합니다. 월요일은 정기휴무입니다." : pageLang === 'ja' ? "火曜日から日曜日、午後6時から深夜まで営業しています。月曜日は定休日です。" : pageLang === 'zh' ? "周二至周日下午6点至午夜营业。周一休息。" : "We are open Tuesday to Sunday from 6 PM to midnight. Closed on Mondays."
                }
              },
              {
                "@type": "Question",
                "name": pageLang === 'ko' ? "2인 기준 평균 가격은 얼마인가요?" : pageLang === 'ja' ? "2人の平均価格はいくらですか？" : pageLang === 'zh' ? "两人平均消费是多少？" : "What is the average price for two people?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": pageLang === 'ko' ? "2인 기준 평균 18만원입니다. 샴페인 페어링 포함 시 25-30만원 정도입니다." : pageLang === 'ja' ? "2名様で平均18万ウォンです。シャンパンペアリング込みで25-30万ウォン程度です。" : pageLang === 'zh' ? "两人平均18万韩元。包含香槟搭配约25-30万韩元。" : "Average is 180,000 KRW for two. With champagne pairing, around 250,000-300,000 KRW."
                }
              },
              {
                "@type": "Question",
                "name": pageLang === 'ko' ? "외국어 메뉴가 있나요?" : pageLang === 'ja' ? "外国語メニューはありますか？" : pageLang === 'zh' ? "有外语菜单吗？" : "Do you have menus in other languages?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": pageLang === 'ko' ? "네, 한국어, 영어, 일본어, 중국어 메뉴를 제공합니다. 외국인 고객 환영합니다!" : pageLang === 'ja' ? "はい、韓国語、英語、日本語、中国語のメニューをご用意しています。外国人のお客様大歓迎です！" : pageLang === 'zh' ? "是的，我们提供韩语、英语、日语和中文菜单。欢迎外国客人！" : "Yes, we offer menus in Korean, English, Japanese, and Chinese. Foreign guests are welcome!"
                }
              }
            ]
          })}} />
          
          {/* Schema.org - Menu (메뉴 정보) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            "@id": "https://rawism.kr/#menu",
            "name": pageLang === 'ko' ? "ROWISM The Black 메뉴" : pageLang === 'ja' ? "ROWISM The Black メニュー" : pageLang === 'zh' ? "ROWISM The Black 菜单" : "ROWISM The Black Menu",
            "description": pageLang === 'ko' ? "당일 도축 한우와 샴페인의 조화" : pageLang === 'ja' ? "当日屠畜韓牛とシャンパンの調和" : pageLang === 'zh' ? "当日屠宰韩牛与香槟的和谐" : "Harmony of same-day slaughtered Hanwoo and champagne",
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": pageLang === 'ko' ? "시그니처" : pageLang === 'ja' ? "シグネチャー" : pageLang === 'zh' ? "招牌菜" : "Signature",
                "hasMenuItem": [
                  {
                    "@type": "MenuItem",
                    "name": pageLang === 'ko' ? "트러플 한우 뭉티기 부라타" : pageLang === 'ja' ? "トリュフ韓牛タルタル ブッラータ" : pageLang === 'zh' ? "松露韩牛肉脍布拉塔" : "Truffle Hanwoo Tartare Burrata",
                    "description": pageLang === 'ko' ? "당일 도축 온도체 한우, 이탈리안 부라타 치즈, 블랙 트러플" : pageLang === 'ja' ? "当日屠畜韓牛、イタリアンブッラータチーズ、ブラックトリュフ" : pageLang === 'zh' ? "当日屠宰韩牛、意大利布拉塔奶酪、黑松露" : "Same-day slaughtered Hanwoo, Italian burrata cheese, black truffle",
                    "offers": {
                      "@type": "Offer",
                      "price": "68000",
                      "priceCurrency": "KRW"
                    },
                    "image": "https://rawism.kr/static/menu_signature.jpg",
                    "nutrition": {
                      "@type": "NutritionInformation",
                      "servingSize": "2인분"
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
                    "name": pageLang === 'ko' ? "청양 오일 육회" : pageLang === 'ja' ? "青陽オイル ユッケ" : pageLang === 'zh' ? "青阳油拌生牛肉" : "Cheongyang Oil Yukhoe",
                    "description": pageLang === 'ko' ? "매콤한 청양고추 오일과 신선한 한우 육회" : pageLang === 'ja' ? "ピリ辛青陽唐辛子オイルと新鮮な韓牛ユッケ" : pageLang === 'zh' ? "辣青阳辣椒油配新鲜韩牛生拌" : "Spicy cheongyang pepper oil with fresh Hanwoo raw beef",
                    "offers": {
                      "@type": "Offer",
                      "price": "38000",
                      "priceCurrency": "KRW"
                    },
                    "image": "https://rawism.kr/static/menu_yukhoe.jpg"
                  },
                  {
                    "@type": "MenuItem",
                    "name": pageLang === 'ko' ? "제비추리 그릴드 베지터블" : pageLang === 'ja' ? "ジェビチュリ グリル野菜" : pageLang === 'zh' ? "牛肩肉烤蔬菜" : "Jebichuri Grilled Vegetables",
                    "description": pageLang === 'ko' ? "한우 제비추리와 8종 제철 채소" : pageLang === 'ja' ? "韓牛ジェビチュリと8種の旬野菜" : pageLang === 'zh' ? "韩牛肩肉配8种时令蔬菜" : "Hanwoo Jebichuri with 8 seasonal vegetables",
                    "offers": {
                      "@type": "Offer",
                      "price": "45000",
                      "priceCurrency": "KRW"
                    },
                    "image": "https://rawism.kr/static/menu_jebichuri.jpg"
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
                    "description": pageLang === 'ko' ? "소믈리에가 큐레이팅한 6종 치즈" : pageLang === 'ja' ? "ソムリエがキュレーションした6種チーズ" : pageLang === 'zh' ? "侍酒师精选6种奶酪" : "6 cheeses curated by sommelier",
                    "offers": {
                      "@type": "Offer",
                      "price": "42000",
                      "priceCurrency": "KRW"
                    },
                    "image": "https://rawism.kr/static/menu_cheese.jpg"
                  },
                  {
                    "@type": "MenuItem",
                    "name": pageLang === 'ko' ? "아보카도 카프레제" : pageLang === 'ja' ? "アボカド カプレーゼ" : pageLang === 'zh' ? "牛油果卡普雷塞" : "Avocado Caprese",
                    "description": pageLang === 'ko' ? "신선한 아보카도와 토마토, 모짜렐라" : pageLang === 'ja' ? "新鮮なアボカドとトマト、モッツァレラ" : pageLang === 'zh' ? "新鲜牛油果、番茄、马苏里拉" : "Fresh avocado, tomato, mozzarella",
                    "offers": {
                      "@type": "Offer",
                      "price": "28000",
                      "priceCurrency": "KRW"
                    },
                    "image": "https://rawism.kr/static/menu_caprese.jpg"
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
                    "description": pageLang === 'ko' ? "고소한 들기름과 육회를 곁들인 메밀면" : pageLang === 'ja' ? "香ばしいエゴマ油とユッケを添えた蕎麦麺" : pageLang === 'zh' ? "香醇紫苏油配生牛肉荞麦面" : "Buckwheat noodles with fragrant perilla oil and raw beef",
                    "offers": {
                      "@type": "Offer",
                      "price": "18000",
                      "priceCurrency": "KRW"
                    },
                    "image": "https://rawism.kr/static/menu_memil.jpg"
                  }
                ]
              }
            ]
          })}} />
          
          {/* Schema.org - Place (장소 정보) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "@id": "https://rawism.kr/#place",
            "name": "ROWISM The Black",
            "description": pageLang === 'ko' ? "연남동 프리미엄 샴페인바" : pageLang === 'ja' ? "延南洞プレミアムシャンパンバー" : pageLang === 'zh' ? "延南洞高级香槟吧" : "Yeonnam-dong Premium Champagne Bar",
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
              "latitude": 37.5595,
              "longitude": 126.9224
            },
            "hasMap": "https://naver.me/5qLSfCNC",
            "publicAccess": true,
            "isAccessibleForFree": false,
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": pageLang === 'ko' ? "프라이빗 다이닝" : pageLang === 'ja' ? "プライベートダイニング" : pageLang === 'zh' ? "私密用餐" : "Private Dining", "value": true },
              { "@type": "LocationFeatureSpecification", "name": pageLang === 'ko' ? "와인 셀러" : pageLang === 'ja' ? "ワインセラー" : pageLang === 'zh' ? "酒窖" : "Wine Cellar", "value": true },
              { "@type": "LocationFeatureSpecification", "name": pageLang === 'ko' ? "에어컨" : pageLang === 'ja' ? "エアコン" : pageLang === 'zh' ? "空调" : "Air Conditioning", "value": true },
              { "@type": "LocationFeatureSpecification", "name": pageLang === 'ko' ? "무료 와이파이" : pageLang === 'ja' ? "無料WiFi" : pageLang === 'zh' ? "免费WiFi" : "Free WiFi", "value": true }
            ],
            "maximumAttendeeCapacity": 8,
            "containedInPlace": {
              "@type": "Place",
              "name": pageLang === 'ko' ? "연남동" : pageLang === 'ja' ? "延南洞" : pageLang === 'zh' ? "延南洞" : "Yeonnam-dong",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "마포구",
                "addressRegion": "서울특별시",
                "addressCountry": "KR"
              }
            }
          })}} />
          
          {/* Schema.org - Event (이벤트 정보 - 예약 가능 시간대) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": pageLang === 'ko' ? "ROWISM The Black 프라이빗 다이닝 경험" : pageLang === 'ja' ? "ROWISM The Black プライベートダイニング体験" : pageLang === 'zh' ? "ROWISM The Black 私密用餐体验" : "ROWISM The Black Private Dining Experience",
            "description": pageLang === 'ko' ? "8석 한정, 당일 도축 한우와 샴페인이 만나는 특별한 저녁" : pageLang === 'ja' ? "8席限定、当日屠畜韓牛とシャンパンが出会う特別な夕べ" : pageLang === 'zh' ? "仅8席，当日屠宰韩牛与香槟相遇的特别夜晚" : "8 seats only, a special evening where same-day slaughtered Hanwoo meets champagne",
            "startDate": "2026-02-06T18:00:00+09:00",
            "endDate": "2026-12-31T24:00:00+09:00",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "ROWISM The Black",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "동교로 262-4",
                "addressLocality": "마포구",
                "addressRegion": "서울특별시",
                "postalCode": "04030",
                "addressCountry": "KR"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "ROWISM The Black",
              "url": "https://rawism.kr"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://naver.me/5qLSfCNC",
              "price": "90000",
              "priceCurrency": "KRW",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01"
            },
            "performer": {
              "@type": "Organization",
              "name": "ROWISM The Black"
            },
            "image": "https://rawism.kr/static/og-image.jpg"
          })}} />
          
          {/* Schema.org - Review (대표 리뷰) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "Restaurant",
              "name": "ROWISM The Black"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": pageLang === 'ko' ? "홍대 미식가" : pageLang === 'ja' ? "弘大グルメ" : pageLang === 'zh' ? "弘大美食家" : "Hongdae Foodie"
            },
            "reviewBody": pageLang === 'ko' ? "연남동에서 이런 퀄리티의 한우 뭉티기를 먹을 수 있다니! 체온이 남아있는 신선한 육향이 일품이고, 샴페인과의 페어링이 환상적이었습니다. 기념일 데이트로 강력 추천합니다." : pageLang === 'ja' ? "延南洞でこのクオリティの韓牛タルタルが食べられるとは！体温が残る新鮮な肉の香りが絶品で、シャンパンとのペアリングが素晴らしかったです。記念日デートに強くお勧めします。" : pageLang === 'zh' ? "没想到在延南洞能吃到这么高品质的韩牛肉脍！保留体温的新鲜肉香堪称一绝，与香槟的搭配令人陶醉。强烈推荐作为纪念日约会。" : "Amazing quality Hanwoo tartare in Yeonnam-dong! The fresh beef aroma with remaining body heat is exceptional, and the champagne pairing was fantastic. Highly recommend for anniversary dates.",
            "datePublished": "2026-01-15"
          })}} />
          
          {/* Schema.org - ItemList (메뉴 목록) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": pageLang === 'ko' ? "ROWISM The Black 인기 메뉴" : pageLang === 'ja' ? "ROWISM The Black 人気メニュー" : pageLang === 'zh' ? "ROWISM The Black 热门菜品" : "ROWISM The Black Popular Menu",
            "numberOfItems": 6,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Product",
                  "name": pageLang === 'ko' ? "트러플 한우 뭉티기 부라타" : pageLang === 'ja' ? "トリュフ韓牛タルタル ブッラータ" : pageLang === 'zh' ? "松露韩牛肉脍布拉塔" : "Truffle Hanwoo Tartare Burrata",
                  "image": "https://rawism.kr/static/menu_signature.jpg",
                  "offers": { "@type": "Offer", "price": "68000", "priceCurrency": "KRW" }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Product",
                  "name": pageLang === 'ko' ? "청양 오일 육회" : pageLang === 'ja' ? "青陽オイル ユッケ" : pageLang === 'zh' ? "青阳油拌生牛肉" : "Cheongyang Oil Yukhoe",
                  "image": "https://rawism.kr/static/menu_yukhoe.jpg",
                  "offers": { "@type": "Offer", "price": "38000", "priceCurrency": "KRW" }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Product",
                  "name": pageLang === 'ko' ? "제비추리 그릴드 베지터블" : pageLang === 'ja' ? "ジェビチュリ グリル野菜" : pageLang === 'zh' ? "牛肩肉烤蔬菜" : "Jebichuri Grilled Vegetables",
                  "image": "https://rawism.kr/static/menu_jebichuri.jpg",
                  "offers": { "@type": "Offer", "price": "45000", "priceCurrency": "KRW" }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Product",
                  "name": pageLang === 'ko' ? "치즈 셀렉션" : pageLang === 'ja' ? "チーズセレクション" : pageLang === 'zh' ? "奶酪拼盘" : "Cheese Selection",
                  "image": "https://rawism.kr/static/menu_cheese.jpg",
                  "offers": { "@type": "Offer", "price": "42000", "priceCurrency": "KRW" }
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Product",
                  "name": pageLang === 'ko' ? "아보카도 카프레제" : pageLang === 'ja' ? "アボカド カプレーゼ" : pageLang === 'zh' ? "牛油果卡普雷塞" : "Avocado Caprese",
                  "image": "https://rawism.kr/static/menu_caprese.jpg",
                  "offers": { "@type": "Offer", "price": "28000", "priceCurrency": "KRW" }
                }
              },
              {
                "@type": "ListItem",
                "position": 6,
                "item": {
                  "@type": "Product",
                  "name": pageLang === 'ko' ? "들기름 육회 메밀면" : pageLang === 'ja' ? "エゴマ油 ユッケ 蕎麦麺" : pageLang === 'zh' ? "紫苏油生牛肉荞麦面" : "Perilla Oil Yukhoe Buckwheat Noodles",
                  "image": "https://rawism.kr/static/menu_memil.jpg",
                  "offers": { "@type": "Offer", "price": "18000", "priceCurrency": "KRW" }
                }
              }
            ]
          })}} />
          
          {/* Schema.org - FoodEstablishment (음식점 추가 정보) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FoodEstablishment",
            "@id": "https://rawism.kr/#foodestablishment",
            "name": "ROWISM The Black",
            "servesCuisine": [
              pageLang === 'ko' ? "한우 전문" : pageLang === 'ja' ? "韓牛専門" : pageLang === 'zh' ? "韩牛专门" : "Korean Beef",
              pageLang === 'ko' ? "샴페인바" : pageLang === 'ja' ? "シャンパンバー" : pageLang === 'zh' ? "香槟吧" : "Champagne Bar",
              pageLang === 'ko' ? "육회 전문" : pageLang === 'ja' ? "ユッケ専門" : pageLang === 'zh' ? "生牛肉专门" : "Raw Beef Tartare"
            ],
            "acceptsReservations": true,
            "smokingAllowed": false,
            "hasMenu": "https://rawism.kr/#menu",
            "starRating": {
              "@type": "Rating",
              "ratingValue": "4.9"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "author": {
                "@type": "Person",
                "name": pageLang === 'ko' ? "네이버 리뷰어" : pageLang === 'ja' ? "Naverレビュアー" : pageLang === 'zh' ? "Naver评论者" : "Naver Reviewer"
              }
            }
          })}} />
          
          {/* Schema.org - BarOrPub (바/펍 정보) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BarOrPub",
            "@id": "https://rawism.kr/#bar",
            "name": "ROWISM The Black Champagne Bar",
            "alternateName": pageLang === 'ko' ? "로위즘 샴페인바" : pageLang === 'ja' ? "ロウイズム シャンパンバー" : pageLang === 'zh' ? "罗伊斯姆香槟吧" : "ROWISM Champagne Bar",
            "description": pageLang === 'ko' ? "연남동 프리미엄 샴페인바. 엄선된 샴페인과 스파클링 와인 컬렉션." : pageLang === 'ja' ? "延南洞プレミアムシャンパンバー。厳選されたシャンパンとスパークリングワインコレクション。" : pageLang === 'zh' ? "延南洞高级香槟吧。精选香槟和起泡酒收藏。" : "Yeonnam-dong premium champagne bar. Curated champagne and sparkling wine collection.",
            "url": `https://rawism.kr${getLangPath(pageLang)}`,
            "servesCuisine": ["Champagne", "Sparkling Wine", "Wine"],
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
              "latitude": 37.5595,
              "longitude": 126.9224
            }
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
