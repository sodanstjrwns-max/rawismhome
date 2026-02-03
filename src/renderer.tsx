import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ROWISM The Black | 연남동 프리미엄 와인바 & 한우 뭉티기 | 데이트 기념일 맛집</title>
        <meta name="description" content="연남동 ROWISM The Black. 트러플 한우 뭉티기와 샴페인이 만나는 특별한 밤. 기념일, 데이트, 프로포즈를 위한 프리미엄 와인바. 홍대입구역 5분." />
        <meta name="keywords" content="연남동 와인바, 연남동 데이트, 연남동 기념일, 홍대 와인바, 한우 뭉티기, 트러플 육회, 연남동 분위기 좋은 곳, 프로포즈 레스토랑, 기념일 레스토랑, 연남동 맛집, 홍대 데이트 코스" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ROWISM The Black | 연남동 프리미엄 와인바" />
        <meta property="og:description" content="트러플 한우 뭉티기와 샴페인이 만나는 특별한 밤. 기념일, 데이트, 프로포즈를 위한 프리미엄 와인바." />
        <meta property="og:type" content="restaurant" />
        <meta property="og:locale" content="ko_KR" />
        
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
                  'deep-black': '#0A0A0A',
                  'soft-black': '#1A1A1A',
                  'deep-wine': '#8B2D3A',
                  'champagne': '#C9A962',
                  'off-white': '#E8E8E8',
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
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "ROWISM The Black",
          "description": "연남동 프리미엄 와인바. 트러플 한우 뭉티기와 샴페인 페어링 전문점.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "동교로 262-4",
            "addressLocality": "마포구",
            "addressRegion": "서울",
            "addressCountry": "KR"
          },
          "telephone": "+82-10-0000-0000",
          "openingHoursSpecification": {
            "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "18:00",
            "closes": "24:00"
          },
          "servesCuisine": ["한우", "와인", "샴페인", "육회"],
          "priceRange": "₩₩₩",
          "acceptsReservations": "True"
        })}} />
      </head>
      <body class="bg-deep-black text-off-white font-pretendard">
        {children}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
