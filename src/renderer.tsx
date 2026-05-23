import { jsxRenderer } from 'hono/jsx-renderer'

type Language = 'ko' | 'en' | 'ja' | 'zh'

const seoData: Record<Language, {
  lang: string
  title: string
  description: string
  keywords: string
  ogDescription: string
}> = {
  ko: {
    lang: 'ko',
    title: 'RAWISM | 연남동 한우 육회 · 뭉티기 · 소주 · 맥주 | 홍대입구역 5분 술집',
    description: '연남동 한우 육회 전문 술집 RAWISM. 향촌동 뭉티기 · 청양육회 · 마라육회 · 육회비빔면. 참이슬·처음처럼·진로·새로 · 카스·테라·크러쉬. 야광팔찌 끼고 03~06 K-POP BGM 들으며 소주 한잔. 홍대입구역 3번출구 도보 5분. 연트럴파크 인근.',
    keywords: '로위즘, RAWISM, 연남동 술집, 연남동 맛집, 연남동 핫플, 연남동 한우 술집, 연남동 육회, 연남동 뭉티기, 연남동 육회 맛집, 연남동 데이트, 연남동 2차, 연남동 안주 맛집, 연남동 생일 술집, 연남동 회식, 연남동 분위기 좋은 술집, 연남동 소주, 연남동 맥주, 향촌동 뭉티기, 한우 육회 맛집, 육회 안주, 육회 소주, 육회비빔면, 육회비빔밥, 청양육회, 마라육회, 홍대 술집, 홍대 육회, 홍대 맛집, 홍대입구역 술집, 홍대입구역 맛집, 홍대 안주 맛집, 홍대 데이트, 홍대 2차, 마포구 술집, 마포구 맛집, 연트럴파크 맛집, 경의선숲길 맛집, 경의선숲길 술집, 싸이월드 감성 술집, Y2K 감성 술집, 레트로 술집 서울, 네온사진 술집, 야광팔찌 술집, 잡지 콜라주 술집, 룰렛 술집, 소주 맛집, 맥주 맛집, K-POP 술집, 무국 해장, 속풀이 무국',
    ogDescription: 'RAWISM — 연남동 한우 육회 · 뭉티기 · 소주 · 맥주. 야광팔찌 끼고 03~06 K-POP 들으며 한잔. 홍대입구역 5분.'
  },
  en: {
    lang: 'en',
    title: 'RAWISM | Hanwoo Beef Tartare Bar in Yeonnam-dong Seoul | Retro K-POP Bar near Hongdae',
    description: 'RAWISM - Premium Hanwoo beef tartare (yukhoe) & mungtige bar in Yeonnam-dong, Seoul. Korean soju, beer (Cass, Terra, Krush), retro 2000s K-POP BGM, neon glow bracelets, magazine collage walls. 5 min walk from Hongdae Station Exit 3. Reservations available.',
    keywords: 'RAWISM, Yeonnam-dong bar, Hongdae bar, Korean beef tartare, yukhoe Seoul, mungtige, Hanwoo bar Seoul, Korean soju bar, beer bar Seoul, Hongdae restaurant, Yeonnam-dong restaurant, Seoul nightlife, retro bar Seoul, K-POP bar, neon bar, Korean drinking culture, Mapo-gu bar, Korean raw beef, Seoul date spot, Hongdae date, group dinner Seoul',
    ogDescription: 'RAWISM — Hanwoo beef tartare · mungtige · soju · beer. Retro K-POP bar near Hongdae Station, Seoul. Yeonnam-dong hotspot.'
  },
  ja: {
    lang: 'ja',
    title: 'RAWISM | 延南洞 韓牛ユッケ・ムンティギ・焼酎・ビール | 弘大駅徒歩5分',
    description: 'RAWISM - 延南洞の韓牛ユッケ専門バー。大邱ヒャンチョン洞伝統のムンティギ、青唐ユッケ、麻辣ユッケ。焼酎・ビール・2000年代K-POP BGM。弘大駅3番出口徒歩5分。予約可能。',
    keywords: 'RAWISM, 延南洞バー, 弘大バー, 韓牛ユッケ, ムンティギ, 韓国焼酎, 韓国ビール, K-POPバー, レトロバー, ソウル居酒屋, ソウルナイトライフ, ネオンバー, 弘大レストラン, マポ区バー, ソウルデート',
    ogDescription: 'RAWISM — 延南洞の韓牛ユッケ・ムンティギ・焼酎・ビール。弘大駅5分。'
  },
  zh: {
    lang: 'zh',
    title: 'RAWISM | 延南洞 韩牛肉脍·肉块·烧酒·啤酒 | 弘大站步5分钟',
    description: 'RAWISM - 延南洞韩牛肉脍专业酒吧。乡村洞传统肉块、青阳肉脍、麻辣肉脍。烧酒·啤酒·2000年代K-POP背景音乐。弘大站3号出口步5分钟。可预约。',
    keywords: 'RAWISM, 延南洞酒吧, 弘大酒吧, 韩牛肉脍, 肉块, 韩国烧酒, 韩国啤酒, K-POP酒吧, 复古酒吧, 首尔居酒屋, 首尔夜生活, 霓虹酒吧, 弘大餐厅, 麻浦区酒吧, 首尔约会',
    ogDescription: 'RAWISM — 延南洞韩牛肉脍·肉块·烧酒·啤酒。弘大站5分钟。'
  }
}

