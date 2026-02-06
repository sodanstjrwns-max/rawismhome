import { jsxRenderer } from 'hono/jsx-renderer'
import type { Language } from '../types'

// SEO metadata for About page in each language
const aboutSeoData: Record<Language, {
  lang: string
  title: string
  description: string
  keywords: string
  ogDescription: string
}> = {
  ko: {
    lang: 'ko',
    title: '브랜드 스토리 | ROWISM The Black | 연남동 프리미엄 샴페인바',
    description: 'ROWISM The Black 브랜드 스토리: RAW와 ism의 결합, 날것의 철학. 당일 도축 온도체 한우의 진정한 가치, 8석 한정 프라이빗 다이닝, 루이스폴센 조명과 제네바 사운드. 연남동 숨은 샴페인바.',
    keywords: '연남동 브랜드, 로위즘 스토리, 홍대 샴페인바 소개, 연남동 프라이빗 다이닝, 온도체 한우란, ROWISM 철학, 연남동 숨은 맛집, 홍대 분위기 좋은 곳',
    ogDescription: 'ROWISM The Black: 날것의 철학, RAWism. 당일 도축 온도체 한우와 샴페인이 만나는 8석 한정 프라이빗 다이닝.'
  },
  en: {
    lang: 'en',
    title: 'Brand Story | ROWISM The Black | Seoul Yeonnam-dong Premium Champagne Bar',
    description: 'ROWISM The Black Brand Story: The union of RAW and ism, philosophy of raw. True value of same-day slaughtered Hanwoo, 8-seat private dining, Louis Poulsen lighting and Geneva sound. Hidden champagne bar in Yeonnam-dong.',
    keywords: 'Yeonnam-dong brand, ROWISM story, Hongdae champagne bar about, Yeonnam private dining, warm-body Hanwoo, ROWISM philosophy, Yeonnam hidden gem, Hongdae romantic spot',
    ogDescription: 'ROWISM The Black: Philosophy of Raw, RAWism. 8-seat private dining where same-day slaughtered Hanwoo meets champagne.'
  },
  ja: {
    lang: 'ja',
    title: 'ブランドストーリー | ROWISM The Black | ソウル延南洞プレミアムシャンパンバー',
    description: 'ROWISM The Black ブランドストーリー: RAWとismの融合、生の哲学。当日屠畜温度体韓牛の真価、8席限定プライベートダイニング、ルイスポールセン照明とジェネバサウンド。延南洞の隠れ家シャンパンバー。',
    keywords: '延南洞 ブランド, ロウイズム ストーリー, 弘大 シャンパンバー 紹介, 延南洞 プライベートダイニング, 温度体韓牛とは, ROWISM 哲学',
    ogDescription: 'ROWISM The Black: 生の哲学、RAWism。当日屠畜韓牛とシャンパンが出会う8席限定プライベートダイニング。'
  },
  zh: {
    lang: 'zh',
    title: '品牌故事 | ROWISM The Black | 首尔延南洞高级香槟吧',
    description: 'ROWISM The Black品牌故事：RAW与ism的结合，生食哲学。当日屠宰温体韩牛的真正价值，仅限8席私密用餐，路易斯波尔森灯具与日内瓦音响。延南洞隐藏的香槟吧。',
    keywords: '延南洞品牌, ROWISM故事, 弘大香槟吧介绍, 延南洞私密用餐, 温体韩牛是什么, ROWISM哲学',
    ogDescription: 'ROWISM The Black：生食哲学，RAWism。当日屠宰韩牛与香槟相遇的8席限定私密用餐。'
  }
}

// Get URL path for a language
function getAboutLangPath(lang: Language): string {
  return lang === 'ko' ? '/about' : `/${lang}/about`
}

// Create about page renderer
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
          <link rel="canonical" href={`https://rawism.kr${getAboutLangPath(pageLang)}`} />
          
          {/* hreflang tags */}
          <link rel="alternate" hreflang="ko" href="https://rawism.kr/about" />
          <link rel="alternate" hreflang="en" href="https://rawism.kr/en/about" />
          <link rel="alternate" hreflang="ja" href="https://rawism.kr/ja/about" />
          <link rel="alternate" hreflang="zh" href="https://rawism.kr/zh/about" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/about" />
          
          {/* Favicon */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="theme-color" content="#080808" />
          
          {/* Open Graph */}
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.ogDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={pageLang === 'ko' ? 'ko_KR' : pageLang === 'ja' ? 'ja_JP' : pageLang === 'zh' ? 'zh_CN' : 'en_US'} />
          <meta property="og:site_name" content="ROWISM The Black" />
          <meta property="og:url" content={`https://rawism.kr${getAboutLangPath(pageLang)}`} />
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
          
          {/* About Page Schema.org */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": seo.title,
            "description": seo.description,
            "url": `https://rawism.kr${getAboutLangPath(pageLang)}`,
            "mainEntity": {
              "@type": "Organization",
              "name": "ROWISM The Black",
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
              }
            },
            "inLanguage": seo.lang
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
                "name": pageLang === 'ko' ? "브랜드 스토리" : pageLang === 'ja' ? "ブランドストーリー" : pageLang === 'zh' ? "品牌故事" : "Brand Story",
                "item": `https://rawism.kr${getAboutLangPath(pageLang)}`
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
