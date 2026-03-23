// Gallery Page - Instagram감성 포토 갤러리
// RAWISM The Black 분위기·메뉴·공간 사진

const galleryItems = [
  {
    id: 1,
    src: '/static/menu_signature.jpg',
    alt: 'RAWISM 시그니처 트러플 한우 뭉티기',
    title: '트러플 한우 뭉티기',
    category: 'signature',
    description: '당일 도축 한우 안심 뭉티기 + 트러플 오일 + 부라타 치즈. RAWISM의 시그니처.',
  },
  {
    id: 2,
    src: '/static/menu_yukhoe.jpg',
    alt: '청양 오일 육회 RAWISM',
    title: '청양 오일 육회',
    category: 'menu',
    description: '매콤한 고추기름 소스와 신선한 한우 육회의 조화.',
  },
  {
    id: 3,
    src: '/static/menu_cheese.jpg',
    alt: 'RAWISM 치즈 셀렉션 플레이트',
    title: '치즈 셀렉션',
    category: 'menu',
    description: '소믈리에가 큐레이션한 6종 치즈 + 하몽 + 살라미.',
  },
  {
    id: 4,
    src: '/static/menu_caprese.jpg',
    alt: '아보카도 카프레제 RAWISM',
    title: '아보카도 카프레제',
    category: 'menu',
    description: '아보카도와 미니 모짜렐라, 발사믹 드레싱의 클래식.',
  },
  {
    id: 5,
    src: '/static/menu_memil.jpg',
    alt: 'RAWISM 들기름 육회 메밀면 피니셔',
    title: '들기름 육회 메밀면',
    category: 'menu',
    description: '들기름 쯔유 소스 + 한우 육회 + 메밀면. 코스의 마침표.',
  },
  {
    id: 6,
    src: '/static/og-image.jpg',
    alt: 'RAWISM The Black 연남동 프라이빗 다이닝 공간',
    title: 'RAWISM 공간',
    category: 'space',
    description: '8석 한정 프라이빗 다이닝. 연남동 동교로 262-4.',
  },
]

const categories = [
  { slug: 'all', label: '전체', icon: '✦' },
  { slug: 'signature', label: '시그니처', icon: '★' },
  { slug: 'menu', label: '메뉴', icon: '🍽' },
  { slug: 'space', label: '공간', icon: '🏠' },
]

