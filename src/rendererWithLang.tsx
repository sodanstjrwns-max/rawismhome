import { jsxRenderer } from 'hono/jsx-renderer'
import type { FC, PropsWithChildren } from 'hono/jsx'

type Language = 'ko' | 'en' | 'ja' | 'zh';

const seoMeta: Record<Language, {
  htmlLang: string;
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogLocale: string;
}> = {
  ko: {
    htmlLang: 'ko',
    title: 'RAWISM The Black | 연남동 프리미엄 샴페인바 & 한우 뭉티기 | 홍대 데이트 기념일 맛집',
    description: '서울 연남동 프리미엄 샴페인바 RAWISM The Black. 당일 도축 온도체 한우 뭉티기와 샴페인이 만나는 특별한 밤. 체온이 남아있는 신선함 그대로, 부라타 치즈와 트러플의 조화. 홍대입구역 5분, 8석 한정 예약제.',
    keywords: '연남동 샴페인바, 연남동 데이트, 연남동 기념일, 홍대 샴페인바, 홍대 데이트, 홍대 기념일 레스토랑, 한우 뭉티기, 트러플 육회, 연남동 맛집, 홍대 데이트 코스',
    ogTitle: 'RAWISM The Black | 연남동 프리미엄 샴페인바 & 한우 뭉티기',
    ogDescription: '당일 도축 온도체 한우의 생생한 육향. 체온이 남아있는 신선함 그대로 즐기는 뭉티기와 샴페인의 만남. 홍대입구역 5분, 8석 한정 예약제.',
    ogLocale: 'ko_KR'
  },
  en: {
    htmlLang: 'en',
    title: 'RAWISM The Black | Premium Champagne Bar in Hongdae Seoul | Korean Beef Tartare',
    description: 'RAWISM The Black - Premium champagne bar in Yeonnam-dong, Seoul. Fresh same-day slaughtered Korean beef tartare (Mungti-gi) paired with champagne. Italian burrata cheese and black truffle. 5 min from Hongdae Station, 8 seats only, reservation required.',
    keywords: 'Hongdae restaurant, Yeonnam-dong restaurant, Seoul champagne bar, Korean beef tartare, Seoul date spot, Hongdae date restaurant, Seoul anniversary dinner, Seoul romantic restaurant, Korean raw beef, Seoul foodie, Hongdae hidden gem',
    ogTitle: 'RAWISM The Black | Premium Champagne Bar in Hongdae Seoul',
    ogDescription: 'Fresh same-day slaughtered Korean beef tartare with champagne pairing. A hidden gem in Seoul\'s trendy Yeonnam-dong. 5 min from Hongdae Station.',
    ogLocale: 'en_US'
  },
  ja: {
    htmlLang: 'ja',
    title: 'RAWISM The Black | 弘大プレミアムシャンパンバー | 韓牛ムンティギ | ソウル延南洞',
    description: 'RAWISM The Black - ソウル延南洞のプレミアムシャンパンバー。当日屠畜の新鮮な韓牛タルタル（ムンティギ）とシャンパンのペアリング。イタリア産ブラータチーズとブラックトリュフ。弘大駅から徒歩5分、8席限定、要予約。',
    keywords: '弘大 レストラン, 延南洞 レストラン, ソウル シャンパンバー, 韓牛 ユッケ, ソウル デート, 弘大 デート, ソウル 記念日, 延南洞 グルメ, ソウル ロマンチック',
    ogTitle: 'RAWISM The Black | 弘大プレミアムシャンパンバー | ソウル延南洞',
    ogDescription: '当日屠畜の新鮮な韓牛ムンティギとシャンパンのペアリング。ソウル延南洞の隠れ家。弘大駅から徒歩5分。',
    ogLocale: 'ja_JP'
  },
  zh: {
    htmlLang: 'zh',
    title: 'RAWISM The Black | 弘大高级香槟酒吧 | 韩牛生拌 | 首尔延南洞',
    description: 'RAWISM The Black - 首尔延南洞高级香槟酒吧。当日屠宰的新鲜韩牛生拌（Mungti-gi）与香槟搭配。意大利布拉塔奶酪和黑松露。弘大站步行5分钟，仅8席，需预约。',
    keywords: '弘大餐厅, 延南洞餐厅, 首尔香槟吧, 韩牛生拌, 首尔约会, 弘大约会, 首尔纪念日, 延南洞美食, 首尔浪漫餐厅',
    ogTitle: 'RAWISM The Black | 弘大高级香槟酒吧 | 首尔延南洞',
    ogDescription: '当日屠宰的新鲜韩牛生拌与香槟搭配。首尔延南洞的隐藏名店。弘大站步行5分钟。',
    ogLocale: 'zh_CN'
  }
};

