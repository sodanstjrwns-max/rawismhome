import { jsxRenderer } from 'hono/jsx-renderer'
import { html } from 'hono/html'

// ============================
// Gallery Renderer - SEO + ImageGallery Schema
// ============================
export const createGalleryRenderer = () => {
  return jsxRenderer(({ children }) => {
    return (
      <html lang="ko">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>갤러리 | RAWISM The Black | 연남동 샴페인바 포토</title>
          <meta name="description" content="RAWISM The Black 갤러리 - 트러플 한우 뭉티기, 소믈리에 큐레이션 샴페인, 8석 프라이빗 다이닝 공간. 연남동에서 가장 핫한 샴페인바의 분위기를 사진으로 만나보세요." />
          <meta name="keywords" content="RAWISM 사진, 연남동 레스토랑 사진, 연남동 데이트 장소, 홍대 분위기 좋은 곳, 연남동 샴페인바 분위기, 한우 뭉티기 사진, 프라이빗 다이닝 사진, 연남동 인스타 맛집, 홍대 고급 레스토랑 사진, 연남동 와인바 인테리어" />
          <meta name="author" content="RAWISM The Black" />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href="https://rawism.kr/gallery" />
          {html`<link rel="alternate" hreflang="ko" href="https://rawism.kr/gallery" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/gallery" />`}

          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="theme-color" content="#080808" />

          <meta name="geo.region" content="KR-11" />
          <meta name="geo.placename" content="연남동, 마포구, 서울" />
          <meta name="geo.position" content="37.5595;126.9224" />

          {/* Open Graph */}
          <meta property="og:title" content="갤러리 | RAWISM The Black 연남동 샴페인바" />
          <meta property="og:description" content="트러플 한우 뭉티기, 소믈리에 샴페인, 프라이빗 다이닝 - RAWISM의 분위기를 사진으로 만나보세요." />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:site_name" content="RAWISM The Black" />
          <meta property="og:url" content="https://rawism.kr/gallery" />
          <meta property="og:image" content="https://rawism.kr/static/menu_signature.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="갤러리 | RAWISM The Black" />
          <meta name="twitter:description" content="연남동 프리미엄 샴페인바 RAWISM의 분위기를 사진으로" />
          <meta name="twitter:image" content="https://rawism.kr/static/menu_signature.jpg" />
          <meta name="twitter:image:alt" content="RAWISM The Black - 연남동 프리미엄 샴페인바 갤러리" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Noto+Serif+KR:wght@300;400;500;600;700&family=Pretendard:wght@300;400;500;600;700&display=swap" as="style" />
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

          {/* Schema.org - ImageGallery */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "RAWISM The Black 갤러리",
            "description": "연남동 프리미엄 샴페인바 RAWISM The Black의 메뉴, 공간, 분위기 사진",
            "url": "https://rawism.kr/gallery",
            "about": {
              "@type": "Restaurant",
              "name": "RAWISM The Black",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "동교로 262-4",
                "addressLocality": "마포구",
                "addressRegion": "서울특별시",
                "addressCountry": "KR"
              }
            },
            "image": [
              {
                "@type": "ImageObject",
                "name": "트러플 한우 뭉티기 시그니처",
                "contentUrl": "https://rawism.kr/static/menu_signature.jpg",
                "description": "RAWISM 시그니처 메뉴 - 당일 도축 한우 안심 뭉티기 + 트러플 오일 + 부라타 치즈",
                "representativeOfPage": true
              },
              {
                "@type": "ImageObject",
                "name": "청양 오일 육회",
                "contentUrl": "https://rawism.kr/static/menu_yukhoe.jpg",
                "description": "매콤한 고추기름 소스와 신선한 한우 육회"
              },
              {
                "@type": "ImageObject",
                "name": "치즈 셀렉션",
                "contentUrl": "https://rawism.kr/static/menu_cheese.jpg",
                "description": "소믈리에 큐레이션 6종 치즈 플레이트"
              },
              {
                "@type": "ImageObject",
                "name": "아보카도 카프레제",
                "contentUrl": "https://rawism.kr/static/menu_caprese.jpg",
                "description": "아보카도와 미니 모짜렐라, 발사믹 드레싱"
              },
              {
                "@type": "ImageObject",
                "name": "들기름 육회 메밀면",
                "contentUrl": "https://rawism.kr/static/menu_memil.jpg",
                "description": "들기름 쯔유 소스 + 한우 육회 + 메밀면 피니셔"
              },
              {
                "@type": "ImageObject",
                "name": "RAWISM The Black 공간",
                "contentUrl": "https://rawism.kr/static/og-image.jpg",
                "description": "8석 한정 프라이빗 다이닝 공간"
              }
            ]
          }) }} />

          {/* Schema.org - BreadcrumbList */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "RAWISM The Black", "item": "https://rawism.kr" },
              { "@type": "ListItem", "position": 2, "name": "갤러리", "item": "https://rawism.kr/gallery" }
            ]
          }) }} />

          {/* Schema.org - CollectionPage */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "RAWISM The Black 포토 갤러리",
            "description": "연남동 프리미엄 샴페인바 RAWISM The Black의 메뉴, 공간, 분위기 사진 모음",
            "url": "https://rawism.kr/gallery",
            "isPartOf": { "@type": "WebSite", "name": "RAWISM The Black", "url": "https://rawism.kr" },
            "mainEntity": { "@type": "ImageGallery", "url": "https://rawism.kr/gallery" }
          }) }} />
        </head>
        <body class="bg-[#080808]">
          {children}
        </body>
      </html>
    )
  })
}
