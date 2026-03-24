import { jsxRenderer } from 'hono/jsx-renderer'
import { html } from 'hono/html'

export const createQuizRenderer = () => {
  return jsxRenderer(({ children }) => {
    return (
      <html lang="ko">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>나에게 맞는 샴페인은? | RAWISM 와인 퀴즈 | 연남동 샴페인바</title>
          <meta name="description" content="5문항으로 알아보는 나의 샴페인 취향! RAWISM 소믈리에가 추천하는 블랑 드 블랑, 브뤼 NV, 프레스티지 큐베, 로제 샴페인 중 당신에게 맞는 스타일은? 연남동 최고의 샴페인바에서 직접 맛보세요." />
          <meta name="keywords" content="샴페인 추천, 와인 취향 테스트, 나에게 맞는 와인, 샴페인 종류, 와인 퀴즈, RAWISM 퀴즈, 연남동 샴페인바, 블랑 드 블랑, 로제 샴페인, 브뤼 뜻, 돔 페리뇽, 크뤼그, 와인 테스트, 샴페인 입문" />
          <meta name="author" content="RAWISM The Black" />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href="https://rawism.kr/quiz" />
          {html`<link rel="alternate" hreflang="ko" href="https://rawism.kr/quiz" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/quiz" />`}

          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="theme-color" content="#080808" />

          {/* Open Graph */}
          <meta property="og:title" content="🍾 나에게 맞는 샴페인은? | RAWISM 와인 퀴즈" />
          <meta property="og:description" content="5문항 취향 테스트로 나만의 샴페인을 찾아보세요! 블랑 드 블랑? 로제? 프레스티지 큐베?" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:site_name" content="RAWISM The Black" />
          <meta property="og:url" content="https://rawism.kr/quiz" />
          <meta property="og:image" content="https://rawism.kr/static/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="🍾 나에게 맞는 샴페인은? | RAWISM 와인 퀴즈" />
          <meta name="twitter:description" content="5문항으로 찾는 나만의 샴페인 스타일" />
          <meta name="twitter:image" content="https://rawism.kr/static/og-image.jpg" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
          <script src="https://cdn.tailwindcss.com"></script>
          <script dangerouslySetInnerHTML={{ __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: { 'deep-black': '#080808', 'soft-black': '#141414', 'champagne': '#B8A060', 'off-white': '#E0E0E0' }
                }
              }
            }
          ` }} />
          <link href="/static/style.css" rel="stylesheet" />

          {/* Schema.org - Quiz */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            "name": "나에게 맞는 샴페인은?",
            "description": "RAWISM 소믈리에가 추천하는 5문항 샴페인 취향 테스트",
            "url": "https://rawism.kr/quiz",
            "about": { "@type": "Thing", "name": "Champagne", "description": "샴페인 취향 테스트" },
            "educationalLevel": "beginner",
            "numberOfQuestions": 5,
            "timeRequired": "PT1M",
            "provider": {
              "@type": "Organization",
              "name": "RAWISM The Black",
              "url": "https://rawism.kr"
            }
          }) }} />

          {/* Schema.org - BreadcrumbList */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "RAWISM The Black", "item": "https://rawism.kr" },
              { "@type": "ListItem", "position": 2, "name": "와인 퀴즈", "item": "https://rawism.kr/quiz" }
            ]
          }) }} />

          {/* Schema.org - WebPage with speakable */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "나에게 맞는 샴페인은? - RAWISM 와인 퀴즈",
            "description": "5문항으로 알아보는 나의 샴페인 취향. 소믈리에 추천 샴페인과 페어링 가이드.",
            "url": "https://rawism.kr/quiz",
            "isPartOf": { "@type": "WebSite", "name": "RAWISM The Black", "url": "https://rawism.kr" },
            "interactionStatistic": {
              "@type": "InteractionCounter",
              "interactionType": "https://schema.org/LikeAction",
              "userInteractionCount": "quiz completion"
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