export const GalleryPage = () => {
  return (
    <div class="min-h-screen bg-[#080808] text-[#E0E0E0]">
      {/* Navigation */}
      <nav class="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-sm border-b border-[#B8A060]/10">
        <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" class="text-[11px] tracking-[0.25em] uppercase text-[#B8A060] hover:text-[#E0E0E0] transition-colors">← 메인으로</a>
          <a href="/" class="font-['Playfair_Display'] text-lg text-[#B8A060]">RAWISM</a>
          <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener" class="text-[11px] tracking-[0.15em] uppercase bg-[#B8A060] text-[#080808] px-3 py-1.5 hover:bg-[#C9A962] transition-colors">예약</a>
        </div>
      </nav>

      {/* Hero */}
      <section class="pt-24 pb-12 text-center px-4">
        <p class="text-[11px] tracking-[0.3em] uppercase text-[#B8A060] mb-4">Gallery</p>
        <h1 class="font-['Playfair_Display'] text-3xl md:text-5xl text-[#E0E0E0] mb-4">
          RAWISM <span class="text-[#B8A060]">in Frame</span>
        </h1>
        <p class="text-sm text-[#999] max-w-lg mx-auto leading-relaxed">
          당일 도축 한우 · 소믈리에 큐레이션 샴페인 · 8석 프라이빗 다이닝<br/>
          연남동에서 만나는 날것의 미학, RAWISM The Black
        </p>
      </section>

      {/* Category Filter */}
      <div class="flex justify-center gap-3 px-4 pb-8" id="gallery-filters">
        {categories.map(cat => (
          <button
            data-filter={cat.slug}
            class={`text-xs tracking-[0.15em] px-4 py-2 border transition-all duration-300 ${cat.slug === 'all'
              ? 'border-[#B8A060] text-[#B8A060] bg-[#B8A060]/10'
              : 'border-[#333] text-[#777] hover:border-[#B8A060]/50 hover:text-[#B8A060]'
            }`}
          >
            <span class="mr-1">{cat.icon}</span> {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid - Masonry Style */}
      <section class="max-w-6xl mx-auto px-4 pb-16">
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-4" id="gallery-grid">
          {galleryItems.map((item, idx) => (
            <div
              class="break-inside-avoid mb-4 group relative overflow-hidden gallery-item"
              data-category={item.category}
            >
              <div class="relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  width="600"
                  height="400"
                  loading={idx < 3 ? 'eager' : 'lazy'}
                  class="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div class="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute bottom-0 left-0 right-0 p-5">
                    <p class="text-[10px] tracking-[0.2em] uppercase text-[#B8A060] mb-1">{item.category}</p>
                    <h3 class="font-['Playfair_Display'] text-lg text-[#E0E0E0] mb-1">{item.title}</h3>
                    <p class="text-xs text-[#999] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section class="py-16 text-center border-t border-[#B8A060]/10 px-4">
        <p class="text-[11px] tracking-[0.3em] uppercase text-[#B8A060] mb-4">Follow Us</p>
        <h2 class="font-['Playfair_Display'] text-2xl md:text-3xl text-[#E0E0E0] mb-3">
          @rowism_theblack
        </h2>
        <p class="text-sm text-[#777] mb-6 max-w-md mx-auto">
          더 많은 사진과 이벤트 소식은 인스타그램에서 확인하세요
        </p>
        <a
          href="https://www.instagram.com/rowism_theblack"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase border border-[#B8A060] text-[#B8A060] px-6 py-3 hover:bg-[#B8A060] hover:text-[#080808] transition-all duration-300"
        >
          인스타그램 방문 →
        </a>
      </section>

      {/* Reservation CTA */}
      <section class="py-16 text-center bg-[#0a0a0a] px-4">
        <p class="text-[11px] tracking-[0.3em] uppercase text-[#B8A060] mb-4">Reserve</p>
        <h2 class="font-['Playfair_Display'] text-2xl text-[#E0E0E0] mb-3">직접 경험해보세요</h2>
        <p class="text-sm text-[#777] mb-6">8석 한정 예약제 · 화–일 18:00–24:00</p>
        <a
          href="https://naver.me/5qLSfCNC"
          target="_blank"
          rel="noopener"
          class="inline-block text-[11px] tracking-[0.2em] uppercase bg-[#B8A060] text-[#080808] px-8 py-3 hover:bg-[#C9A962] transition-colors"
        >
          네이버 예약 →
        </a>
      </section>

      {/* Footer */}
      <footer class="py-6 text-center text-[10px] text-[#555] border-t border-[#1a1a1a]">
        © 2024 RAWISM The Black. All rights reserved.
      </footer>

      {/* Gallery filter script */}
      {<script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const filters = document.querySelectorAll('[data-filter]');
          const items = document.querySelectorAll('.gallery-item');
          
          filters.forEach(function(btn) {
            btn.addEventListener('click', function() {
              var cat = this.getAttribute('data-filter');
              
              // Update active button
              filters.forEach(function(b) {
                b.classList.remove('border-[#B8A060]', 'text-[#B8A060]', 'bg-[#B8A060]/10');
                b.classList.add('border-[#333]', 'text-[#777]');
              });
              this.classList.remove('border-[#333]', 'text-[#777]');
              this.classList.add('border-[#B8A060]', 'text-[#B8A060]', 'bg-[#B8A060]/10');
              
              // Filter items
              items.forEach(function(item) {
                if (cat === 'all' || item.getAttribute('data-category') === cat) {
                  item.style.display = '';
                  item.style.opacity = '1';
                } else {
                  item.style.opacity = '0';
                  setTimeout(function() { item.style.display = 'none'; }, 300);
                }
              });
            });
          });
        });
      ` }} />}
    </div>
  )
}
