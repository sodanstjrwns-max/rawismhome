import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Main Page - ROWISM The Black
app.get('/', (c) => {
  return c.render(
    <div class="overflow-x-hidden">
      {/* Navigation */}
      <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" class="font-playfair text-2xl tracking-[0.3em] text-off-white hover:text-champagne transition-colors">
            ROWISM
          </a>
          <div class="hidden md:flex items-center gap-8">
            <a href="#about" class="text-sm tracking-wider hover:text-champagne transition-colors">ABOUT</a>
            <a href="#menu" class="text-sm tracking-wider hover:text-champagne transition-colors">MENU</a>
            <a href="#experience" class="text-sm tracking-wider hover:text-champagne transition-colors">EXPERIENCE</a>
            <a href="#location" class="text-sm tracking-wider hover:text-champagne transition-colors">LOCATION</a>
            <a href="#faq" class="text-sm tracking-wider hover:text-champagne transition-colors">FAQ</a>
            <a href="#reserve" class="px-6 py-2 border border-champagne text-champagne hover:bg-champagne hover:text-deep-black transition-all text-sm tracking-wider">
              예약하기
            </a>
          </div>
          <button id="mobile-menu-btn" class="md:hidden text-off-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" class="hidden md:hidden bg-deep-black/95 backdrop-blur-lg border-t border-white/10">
          <div class="px-6 py-4 flex flex-col gap-4">
            <a href="#about" class="text-sm tracking-wider hover:text-champagne transition-colors py-2">ABOUT</a>
            <a href="#menu" class="text-sm tracking-wider hover:text-champagne transition-colors py-2">MENU</a>
            <a href="#experience" class="text-sm tracking-wider hover:text-champagne transition-colors py-2">EXPERIENCE</a>
            <a href="#location" class="text-sm tracking-wider hover:text-champagne transition-colors py-2">LOCATION</a>
            <a href="#faq" class="text-sm tracking-wider hover:text-champagne transition-colors py-2">FAQ</a>
            <a href="#reserve" class="px-6 py-3 border border-champagne text-champagne text-center hover:bg-champagne hover:text-deep-black transition-all text-sm tracking-wider">
              예약하기
            </a>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div class="absolute inset-0 bg-gradient-to-b from-deep-black via-soft-black to-deep-black"></div>
        
        {/* Animated Particles (bubbles) */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="bubble bubble-1"></div>
          <div class="bubble bubble-2"></div>
          <div class="bubble bubble-3"></div>
          <div class="bubble bubble-4"></div>
          <div class="bubble bubble-5"></div>
        </div>
        
        {/* Content */}
        <div class="relative z-10 text-center px-6 animate-fade-in">
          <p class="text-xs md:text-sm tracking-[0.5em] text-champagne/80 mb-6 uppercase">
            Yeonnam-dong Premium Wine Bar
          </p>
          <h1 class="font-playfair text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] mb-4">
            ROWISM
          </h1>
          <p class="font-playfair text-lg md:text-xl tracking-[0.3em] text-off-white/70 mb-2">
            • THE BLACK •
          </p>
          <p class="font-noto-serif text-lg md:text-2xl text-off-white/90 mt-8 mb-12">
            연남동에서 가장 특별한 밤
          </p>
          <a href="#reserve" class="inline-block px-10 py-4 bg-deep-wine hover:bg-deep-wine/80 text-white tracking-widest text-sm transition-all hover:scale-105 transform">
            예약하기
          </a>
          
          {/* Scroll Indicator */}
          <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg class="w-6 h-10 text-champagne/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2: Problem (공감) */}
      <section id="problem" class="py-24 md:py-32 bg-soft-black">
        <div class="max-w-5xl mx-auto px-6">
          <h2 class="font-noto-serif text-2xl md:text-3xl text-center mb-16 animate-on-scroll">
            오늘은 정말 <span class="text-champagne">특별한 밤</span>으로 만들고 싶은데...
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              { icon: "🎂", text: "기념일인데 평범한 레스토랑은 싫어" },
              { icon: "✨", text: "분위기도 좋고, 음식도 제대로인 곳 없을까?" },
              { icon: "📸", text: "인스타 감성인데 맛은 별로인 곳 말고..." },
              { icon: "🍷", text: "와인 마시면서 진짜 맛있는 안주를 먹고 싶어" },
              { icon: "💑", text: "홍대/연남동에서 조용히 둘만의 시간 보낼 곳?" },
            ].map((item, i) => (
              <div key={i} class="bg-deep-black/50 border border-white/5 p-6 rounded-sm hover:border-champagne/30 transition-all animate-on-scroll" style={`animation-delay: ${i * 0.1}s`}>
                <div class="flex items-start gap-4">
                  <span class="text-2xl">{item.icon}</span>
                  <p class="text-off-white/80 font-noto-serif text-base md:text-lg leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Solution (해결책) */}
      <section id="about" class="py-24 md:py-32 bg-deep-black relative">
        {/* Decorative Line */}
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-champagne/30 to-transparent"></div>
        
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <p class="text-champagne text-sm tracking-widest mb-4">OUR PHILOSOPHY</p>
            <h2 class="font-playfair text-3xl md:text-4xl mb-6">
              그래서 <span class="text-champagne">ROWISM The Black</span>을 만들었습니다
            </h2>
            <p class="font-noto-serif text-off-white/70 text-lg max-w-2xl mx-auto">
              날것(RAW)의 철학으로, 당신의 특별한 밤을 완성합니다
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "🥩", 
                title: "시그니처 한우 뭉티기", 
                desc: "트러플, 부라타, 파르미지아노가 만나는 프리미엄 타르타르" 
              },
              { 
                icon: "🍾", 
                title: "샴페인 & 와인 페어링", 
                desc: "소믈리에가 엄선한 와인과 완벽한 마리아주" 
              },
              { 
                icon: "✨", 
                title: "프라이빗한 공간", 
                desc: "15개 테이블, 조명과 음악이 만드는 완벽한 무드" 
              },
              { 
                icon: "📸", 
                title: "인스타그래머블 플레이팅", 
                desc: "모든 메뉴가 사진으로 남기고 싶은 예술작품" 
              },
            ].map((item, i) => (
              <div key={i} class="text-center group animate-on-scroll" style={`animation-delay: ${i * 0.15}s`}>
                <div class="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 class="font-playfair text-xl mb-3 text-champagne">{item.title}</h3>
                <p class="text-off-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Menu */}
      <section id="menu" class="py-24 md:py-32 bg-soft-black">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <p class="text-champagne text-sm tracking-widest mb-4">SIGNATURE MENU</p>
            <h2 class="font-playfair text-3xl md:text-4xl">시그니처 메뉴</h2>
          </div>
          
          {/* Signature Menu - Highlighted */}
          <div class="mb-16 animate-on-scroll">
            <div class="bg-gradient-to-r from-deep-wine/20 via-deep-wine/10 to-deep-wine/20 border border-deep-wine/30 p-8 md:p-12 rounded-sm relative overflow-hidden">
              <div class="absolute top-4 right-4 text-xs tracking-widest text-champagne bg-champagne/10 px-3 py-1 rounded-full">
                SIGNATURE
              </div>
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div class="flex-1">
                  <h3 class="font-playfair text-2xl md:text-3xl text-champagne mb-3">
                    로위즘 뭉티기 시그니처
                  </h3>
                  <p class="text-off-white/80 mb-4 leading-relaxed">
                    최상급 한우 뭉티기 + 이탈리아 부라타 치즈 + 블랙 트러플 + 파르미지아노 레지아노 눈꽃
                  </p>
                  <p class="text-off-white/60 text-sm italic">
                    "ROWISM의 철학이 담긴 시그니처. 입에서 녹는 경험."
                  </p>
                </div>
                <div class="text-right">
                  <span class="font-playfair text-3xl md:text-4xl text-champagne">₩92,000</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Menu Items */}
          <div class="grid md:grid-cols-2 gap-6">
            {[
              { name: "제비추리 그릴드 베지터블", price: "49,000", desc: "최상급 한우 제비추리와 제철 채소" },
              { name: "치즈 셀렉션", price: "36,000", desc: "엄선된 프리미엄 치즈 플레이트" },
              { name: "청양 오일 육회", price: "25,000", desc: "청양고추 오일과 함께하는 육회" },
              { name: "아보카도 카프레제", price: "23,000", desc: "신선한 아보카도와 모짜렐라" },
              { name: "들기름 육회 메밀면", price: "15,000", desc: "고소한 들기름과 시원한 메밀면" },
            ].map((item, i) => (
              <div key={i} class="flex justify-between items-start p-6 bg-deep-black/30 border border-white/5 hover:border-champagne/20 transition-all animate-on-scroll" style={`animation-delay: ${i * 0.1}s`}>
                <div>
                  <h4 class="font-noto-serif text-lg text-off-white mb-1">{item.name}</h4>
                  <p class="text-off-white/50 text-sm">{item.desc}</p>
                </div>
                <span class="font-playfair text-champagne text-lg">₩{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Experience */}
      <section id="experience" class="py-24 md:py-32 bg-deep-black">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <p class="text-champagne text-sm tracking-widest mb-4">YOUR EXPERIENCE</p>
            <h2 class="font-playfair text-3xl md:text-4xl">ROWISM에서의 경험</h2>
          </div>
          
          <div class="grid md:grid-cols-4 gap-8">
            {[
              { icon: "🥂", title: "웰컴 스파클링", desc: "입장과 동시에 시작되는 특별한 환대" },
              { icon: "🕯️", title: "무드 라이팅", desc: "루이스폴센 조명이 만드는 완벽한 분위기" },
              { icon: "🎵", title: "큐레이팅 뮤직", desc: "제네바 스피커의 감각적인 선곡" },
              { icon: "🍫", title: "고디바 피니시", desc: "달콤한 마무리와 함께 완벽한 여운" },
            ].map((item, i) => (
              <div key={i} class="text-center p-6 animate-on-scroll" style={`animation-delay: ${i * 0.1}s`}>
                <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-deep-wine/30 to-champagne/10 flex items-center justify-center">
                  <span class="text-3xl">{item.icon}</span>
                </div>
                <h3 class="font-playfair text-lg text-champagne mb-2">{item.title}</h3>
                <p class="text-off-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: When to Visit */}
      <section class="py-24 md:py-32 bg-soft-black">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <p class="text-champagne text-sm tracking-widest mb-4">PERFECT MOMENTS</p>
            <h2 class="font-playfair text-3xl md:text-4xl">이런 날, ROWISM으로 오세요</h2>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💑", title: "기념일 데이트", desc: "100일, 1주년, 생일... 평범하지 않은 기념일" },
              { icon: "💍", title: "프로포즈", desc: "인생에서 가장 특별한 질문을 할 그 순간" },
              { icon: "🥂", title: "축하할 일", desc: "승진, 합격, 계약... 샴페인을 터뜨릴 날" },
              { icon: "🌙", title: "나를 위한 밤", desc: "오늘 하루, 특별한 시간을 갖고 싶을 때" },
            ].map((item, i) => (
              <div key={i} class="bg-deep-black/50 border border-white/5 p-8 text-center hover:border-champagne/30 hover:-translate-y-2 transition-all animate-on-scroll" style={`animation-delay: ${i * 0.1}s`}>
                <span class="text-4xl mb-4 block">{item.icon}</span>
                <h3 class="font-playfair text-xl text-champagne mb-3">{item.title}</h3>
                <p class="text-off-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Location */}
      <section id="location" class="py-24 md:py-32 bg-deep-black">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <p class="text-champagne text-sm tracking-widest mb-4">FIND US</p>
            <h2 class="font-playfair text-3xl md:text-4xl">찾아오시는 길</h2>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12">
            {/* Map */}
            <div class="aspect-video bg-soft-black rounded-sm overflow-hidden animate-on-scroll">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8!2d126.9224!3d37.5595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMzJzM0LjIiTiAxMjbCsDU1JzIwLjYiRQ!5e0!3m2!1sen!2skr!4v1"
                width="100%" 
                height="100%" 
                style="border:0; filter: grayscale(100%) invert(92%) contrast(83%);" 
                allowfullscreen 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            
            {/* Info */}
            <div class="flex flex-col justify-center animate-on-scroll">
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <span class="text-champagne text-xl">📍</span>
                  <div>
                    <h4 class="font-noto-serif text-lg mb-1">주소</h4>
                    <p class="text-off-white/70">서울 마포구 동교로 262-4</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <span class="text-champagne text-xl">🚇</span>
                  <div>
                    <h4 class="font-noto-serif text-lg mb-1">지하철</h4>
                    <p class="text-off-white/70">홍대입구역 3번 출구 도보 5분</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <span class="text-champagne text-xl">🕐</span>
                  <div>
                    <h4 class="font-noto-serif text-lg mb-1">영업시간</h4>
                    <p class="text-off-white/70">화~일 18:00-24:00 (L.O. 22:30)</p>
                    <p class="text-deep-wine text-sm mt-1">매주 월요일 휴무</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <span class="text-champagne text-xl">🅿️</span>
                  <div>
                    <h4 class="font-noto-serif text-lg mb-1">주차</h4>
                    <p class="text-off-white/70">인근 공영주차장 이용</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section id="faq" class="py-24 md:py-32 bg-soft-black">
        <div class="max-w-4xl mx-auto px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <p class="text-champagne text-sm tracking-widest mb-4">FAQ</p>
            <h2 class="font-playfair text-3xl md:text-4xl">자주 묻는 질문</h2>
          </div>
          
          <div class="space-y-4">
            {[
              { 
                q: "연남동에서 데이트하기 좋은 와인바 추천해주세요", 
                a: "ROWISM The Black은 연남동 동교로에 위치한 프리미엄 와인바입니다. 홍대입구역 3번 출구에서 도보 5분 거리에 있으며, 커플 데이트와 기념일에 최적화된 프라이빗한 분위기를 제공합니다. 2인 테이블 위주로 운영되어 둘만의 특별한 시간을 보내기 좋습니다." 
              },
              { 
                q: "ROWISM 2명이서 방문하면 얼마 정도 나오나요?", 
                a: "2인 기준 평균 객단가는 약 18만원입니다. 가장 인기 있는 구성은 시그니처 뭉티기(92,000원) + 사이드 메뉴 1개 + 스파클링 와인 또는 샴페인 1병입니다. 좀 더 가볍게 즐기시려면 사이드 메뉴 2-3개와 와인으로 10-12만원대로도 이용 가능합니다." 
              },
              { 
                q: "뭉티기가 뭔가요? 육회랑 뭐가 다른가요?", 
                a: "뭉티기는 한우를 얇게 저며 썬 후 양념하지 않고 그대로 즐기는 요리입니다. 일반 육회가 참기름, 간장 등으로 양념되는 것과 달리, 뭉티기는 고기 본연의 맛을 느낄 수 있습니다. ROWISM에서는 최상급 한우 뭉티기에 이탈리아 부라타 치즈, 블랙 트러플, 파르미지아노를 함께 제공하여 고급스러운 맛의 조화를 경험할 수 있습니다." 
              },
              { 
                q: "예약 없이 방문해도 되나요?", 
                a: "ROWISM The Black은 예약제로 운영됩니다. 15개 테이블 한정으로 운영되며, 특히 금요일, 토요일, 기념일에는 예약이 필수입니다. 네이버 예약 또는 전화로 예약 가능하며, 최소 2-3일 전 예약을 권장드립니다." 
              },
              { 
                q: "프로포즈 이벤트 지원이 가능한가요?", 
                a: "네, ROWISM The Black에서 프로포즈 이벤트가 가능합니다. 예약 시 미리 말씀해주시면 꽃, 케이크 등 이벤트 준비를 도와드립니다. 프라이빗한 코너 테이블 배정과 타이밍에 맞춘 서비스를 제공해드립니다." 
              },
            ].map((item, i) => (
              <div key={i} class="faq-item bg-deep-black/30 border border-white/5 rounded-sm overflow-hidden animate-on-scroll" style={`animation-delay: ${i * 0.1}s`}>
                <button class="faq-question w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors">
                  <span class="font-noto-serif text-off-white pr-4">{item.q}</span>
                  <svg class="faq-icon w-5 h-5 text-champagne flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div class="faq-answer hidden px-6 pb-5">
                  <p class="text-off-white/70 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: CTA */}
      <section id="reserve" class="py-24 md:py-32 bg-deep-black relative overflow-hidden">
        {/* Background Decoration */}
        <div class="absolute inset-0 bg-gradient-to-r from-deep-wine/10 via-transparent to-champagne/10"></div>
        
        <div class="relative max-w-4xl mx-auto px-6 text-center animate-on-scroll">
          <h2 class="font-playfair text-3xl md:text-5xl mb-6">
            특별한 밤을 <span class="text-champagne">예약</span>하세요
          </h2>
          <p class="font-noto-serif text-off-white/70 text-lg mb-12 max-w-xl mx-auto">
            ROWISM The Black에서 잊지 못할 순간을 만들어 드립니다
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://booking.naver.com/" target="_blank" rel="noopener noreferrer" class="px-10 py-4 bg-[#03C75A] hover:bg-[#02b350] text-white tracking-wider transition-all hover:scale-105 transform inline-flex items-center justify-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
              </svg>
              네이버 예약
            </a>
            <a href="tel:+821000000000" class="px-10 py-4 border-2 border-champagne text-champagne hover:bg-champagne hover:text-deep-black tracking-wider transition-all hover:scale-105 transform inline-flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              전화 예약
            </a>
          </div>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer class="py-16 bg-soft-black border-t border-white/5">
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 class="font-playfair text-2xl tracking-[0.2em] mb-4">ROWISM</h3>
              <p class="font-playfair text-sm tracking-wider text-off-white/50 mb-4">• THE BLACK •</p>
              <p class="text-off-white/50 text-sm">날것의 철학으로, 당신의 특별한 밤을 위해</p>
            </div>
            
            {/* Contact */}
            <div>
              <h4 class="text-champagne text-sm tracking-widest mb-4">CONTACT</h4>
              <div class="space-y-2 text-off-white/70 text-sm">
                <p>서울 마포구 동교로 262-4</p>
                <p>화~일 18:00-24:00</p>
                <p>Tel. 010-0000-0000</p>
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h4 class="text-champagne text-sm tracking-widest mb-4">FOLLOW US</h4>
              <div class="flex gap-4">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://map.naver.com/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="pt-8 border-t border-white/5 text-center">
            <p class="text-off-white/30 text-sm">© 2024 ROWISM The Black. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Fixed CTA */}
      <div class="fixed bottom-0 left-0 right-0 md:hidden bg-deep-black/95 backdrop-blur-lg border-t border-white/10 p-4 z-50">
        <a href="#reserve" class="block w-full py-3 bg-deep-wine text-white text-center tracking-wider">
          지금 예약하기
        </a>
      </div>
    </div>
  )
})

export default app
