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
    description: '연남동 한우 육회 전문 술집 RAWISM. 향촌동 뭉티기·청양육회·마라육회·육회비빔면. 참이슬·처음처럼·진로·새로·카스·테라·크러쉬. 홍대입구역(2호선·경의중앙선·공항철도) 3번출구 도보5분. 연트럴파크·경의선숲길 인근. 서울 마포구 동교로 262-4. 화~일 18-23시.',
    keywords: '로위즘, RAWISM, 연남동 술집, 연남동 맛집, 연남동 핫플, 연남동 한우 술집, 연남동 육회, 연남동 뭉티기, 연남동 육회 맛집, 연남동 데이트, 연남동 2차, 연남동 안주 맛집, 연남동 생일 술집, 연남동 회식, 연남동 분위기 좋은 술집, 연남동 소주, 연남동 맥주, 연남동 소개팅, 연남동 기념일, 연남동 레트로 술집, 연남동 새벽 술집, 연남동 직장인 회식, 연남동 대학생 술집, 연남동 야외 술집, 동교동 술집, 동교동 맛집, 동교동 핫플, 동교동 데이트, 동교동 육회, 성산동 술집, 성산동 맛집, 망원동 술집, 망원동 맛집, 연희동 술집, 연희동 맛집, 홍대 술집, 홍대 육회, 홍대 맛집, 홍대입구역 술집, 홍대입구역 맛집, 홍대입구역 3번출구 맛집, 홍대 안주 맛집, 홍대 데이트, 홍대 2차, 홍대 소개팅, 홍대 생일 술집, 홍대 회식, 홍대 분위기 좋은 술집, 홍대 새벽 술집, 마포구 술집, 마포구 맛집, 마포구 육회, 마포구 데이트, 마포구 회식, 서울 육회 맛집, 서울 한우 술집, 서울 뭉티기, 서울 레트로 술집, 서울 데이트 술집, 2호선 술집, 경의중앙선 술집, 공항철도 술집, 연트럴파크 맛집, 연트럴파크 술집, 연트럴파크 데이트, 경의선숲길 맛집, 경의선숲길 술집, 경의선숲길 데이트, 동교동 카페거리 술집, 향촌동 뭉티기, 한우 육회 맛집, 육회 안주, 육회 소주, 육회비빔면, 육회비빔밥, 청양육회, 마라육회, 육사시미, 한우 타르타르, 생고기 안주, 한우 육사시미, 오이마요 육회, 마라깻잎 육회, 한우 안주, 싸이월드 감성 술집, Y2K 감성 술집, 레트로 술집 서울, 네온사진 술집, 야광팔찌 술집, 잡지 콜라주 술집, 룰렛 술집, 소주 맛집, 맥주 맛집, K-POP 술집, 무국 해장, 속풀이 무국, 소개팅 장소 추천, 데이트 장소 서울, 회식 장소 마포, 생일 파티 술집, 기념일 레스토랑, 커플 술집 서울, 친구 모임 술집, 단체 회식 연남동, 저녁 약속 홍대',
    ogDescription: 'RAWISM — 연남동 한우 육회 · 뭉티기 · 소주 · 맥주. 야광팔찌 끼고 03~06 K-POP 들으며 한잔. 홍대입구역 3번출구 5분. 연트럴파크 인근. 서울 마포구.'
  },
  en: {
    lang: 'en',
    title: 'RAWISM | Hanwoo Beef Tartare Bar in Yeonnam-dong Seoul | Retro K-POP Bar near Hongdae',
    description: 'RAWISM - Premium Hanwoo beef tartare (yukhoe) & mungtige bar in Yeonnam-dong, Mapo-gu, Seoul. Korean soju, beer, retro 2000s K-POP BGM, neon glow bracelets. 5 min walk from Hongdae Station Exit 3 (Line 2, Gyeongui-Jungang, AREX). Near Yeonnam Park & Gyeongui Line Forest. Reservations via Naver.',
    keywords: 'RAWISM, Yeonnam-dong bar, Hongdae bar, Korean beef tartare, yukhoe Seoul, mungtige, Hanwoo bar Seoul, Korean soju bar, beer bar Seoul, Hongdae restaurant, Yeonnam-dong restaurant, Seoul nightlife, retro bar Seoul, K-POP bar, neon bar, Korean drinking culture, Mapo-gu bar, Korean raw beef, Seoul date spot, Hongdae date, group dinner Seoul, Donggyo-dong bar, Seongsan-dong restaurant, Mangwon-dong bar, Yeonhui-dong restaurant, Hongdae Station Exit 3, Line 2 bar Seoul, Gyeongui Line Forest bar, Yeonnam Park restaurant, Yeontral Park bar, Seoul bar reservation, Korean BBQ alternative Seoul, raw beef Seoul, beef tartare Hongdae, steak tartare Korean, late night bar Seoul, birthday bar Seoul, couple date Seoul, Mapo district nightlife, Seoul Western area bar',
    ogDescription: 'RAWISM — Hanwoo beef tartare · mungtige · soju · beer. Retro K-POP bar near Hongdae Station Exit 3, Seoul. Yeonnam-dong, Mapo-gu.'
  },
  ja: {
    lang: 'ja',
    title: 'RAWISM | 延南洞 韓牛ユッケ・ムンティギ・焼酎・ビール | 弘大駅3番出口徒歩5分 ソウル',
    description: 'RAWISM - 延南洞の韓牛ユッケ専門バー。ヒャンチョン洞伝統ムンティギ・青唐ユッケ・麻辣ユッケ・ユッケビビン麺。焼酎・ビール。弘大駅3番出口(2号線・京義中央線・空港鉄道)徒歩5分。延南公園・京義線森の道近く。ネイバー予約可能。',
    keywords: 'RAWISM, 延南洞バー, 弘大バー, 韓牛ユッケ, ムンティギ, 韓国焼酎, 韓国ビール, K-POPバー, レトロバー, ソウル居酒屋, ソウルナイトライフ, ネオンバー, 弘大レストラン, マポ区バー, ソウルデート, 東橋洞バー, 延南公園グルメ, 京義線森の道グルメ, 弘大駅3番出口, ソウル生肉, ソウルタルタル, 韓国デート, 韓国グルメ, 弘大ナイトライフ, ソウル西部バー, 麻浦区グルメ, 韓国レトロバー, ソウル記念日, ソウル誕生日バー, 弘大合コン',
    ogDescription: 'RAWISM — 延南洞の韓牛ユッケ・ムンティギ・焼酎・ビール。弘大駅3番出口5分。延南公園近く。ソウル麻浦区。'
  },
  zh: {
    lang: 'zh',
    title: 'RAWISM | 延南洞 韩牛肉脍·肉块·烧酒·啤酒 | 弘大站3号出口步行5分钟 首尔',
    description: 'RAWISM - 延南洞韩牛肉脍专业酒吧。乡村洞传统肉块·青阳肉脍·麻辣肉脍·肉脍拌面。烧酒·啤酒。弘大站3号出口(2号线·京义中央线·机场铁路)步行5分钟。延南公园·京义线林道附近。可Naver预约。',
    keywords: 'RAWISM, 延南洞酒吧, 弘大酒吧, 韩牛肉脍, 肉块, 韩国烧酒, 韩国啤酒, K-POP酒吧, 复古酒吧, 首尔居酒屋, 首尔夜生活, 霓虹酒吧, 弘大餐厅, 麻浦区酒吧, 首尔约会, 东桥洞酒吧, 延南公园美食, 京义线林道美食, 弘大站3号出口, 首尔生牛肉, 首尔鞑靼牛排, 韩国约会地点, 韩国美食推荐, 弘大夜生活, 首尔西部酒吧, 麻浦区美食, 韩国复古酒吧, 首尔纪念日, 首尔生日酒吧, 弘大联谊',
    ogDescription: 'RAWISM — 延南洞韩牛肉脍·肉块·烧酒·啤酒。弘大站3号出口5分钟。延南公园附近。首尔麻浦区。'
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
          <meta name="naver-site-verification" content="1833046dc15402f0f5fc247a91a950fd546a7362" />
          
          {/* Geographic & Local SEO Meta */}
          <meta name="geo.position" content="37.5595;126.9224" />
          <meta name="ICBM" content="37.5595, 126.9224" />
          <meta name="DC.title" content={seo.title} />
          <meta name="DC.creator" content="RAWISM" />
          <meta name="DC.subject" content="한우 육회, 뭉티기, 연남동 술집, 홍대 술집, 마포구 맛집, 동교동 술집" />
          <meta name="DC.language" content={seo.lang} />
          <meta name="DC.coverage" content="서울특별시 마포구 연남동 (동교동), 홍대입구역, 연트럴파크, 경의선숲길" />
          <meta name="DC.type" content="Restaurant" />
          
          {/* Extended Local/Geographic Meta */}
          <meta name="geo.region" content="KR-11-44" />
          <meta name="geo.placename" content="서울특별시 마포구 연남동, 동교로 262-4" />
          <meta name="neighborhood" content="연남동, 동교동, 성산동, 망원동, 연희동" />
          <meta name="city" content="서울특별시" />
          <meta name="zipcode" content="04030" />
          
          {/* Author & Publisher */}
          <meta name="author" content="RAWISM 연남동 한우 육회 술집" />
          <meta name="copyright" content="© 2026 RAWISM" />
          <meta name="application-name" content="RAWISM" />
          
          {/* Mobile App Meta */}
          <meta name="theme-color" content="#0a0a0a" />
          <meta name="msapplication-TileColor" content="#0a0a0a" />
          <meta name="msapplication-navbutton-color" content="#ff6ec7" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="RAWISM" />
          <meta name="format-detection" content="telephone=yes" />
          
          {/* Naver Blog/Cafe specific */}
          <meta property="naverapp:name" content="RAWISM - 연남동 한우 육회 술집" />
          <meta property="naverapp:url" content="https://rawism.kr" />
          
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
          <meta property="og:locale:alternate" content="en_US" />
          <meta property="og:locale:alternate" content="ja_JP" />
          <meta property="og:locale:alternate" content="zh_CN" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.ogDescription} />
          <meta name="twitter:image" content="https://rawism.kr/static/og-image.jpg" />
          
          {/* Place / Business OG Tags */}
          <meta property="place:location:latitude" content="37.5595" />
          <meta property="place:location:longitude" content="126.9224" />
          <meta property="business:contact_data:street_address" content="동교로 262-4" />
          <meta property="business:contact_data:locality" content="마포구" />
          <meta property="business:contact_data:region" content="서울특별시" />
          <meta property="business:contact_data:postal_code" content="04030" />
          <meta property="business:contact_data:country_name" content="대한민국" />
          <meta property="business:contact_data:phone_number" content="+82-70-5100-5534" />
          
          {/* Fonts - Pretendard + Google Fonts for retro feel */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
          <link rel="preload" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
          <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=East+Sea+Dokdo&display=swap" rel="stylesheet" />
          
          {/* Google Analytics 4 */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-GE5LFX0DRE"></script>
          <script dangerouslySetInnerHTML={{__html: `
            window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());gtag('config','G-GE5LFX0DRE');
          `}} />
          
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
          
          {/* JSON-LD: Restaurant + LocalBusiness */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Restaurant", "LocalBusiness", "FoodEstablishment"],
            "@id": "https://rawism.kr/#restaurant",
            "name": "RAWISM",
            "alternateName": ["로위즘", "로이즘", "RAWISM 연남동", "연남동 RAWISM"],
            "url": "https://rawism.kr",
            "telephone": "+82-70-5100-5534",
            "email": "rawism_theblack@instagram.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "동교로 262-4",
              "addressLocality": "마포구",
              "addressRegion": "서울특별시",
              "postalCode": "04030",
              "addressCountry": "KR"
            },
            "geo": { "@type": "GeoCoordinates", "latitude": 37.5595, "longitude": 126.9224 },
            "containedInPlace": [
              { "@type": "AdministrativeArea", "name": "연남동 (동교동)", "containedInPlace": { "@type": "AdministrativeArea", "name": "마포구", "containedInPlace": { "@type": "AdministrativeArea", "name": "서울특별시", "containedInPlace": { "@type": "Country", "name": "대한민국" } } } }
            ],
            "hasMap": "https://map.naver.com/v5/search/서울특별시 마포구 동교로 262-4",
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "18:00", "closes": "23:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "18:00", "closes": "23:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "18:00", "closes": "23:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "18:00", "closes": "23:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "18:00", "closes": "23:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "18:00", "closes": "23:00" }
            ],
            "specialOpeningHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "00:00", "closes": "00:00", "description": "매주 월요일 휴무" }
            ],
            "servesCuisine": ["한우 육회", "뭉티기", "한식 주점", "소주", "맥주", "육회비빔면", "육회비빔밥", "청양육회", "마라육회", "아보카도 카프레제", "해장 무국"],
            "priceRange": "₩₩₩",
            "currenciesAccepted": "KRW",
            "paymentAccepted": "현금, 신용카드, 카카오페이, 네이버페이, 삼성페이",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 37.5595, "longitude": 126.9224 },
              "geoRadius": "5000"
            },
            "image": [
              "https://rawism.kr/static/new/mungtige_jeontong.jpg",
              "https://rawism.kr/static/new/cheongyang_yukhoe.jpg",
              "https://rawism.kr/static/new/mara_yukhoe.jpg",
              "https://rawism.kr/static/new/bibimmyeon.jpg"
            ],
            "photo": [
              { "@type": "ImageObject", "url": "https://rawism.kr/static/new/mungtige_jeontong.jpg", "name": "향촌동 뭉티기 정통", "description": "당일 도축 한우 200g 뭉티기" },
              { "@type": "ImageObject", "url": "https://rawism.kr/static/new/cheongyang_yukhoe.jpg", "name": "청양 오일 육회", "description": "매콤한 고추기름 한우 육회" }
            ],
            "description": seo.description,
            "slogan": "야광팔찌 끼고 03~06 K-POP 들으며 한우 육회 한 점",
            "keywords": "연남동 술집, 연남동 육회, 연남동 뭉티기, 홍대 술집, 한우 육회, 소주, 맥주, 레트로 술집",
            "sameAs": [
              "https://www.instagram.com/rawism_theblack",
              "https://naver.me/5qLSfCNC",
              "https://map.naver.com/v5/search/RAWISM"
            ],
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
            "acceptsReservations": "True",
            "reservations": "https://naver.me/5qLSfCNC",
            "menu": "https://rawism.kr/#menu",
            "smokingAllowed": false,
            "publicAccess": true,
            "isAccessibleForFree": true,
            "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 5, "maxValue": 10 },
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "야광팔찌 체험", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "네온사진 포토존", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "방명록", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "03~06 K-POP BGM", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "잡지 콜라주 인테리어", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "룰렛 이벤트", "value": true }
            ],
            "additionalProperty": [
              { "@type": "PropertyValue", "name": "nearestStation", "value": "홍대입구역 (2호선·경의중앙선·공항철도) 3번출구 도보 5분" },
              { "@type": "PropertyValue", "name": "nearestSubwayLine", "value": "서울 지하철 2호선, 경의중앙선, 공항철도(AREX)" },
              { "@type": "PropertyValue", "name": "nearestBusStop", "value": "홍대입구역 정류장 (7016, 7711, 마포08, 마포15)" },
              { "@type": "PropertyValue", "name": "nearbyLandmark", "value": "연트럴파크 (Yeontral Park), 경의선숲길, 동교동 카페거리" },
              { "@type": "PropertyValue", "name": "neighborhood", "value": "연남동 (동교동/성산동/망원동/연희동 인접)" },
              { "@type": "PropertyValue", "name": "parkingInfo", "value": "전용주차장 없음. 인근 유료주차장 이용 또는 대중교통 추천" },
              { "@type": "PropertyValue", "name": "suitableFor", "value": "데이트, 소개팅, 회식, 생일파티, 친구모임, 2차, 기념일" }
            ],
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
          
          {/* JSON-LD: WebSite + SearchAction */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://rawism.kr/#website",
            "name": "RAWISM",
            "alternateName": "로위즘 연남동",
            "url": "https://rawism.kr",
            "description": "연남동 한우 육회 · 뭉티기 · 소주 · 맥주 전문 술집. 야광팔찌 · 03~06 K-POP · 네온사진 · 방명록. 홍대입구역 3번출구 도보 5분. 마포구 동교로 262-4.",
            "inLanguage": ["ko", "en", "ja", "zh"],
            "publisher": {
              "@type": "Organization",
              "name": "RAWISM",
              "url": "https://rawism.kr",
              "logo": { "@type": "ImageObject", "url": "https://rawism.kr/static/og-image.jpg" }
            }
          })}} />
          
          {/* JSON-LD: BreadcrumbList */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "RAWISM 홈", "item": "https://rawism.kr" },
              { "@type": "ListItem", "position": 2, "name": "연남동 한우 육회 메뉴", "item": "https://rawism.kr/#menu" },
              { "@type": "ListItem", "position": 3, "name": "연남동 술집 체험", "item": "https://rawism.kr/#experience" },
              { "@type": "ListItem", "position": 4, "name": "한우 육회 갤러리", "item": "https://rawism.kr/#gallery" },
              { "@type": "ListItem", "position": 5, "name": "연남동 술집 예약", "item": "https://rawism.kr/#reserve" },
              { "@type": "ListItem", "position": 6, "name": "찾아오는 길", "item": "https://rawism.kr/#location" }
            ]
          })}} />
          
          {/* JSON-LD: ItemList — 인기 메뉴 TOP 5 */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "RAWISM 인기 메뉴 TOP 5",
            "description": "연남동 RAWISM에서 가장 인기 있는 한우 육회 · 뭉티기 메뉴",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "향촌동 뭉티기", "url": "https://rawism.kr/#menu" },
              { "@type": "ListItem", "position": 2, "name": "청양 오일 육회", "url": "https://rawism.kr/#menu" },
              { "@type": "ListItem", "position": 3, "name": "마라깻잎 육회", "url": "https://rawism.kr/#menu" },
              { "@type": "ListItem", "position": 4, "name": "육회 들기름 비빔면", "url": "https://rawism.kr/#menu" },
              { "@type": "ListItem", "position": 5, "name": "속풀이 무국", "url": "https://rawism.kr/#menu" }
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
              {"@type":"Question","name":"RAWISM 룰렛 이벤트는 어떻게 참여하나요?","acceptedAnswer":{"@type":"Answer","text":"리뷰 작성 시 룰렛 한 번 돌리실 수 있습니다. 소주, 맥주, 안주 무료 당첨. 가끔 화요 17도 나옵니다!"}},
              {"@type":"Question","name":"RAWISM 주차 가능한가요?","acceptedAnswer":{"@type":"Answer","text":"전용 주차장은 없습니다. 인근 유료 주차장 이용 또는 홍대입구역(2호선/경의중앙선/공항철도) 3번출구에서 도보 5분입니다. 대중교통 이용을 추천드립니다."}},
              {"@type":"Question","name":"RAWISM 결제 방법은?","acceptedAnswer":{"@type":"Answer","text":"현금, 신용카드, 카카오페이, 네이버페이, 삼성페이 모두 가능합니다."}},
              {"@type":"Question","name":"RAWISM 단체 회식이나 생일 모임 가능한가요?","acceptedAnswer":{"@type":"Answer","text":"네, 12테이블 운영하며 단체 회식, 생일 모임, 데이트 모두 가능합니다. 네이버 예약 또는 인스타그램 DM(@rawism_theblack)으로 미리 예약해주세요."}},
              {"@type":"Question","name":"연남동에서 뭉티기 먹을 수 있는 곳이 어디인가요?","acceptedAnswer":{"@type":"Answer","text":"RAWISM이 연남동 유일의 향촌동 전통 뭉티기 전문점입니다. 당일 도축 한우 200g으로 정통/깍둑 선택 가능합니다. 서울 마포구 동교로 262-4에 위치합니다."}},
              {"@type":"Question","name":"홍대입구역에서 RAWISM 가는 방법은?","acceptedAnswer":{"@type":"Answer","text":"홍대입구역(2호선/경의중앙선/공항철도) 3번 출구로 나와 경의선숲길 방향으로 도보 5분이면 도착합니다. 연트럴파크 인근에 있습니다."}},
              {"@type":"Question","name":"연남동에서 소개팅 하기 좋은 술집 추천해주세요","acceptedAnswer":{"@type":"Answer","text":"RAWISM은 네온 조명과 2000년대 K-POP BGM이 흐르는 분위기 좋은 술집입니다. 야광팔찌, 잡지 콜라주 인테리어 등 자연스러운 대화 소재가 많아 소개팅, 첫 만남에 좋습니다. 12테이블 규모로 프라이빗한 분위기도 갖추고 있습니다."}},
              {"@type":"Question","name":"동교동, 성산동, 망원동에서 RAWISM 가까운가요?","acceptedAnswer":{"@type":"Answer","text":"네, RAWISM은 연남동(동교동) 동교로 262-4에 위치해 있어 동교동 도보 3분, 성산동 도보 10분, 망원동 도보 12분 거리입니다. 홍대입구역(2호선/경의중앙선/공항철도) 3번출구에서 도보 5분이며 연트럴파크, 경의선숲길 바로 인근입니다."}},
              {"@type":"Question","name":"연트럴파크(연남동공원) 근처 술집 추천해주세요","acceptedAnswer":{"@type":"Answer","text":"RAWISM은 연트럴파크(경의선숲길 연남동 구간) 바로 인근에 있는 한우 육회 전문 술집입니다. 연트럴파크 산책 후 들르기 좋으며, 경의선숲길 옆 골목에 위치합니다. 서울 마포구 동교로 262-4."}},
              {"@type":"Question","name":"2호선 타고 갈 수 있는 연남동 술집 있나요?","acceptedAnswer":{"@type":"Answer","text":"RAWISM은 2호선 홍대입구역 3번출구 도보 5분 거리에 있습니다. 경의중앙선, 공항철도(AREX)도 환승 가능해 인천공항에서도 직통으로 올 수 있습니다. 외국인 관광객도 접근이 매우 편리합니다."}},
              {"@type":"Question","name":"새벽까지 하는 연남동 술집 있나요?","acceptedAnswer":{"@type":"Answer","text":"RAWISM은 화~일 18:00~23:00 영업합니다(매주 월요일 휴무). 라스트오더는 22:30이며, 마무리 메뉴로 육회비빔면(₩13,000)이나 속풀이 무국(₩12,000)을 추천드립니다."}},
              {"@type":"Question","name":"마포구에서 회식 장소 추천해주세요","acceptedAnswer":{"@type":"Answer","text":"RAWISM은 12테이블 운영으로 소규모 회식에 적합합니다. 향촌동 뭉티기(₩45,000)를 메인으로 다양한 육회와 소주/맥주를 즐기실 수 있습니다. 네이버 예약 또는 인스타그램 DM으로 사전 예약하시면 편리합니다. 홍대입구역 3번출구 도보 5분."}}
            ]
          })}} />
          
          {/* JSON-LD: LocalBusiness — 인근 교통/장소 정보 (네이버 플레이스 호환) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "@id": "https://rawism.kr/#neighborhood",
            "name": "RAWISM 인근 지역",
            "description": "RAWISM 연남동 한우 육회 술집 인근 주요 장소 및 교통 정보",
            "geo": { "@type": "GeoCoordinates", "latitude": 37.5595, "longitude": 126.9224 },
            "containedInPlace": { "@type": "AdministrativeArea", "name": "마포구, 서울특별시" },
            "hasPart": [
              { "@type": "TrainStation", "name": "홍대입구역", "description": "서울 지하철 2호선, 경의중앙선, 공항철도(AREX) 환승역. RAWISM까지 3번출구 도보 5분.", "geo": { "@type": "GeoCoordinates", "latitude": 37.5574, "longitude": 126.9240 } },
              { "@type": "Park", "name": "연트럴파크 (경의선숲길 연남동)", "description": "경의선숲길 연남동 구간. RAWISM 인근 도보 2분.", "geo": { "@type": "GeoCoordinates", "latitude": 37.5612, "longitude": 126.9243 } },
              { "@type": "TouristAttraction", "name": "경의선숲길 (경의선 책거리)", "description": "홍대입구역~가좌역 구간 공원. 연남동 산책 명소.", "geo": { "@type": "GeoCoordinates", "latitude": 37.5600, "longitude": 126.9230 } },
              { "@type": "Place", "name": "동교동 카페거리", "description": "연남동·동교동 일대 카페 밀집 지역. RAWISM까지 도보 5분.", "geo": { "@type": "GeoCoordinates", "latitude": 37.5585, "longitude": 126.9255 } }
            ]
          })}} />
          
          {/* Analytics - Legacy placeholder removed, using GA4 above */}
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
