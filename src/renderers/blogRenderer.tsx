import { jsxRenderer } from 'hono/jsx-renderer'
import { html } from 'hono/html'

// ============================
// Blog Hub Renderer - SEO + Blog Schema
// ============================
export const createBlogRenderer = () => {
  return jsxRenderer(({ children }) => {
    return (
      <html lang="ko">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>블로그 | RAWISM The Black | 연남동 와인·다이닝 매거진</title>
          <meta name="description" content="RAWISM The Black 블로그 - 소믈리에가 전하는 와인·샴페인 칼럼, 연남동 데이트 코스, 다이닝 문화 이야기. 한우 페어링 가이드부터 프리미엄 셀렉션까지 32편의 와인 이야기." />
          <meta name="keywords" content="RAWISM 블로그, 연남동 블로그, 와인 블로그, 샴페인 가이드, 연남동 데이트 코스, 홍대 맛집 블로그, 한우 와인 페어링, 연남동 다이닝, 소믈리에 추천, 프라이빗 다이닝 후기, 연남동 프로포즈, 연남동 기념일 레스토랑" />
          <meta name="author" content="RAWISM The Black" />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href="https://rawism.kr/blog" />
          {html`<link rel="alternate" hreflang="ko" href="https://rawism.kr/blog" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/blog" />`}

          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="theme-color" content="#080808" />

          <meta name="geo.region" content="KR-11" />
          <meta name="geo.placename" content="연남동, 마포구, 서울" />
          <meta name="geo.position" content="37.5595;126.9224" />

          {/* Open Graph */}
          <meta property="og:title" content="블로그 | RAWISM The Black 연남동 와인·다이닝 매거진" />
          <meta property="og:description" content="소믈리에가 전하는 와인 이야기, 연남동 데이트 코스, 다이닝 문화 — RAWISM이 큐레이션하는 라이프스타일 매거진." />
          <meta property="og:type" content="blog" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:site_name" content="RAWISM The Black" />
          <meta property="og:url" content="https://rawism.kr/blog" />
          <meta property="og:image" content="https://rawism.kr/static/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="블로그 | RAWISM The Black" />
          <meta name="twitter:description" content="와인 칼럼, 연남동 데이트 코스, 다이닝 문화 — RAWISM 매거진" />
          <meta name="twitter:image" content="https://rawism.kr/static/og-image.jpg" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Noto+Serif+KR:wght@300;400;700&display=swap" rel="stylesheet" />
          <script src="https://cdn.tailwindcss.com"></script>
          <script dangerouslySetInnerHTML={{ __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: { 'deep-black': '#080808', 'soft-black': '#141414', 'champagne': '#B8A060', 'off-white': '#E0E0E0' },
                  fontFamily: { 'playfair': ['Playfair Display', 'serif'], 'noto-serif': ['Noto Serif KR', 'serif'] }
                }
              }
            }
          ` }} />
          <link href="/static/style.css" rel="stylesheet" />

          {/* Schema.org - Blog */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "RAWISM The Black 블로그",
            "description": "소믈리에가 전하는 와인·샴페인 칼럼, 연남동 데이트 코스, 다이닝 문화 이야기",
            "url": "https://rawism.kr/blog",
            "publisher": {
              "@type": "Organization",
              "name": "RAWISM The Black",
              "url": "https://rawism.kr",
              "logo": { "@type": "ImageObject", "url": "https://rawism.kr/static/logo.png" }
            },
            "blogPost": [
              {
                "@type": "BlogPosting",
                "headline": "샴페인과 스파클링 와인, 뭐가 다를까?",
                "url": "https://rawism.kr/wine/champagne-vs-sparkling",
                "datePublished": "2026-03-01",
                "author": { "@type": "Organization", "name": "RAWISM The Black" }
              },
              {
                "@type": "BlogPosting",
                "headline": "한우 뭉티기와 샴페인, 왜 찰떡일까?",
                "url": "https://rawism.kr/wine/mungtige-champagne-pairing",
                "datePublished": "2026-03-27",
                "author": { "@type": "Organization", "name": "RAWISM The Black" }
              },
              {
                "@type": "BlogPosting",
                "headline": "가성비 좋은 그로워 샴페인 추천",
                "url": "https://rawism.kr/wine/grower-champagne",
                "datePublished": "2026-04-10",
                "author": { "@type": "Organization", "name": "RAWISM The Black" }
              }
            ],
            "inLanguage": "ko-KR"
          }) }} />

          {/* Schema.org - BreadcrumbList */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "RAWISM The Black", "item": "https://rawism.kr" },
              { "@type": "ListItem", "position": 2, "name": "블로그", "item": "https://rawism.kr/blog" }
            ]
          }) }} />

          {/* Schema.org - WebPage */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "RAWISM The Black 블로그",
            "description": "와인 칼럼, 연남동 다이닝 가이드, 라이프스타일 매거진",
            "url": "https://rawism.kr/blog",
            "isPartOf": { "@type": "WebSite", "name": "RAWISM The Black", "url": "https://rawism.kr" },
            "about": [
              { "@type": "Thing", "name": "와인" },
              { "@type": "Thing", "name": "샴페인" },
              { "@type": "Thing", "name": "연남동 데이트" },
              { "@type": "Thing", "name": "프라이빗 다이닝" },
              { "@type": "Thing", "name": "한우 페어링" }
            ],
            "audience": {
              "@type": "Audience",
              "audienceType": "와인 애호가, 연남동 방문자, 데이트 계획자"
            }
          }) }} />
        </head>
        <body class="bg-[#080808]">
          {children}
        </body>
      </html>
    )
  })
}
