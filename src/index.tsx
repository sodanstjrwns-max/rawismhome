import { Hono } from 'hono'
import { createRenderer } from './renderer'

const app = new Hono()

// www → non-www 301 redirect
app.use('*', async (c, next) => {
  const url = new URL(c.req.url)
  if (url.hostname === 'www.rawism.kr') {
    url.hostname = 'rawism.kr'
    return c.redirect(url.toString(), 301)
  }
  return next()
})

// Security headers middleware
app.use('*', async (c, next) => {
  await next()
  c.header('X-Frame-Options', 'SAMEORIGIN')
  c.header('X-Content-Type-Options', 'nosniff')
  c.header('X-XSS-Protection', '1; mode=block')
  c.header('Referrer-Policy', 'strict-origin-when-cross-origin')
  c.header('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self)')
  c.header('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com https://cdn.jsdelivr.net https://cdn.amplitude.com https://www.googletagmanager.com https://t1.kakaocdn.net https://developers.kakao.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; img-src 'self' data: https:; frame-src https://www.google.com https://map.naver.com; connect-src 'self' https://cdn.amplitude.com https://api2.amplitude.com https://*.amplitude.com https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com")
  c.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
})

type Language = 'ko' | 'en' | 'ja' | 'zh'

// ========== HELPER: Menu item with polaroid frame ==========
function MenuCard({ name, nameEn, price, img, desc, recommend, badge, rot }: {
  name: string; nameEn: string; price: string; img: string; desc: string; recommend: string; badge?: string; rot?: string;
}) {
  return (
    <div class="fade-up group">
      <div class="polaroid" style={`--rot:${rot || '-1deg'}`}>
        <div class="relative overflow-hidden aspect-square">
          <picture>
            <source srcset={`/static/new/${img}.webp`} type="image/webp" />
            <img src={`/static/new/${img}.jpg`} alt={`RAWISM ${name}`} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width="400" height="400" />
          </picture>
          {badge && (
            <span class="absolute top-2 left-2 text-[10px] px-2 py-1 bg-neon-pink text-white font-bold tracking-wider">{badge}</span>
          )}
        </div>
        <div class="pt-3 pb-1 px-1 text-center">
          <p class="font-pen text-lg text-gray-700">{name}</p>
        </div>
      </div>
      <div class="mt-4 text-center">
        <p class="text-xs text-white/40 tracking-wider uppercase mb-1">{nameEn}</p>
        <p class="neon-yellow text-xl font-bold">{price}</p>
        <p class="text-white/50 text-sm mt-2 leading-relaxed max-w-xs mx-auto">{desc}</p>
        <div class="postit inline-block mt-3 text-sm" style="--rot:1deg">
          ✦ {recommend}
        </div>
      </div>
    </div>
  )
}

function DrinkCard({ name, price, img }: { name: string; price: string; img: string }) {
  return (
    <div class="fade-up text-center group">
      <div class="w-24 h-24 mx-auto mb-2 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-neon-cyan/50 transition-colors">
        <picture>
          <source srcset={`/static/new/${img}.webp`} type="image/webp" />
          <img src={`/static/new/${img}.jpg`} alt={name} class="w-full h-full object-cover" loading="lazy" width="96" height="96" />
        </picture>
      </div>
      <p class="text-sm text-white/80">{name}</p>
      <p class="neon-yellow text-sm font-bold">{price}</p>
    </div>
  )
}

// ========== MAIN PAGE CONTENT ==========
function PageContent({ lang }: { lang: Language }) {
  return (
    <main>
      {/* ===== NAVIGATION ===== */}
      <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent">
        <div class="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" class="group flex items-center gap-2">
            <span class="neon-pink text-2xl font-black tracking-wider neon-flicker">RAWISM</span>
          </a>
          <div class="hidden lg:flex items-center gap-6">
            <a href="#welcome" class="text-xs text-white/60 hover:text-neon-pink transition-colors tracking-wider">소개</a>
            <a href="#now-playing" class="text-xs text-white/60 hover:text-neon-cyan transition-colors tracking-wider">♫ BGM</a>
            <a href="#menu" class="text-xs text-white/60 hover:text-neon-yellow transition-colors tracking-wider">메뉴</a>
            <a href="#experience" class="text-xs text-white/60 hover:text-neon-green transition-colors tracking-wider">경험</a>
            <a href="#gallery" class="text-xs text-white/60 hover:text-neon-purple transition-colors tracking-wider">갤러리</a>
            <a href="#location" class="text-xs text-white/60 hover:text-neon-cyan transition-colors tracking-wider">위치</a>
            <a href="https://naver.me/5qLSfCNC" target="_blank" class="text-xs neon-pink font-bold tracking-wider hover:opacity-80 transition-opacity">일촌 신청 ♥</a>
          </div>
          <div class="lg:hidden flex items-center gap-3">
            <button id="mobile-menu-btn" class="text-white/70 hover:text-neon-pink transition-colors p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M4 8h16M4 16h16"></path></svg>
            </button>
          </div>
        </div>
        <div id="mobile-menu" class="hidden lg:hidden bg-base-black/98 backdrop-blur-xl border-t border-neon-pink/20">
          <div class="px-6 py-6 flex flex-col gap-4">
            <a href="#welcome" class="text-sm text-white/60 hover:text-neon-pink py-2">★ 소개</a>
            <a href="#now-playing" class="text-sm text-white/60 hover:text-neon-cyan py-2">♫ BGM</a>
            <a href="#menu" class="text-sm text-white/60 hover:text-neon-yellow py-2">✦ 메뉴</a>
            <a href="#experience" class="text-sm text-white/60 hover:text-neon-green py-2">💡 경험</a>
            <a href="#gallery" class="text-sm text-white/60 hover:text-neon-purple py-2">📷 갤러리</a>
            <a href="#reserve" class="text-sm neon-pink font-bold py-2">♥ 일촌 신청</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO - Full Screen Neon ===== */}
      <section id="hero" class="relative h-screen flex items-center justify-center overflow-hidden crt" aria-label="RAWISM 연남동 한우 육회 술집 메인 히어로">
        <div class="absolute inset-0 bg-base-black"></div>
        
        {/* Star Particles */}
        <div class="absolute inset-0 pointer-events-none">
          <span class="star" style="top:10%;left:15%;--dur:2.5s;--delay:0s">✦</span>
          <span class="star" style="top:20%;left:80%;--dur:3s;--delay:0.5s">★</span>
          <span class="star" style="top:35%;left:25%;--dur:4s;--delay:1s">✧</span>
          <span class="star" style="top:45%;left:70%;--dur:2s;--delay:1.5s">✦</span>
          <span class="star" style="top:60%;left:10%;--dur:3.5s;--delay:0.3s">★</span>
          <span class="star" style="top:15%;left:55%;--dur:2.8s;--delay:0.8s">✧</span>
          <span class="star" style="top:75%;left:85%;--dur:3.2s;--delay:1.2s">✦</span>
          <span class="star" style="top:80%;left:40%;--dur:2.2s;--delay:0.6s">★</span>
          <span class="star" style="top:55%;left:50%;--dur:3.8s;--delay:1.8s">✧</span>
          <span class="star" style="top:30%;left:90%;--dur:2.6s;--delay:0.2s">★</span>
          <span class="star" style="top:90%;left:20%;--dur:3.1s;--delay:1.4s">✦</span>
          <span class="star" style="top:5%;left:45%;--dur:2.9s;--delay:0.9s">✧</span>
        </div>
        
        {/* Content */}
        <div class="relative z-10 text-center px-6">
          <p class="text-2xl mb-4">🌸</p>
          <h1 class="neon-pink text-6xl md:text-8xl lg:text-9xl font-black tracking-wider neon-flicker glitch mb-6">
            RAWISM
          </h1>
          <p class="sr-only">연남동 한우 육회 · 뭉티기 · 소주 · 맥주 전문 술집 RAWISM. 서울 마포구 동교로 262-4 (연남동, 동교동). 홍대입구역(2호선·경의중앙선·공항철도) 3번출구 도보 5분. 연트럴파크·경의선숲길 인근. 동교동·성산동·망원동·연희동 인접. 청양육회, 오이마요육회, 마라육회, 육회비빔면, 육회비빔밥, 속풀이무국, 향촌동뭉티기, 아보카프레제, 크림앤칩스. 참이슬, 처음처럼, 진로, 새로, 카스, 테라, 크러쉬. 네이버 예약 가능. 데이트, 소개팅, 2차, 회식, 생일, 기념일, 야외, 커플, 친구모임, 단체회식 추천. 버스 7016, 7711, 마포08, 마포15.</p>
          <p class="neon-cyan text-lg md:text-2xl font-handwrite tracking-wider mb-4">
            2005년 미니홈피 술집
          </p>
          <p class="text-white/40 text-xs md:text-sm tracking-wider mb-6">
            야광팔찌 밝히던 그 시절
          </p>
          <p class="text-white/50 text-sm md:text-base tracking-wider mb-2">
            향촌동 뭉티기 · 03~06 K-POP
          </p>
          <p class="text-white/30 text-xs tracking-widest mb-8">
            연남동 한우 RAW BAR
          </p>
          <p class="sr-only">
            연남동 술집 RAWISM은 서울 마포구 동교로 262-4에 위치한 한우 육회 전문 술집입니다.
            시그니처 메뉴 향촌동 뭉티기(45,000원)를 비롯해 청양 오일 육회, 오이마요 육회, 마라깻잎 육회 등
            다양한 한우 육회를 즐기실 수 있습니다. 소주(참이슬, 처음처럼, 진로, 새로 각 5,000원),
            맥주(카스 6,000원, 테라 6,000원, 크러쉬 7,000원)와 함께 즐기세요.
            육회비빔면(13,000원), 육회비빔밥(15,000원), 속풀이 무국(12,000원)으로 마무리.
            홍대입구역 3번출구 도보 5분. 연트럴파크 경의선숲길 인근. 화~일 18:00~23:00 영업. 월요일 휴무.
            네이버 예약 가능. 12테이블 운영. 데이트, 2차, 회식, 생일 모임 추천.
            야광팔찌, 네온사진, 잡지 콜라주, 03~06 K-POP BGM, 룰렛 이벤트, 방명록 체험 가능.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer" 
               class="neon-box-pink px-8 py-3 text-neon-pink font-bold text-sm tracking-wider hover:bg-neon-pink/10 transition-all">
              일촌 신청 ♥
            </a>
            <a href="#now-playing" 
               class="neon-box-cyan px-8 py-3 text-neon-cyan text-sm tracking-wider hover:bg-neon-cyan/10 transition-all">
              오늘 미니홈피 BGM 보기 ♫
            </a>
          </div>
          
          {/* Scroll hint */}
          <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
            <span class="text-[10px] tracking-[0.3em] text-white/50 uppercase">Scroll</span>
            <div class="w-px h-10 bg-gradient-to-b from-neon-pink/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ===== WELCOME / PHILOSOPHY ===== */}
      <section id="welcome" class="py-20 md:py-32 bg-base-black relative" aria-label="RAWISM 연남동 한우 육회 술집 소개">
        <div class="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <div class="fade-up">
            <p class="font-handwrite text-4xl md:text-5xl neon-pink mb-8">"다녀갑니다 ♥"</p>
            <div class="space-y-6 text-white/60 text-sm md:text-base leading-loose">
              <p>2005년 어느 술집에 떨어진 것 같은 곳.</p>
              <p>1950년대 대구 향촌동에서 시작된 <span class="highlighter">뭉티기</span>를<br />2026년 연남동에서 만난다.</p>
              <p>
                야광팔찌 끼고<br />
                <span class="highlighter-pink">SG워너비 - 죄와 벌</span> 들으면서<br />
                잡지에서 본 그 시절 광고 사이에서<br />
                소주 한 잔.
              </p>
              <p class="text-white/40 text-xs mt-8">
                당신의 청춘이 어디 갔는지 우리도 모릅니다.<br />
                여기서 한 번 찾아보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NOW PLAYING ===== */}
      <section id="now-playing" class="py-20 md:py-28 bg-card-black relative" aria-label="RAWISM 03~06 K-POP BGM 선곡 리스트">
        <div class="max-w-4xl mx-auto px-6 md:px-12">
          <div class="fade-up text-center mb-12">
            <p class="text-xs tracking-[0.4em] text-neon-cyan/60 uppercase mb-3">♫ Now Playing</p>
            <h2 class="font-handwrite text-3xl md:text-4xl neon-cyan">오늘 우리 가게에서 흐르는 곡</h2>
          </div>
          
          <div class="fade-up max-w-lg mx-auto">
            {/* Cassette Tape Widget */}
            <div class="neon-box-yellow bg-card-black p-6 md:p-8 text-center relative">
              {/* LP Disc */}
              <div class="w-28 h-28 mx-auto mb-6 relative">
                <div class="lp-spin w-28 h-28 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center" style="box-shadow: 0 0 0 3px #333, 0 0 0 6px #222, 0 0 20px rgba(255,251,0,0.2);">
                  <div class="w-10 h-10 rounded-full bg-neon-yellow/80 flex items-center justify-center">
                    <div class="w-3 h-3 rounded-full bg-base-black"></div>
                  </div>
                  {/* Grooves */}
                  <div class="absolute inset-4 rounded-full border border-gray-700/30"></div>
                  <div class="absolute inset-8 rounded-full border border-gray-700/20"></div>
                  <div class="absolute inset-6 rounded-full border border-gray-700/20"></div>
                </div>
              </div>
              
              <p class="neon-yellow text-lg font-bold mb-1">🎵 SG워너비 - 살다가</p>
              <p class="text-white/30 text-xs mb-6">지금 RAWISM에서 흐르고 있어요</p>
              
              <div class="border-t border-white/10 pt-6">
                <p class="text-xs text-neon-purple/80 tracking-wider mb-4 uppercase">이번 주 추천 트랙</p>
                <div class="space-y-2 text-sm text-white/50">
                  <p>♪ SG워너비 — 살다가</p>
                  <p>♪ 빅마마 — 체념</p>
                  <p>♪ 이효리 — Get Ya</p>
                  <p>♪ 동방신기 — HUG</p>
                  <p>♪ 원더걸스 — Tell Me</p>
                  <p>♪ 김종국 — 사랑스러워</p>
                </div>
              </div>
              
              <a href="https://www.instagram.com/rawism_theblack" target="_blank" rel="noopener noreferrer"
                 class="inline-block mt-6 neon-box-pink px-6 py-2 text-neon-pink text-xs tracking-wider hover:bg-neon-pink/10 transition-all">
                기억나는 그 노래 신청하기 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MENU ===== */}
      <section id="menu" class="py-20 md:py-28 bg-base-black" aria-label="연남동 한우 육회 뭉티기 소주 맥주 메뉴판">
        <div class="max-w-6xl mx-auto px-6 md:px-12">
          <div class="fade-up text-center mb-16">
            <p class="text-xs tracking-[0.4em] text-neon-yellow/60 uppercase mb-3">✦ Menu</p>
            <h2 class="font-handwrite text-3xl md:text-4xl neon-yellow">연남동 한우 육회 메뉴판</h2>
            <p class="text-white/30 text-xs mt-2">향촌동 뭉티기 · 육회 · 안주 · 소주 · 맥주 · 해장 무국</p>
          </div>
          
          {/* Signature: 향촌동 뭉티기 */}
          <div class="fade-up mb-20">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
              <div class="relative">
                <div class="polaroid" style="--rot:1deg">
                  <div class="relative overflow-hidden aspect-[4/3]">
                    <picture>
                      <source srcset="/static/new/mungtige_jeontong.webp" type="image/webp" />
                      <img src="/static/new/mungtige_jeontong.jpg" alt="RAWISM 향촌동 뭉티기 정통" class="w-full h-full object-cover" fetchpriority="high" width="800" height="600" />
                    </picture>
                    <span class="absolute top-3 left-3 text-xs px-3 py-1 bg-neon-pink text-white font-bold tracking-wider">★ SIGNATURE</span>
                  </div>
                  <p class="font-pen text-xl text-gray-700 text-center pt-3 pb-1">향촌동 뭉티기</p>
                </div>
              </div>
              <div class="text-center lg:text-left">
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">향촌동 뭉티기</h3>
                <p class="text-xs text-white/40 tracking-wider uppercase mb-3">Hyangchon-dong Mungtige</p>
                <p class="neon-yellow text-3xl font-bold mb-4">₩45,000</p>
                <p class="text-white/60 text-sm leading-relaxed mb-4">
                  당일 도축 한우 200g.<br />
                  정통/깍둑 선택 가능.<br />
                  <span class="highlighter">한 입 먹는 순간 — "어 뭐야 이거 진짜 부드러워"</span>
                </p>
                <p class="text-white/30 text-xs mb-4">양념 같은 거 없다. 고기가 다 한다.</p>
                <div class="postit inline-block text-sm" style="--rot:-2deg">
                  ✦ 온 김에 이것만큼은 꼭 시켜보자 하는 분
                </div>
              </div>
            </div>
          </div>
          
          {/* Food Grid */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            <MenuCard 
              name="청양 오일 육회" nameEn="Cheongyang Oil Yukhoe" price="₩22,000"
              img="cheongyang_yukhoe" desc="한우 우둔살 150g · 노른자 1개. 매콤한 고추기름 한 방에 정신 돌아옴."
              recommend="평소에 '매운 거 좋아' 하면서 별로 안 먹는 사람" rot="-2deg"
            />
            <MenuCard 
              name="오이마요 육회" nameEn="Oimayo Yukhoe" price="₩22,000"
              img="oimayo_yukhoe" desc="한우 우둔살 150g. 마요 + 오이의 깔끔한 조합."
              recommend="육회 처음인데 실패하기 싫은 사람" rot="1deg"
            />
            <MenuCard 
              name="마라깻잎 육회" nameEn="Mala Kkaennip Yukhoe" price="₩22,000"
              img="mara_yukhoe" desc="한우 우둔살 150g. 마라 + 깻잎. 이 조합은 진짜임."
              recommend="마라탕 일주일에 두 번 이상 먹는 사람" rot="-1deg"
            />
            <MenuCard 
              name="아보 카프레제" nameEn="Avo Caprese" price="₩19,000"
              img="caprese" desc="아보카도 + 모짜렐라 + 방울토마토. 안 시키면 아쉬운 안주."
              recommend="술보다 안주가 중요한 사람" rot="2deg"
            />
            <MenuCard 
              name="크림앤칩스" nameEn="Cream & Chips" price="₩8,000"
              img="cream_chips" desc="맥주 마시면서 손이 자꾸 가는 그 안주."
              recommend="일단 뭐라도 시켜야 하는 초반 분위기" rot="-2deg" badge="가성비"
            />
            <MenuCard 
              name="육회 들기름 비빔면" nameEn="Yukhoe Bibimmyeon" price="₩13,000"
              img="bibimmyeon" desc="마지막인 줄 알았는데 또 시키게 된다."
              recommend="새벽까지 갈 사람의 보험" rot="1deg" badge="마무리"
            />
            <MenuCard 
              name="육회 아보 비빔밥" nameEn="Yukhoe Avo Bibimbap" price="₩15,000"
              img="avo_bibimbap" desc="비빔면 대신 밥으로 마무리하고 싶을 때."
              recommend="면보다 밥이 좋은 한국인" rot="-1deg"
            />
            <MenuCard 
              name="속풀이 무국" nameEn="Muguk (Radish Soup)" price="₩12,000"
              img="muguk" desc="소주 3병 이상이면 필수. 국물이 진짜 시원하다."
              recommend="내일 출근인데 '한 잔만 더' 한 사람" rot="2deg" badge="해장"
            />
          </div>
          
          {/* Drinks */}
          <div class="fade-up">
            <div class="text-center mb-8">
              <p class="text-xs tracking-[0.4em] text-neon-purple/60 uppercase mb-2">🍺 Drinks</p>
              <h3 class="font-handwrite text-2xl neon-purple">소주 · 맥주 · 음료</h3>
            </div>
            <div class="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
              <DrinkCard name="참이슬 후레쉬" price="₩5,000" img="chamisul" />
              <DrinkCard name="처음처럼" price="₩5,000" img="cheoeum" />
              <DrinkCard name="진로" price="₩5,000" img="jinro" />
              <DrinkCard name="새로" price="₩5,000" img="saero" />
              <DrinkCard name="카스 후레쉬" price="₩6,000" img="cass" />
              <DrinkCard name="테라" price="₩6,000" img="terra" />
              <DrinkCard name="크러쉬" price="₩7,000" img="krush" />
              <DrinkCard name="코카콜라" price="₩4,000" img="cola" />
              <DrinkCard name="콜라 제로" price="₩4,000" img="cola_zero" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" class="py-20 md:py-28 bg-card-black" aria-label="연남동 레트로 술집 체험 야광팔찌 네온사진 방명록">
        <div class="max-w-5xl mx-auto px-6 md:px-12">
          <div class="fade-up text-center mb-16">
            <p class="text-xs tracking-[0.4em] text-neon-green/60 uppercase mb-3">Experience</p>
            <h2 class="font-handwrite text-3xl md:text-4xl neon-green">연남동 술집 체험</h2>
            <p class="text-white/30 text-sm mt-2">들어오면 한 번쯤 하게 되는 말</p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div class="fade-up neon-box-pink bg-card-black p-6 hover:bg-neon-pink/5 transition-all group">
              <span class="text-3xl block mb-4">💡</span>
              <h3 class="text-lg font-bold text-neon-pink mb-2">야광팔찌</h3>
              <p class="text-white/50 text-sm leading-relaxed">
                소주/맥주 시키면 직원이 야광팔찌 끼고 서빙해드림.<br />
                원하면 가져가셔도 OK.
              </p>
            </div>
            {/* Card 2 */}
            <div class="fade-up neon-box-cyan bg-card-black p-6 hover:bg-neon-cyan/5 transition-all group">
              <span class="text-3xl block mb-4">📰</span>
              <h3 class="text-lg font-bold text-neon-cyan mb-2">잡지 콜라주</h3>
              <p class="text-white/50 text-sm leading-relaxed">
                휘닉스, 보고싶다, 씨네21.<br />
                그 시절 잡지로 벽 도배.
              </p>
            </div>
            {/* Card 3 */}
            <div class="fade-up neon-box-yellow bg-card-black p-6 hover:bg-neon-yellow/5 transition-all group">
              <span class="text-3xl block mb-4">🎰</span>
              <h3 class="text-lg font-bold text-neon-yellow mb-2">룰렛 메뉴판</h3>
              <p class="text-white/50 text-sm leading-relaxed">
                리뷰 쓰시면 룰렛 한 번.<br />
                소주, 맥주, 안주 무료.<br />
                가끔 화요 17이 나옴.
              </p>
            </div>
            {/* Card 4 */}
            <div class="fade-up neon-box-purple bg-card-black p-6 hover:bg-neon-purple/5 transition-all group" style="box-shadow:0 0 7px #c084fc80,0 0 15px #c084fc40,inset 0 0 7px #c084fc20;border:1px solid #c084fc80">
              <span class="text-3xl block mb-4">🎵</span>
              <h3 class="text-lg font-bold text-neon-purple mb-2">03~06 K-POP</h3>
              <p class="text-white/50 text-sm leading-relaxed">
                SG워너비, 빅마마, 이효리, 동방신기, 원더걸스.<br />
                기억나는 곡은 신청 가능.
              </p>
            </div>
            {/* Card 5 */}
            <div class="fade-up neon-box-green bg-card-black p-6 hover:bg-neon-green/5 transition-all group" style="box-shadow:0 0 7px #00ff7f80,0 0 15px #00ff7f40,inset 0 0 7px #00ff7f20;border:1px solid #00ff7f80">
              <span class="text-3xl block mb-4">📸</span>
              <h3 class="text-lg font-bold text-neon-green mb-2">네온사진</h3>
              <p class="text-white/50 text-sm leading-relaxed">
                네온 조명 아래서 인생샷 가능.<br />
                미니홈피 프사 감성 그대로.
              </p>
            </div>
            {/* Card 6 */}
            <div class="fade-up bg-card-black p-6 hover:bg-white/5 transition-all group" style="box-shadow:0 0 7px #f9731680,0 0 15px #f9731640,inset 0 0 7px #f9731620;border:1px solid #f9731680">
              <span class="text-3xl block mb-4">✍️</span>
              <h3 class="text-lg font-bold mb-2" style="color:#f97316;text-shadow:0 0 7px #f97316,0 0 10px #f97316,0 0 21px #f97316">방명록</h3>
              <p class="text-white/50 text-sm leading-relaxed">
                계산할 때 한 줄 남겨주세요.<br />
                그 시절 미니홈피 방명록처럼.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY (Preview) ===== */}
      <section id="gallery" class="py-20 md:py-28 bg-base-black" aria-label="한우 육회 뭉티기 음식 사진 갤러리">
        <div class="max-w-6xl mx-auto px-6 md:px-12">
          <div class="fade-up text-center mb-12">
            <p class="text-xs tracking-[0.4em] text-neon-purple/60 uppercase mb-3">📷 Gallery</p>
            <h2 class="font-handwrite text-3xl md:text-4xl neon-purple">한우 육회 · 뭉티기 사진</h2>
          </div>
          
          <div class="fade-up grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { img: 'mungtige_jeontong', label: '향촌동 뭉티기 (정통)', rot: '-3deg' },
              { img: 'mungtige_kkakduk', label: '향촌동 뭉티기 (깍둑)', rot: '2deg' },
              { img: 'cheongyang_yukhoe', label: '청양 오일 육회', rot: '-1deg' },
              { img: 'oimayo_yukhoe', label: '오이마요 육회', rot: '3deg' },
              { img: 'mara_yukhoe', label: '마라깻잎 육회', rot: '-2deg' },
              { img: 'caprese', label: '아보 카프레제', rot: '1deg' },
              { img: 'bibimmyeon', label: '육회 비빔면', rot: '-3deg' },
              { img: 'avo_bibimbap', label: '육회 아보 비빔밥', rot: '2deg' },
            ].map((item, i) => (
              <div class="polaroid" style={`--rot:${item.rot}`}>
                <div class="overflow-hidden aspect-square">
                  <picture>
                    <source srcset={`/static/new/${item.img}.webp`} type="image/webp" />
                    <img src={`/static/new/${item.img}.jpg`} alt={`RAWISM ${item.label}`} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" width="300" height="300" />
                  </picture>
                </div>
                <p class="font-pen text-sm text-gray-600 text-center pt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESERVATION ===== */}
      <section id="reserve" class="py-20 md:py-28 bg-card-black relative overflow-hidden" aria-label="연남동 술집 RAWISM 네이버 예약">
        <div class="absolute inset-0 bg-gradient-to-r from-neon-yellow/5 via-transparent to-neon-yellow/5 pointer-events-none"></div>
        <div class="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
          <div class="fade-up">
            <p class="text-xs tracking-[0.4em] text-neon-yellow/60 uppercase mb-4">♥ Reservation</p>
            <h2 class="font-handwrite text-4xl md:text-5xl neon-yellow mb-6">연남동 술집 예약 ♥</h2>
            <div class="space-y-2 text-white/50 text-sm mb-10">
              <p>12테이블 운영</p>
              <p>화 - 일 18:00 ~ 23:00</p>
              <p>월요일 휴무</p>
            </div>
            
            <div class="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer"
                 class="group p-8 neon-box-yellow bg-card-black hover:bg-neon-yellow/10 transition-all">
                <svg class="w-8 h-8 mx-auto mb-4 text-neon-yellow" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
                <p class="text-sm font-bold text-neon-yellow">네이버 예약</p>
                <p class="text-xs text-white/30 mt-1">간편 예약</p>
              </a>
              <a href="https://www.instagram.com/rawism_theblack" target="_blank" rel="noopener noreferrer"
                 class="group p-8 neon-box-pink bg-card-black hover:bg-neon-pink/10 transition-all">
                <svg class="w-8 h-8 mx-auto mb-4 text-neon-pink" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <p class="text-sm font-bold text-neon-pink">Instagram DM</p>
                <p class="text-xs text-white/30 mt-1">외국인 손님</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION ===== */}
      <section id="location" class="py-20 md:py-28 bg-base-black" aria-label="연남동 RAWISM 위치 홍대입구역 3번출구 도보 5분 서울 마포구 동교로 262-4" itemscope itemtype="https://schema.org/LocalBusiness">
        <meta itemprop="name" content="RAWISM 연남동 한우 육회 술집" />
        <meta itemprop="telephone" content="070-5100-5534" />
        <meta itemprop="priceRange" content="₩₩₩" />
        <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
          <meta itemprop="streetAddress" content="동교로 262-4" />
          <meta itemprop="addressLocality" content="마포구" />
          <meta itemprop="addressRegion" content="서울특별시" />
          <meta itemprop="postalCode" content="04030" />
          <meta itemprop="addressCountry" content="KR" />
        </div>
        <div itemprop="geo" itemscope itemtype="https://schema.org/GeoCoordinates">
          <meta itemprop="latitude" content="37.5595" />
          <meta itemprop="longitude" content="126.9224" />
        </div>
        <div class="max-w-6xl mx-auto px-6 md:px-12">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div class="fade-up">
              <p class="text-xs tracking-[0.4em] text-neon-cyan/60 uppercase mb-4">Location</p>
              <h2 class="font-handwrite text-3xl md:text-4xl neon-cyan mb-10">연남동 RAWISM 찾아오는 길</h2>
              
              <div class="space-y-8">
                <div class="border-l-2 border-neon-cyan/30 pl-5">
                  <p class="text-[10px] tracking-wider text-neon-cyan/50 uppercase mb-1">Address</p>
                  <p class="text-white/80">서울 마포구 동교로 262-4</p>
                  <p class="text-white/40 text-sm mt-1">연남동 (연트럴파크 인근)</p>
                  <p class="text-white/25 text-xs mt-1">우편번호 04030</p>
                </div>
                <div class="border-l-2 border-neon-cyan/30 pl-5">
                  <p class="text-[10px] tracking-wider text-neon-cyan/50 uppercase mb-1">🚇 교통편</p>
                  <p class="text-white/80">홍대입구역 3번 출구 도보 5분</p>
                  <p class="text-white/50 text-sm mt-1">지하철 2호선 · 경의중앙선 · 공항철도(AREX)</p>
                  <p class="text-white/30 text-xs mt-2">버스: 홍대입구역 정류장 (7016, 7711, 마포08, 마포15)</p>
                </div>
                <div class="border-l-2 border-neon-cyan/30 pl-5">
                  <p class="text-[10px] tracking-wider text-neon-cyan/50 uppercase mb-1">📍 인근 랜드마크</p>
                  <p class="text-white/50 text-sm leading-relaxed">연트럴파크(경의선숲길) 도보 2분<br />동교동 카페거리 도보 5분<br />성산동 · 망원동 · 연희동 인접</p>
                </div>
                <div class="border-l-2 border-neon-cyan/30 pl-5">
                  <p class="text-[10px] tracking-wider text-neon-cyan/50 uppercase mb-1">Hours</p>
                  <p class="text-white/80">화 ~ 일 18:00 - 23:00</p>
                  <p class="text-neon-pink/60 text-xs mt-1">매주 월요일 휴무</p>
                </div>
                <div class="border-l-2 border-neon-cyan/30 pl-5">
                  <p class="text-[10px] tracking-wider text-neon-cyan/50 uppercase mb-1">Contact</p>
                  <a href="tel:070-5100-5534" class="text-white/80 hover:text-neon-pink transition-colors inline-flex items-center gap-2">
                    📞 070-5100-5534
                  </a>
                </div>
              </div>
            </div>
            
            <div class="fade-up">
              <div class="aspect-[4/3] bg-card-black overflow-hidden neon-box-cyan">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8!2d126.9224!3d37.5595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMzJzM0LjIiTiAxMjbCsDU1JzIwLjYiRQ!5e0!3m2!1sen!2skr!4v1"
                  width="100%" height="100%"
                  style="border:0; filter: saturate(0.3) brightness(0.7) contrast(1.2);"
                  allowfullscreen loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <div class="mt-4 flex gap-3">
                <a href="https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C%20262-4" target="_blank" rel="noopener noreferrer"
                   class="flex-1 py-3 neon-box-cyan text-center text-neon-cyan text-xs hover:bg-neon-cyan/10 transition-all">
                  네이버 지도
                </a>
                <a href="https://map.kakao.com/link/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C%20262-4" target="_blank" rel="noopener noreferrer"
                   class="flex-1 py-3 neon-box-yellow text-center text-neon-yellow text-xs hover:bg-neon-yellow/10 transition-all">
                  카카오맵
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER - 방명록 ===== */}
      <footer class="py-16 bg-card-black border-t border-white/5" role="contentinfo" aria-label="RAWISM 연남동 한우 육회 술집 푸터">
        <div class="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p class="font-handwrite text-2xl neon-pink mb-6">📖 RAWISM 방명록</p>
          
          <div class="space-y-3 text-white/30 text-sm font-handwrite mb-8">
            <p>"다녀갑니다 ♥"</p>
            <p>"다음에 또 올게요~"</p>
            <p>"오늘도 BGM 최고였어요"</p>
            <p>"야광팔찌 진짜 대박 ㅋㅋ"</p>
          </div>
          
          <div class="flex justify-center gap-6 mb-8">
            <a href="https://www.instagram.com/rawism_theblack" target="_blank" rel="noopener noreferrer"
               class="text-white/30 hover:text-neon-pink transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer"
               class="text-white/30 hover:text-neon-yellow transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/></svg>
            </a>
          </div>
          
          <div class="border-t border-white/5 pt-6">
            <p class="text-white/15 text-[10px] tracking-wider">
              © 2026 RAWISM · 연남동 한우 육회 · 뭉티기 · 소주 · 맥주
            </p>
            <p class="text-white/10 text-[9px] mt-2">
              서울 마포구 동교로 262-4 · 홍대입구역 3번출구 도보 5분 · 연트럴파크 · 경의선숲길
            </p>
            <p class="sr-only">
              연남동 맛집 연남동 핫플 연남동 데이트 연남동 2차 연남동 회식 연남동 생일 연남동 소개팅 연남동 기념일 연남동 새벽 술집
              홍대 술집 홍대 맛집 홍대 안주 홍대 데이트 홍대 2차 홍대 핫플 홍대 생일 술집 홍대 소개팅 홍대 회식
              홍대입구역 술집 홍대입구역 맛집 홍대입구역 3번출구 맛집 2호선 술집 경의중앙선 술집 공항철도 술집
              동교동 술집 동교동 맛집 동교동 핫플 동교동 육회 동교동 카페거리
              성산동 술집 성산동 맛집 망원동 술집 망원동 맛집 연희동 술집 연희동 맛집
              마포구 술집 마포구 맛집 마포구 육회 마포구 데이트 마포구 회식
              서울 육회 맛집 서울 한우 술집 서울 뭉티기 서울 레트로 술집 서울 데이트 술집
              한우 육회 뭉티기 소주 맥주 육회비빔면 육회비빔밥 육사시미 한우 타르타르 생고기 안주
              연트럴파크 맛집 연트럴파크 술집 연트럴파크 데이트 경의선숲길 맛집 경의선숲길 술집 경의선숲길 데이트
              레트로 술집 서울 Y2K 감성 술집 싸이월드 감성 술집
              참이슬 처음처럼 진로 새로 카스 테라 크러쉬
              야광팔찌 네온사진 잡지 콜라주 룰렛 K-POP 방명록
              소개팅 장소 추천 서울 데이트 장소 서울 회식 장소 마포 생일 파티 술집 커플 술집 서울 친구 모임 술집 단체 회식 연남동
            </p>
          </div>
        </div>
      </footer>

      {/* ===== MOBILE FLOATING CTA ===== */}
      <div class="fixed bottom-0 left-0 right-0 lg:hidden bg-base-black/98 backdrop-blur-xl border-t border-neon-pink/20 p-3 z-50">
        <div class="flex gap-2">
          <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer"
             class="flex-1 py-3 bg-neon-yellow/90 text-base-black text-center text-xs font-bold tracking-wider flex items-center justify-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/></svg>
            네이버 예약
          </a>
          <a href="https://www.instagram.com/rawism_theblack" target="_blank" rel="noopener noreferrer"
             class="flex-1 py-3 bg-neon-pink/90 text-white text-center text-xs font-bold tracking-wider flex items-center justify-center gap-2">
            📷 Instagram
          </a>
        </div>
      </div>
      
      {/* Desktop Floating CTA */}
      <div class="hidden lg:flex fixed bottom-8 right-8 flex-col gap-3 z-50">
        <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer"
           class="w-14 h-14 neon-box-yellow bg-base-black rounded-full flex items-center justify-center hover:bg-neon-yellow/20 transition-all hover:scale-110"
           title="네이버 예약">
          <svg class="w-6 h-6 text-neon-yellow" viewBox="0 0 24 24" fill="currentColor"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/></svg>
        </a>
        <a href="https://www.instagram.com/rawism_theblack" target="_blank" rel="noopener noreferrer"
           class="w-14 h-14 neon-box-pink bg-base-black rounded-full flex items-center justify-center hover:bg-neon-pink/20 transition-all hover:scale-110"
           title="Instagram DM">
          <svg class="w-6 h-6 text-neon-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
      </div>
    </main>
  )
}

