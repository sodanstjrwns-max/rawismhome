import { Hono } from 'hono'
import { createRenderer } from './renderer'
import { createMenuRenderer } from './renderers/menuRenderer'
import { createAboutRenderer } from './renderers/aboutRenderer'
import { MenuPage } from './pages/MenuPage'
import { AboutPage } from './pages/AboutPage'

const app = new Hono()

// Language types
type Language = 'ko' | 'en' | 'ja' | 'zh'

// Get URL path for a language
function getLangPath(lang: Language): string {
  return lang === 'ko' ? '/' : `/${lang}`
}

// Page content component - shared across all language routes
function PageContent({ lang }: { lang: Language }) {
  const koPath = '/'
  const enPath = '/en'
  const jaPath = '/ja'
  const zhPath = '/zh'
  
  // Determine which language is active
  const isKo = lang === 'ko'
  const isEn = lang === 'en'
  const isJa = lang === 'ja'
  const isZh = lang === 'zh'
  
  // Base path for internal links (e.g., #menu -> /ja#menu for Japanese)
  const basePath = getLangPath(lang)
  
  return (
    <div class="overflow-x-hidden">
      {/* Navigation */}
      <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-transparent">
        <div class="max-w-7xl mx-auto px-8 md:px-12 py-6 flex justify-between items-center">
          <a href={`${basePath}#hero`} class="group">
            <img 
              src="/static/logo.png" 
              alt="RAWISM The Black" 
              class="h-8 md:h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
          </a>
          <div class="hidden lg:flex items-center gap-8">
            <a href={`${basePath}#philosophy`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500" data-i18n="nav.philosophy">Philosophy</a>
            <a href={`${basePath}#menu`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500" data-i18n="nav.menu">Menu</a>
            <a href={`${basePath}#recommend`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500" data-i18n="nav.recommend">추천</a>
            <a href={`${basePath}#location`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500" data-i18n="nav.location">Location</a>
            <a href={`${basePath}#reserve`} class="text-[11px] tracking-[0.25em] uppercase text-champagne border-b border-champagne/30 pb-1 hover:border-champagne transition-colors duration-500" data-i18n="nav.reservation">
              Reservation
            </a>
            {/* Language Selector - URL-based navigation for SEO */}
            <div class="flex items-center gap-1 ml-4 border-l border-white/10 pl-4">
              <a href={koPath} data-lang="ko" class={`lang-btn text-[13px] px-2 py-1 rounded transition-all hover:bg-white/5 ${isKo ? 'text-champagne border-b border-champagne' : 'text-off-white/50 border-b border-transparent'}`} title="한국어">🇰🇷</a>
              <a href={enPath} data-lang="en" class={`lang-btn text-[13px] px-2 py-1 rounded transition-all hover:bg-white/5 ${isEn ? 'text-champagne border-b border-champagne' : 'text-off-white/50 border-b border-transparent'}`} title="English">🇺🇸</a>
              <a href={jaPath} data-lang="ja" class={`lang-btn text-[13px] px-2 py-1 rounded transition-all hover:bg-white/5 ${isJa ? 'text-champagne border-b border-champagne' : 'text-off-white/50 border-b border-transparent'}`} title="日本語">🇯🇵</a>
              <a href={zhPath} data-lang="zh" class={`lang-btn text-[13px] px-2 py-1 rounded transition-all hover:bg-white/5 ${isZh ? 'text-champagne border-b border-champagne' : 'text-off-white/50 border-b border-transparent'}`} title="中文">🇨🇳</a>
            </div>
          </div>
          {/* Mobile: Language + Menu */}
          <div class="lg:hidden flex items-center gap-3">
            {/* Mobile Language Flags - URL-based navigation */}
            <div class="flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 backdrop-blur-sm">
              <a href={koPath} data-lang="ko" class={`lang-btn text-[16px] w-7 h-7 flex items-center justify-center rounded-full transition-all hover:bg-white/10 active:scale-95 ${isKo ? '' : 'opacity-50'}`} title="한국어">🇰🇷</a>
              <a href={enPath} data-lang="en" class={`lang-btn text-[16px] w-7 h-7 flex items-center justify-center rounded-full transition-all hover:bg-white/10 active:scale-95 ${isEn ? '' : 'opacity-50'}`} title="English">🇺🇸</a>
              <a href={jaPath} data-lang="ja" class={`lang-btn text-[16px] w-7 h-7 flex items-center justify-center rounded-full transition-all hover:bg-white/10 active:scale-95 ${isJa ? '' : 'opacity-50'}`} title="日本語">🇯🇵</a>
              <a href={zhPath} data-lang="zh" class={`lang-btn text-[16px] w-7 h-7 flex items-center justify-center rounded-full transition-all hover:bg-white/10 active:scale-95 ${isZh ? '' : 'opacity-50'}`} title="中文">🇨🇳</a>
            </div>
            {/* Hamburger Menu Button */}
            <button id="mobile-menu-btn" class="text-off-white/70 hover:text-off-white transition-colors p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path d="M4 8h16M4 16h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" class="hidden lg:hidden bg-deep-black/98 backdrop-blur-xl">
          <div class="px-8 py-8 flex flex-col gap-6">
            <a href={`${basePath}#philosophy`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2" data-i18n="nav.philosophy">Philosophy</a>
            <a href={`${basePath}#menu`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2" data-i18n="nav.menu">Menu</a>
            <a href={`${basePath}#recommend`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2" data-i18n="nav.recommend">추천</a>
            <a href={`${basePath}#location`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2" data-i18n="nav.location">Location</a>
            <div class="pt-4 border-t border-white/5">
              <a href={`${basePath}#reserve`} class="text-[11px] tracking-[0.25em] uppercase text-champagne" data-i18n="nav.reservation">Reservation</a>
            </div>
            {/* Mobile Language Selector - URL-based */}
            <div class="pt-4 border-t border-white/5 flex items-center gap-3">
              <span class="text-[10px] text-off-white/30 uppercase tracking-wider">Language:</span>
              <a href={koPath} data-lang="ko" class={`lang-btn text-[15px] px-2 py-1 rounded transition-all ${isKo ? 'text-champagne' : 'text-off-white/50'}`} title="한국어">🇰🇷</a>
              <a href={enPath} data-lang="en" class={`lang-btn text-[15px] px-2 py-1 rounded transition-all ${isEn ? 'text-champagne' : 'text-off-white/50'}`} title="English">🇺🇸</a>
              <a href={jaPath} data-lang="ja" class={`lang-btn text-[15px] px-2 py-1 rounded transition-all ${isJa ? 'text-champagne' : 'text-off-white/50'}`} title="日本語">🇯🇵</a>
              <a href={zhPath} data-lang="zh" class={`lang-btn text-[15px] px-2 py-1 rounded transition-all ${isZh ? 'text-champagne' : 'text-off-white/50'}`} title="中文">🇨🇳</a>
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
            <p class="text-[10px] md:text-[11px] tracking-[0.5em] text-champagne/60 mb-10 uppercase font-light" data-i18n="hero.subtitle">
              연남동 프리미엄 샴페인 라운지
            </p>
            
            {/* Logo Image */}
            <div class="mb-12">
              <img 
                src="/static/logo.png" 
                alt="RAWISM The Black" 
                class="w-64 md:w-80 lg:w-96 mx-auto"
              />
            </div>
            
            <p class="font-noto-serif text-sm md:text-base text-off-white/60 font-light tracking-wider max-w-md mx-auto leading-relaxed" data-i18n="hero.description">
              당일 도축 온도체 한우 뭉티기와 샴페인이 만나는 곳
            </p>
            
            <p class="font-noto-serif text-xs text-off-white/40 font-light tracking-wider mt-4" data-i18n="hero.keywords">
              트러플 한우 뭉티기 · 샴페인 & 스파클링 · 프라이빗 다이닝
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <div class="flex flex-col items-center gap-3 opacity-40 hover:opacity-70 transition-opacity cursor-pointer">
              <span class="text-[9px] tracking-[0.3em] uppercase text-off-white/50" data-i18n="hero.scroll">Scroll</span>
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
              <span data-i18n="quote.line1">날것의 철학,</span> <span class="text-champagne">RAW</span>ism.<br/>
              <span class="text-off-white/50" data-i18n="quote.line2">최상급 재료를 가장 순수한 방식으로.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Pain Points - Target Customer */}
      <section class="py-24 md:py-32 bg-soft-black/50">
        <div class="max-w-5xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">The Question</p>
            <h2 class="font-playfair text-2xl md:text-3xl font-light tracking-wide" data-i18n="question.title">
              오늘, 특별한 밤을 원하신다면
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4 max-w-lg mx-auto" data-i18n="question.subtitle">
              연남동 데이트, 홍대 기념일 장소를 찾고 계신가요?
            </p>
          </div>
          
          <div id="occasions-items-container" class="grid md:grid-cols-2 gap-px bg-white/5">
            <div class="bg-deep-black p-10 md:p-12 animate-on-scroll">
              <p class="text-off-white/60 font-light text-sm md:text-base leading-relaxed" data-i18n="question.items.0">✨ 분위기와 맛, 모두를 원할 때</p>
            </div>
            <div class="bg-deep-black p-10 md:p-12 animate-on-scroll" style="animation-delay: 0.1s">
              <p class="text-off-white/60 font-light text-sm md:text-base leading-relaxed" data-i18n="question.items.1">🍾 평범한 레스토랑이 아닌 곳을 찾을 때</p>
            </div>
            <div class="bg-deep-black p-10 md:p-12 animate-on-scroll" style="animation-delay: 0.2s">
              <p class="text-off-white/60 font-light text-sm md:text-base leading-relaxed" data-i18n="question.items.2">💑 둘만의 프라이빗한 시간이 필요할 때</p>
            </div>
            <div class="bg-deep-black p-10 md:p-12 animate-on-scroll" style="animation-delay: 0.3s">
              <p class="text-off-white/60 font-light text-sm md:text-base leading-relaxed" data-i18n="question.items.3">🎁 기억에 남을 경험을 선물하고 싶을 때</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Philosophy - Brand Story Enhanced */}
      <section id="philosophy" class="py-32 md:py-40 bg-deep-black relative">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Text */}
            <div class="animate-on-scroll">
              <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-6" data-i18n="philosophy.label">Our Philosophy</p>
              <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide mb-8 leading-snug">
                <span data-i18n="philosophy.titleLine1">날것의 미학,</span><br/>
                <span class="text-champagne" data-i18n="philosophy.title">ROWISM</span>
              </h2>
              <div class="space-y-6 text-off-white/50 font-light text-sm md:text-base leading-relaxed">
                <p>
                  <strong class="text-off-white/80" data-i18n="philosophy.p1Title">RAW와 ism의 결합.</strong> <span data-i18n="philosophy.p1Text">로위즘(ROWISM)은 '날것'을 뜻하는 RAW와 '주의·철학'을 의미하는 ism을 결합한 이름입니다. 우리는 최상급 재료 본연의 맛을 가장 순수한 방식으로 전달하는 것을 철학으로 삼습니다.</span>
                </p>
                <p>
                  <strong class="text-off-white/80" data-i18n="philosophy.p2Title">연남동 프리미엄 샴페인바.</strong> <span data-i18n="philosophy.p2Text">홍대입구역에서 도보 5분, 연남동 골목 속에 자리한 ROWISM The Black은 최상급 한우 뭉티기에 이탈리아 부라타 치즈, 블랙 트러플, 파르미지아노 레지아노가 만나는 시그니처 요리를 선보입니다.</span>
                </p>
                <p>
                  <strong class="text-off-white/80" data-i18n="philosophy.p3Title">8개의 프라이빗 테이블.</strong> <span data-i18n="philosophy.p3Text">루이스폴센의 은은한 조명, 제네바 스피커가 전하는 큐레이팅된 선율. ROWISM The Black은 단순한 샴페인바가 아닌, 감각의 경험을 디자인하는 연남동 다이닝 공간입니다.</span>
                </p>
              </div>
            </div>
            
            {/* Right - Features */}
            <div class="grid grid-cols-2 gap-px bg-white/5">
              <div class="bg-deep-black p-8 md:p-10 group hover:bg-soft-black/30 transition-all duration-500 animate-on-scroll">
                <span class="text-[10px] text-champagne/30 tracking-widest">01</span>
                <h3 class="font-playfair text-base md:text-lg mt-4 mb-2 text-off-white/90 group-hover:text-champagne transition-colors duration-500" data-i18n="philosophy.features.0.title">Signature Tartare</h3>
                <p class="text-[11px] text-off-white/40 tracking-wide" data-i18n="philosophy.features.0.desc">트러플 한우 뭉티기</p>
                <p class="text-[10px] text-off-white/25 mt-2" data-i18n="philosophy.features.0.detail">최상급 한우 + 트러플</p>
              </div>
              <div class="bg-deep-black p-8 md:p-10 group hover:bg-soft-black/30 transition-all duration-500 animate-on-scroll" style="animation-delay: 0.1s">
                <span class="text-[10px] text-champagne/30 tracking-widest">02</span>
                <h3 class="font-playfair text-base md:text-lg mt-4 mb-2 text-off-white/90 group-hover:text-champagne transition-colors duration-500" data-i18n="philosophy.features.1.title">Champagne & Sparkling</h3>
                <p class="text-[11px] text-off-white/40 tracking-wide" data-i18n="philosophy.features.1.desc">소믈리에 큐레이션</p>
                <p class="text-[10px] text-off-white/25 mt-2" data-i18n="philosophy.features.1.detail">프리미엄 샴페인 & 스파클링</p>
              </div>
              <div class="bg-deep-black p-8 md:p-10 group hover:bg-soft-black/30 transition-all duration-500 animate-on-scroll" style="animation-delay: 0.2s">
                <span class="text-[10px] text-champagne/30 tracking-widest">03</span>
                <h3 class="font-playfair text-base md:text-lg mt-4 mb-2 text-off-white/90 group-hover:text-champagne transition-colors duration-500" data-i18n="philosophy.features.2.title">Private Space</h3>
                <p class="text-[11px] text-off-white/40 tracking-wide" data-i18n="philosophy.features.2.desc">8석 한정 운영</p>
                <p class="text-[10px] text-off-white/25 mt-2" data-i18n="philosophy.features.2.detail">예약제 프라이빗 다이닝</p>
              </div>
              <div class="bg-deep-black p-8 md:p-10 group hover:bg-soft-black/30 transition-all duration-500 animate-on-scroll" style="animation-delay: 0.3s">
                <span class="text-[10px] text-champagne/30 tracking-widest">04</span>
                <h3 class="font-playfair text-base md:text-lg mt-4 mb-2 text-off-white/90 group-hover:text-champagne transition-colors duration-500" data-i18n="philosophy.features.3.title">Sensory Design</h3>
                <p class="text-[11px] text-off-white/40 tracking-wide" data-i18n="philosophy.features.3.desc">오감의 경험 설계</p>
                <p class="text-[10px] text-off-white/25 mt-2" data-i18n="philosophy.features.3.detail">조명·음악·서비스</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Menu - Premium with Photos */}
      <section id="menu" class="py-32 md:py-40 bg-soft-black/30">
        <div class="max-w-6xl mx-auto px-8 md:px-12">
          <div class="text-center mb-24 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4" data-i18n="menu.label">Menu</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide" data-i18n="menu.title">
              Signature Collection
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4 max-w-lg mx-auto" data-i18n="menu.subtitle">
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
                  <span class="text-[9px] tracking-[0.3em] text-champagne/80 uppercase bg-deep-black/70 px-3 py-1" data-i18n="menu.signature.badge">
                    Signature
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div class="bg-deep-black p-10 lg:p-14 flex flex-col justify-center">
                <div class="mb-6">
                  <div class="flex justify-between items-start">
                    <h3 class="font-playfair text-2xl md:text-3xl text-off-white mb-2" data-i18n="menu.signature.name">
                      로위즘 뭉티기 시그니처
                    </h3>
                    <span class="font-playfair text-2xl text-champagne" data-i18n="menu.signature.price">₩92,000</span>
                  </div>
                  <p class="text-champagne/60 text-sm tracking-wide" data-i18n="menu.signature.description">
                    ROWISM의 철학을 담은 시그니처 메뉴
                  </p>
                </div>
                
                <div class="space-y-4 mb-6">
                  <p class="text-off-white/50 text-sm font-light leading-relaxed" data-i18n="menu.signature.story">
                    로위즘 뭉티기 시그니처는 ROWISM The Black의 정체성을 가장 잘 보여주는 대표 메뉴입니다.
                  </p>
                  <div class="border-l-2 border-champagne/20 pl-4 my-4">
                    <p class="text-champagne/50 text-xs font-medium mb-2" data-i18n="menu.signature.whatIsTitle">뭉티기란?</p>
                    <p class="text-off-white/35 text-xs font-light leading-relaxed" data-i18n="menu.signature.whatIsText">
                      뭉티기는 한우를 얇게 저며 썬 후 별도의 양념 없이 그대로 즐기는 전통 요리입니다.
                    </p>
                  </div>
                  <div class="border-l-2 border-champagne/20 pl-4">
                    <p class="text-champagne/50 text-xs font-medium mb-2" data-i18n="menu.signature.harmonyTitle">프리미엄 재료의 완벽한 조화</p>
                    <p class="text-off-white/35 text-xs font-light leading-relaxed" data-i18n="menu.signature.harmonyText">
                      로위즘 뭉티기 시그니처 위에는 이탈리아산 부라타 치즈가 통째로 올라갑니다.
                    </p>
                  </div>
                </div>
                
                <div class="border-t border-white/5 pt-5">
                  <p class="text-[10px] tracking-[0.2em] text-champagne/40 uppercase mb-2" data-i18n="menu.ingredientsLabel">Ingredients</p>
                  <p class="text-off-white/30 text-xs leading-relaxed" data-i18n="menu.signature.ingredients">
                    한우 뭉티기 · 부라타 치즈 · 블랙 트러플 · 파르미지아노 레지아노 · 소금 · 후추
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Menu Items - Card Grid with Photos */}
          <div id="menu-items-container" class="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Menu Item 1: 제비추리 */}
            <div class="animate-on-scroll group" style="animation-delay: 0.1s" data-menu-item="0">
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
                  <h4 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors duration-500" data-menu-name>
                    제비추리 그릴드 베지터블
                  </h4>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase" data-menu-desc>한우 제비추리와 8종 제철 채소의 그릴 향연</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70" data-menu-price>₩49,000</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-3" data-menu-detail>
                부드러운 한우 제비추리와 엄선된 8종 채소를 그릴에 구워 고소함과 풍미를 극대화한 메뉴입니다. 
                채소 본연의 단맛과 그릴의 스모키한 풍미가 어우러져, 스파클링과 함께 즐기기 완벽한 핫 디쉬입니다.
              </p>
              <div class="text-xs">
                <p class="text-off-white/25">
                  <span class="text-champagne/30 mr-2" data-i18n="menu.ingredientsLabel">재료</span>
                  <span data-menu-ingredients>한우 제비추리 · 파 · 방울양배추 · 아스파라거스 · 래디쉬 · 가지 · 미니당근 · 양송이버섯 · 브로콜리</span>
                </p>
              </div>
            </div>
            
            {/* Menu Item 2: 치즈 셀렉션 */}
            <div class="animate-on-scroll group" style="animation-delay: 0.15s" data-menu-item="1">
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
                  <h4 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors duration-500" data-menu-name>
                    치즈 셀렉션
                  </h4>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase" data-menu-desc>소믈리에가 큐레이팅한 6종 치즈 컬렉션</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70" data-menu-price>₩36,000</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-3" data-menu-detail>
                샴페인바의 꽃이라 할 수 있는 치즈 셀렉션. 소믈리에가 직접 큐레이팅한 6종의 프리미엄 치즈를 한 플레이트에 담았습니다.
              </p>
              <div class="text-xs">
                <p class="text-off-white/25">
                  <span class="text-champagne/30 mr-2" data-i18n="menu.ingredientsLabel">재료</span>
                  <span data-menu-ingredients>브리 · 콩테 · 에멘탈 · 콜비잭 · 크림치즈 · 다피누아 · 하몽 · 살라미 · 그린 올리브 · 블루베리</span>
                </p>
              </div>
            </div>
            
            {/* Menu Item 3: 청양 오일 육회 */}
            <div class="animate-on-scroll group" style="animation-delay: 0.2s" data-menu-item="2">
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
                  <h4 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors duration-500" data-menu-name>
                    청양 오일 육회
                  </h4>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase" data-menu-desc>전통 육회에 더한 매콤한 불꽃</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70" data-menu-price>₩25,000</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-3" data-menu-detail>
                전통적인 한우 육회에 자체 제작 고추기름 소스의 매콤한 킥을 더한 메뉴입니다. 
                신선한 한우 육회 위에 직접 만든 고추기름 소스를 둘러, 기존 육회에서는 느낄 수 없었던 매콤하고 알싸한 풍미를 더했습니다.
              </p>
              <div class="text-xs">
                <p class="text-off-white/25">
                  <span class="text-champagne/30 mr-2" data-i18n="menu.ingredientsLabel">재료</span>
                  <span data-menu-ingredients>한우 육회 · 고추기름 소스 · 청양고추 · 다진 마늘 · 노른자 · 실고추</span>
                </p>
              </div>
            </div>
            
            {/* Menu Item 4: 아보카도 카프레제 */}
            <div class="animate-on-scroll group" style="animation-delay: 0.25s" data-menu-item="3">
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
                  <h4 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors duration-500" data-menu-name>
                    아보카도 카프레제
                  </h4>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase" data-menu-desc>클래식 카프레제의 현대적 재해석</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70" data-menu-price>₩23,000</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-4" data-menu-detail>
                이탈리아 카프리 섬에서 유래한 카프레제에 아보카도와 블랙 올리브를 더해 더욱 크리미하게 재해석했습니다. 
                아보카도는 주문 후 바로 잘라 갈변 없이 신선하게 제공됩니다.
              </p>
              <div class="space-y-2 text-xs">
                <p class="text-off-white/25">
                  <span class="text-champagne/30 mr-2" data-i18n="menu.ingredientsLabel">재료</span>
                  <span data-menu-ingredients>아보카도 · 미니 모짜렐라 · 대추방울토마토 · 블랙 올리브 · 발사믹 드레싱 · 바질</span>
                </p>
              </div>
            </div>
            
            {/* Menu Item 5: 들기름 육회 메밀면 */}
            <div class="animate-on-scroll group md:col-span-2 lg:col-span-1 lg:col-start-1" style="animation-delay: 0.3s" data-menu-item="4">
              <div class="relative aspect-[16/10] bg-soft-black overflow-hidden mb-6">
                <img 
                  src="/static/menu_memil.jpg" 
                  alt="연남동 맛집 들기름 육회 메밀면 - 홈대입구역 맛집 연트럴파크 근처" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-black/20 to-transparent"></div>
                <div class="absolute bottom-4 right-4">
                  <span class="text-[9px] tracking-[0.2em] text-off-white/60 uppercase bg-deep-black/70 px-2 py-1" data-i18n="menu.finisherBadge">
                    Finisher
                  </span>
                </div>
              </div>
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h4 class="font-playfair text-lg text-off-white mb-1 group-hover:text-champagne transition-colors duration-500" data-menu-name>
                    들기름 육회 메밀면
                  </h4>
                  <p class="text-[10px] tracking-wider text-off-white/30 uppercase" data-menu-desc>한 끼의 완벽한 마무리</p>
                </div>
                <span class="font-playfair text-xl text-champagne/70" data-menu-price>₩15,000</span>
              </div>
              <p class="text-off-white/40 text-sm font-light leading-relaxed mb-4" data-menu-detail>
                고객 설문에서 "의외로 가장 좋았던 메뉴"로 꼽힌 시그니처 마무리 메뉴입니다. 
                들기름에 쯔유, 식초, 설탕을 배합한 소스가 느끼하지 않고 상큼해서 식사 후에도 가볍게 즐길 수 있습니다.
              </p>
              <div class="space-y-2 text-xs">
                <p class="text-off-white/25">
                  <span class="text-champagne/30 mr-2" data-i18n="menu.ingredientsLabel">재료</span>
                  <span data-menu-ingredients>메밀면 · 한우 육회 · 들기름 소스 · 깻잎 · 조미김 · 통깨 · 와사비</span>
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
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide" data-i18n="experience.title">
              The Journey
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4 max-w-lg mx-auto">
              <span data-i18n="experience.subtitle">ROWISM The Black에서 경험하실 특별한 여정</span>
            </p>
          </div>
          
          <div class="relative">
            {/* Vertical Line */}
            <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-champagne/20 via-champagne/10 to-transparent transform md:-translate-x-1/2"></div>
            
            {/* Dynamic content rendered by translations.js */}
            <div id="experience-items-container" class="space-y-16 md:space-y-24">
              {/* Experience items will be dynamically rendered by JavaScript */}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Recommend - "이런 분께 추천드립니다" */}
      <section id="recommend" class="py-32 md:py-40 bg-soft-black/30">
        <div class="max-w-5xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">Recommendation</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide" data-i18n="recommend.title">
              이런 분께 추천드립니다
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4 max-w-lg mx-auto" data-i18n="recommend.subtitle">
              당신의 특별한 순간을 위한 공간
            </p>
          </div>
          
          {/* Dynamic content rendered by translations.js */}
          <div id="recommend-items-container" class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {/* Recommend items will be dynamically rendered by JavaScript */}
          </div>
        </div>
      </section>

      {/* Section 8: Occasions - Special Moments */}
      <section class="py-32 md:py-40 bg-deep-black">
        <div class="max-w-5xl mx-auto px-8 md:px-12">
          <div class="text-center mb-20 animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-4">Occasions</p>
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide" data-i18n="occasions.title">
              Special Moments
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4 max-w-lg mx-auto" data-i18n="occasions.subtitle">
              소중한 순간을 더욱 특별하게
            </p>
          </div>
          
          {/* Dynamic content rendered by translations.js */}
          <div id="occasions-section-container" class="grid md:grid-cols-2 gap-px bg-white/5">
            {/* Occasions items will be dynamically rendered by JavaScript */}
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
              <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide mb-12" data-i18n="location.title">
                찾아오시는 길
              </h2>
              
              <div class="space-y-10">
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2">Address</p>
                  <p class="text-off-white/80 font-light" data-i18n="location.address">서울 마포구 동교로 262-4</p>
                  <p class="text-off-white/50 text-sm mt-1">(연남동)</p>
                  <p class="text-off-white/40 text-xs mt-2">연트럴파크 인근</p>
                  <p class="text-off-white/30 text-xs mt-1">04030</p>
                </div>
                
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2">Access</p>
                  <p class="text-off-white/80 font-light" data-i18n="location.subway">홍대입구역 3번 출구 도보 5분</p>
                </div>
                
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2">Hours</p>
                  <p class="text-off-white/80 font-light" data-i18n="location.hours">화-일 18:00 - 24:00</p>
                  <p class="text-off-white/40 text-sm mt-1" data-i18n="location.lastOrder">라스트오더 22:30</p>
                  <p class="text-champagne/40 text-xs mt-2" data-i18n="location.closed">매주 월요일 휴무</p>
                </div>
                
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2">Parking</p>
                  <p class="text-off-white/80 font-light" data-i18n="location.parking">인근 공영주차장 이용</p>
                </div>
                
                <div class="border-l border-champagne/20 pl-6">
                  <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-2" data-i18n="location.landmarks.title">Nearby Landmarks</p>
                  <div id="landmarks-container">
                    {/* Landmarks will be dynamically rendered by JavaScript */}
                  </div>
                  <p class="text-off-white/30 text-xs mt-2" data-i18n="location.nearby">서교동 · 합정동 · 망원동 인접</p>
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
                   class="flex-1 py-3 border border-white/10 text-center text-off-white/50 text-xs hover:border-champagne/30 hover:text-champagne transition-all duration-300"
                   data-i18n="location.naverMap">
                  네이버 지도
                </a>
                <a href="https://map.kakao.com/" target="_blank" rel="noopener noreferrer" 
                   class="flex-1 py-3 border border-white/10 text-center text-off-white/50 text-xs hover:border-champagne/30 hover:text-champagne transition-all duration-300"
                   data-i18n="location.kakaoMap">
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
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide" data-i18n="reviews.title">
              고객 후기
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4" data-i18n="reviews.subtitle">
              ROWISM The Black을 경험하신 분들의 이야기
            </p>
            <div class="flex items-center justify-center gap-2 mt-6">
              <div class="flex text-champagne text-xl">★★★★★</div>
              <span class="text-2xl font-playfair text-champagne">4.9</span>
              <span class="text-off-white/40 text-sm" data-i18n="reviews.count">(127개의 리뷰)</span>
            </div>
          </div>
          
          {/* Dynamic content rendered by translations.js */}
          <div id="reviews-items-container" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Reviews will be dynamically rendered by JavaScript */}
          </div>
          
          <div class="text-center mt-12 animate-on-scroll">
            <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-2 text-champagne/70 hover:text-champagne text-sm transition-colors"
               data-i18n="reviews.more">
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
            <h2 class="font-playfair text-3xl md:text-4xl font-light tracking-wide" data-i18n="faq.title">
              자주 묻는 질문
            </h2>
            <p class="text-off-white/40 text-sm font-light mt-4 max-w-lg mx-auto" data-i18n="faq.subtitle">
              연남동 샴페인바 ROWISM The Black에 대해 궁금하신 점을 확인하세요
            </p>
          </div>
          
          {/* Dynamic content rendered by translations.js */}
          <div id="faq-items-container" class="space-y-0 border-t border-white/5">
            {/* FAQ items will be dynamically rendered by JavaScript */}
          </div>
        </div>
      </section>

      {/* Section 12: CTA */}
      <section id="reserve" class="py-32 md:py-40 bg-soft-black/30 relative overflow-hidden">
        {/* Subtle Background */}
        <div class="absolute inset-0 bg-gradient-to-r from-champagne/5 via-transparent to-champagne/5"></div>
        
        <div class="relative max-w-3xl mx-auto px-8 md:px-12 text-center">
          <div class="animate-on-scroll">
            <p class="text-[10px] tracking-[0.4em] text-champagne/50 uppercase mb-6">Reservation</p>
            <h2 class="font-playfair text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6" data-i18n="reserve.title">
              특별한 밤을 예약하세요
            </h2>
            <p class="text-off-white/40 text-sm font-light mb-8 max-w-md mx-auto" data-i18n-html="reserve.subtitle">
              8석 한정 예약제 프라이빗 다이닝
            </p>
            <p class="text-off-white/30 text-xs mb-16" data-i18n="reserve.notice">
              금요일·토요일·기념일은 최소 3일 전 예약을 권장드립니다
            </p>
            
            <div class="flex justify-center">
              <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer" 
                 class="group px-16 py-4 bg-champagne hover:bg-champagne/90 transition-all duration-500 inline-flex items-center justify-center gap-3">
                <svg class="w-4 h-4 text-deep-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
                <span class="text-[11px] tracking-[0.2em] uppercase text-deep-black font-medium" data-i18n="reserve.cta">네이버 예약</span>
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
              <p class="text-off-white/30 text-xs font-light leading-relaxed" data-i18n-html="footer.slogan">
                날것의 철학으로,<br/>당신의 특별한 밤을 위해.
              </p>
              <p class="text-off-white/20 text-[10px] mt-4 leading-relaxed" data-i18n-html="footer.desc">
                연남동 프리미엄 샴페인바<br/>
                홍대입구역 도보 5분
              </p>
            </div>
            
            {/* Contact */}
            <div>
              <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-6">Contact</p>
              <div class="space-y-3 text-off-white/40 text-xs font-light">
                <p data-i18n="footer.address">서울 마포구 동교로 262-4</p>
                <p data-i18n="footer.hours">화 - 일 18:00 - 24:00</p>
                <p data-i18n="footer.closed">월요일 휴무</p>
                <p class="pt-2">
                  <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer" class="hover:text-champagne transition-colors" data-i18n="footer.naver">
                    네이버 예약
                  </a>
                </p>
              </div>
            </div>
            
            {/* Social */}
            <div>
              <p class="text-[10px] tracking-[0.3em] text-champagne/40 uppercase mb-6">Follow</p>
              <div class="flex gap-6 mb-6">
                <a href="https://instagram.com/rawism_theblack" target="_blank" rel="noopener noreferrer" 
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
        <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener noreferrer" class="block w-full py-3 bg-champagne text-deep-black text-center text-[11px] tracking-[0.2em] uppercase font-medium" data-i18n="mobileCta">
          예약하기
        </a>
      </div>
    </div>
  )
}

// ===========================================
// ROUTES - Each language gets its own route
// ===========================================

// Sitemap.xml - Include all language versions
app.get('/sitemap.xml', async (c) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Korean (default) -->
  <url>
    <loc>https://rawism.kr/</loc>
    <xhtml:link rel="alternate" hreflang="ko" href="https://rawism.kr/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rawism.kr/en" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://rawism.kr/ja" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://rawism.kr/zh" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://rawism.kr/" />
    <lastmod>2026-02-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://rawism.kr/static/logo.png</image:loc>
      <image:title>ROWISM The Black 로고 - 연남동 프리미엄 샴페인바</image:title>
    </image:image>
    <image:image>
      <image:loc>https://rawism.kr/static/menu_signature.jpg</image:loc>
      <image:title>연남동 맛집 트러플 한우 뭉티기 - 홍대 데이트 기념일</image:title>
    </image:image>
  </url>
  <!-- English -->
  <url>
    <loc>https://rawism.kr/en</loc>
    <xhtml:link rel="alternate" hreflang="ko" href="https://rawism.kr/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rawism.kr/en" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://rawism.kr/ja" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://rawism.kr/zh" />
    <lastmod>2026-02-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Japanese -->
  <url>
    <loc>https://rawism.kr/ja</loc>
    <xhtml:link rel="alternate" hreflang="ko" href="https://rawism.kr/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rawism.kr/en" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://rawism.kr/ja" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://rawism.kr/zh" />
    <lastmod>2026-02-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Chinese -->
  <url>
    <loc>https://rawism.kr/zh</loc>
    <xhtml:link rel="alternate" hreflang="ko" href="https://rawism.kr/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rawism.kr/en" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://rawism.kr/ja" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://rawism.kr/zh" />
    <lastmod>2026-02-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Menu Page (all languages) -->
  <url>
    <loc>https://rawism.kr/menu</loc>
    <xhtml:link rel="alternate" hreflang="ko" href="https://rawism.kr/menu" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rawism.kr/en/menu" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://rawism.kr/ja/menu" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://rawism.kr/zh/menu" />
    <lastmod>2026-02-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://rawism.kr/en/menu</loc>
    <lastmod>2026-02-06</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rawism.kr/ja/menu</loc>
    <lastmod>2026-02-06</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rawism.kr/zh/menu</loc>
    <lastmod>2026-02-06</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- About Page (all languages) -->
  <url>
    <loc>https://rawism.kr/about</loc>
    <xhtml:link rel="alternate" hreflang="ko" href="https://rawism.kr/about" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rawism.kr/en/about" />
    <xhtml:link rel="alternate" hreflang="ja" href="https://rawism.kr/ja/about" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://rawism.kr/zh/about" />
    <lastmod>2026-02-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rawism.kr/en/about</loc>
    <lastmod>2026-02-06</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://rawism.kr/ja/about</loc>
    <lastmod>2026-02-06</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://rawism.kr/zh/about</loc>
    <lastmod>2026-02-06</lastmod>
    <priority>0.7</priority>
  </url>
</urlset>`
  return c.text(sitemap, 200, { 'Content-Type': 'application/xml' })
})

// robots.txt
app.get('/robots.txt', (c) => {
  const robots = `# ROWISM The Black - 연남동 프리미엄 샴페인바
User-agent: *
Allow: /
Sitemap: https://rawism.kr/sitemap.xml
Crawl-delay: 1`
  return c.text(robots, 200, { 'Content-Type': 'text/plain' })
})

// Korean (default) - /
app.get('/', (c) => {
  const koRenderer = createRenderer('ko')
  return koRenderer(c as any, async () => {})
    .then(() => c.render(<PageContent lang="ko" />))
})

// Apply Korean renderer and render page
app.use('/', createRenderer('ko'))
app.get('/', (c) => {
  return c.render(<PageContent lang="ko" />)
})

// English - /en
app.use('/en', createRenderer('en'))
app.get('/en', (c) => {
  return c.render(<PageContent lang="en" />)
})

// Japanese - /ja
app.use('/ja', createRenderer('ja'))
app.get('/ja', (c) => {
  return c.render(<PageContent lang="ja" />)
})

// Chinese - /zh
app.use('/zh', createRenderer('zh'))
app.get('/zh', (c) => {
  return c.render(<PageContent lang="zh" />)
})

// ===========================================
// MENU PAGE ROUTES - /menu, /en/menu, /ja/menu, /zh/menu
// ===========================================

// Korean Menu - /menu
app.use('/menu', createMenuRenderer('ko'))
app.get('/menu', (c) => {
  return c.render(<MenuPage lang="ko" />)
})

// English Menu - /en/menu
app.use('/en/menu', createMenuRenderer('en'))
app.get('/en/menu', (c) => {
  return c.render(<MenuPage lang="en" />)
})

// Japanese Menu - /ja/menu
app.use('/ja/menu', createMenuRenderer('ja'))
app.get('/ja/menu', (c) => {
  return c.render(<MenuPage lang="ja" />)
})

// Chinese Menu - /zh/menu
app.use('/zh/menu', createMenuRenderer('zh'))
app.get('/zh/menu', (c) => {
  return c.render(<MenuPage lang="zh" />)
})

// ===========================================
// ABOUT PAGE ROUTES - /about, /en/about, /ja/about, /zh/about
// ===========================================

// Korean About - /about
app.use('/about', createAboutRenderer('ko'))
app.get('/about', (c) => {
  return c.render(<AboutPage lang="ko" />)
})

// English About - /en/about
app.use('/en/about', createAboutRenderer('en'))
app.get('/en/about', (c) => {
  return c.render(<AboutPage lang="en" />)
})

// Japanese About - /ja/about
app.use('/ja/about', createAboutRenderer('ja'))
app.get('/ja/about', (c) => {
  return c.render(<AboutPage lang="ja" />)
})

// Chinese About - /zh/about
app.use('/zh/about', createAboutRenderer('zh'))
app.get('/zh/about', (c) => {
  return c.render(<AboutPage lang="zh" />)
})

export default app
