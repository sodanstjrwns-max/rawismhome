// Page content component - shared across all language routes
// Language buttons now navigate to URLs instead of using JavaScript

type Language = 'ko' | 'en' | 'ja' | 'zh';

interface PageContentProps {
  lang: Language;
}

// Get the base path for a language (empty for Korean, /en for English, etc.)
function getLangPath(lang: Language): string {
  return lang === 'ko' ? '/' : `/${lang}`;
}

export function PageContent({ lang }: PageContentProps) {
  const koPath = '/';
  const enPath = '/en';
  const jaPath = '/ja';
  const zhPath = '/zh';
  
  // Determine which language is active
  const isKo = lang === 'ko';
  const isEn = lang === 'en';
  const isJa = lang === 'ja';
  const isZh = lang === 'zh';
  
  return (
    <div class="overflow-x-hidden">
      {/* Navigation */}
      <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-transparent">
        <div class="max-w-7xl mx-auto px-8 md:px-12 py-6 flex justify-between items-center">
          <a href={`${getLangPath(lang)}#hero`} class="group">
            <img 
              src="/static/logo.png" 
              alt="RAWISM The Black" 
              class="h-8 md:h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
          </a>
          <div class="hidden lg:flex items-center gap-8">
            <a href={`${getLangPath(lang)}#philosophy`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500" data-i18n="nav.philosophy">Philosophy</a>
            <a href={`${getLangPath(lang)}#menu`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500" data-i18n="nav.menu">Menu</a>
            <a href={`${getLangPath(lang)}#recommend`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500" data-i18n="nav.recommend">추천</a>
            <a href={`${getLangPath(lang)}#location`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors duration-500" data-i18n="nav.location">Location</a>
            <a href={`${getLangPath(lang)}#reserve`} class="text-[11px] tracking-[0.25em] uppercase text-champagne border-b border-champagne/30 pb-1 hover:border-champagne transition-colors duration-500" data-i18n="nav.reservation">
              Reservation
            </a>
            {/* Language Selector - Now using URL navigation */}
            <div class="flex items-center gap-1 ml-4 border-l border-white/10 pl-4">
              <a href={koPath} data-lang="ko" class={`lang-btn text-[13px] px-2 py-1 rounded transition-all hover:bg-white/5 ${isKo ? 'text-champagne border-b border-champagne' : 'text-off-white/50 border-b border-transparent'}`} title="한국어">🇰🇷</a>
              <a href={enPath} data-lang="en" class={`lang-btn text-[13px] px-2 py-1 rounded transition-all hover:bg-white/5 ${isEn ? 'text-champagne border-b border-champagne' : 'text-off-white/50 border-b border-transparent'}`} title="English">🇺🇸</a>
              <a href={jaPath} data-lang="ja" class={`lang-btn text-[13px] px-2 py-1 rounded transition-all hover:bg-white/5 ${isJa ? 'text-champagne border-b border-champagne' : 'text-off-white/50 border-b border-transparent'}`} title="日本語">🇯🇵</a>
              <a href={zhPath} data-lang="zh" class={`lang-btn text-[13px] px-2 py-1 rounded transition-all hover:bg-white/5 ${isZh ? 'text-champagne border-b border-champagne' : 'text-off-white/50 border-b border-transparent'}`} title="中文">🇨🇳</a>
            </div>
          </div>
          {/* Mobile: Language + Menu */}
          <div class="lg:hidden flex items-center gap-3">
            {/* Mobile Language Flags - Using URL navigation */}
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
            <a href={`${getLangPath(lang)}#philosophy`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2" data-i18n="nav.philosophy">Philosophy</a>
            <a href={`${getLangPath(lang)}#menu`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2" data-i18n="nav.menu">Menu</a>
            <a href={`${getLangPath(lang)}#recommend`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2" data-i18n="nav.recommend">추천</a>
            <a href={`${getLangPath(lang)}#location`} class="text-[11px] tracking-[0.25em] uppercase text-off-white/70 hover:text-champagne transition-colors py-2" data-i18n="nav.location">Location</a>
            <div class="pt-4 border-t border-white/5">
              <a href={`${getLangPath(lang)}#reserve`} class="text-[11px] tracking-[0.25em] uppercase text-champagne" data-i18n="nav.reservation">Reservation</a>
            </div>
            {/* Mobile Language Selector - Using URL navigation */}
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
              트러플 한우 뭉티기 · 샴페인 &amp; 스파클링 · 프라이빗 다이닝
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

      {/* ... Rest of the sections will be dynamically rendered by translations.js ... */}
      
      {/* The rest of the page content continues - it uses data-i18n attributes */}
      {/* which will be translated by translations.js based on the initial language */}
      
      {/* Placeholder for remaining sections - they will be filled by the original index.tsx content */}
    </div>
  );
}
