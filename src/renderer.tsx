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
    title: 'ROWISM The Black | 연남동 프리미엄 샴페인바 & 와인바 | 프로포즈 기념일 데이트 레스토랑',
    description: '서울 연남동 프리미엄 샴페인바 & 와인바 ROWISM The Black. 프로포즈, 100일 기념일, 결혼기념일에 완벽한 프라이빗 다이닝. 트러플 한우 육회와 스파클링 와인 페어링. 홍대입구역 5분, 8석 한정 예약제.',
    keywords: '프로포즈 레스토랑 서울, 100일 기념일 레스토랑, 1주년 기념일 맛집, 결혼기념일 레스토랑, 생일 데이트 코스, 크리스마스 레스토랑 예약, 밸런타인 데이 레스토랑, 화이트데이 맛집, 소개팅 장소 추천, 첫 데이트 레스토랑, 연남동 술집, 홍대 술집 추천, 연남동 바, 홍대 바 추천, 연트럴파크 술집, 경의선숲길 레스토랑, 합정동 와인바, 서교동 레스토랑, 망원동 근처 맛집, 분위기 좋은 레스토랑 서울, 조용한 레스토랑 서울, 프라이빗 룸 레스토랑, 무드등 레스토랑, 인스타 감성 레스토랑, 고급 레스토랑 서울, 럭셔리 다이닝 서울, 이색 데이트 서울, 숨은 맛집 연남동, 예약 필수 맛집, 연남동 샴페인바, 연남동 와인바, 홍대 와인바, 육회 맛집 서울, 한우 육회 맛집, 트러플 요리 서울, 부라타 치즈 맛집, 데이트 와인바, 와인 한잔 하기 좋은 곳, 소믈리에 추천 와인바, 연남동 스파클링 와인, 홍대 스파클링 와인, 서울 와인바 추천, 연남동 데이트, 연남동 기념일, 홍대 샴페인바, 홍대 데이트, 홍대 기념일 레스토랑, 연남동 분위기 좋은 곳, 기념일 레스토랑, 연남동 맛집, 홍대 데이트 코스, 연남동 프라이빗 다이닝, 홍대입구역 맛집, 연남동 럭셔리 레스토랑, 연트럴파크 맛집, 경의선숲길 맛집, 여자친구 데려가기 좋은 곳, 연남동 혼술, 타르타르 스테이크 서울',
    ogDescription: '프로포즈, 기념일에 완벽한 연남동 프라이빗 다이닝. 트러플 한우 육회와 스파클링 와인 페어링. 홍대입구역 5분, 8석 한정.'
  },
  en: {
    lang: 'en',
    title: 'ROWISM The Black | Best Wine Bar Seoul | Romantic Restaurant Hongdae Anniversary Date',
    description: 'ROWISM The Black - Best wine bar in Seoul Yeonnam-dong. Perfect for proposals, anniversaries, romantic dates. Korean beef tartare with truffle and sparkling wine pairing. Private dining, 8 seats only. 5 min from Hongdae Station.',
    keywords: 'best wine bar seoul, romantic restaurant hongdae, korean beef tartare restaurant, proposal restaurant seoul, anniversary dinner seoul, Seoul wine bar, Yeonnam-dong wine bar, Hongdae wine bar, Seoul sparkling wine, champagne bar Seoul, wine pairing Seoul, Hongdae restaurant, Yeonnam-dong restaurant, Seoul date spot, Hongdae date restaurant, Seoul anniversary dinner, Yeonnam-dong fine dining, Seoul romantic restaurant, Seoul private dining, Korean raw beef, hidden gem seoul, intimate restaurant seoul, truffle dish seoul, burrata cheese seoul, sommelier wine bar, quiet restaurant seoul, Hongdae bar recommendation, Yeonnam-dong bar, Yeontral Park restaurant, Gyeongui Line Forest restaurant, Hapjeong wine bar, Seogyo-dong restaurant, Mangwon restaurant, christmas dinner seoul, valentine restaurant seoul, first date restaurant seoul, luxury dining seoul, private room restaurant seoul, instagram worthy restaurant seoul, Seoul hidden gem restaurant, reservation only restaurant seoul',
    ogDescription: 'Best wine bar in Seoul for proposals and anniversaries. Korean beef tartare with truffle and sparkling wine. Private dining, 8 seats. 5 min from Hongdae.'
  },
  ja: {
    lang: 'ja',
    title: 'ROWISM The Black | ソウル最高のワインバー | 弘大 記念日 プロポーズ デート',
    description: 'ROWISM The Black - ソウル延南洞のプレミアムワインバー。プロポーズ、記念日、ロマンチックなデートに最適。韓牛タルタルとトリュフ、スパークリングワインのペアリング。8席限定プライベートダイニング。弘大駅から徒歩5分。',
    keywords: '弘大 ワインバー 予約, ソウル デート おすすめ, 韓国 生肉 レストラン, プロポーズ レストラン ソウル, 記念日 ディナー ソウル, ソウル ワインバー, 延南洞 ワインバー, 弘大 ワインバー, ソウル スパークリングワイン, シャンパンバー ソウル, ワインペアリング, 弘大 レストラン, 延南洞 レストラン, ソウル シャンパンバー, 韓牛 ユッケ, ソウル デート, 弘大 デート, ソウル 記念日, 延南洞 グルメ, ソウル ロマンチック, 韓国 生肉, ソウル 隠れ家, トリュフ料理 ソウル, ブラータチーズ, ソムリエ おすすめ, 弘大 バー おすすめ, 延南洞 バー, ヨントラルパーク レストラン, クリスマス ディナー ソウル, バレンタイン レストラン ソウル, 初デート レストラン, ラグジュアリー ダイニング ソウル, プライベートルーム レストラン, インスタ映え レストラン ソウル, 予約必須 レストラン',
    ogDescription: 'ソウル最高のワインバー。プロポーズ、記念日に最適。韓牛タルタルとトリュフ、スパークリングワイン。8席限定、弘大駅徒歩5分。'
  },
  zh: {
    lang: 'zh',
    title: 'ROWISM The Black | 首尔最佳红酒吧 | 弘大 求婚 纪念日 约会餐厅',
    description: 'ROWISM The Black - 首尔延南洞高级红酒吧。求婚、纪念日、浪漫约会的完美选择。韩牛肉脍配松露和起泡酒。8席限定私人用餐。弘大站步行5分钟。',
    keywords: '首尔红酒吧 推荐, 弘大 约会 餐厅, 韩国 生牛肉 餐厅, 求婚 餐厅 首尔, 纪念日 晚餐 首尔, 首尔红酒吧, 延南洞红酒吧, 弘大红酒吧, 首尔起泡酒, 香槟吧首尔, 葡萄酒搭配, 弘大餐厅, 延南洞餐厅, 首尔香槟吧, 韩牛生拌, 首尔约会, 弘大约会, 首尔纪念日, 延南洞美食, 首尔浪漫餐厅, 韩国生牛肉, 首尔网红餐厅, 松露料理 首尔, 布拉塔奶酪, 侍酒师 推荐, 安静餐厅 首尔, 弘大 酒吧 推荐, 延南洞 酒吧, 延南公园 餐厅, 京义线森林 餐厅, 圣诞节 晚餐 首尔, 情人节 餐厅 首尔, 第一次约会 餐厅, 豪华餐厅 首尔, 包间 餐厅, 打卡餐厅 首尔, 预约必须 餐厅',
    ogDescription: '首尔最佳红酒吧。求婚、纪念日完美选择。韩牛肉脍配松露和起泡酒。8席限定，弘大站步行5分钟。'
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
          
          {/* Search Engine Verification */}
          <meta name="google-site-verification" content="Fcp9aOc2Lj9R0J0HQYtpA35CGY_Dy_ldmW6SphznQ9s" />
          <meta name="naver-site-verification" content="2d5260929ab847d76c151f135aa20621f6f746a0" />
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
          
          {/* Set initial language based on URL - BEFORE translations.js */}
          <script dangerouslySetInnerHTML={{__html: `
            window.INITIAL_LANG = '${pageLang}';
          `}} />
          
          {/* Multilingual Translations - defer to run after DOM ready */}
          <script src="/static/translations.js" defer></script>
          
          {/* Schema.org Structured Data - Restaurant (Multilingual) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "ROWISM The Black",
            "alternateName": ["로위즘 더 블랙", "ロウイズム ザ ブラック", "罗伊斯姆黑"],
            "description": seo.description,
            "url": `https://rawism.kr${getLangPath(pageLang)}`,
            "telephone": "+82-70-5100-5534",
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
            "servesCuisine": ["Korean", "Champagne Bar", "Wine Bar", "Sparkling Wine", "Korean Beef Tartare", "Hanwoo", "Fine Dining"],
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
            "telephone": "+82-70-5100-5534",
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
              "telephone": "+82-70-5100-5534",
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
              pageLang === 'ko' ? "와인바" : pageLang === 'ja' ? "ワインバー" : pageLang === 'zh' ? "红酒吧" : "Wine Bar",
              pageLang === 'ko' ? "스파클링 와인" : pageLang === 'ja' ? "スパークリングワイン" : pageLang === 'zh' ? "起泡酒" : "Sparkling Wine",
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
            "name": "ROWISM The Black Champagne & Wine Bar",
            "alternateName": pageLang === 'ko' ? "로위즘 샴페인바 & 와인바" : pageLang === 'ja' ? "ロウイズム シャンパン＆ワインバー" : pageLang === 'zh' ? "罗伊斯姆香槟吧和红酒吧" : "ROWISM Champagne & Wine Bar",
            "description": pageLang === 'ko' ? "연남동 프리미엄 샴페인바 & 와인바. 웰컴 스파클링으로 시작하는 특별한 밤. 엄선된 샴페인, 스파클링 와인, 프로세코 컬렉션." : pageLang === 'ja' ? "延南洞プレミアムシャンパン＆ワインバー。ウェルカムスパークリングで始まる特別な夜。厳選されたシャンパン、スパークリングワイン、プロセッココレクション。" : pageLang === 'zh' ? "延南洞高级香槟吧和红酒吧。以迎宾起泡酒开启特别之夜。精选香槟、起泡酒、普罗塞克收藏。" : "Yeonnam-dong premium champagne & wine bar. Welcome sparkling to start your special evening. Curated champagne, sparkling wine, and prosecco collection.",
            "url": `https://rawism.kr${getLangPath(pageLang)}`,
            "servesCuisine": ["Champagne", "Sparkling Wine", "Wine", "Prosecco", "Cava"],
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
          
          {/* Schema.org - SpeakableSpecification (음성 검색 최적화 - Google Assistant, Siri) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://rawism.kr${getLangPath(pageLang)}#speakable`,
            "name": seo.title,
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#hero", "#philosophy", "#menu", "#reserve", "#location", "#faq"]
            },
            "url": `https://rawism.kr${getLangPath(pageLang)}`
          })}} />
          
          {/* Schema.org - HowTo (예약 방법 단계별 안내 - 리치 스니펫) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": pageLang === 'ko' ? "ROWISM The Black 예약하는 방법" : pageLang === 'ja' ? "ROWISM The Black の予約方法" : pageLang === 'zh' ? "如何预订 ROWISM The Black" : "How to Reserve at ROWISM The Black",
            "description": pageLang === 'ko' ? "연남동 프리미엄 샴페인바 ROWISM The Black 예약 방법을 단계별로 안내합니다." : pageLang === 'ja' ? "延南洞プレミアムシャンパンバー ROWISM The Black の予約方法をステップバイステップでご案内します。" : pageLang === 'zh' ? "逐步指导您预订延南洞高级香槟吧 ROWISM The Black。" : "Step-by-step guide to reserving at ROWISM The Black premium champagne bar in Yeonnam-dong.",
            "image": "https://rawism.kr/static/og-image.jpg",
            "totalTime": "PT5M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "KRW",
              "value": "180000"
            },
            "supply": [],
            "tool": [
              {
                "@type": "HowToTool",
                "name": pageLang === 'ko' ? "스마트폰 또는 컴퓨터" : pageLang === 'ja' ? "スマートフォンまたはコンピューター" : pageLang === 'zh' ? "智能手机或电脑" : "Smartphone or Computer"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": pageLang === 'ko' ? "네이버 예약 페이지 접속" : pageLang === 'ja' ? "Naver予約ページにアクセス" : pageLang === 'zh' ? "访问Naver预订页面" : "Visit Naver Reservation Page",
                "text": pageLang === 'ko' ? "ROWISM The Black 네이버 예약 페이지(naver.me/5qLSfCNC)에 접속합니다." : pageLang === 'ja' ? "ROWISM The Black Naver予約ページ(naver.me/5qLSfCNC)にアクセスします。" : pageLang === 'zh' ? "访问 ROWISM The Black Naver预订页面 (naver.me/5qLSfCNC)。" : "Visit ROWISM The Black Naver reservation page (naver.me/5qLSfCNC).",
                "url": "https://naver.me/5qLSfCNC",
                "image": "https://rawism.kr/static/logo.png"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": pageLang === 'ko' ? "날짜와 시간 선택" : pageLang === 'ja' ? "日付と時間を選択" : pageLang === 'zh' ? "选择日期和时间" : "Select Date and Time",
                "text": pageLang === 'ko' ? "원하시는 방문 날짜와 시간을 선택합니다. 영업시간은 화-일 18:00-24:00입니다." : pageLang === 'ja' ? "ご希望の訪問日と時間を選択します。営業時間は火〜日 18:00-24:00です。" : pageLang === 'zh' ? "选择您想要的访问日期和时间。营业时间为周二至周日 18:00-24:00。" : "Select your preferred visit date and time. Hours: Tue-Sun 18:00-24:00."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": pageLang === 'ko' ? "인원 수 입력" : pageLang === 'ja' ? "人数を入力" : pageLang === 'zh' ? "输入人数" : "Enter Number of Guests",
                "text": pageLang === 'ko' ? "방문 인원 수를 입력합니다. 8석 한정이므로 최대 8명까지 가능합니다." : pageLang === 'ja' ? "訪問人数を入力します。8席限定のため、最大8名様まで可能です。" : pageLang === 'zh' ? "输入访客人数。限8席，最多可容纳8人。" : "Enter number of guests. Limited to 8 seats, maximum 8 people."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": pageLang === 'ko' ? "예약 정보 확인 및 완료" : pageLang === 'ja' ? "予約情報確認と完了" : pageLang === 'zh' ? "确认预订信息并完成" : "Confirm and Complete Reservation",
                "text": pageLang === 'ko' ? "연락처 정보를 입력하고 예약을 확정합니다. 예약 확인 문자를 받으시면 완료입니다." : pageLang === 'ja' ? "連絡先情報を入力し、予約を確定します。予約確認メッセージを受け取れば完了です。" : pageLang === 'zh' ? "输入联系信息并确认预订。收到预订确认短信即完成。" : "Enter contact information and confirm reservation. You're done when you receive confirmation message."
              }
            ]
          })}} />
          
          {/* Schema.org - Recipe (시그니처 메뉴 레시피 - 리치 스니펫) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Recipe",
            "name": pageLang === 'ko' ? "트러플 한우 뭉티기 시그니처" : pageLang === 'ja' ? "トリュフ韓牛ムンティギ シグネチャー" : pageLang === 'zh' ? "松露韩牛肉脍招牌" : "Truffle Hanwoo Mungti-gi Signature",
            "image": [
              "https://rawism.kr/static/menu_signature.jpg"
            ],
            "author": {
              "@type": "Organization",
              "name": "ROWISM The Black"
            },
            "datePublished": "2023-01-01",
            "description": pageLang === 'ko' ? "당일 도축 온도체 한우의 체온이 남아있는 신선함. 이탈리아산 부라타 치즈와 블랙 트러플의 조화가 만들어내는 ROWISM The Black의 시그니처 요리." : pageLang === 'ja' ? "当日屠畜韓牛の体温が残る新鮮さ。イタリア産ブッラータチーズとブラックトリュフのハーモニーが生み出すROWISM The Blackのシグネチャー料理。" : pageLang === 'zh' ? "当日屠宰韩牛保留体温的新鲜口感。意大利布拉塔奶酪与黑松露的和谐，缔造ROWISM The Black的招牌菜。" : "Fresh same-day slaughtered Hanwoo with body heat still intact. The harmony of Italian burrata cheese and black truffle creates ROWISM The Black's signature dish.",
            "prepTime": "PT10M",
            "cookTime": "PT0M",
            "totalTime": "PT10M",
            "keywords": pageLang === 'ko' ? "한우 뭉티기, 트러플, 부라타 치즈, 연남동 맛집, 홍대 데이트" : pageLang === 'ja' ? "韓牛ムンティギ, トリュフ, ブッラータチーズ, 延南洞グルメ" : pageLang === 'zh' ? "韩牛肉脍, 松露, 布拉塔奶酪, 延南洞美食" : "Hanwoo tartare, truffle, burrata cheese, Yeonnam-dong restaurant",
            "recipeYield": "2",
            "recipeCategory": pageLang === 'ko' ? "애피타이저" : pageLang === 'ja' ? "前菜" : pageLang === 'zh' ? "开胃菜" : "Appetizer",
            "recipeCuisine": pageLang === 'ko' ? "한식 퓨전" : pageLang === 'ja' ? "韓国フュージョン" : pageLang === 'zh' ? "韩式融合" : "Korean Fusion",
            "nutrition": {
              "@type": "NutritionInformation",
              "servingSize": pageLang === 'ko' ? "2인분" : pageLang === 'ja' ? "2人前" : pageLang === 'zh' ? "2人份" : "2 servings"
            },
            "recipeIngredient": [
              pageLang === 'ko' ? "당일 도축 온도체 한우 150g" : pageLang === 'ja' ? "当日屠畜韓牛 150g" : pageLang === 'zh' ? "当日屠宰韩牛 150g" : "150g same-day slaughtered Hanwoo",
              pageLang === 'ko' ? "이탈리아산 부라타 치즈 1개" : pageLang === 'ja' ? "イタリア産ブッラータチーズ 1個" : pageLang === 'zh' ? "意大利布拉塔奶酪 1个" : "1 Italian burrata cheese",
              pageLang === 'ko' ? "블랙 트러플 적당량" : pageLang === 'ja' ? "ブラックトリュフ 適量" : pageLang === 'zh' ? "黑松露 适量" : "Black truffle to taste",
              pageLang === 'ko' ? "파르미지아노 레지아노" : pageLang === 'ja' ? "パルミジャーノ・レッジャーノ" : pageLang === 'zh' ? "帕玛森奶酪" : "Parmigiano-Reggiano",
              pageLang === 'ko' ? "소금, 후추" : pageLang === 'ja' ? "塩、コショウ" : pageLang === 'zh' ? "盐、胡椒" : "Salt, pepper"
            ],
            "recipeInstructions": [
              {
                "@type": "HowToStep",
                "text": pageLang === 'ko' ? "당일 도축된 온도체 한우를 얇게 저며 플레이팅합니다." : pageLang === 'ja' ? "当日屠畜された韓牛を薄くスライスしてプレーティングします。" : pageLang === 'zh' ? "将当日屠宰的韩牛切成薄片摆盘。" : "Thinly slice the same-day slaughtered Hanwoo and plate."
              },
              {
                "@type": "HowToStep",
                "text": pageLang === 'ko' ? "중앙에 신선한 부라타 치즈를 통째로 올립니다." : pageLang === 'ja' ? "中央に新鮮なブッラータチーズを丸ごと乗せます。" : pageLang === 'zh' ? "在中央放上整颗新鲜布拉塔奶酪。" : "Place a whole fresh burrata cheese in the center."
              },
              {
                "@type": "HowToStep",
                "text": pageLang === 'ko' ? "블랙 트러플을 얇게 슬라이스하여 전체에 뿌립니다." : pageLang === 'ja' ? "ブラックトリュフを薄くスライスして全体に散らします。" : pageLang === 'zh' ? "将黑松露切成薄片撒在整体上。" : "Thinly slice black truffle and sprinkle over."
              },
              {
                "@type": "HowToStep",
                "text": pageLang === 'ko' ? "파르미지아노 레지아노를 갈아 뿌리고 소금, 후추로 마무리합니다." : pageLang === 'ja' ? "パルミジャーノ・レッジャーノを削りかけ、塩、コショウで仕上げます。" : pageLang === 'zh' ? "撒上帕玛森奶酪碎，用盐和胡椒调味完成。" : "Grate Parmigiano-Reggiano over and finish with salt and pepper."
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "127"
            },
            "video": {
              "@type": "VideoObject",
              "name": pageLang === 'ko' ? "트러플 한우 뭉티기 만들기" : pageLang === 'ja' ? "トリュフ韓牛ムンティギの作り方" : pageLang === 'zh' ? "松露韩牛肉脍制作" : "Making Truffle Hanwoo Tartare",
              "description": pageLang === 'ko' ? "ROWISM The Black의 시그니처 메뉴를 만드는 과정" : pageLang === 'ja' ? "ROWISM The Blackのシグネチャーメニューを作る過程" : pageLang === 'zh' ? "ROWISM The Black招牌菜的制作过程" : "The process of making ROWISM The Black's signature dish",
              "thumbnailUrl": "https://rawism.kr/static/menu_signature.jpg",
              "contentUrl": "https://rawism.kr/static/video/signature.mp4",
              "uploadDate": "2024-01-01"
            }
          })}} />
          
          {/* Schema.org - Service (제공 서비스 정보) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": pageLang === 'ko' ? "프라이빗 다이닝" : pageLang === 'ja' ? "プライベートダイニング" : pageLang === 'zh' ? "私密用餐" : "Private Dining",
            "provider": {
              "@type": "Restaurant",
              "name": "ROWISM The Black",
              "url": "https://rawism.kr"
            },
            "areaServed": {
              "@type": "City",
              "name": pageLang === 'ko' ? "서울" : pageLang === 'ja' ? "ソウル" : pageLang === 'zh' ? "首尔" : "Seoul"
            },
            "description": pageLang === 'ko' ? "8석 한정 예약제 프라이빗 다이닝. 데이트, 기념일, 프로포즈, 비즈니스 미팅에 적합." : pageLang === 'ja' ? "8席限定予約制プライベートダイニング。デート、記念日、プロポーズ、ビジネスミーティングに最適。" : pageLang === 'zh' ? "仅8席预约制私密用餐。适合约会、纪念日、求婚、商务会议。" : "Private dining with 8 seats by reservation only. Perfect for dates, anniversaries, proposals, business meetings.",
            "offers": {
              "@type": "Offer",
              "price": "90000",
              "priceCurrency": "KRW",
              "availability": "https://schema.org/InStock"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": pageLang === 'ko' ? "ROWISM The Black 서비스" : pageLang === 'ja' ? "ROWISM The Black サービス" : pageLang === 'zh' ? "ROWISM The Black 服务" : "ROWISM The Black Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": pageLang === 'ko' ? "데이트 다이닝" : pageLang === 'ja' ? "デートダイニング" : pageLang === 'zh' ? "约会用餐" : "Date Dining"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": pageLang === 'ko' ? "기념일 다이닝" : pageLang === 'ja' ? "記念日ダイニング" : pageLang === 'zh' ? "纪念日用餐" : "Anniversary Dining"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": pageLang === 'ko' ? "프로포즈" : pageLang === 'ja' ? "プロポーズ" : pageLang === 'zh' ? "求婚" : "Proposal"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": pageLang === 'ko' ? "비즈니스 미팅" : pageLang === 'ja' ? "ビジネスミーティング" : pageLang === 'zh' ? "商务会议" : "Business Meeting"
                  }
                }
              ]
            }
          })}} />
          
          {/* Schema.org - Action/ReserveAction (예약 액션) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "ROWISM The Black",
            "url": "https://rawism.kr",
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://naver.me/5qLSfCNC",
                "inLanguage": seo.lang,
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform",
                  "http://schema.org/AndroidPlatform",
                  "http://schema.org/IOSPlatform"
                ]
              },
              "result": {
                "@type": "FoodEstablishmentReservation",
                "name": pageLang === 'ko' ? "ROWISM The Black 예약" : pageLang === 'ja' ? "ROWISM The Black 予約" : pageLang === 'zh' ? "ROWISM The Black 预订" : "ROWISM The Black Reservation"
              }
            }
          })}} />
          
          {/* Schema.org - ImageGallery (이미지 갤러리) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": pageLang === 'ko' ? "ROWISM The Black 갤러리" : pageLang === 'ja' ? "ROWISM The Black ギャラリー" : pageLang === 'zh' ? "ROWISM The Black 图库" : "ROWISM The Black Gallery",
            "description": pageLang === 'ko' ? "연남동 프리미엄 샴페인바 ROWISM The Black의 메뉴와 공간" : pageLang === 'ja' ? "延南洞プレミアムシャンパンバー ROWISM The Blackのメニューと空間" : pageLang === 'zh' ? "延南洞高级香槟吧 ROWISM The Black的菜品与空间" : "Menu and space of ROWISM The Black premium champagne bar in Yeonnam-dong",
            "url": `https://rawism.kr${getLangPath(pageLang)}#menu`,
            "image": [
              {
                "@type": "ImageObject",
                "contentUrl": "https://rawism.kr/static/menu_signature.jpg",
                "name": pageLang === 'ko' ? "트러플 한우 뭉티기 시그니처" : pageLang === 'ja' ? "トリュフ韓牛ムンティギ シグネチャー" : pageLang === 'zh' ? "松露韩牛肉脍招牌" : "Truffle Hanwoo Tartare Signature",
                "caption": pageLang === 'ko' ? "당일 도축 한우와 부라타 치즈, 블랙 트러플" : pageLang === 'ja' ? "当日屠畜韓牛とブッラータチーズ、ブラックトリュフ" : pageLang === 'zh' ? "当日屠宰韩牛配布拉塔奶酪、黑松露" : "Same-day slaughtered Hanwoo with burrata cheese and black truffle"
              },
              {
                "@type": "ImageObject",
                "contentUrl": "https://rawism.kr/static/menu_jebichuri.jpg",
                "name": pageLang === 'ko' ? "제비추리 그릴드 베지터블" : pageLang === 'ja' ? "ジェビチュリ グリル野菜" : pageLang === 'zh' ? "牛肩肉烤蔬菜" : "Jebichuri Grilled Vegetables"
              },
              {
                "@type": "ImageObject",
                "contentUrl": "https://rawism.kr/static/menu_cheese.jpg",
                "name": pageLang === 'ko' ? "치즈 셀렉션" : pageLang === 'ja' ? "チーズセレクション" : pageLang === 'zh' ? "奶酪拼盘" : "Cheese Selection"
              },
              {
                "@type": "ImageObject",
                "contentUrl": "https://rawism.kr/static/menu_yukhoe.jpg",
                "name": pageLang === 'ko' ? "청양 오일 육회" : pageLang === 'ja' ? "青陽オイル ユッケ" : pageLang === 'zh' ? "青阳油拌生牛肉" : "Cheongyang Oil Yukhoe"
              },
              {
                "@type": "ImageObject",
                "contentUrl": "https://rawism.kr/static/menu_caprese.jpg",
                "name": pageLang === 'ko' ? "아보카도 카프레제" : pageLang === 'ja' ? "アボカド カプレーゼ" : pageLang === 'zh' ? "牛油果卡普雷塞" : "Avocado Caprese"
              },
              {
                "@type": "ImageObject",
                "contentUrl": "https://rawism.kr/static/menu_memil.jpg",
                "name": pageLang === 'ko' ? "들기름 육회 메밀면" : pageLang === 'ja' ? "エゴマ油 ユッケ 蕎麦麺" : pageLang === 'zh' ? "紫苏油生牛肉荞麦面" : "Perilla Oil Yukhoe Buckwheat Noodles"
              }
            ]
          })}} />
          
          {/* Schema.org - SpecialAnnouncement (특별 공지 - 영업 정보) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SpecialAnnouncement",
            "name": pageLang === 'ko' ? "ROWISM The Black 영업 안내" : pageLang === 'ja' ? "ROWISM The Black 営業案内" : pageLang === 'zh' ? "ROWISM The Black 营业通知" : "ROWISM The Black Business Hours",
            "text": pageLang === 'ko' ? "화-일 18:00-24:00 영업, 월요일 정기휴무. 8석 한정 예약제 운영. 라스트오더 22:30." : pageLang === 'ja' ? "火-日 18:00-24:00営業、月曜定休。8席限定予約制。ラストオーダー22:30。" : pageLang === 'zh' ? "周二至周日 18:00-24:00营业，周一休息。8席预约制。最后点单22:30。" : "Open Tue-Sun 18:00-24:00, closed Monday. 8 seats reservation only. Last order 22:30.",
            "datePosted": "2026-02-01",
            "expires": "2026-12-31",
            "category": "https://www.wikidata.org/wiki/Q11707",
            "announcementLocation": {
              "@type": "Restaurant",
              "name": "ROWISM The Black",
              "url": "https://rawism.kr"
            }
          })}} />
          
          {/* Schema.org - CollectionPage (컬렉션 페이지 - 메뉴 모음) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": pageLang === 'ko' ? "ROWISM The Black 메뉴 컬렉션" : pageLang === 'ja' ? "ROWISM The Black メニューコレクション" : pageLang === 'zh' ? "ROWISM The Black 菜单收藏" : "ROWISM The Black Menu Collection",
            "description": seo.description,
            "url": `https://rawism.kr${getLangPath(pageLang)}#menu`,
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": 6,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "url": `https://rawism.kr${getLangPath(pageLang)}#menu`,
                  "name": pageLang === 'ko' ? "트러플 한우 뭉티기 시그니처" : pageLang === 'ja' ? "トリュフ韓牛ムンティギ シグネチャー" : pageLang === 'zh' ? "松露韩牛肉脍招牌" : "Truffle Hanwoo Tartare Signature"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "url": `https://rawism.kr${getLangPath(pageLang)}#menu`,
                  "name": pageLang === 'ko' ? "제비추리 그릴드 베지터블" : pageLang === 'ja' ? "ジェビチュリ グリル野菜" : pageLang === 'zh' ? "牛肩肉烤蔬菜" : "Jebichuri Grilled Vegetables"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "url": `https://rawism.kr${getLangPath(pageLang)}#menu`,
                  "name": pageLang === 'ko' ? "치즈 셀렉션" : pageLang === 'ja' ? "チーズセレクション" : pageLang === 'zh' ? "奶酪拼盘" : "Cheese Selection"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "url": `https://rawism.kr${getLangPath(pageLang)}#menu`,
                  "name": pageLang === 'ko' ? "청양 오일 육회" : pageLang === 'ja' ? "青陽オイル ユッケ" : pageLang === 'zh' ? "青阳油拌生牛肉" : "Cheongyang Oil Yukhoe"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "url": `https://rawism.kr${getLangPath(pageLang)}#menu`,
                  "name": pageLang === 'ko' ? "아보카도 카프레제" : pageLang === 'ja' ? "アボカド カプレーゼ" : pageLang === 'zh' ? "牛油果卡普雷塞" : "Avocado Caprese"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "url": `https://rawism.kr${getLangPath(pageLang)}#menu`,
                  "name": pageLang === 'ko' ? "들기름 육회 메밀면" : pageLang === 'ja' ? "エゴマ油 ユッケ 蕎麦麺" : pageLang === 'zh' ? "紫苏油生牛肉荞麦面" : "Perilla Oil Yukhoe Buckwheat Noodles"
                }
              ]
            }
          })}} />
          
          {/* Schema.org - CreativeWork (브랜드 컨텐츠) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": pageLang === 'ko' ? "ROWISM - 날것의 철학" : pageLang === 'ja' ? "ROWISM - 生の哲学" : pageLang === 'zh' ? "ROWISM - 生食哲学" : "ROWISM - Philosophy of Raw",
            "author": {
              "@type": "Organization",
              "name": "ROWISM The Black"
            },
            "dateCreated": "2023-01-01",
            "description": pageLang === 'ko' ? "RAW와 ism의 결합. 최상급 재료 본연의 맛을 가장 순수한 방식으로 전달하는 철학." : pageLang === 'ja' ? "RAWとismの結合。最高級食材本来の味を最も純粋な方法で届ける哲学。" : pageLang === 'zh' ? "RAW与ism的结合。以最纯粹的方式传递顶级食材原味的哲学。" : "Combination of RAW and ism. Philosophy of delivering the authentic taste of premium ingredients in the purest way.",
            "inLanguage": ["ko", "en", "ja", "zh"],
            "url": `https://rawism.kr${getLangPath(pageLang)}#philosophy`
          })}} />
          
          {/* Schema.org - TouristAttraction (관광 명소로서의 가치) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "ROWISM The Black",
            "description": pageLang === 'ko' ? "연남동 핫플레이스 - 외국인 관광객에게 인기 있는 한우 뭉티기 전문 샴페인바" : pageLang === 'ja' ? "延南洞ホットプレイス - 外国人観光客に人気の韓牛ムンティギ専門シャンパンバー" : pageLang === 'zh' ? "延南洞热门地点 - 深受外国游客喜爱的韩牛肉脍专门香槟吧" : "Yeonnam-dong hotspot - Champagne bar specializing in Hanwoo tartare, popular among foreign tourists",
            "touristType": [
              pageLang === 'ko' ? "미식 여행객" : pageLang === 'ja' ? "グルメ旅行者" : pageLang === 'zh' ? "美食旅行者" : "Food Traveler",
              pageLang === 'ko' ? "와인 애호가" : pageLang === 'ja' ? "ワイン愛好家" : pageLang === 'zh' ? "葡萄酒爱好者" : "Wine Enthusiast",
              pageLang === 'ko' ? "커플 여행객" : pageLang === 'ja' ? "カップル旅行者" : pageLang === 'zh' ? "情侣游客" : "Couple Travelers"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "동교로 262-4",
              "addressLocality": "마포구",
              "addressRegion": "서울특별시",
              "addressCountry": "KR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 37.5595,
              "longitude": 126.9224
            },
            "isAccessibleForFree": false,
            "publicAccess": true,
            "availableLanguage": ["Korean", "English", "Japanese", "Chinese"]
          })}} />
          
          {/* Schema.org - SpeakableSpecification (음성 검색 최적화) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://rawism.kr${getLangPath(pageLang)}#speakable`,
            "name": seo.title,
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                "h1", "h2", ".hero-title", ".menu-item-name", ".menu-price",
                "[data-i18n='hero.subtitle']", 
                "[data-i18n='hero.description']",
                "[data-i18n='philosophy.title']",
                "[data-i18n='menu.signature.name']",
                "[data-i18n='reserve.title']"
              ]
            },
            "url": `https://rawism.kr${getLangPath(pageLang)}`
          })}} />
          
          {/* Schema.org - OfferCatalog (메뉴 가격 카탈로그) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            "name": pageLang === 'ko' ? "ROWISM The Black 메뉴 가격표" : pageLang === 'ja' ? "ROWISM The Black メニュー価格表" : pageLang === 'zh' ? "ROWISM The Black 菜单价格表" : "ROWISM The Black Menu Prices",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "로위즘 뭉티기 시그니처" : pageLang === 'ja' ? "ロウィズム ムンティギ シグネチャー" : pageLang === 'zh' ? "ROWISM 肉脍招牌" : "ROWISM Signature Tartare"
                },
                "price": "92000",
                "priceCurrency": "KRW",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "제비추리 그릴드 베지터블" : pageLang === 'ja' ? "ジェビチュリ グリル野菜" : pageLang === 'zh' ? "牛肩肉烤蔬菜" : "Jebichuri Grilled Vegetables"
                },
                "price": "49000",
                "priceCurrency": "KRW",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "치즈 셀렉션" : pageLang === 'ja' ? "チーズセレクション" : pageLang === 'zh' ? "奶酪拼盘" : "Cheese Selection"
                },
                "price": "36000",
                "priceCurrency": "KRW",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "청양 오일 육회" : pageLang === 'ja' ? "青陽オイル ユッケ" : pageLang === 'zh' ? "青阳油拌生牛肉" : "Cheongyang Oil Yukhoe"
                },
                "price": "25000",
                "priceCurrency": "KRW",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "아보카도 카프레제" : pageLang === 'ja' ? "アボカド カプレーゼ" : pageLang === 'zh' ? "牛油果卡普雷塞" : "Avocado Caprese"
                },
                "price": "23000",
                "priceCurrency": "KRW",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MenuItem",
                  "name": pageLang === 'ko' ? "들기름 육회 메밀면" : pageLang === 'ja' ? "エゴマ油 ユッケ 蕎麦麺" : pageLang === 'zh' ? "紫苏油生牛肉荞麦面" : "Perilla Oil Yukhoe Buckwheat Noodles"
                },
                "price": "15000",
                "priceCurrency": "KRW",
                "availability": "https://schema.org/InStock"
              }
            ]
          })}} />
          
          {/* Schema.org - PaymentMethod (결제 수단) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "@id": "https://rawism.kr/#payment",
            "name": "ROWISM The Black",
            "paymentAccepted": [
              "Cash",
              "Credit Card",
              "Debit Card",
              "KakaoPay",
              "NaverPay",
              "Samsung Pay",
              "Apple Pay"
            ],
            "currenciesAccepted": "KRW"
          })}} />
          
          {/* Schema.org - ContactPoint (연락처 정보 강화) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://rawism.kr/#contact",
            "name": "ROWISM The Black",
            "url": "https://rawism.kr",
            "logo": "https://rawism.kr/static/logo.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+82-70-5100-5534",
                "contactType": "reservations",
                "areaServed": ["KR", "JP", "CN", "US"],
                "availableLanguage": ["Korean", "English", "Japanese", "Chinese"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "18:00",
                  "closes": "24:00"
                }
              },
              {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://instagram.com/rawism_theblack",
                "availableLanguage": ["Korean", "English"]
              }
            ],
            "sameAs": [
              "https://instagram.com/rawism_theblack",
              "https://naver.me/5qLSfCNC",
              "https://map.naver.com/",
              "https://map.kakao.com/"
            ]
          })}} />
          
          {/* Schema.org - Action (예약 액션) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://naver.me/5qLSfCNC",
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
                "http://schema.org/IOSPlatform",
                "http://schema.org/AndroidPlatform"
              ]
            },
            "result": {
              "@type": "Reservation",
              "name": pageLang === 'ko' ? "ROWISM The Black 예약" : pageLang === 'ja' ? "ROWISM The Black 予約" : pageLang === 'zh' ? "ROWISM The Black 预约" : "ROWISM The Black Reservation"
            }
          })}} />
          
          {/* Schema.org - PriceSpecification (가격 범위 상세) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "@id": "https://rawism.kr/#priceinfo",
            "name": "ROWISM The Black",
            "priceRange": "₩₩₩",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "KRW",
              "lowPrice": "15000",
              "highPrice": "92000",
              "offerCount": 6,
              "offers": [
                { "@type": "Offer", "name": pageLang === 'ko' ? "시그니처 메뉴" : "Signature", "price": "92000", "priceCurrency": "KRW" },
                { "@type": "Offer", "name": pageLang === 'ko' ? "메인 요리" : "Main", "price": "49000", "priceCurrency": "KRW" },
                { "@type": "Offer", "name": pageLang === 'ko' ? "사이드" : "Side", "price": "23000", "priceCurrency": "KRW" },
                { "@type": "Offer", "name": pageLang === 'ko' ? "마무리" : "Finisher", "price": "15000", "priceCurrency": "KRW" }
              ]
            }
          })}} />
          
          {/* Schema.org - MusicEvent (분위기 연출 - 큐레이팅된 음악) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicEvent",
            "name": pageLang === 'ko' ? "ROWISM The Black 큐레이팅 뮤직" : pageLang === 'ja' ? "ROWISM The Black キュレーションミュージック" : pageLang === 'zh' ? "ROWISM The Black 策划音乐" : "ROWISM The Black Curated Music",
            "description": pageLang === 'ko' ? "제네바 스피커에서 흘러나오는 큐레이팅된 선율과 함께하는 다이닝 경험" : pageLang === 'ja' ? "ジュネーブスピーカーから流れるキュレーションされた音楽とともにダイニング体験" : pageLang === 'zh' ? "日内瓦音箱播放的策划音乐伴随用餐体验" : "Dining experience with curated music from Geneva speakers",
            "location": {
              "@type": "Restaurant",
              "name": "ROWISM The Black",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "마포구",
                "addressRegion": "서울",
                "addressCountry": "KR"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "ROWISM The Black"
            },
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
          })}} />
          
          {/* Google Analytics 4 */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-2HHM531MGQ"></script>
          <script dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2HHM531MGQ');
          `}} />
          
          {/* Amplitude Analytics */}
          <script src="https://cdn.amplitude.com/script/87529341cb075dcdbefabce3994958aa.js"></script>
          <script dangerouslySetInnerHTML={{__html: `
            if (window.amplitude) {
              window.amplitude.init('87529341cb075dcdbefabce3994958aa', {
                fetchRemoteConfig: true,
                autocapture: true
              });
            }
          `}} />
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
