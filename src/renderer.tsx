import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ROWISM The Black | 연남동 프리미엄 샴페인바 & 한우 뭉티기 | 홍대 데이트 기념일 맛집</title>
        <meta name="description" content="서울 연남동 프리미엄 샴페인바 ROWISM The Black. 당일 도축 온도체 한우 뭉티기와 샴페인이 만나는 특별한 밤. 체온이 남아있는 신선함 그대로, 부라타 치즈와 트러플의 조화. 홍대입구역 5분, 8석 한정 예약제. 2인 평균 18만원." />
        <meta name="keywords" content="연남동 샴페인바, 연남동 데이트, 연남동 기념일, 홍대 샴페인바, 홍대 데이트, 홍대 기념일 레스토랑, 한우 뭉티기, 트러플 육회, 연남동 분위기 좋은 곳, 기념일 레스토랑, 연남동 맛집, 홍대 데이트 코스, 연남동 프라이빗 다이닝, 연남동 한우, 홍대입구역 맛집, 연남동 럭셔리 레스토랑, 서울 샴페인바 추천, 연트럴파크 맛집, 경의선숲길 맛집, 연남동 크리스마스, 홍대 발렌타인데이, 연남동 100일 기념, 홍대 1주년 기념일, 홍대 서교동 맛집, 합정 데이트, 망원동 맛집, 홍대입구역 3번출구 맛집, 연남동 스파클링와인, 홍대 버블바, 연남동 고급 레스토랑, 홍대 접대, 연남동 비즈니스 미팅, 연남동 뭉티기, 홍대 뭉티기, 온도체 한우, 당일 도축 한우, 연남동 육회, 홍대 육회, 연남동 제비추리, 홍대 제비추리 구이, 연남동 치즈플레이트, 홍대 치즈 맛집, 브리 드 모, 고르곤졸라, 연남동 아보카도 카프레제, 홍대 부라타 치즈, 연남동 메밀면, 홍대 들기름 육회, 연남동 블랙트러플, 홍대 트러플 요리, 연남동 파르미지아노, 홍대 프리미엄 한우, 연남동 청양오일육회, 홍대 매운 육회" />
        <meta name="author" content="ROWISM The Black" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rowism.com" />
        
        {/* Favicon & App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <meta name="theme-color" content="#080808" />
        <meta name="msapplication-TileColor" content="#080808" />
        
        {/* Geographic Tags for Local SEO - Enhanced */}
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
        <meta name="coverage" content="연남동, 서교동, 홍대, 합정동, 망원동, 상수동, 마포구" />
        <meta name="distribution" content="local" />
        <meta name="target" content="연남동 데이트, 홍대 데이트, 기념일" />
        
        {/* Naver Specific Meta Tags */}
        <meta name="naver-site-verification" content="verify-code-here" />
        <meta property="naverbot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ROWISM The Black | 연남동 프리미엄 샴페인바 & 한우 뭉티기" />
        <meta property="og:description" content="당일 도축 온도체 한우의 생생한 육향. 체온이 남아있는 신선함 그대로 즐기는 뭉티기와 샴페인의 만남. 홍대입구역 5분, 8석 한정 예약제." />
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
        <meta name="twitter:title" content="ROWISM The Black | 연남동 프리미엄 샴페인바" />
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
          "description": "연남동 프리미엄 샴페인바. 트러플 한우 뭉티기와 샴페인 페어링 전문점. 홍대입구역 도보 5분, 8석 한정 예약제 운영.",
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
          "servesCuisine": ["한식", "샴페인바", "육회", "한우"],
          "menu": "https://rowism.com/#menu",
          "priceRange": "₩₩₩",
          "currenciesAccepted": "KRW",
          "paymentAccepted": "현금, 신용카드",
          "acceptsReservations": true,
          "reservations": "https://naver.me/5qLSfCNC",
          "hasMenu": {
            "@type": "Menu",
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": "Signature",
                "hasMenuItem": {
                  "@type": "MenuItem",
                  "name": "로위즘 뭉티기 시그니처",
                  "description": "당일 도축 온도체 한우 뭉티기 · 이탈리아 부라타 치즈 · 움브리아산 블랙 트러플 · 24개월 숙성 파르미지아노 레지아노",
                  "image": "https://rowism.com/static/menu_signature.jpg",
                  "offers": {
                    "@type": "Offer",
                    "price": "92000",
                    "priceCurrency": "KRW"
                  }
                }
              },
              {
                "@type": "MenuSection",
                "name": "Main",
                "hasMenuItem": [
                  {
                    "@type": "MenuItem",
                    "name": "제비추리 그릴드 베지터블",
                    "description": "한우 갈비 부위 중 가장 부드러운 제비추리 참숯 그릴링 · 애호박 · 새송이버섯 · 파프리카 · 로즈마리 소금",
                    "image": "https://rowism.com/static/menu_jebichuri.jpg",
                    "offers": {
                      "@type": "Offer",
                      "price": "49000",
                      "priceCurrency": "KRW"
                    }
                  },
                  {
                    "@type": "MenuItem",
                    "name": "치즈 셀렉션",
                    "description": "소믈리에 큐레이션 유럽산 프리미엄 치즈 4종 · 브리 드 모 · 카망베르 · 고르곤졸라 피칸테 · 24개월 숙성 꽁테",
                    "image": "https://rowism.com/static/menu_cheese.jpg",
                    "offers": {
                      "@type": "Offer",
                      "price": "36000",
                      "priceCurrency": "KRW"
                    }
                  },
                  {
                    "@type": "MenuItem",
                    "name": "청양 오일 육회",
                    "description": "한우 홍두깨살 육회 · 청양고추 인퓨즈드 오일 · 배 · 잣 · 계란 노른자",
                    "image": "https://rowism.com/static/menu_yukhoe.jpg",
                    "offers": {
                      "@type": "Offer",
                      "price": "25000",
                      "priceCurrency": "KRW"
                    }
                  },
                  {
                    "@type": "MenuItem",
                    "name": "아보카도 카프레제",
                    "description": "하스 아보카도 · 부팔라 모짜렐라 · 발사믹 리덕션 · 바질 오일 · 플뢰르 드 셀",
                    "image": "https://rowism.com/static/menu_caprese.jpg",
                    "offers": {
                      "@type": "Offer",
                      "price": "23000",
                      "priceCurrency": "KRW"
                    }
                  }
                ]
              },
              {
                "@type": "MenuSection",
                "name": "Finisher",
                "hasMenuItem": {
                  "@type": "MenuItem",
                  "name": "들기름 육회 메밀면",
                  "description": "봉평 메밀면 · 한우 육회 · 들기름 · 김 가루 · 계란 노른자 · 마무리 비빔면",
                  "image": "https://rowism.com/static/menu_memil.jpg",
                  "offers": {
                    "@type": "Offer",
                    "price": "15000",
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
              "name": "샴페인 페어링",
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
              "name": "연남동 샴페인바 ROWISM은 예약 없이 방문해도 되나요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ROWISM The Black은 예약제로 운영됩니다. 8개 테이블 한정으로 운영되며, 특히 금요일, 토요일, 기념일에는 예약이 필수입니다. 네이버 예약을 통해 예약 가능하며, 최소 2-3일 전 예약을 권장드립니다."
              }
            },
            {
              "@type": "Question",
              "name": "ROWISM The Black 2인 방문 시 예상 금액은 얼마인가요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "2인 기준 평균 객단가는 약 18만원입니다. 시그니처 뭉티기(92,000원) + 사이드 메뉴 + 샴페인 1병 구성을 추천드리며, 좀 더 가볍게 즐기시려면 10-12만원대로도 이용 가능합니다."
              }
            },
            {
              "@type": "Question",
              "name": "뭉티기가 뭔가요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "뭉티기는 당일 도축한 온도체 한우를 신선한 상태 그대로 얇게 저며 즐기는 대구의 보물 같은 음식입니다. 아침에 도축된 한우가 체온이 남아있는 상태로 바로 손질되어, 일반 냉장 숙성육에서는 절대 느낄 수 없는 부드러움과 생생한 육향을 선사합니다. 양념 없이 고기 본연의 달콤함과 감칠맛을 느끼는 것이 포인트예요. ROWISM에서는 크리미한 이탈리아 부라타 치즈, 향긋한 블랙 트러플과 함께 제공하여 전통과 모던의 완벽한 조화를 경험하실 수 있습니다."
              }
            },
            
            {
              "@type": "Question",
              "name": "연남동 샴페인바 ROWISM의 위치는 어디인가요?",
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
        
        {/* Schema.org Structured Data - LocalBusiness (Enhanced GEO) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://rowism.com/#localbusiness",
          "name": "ROWISM The Black",
          "alternateName": ["로위즘", "로위즘 더 블랙", "연남동 로위즘", "홍대 로위즘"],
          "description": "연남동 프리미엄 샴페인바. 트러플 한우 뭉티기 전문점. 연트럴파크 인근, 경의선숲길 도보 3분. 데이트, 기념일 장소로 인기. 홍대입구역 3번출구 도보 5분.",
          "url": "https://rowism.com",
          "telephone": "+82-10-0000-0000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "동교로 262-4",
            "addressLocality": "마포구",
            "addressRegion": "서울특별시",
            "postalCode": "04030",
            "addressCountry": "KR",
            "areaServed": ["연남동", "서교동", "홍대", "합정동", "망원동", "상수동"]
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "37.5595",
            "longitude": "126.9224"
          },
          "areaServed": [
            { "@type": "Place", "name": "연남동" },
            { "@type": "Place", "name": "서교동" },
            { "@type": "Place", "name": "홍대" },
            { "@type": "Place", "name": "합정동" },
            { "@type": "Place", "name": "망원동" },
            { "@type": "City", "name": "서울" },
            { "@type": "City", "name": "마포구" }
          ],
          "hasMap": "https://map.naver.com/v5/search/로위즘",
          "knowsAbout": ["샴페인", "스파클링와인", "한우", "육회", "뭉티기", "트러플", "부라타치즈", "데이트", "기념일", "프라이빗다이닝"],
          "slogan": "연남동에서 가장 특별한 밤",
          "keywords": "연남동 데이트, 홍대 데이트, 연남동 기념일, 홍대 기념일, 연트럴파크 맛집, 경의선숲길 맛집, 홍대입구역 맛집, 연남동 샴페인바, 홍대 샴페인바",
          "containedInPlace": {
            "@type": "Place",
            "name": "연남동",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "마포구, 서울"
            }
          },
          "isAccessibleForFree": false,
          "publicAccess": true
        })}} />
        
        {/* Schema.org - Place with Nearby Landmarks */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": "ROWISM The Black 위치",
          "description": "연남동 프리미엄 샴페인바 - 연트럴파크 도보 2분, 경의선숲길 도보 3분, 홍대입구역 3번출구 도보 5분",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "37.5595",
            "longitude": "126.9224"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "동교로 262-4 (연남동)",
            "addressLocality": "마포구",
            "addressRegion": "서울특별시",
            "postalCode": "04030",
            "addressCountry": "KR"
          },
          "containsPlace": {
            "@type": "Restaurant",
            "name": "ROWISM The Black"
          },
          "nearbyAttraction": [
            { "@type": "TouristAttraction", "name": "연트럴파크", "description": "도보 2분" },
            { "@type": "TouristAttraction", "name": "경의선숲길", "description": "도보 3분" },
            { "@type": "TouristAttraction", "name": "동진시장", "description": "도보 3분" },
            { "@type": "TouristAttraction", "name": "홍대 걷고싶은거리", "description": "도보 8분" }
          ],
          "publicTransportation": [
            { "@type": "SubwayStation", "name": "홍대입구역 2호선", "description": "3번 출구 도보 5분" },
            { "@type": "SubwayStation", "name": "홍대입구역 경의중앙선", "description": "도보 7분" },
            { "@type": "SubwayStation", "name": "홍대입구역 공항철도", "description": "도보 7분" }
          ]
        })}} />
        
        {/* Schema.org - Event for Seasonal Keywords */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "ROWISM The Black 기념일 이벤트",
          "description": "연남동 프리미엄 샴페인바에서 특별한 기념일을 보내세요. 100일, 1주년, 생일, 크리스마스, 발렌타인데이 등 소중한 날을 위한 프라이빗 다이닝.",
          "location": {
            "@type": "Place",
            "name": "ROWISM The Black",
            "address": "서울 마포구 동교로 262-4"
          },
          "organizer": {
            "@type": "Organization",
            "name": "ROWISM The Black",
            "url": "https://rowism.com"
          },
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "offers": {
            "@type": "Offer",
            "url": "https://naver.me/5qLSfCNC",
            "availability": "https://schema.org/InStock"
          },
          "keywords": "연남동 크리스마스 데이트, 홍대 발렌타인데이, 연남동 화이트데이, 연남동 100일, 홍대 1주년, 연남동 생일파티"
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
              "name": "연남동 샴페인바",
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