export function createRenderer(lang: Language = 'ko') {
  const seo = seoData[lang]
  
  return jsxRenderer(({ children }) => {
    return (
      <html lang={seo.lang}>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <link rel="canonical" href={`https://rawism.kr${lang === 'ko' ? '/' : `/${lang}`}`} />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="naver-site-verification" content="4ac2be6acaaec72429e634e4b3e5ac22e16b5567" />
          
          {/* hreflang */}
          <link rel="alternate" hreflang="ko" href="https://rawism.kr/" />
          <link rel="alternate" hreflang="en" href="https://rawism.kr/en" />
          <link rel="alternate" hreflang="ja" href="https://rawism.kr/ja" />
          <link rel="alternate" hreflang="zh" href="https://rawism.kr/zh" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/" />
          
          {/* OG Tags */}
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.ogDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://rawism.kr${lang === 'ko' ? '/' : `/${lang}`}`} />
          <meta property="og:image" content="https://rawism.kr/static/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="RAWISM" />
          <meta property="og:locale" content={lang === 'ko' ? 'ko_KR' : lang === 'en' ? 'en_US' : lang === 'ja' ? 'ja_JP' : 'zh_CN'} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.ogDescription} />
          <meta name="twitter:image" content="https://rawism.kr/static/og-image.jpg" />
          
          {/* Fonts - Pretendard + Google Fonts for retro feel */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
          <link rel="preload" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
          <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=East+Sea+Dokdo&display=swap" rel="stylesheet" />
          
          {/* Tailwind CSS */}
          <script src="https://cdn.tailwindcss.com"></script>
          <script dangerouslySetInnerHTML={{__html: `
            tailwind.config={
              theme:{
                extend:{
                  colors:{
                    'neon-pink':'#ff6ec7',
                    'neon-cyan':'#00d4ff',
                    'neon-yellow':'#fffb00',
                    'neon-purple':'#c084fc',
                    'neon-green':'#00ff7f',
                    'base-black':'#0a0a0a',
                    'card-black':'#141414'
                  },
                  fontFamily:{
                    'pretendard':['Pretendard Variable','Pretendard','sans-serif'],
                    'handwrite':['East Sea Dokdo','Nanum Pen Script','cursive'],
                    'pen':['Nanum Pen Script','cursive']
                  }
                }
              }
            }
          `}} />
          
          {/* Neon + Retro CSS */}
          <style dangerouslySetInnerHTML={{__html: `
            .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: 'Pretendard Variable', 'Pretendard', -apple-system, sans-serif;
              background: #0a0a0a;
              color: #ffffff;
              overflow-x: hidden;
            }
            
            /* Neon Glow Effects */
            .neon-pink { 
              color: #ff6ec7; 
              text-shadow: 0 0 7px #ff6ec7, 0 0 10px #ff6ec7, 0 0 21px #ff6ec7, 0 0 42px #ff6ec7; 
            }
            .neon-cyan { 
              color: #00d4ff; 
              text-shadow: 0 0 7px #00d4ff, 0 0 10px #00d4ff, 0 0 21px #00d4ff; 
            }
            .neon-yellow { 
              color: #fffb00; 
              text-shadow: 0 0 7px #fffb00, 0 0 10px #fffb00, 0 0 21px #fffb00; 
            }
            .neon-green {
              color: #00ff7f;
              text-shadow: 0 0 7px #00ff7f, 0 0 10px #00ff7f, 0 0 21px #00ff7f;
            }
            .neon-purple {
              color: #c084fc;
              text-shadow: 0 0 7px #c084fc, 0 0 10px #c084fc, 0 0 21px #c084fc;
            }
            .neon-box-pink {
              box-shadow: 0 0 7px #ff6ec780, 0 0 15px #ff6ec740, inset 0 0 7px #ff6ec720;
              border: 1px solid #ff6ec780;
            }
            .neon-box-cyan {
              box-shadow: 0 0 7px #00d4ff80, 0 0 15px #00d4ff40, inset 0 0 7px #00d4ff20;
              border: 1px solid #00d4ff80;
            }
            .neon-box-yellow {
              box-shadow: 0 0 7px #fffb0080, 0 0 15px #fffb0040, inset 0 0 7px #fffb0020;
              border: 1px solid #fffb0080;
            }
            
            /* Neon Flicker Animation */
            @keyframes neonFlicker {
              0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
              20%, 24%, 55% { opacity: 0.6; }
            }
            .neon-flicker { animation: neonFlicker 3s infinite alternate; }
            
            /* Star Particles */
            @keyframes twinkle {
              0%, 100% { opacity: 0.2; transform: scale(0.8); }
              50% { opacity: 1; transform: scale(1.2); }
            }
            .star {
              position: absolute;
              color: #fff;
              font-size: 10px;
              animation: twinkle var(--dur, 3s) infinite;
              animation-delay: var(--delay, 0s);
              pointer-events: none;
            }
            
            /* Glitch Effect */
            @keyframes glitch {
              0% { transform: translate(0); }
              20% { transform: translate(-2px, 2px); }
              40% { transform: translate(-2px, -2px); }
              60% { transform: translate(2px, 2px); }
              80% { transform: translate(2px, -2px); }
              100% { transform: translate(0); }
            }
            .glitch:hover { animation: glitch 0.3s infinite; }
            
            /* CRT scanline overlay */
            .crt::after {
              content: '';
              position: absolute;
              inset: 0;
              background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 1px,
                rgba(0,0,0,0.03) 1px,
                rgba(0,0,0,0.03) 2px
              );
              pointer-events: none;
            }
            
            /* Highlighter Effect */
            .highlighter {
              background: linear-gradient(transparent 60%, #fffb0040 60%);
              display: inline;
            }
            .highlighter-pink {
              background: linear-gradient(transparent 60%, #ff6ec740 60%);
              display: inline;
            }
            
            /* Polaroid Frame */
            .polaroid {
              background: #f5f5f0;
              padding: 8px 8px 32px 8px;
              box-shadow: 2px 4px 12px rgba(0,0,0,0.4);
              transform: rotate(var(--rot, -2deg));
              transition: transform 0.3s ease;
            }
            .polaroid:hover { transform: rotate(0deg) scale(1.03); }
            
            /* LP Disc Spin */
            @keyframes spin { 
              from { transform: rotate(0deg); } 
              to { transform: rotate(360deg); } 
            }
            .lp-spin { animation: spin 4s linear infinite; }
            .lp-spin.paused { animation-play-state: paused; }
            
            /* Cassette Tape */
            @keyframes reelSpin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .reel-spin { animation: reelSpin 2s linear infinite; }
            
            /* Fade in on scroll */
            .fade-up {
              opacity: 0;
              transform: translateY(30px);
              transition: opacity 0.8s ease, transform 0.8s ease;
            }
            .fade-up.visible {
              opacity: 1;
              transform: translateY(0);
            }
            
            /* Post-it note style */
            .postit {
              background: #fffb00;
              color: #333;
              padding: 12px 16px;
              transform: rotate(var(--rot, -1deg));
              box-shadow: 2px 3px 8px rgba(0,0,0,0.3);
              font-family: 'Nanum Pen Script', cursive;
              font-size: 18px;
            }
            
            /* Mobile bottom bar offset */
            .mobile-bottom-offset { padding-bottom: 72px; }
            @media (min-width: 1024px) { .mobile-bottom-offset { padding-bottom: 0; } }
            
            /* Scrollbar */
            ::-webkit-scrollbar { width: 6px; }
            ::-webkit-scrollbar-track { background: #0a0a0a; }
            ::-webkit-scrollbar-thumb { background: #ff6ec740; border-radius: 3px; }
            ::-webkit-scrollbar-thumb:hover { background: #ff6ec780; }
          `}} />
          
          {/* JSON-LD: Restaurant */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "RAWISM",
            "alternateName": "로위즘",
            "url": "https://rawism.kr",
            "telephone": "+82-70-5100-5534",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "동교로 262-4",
              "addressLocality": "마포구",
              "addressRegion": "서울특별시",
              "postalCode": "04030",
              "addressCountry": "KR"
            },
            "geo": { "@type": "GeoCoordinates", "latitude": 37.5595, "longitude": 126.9224 },
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "18:00", "closes": "23:00" }
            ],
            "servesCuisine": ["한우 육회", "뭉티기", "한식 주점", "소주", "맥주", "육회비빔면", "육회비빔밥"],
            "priceRange": "₩₩₩",
            "image": "https://rawism.kr/static/new/mungtige_jeontong.jpg",
            "description": seo.description,
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127" },
            "acceptsReservations": "True",
            "menu": "https://rawism.kr/#menu",
            "hasMenu": {
              "@type": "Menu",
              "name": "RAWISM 메뉴판",
              "description": "연남동 한우 육회 · 뭉티기 · 소주 · 맥주",
              "hasMenuSection": [
                {
                  "@type": "MenuSection",
                  "name": "시그니처",
                  "hasMenuItem": [
                    {"@type":"MenuItem","name":"향촌동 뭉티기","description":"당일 도축 한우 200g. 정통/깍둝 선택 가능","offers":{"@type":"Offer","price":"45000","priceCurrency":"KRW"}}
                  ]
                },
                {
                  "@type": "MenuSection",
                  "name": "육회",
                  "hasMenuItem": [
                    {"@type":"MenuItem","name":"청양 오일 육회","description":"한우 우둥살 150g. 매콤한 고추기름","offers":{"@type":"Offer","price":"22000","priceCurrency":"KRW"}},
                    {"@type":"MenuItem","name":"오이마요 육회","description":"한우 우둥살 150g. 마요 + 오이의 깔끔한 조합","offers":{"@type":"Offer","price":"22000","priceCurrency":"KRW"}},
                    {"@type":"MenuItem","name":"마라깟잎 육회","description":"한우 우둥살 150g. 마라 + 깟잎","offers":{"@type":"Offer","price":"22000","priceCurrency":"KRW"}}
                  ]
                },
                {
                  "@type": "MenuSection",
                  "name": "안주 · 마무리",
                  "hasMenuItem": [
                    {"@type":"MenuItem","name":"아보 카프레제","description":"아보카도 + 모짜렐라 + 방울토마토","offers":{"@type":"Offer","price":"19000","priceCurrency":"KRW"}},
                    {"@type":"MenuItem","name":"크림앤칩스","description":"맥주 마시면서 손이 자꾸 가는 안주","offers":{"@type":"Offer","price":"8000","priceCurrency":"KRW"}},
                    {"@type":"MenuItem","name":"육회 들기름 비빔면","description":"육회비빔면. 마지막 마무리용","offers":{"@type":"Offer","price":"13000","priceCurrency":"KRW"}},
                    {"@type":"MenuItem","name":"육회 아보 비빔밥","description":"육회비빔밥. 면보다 밥이 좋은 사람용","offers":{"@type":"Offer","price":"15000","priceCurrency":"KRW"}},
                    {"@type":"MenuItem","name":"속풀이 무국","description":"해장용 무국. 국물이 시원하다","offers":{"@type":"Offer","price":"12000","priceCurrency":"KRW"}}
                  ]
                },
                {
                  "@type": "MenuSection",
                  "name": "주류",
                  "hasMenuItem": [
                    {"@type":"MenuItem","name":"참이슬 후레쉬","offers":{"@type":"Offer","price":"5000","priceCurrency":"KRW"}},
                    {"@type":"MenuItem","name":"처음처럼","offers":{"@type":"Offer","price":"5000","priceCurrency":"KRW"}},
                    {"@type":"MenuItem","name":"진로","offers":{"@type":"Offer","price":"5000","priceCurrency":"KRW"}},
                    {"@type":"MenuItem","name":"새로","offers":{"@type":"Offer","price":"5000","priceCurrency":"KRW"}},
                    {"@type":"MenuItem","name":"카스 후레쉬","offers":{"@type":"Offer","price":"6000","priceCurrency":"KRW"}},
                    {"@type":"MenuItem","name":"테라","offers":{"@type":"Offer","price":"6000","priceCurrency":"KRW"}},
                    {"@type":"MenuItem","name":"크러쉬","offers":{"@type":"Offer","price":"7000","priceCurrency":"KRW"}}
                  ]
                }
              ]
            }
          })}} />
          
          {/* JSON-LD: WebSite */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "RAWISM",
            "url": "https://rawism.kr",
            "description": "연남동 한우 육회 · 뭉티기 · 소주 · 맥주. 야광팔찌 · 03~06 K-POP. 홍대입구역 5분."
          })}} />
          
          {/* JSON-LD: BreadcrumbList */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "RAWISM", "item": "https://rawism.kr" },
              { "@type": "ListItem", "position": 2, "name": "메뉴", "item": "https://rawism.kr/#menu" },
              { "@type": "ListItem", "position": 3, "name": "예약", "item": "https://rawism.kr/#reserve" }
            ]
          })}} />
          
          {/* JSON-LD: FAQPage */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type":"Question","name":"RAWISM 영업시간이 어떻게 되나요?","acceptedAnswer":{"@type":"Answer","text":"화요일~일요일 18:00~23:00 영업합니다. 매주 월요일 휴무입니다."}},
              {"@type":"Question","name":"RAWISM 위치가 어디인가요?","acceptedAnswer":{"@type":"Answer","text":"서울 마포구 동교로 262-4 (연남동). 홍대입구역 3번 출구에서 도보 5분, 경의선숲길/연트럴파크 인근입니다."}},
              {"@type":"Question","name":"RAWISM 예약은 어떻게 하나요?","acceptedAnswer":{"@type":"Answer","text":"네이버 예약(링크) 또는 인스타그램 DM(@rawism_theblack)으로 예약 가능합니다. 12테이블 운영."}},
              {"@type":"Question","name":"RAWISM 시그니처 메뉴가 뭐인가요?","acceptedAnswer":{"@type":"Answer","text":"향촌동 뭉티기(₩45,000)가 시그니처입니다. 당일 도축 한우 200g으로 정통/깍둝 선택 가능합니다."}},
              {"@type":"Question","name":"RAWISM에서 파는 소주 종류는?","acceptedAnswer":{"@type":"Answer","text":"참이슬 후레쉬, 처음처럼, 진로, 새로 각 ₩5,000입니다."}},
              {"@type":"Question","name":"RAWISM에서 파는 맥주 종류는?","acceptedAnswer":{"@type":"Answer","text":"카스 후레쉬(₩6,000), 테라(₩6,000), 크러쉬(₩7,000)입니다."}},
              {"@type":"Question","name":"RAWISM 야광팔찌 이벤트가 뭐인가요?","acceptedAnswer":{"@type":"Answer","text":"소주/맥주 시키면 직원이 야광팔찌 끼고 서빙해드립니다. 원하면 가져가셔도 OK!"}},
              {"@type":"Question","name":"RAWISM 룰렛 이벤트는 어떻게 참여하나요?","acceptedAnswer":{"@type":"Answer","text":"리뷰 작성 시 룰렛 한 번 돌리실 수 있습니다. 소주, 맥주, 안주 무료 당첨. 가끔 화요 17도 나옵니다!"}}
            ]
          })}} />
          
          {/* Analytics - GA4 + Amplitude */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
          <script dangerouslySetInnerHTML={{__html: `
            window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());gtag('config','G-XXXXXXXXXX');
          `}} />
        </head>
        <body class="font-pretendard mobile-bottom-offset">
          {children}
          
          {/* Scroll animation observer */}
          <script dangerouslySetInnerHTML={{__html: `
            // Fade-up on scroll
            const obs = new IntersectionObserver((entries) => {
              entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
            }, { threshold: 0.1 });
            document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
            
            // Navbar scroll
            let lastScroll = 0;
            const nav = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
              const y = window.scrollY;
              if(nav) {
                if(y > 100) { nav.classList.add('bg-base-black/95','backdrop-blur-lg','border-b','border-neon-pink/10'); nav.classList.remove('bg-transparent'); }
                else { nav.classList.remove('bg-base-black/95','backdrop-blur-lg','border-b','border-neon-pink/10'); nav.classList.add('bg-transparent'); }
              }
              lastScroll = y;
            });
            
            // Mobile menu toggle
            const mBtn = document.getElementById('mobile-menu-btn');
            const mMenu = document.getElementById('mobile-menu');
            if(mBtn && mMenu) {
              mBtn.addEventListener('click', () => { mMenu.classList.toggle('hidden'); });
              mMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mMenu.classList.add('hidden')));
            }
          `}} />
        </body>
      </html>
    )
  })
}