// ===========================
// ROUTES
// ===========================

// Sitemap — SEO Super Enhanced with all images
app.get('/sitemap.xml', (c) => {
  const today = new Date().toISOString().split('T')[0]
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://rawism.kr/</loc>
    <xhtml:link rel="alternate" hreflang="ko" href="https://rawism.kr/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rawism.kr/en" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://rawism.kr/ja" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://rawism.kr/zh" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://rawism.kr/" />
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://rawism.kr/static/new/mungtige_jeontong.jpg</image:loc>
      <image:title>RAWISM 향촌동 뭉티기 정통 - 연남동 한우 육회 전문 술집 홍대입구역 5분</image:title>
      <image:caption>당일 도축 한우 200g. 1950년대 대구 향촌동에서 시작된 전통 뭉티기를 연남동에서. 서울 마포구 동교로 262-4.</image:caption>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/mungtige_kkakduk.jpg</image:loc>
      <image:title>RAWISM 향촌동 뭉티기 깍둑 - 연남동 한우 육회 맛집 마포구</image:title>
      <image:caption>깍둑 스타일 뭉티기. 한 입 크기로 잘라 먹는 프리미엄 한우. 연남동 동교동 육회 맛집.</image:caption>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/cheongyang_yukhoe.jpg</image:loc>
      <image:title>RAWISM 청양 오일 육회 - 연남동 매콤한 한우 육회 홍대</image:title>
      <image:caption>한우 우둔살 150g. 매콤한 고추기름의 청양 오일 육회. 연남동 홍대 맛집.</image:caption>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/oimayo_yukhoe.jpg</image:loc>
      <image:title>RAWISM 오이마요 육회 - 연남동 깔끔한 한우 육회 마포구</image:title>
      <image:caption>한우 우둔살 150g. 마요네즈와 오이의 깔끔한 조합. 연남동 동교동 한우 맛집.</image:caption>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/mara_yukhoe.jpg</image:loc>
      <image:title>RAWISM 마라깻잎 육회 - 연남동 마라 한우 육회 홍대입구역</image:title>
      <image:caption>한우 우둔살 150g. 마라와 깻잎의 독특한 조합. 홍대입구역 3번출구 5분.</image:caption>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/caprese.jpg</image:loc>
      <image:title>RAWISM 아보 카프레제 - 연남동 아보카도 모짜렐라 안주</image:title>
      <image:caption>아보카도 + 모짜렐라 + 방울토마토. 연남동 술집 안주 추천. 연트럴파크 인근.</image:caption>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/cream_chips.jpg</image:loc>
      <image:title>RAWISM 크림앤칩스 - 연남동 맥주 안주 가성비</image:title>
      <image:caption>맥주와 함께하는 가성비 안주 크림앤칩스. 연남동 홍대 술집.</image:caption>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/bibimmyeon.jpg</image:loc>
      <image:title>RAWISM 육회 들기름 비빔면 - 연남동 육회비빔면 마포구</image:title>
      <image:caption>육회비빔면. 마무리 메뉴로 추천. 들기름 향이 일품. 연남동 경의선숲길 인근.</image:caption>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/avo_bibimbap.jpg</image:loc>
      <image:title>RAWISM 육회 아보 비빔밥 - 연남동 육회비빔밥 연트럴파크 인근</image:title>
      <image:caption>육회비빔밥. 아보카도와 한우 육회의 건강한 마무리. 서울 마포구 동교로 262-4.</image:caption>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/muguk.jpg</image:loc>
      <image:title>RAWISM 속풀이 무국 - 연남동 해장 무국 홍대 술집</image:title>
      <image:caption>시원한 무국. 소주 후 해장용 필수 메뉴. 연남동 홍대입구역 술집.</image:caption>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/chamisul.jpg</image:loc>
      <image:title>참이슬 후레쉬 소주 - RAWISM 연남동 술집 주류</image:title>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/cheoeum.jpg</image:loc>
      <image:title>처음처럼 소주 - RAWISM 연남동 술집 주류</image:title>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/jinro.jpg</image:loc>
      <image:title>진로 소주 - RAWISM 연남동 술집 주류</image:title>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/saero.jpg</image:loc>
      <image:title>새로 소주 - RAWISM 연남동 술집 주류</image:title>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/cass.jpg</image:loc>
      <image:title>카스 후레쉬 맥주 - RAWISM 연남동 술집 주류</image:title>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/terra.jpg</image:loc>
      <image:title>테라 맥주 - RAWISM 연남동 술집 주류</image:title>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/new/krush.jpg</image:loc>
      <image:title>크러쉬 맥주 - RAWISM 연남동 술집 주류</image:title>
      <image:geo_location>Seoul, Mapo-gu, Yeonnam-dong, South Korea</image:geo_location>
    </image:image>
  </url>
  <url>
    <loc>https://rawism.kr/en</loc>
    <xhtml:link rel="alternate" hreflang="ko" href="https://rawism.kr/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rawism.kr/en" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://rawism.kr/ja" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://rawism.kr/zh" />
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://rawism.kr/ja</loc>
    <xhtml:link rel="alternate" hreflang="ko" href="https://rawism.kr/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rawism.kr/en" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://rawism.kr/ja" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://rawism.kr/zh" />
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://rawism.kr/zh</loc>
    <xhtml:link rel="alternate" hreflang="ko" href="https://rawism.kr/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rawism.kr/en" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://rawism.kr/ja" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://rawism.kr/zh" />
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`
  return c.text(sitemap, 200, { 'Content-Type': 'application/xml; charset=utf-8' })
})

// Robots.txt — SEO Super Enhanced
app.get('/robots.txt', (c) => {
  const robots = `# =============================================
# RAWISM — 연남동 한우 육회 · 뭉티기 전문 술집
# https://rawism.kr
# Last updated: 2026-05-23
# =============================================

# Default: Allow all legitimate crawlers
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_worker.js
Disallow: /_routes.json
Disallow: /cdn-cgi/
Disallow: /naver*.html

# Google
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Googlebot-Image
Allow: /static/
Allow: /static/new/

User-agent: Googlebot-Video
Allow: /

# Google Ads / AdsBot
User-agent: AdsBot-Google
Allow: /

User-agent: Mediapartners-Google
Allow: /

# Naver
User-agent: Yeti
Allow: /
Crawl-delay: 1

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Daum / Kakao
User-agent: Daum
Allow: /
Crawl-delay: 1

# DuckDuckGo
User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

# Apple (Siri, Spotlight)
User-agent: Applebot
Allow: /

# Twitter / X
User-agent: Twitterbot
Allow: /

# Facebook
User-agent: facebookexternalhit
Allow: /

# LinkedIn
User-agent: LinkedInBot
Allow: /

# Telegram
User-agent: TelegramBot
Allow: /

# KakaoTalk Link Preview
User-agent: kakaotalk-scrap
Allow: /

# Block AI training crawlers
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: cohere-ai
Disallow: /

# Block bad bots / scrapers
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Host
Host: https://rawism.kr

# Sitemaps
Sitemap: https://rawism.kr/sitemap.xml`
  return c.text(robots, 200, { 'Content-Type': 'text/plain' })
})

