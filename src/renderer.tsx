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
    title: 'RAWISM | 연남동 한우 RAW BAR | 향촌동 뭉티기 · 03~06 K-POP · 도토리 술집',
    description: '2005년 미니홈피 감성 술집 RAWISM. 연남동 핫플 한우 RAW BAR. 1950년대 대구 향촌동 뭉티기를 연남동에서. 야광팔찌, 잡지 콜라주, 03~06 K-POP BGM, 도토리 사탕. 홍대입구역 5분.',
    keywords: '로위즘, RAWISM, 연남동 핫플, 연남동 한우 술집, 향촌동 뭉티기, 연남동 뭉티기, 싸이월드 감성, 싸이월드 감성 술집, 도토리 술집, 2000년대 술집, 03~06 케이팝 술집, SG워너비 술집, 미니홈피 술집, Y2K 감성 술집, 추억 술집 연남, 야광팔찌 술집, 잡지 콜라주 인테리어, 연남동 룰렛 이벤트, 연남동 노스탤지어, K-Nostalgia bar, Y2K nostalgia bar, Korea 2000s bar, 한우 육회 맛집, 홍대 술집, 연남동 술집, 연남동 맛집, 홍대입구역 맛집, 연트럴파크 맛집, 경의선숲길 맛집',
    ogDescription: 'RAWISM — 2005년 미니홈피 감성 한우 RAW BAR. 향촌동 뭉티기 · 야광팔찌 · 03~06 K-POP · 도토리. 연남동 핫플.'
  },
  en: {
    lang: 'en',
    title: 'RAWISM | Korean Retro Bar in Yeonnam-dong Seoul | 2000s Nostalgia K-POP Bar',
    description: 'RAWISM - A 2005 Cyworld-inspired retro Korean bar in Seoul. Premium Hanwoo beef tartare (mungtige) from Daegu Hyangchon-dong tradition. 03~06 K-POP BGM, neon glow bracelets, dotori candy, magazine collage walls. Near Hongdae Station.',
    keywords: 'RAWISM, Korean retro bar, Yeonnam-dong bar, Hongdae bar, K-Nostalgia bar, Y2K nostalgia bar, Korea 2000s bar, 2000s Korean bar, Cyworld bar, dotori bar, Hanwoo beef tartare, mungtige, Seoul nightlife, retro bar Seoul, K-POP bar, neon bar Seoul, minihompi bar',
    ogDescription: 'RAWISM — 2005 Cyworld-vibe retro Korean bar. Hanwoo beef tartare, neon glow bracelets, 03~06 K-POP, dotori. Yeonnam-dong hotspot.'
  },
  ja: {
    lang: 'ja',
    title: 'RAWISM | 延南洞レトロ韓牛バー | 2000年代K-POPノスタルジアバー',
    description: 'RAWISM - 2005年サイワールド風レトロ韓国バー。大邱ヒャンチョン洞伝統の韓牛ムンティギ。03~06 K-POP BGM、光る腕輪、ドトリキャンディ、雑誌コラージュ壁。弘大駅近く。',
    keywords: 'RAWISM, 韓国レトロバー, 延南洞バー, 弘大バー, K-POPバー, Y2Kバー, 2000年代韓国バー, サイワールドバー, ドトリ, 韓牛ユッケ, ムンティギ, ソウルナイトライフ, ネオンバー, ミニホムピ',
    ogDescription: 'RAWISM — 2005年サイワールド風レトロバー。韓牛タルタル、光る腕輪、03~06 K-POP、ドトリ。延南洞ホットスポット。'
  },
  zh: {
    lang: 'zh',
    title: 'RAWISM | 延南洞韩牛酒吧 | 2000年代K-POP怀旧酒吧',
    description: 'RAWISM - 2005年赛我网风格复古韩国酒吧。大邱乡村洞传统韩牛肉脍。03~06 K-POP背景音乐、荧光手环、橡子糖、杂志拼贴墙。弘大站附近。',
    keywords: 'RAWISM, 韩国复古酒吧, 延南洞酒吧, 弘大酒吧, K-POP酒吧, Y2K酒吧, 2000年代韩国酒吧, 赛我网酒吧, 橡子, 韩牛肉脍, 首尔夜生活, 霓虹酒吧, 迷你主页',
    ogDescription: 'RAWISM — 2005赛我网风复古酒吧。韩牛肉脍、荧光手环、03~06 K-POP、橡子。延南洞热门景点。'
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
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "18:00", "closes": "24:00" }
            ],
            "servesCuisine": ["한우 육회", "뭉티기", "한식 주점"],
            "priceRange": "₩₩₩",
            "image": "https://rawism.kr/static/new/mungtige_jeontong.jpg",
            "description": seo.description,
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127" },
            "acceptsReservations": "True",
            "menu": "https://rawism.kr/menu"
          })}} />
          
          {/* JSON-LD: WebSite */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "RAWISM",
            "url": "https://rawism.kr",
            "description": "2005년 미니홈피 감성 한우 RAW BAR. 도토리 BGM · 03~06 K-POP. 연남동 핫플."
          })}} />
          
          {/* JSON-LD: BreadcrumbList */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "RAWISM", "item": "https://rawism.kr" }
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
