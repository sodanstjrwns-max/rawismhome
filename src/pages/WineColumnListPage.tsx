import type { FC } from 'hono/jsx'
import { allWineColumns, categories } from '../data'
import type { WineColumn } from '../data'

export const WineColumnListPage: FC = () => {
  return (
    <main class="overflow-x-hidden bg-deep-black text-off-white min-h-screen">
      {/* Navigation Bar */}
      <nav class="fixed top-0 left-0 right-0 z-50 bg-deep-black/95 backdrop-blur-xl border-b border-white/5">
        <div class="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          <a href="/" class="group">
            <img src="/static/logo.png" alt="RAWISM The Black" class="h-7 md:h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <div class="flex items-center gap-6">
            <a href="/" class="text-[11px] tracking-[0.2em] uppercase text-off-white/50 hover:text-champagne transition-colors">Home</a>
            <a href="/menu" class="text-[11px] tracking-[0.2em] uppercase text-off-white/50 hover:text-champagne transition-colors">Menu</a>
            <a href="/wine" class="text-[11px] tracking-[0.2em] uppercase text-champagne border-b border-champagne/30 pb-0.5">Wine Guide</a>
            <a href="/about" class="text-[11px] tracking-[0.2em] uppercase text-off-white/50 hover:text-champagne transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section class="pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div class="absolute inset-0 opacity-[0.02] bg-noise"></div>
        <div class="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <p class="text-[10px] tracking-[0.5em] text-champagne/50 uppercase mb-6 font-light">RAWISM Wine Guide</p>
          <h1 class="font-playfair text-3xl md:text-5xl font-light tracking-wide mb-6">
            와인 <span class="text-champagne">&</span> 샴페인 칼럼
          </h1>
          <p class="text-off-white/50 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            RAWISM 소믈리에가 전하는 와인·샴페인 이야기. 
            입문자부터 애호가까지, 한우 페어링 가이드부터 프리미엄 셀렉션까지.
          </p>
          <div class="mt-8 flex items-center justify-center gap-6 text-[11px] text-off-white/30">
            <span>{allWineColumns.length}개의 칼럼</span>
            <span class="w-px h-3 bg-white/10"></span>
            <span>{categories.length}개 카테고리</span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section class="border-y border-white/5 bg-soft-black/20">
        <div class="max-w-6xl mx-auto px-6 md:px-12 py-6">
          <div class="flex flex-wrap justify-center gap-3">
            <button class="category-filter active text-[11px] tracking-wider px-4 py-2 rounded-full border border-champagne/40 text-champagne bg-champagne/10 transition-all hover:bg-champagne/20" data-category="all">
              전체 ({allWineColumns.length})
            </button>
            {categories.map(cat => {
              const count = allWineColumns.filter(c => c.categorySlug === cat.slug).length
              return (
                <button class="category-filter text-[11px] tracking-wider px-4 py-2 rounded-full border border-white/10 text-off-white/50 transition-all hover:border-champagne/30 hover:text-champagne/80" data-category={cat.slug}>
                  {cat.icon} {cat.name} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section class="py-16 md:py-24">
        <div class="max-w-6xl mx-auto px-6 md:px-12">
          {categories.map(cat => {
            const articles = allWineColumns.filter(c => c.categorySlug === cat.slug)
            return (
              <div class="category-section mb-20" data-category={cat.slug}>
                {/* Category Header */}
                <div class="flex items-center gap-4 mb-10">
                  <span class="text-2xl">{cat.icon}</span>
                  <div>
                    <h2 class="font-playfair text-xl md:text-2xl font-light text-off-white/90">{cat.name}</h2>
                    <p class="text-[11px] text-off-white/30 tracking-wider uppercase mt-1">{cat.nameEn} · {articles.length} Articles</p>
                  </div>
                  <div class="flex-1 h-px bg-gradient-to-r from-white/5 to-transparent ml-4"></div>
                </div>

                {/* Article Cards */}
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {articles.map((article, idx) => (
                    <a href={`/wine/${article.slug}`} class="article-card group block bg-soft-black/40 border border-white/5 rounded-sm overflow-hidden hover:border-champagne/20 hover:bg-soft-black/60 transition-all duration-500" data-category={article.categorySlug}>
                      {/* Card Content */}
                      <div class="p-6 md:p-7">
                        <div class="flex items-center gap-2 mb-4">
                          <span class="text-[9px] tracking-[0.2em] uppercase text-champagne/60 bg-champagne/5 px-2 py-0.5 rounded-sm">{article.category}</span>
                          <span class="text-[9px] text-off-white/20">{article.readTime}분 읽기</span>
                        </div>
                        <h3 class="font-noto-serif text-base md:text-[17px] text-off-white/85 group-hover:text-champagne transition-colors duration-500 leading-snug mb-2 line-clamp-2">
                          {article.title}
                        </h3>
                        <p class="text-[12px] text-off-white/35 font-light leading-relaxed line-clamp-2 mb-4">
                          {article.subtitle}
                        </p>
                        <div class="flex items-center justify-between">
                          <span class="text-[10px] text-off-white/20">{article.date}</span>
                          <span class="text-[10px] text-champagne/50 group-hover:text-champagne transition-colors tracking-wider uppercase">
                            Read →
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 md:py-28 bg-soft-black/30 border-t border-white/5">
        <div class="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p class="text-[10px] tracking-[0.4em] text-champagne/40 uppercase mb-4">Visit Us</p>
          <h2 class="font-playfair text-2xl md:text-3xl font-light mb-4">직접 경험해보세요</h2>
          <p class="text-off-white/40 text-sm font-light mb-8 max-w-lg mx-auto">
            칼럼에서 읽은 와인과 샴페인을 RAWISM The Black에서 직접 만나보세요. 
            소믈리에가 큐레이팅한 페어링을 경험할 수 있습니다.
          </p>
          <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener" class="inline-block text-[11px] tracking-[0.2em] uppercase border border-champagne/40 text-champagne px-8 py-3 hover:bg-champagne/10 transition-all duration-500">
            네이버 예약하기
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-12 border-t border-white/5">
        <div class="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="/" class="group">
            <img src="/static/logo.png" alt="RAWISM The Black" class="h-6 opacity-50 group-hover:opacity-70 transition-opacity" />
          </a>
          <div class="flex items-center gap-6 text-[10px] text-off-white/30">
            <a href="/" class="hover:text-champagne/60 transition-colors">Home</a>
            <a href="/menu" class="hover:text-champagne/60 transition-colors">Menu</a>
            <a href="/wine" class="hover:text-champagne/60 transition-colors text-champagne/50">Wine Guide</a>
            <a href="/about" class="hover:text-champagne/60 transition-colors">About</a>
          </div>
          <p class="text-[10px] text-off-white/20">&copy; 2026 RAWISM The Black</p>
        </div>
      </footer>

      {/* Category Filter Script */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          const filters = document.querySelectorAll('.category-filter');
          const sections = document.querySelectorAll('.category-section');
          
          filters.forEach(btn => {
            btn.addEventListener('click', function() {
              const cat = this.dataset.category;
              
              // Update active filter
              filters.forEach(f => {
                f.classList.remove('active');
                f.style.borderColor = 'rgba(255,255,255,0.1)';
                f.style.color = 'rgba(224,224,224,0.5)';
                f.style.backgroundColor = 'transparent';
              });
              this.classList.add('active');
              this.style.borderColor = 'rgba(184,160,96,0.4)';
              this.style.color = 'rgb(184,160,96)';
              this.style.backgroundColor = 'rgba(184,160,96,0.1)';
              
              // Show/hide sections
              sections.forEach(sec => {
                if (cat === 'all' || sec.dataset.category === cat) {
                  sec.style.display = '';
                } else {
                  sec.style.display = 'none';
                }
              });
            });
          });
        });
      `}} />
    </main>
  )
}
