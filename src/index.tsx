import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Static files - sitemap.xml
app.get('/sitemap.xml', async (c) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://rowism.com/</loc>
    <lastmod>2024-02-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://rowism.com/static/logo.png</image:loc>
      <image:title>ROWISM The Black 로고 - 연남동 프리미엄 샴페인바</image:title>
    </image:image>
    <image:image>
      <image:loc>https://rowism.com/static/menu_signature.jpg</image:loc>
      <image:title>연남동 맛집 트러플 한우 뭉티기 - 홍대 데이트 기념일</image:title>
    </image:image>
  </url>
  <url><loc>https://rowism.com/#menu</loc><priority>0.9</priority></url>
  <url><loc>https://rowism.com/#philosophy</loc><priority>0.8</priority></url>
  <url><loc>https://rowism.com/#recommend</loc><priority>0.8</priority></url>
  <url><loc>https://rowism.com/#location</loc><priority>0.8</priority></url>
  <url><loc>https://rowism.com/#faq</loc><priority>0.7</priority></url>
  <url><loc>https://rowism.com/#reserve</loc><priority>0.9</priority></url>
</urlset>`
  return c.text(sitemap, 200, { 'Content-Type': 'application/xml' })
})

// Static files - robots.txt
app.get('/robots.txt', (c) => {
  const robots = `# ROWISM The Black - 연남동 프리미엄 샴페인바
User-agent: *
Allow: /
Sitemap: https://rowism.com/sitemap.xml
Crawl-delay: 1`
  return c.text(robots, 200, { 'Content-Type': 'text/plain' })
})

// Main Page - ROWISM The Black (Premium Luxury Version with Enhanced SEO/GEO Content)
app.get('/', (c) => {
  return c.render(
    <div class="overflow-x-hidden">
      {/* Navigation */}
      <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-transparent">
        <div class="max-w-7xl mx-auto px-8 md:px-12 py-6 flex justify-between items-center">
          <a href="#hero" class="group">
            <img 
              src="/static/logo.png" 
              alt="RAWISM The Black" 
              class="h-8 md:h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
          </a>
          <div class="hidden lg:flex items-center gap-12">
            <a href="#philosophy" class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500">Philosophy</a>
            <a href="#menu" class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500">Menu</a>
            <a href="#recommend" class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500">추천</a>
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
            <a href="#recommend" class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2">추천</a>
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
            <p class="text-[10px] md:text-[11px] tracking-[0.5em] text-champagne/60 mb-10 uppercase font-light">
              연남동 프리미엄 샴페인바 · 홍대입구역 5분
            </p>
            
            {/* Logo Image */}
            <div class="mb-12">
              <img 
                src="/static/logo.png" 
                alt="RAWISM The Black" 
                class="w-64 md:w-80 lg:w-96 mx-auto"
              />
            </div>
            
            <p class="font-noto-serif text-sm md:text-base text-off-white/60 font-light tracking-wider max-w-md mx-auto leading-relaxed">
              연남동에서 가장 특별한 밤
            </p>
            
            <p class="font-noto-serif text-xs text-off-white/40 font-light tracking-wider mt-4">
              트러플 한우 뭉티기 · 샴페인 & 스파클링 · 프라이빗 다이닝
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

      {/* Section 3: Pain Points - Target Customer */}
      <section class="py-24 md:py-32 bg-soft-black/50">
        <div class="max-w-5xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">The Question</p>
            <h2 class="font-playfair text-2xl md:text-3xl font-light tracking-wide">
              오늘, 특별한 밤을 원하신다면
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4 max-w-lg mx-auto">
              연남동 데이트, 홍대 기념일 장소를 찾고 계신가요?
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-px bg-white/5">
            {[
              "✨ 분위기와 맛, 모두를 원할 때",
              "🍷 평범한 레스토랑이 아닌 곳을 찾을 때",
              "💑 둘만의 프라이빗한 시간이 필요할 때",
              "🎁 기억에 남을 경험을 선물하고 싶을 때",
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

      {/* Section 4: Philosophy - Brand Story Enhanced */}
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
                  <strong class="text-off-white/80">RAW와 ism의 결합.</strong> 로위즘(ROWISM)은 '날것'을 뜻하는 RAW와 
                  '주의·철학'을 의미하는 ism을 결합한 이름입니다. 우리는 최상급 재료 본연의 맛을 
                  가장 순수한 방식으로 전달하는 것을 철학으로 삼습니다.
                </p>
                <p>
                  <strong class="text-off-white/80">연남동 프리미엄 샴페인바.</strong> 홍대입구역에서 도보 5분, 
                  연남동 골목 속에 자리한 ROWISM The Black은 최상급 한우 뭉티기에 이탈리아 부라타 치즈, 
                  블랙 트러플, 파르미지아노 레지아노가 만나는 시그니처 요리를 선보입니다.
                </p>
                <p>
                  <strong class="text-off-white/80">8개의 프라이빗 테이블.</strong> 루이스폴센의 은은한 조명, 
                  제네바 스피커가 전하는 큐레이팅된 선율. ROWISM The Black은 단순한 샴페인바가 아닌, 
                  감각의 경험을 디자인하는 연남동 다이닝 공간입니다.
                </p>
              </div>
            </div>
            
            {/* Right - Features */}
            <div class="grid grid-cols-2 gap-px bg-white/5">
              {[
                { num: "01", title: "Signature Tartare", desc: "트러플 한우 뭉티기", detail: "최상급 한우 + 트러플" },
                { num: "02", title: "Champagne & Sparkling", desc: "소믈리에 큐레이션", detail: "프리미엄 샴페인 & 스파클링" },
                { num: "03", title: "Private Space", desc: "8석 한정 운영", detail: "예약제 프라이빗 다이닝" },
                { num: "04", title: "Sensory Design", desc: "오감의 경험 설계", detail: "조명·음악·서비스" },
              ].map((item, i) => (
                <div key={i} class="bg-deep-black p-8 md:p-10 group hover:bg-soft-black/30 transition-all duration-500 animate-on-scroll" style={`animation-delay: ${i * 0.1}s`}>
                  <span class="text-[10px] text-champagne/30 tracking-widest">{item.num}</span>
                  <h3 class="font-playfair text-base md:text-lg mt-4 mb-2 text-off-white/90 group-hover:text-champagne transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p class="text-[11px] text-off-white/40 tracking-wide">{item.desc}</p>
                  <p class="text-[10px] text-off-white/25 mt-2">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Menu - Premium with Photos */}
      <section id="menu" class="py-32 md:py-40 bg-soft-black/30">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <div class="text-center mb-24 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">Menu</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">
              Signature Collection
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4 max-w-lg mx-auto">
              최상급 재료와 섬세한 플레이팅으로 완성되는 ROWISM의 시그니처
            </p>
          </div>
          
          {/* Signature Menu - Hero Style */}
          <div class="mb-32 animate-on-scroll">
            <div class="grid lg:grid-cols-2 gap-0">
              {/* Photo */}
              <div class="relative aspect-[4/3] lg:aspect-auto bg-soft-black overflow-hidden group">
                <img 
                  src="/static/menu_signature.jpg" 
                  alt="연남동 맛집 로위즘 뭉티기 시그니처 - 트러플 한우 뭉티기 부라타치즈 홈대 데이트 코스 기념일 디너" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-black/30 to-transparent"></div>
                <div class="absolute top-6 left-6">
                  <span class="text-[9px] tracking-[0.3em] text-champagne/80 uppercase bg-deep-black/70 px-3 py-1">
                    Signature
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div class="bg-deep-black p-10 lg:p-14 flex flex-col justify-center">
                <div class="mb-6">
                  <div class="flex justify-between items-start">
                    <h3 class="font-playfair text-2xl md:text-3xl text-off-white mb-2">
                      로위즘 뭉티기 시그니처
                    </h3>
                    <span class="font-playfair text-2xl text-champagne">₩92,000</span>
                  </div>
                  <p class="text-champagne/60 text-sm tracking-wide">
                    ROWISM의 철학을 담은 시그니처 메뉴
                  </p>
                </div>
                
                <div class="space-y-4 mb-6">
                  <p class="text-off-white/50 text-sm font-light leading-relaxed">
                    로위즘 뭉티기 시그니처는 ROWISM The Black의 정체성을 가장 잘 보여주는 대표 메뉴입니다. 
                    'ROWISM'이라는 이름은 'RAW(날것)'와 '-ISM(철학)'의 조합으로, 최상급 재료를 가장 순수한 방식으로 즐긴다는 브랜드 철학을 담고 있습니다.
                  </p>
                  <div class="border-l-2 border-champagne/20 pl-4 my-4">
                    <p class="text-champagne/50 text-xs font-medium mb-2">뭉티기란?</p>
                    <p class="text-off-white/35 text-xs font-light leading-relaxed">
                      뭉티기는 한우를 얇게 저며 썬 후 별도의 양념 없이 그대로 즐기는 전통 요리입니다. 
                      일반적인 육회가 참기름과 간장 등으로 양념되는 것과 달리, 뭉티기는 고기 본연의 맛과 식감을 오롯이 느낄 수 있습니다. 
                      신선도가 생명인 만큼, ROWISM The Black에서는 매일 엄선된 최상급 한우 뭉티기 200g을 아낌없이 사용합니다.
                    </p>
                  </div>
                  <div class="border-l-2 border-champagne/20 pl-4">
                    <p class="text-champagne/50 text-xs font-medium mb-2">프리미엄 재료의 완벽한 조화</p>
                    <p class="text-off-white/35 text-xs font-light leading-relaxed">
                      로위즘 뭉티기 시그니처 위에는 이탈리아산 부라타 치즈가 통째로 올라갑니다. 
                      부라타 특유의 크리미한 식감이 담백한 뭉티기와 만나 입 안에서 부드럽게 녹아내립니다. 
                      여기에 블랙 트러플이 눈앞에서 슬라이스되어 깊은 향을 더하고, 파르미지아노 레지아노가 갓 갈려 눈꽃처럼 내려앉습니다. 
                      플뢰르 드 셀과 후추가 각 재료의 풍미를 섬세하게 끌어올려, 한 접시 안에서 한우와 이탈리아 치즈, 프렌치 트러플의 완벽한 마리아주를 경험할 수 있습니다.
                    </p>
                  </div>
                </div>
                
                <div class="border-t border-white/5 pt-5">
                  <p class="text-[10px] tracking-[0.2em] text-champagne/40 uppercase mb-2">Ingredients</p>
                  <p class="text-off-white/30 text-xs leading-relaxed">
                    한우 뭉티기 · 부라타 치즈 · 블랙 트러플 · 파르미지아노 레지아노 · 소금 · 후추
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Menu Items - Card Grid with Photos */}
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Menu Item 1: 제비추리 */}
            <div class="animate-on-scroll group" style="animation-delay: 0.1s">
              <div class="relative aspect-[16/10] bg-soft-black overflow-hidden mb-6">
                <img 
                  src="/static/menu_jebichuri.jpg" 
                  alt="연남동 한우 맛집 제비추리 그릴드 - 홈대입구역 육회 전문점 프라이빗 다이닝" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-black/20 to-transparent"></div>
              </div>
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h4 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors duration-500">
                    제비추리 그릴드 베지터블
                  </h4>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase">한우 제비추리와 8종 제철 채소의 그릴 향연</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70">₩49,000</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-3">
                부드러운 한우 제비추리와 엄선된 8종 채소를 그릴에 구워 고소함과 풍미를 극대화한 메뉴입니다. 
                채소 본연의 단맛과 그릴의 스모키한 풍미가 어우러져, 스파클링과 함께 즐기기 완벽한 핫 디쉬입니다.
              </p>
              <p class="text-off-white/30 text-xs font-light leading-relaxed mb-3">
                제비추리는 소의 갈비와 양지 사이에서 나오는 희귀 부위로, 한 마리당 소량만 얻을 수 있어 '숨은 보석'으로 불립니다. 
                부드러운 식감과 깊은 풍미가 특징이며, 지방과 살코기의 비율이 완벽해 그릴에 구웠을 때 육즙이 풍부하게 살아납니다.
                모든 재료는 올리브오일로 그릴에 구워져 나오며, 제비추리는 미디엄 레어로 정확하게 구워져 겉은 카라멜라이징 되어 고소하고, 속은 촉촉하게 육즙을 머금고 있습니다.
              </p>
              <div class="text-xs">
                <p class="text-off-white/25">
                  <span class="text-champagne/30 mr-2">재료</span>
                  한우 제비추리 · 파 · 방울양배추 · 아스파라거스 · 래디쉬 · 가지 · 미니당근 · 양송이버섯 · 브로콜리 · 올리브오일 · 소금 · 후추 · 타임 · 파슬리
                </p>
              </div>
            </div>
            
            {/* Menu Item 2: 치즈 셀렉션 */}
            <div class="animate-on-scroll group" style="animation-delay: 0.15s">
              <div class="relative aspect-[16/10] bg-soft-black overflow-hidden mb-6">
                <img 
                  src="/static/menu_cheese.jpg" 
                  alt="연남동 샴페인바 프리미엄 치즈 플레이트 - 홈대 데이트 장소 기념일 레스토랑" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-black/20 to-transparent"></div>
              </div>
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h4 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors duration-500">
                    치즈 셀렉션
                  </h4>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase">소믈리에가 큐레이팅한 6종 치즈 컬렉션</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70">₩36,000</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-3">
                샴페인바의 꽃이라 할 수 있는 치즈 셀렉션. 소믈리에가 직접 큐레이팅한 6종의 프리미엄 치즈를 한 플레이트에 담았습니다. 
                부드러운 연성 치즈부터 숙성된 경성 치즈까지, 다양한 맛과 텍스처를 경험할 수 있도록 구성했습니다.
              </p>
              <p class="text-off-white/30 text-xs font-light leading-relaxed mb-3">
                브리 치즈는 '치즈의 왕'이라 불리는 프랑스 대표 연성 치즈로, 크리미하고 버터 같은 풍미가 특징입니다. 
                8개월 숙성 콩테는 프랑스 경성 치즈의 정수로, 고소하고 견과류 같은 깊은 맛을 냅니다. 
                에멘탈은 특유의 구멍과 달콤한 풍미가 매력적입니다. 콜비잭은 부드럽고 마일드한 미국식 치즈로, 처음 치즈를 접하시는 분들도 편하게 즐기실 수 있습니다. 
                다피누아는 래핑 치즈로 제공되어 스푼으로 떠서 크래커에 올려 드시면 됩니다.
                치즈와 함께 스페인산 하몽, 이탈리아 제노아 살라미, 그린 올리브, 신선한 블루베리가 제공됩니다.
              </p>
              <div class="text-xs">
                <p class="text-off-white/25">
                  <span class="text-champagne/30 mr-2">재료</span>
                  브리 · 콩테 · 에멘탈 · 콜비잭 · 크림치즈 · 다피누아 · 하몽 · 살라미 · 그린 올리브 · 블루베리 · 크래커 · 로즈마리 · 파슬리
                </p>
              </div>
            </div>
            
            {/* Menu Item 3: 청양 오일 육회 */}
            <div class="animate-on-scroll group" style="animation-delay: 0.2s">
              <div class="relative aspect-[16/10] bg-soft-black overflow-hidden mb-6">
                <img 
                  src="/static/menu_yukhoe.jpg" 
                  alt="연남동 육회 맛집 청양오일육회 - 홍대 한우 육회 전문점 데이트 레스토랑" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-black/20 to-transparent"></div>
              </div>
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h4 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors duration-500">
                    청양 오일 육회
                  </h4>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase">전통 육회에 더한 매콤한 불꽃</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70">₩25,000</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-3">
                전통적인 한우 육회에 자체 제작 고추기름 소스의 매콤한 킥을 더한 메뉴입니다. 
                신선한 한우 육회 위에 직접 만든 고추기름 소스를 둘러, 기존 육회에서는 느낄 수 없었던 매콤하고 알싸한 풍미를 더했습니다.
              </p>
              <p class="text-off-white/30 text-xs font-light leading-relaxed mb-3">
                고추기름 소스는 ROWISM The Black에서 직접 만듭니다. 굵은 고춧가루와 파로 향을 낸 고추기름에 참기름, 연두, 설탕, 깨를 배합하여 매콤하면서도 고소한 특제 소스를 완성합니다.
                육회는 신선도가 가장 중요한 요리입니다. 매일 신선한 한우만을 엄선하여 사용하며, 주문 즉시 썰어 제공합니다. 
                육회 위에는 다진 마늘과 청양고추가 올라가 알싸한 풍미를 더하고, 정중앙에 신선한 노른자가 자리합니다. 
                노른자를 터뜨려 전체를 비벼 드시면 노른자의 고소함, 고추기름 소스의 매콤함, 한우의 담백함이 한데 어우러져 중독성 있는 맛을 만들어냅니다.
              </p>
              <div class="text-xs">
                <p class="text-off-white/25">
                  <span class="text-champagne/30 mr-2">재료</span>
                  한우 육회 · 고추기름 소스(자체 제작) · 청양고추 · 다진 마늘 · 노른자 · 실고추
                </p>
              </div>
            </div>
            
            {/* Menu Item 4: 아보카도 카프레제 */}
            <div class="animate-on-scroll group" style="animation-delay: 0.25s">
              <div class="relative aspect-[16/10] bg-soft-black overflow-hidden mb-6">
                <img 
                  src="/static/menu_caprese.jpg" 
                  alt="연남동 데이트 코스 아보카도 카프레제 - 홈대 분위기 좋은 샴페인바" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-black/20 to-transparent"></div>
              </div>
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h4 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors duration-500">
                    아보카도 카프레제
                  </h4>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase">클래식 카프레제의 현대적 재해석</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70">23,000</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-4">
                이탈리아 카프리 섬에서 유래한 카프레제에 아보카도와 블랙 올리브를 더해 더욱 크리미하게 재해석했습니다. 
                아보카도는 주문 후 바로 잘라 갈변 없이 신선하게 제공됩니다. 
                초록, 빨강, 하양, 검정의 색감 대비가 인스타그래머블한 플레이팅을 완성합니다.
              </p>
              <div class="space-y-2 text-xs">
                <p class="text-off-white/25">
                  <span class="text-champagne/30 mr-2">재료</span>
                  아보카도 · 미니 모짜렐라 · 대추방울토마토 · 블랙 올리브 · 발사믹 드레싱(자체 제작) · 바질
                </p>
                <p class="text-off-white/25">
                  <span class="text-champagne/30 mr-2">페어링</span>
                  프로세코 · 브뤼 스파클링 · 아스티 스푸만테
                </p>
              </div>
            </div>
            
            {/* Menu Item 5: 들기름 육회 메밀면 */}
            <div class="animate-on-scroll group md:col-span-2 lg:col-span-1 lg:col-start-1" style="animation-delay: 0.3s">
              <div class="relative aspect-[16/10] bg-soft-black overflow-hidden mb-6">
                <img 
                  src="/static/menu_memil.jpg" 
                  alt="연남동 맛집 들기름 육회 메밀면 - 홈대입구역 맛집 연트럴파크 근처" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-black/20 to-transparent"></div>
                <div class="absolute bottom-4 right-4">
                  <span class="text-[9px] tracking-[0.2em] text-off-white/60 uppercase bg-deep-black/70 px-2 py-1">
                    Finisher
                  </span>
                </div>
              </div>
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h4 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors duration-500">
                    들기름 육회 메밀면
                  </h4>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase">한 끼의 완벽한 마무리</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70">15,000</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-4">
                고객 설문에서 "의외로 가장 좋았던 메뉴"로 꼽힌 시그니처 마무리 메뉴입니다. 
                들기름에 쯔유, 식초, 설탕을 배합한 소스가 느끼하지 않고 상큼해서 식사 후에도 가볍게 즐길 수 있습니다.
                메밀면 위에 신선한 한우 육회, 향긋한 깻잎, 바삭한 조미김이 올라갑니다.
              </p>
              <div class="space-y-2 text-xs">
                <p class="text-off-white/25">
                  <span class="text-champagne/30 mr-2">재료</span>
                  메밀면 · 한우 육회 · 들기름 소스(자체 제작) · 깻잎 · 조미김 · 통깨 · 와사비
                </p>
                <p class="text-off-white/25">
                  <span class="text-champagne/30 mr-2">페어링</span>
                  청주 · 사케 · 매실주
                </p>
              </div>
            </div>
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
            <p class="text-off-white/40 text-sm font-light mt-4 max-w-lg mx-auto">
              ROWISM The Black에서 경험하실 특별한 여정
            </p>
          </div>
          
          <div class="relative">
            {/* Vertical Line */}
            <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-champagne/20 via-champagne/10 to-transparent transform md:-translate-x-1/2"></div>
            
            <div class="space-y-16 md:space-y-24">
              {[
                { time: "Arrival", icon: "🥂", title: "웰컴 스파클링", desc: "입장과 동시에 시작되는 특별한 환대. 엄선된 스파클링 와인 한 잔으로 저녁을 시작합니다." },
                { time: "Ambience", icon: "💡", title: "무드 라이팅", desc: "덴마크 루이스폴센 조명이 만드는 은은한 빛. 당신만을 위한 프라이빗한 공간이 펼쳐집니다. 8개 테이블 한정으로 여유로운 간격을 유지합니다." },
                { time: "Sound", icon: "🎵", title: "큐레이팅 뮤직", desc: "스위스 제네바 스피커를 통해 흐르는 감각적인 선율. 재즈, 보사노바, 어쿠스틱 등 대화와 어울리는 완벽한 볼륨으로 큐레이팅됩니다." },
                { time: "Finale", icon: "🍫", title: "고디바 피니시", desc: "달콤한 고디바 초콜릿과 함께 완벽한 여운. 특별한 밤의 마지막 선물로 잊지 못할 마무리를 선사합니다." },
              ].map((item, i) => (
                <div key={i} class={`flex flex-col md:flex-row items-start gap-8 md:gap-16 animate-on-scroll ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`} style={`animation-delay: ${i * 0.1}s`}>
                  <div class={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                    <span class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase">{item.time}</span>
                    <h3 class="font-playfair text-xl md:text-2xl text-off-white mt-3 mb-4"><span class="mr-2">{item.icon}</span>{item.title}</h3>
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

      {/* Section 7: Recommend - "이런 분께 추천드립니다" */}
      <section id="recommend" class="py-32 md:py-40 bg-soft-black/30">
        <div class="max-w-5xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">Recommendation</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">
              이런 분께 추천드립니다
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4 max-w-lg mx-auto">
              당신의 특별한 순간을 위한 공간
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { 
                title: "연남동 데이트", 
                icon: "💕",
                desc: "특별한 데이트를 원하는 커플", 
                detail: "홍대/연남동에서 평범하지 않은 데이트 코스를 찾으신다면. 분위기와 맛 모두를 원하는 커플에게 추천드립니다.",
                keywords: "연남동 데이트, 홍대 데이트, 연남동 커플 맛집"
              },
              { 
                title: "기념일 디너", 
                icon: "🎂",
                desc: "100일, 1주년, 생일을 축하하고 싶은 분", 
                detail: "기념일엔 특별한 장소에서. 프라이빗한 공간과 분위기 있는 조명, 샴페인이 어우러진 완벽한 기념일 디너를 경험하세요.",
                keywords: "연남동 기념일, 홍대 기념일 식당, 100일 기념"
              },
              { 
                title: "비즈니스 미팅", 
                icon: "💼",
                desc: "중요한 미팅이나 접대가 있는 분", 
                detail: "프라이빗한 공간, 품격 있는 음식, 세련된 서비스. 비즈니스 접대나 중요한 미팅에 적합한 분위기를 제공합니다.",
                keywords: "연남동 접대, 홍대 비즈니스 미팅"
              },
              { 
                title: "샴페인 & 스파클링", 
                icon: "🥂",
                desc: "좋은 샴페인과 음식의 페어링을 즐기시는 분", 
                detail: "소믈리에가 큐레이션한 프리미엄 샴페인과 스파클링 셀렉션. 한우 뭉티기와 샴페인의 완벽한 페어링을 경험해보세요.",
                keywords: "연남동 샴페인바, 홍대 샴페인바, 샴페인 페어링"
              },
              { 
                title: "미식 탐험가", 
                icon: "🍽️",
                desc: "새롭고 특별한 맛을 찾는 분", 
                detail: "당일 도축 온도체 한우 뭉티기, 부라타 치즈, 블랙 트러플의 조합. 어디서도 경험하지 못한 시그니처 요리를 만나보세요.",
                keywords: "연남동 맛집, 홍대 특별한 맛집, 한우 뭉티기"
              },
              { 
                title: "소중한 사람과 함께", 
                icon: "👨‍👩‍👧",
                desc: "부모님, 친구, 소중한 지인과의 식사", 
                detail: "부모님 생신, 오랜만에 만나는 친구, 감사한 분과의 식사. 격식 있으면서도 편안한 분위기에서 대화를 나누세요.",
                keywords: "연남동 부모님 모시고, 홍대 가족 식사, 연남동 지인 모임"
              },
              { 
                title: "혼자만의 시간", 
                icon: "🌙",
                desc: "나를 위한 특별한 저녁", 
                detail: "바 테이블에서 즐기는 조용한 저녁. 샴페인 한 잔과 함께 온전히 나를 위한 시간을 보내세요.",
                keywords: "연남동 혼밥, 홍대 혼술, 연남동 바 테이블"
              },
              { 
                title: "시즌 이벤트", 
                icon: "🎄",
                desc: "크리스마스, 발렌타인, 화이트데이", 
                detail: "특별한 시즌엔 더 특별하게. 크리스마스 디너, 발렌타인데이, 화이트데이를 분위기 있는 공간에서.",
                keywords: "연남동 크리스마스, 홍대 발렌타인데이, 연남동 화이트데이"
              },
              { 
                title: "연트럴파크 산책 후", 
                icon: "🌿",
                desc: "경의선숲길 산책 후 특별한 저녁", 
                detail: "연트럴파크, 경의선숲길 산책 후 완벽한 저녁 식사. 도보 2-3분 거리에서 분위기 있는 디너를 즐기세요.",
                keywords: "연트럴파크 맛집, 경의선숲길 맛집, 연남동 산책 후 식당"
              },
            ].map((item, i) => (
              <div key={i} class="bg-deep-black p-8 md:p-10 group hover:bg-soft-black/50 transition-all duration-700 animate-on-scroll" style={`animation-delay: ${i * 0.1}s`}>
                <span class="text-champagne/40 text-2xl">{item.icon}</span>
                <h3 class="font-playfair text-lg md:text-xl text-off-white mt-4 mb-2 group-hover:text-champagne transition-colors duration-500">
                  {item.title}
                </h3>
                <p class="text-off-white/60 text-sm font-light mb-3">{item.desc}</p>
                <p class="text-off-white/30 text-xs font-light leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Occasions - Special Moments */}
      <section class="py-32 md:py-40 bg-deep-black">
        <div class="max-w-5xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">Occasions</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">
              Special Moments
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4 max-w-lg mx-auto">
              소중한 순간을 더욱 특별하게
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-px bg-white/5">
            {[
              { title: "Anniversary", icon: "🎂", subtitle: "기념일", desc: "100일, 200일, 1주년, 생일, 결혼기념일. 평범하지 않은 기념일을 위한 특별한 공간.", event: "프라이빗 공간" },
              { title: "Date", icon: "💕", subtitle: "데이트", desc: "특별한 하루를 만들고 싶은 날. 프라이빗한 분위기와 은은한 조명이 만드는 로맨틱한 공간에서.", event: "로맨틱한 분위기" },
              { title: "Celebration", icon: "🎉", subtitle: "축하", desc: "승진, 합격, 계약 성사, 취업. 축하받아 마땅한 모든 순간에 샴페인과 함께 건배하세요.", event: "웰컴 샴페인 서비스" },
              { title: "Private", icon: "🌙", subtitle: "프라이빗", desc: "오늘 하루만큼은 나를 위한 특별한 시간. 혼자만의 여유 또는 소중한 사람과의 프라이빗한 저녁.", event: "조용한 코너석" },
            ].map((item, i) => (
              <div key={i} class="bg-deep-black p-10 md:p-14 group hover:bg-soft-black/50 transition-all duration-700 animate-on-scroll" style={`animation-delay: ${i * 0.1}s`}>
                <span class="text-[10px] tracking-[0.3em] text-champagne/30 uppercase">{item.title}</span>
                <h3 class="font-playfair text-xl md:text-2xl text-off-white mt-4 mb-2 group-hover:text-champagne transition-colors duration-500">
                  <span class="mr-2">{item.icon}</span>{item.subtitle}
                </h3>
                <p class="text-off-white/40 text-sm font-light leading-relaxed mb-3">{item.desc}</p>
                <p class="text-champagne/40 text-xs tracking-wide">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Location - Enhanced */}
      <section id="location" class="py-32 md:py-40 bg-soft-black/30">
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
                  <p class="text-off-white/50 text-sm mt-1">(연남동 XXX-XX)</p>
                  <p class="text-off-white/40 text-xs mt-2">연트럴파크 인근 · 경의선숲길 도보 3분</p>
                  <p class="text-off-white/30 text-xs mt-1">우편번호: 04030</p>
                </div>
                
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2">Access</p>
                  <p class="text-off-white/80 font-light">지하철 2호선 홍대입구역 3번 출구</p>
                  <p class="text-off-white/40 text-sm mt-1">도보 약 5분 (400m)</p>
                  <p class="text-off-white/30 text-xs mt-2">경의중앙선 · 공항철도 홍대입구역 도보 7분</p>
                  <p class="text-off-white/25 text-xs mt-1">합정역에서 도보 12분 · 망원역에서 도보 15분</p>
                </div>
                
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2">Hours</p>
                  <p class="text-off-white/80 font-light">화요일 - 일요일</p>
                  <p class="text-off-white/60 text-sm">18:00 - 24:00</p>
                  <p class="text-off-white/40 text-sm mt-1">Last Order 22:30</p>
                  <p class="text-champagne/40 text-xs mt-2">매주 월요일 휴무</p>
                </div>
                
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2">Parking</p>
                  <p class="text-off-white/80 font-light">인근 공영주차장 이용</p>
                  <p class="text-off-white/40 text-sm mt-1">연남동 공영주차장 (도보 3분)</p>
                  <p class="text-off-white/30 text-xs mt-1">홍대입구역 환승주차장 이용 가능</p>
                </div>
                
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2">Nearby Landmarks</p>
                  <p class="text-off-white/40 text-sm">연트럴파크 도보 2분</p>
                  <p class="text-off-white/40 text-sm">경의선숲길 도보 3분</p>
                  <p class="text-off-white/40 text-sm">동진시장 도보 3분</p>
                  <p class="text-off-white/40 text-sm">홍대 걷고싶은거리 도보 8분</p>
                  <p class="text-off-white/30 text-xs mt-2">서교동 · 합정동 · 망원동 인접</p>
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
              <div class="mt-6 flex gap-4">
                <a href="https://map.naver.com/" target="_blank" rel="noopener noreferrer" 
                   class="flex-1 py-3 border border-white/10 text-center text-off-white/50 text-xs hover:border-champagne/30 hover:text-champagne transition-all duration-300">
                  네이버 지도
                </a>
                <a href="https://map.kakao.com/" target="_blank" rel="noopener noreferrer" 
                   class="flex-1 py-3 border border-white/10 text-center text-off-white/50 text-xs hover:border-champagne/30 hover:text-champagne transition-all duration-300">
                  카카오맵
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Customer Reviews */}
      <section id="reviews" class="py-32 md:py-40 bg-soft-black">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">Reviews</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">
              고객 후기
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4">
              ROWISM The Black을 경험하신 분들의 이야기
            </p>
            <div class="flex items-center justify-center gap-2 mt-6">
              <div class="flex text-champagne">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} class="text-xl">{star}</span>
                ))}
              </div>
              <span class="text-2xl font-playfair text-champagne">4.9</span>
              <span class="text-off-white/40 text-sm">(127개의 리뷰)</span>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "김지현",
                date: "2026.01.28",
                rating: 5,
                badge: "100일 기념",
                review: "남자친구와 100일 기념으로 방문했어요. 뭉티기가 정말 입에서 녹더라고요! 당일 도축이라 그런지 식감이 완전 달랐어요. 샴페인도 추천해주셔서 페어링이 완벽했습니다. 조명도 은은하고 분위기 최고예요 💕"
              },
              {
                name: "박준영", 
                date: "2026.01.25",
                rating: 5,
                badge: "데이트",
                review: "홍대 근처 데이트 코스 찾다가 발견했는데 대박이에요. 8테이블이라 프라이빗하고, 뭉티기 위에 트러플 갈아주는 거 너무 멋있었어요. 여자친구가 완전 좋아했습니다!"
              },
              {
                name: "이소연",
                date: "2026.01.20", 
                rating: 5,
                badge: "재방문",
                review: "연남동 맛집 많이 다녀봤는데 여긴 진짜 다릅니다. 뭉티기가 뭔지 처음 알았는데, 육회랑 완전 다른 식감이에요. 부라타 치즈랑 같이 먹으면 미쳐요 🧀"
              },
              {
                name: "최민수",
                date: "2026.01.15",
                rating: 5,
                badge: "생일",
                review: "와이프 생일에 예약했습니다. 웰컴 스파클링부터 마지막 고디바 초콜릿까지 세심한 서비스에 감동받았어요. 제비추리 그릴드도 육즙이 살아있어서 완벽했어요!"
              },
              {
                name: "정하윤",
                date: "2026.01.10",
                rating: 5,
                badge: "연트럴파크",
                review: "연트럴파크 산책하고 저녁 먹을 곳 찾다가 왔어요. 분위기가 정말 좋고, 음악도 대화하기 딱 좋은 볼륨이에요. 청양 오일 육회 매콤한 거 좋아하시면 꼭 드셔보세요 🔥"
              },
              {
                name: "강태우",
                date: "2026.01.05",
                rating: 5,
                badge: "1주년",
                review: "결혼 1주년 기념으로 방문. 덴마크 루이스폴센 조명이라니, 디테일에 감탄했습니다. 뭉티기 + 샴페인 조합 인생 최고의 페어링이에요. 내년에도 꼭 올게요!"
              }
            ].map((item, i) => (
              <div key={i} class="bg-deep-black/50 border border-white/5 p-6 rounded-sm animate-on-scroll hover:border-champagne/20 transition-all duration-500" style={`animation-delay: ${i * 0.1}s`}>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-champagne/20 flex items-center justify-center text-champagne font-medium">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p class="text-off-white font-medium text-sm">{item.name}</p>
                      <p class="text-off-white/30 text-xs">{item.date}</p>
                    </div>
                  </div>
                  <span class="text-[10px] px-2 py-1 bg-champagne/10 text-champagne rounded-sm">{item.badge}</span>
                </div>
                <div class="flex text-champagne text-sm mb-3">
                  {'★'.repeat(item.rating)}
                </div>
                <p class="text-off-white/70 text-sm leading-relaxed">{item.review}</p>
              </div>
            ))}
          </div>
          
          <div class="text-center mt-12 animate-on-scroll">
            <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-2 text-champagne/70 hover:text-champagne text-sm transition-colors">
              더 많은 후기 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* Section 11: FAQ - Expanded for SEO */}
      <section id="faq" class="py-32 md:py-40 bg-deep-black">
        <div class="max-w-3xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">FAQ</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide">
              자주 묻는 질문
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4 max-w-lg mx-auto">
              연남동 샴페인바 ROWISM The Black에 대해 궁금하신 점을 확인하세요
            </p>
          </div>
          
          <div class="space-y-0 border-t border-white/5">
            {[
              { 
                q: "예약 없이 방문해도 되나요?", 
                a: "ROWISM The Black은 예약제로 운영됩니다. 8개 테이블 한정으로 운영되며, 특히 금요일, 토요일, 기념일에는 예약이 필수입니다. 네이버 예약을 통해 예약 가능하며, 최소 2-3일 전 예약을 권장드립니다." 
              },
              { 
                q: "2인 방문 시 예상 금액은 얼마인가요?", 
                a: "2인 기준 평균 객단가는 약 18만원입니다. 시그니처 뭉티기(92,000원) + 사이드 메뉴 + 샴페인 1병 구성을 추천드리며, 좀 더 가볍게 즐기시려면 스파클링 와인과 함께 10-12만원대로도 이용 가능합니다. 특별한 기념일이라면 프리미엄 샴페인과 함께 20-25만원 정도의 코스를 추천드립니다." 
              },
              { 
                q: "뭉티기가 뭔가요?", 
                a: "뭉티기는 당일 도축한 온도체 한우를 신선한 상태 그대로 얇게 저며 즐기는 대구의 보물 같은 음식입니다. 아침에 도축된 한우가 체온이 남아있는 상태로 바로 손질되어, 일반 냉장 숙성육에서는 절대 느낄 수 없는 부드러움과 생생한 육향을 선사합니다. 양념 없이 고기 본연의 달콤함과 감칠맛을 느끼는 것이 포인트예요. ROWISM에서는 크리미한 이탈리아 부라타 치즈, 향긋한 블랙 트러플과 함께 제공하여 전통과 모던의 완벽한 조화를 경험하실 수 있습니다." 
              },
              
              { 
                q: "연남동 샴페인바 ROWISM의 위치는 어디인가요?", 
                a: "ROWISM The Black은 서울 마포구 동교로 262-4에 위치해 있습니다. 지하철 2호선 홍대입구역 3번 출구에서 도보 5분(약 400m) 거리이며, 연트럴파크 인근 연남동 골목에 자리하고 있습니다. 경의중앙선 홍대입구역에서도 도보 7분 거리입니다." 
              },
              { 
                q: "주차는 어떻게 하나요?", 
                a: "매장 내 주차 공간은 없으며, 인근 공영주차장 이용을 권장드립니다. 연남동 공영주차장(도보 3분)이 가장 가깝고, 홍대입구역 환승주차장도 이용 가능합니다. 대중교통 이용을 권장드리며, 샴페인을 드실 예정이라면 대리운전을 이용해 주세요." 
              },
              { 
                q: "영업시간과 휴무일이 어떻게 되나요?", 
                a: "화요일부터 일요일까지 18:00 - 24:00 영업하며, 라스트오더는 22:30입니다. 매주 월요일은 정기 휴무입니다. 명절이나 특별 휴무일은 인스타그램 또는 네이버 플레이스에서 공지해 드립니다." 
              },
              
              { 
                q: "단체 예약도 가능한가요?", 
                a: "ROWISM The Black은 프라이빗한 분위기 유지를 위해 최대 8인까지 예약을 받고 있습니다. 그 이상의 단체는 별도 문의해 주시면 가능 여부를 안내드리겠습니다. 대관은 불가하며, 조용한 분위기에서의 소규모 모임에 적합합니다." 
              },
              { 
                q: "아이 동반 방문이 가능한가요?", 
                a: "ROWISM The Black은 성인 고객을 위한 프리미엄 샴페인바로, 만 18세 미만 고객의 입장은 정중히 사양하고 있습니다. 성인 동반 여부와 관계없이 아동 및 청소년의 입장이 어려운 점 양해 부탁드립니다." 
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
                <div class="faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;">
                  <p class="text-off-white/40 text-sm font-light leading-relaxed pr-12 pb-8">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: CTA */}
      <section id="reserve" class="py-32 md:py-40 bg-soft-black/30 relative overflow-hidden">
        {/* Subtle Background */}
        <div class="absolute inset-0 bg-gradient-to-r from-champagne/5 via-transparent to-champagne/5"></div>
        
        <div class="relative max-w-3xl mx-auto px-8 md:px-12 text-center">
          <div class="animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-6">Reservation</p>
            <h2 class="font-playfair text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6">
              특별한 밤을 예약하세요
            </h2>
            <p class="text-off-white/40 text-sm font-light mb-8 max-w-md mx-auto">
              연남동 프리미엄 샴페인바 ROWISM The Black에서<br/>
              잊지 못할 순간을 만들어 드립니다
            </p>
            <p class="text-off-white/30 text-xs mb-16">
              금요일·토요일·기념일은 최소 3일 전 예약을 권장드립니다
            </p>
            
            <div class="flex justify-center">
              <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer" 
                 class="group px-16 py-4 bg-champagne hover:bg-champagne/90 transition-all duration-500 inline-flex items-center justify-center gap-3">
                <svg class="w-4 h-4 text-deep-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
                <span class="text-[11px] tracking-[0.2em] uppercase text-deep-black font-medium">네이버 예약</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-20 bg-deep-black border-t border-white/5">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <div class="grid md:grid-cols-3 gap-16 mb-16">
            {/* Brand */}
            <div>
              <h3 class="font-playfair text-lg tracking-[0.3em] mb-6">ROWISM</h3>
              <p class="text-[10px] tracking-[0.3em] text-off-white/30 uppercase mb-4">The Black</p>
              <p class="text-off-white/30 text-xs font-light leading-relaxed">
                날것의 철학으로,<br/>당신의 특별한 밤을 위해.
              </p>
              <p class="text-off-white/20 text-[10px] mt-4 leading-relaxed">
                연남동 프리미엄 샴페인바<br/>
                홍대입구역 도보 5분
              </p>
            </div>
            
            {/* Contact */}
            <div>
              <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-6">Contact</p>
              <div class="space-y-3 text-off-white/40 text-xs font-light">
                <p>서울 마포구 동교로 262-4</p>
                <p>화 - 일 18:00 - 24:00</p>
                <p>월요일 휴무</p>
                <p class="pt-2">
                  <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer" class="hover:text-champagne transition-colors">
                    네이버 예약으로 예약하기
                  </a>
                </p>
              </div>
            </div>
            
            {/* Social */}
            <div>
              <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-6">Follow</p>
              <div class="flex gap-6 mb-6">
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
              <div class="space-y-2">
                <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer" 
                   class="block text-off-white/30 text-xs hover:text-champagne transition-colors">
                  네이버 예약
                </a>
                <a href="https://map.naver.com/" target="_blank" rel="noopener noreferrer" 
                   class="block text-off-white/30 text-xs hover:text-champagne transition-colors">
                  네이버 플레이스
                </a>
              </div>
            </div>
          </div>
          
          <div class="pt-8 border-t border-white/5 text-center">
            <p class="text-off-white/15 text-[10px] tracking-[0.3em]">
              © 2024 ROWISM The Black
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Fixed CTA */}
      <div class="fixed bottom-0 left-0 right-0 lg:hidden bg-deep-black/98 backdrop-blur-xl border-t border-white/5 p-4 z-50">
        <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer" class="block w-full py-3 bg-champagne text-deep-black text-center text-[11px] tracking-[0.2em] uppercase font-medium">
          예약하기
        </a>
      </div>
    </div>
  )
})

export default app
