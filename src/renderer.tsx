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
    title: '로위즘(RAWISM) The Black | 연남동 프리미엄 샴페인바 & 와인바 | 프로포즈 기념일 데이트',
    description: '서울 연남동 프리미엄 샴페인바 로위즘(RAWISM The Black). 트러플 한우 뭉티기와 샴페인 페어링 전문. 프로포즈, 100일·결혼기념일에 완벽한 8석 한정 프라이빗 다이닝. 홍대입구역 5분, 예약제 운영.',
    keywords: '로위즘, 로위즘 더블랙, 로위즘 더 블랙, 로위즘 연남동, 로위즘 예약, 로위즘 가격, 로위즘 메뉴, RAWISM, RAWISM The Black, 뭉티기, 한우 뭉티기, 트러플 뭉티기, 연남동 뭉티기, 뭉티기 맛집, 연남동 샴페인바, 연남동 와인바, 홍대 샴페인바, 홍대 와인바, 연남동 데이트, 홍대 데이트, 연남동 기념일, 홍대 기념일 레스토랑, 프로포즈 레스토랑 서울, 기념일 레스토랑, 연남동 맛집, 홍대입구역 맛집, 연남동 프라이빗 다이닝, 육회 맛집 서울, 한우 육회 맛집, 트러플 요리 서울, 부라타 치즈 맛집, 연남동 분위기 좋은 곳, 홍대 데이트 코스, 연남동 럭셔리 레스토랑, 서울 와인바 추천, 소믈리에 추천 와인바, 연트럴파크 맛집, 경의선숲길 맛집',
    ogDescription: '로위즘(RAWISM) — 트러플 한우 뭉티기와 샴페인 페어링. 연남동 8석 한정 프라이빗 다이닝. 홍대입구역 5분.'
  },
  en: {
    lang: 'en',
    title: 'RAWISM The Black | Best Wine Bar Seoul | Romantic Restaurant Hongdae Anniversary Date',
    description: 'RAWISM (Rawism) The Black - Best champagne bar in Seoul Yeonnam-dong. Signature truffle Hanwoo beef tartare (mungtige) with champagne pairing. Perfect for proposals, anniversaries, romantic dates. Private dining, 8 seats only. 5 min from Hongdae Station.',
    keywords: 'RAWISM, Rawism, rawism the black, rowism the black, mungtige, Hanwoo mungtige, Korean beef tartare, best wine bar seoul, romantic restaurant hongdae, champagne bar Seoul, proposal restaurant seoul, anniversary dinner seoul, Yeonnam-dong wine bar, Hongdae wine bar, Seoul date spot, Yeonnam-dong fine dining, Seoul private dining, truffle dish seoul, burrata cheese seoul, sommelier wine bar, Yeontral Park restaurant, reservation only restaurant seoul, luxury dining seoul, Hongdae restaurant, instagram worthy restaurant seoul',
    ogDescription: 'Best wine bar in Seoul for proposals and anniversaries. Korean beef tartare with truffle and sparkling wine. Private dining, 8 seats. 5 min from Hongdae.'
  },
  ja: {
    lang: 'ja',
    title: 'RAWISM The Black | ソウル最高のワインバー | 弘大 記念日 プロポーズ デート',
    description: 'RAWISM(ロウイズム) The Black - ソウル延南洞のプレミアムシャンパンバー。トリュフ韓牛ムンティギとシャンパンペアリング専門。プロポーズ、記念日に最適。8席限定プライベートダイニング。弘大駅から徒歩5分。',
    keywords: 'ロウイズム, RAWISM, ムンティギ, 韓牛ムンティギ, トリュフムンティギ, 弘大 ワインバー 予約, ソウル デート おすすめ, 韓国 生肉 レストラン, プロポーズ レストラン ソウル, 記念日 ディナー ソウル, ソウル シャンパンバー, 延南洞 ワインバー, 弘大 シャンパンバー, 韓牛 ユッケ, ソウル プライベートダイニング, トリュフ料理 ソウル, ブラータチーズ, ソムリエ おすすめ, 延南洞 グルメ, 予約必須 レストラン',
    ogDescription: 'ソウル最高のワインバー。プロポーズ、記念日に最適。韓牛タルタルとトリュフ、スパークリングワイン。8席限定、弘大駅徒歩5分。'
  },
  zh: {
    lang: 'zh',
    title: 'RAWISM The Black | 首尔最佳红酒吧 | 弘大 求婚 纪念日 约会餐厅',
    description: 'RAWISM(罗伊斯姆) The Black - 首尔延南洞高级香槟吧。招牌松露韩牛肉脍(蒙提基)与香槟搭配。求婚、纪念日完美选择。8席限定私享餐厅。弘大站步行5分钟。',
    keywords: '罗伊斯姆, RAWISM, 肉脍, 韩牛肉脍, 松露肉脍, 首尔香槟吧, 延南洞红酒吧, 弘大香槟吧, 弘大约会餐厅, 求婚餐厅首尔, 纪念日晚餐首尔, 韩牛生拌, 首尔私享餐厅, 松露料理首尔, 布拉塔奶酪, 侍酒师推荐, 延南洞美食, 预约必须餐厅',
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
          <meta name="author" content="RAWISM The Black" />
          <meta name="robots" content="index, follow" />
          
          {/* Canonical URL - points to current language version */}
          <link rel="canonical" href={`https://rawism.kr${getLangPath(pageLang)}`} />
          
          {/* hreflang tags for all languages - CRITICAL for multilingual SEO */}
          {/* Note: ko and x-default use dangerouslySetInnerHTML to prevent Hono JSX from deduplicating with canonical */}
          <script dangerouslySetInnerHTML={{__html: `
            document.head.insertAdjacentHTML('beforeend', '<link rel="alternate" hreflang="ko" href="https://rawism.kr/" /><link rel="alternate" hreflang="x-default" href="https://rawism.kr/" />');
          `}} />
          <link rel="alternate" hreflang="en" href="https://rawism.kr/en" />
          <link rel="alternate" hreflang="ja" href="https://rawism.kr/ja" />
          <link rel="alternate" hreflang="zh" href="https://rawism.kr/zh" />
          
          {/* Favicon & App Icons */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
          <meta name="theme-color" content="#080808" />
          <meta name="msapplication-TileColor" content="#080808" />
          <link rel="manifest" href="/manifest.json" />
          
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
          <meta property="og:site_name" content="RAWISM The Black" />
          <meta property="og:url" content={`https://rawism.kr${getLangPath(pageLang)}`} />
          
          {/* OG Image - 대표 이미지 (카카오톡, 페이스북 등 공유 시 표시) */}
          <meta property="og:image" content="https://rawism.kr/static/og-image.jpg" />
          <meta property="og:image:secure_url" content="https://rawism.kr/static/og-image.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="RAWISM The Black - 연남동 프리미엄 샴페인바 | 트러플 한우 뭉티기" />
          
          {/* 추가 OG 이미지들 - 로고 */}
          <meta property="og:image" content="https://rawism.kr/static/logo.png" />
          <meta property="og:image:alt" content="RAWISM The Black 로고" />
          
          {/* 추가 OG 이미지들 - 시그니처 메뉴 */}
          <meta property="og:image" content="https://rawism.kr/static/menu_signature.jpg" />
          <meta property="og:image:alt" content="로위즘 뭉티기 시그니처 - 트러플 한우 뭉티기 부라타치즈" />
          
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
          <meta name="twitter:image:alt" content="RAWISM The Black - 연남동 프리미엄 샴페인바 | 트러플 한우 뭉티기" />
          
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Noto+Serif+KR:wght@300;400;500;600;700&family=Pretendard:wght@300;400;500;600;700&display=swap" as="style" />
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
            "name": "RAWISM The Black",
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
              "https://rawism.kr/static/menu_cheese.jpg",
              "https://rawism.kr/static/menu_yukhoe.jpg",
              "https://rawism.kr/static/menu_caprese.jpg",
              "https://rawism.kr/static/menu_memil.jpg"
            ],
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
                "name": pageLang === 'ko' ? "RAWISM The Black 예약" : pageLang === 'ja' ? "RAWISM The Black 予約" : pageLang === 'zh' ? "RAWISM The Black 预订" : "RAWISM The Black Reservation"
              }
            }
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
                "name": "RAWISM The Black",
                "item": `https://rawism.kr${getLangPath(pageLang)}`
              }
            ]
          })}} />
          
          
          
          {/* Schema.org - WebSite (사이트 검색 강화) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://rawism.kr/#website",
            "url": "https://rawism.kr",
            "name": "RAWISM The Black",
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
                "name": pageLang === 'ko' ? "RAWISM The Black은 어디에 있나요?" : pageLang === 'ja' ? "RAWISM The Blackはどこにありますか？" : pageLang === 'zh' ? "RAWISM The Black在哪里？" : "Where is RAWISM The Black located?",
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
                  "text": pageLang === 'ko' ? "2인 기준 평균 15만원입니다. 샴페인 페어링 포함 시 20-25만원 정도입니다." : pageLang === 'ja' ? "2名様で平均15万ウォンです。シャンパンペアリング込みで20-25万ウォン程度です。" : pageLang === 'zh' ? "两人平均15万韩元。包含香槟搭配约20-25万韩元。" : "Average is 150,000 KRW for two. With champagne pairing, around 200,000-250,000 KRW."
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
            "name": pageLang === 'ko' ? "RAWISM The Black 메뉴" : pageLang === 'ja' ? "RAWISM The Black メニュー" : pageLang === 'zh' ? "RAWISM The Black 菜单" : "RAWISM The Black Menu",
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
                      "price": "69000",
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
                      "price": "25000",
                      "priceCurrency": "KRW"
                    },
                    "image": "https://rawism.kr/static/menu_yukhoe.jpg"
                  },
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
                      "price": "35000",
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
                      "price": "23000",
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
                      "price": "15000",
                      "priceCurrency": "KRW"
                    },
                    "image": "https://rawism.kr/static/menu_memil.jpg"
                  }
                ]
              }
            ]
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
          
          
          
          {/* Schema.org - PriceSpecification (가격 범위 상세) */}
          
          
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
