import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ROWISM The Black | 연남동 프리미엄 와인바 & 한우 뭉티기 | 홍대 데이트 기념일 맛집</title>
        <meta name="description" content="서울 연남동 프리미엄 와인바 ROWISM The Black. 트러플 한우 뭉티기와 샴페인이 만나는 특별한 밤. 홍대입구역 5분, 15석 한정 예약제. 기념일, 데이트, 프로포즈를 위한 연남동 대표 다이닝 공간. 2인 평균 18만원." />
        <meta name="keywords" content="연남동 와인바, 연남동 데이트, 연남동 기념일, 홍대 와인바, 홍대 데이트, 홍대 기념일 레스토랑, 한우 뭉티기, 트러플 육회, 연남동 분위기 좋은 곳, 프로포즈 레스토랑, 기념일 레스토랑, 연남동 맛집, 홍대 데이트 코스, 연남동 프라이빗 다이닝, 연남동 한우, 홍대입구역 맛집, 연남동 럭셔리 레스토랑, 서울 와인바 추천" />
        <meta name="author" content="ROWISM The Black" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rowism.com" />
        
        {/* Geographic Tags for Local SEO */}
        <meta name="geo.region" content="KR-11" />
        <meta name="geo.placename" content="연남동, 마포구, 서울" />
        <meta name="geo.position" content="37.5595;126.9224" />
        <meta name="ICBM" content="37.5595, 126.9224" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ROWISM The Black | 연남동 프리미엄 와인바 & 한우 뭉티기" />
        <meta property="og:description" content="트러플 한우 뭉티기와 샴페인이 만나는 연남동에서 가장 특별한 밤. 홍대입구역 5분, 15석 한정 예약제. 기념일, 데이트, 프로포즈 맛집." />
        <meta property="og:type" content="restaurant" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="ROWISM The Black" />
        <meta property="og:url" content="https://rowism.com" />
        
        {/* Restaurant Specific OG Tags */}
        <meta property="restaurant:contact_info:street_address" content="동교로 262-4" />
        <meta property="restaurant:contact_info:locality" content="마포구" />
        <meta property="restaurant:contact_info:region" content="서울" />
        <meta property="restaurant:contact_info:country_name" content="대한민국" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ROWISM The Black | 연남동 프리미엄 와인바" />
        <meta name="twitter:description" content="트러플 한우 뭉티기와 샴페인이 만나는 특별한 밤. 홍대입구역 5분." />
        
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
        
        {/* Schema.org Structured Data - Restaurant */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "ROWISM The Black",
          "alternateName": "로위즘 더 블랙",
          "description": "연남동 프리미엄 와인바. 트러플 한우 뭉티기와 샴페인 페어링 전문점. 홍대입구역 도보 5분, 15석 한정 예약제 운영.",
          "url": "https://rowism.com",
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
          "servesCuisine": ["한식", "와인바", "육회", "한우"],
          "menu": "https://rowism.com/#menu",
          "priceRange": "₩₩₩",
          "currenciesAccepted": "KRW",
          "paymentAccepted": "현금, 신용카드",
          "acceptsReservations": true,
          "reservations": "https://booking.naver.com/",
          "hasMenu": {
            "@type": "Menu",
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": "Signature",
                "hasMenuItem": {
                  "@type": "MenuItem",
                  "name": "로위즘 뭉티기 시그니처",
                  "description": "최상급 한우 뭉티기 · 이탈리아 부라타 치즈 · 블랙 트러플 · 파르미지아노 레지아노",
                  "offers": {
                    "@type": "Offer",
                    "price": "92000",
                    "priceCurrency": "KRW"
                  }
                }
              }
            ]
          },
          "image": "https://rowism.com/images/og-image.jpg",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "author": {
                "@type": "Person",
                "name": "방문자"
              },
              "reviewBody": "연남동 데이트 장소로 최고였습니다. 분위기와 음식 모두 만족스러웠어요."
            }
          ],
          "sameAs": [
            "https://instagram.com/rowism_theblack",
            "https://map.naver.com/v5/entry/place/rowism"
          ],
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "예약 필수",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "와인 페어링",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "프라이빗 다이닝",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "기념일 이벤트",
              "value": true
            }
          ]
        })}} />
        
        {/* Schema.org Structured Data - FAQ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "연남동 와인바 ROWISM은 예약 없이 방문해도 되나요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ROWISM The Black은 예약제로 운영됩니다. 15개 테이블 한정으로 운영되며, 특히 금요일, 토요일, 기념일에는 예약이 필수입니다. 네이버 예약 또는 전화로 예약 가능하며, 최소 2-3일 전 예약을 권장드립니다."
              }
            },
            {
              "@type": "Question",
              "name": "ROWISM The Black 2인 방문 시 예상 금액은 얼마인가요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "2인 기준 평균 객단가는 약 18만원입니다. 시그니처 뭉티기(92,000원) + 사이드 메뉴 + 와인 1병 구성을 추천드리며, 좀 더 가볍게 즐기시려면 10-12만원대로도 이용 가능합니다."
              }
            },
            {
              "@type": "Question",
              "name": "뭉티기와 육회의 차이는 무엇인가요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "뭉티기는 한우를 얇게 저며 양념 없이 그대로 즐기는 대구 향토 음식입니다. 일반 육회가 참기름, 소금 등으로 양념되는 것과 달리, 뭉티기는 고기 본연의 풍미를 느낄 수 있습니다. ROWISM에서는 이탈리아 부라타 치즈, 블랙 트러플과 함께 제공합니다."
              }
            },
            {
              "@type": "Question",
              "name": "연남동 ROWISM에서 프로포즈 이벤트가 가능한가요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "네, 예약 시 미리 말씀해주시면 꽃, 케이크 등 이벤트 준비를 도와드립니다. 프라이빗한 코너 테이블 배정과 타이밍에 맞춘 서비스를 제공해드립니다."
              }
            },
            {
              "@type": "Question",
              "name": "연남동 와인바 ROWISM의 위치는 어디인가요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ROWISM The Black은 서울 마포구 동교로 262-4에 위치해 있습니다. 지하철 2호선 홍대입구역 3번 출구에서 도보 5분(약 400m) 거리이며, 연트럴파크 인근 연남동 골목에 자리하고 있습니다."
              }
            },
            {
              "@type": "Question",
              "name": "ROWISM The Black 영업시간과 휴무일이 어떻게 되나요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "화요일부터 일요일까지 18:00 - 24:00 영업하며, 라스트오더는 22:30입니다. 매주 월요일은 정기 휴무입니다."
              }
            }
          ]
        })}} />
        
        {/* Schema.org Structured Data - LocalBusiness (for GEO) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ROWISM The Black",
          "description": "연남동 프리미엄 와인바. 트러플 한우 뭉티기 전문점. 데이트, 기념일, 프로포즈 장소로 인기.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "동교로 262-4",
            "addressLocality": "마포구 연남동",
            "addressRegion": "서울특별시",
            "addressCountry": "KR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "37.5595",
            "longitude": "126.9224"
          },
          "areaServed": {
            "@type": "City",
            "name": "서울"
          },
          "knowsAbout": ["와인", "한우", "육회", "뭉티기", "이탈리안", "데이트", "기념일"],
          "slogan": "연남동에서 가장 특별한 밤"
        })}} />
        
        {/* Schema.org Structured Data - BreadcrumbList */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "서울 맛집",
              "item": "https://rowism.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "연남동 와인바",
              "item": "https://rowism.com"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "ROWISM The Black",
              "item": "https://rowism.com"
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