// Naver verification (old)
app.get('/naver7904d9ff69f646703310c041cef72888.html', (c) => {
  return c.text('2d5260929ab847d76c151f135aa20621f6f746a0', 200, { 'Content-Type': 'text/html' })
})

// Naver verification (Patient Funnel)
app.get('/naveree5a268dce644afaa8ac3fe6a1b0211e.html', (c) => {
  return c.text('naveree5a268dce644afaa8ac3fe6a1b0211e', 200, { 'Content-Type': 'text/html' })
})

// Naver verification (rawism.kr)
app.get('/naver60d859d26417328532a5b5cda0c51cda.html', (c) => {
  return c.text('naver60d859d26417328532a5b5cda0c51cda', 200, { 'Content-Type': 'text/html' })
})

// ===== MAIN ROUTES =====
app.use('/', createRenderer('ko'))
app.get('/', (c) => c.render(<PageContent lang="ko" />))

app.use('/en', createRenderer('en'))
app.get('/en', (c) => c.render(<PageContent lang="en" />))

app.use('/ja', createRenderer('ja'))
app.get('/ja', (c) => c.render(<PageContent lang="ja" />))

app.use('/zh', createRenderer('zh'))
app.get('/zh', (c) => c.render(<PageContent lang="zh" />))

// ===== /menu - redirect to main page #menu =====
app.get('/menu', (c) => c.redirect('/#menu', 301))
app.get('/en/menu', (c) => c.redirect('/en#menu', 301))
app.get('/ja/menu', (c) => c.redirect('/ja#menu', 301))
app.get('/zh/menu', (c) => c.redirect('/zh#menu', 301))