const BASE_URL = 'https://rawism.pages.dev';

function getCanonicalUrl(lang: Language): string {
  if (lang === 'ko') return BASE_URL;
  return `${BASE_URL}/${lang}`;
}

export function createRenderer(lang: Language) {
  const meta = seoMeta[lang];
  const canonicalUrl = getCanonicalUrl(lang);
  
  return jsxRenderer(({ children }) => {
    return (
      <html lang={meta.htmlLang} data-lang={lang}>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
          {/* Primary Meta Tags - Language Specific */}
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords} />
          <meta name="author" content="RAWISM The Black" />
          <meta name="robots" content="index, follow" />
          
          {/* Canonical URL for this language */}
          <link rel="canonical" href={canonicalUrl} />
          
          {/* hreflang tags for all languages - CRITICAL FOR INTERNATIONAL SEO */}
          <link rel="alternate" hreflang="ko" href={BASE_URL} />
          <link rel="alternate" hreflang="en" href={`${BASE_URL}/en`} />
          <link rel="alternate" hreflang="ja" href={`${BASE_URL}/ja`} />
          <link rel="alternate" hreflang="zh" href={`${BASE_URL}/zh`} />
          <link rel="alternate" hreflang="x-default" href={BASE_URL} />
          
          {/* Favicon & App Icons */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
          <meta name="theme-color" content="#080808" />
          <meta name="msapplication-TileColor" content="#080808" />
          
          {/* Geographic Tags for Local SEO */}
          <meta name="geo.region" content="KR-11" />
          <meta name="geo.placename" content="Yeonnam-dong, Mapo-gu, Seoul" />
          <meta name="geo.position" content="37.5595;126.9224" />
          <meta name="ICBM" content="37.5595, 126.9224" />
          
          {/* Open Graph - Language Specific */}
          <meta property="og:title" content={meta.ogTitle} />
          <meta property="og:description" content={meta.ogDescription} />
          <meta property="og:type" content="restaurant" />
          <meta property="og:locale" content={meta.ogLocale} />
          <meta property="og:locale:alternate" content="ko_KR" />
          <meta property="og:locale:alternate" content="en_US" />
          <meta property="og:locale:alternate" content="ja_JP" />
          <meta property="og:locale:alternate" content="zh_CN" />
          <meta property="og:site_name" content="RAWISM The Black" />
          <meta property="og:url" content={canonicalUrl} />
          
          {/* Twitter Card - Language Specific */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={meta.ogTitle} />
          <meta name="twitter:description" content={meta.ogDescription} />
          
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
          
          {/* Multilingual Translations */}
          <script src="/static/translations.js"></script>
          
          {/* Auto-set language based on URL */}
          <script dangerouslySetInnerHTML={{__html: `
            // Set language from URL path on page load
            window.RAWISM_INITIAL_LANG = '${lang}';
          `}} />
          
          {/* Schema.org Structured Data - Restaurant */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "RAWISM The Black",
            "alternateName": ["로위즘 더 블랙", "ロウイズム ザ ブラック", "罗伊斯姆黑"],
            "description": meta.description,
            "url": canonicalUrl,
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
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "18:00",
              "closes": "24:00"
            }],
            "servesCuisine": ["Korean", "Champagne Bar", "Korean Beef Tartare"],
            "menu": `${canonicalUrl}#menu`,
            "priceRange": "₩₩₩",
            "acceptsReservations": true,
            "reservations": "https://naver.me/5qLSfCNC",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            },
            "inLanguage": meta.htmlLang
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
