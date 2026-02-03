import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Main Page - ROWISM The Black (Premium Luxury Version)
app.get('/', (c) => {
  return c.render(
    <div class="overflow-x-hidden">
      {/* Navigation */}
      <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-transparent">
        <div class="max-w-7xl mx-auto px-8 md:px-12 py-6 flex justify-between items-center">
          <a href="#hero" class="group">
            <span class="font-playfair text-xl tracking-[0.4em] text-off-white group-hover:text-champagne transition-colors duration-500">
              ROWISM
            </span>
          </a>
          <div class="hidden lg:flex items-center gap-12">
            <a href="#philosophy" class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500">Philosophy</a>
            <a href="#menu" class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500">Menu</a>
            <a href="#experience" class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500">Experience</a>
            <a href="#location" class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500">Location</a>
            <a href="#reserve" class="text-[11px] tracking-[0.25em] uppercase text-champagne border-b border-champagne/30 pb-1 hover:border-champagne transition-colors duration-500">
              Reservation
            </a>
          </div>
          <button id="mobile-menu-btn" class="lg:hidden text-off-white/70 hover:text-off-white transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1">
              <path d="M4 8h16M4 16h16"></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" class="hidden lg:hidden bg-deep-black/98 backdrop-blur-xl">
          <div class="px-8 py-8 flex flex-col gap-6">
            <a href="#philosophy" class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2">Philosophy</a>
            <a href="#menu" class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2">Menu</a>
            <a href="#experience" class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2">Experience</a>
            <a href="#location" class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2">Location</a>
            <div class="pt-4 border-t border-white/5">
              <a href="#reserve" class="text-[11px] tracking-[0.25em] uppercase text-champagne">Reservation</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero - Cinematic */}
      <section id="hero" class="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dark Gradient Overlay */}
        <div class="absolute inset-0 bg-gradient-to-b from-deep-black via-deep-black/95 to-deep-black"></div>
        
        {/* Subtle Grain Texture */}
        <div class="absolute inset-0 opacity-[0.02] bg-noise"></div>
        
        {/* Vertical Lines */}
        <div class="absolute inset-0 flex justify-between px-[10%] opacity-[0.03]">
          <div class="w-px h-full bg-gradient-to-b from-transparent via-champagne to-transparent"></div>
          <div class="w-px h-full bg-gradient-to-b from-transparent via-champagne to-transparent"></div>
          <div class="w-px h-full bg-gradient-to-b from-transparent via-champagne to-transparent"></div>
        </div>
        
        {/* Content */}
        <div class="relative z-10 text-center px-6">
          <div class="animate-fade-in">
            <p class="text-[10px] md:text-[11px] tracking-[0.5em] text-champagne/60 mb-8 uppercase font-light">
              Premium Wine Bar · Yeonnam-dong
            </p>
            
            <h1 class="font-playfair text-4xl md:text-6xl lg:text-7xl tracking-[0.2em] font-light mb-3">
              ROWISM
            </h1>
            
            <div class="flex items-center justify-center gap-4 mb-12">
              <span class="w-12 h-px bg-champagne/30"></span>
              <p class="font-playfair text-sm md:text-base tracking-[0.4em] text-off-white/50 uppercase">
                The Black
              </p>
              <span class="w-12 h-px bg-champagne/30"></span>
            </div>
            
            <p class="font-noto-serif text-sm md:text-base text-off-white/60 font-light tracking-wider max-w-md mx-auto leading-relaxed">
              연남동에서 가장 특별한 밤
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <div class="flex flex-col items-center gap-3 opacity-40 hover:opacity-70 transition-opacity cursor-pointer">
              <span class="text-[9px] tracking-[0.3em] uppercase text-off-white/50">Scroll</span>
              <div class="w-px h-12 bg-gradient-to-b from-champagne/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Introduction Quote */}
      <section class="py-32 md:py-40 bg-deep-black relative">
        <div class="max-w-4xl mx-auto px-8 md:px-12 text-center">
          <div class="animate-on-scroll">
            <span class="text-champagne/40 text-6xl font-playfair leading-none">"</span>
            <p class="font-noto-serif text-lg md:text-xl lg:text-2xl text-off-white/80 leading-loose font-light -mt-8">
              날것의 철학, <span class="text-champagne">RAW</span>ism.<br/>
              <span class="text-off-white/50">최상급 재료를 가장 순수한 방식으로.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Pain Points - Minimal */}
      <section class="py-24 md:py-32 bg-soft-black/50">
        <div class="max-w-5xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">The Question</p>
            <h2 class="font-playfair text-2xl md:text-3xl font-light tracking-wide">
              오늘, 특별한 밤을 원하신다면
            </h2>
          </div>
          
          <div class="grid md:grid-cols-2 gap-px bg-white/5">
            {[
              "분위기와 맛, 모두를 원할 때",
              "평범한 레스토랑이 아닌 곳을 찾을 때",
              "둘만의 프라이빗한 시간이 필요할 때",
              "기억에 남을 경험을 선물하고 싶을 때",
            ].map((text, i) => (
              <div key={i} class="bg-deep-black p-10 md:p-12 animate-on-scroll" style={`animation-delay: ${i * 0.1}s`}>
                <p class="text-off-white/60 font-light text-sm md:text-base leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Philosophy */}
      <section id="philosophy" class="py-32 md:py-40 bg-deep-black relative">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Text */}
            <div class="animate-on-scroll">
              <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-6">Our Philosophy</p>
              <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide mb-8 leading-snug">
                날것의 미학,<br/>
                <span class="text-champagne">ROWISM</span>
              </h2>
              <div class="space-y-6 text-off-white/50 font-light text-sm md:text-base leading-relaxed">
                <p>
                  RAW와 ism의 결합. 최상급 한우 뭉티기에 이탈리아 부라타 치즈, 
                  블랙 트러플, 파르미지아노 레지아노가 만나는 순간.
                </p>
                <p>
                  15개의 프라이빗 테이블, 루이스폴센의 은은한 조명, 
                  제네바 스피커가 전하는 큐레이팅된 선율.
                </p>
                <p>
                  ROWISM The Black은 단순한 와인바가 아닌, 
                  감각의 경험을 디자인합니다.
                </p>
              </div>
            </div>
            
            {/* Right - Features */}
            <div class="grid grid-cols-2 gap-px bg-white/5">
              {[
                { num: "01", title: "Signature Tartare", desc: "트러플 한우 뭉티기" },
                { num: "02", title: "Wine Pairing", desc: "소믈리에 큐레이션" },
                { num: "03", title: "Private Space", desc: "15석 한정 운영" },
                { num: "04", title: "Sensory Design", desc: "오감의 경험 설계" },
              ].map((item, i) => (
                <div key={i} class="bg-deep-black p-8 md:p-10 group hover:bg-soft-black/30 transition-all duration-500 animate-on-scroll" style={`animation-delay: ${i * 0.1}s`}>
                  <span class="text-[10px] text-champagne/30 tracking-widest">{item.num}</span>
                  <h3 class="font-playfair text-base md:text-lg mt-4 mb-2 text-off-white/90 group-hover:text-champagne transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p class="text-[11px] text-off-white/40 tracking-wide">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Menu */}
      <section id="menu" class="py-32 md:py-40 bg-soft-black/30">
        <div class="max-w-5xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">Menu</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">
              Signature Collection
            </h2>
          </div>
          
          {/* Signature Menu - Highlighted */}
          <div class="mb-16 animate-on-scroll">
            <div class="border border-champagne/10 p-10 md:p-14 relative">
              <span class="absolute top-6 right-8 text-[9px] tracking-[0.3em] text-champagne/40 uppercase">
                Signature
              </span>
              <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <h3 class="font-playfair text-xl md:text-2xl text-off-white mb-4">
                    로위즘 뭉티기 시그니처
                  </h3>
                  <p class="text-off-white/40 text-sm font-light leading-relaxed max-w-lg">
                    최상급 한우 뭉티기 · 이탈리아 부라타 치즈 · 블랙 트러플 · 파르미지아노 레지아노
                  </p>
                </div>
                <div class="text-right">
                  <span class="font-playfair text-2xl md:text-3xl text-champagne">92,000</span>
                  <span class="text-champagne/50 text-sm ml-1">원</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Menu Items */}
          <div class="space-y-0 border-t border-white/5">
            {[
              { name: "제비추리 그릴드 베지터블", desc: "최상급 한우 제비추리 · 제철 채소", price: "49,000" },
              { name: "치즈 셀렉션", desc: "큐레이션 프리미엄 치즈 플레이트", price: "36,000" },
              { name: "청양 오일 육회", desc: "청양고추 인퓨즈드 오일 · 한우 육회", price: "25,000" },
              { name: "아보카도 카프레제", desc: "하스 아보카도 · 부팔라 모짜렐라", price: "23,000" },
              { name: "들기름 육회 메밀면", desc: "참들기름 · 한우 육회 · 메밀면", price: "15,000" },
            ].map((item, i) => (
              <div key={i} class="flex justify-between items-center py-8 border-b border-white/5 group animate-on-scroll" style={`animation-delay: ${i * 0.05}s`}>
                <div>
                  <h4 class="font-noto-serif text-base text-off-white/90 group-hover:text-off-white transition-colors mb-1">
                    {item.name}
                  </h4>
                  <p class="text-[11px] text-off-white/30 tracking-wide">{item.desc}</p>
                </div>
                <span class="font-playfair text-lg text-champagne/70 group-hover:text-champagne transition-colors">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Experience Timeline */}
      <section id="experience" class="py-32 md:py-40 bg-deep-black">
        <div class="max-w-5xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">Experience</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">
              The Journey
            </h2>
          </div>
          
          <div class="relative">
            {/* Vertical Line */}
            <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-champagne/20 via-champagne/10 to-transparent transform md:-translate-x-1/2"></div>
            
            <div class="space-y-16 md:space-y-24">
              {[
                { time: "Arrival", title: "웰컴 스파클링", desc: "입장과 동시에 시작되는 특별한 환대. 엄선된 스파클링 와인 한 잔으로 저녁을 시작합니다." },
                { time: "Ambience", title: "무드 라이팅", desc: "루이스폴센 조명이 만드는 은은한 빛. 당신만을 위한 프라이빗한 공간이 펼쳐집니다." },
                { time: "Sound", title: "큐레이팅 뮤직", desc: "제네바 스피커를 통해 흐르는 감각적인 선율. 대화와 어울리는 완벽한 볼륨." },
                { time: "Finale", title: "고디바 피니시", desc: "달콤한 마무리와 함께 완벽한 여운. 특별한 밤의 마지막 선물." },
              ].map((item, i) => (
                <div key={i} class={`flex flex-col md:flex-row items-start gap-8 md:gap-16 animate-on-scroll ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`} style={`animation-delay: ${i * 0.1}s`}>
                  <div class={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                    <span class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase">{item.time}</span>
                    <h3 class="font-playfair text-xl md:text-2xl text-off-white mt-3 mb-4">{item.title}</h3>
                    <p class="text-off-white/40 text-sm font-light leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                  <div class="hidden md:flex items-center justify-center">
                    <div class="w-3 h-3 rounded-full bg-champagne/30 border border-champagne/50"></div>
                  </div>
                  <div class="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Occasions */}
      <section class="py-32 md:py-40 bg-soft-black/30">
        <div class="max-w-5xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">Occasions</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">
              Special Moments
            </h2>
          </div>
          
          <div class="grid md:grid-cols-2 gap-px bg-white/5">
            {[
              { title: "Anniversary", subtitle: "기념일", desc: "100일, 1주년, 생일. 평범하지 않은 기념일을 위해." },
              { title: "Proposal", subtitle: "프로포즈", desc: "인생에서 가장 특별한 질문을 할 그 순간." },
              { title: "Celebration", subtitle: "축하", desc: "승진, 합격, 계약. 샴페인을 터뜨릴 날." },
              { title: "Private", subtitle: "프라이빗", desc: "오늘 하루, 나를 위한 특별한 시간." },
            ].map((item, i) => (
              <div key={i} class="bg-deep-black p-10 md:p-14 group hover:bg-soft-black/50 transition-all duration-700 animate-on-scroll" style={`animation-delay: ${i * 0.1}s`}>
                <span class="text-[10px] tracking-[0.3em] text-champagne/30 uppercase">{item.title}</span>
                <h3 class="font-playfair text-xl md:text-2xl text-off-white mt-4 mb-2 group-hover:text-champagne transition-colors duration-500">
                  {item.subtitle}
                </h3>
                <p class="text-off-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Location */}
      <section id="location" class="py-32 md:py-40 bg-deep-black">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Info */}
            <div class="animate-on-scroll">
              <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-6">Location</p>
              <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide mb-12">
                찾아오시는 길
              </h2>
              
              <div class="space-y-10">
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2">Address</p>
                  <p class="text-off-white/80 font-light">서울 마포구 동교로 262-4</p>
                </div>
                
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2">Access</p>
                  <p class="text-off-white/80 font-light">홍대입구역 3번 출구 도보 5분</p>
                </div>
                
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2">Hours</p>
                  <p class="text-off-white/80 font-light">화 - 일 18:00 - 24:00</p>
                  <p class="text-off-white/40 text-sm mt-1">Last Order 22:30 · 월요일 휴무</p>
                </div>
                
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2">Parking</p>
                  <p class="text-off-white/80 font-light">인근 공영주차장 이용</p>
                </div>
              </div>
            </div>
            
            {/* Right - Map */}
            <div class="animate-on-scroll">
              <div class="aspect-[4/3] bg-soft-black overflow-hidden">
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
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section id="faq" class="py-32 md:py-40 bg-soft-black/30">
        <div class="max-w-3xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">FAQ</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">
              자주 묻는 질문
            </h2>
          </div>
          
          <div class="space-y-0 border-t border-white/5">
            {[
              { 
                q: "예약 없이 방문해도 되나요?", 
                a: "ROWISM The Black은 예약제로 운영됩니다. 15개 테이블 한정으로 운영되며, 특히 금요일, 토요일, 기념일에는 예약이 필수입니다. 네이버 예약 또는 전화로 예약 가능하며, 최소 2-3일 전 예약을 권장드립니다." 
              },
              { 
                q: "2인 방문 시 예상 금액은 얼마인가요?", 
                a: "2인 기준 평균 객단가는 약 18만원입니다. 시그니처 뭉티기(92,000원) + 사이드 메뉴 + 와인 1병 구성을 추천드리며, 좀 더 가볍게 즐기시려면 10-12만원대로도 이용 가능합니다." 
              },
              { 
                q: "뭉티기와 육회의 차이는 무엇인가요?", 
                a: "뭉티기는 한우를 얇게 저며 양념 없이 그대로 즐기는 요리입니다. 일반 육회가 양념되는 것과 달리, 고기 본연의 맛을 느낄 수 있습니다. ROWISM에서는 부라타, 트러플, 파르미지아노와 함께 제공합니다." 
              },
              { 
                q: "프로포즈 이벤트가 가능한가요?", 
                a: "네, 예약 시 미리 말씀해주시면 꽃, 케이크 등 이벤트 준비를 도와드립니다. 프라이빗한 코너 테이블 배정과 타이밍에 맞춘 서비스를 제공해드립니다." 
              },
            ].map((item, i) => (
              <div key={i} class="faq-item border-b border-white/5 animate-on-scroll" style={`animation-delay: ${i * 0.05}s`}>
                <button class="faq-question w-full py-8 text-left flex justify-between items-center group">
                  <span class="font-noto-serif text-off-white/80 text-sm md:text-base pr-8 group-hover:text-off-white transition-colors">
                    {item.q}
                  </span>
                  <svg class="faq-icon w-4 h-4 text-champagne/50 flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1">
                    <path d="M12 5v14M5 12h14"></path>
                  </svg>
                </button>
                <div class="faq-answer hidden pb-8">
                  <p class="text-off-white/40 text-sm font-light leading-relaxed pr-12">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section id="reserve" class="py-32 md:py-40 bg-deep-black relative overflow-hidden">
        {/* Subtle Background */}
        <div class="absolute inset-0 bg-gradient-to-r from-champagne/5 via-transparent to-champagne/5"></div>
        
        <div class="relative max-w-3xl mx-auto px-8 md:px-12 text-center">
          <div class="animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-6">Reservation</p>
            <h2 class="font-playfair text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6">
              특별한 밤을 예약하세요
            </h2>
            <p class="text-off-white/40 text-sm font-light mb-16 max-w-md mx-auto">
              ROWISM The Black에서 잊지 못할 순간을 만들어 드립니다
            </p>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://booking.naver.com/" target="_blank" rel="noopener noreferrer" 
                 class="group px-12 py-4 bg-champagne hover:bg-champagne/90 transition-all duration-500 inline-flex items-center justify-center gap-3">
                <svg class="w-4 h-4 text-deep-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
                <span class="text-[11px] tracking-[0.2em] uppercase text-deep-black font-medium">네이버 예약</span>
              </a>
              <a href="tel:+821000000000" 
                 class="group px-12 py-4 border border-white/20 hover:border-champagne/50 transition-all duration-500 inline-flex items-center justify-center gap-3">
                <svg class="w-4 h-4 text-off-white/50 group-hover:text-champagne transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="text-[11px] tracking-[0.2em] uppercase text-off-white/50 group-hover:text-champagne transition-colors">전화 예약</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-20 bg-soft-black/50 border-t border-white/5">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <div class="grid md:grid-cols-3 gap-16 mb-16">
            {/* Brand */}
            <div>
              <h3 class="font-playfair text-lg tracking-[0.3em] mb-6">ROWISM</h3>
              <p class="text-[10px] tracking-[0.3em] text-off-white/30 uppercase mb-4">The Black</p>
              <p class="text-off-white/30 text-xs font-light leading-relaxed">
                날것의 철학으로,<br/>당신의 특별한 밤을 위해.
              </p>
            </div>
            
            {/* Contact */}
            <div>
              <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-6">Contact</p>
              <div class="space-y-3 text-off-white/40 text-xs font-light">
                <p>서울 마포구 동교로 262-4</p>
                <p>화 - 일 18:00 - 24:00</p>
                <p>Tel. 010-0000-0000</p>
              </div>
            </div>
            
            {/* Social */}
            <div>
              <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-6">Follow</p>
              <div class="flex gap-6">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" 
                   class="text-off-white/30 hover:text-champagne transition-colors duration-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://map.naver.com/" target="_blank" rel="noopener noreferrer" 
                   class="text-off-white/30 hover:text-champagne transition-colors duration-500">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="pt-8 border-t border-white/5 text-center">
            <p class="text-off-white/20 text-[10px] tracking-widest">
              © 2024 ROWISM The Black. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Fixed CTA */}
      <div class="fixed bottom-0 left-0 right-0 lg:hidden bg-deep-black/98 backdrop-blur-xl border-t border-white/5 p-4 z-50">
        <a href="#reserve" class="block w-full py-3 bg-champagne text-deep-black text-center text-[11px] tracking-[0.2em] uppercase font-medium">
          예약하기
        </a>
      </div>
    </div>
  )
})

export default app