// ===== /reservation =====
app.get('/reservation', (c) => c.redirect('/#reserve', 301))

// ===== OLD PAGES → 301 Redirects =====
// /wine, /quiz → main page (deleted pages)
app.get('/wine', (c) => c.redirect('/', 301))
app.get('/wine/*', (c) => c.redirect('/', 301))
app.get('/quiz', (c) => c.redirect('/', 301))
app.get('/quiz/*', (c) => c.redirect('/', 301))
app.get('/blog', (c) => c.redirect('/', 301))
app.get('/about', (c) => c.redirect('/', 301))
app.get('/gallery', (c) => c.redirect('/#gallery', 301))

// Multilingual old pages
app.get('/en/wine', (c) => c.redirect('/en', 301))
app.get('/ja/wine', (c) => c.redirect('/ja', 301))
app.get('/zh/wine', (c) => c.redirect('/zh', 301))
app.get('/en/about', (c) => c.redirect('/en', 301))
app.get('/ja/about', (c) => c.redirect('/ja', 301))
app.get('/zh/about', (c) => c.redirect('/zh', 301))
app.get('/en/gallery', (c) => c.redirect('/en', 301))
app.get('/ja/gallery', (c) => c.redirect('/ja', 301))
app.get('/zh/gallery', (c) => c.redirect('/zh', 301))
app.get('/en/quiz', (c) => c.redirect('/en', 301))
app.get('/ja/quiz', (c) => c.redirect('/ja', 301))
app.get('/zh/quiz', (c) => c.redirect('/zh', 301))
app.get('/en/blog', (c) => c.redirect('/en', 301))
app.get('/ja/blog', (c) => c.redirect('/ja', 301))
app.get('/zh/blog', (c) => c.redirect('/zh', 301))
app.get('/en/reservation', (c) => c.redirect('/en', 301))
app.get('/ja/reservation', (c) => c.redirect('/ja', 301))
app.get('/zh/reservation', (c) => c.redirect('/zh', 301))

// ===== 404 Page - Neon Style =====
app.notFound((c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>페이지를 찾을 수 없습니다 | RAWISM</title>
  <meta name="robots" content="noindex, nofollow">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap" rel="stylesheet">
  <style>
    .neon-pink { color: #ff6ec7; text-shadow: 0 0 7px #ff6ec7, 0 0 10px #ff6ec7, 0 0 21px #ff6ec7; }
  </style>
</head>
<body class="bg-[#0a0a0a] min-h-screen flex items-center justify-center text-white">
  <div class="text-center px-6 max-w-lg">
    <p class="text-[120px] md:text-[180px] neon-pink leading-none select-none font-black" style="font-family:'East Sea Dokdo',cursive">404</p>
    <h1 class="text-2xl md:text-3xl -mt-4 mb-4" style="font-family:'East Sea Dokdo',cursive">여기는 아무것도 없어요 ★</h1>
    <p class="text-sm text-gray-500 mb-8">이 페이지는 1999년에 사라진 것 같습니다.</p>
    <a href="/" class="inline-block text-sm px-8 py-3 border border-[#ff6ec780] text-[#ff6ec7] hover:bg-[#ff6ec710] transition-all">
      메인으로 돌아가기 →
    </a>
    <p class="text-[10px] text-gray-700 mt-12">© 2026 RAWISM · 연남동 · 한우 RAW BAR</p>
  </div>
</body>
</html>`, 404)
})

export default app
