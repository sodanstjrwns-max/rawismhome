// Blog Hub Page - /blog
// 와인 칼럼을 상위에 배치 + 비와인 콘텐츠 확장 구조
import { allWineColumns, categories } from '../data'
import type { WineColumn } from '../data'

export const BlogPage = () => {
  // 최신순 정렬
  const sortedColumns = [...allWineColumns].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const latestArticles = sortedColumns.slice(0, 6)
  const totalArticles = allWineColumns.length

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
        <p class="text-[11px] tracking-[0.3em] uppercase text-[#B8A060] mb-4">RAWISM Blog</p>
        <h1 class="font-['Playfair_Display'] text-3xl md:text-5xl text-[#E0E0E0] mb-4">
          Stories from <span class="text-[#B8A060]">the Bar</span>
        </h1>
        <p class="text-sm text-[#999] max-w-lg mx-auto leading-relaxed">
          소믈리에가 전하는 와인 이야기부터 연남동 데이트 코스까지<br/>
          RAWISM The Black이 큐레이션하는 라이프스타일 매거진
        </p>
      </section>

      {/* Content Categories - Hub Navigation */}
      <section class="max-w-5xl mx-auto px-4 pb-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Wine Column - Primary */}
          <a href="/wine" class="group md:col-span-2 relative overflow-hidden border border-[#B8A060]/20 hover:border-[#B8A060]/60 transition-all duration-500 p-8">
            <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#B8A060]/5 to-transparent"></div>
            <p class="text-[10px] tracking-[0.3em] uppercase text-[#B8A060] mb-2">Featured Series</p>
            <h2 class="font-['Playfair_Display'] text-2xl text-[#E0E0E0] mb-3 group-hover:text-[#B8A060] transition-colors">
              와인 & 샴페인 칼럼
            </h2>
            <p class="text-sm text-[#999] mb-4 leading-relaxed max-w-md">
              입문자를 위한 기초 가이드부터 프리미엄 셀렉션까지. 
              소믈리에가 엄선한 와인·샴페인 이야기 {totalArticles}편.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              {categories.map(cat => (
                <span class="text-[10px] tracking-[0.15em] px-2 py-1 border border-[#333] text-[#777]">
                  {cat.icon} {cat.name} ({cat.count})
                </span>
              ))}
            </div>
            <span class="text-[11px] tracking-[0.2em] uppercase text-[#B8A060] group-hover:tracking-[0.3em] transition-all">
              {totalArticles}편 전체 보기 →
            </span>
          </a>

          {/* Upcoming Content Teasers */}
          <div class="flex flex-col gap-4">
            <div class="border border-[#1a1a1a] p-6 relative">
              <span class="absolute top-3 right-3 text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 border border-[#B8A060]/30 text-[#B8A060]">Coming Soon</span>
              <p class="text-[10px] tracking-[0.3em] uppercase text-[#555] mb-2">Lifestyle</p>
              <h3 class="font-['Playfair_Display'] text-lg text-[#666] mb-2">연남동 데이트 코스</h3>
              <p class="text-xs text-[#555] leading-relaxed">프로포즈, 기념일, 첫 데이트 — 상황별 연남동 완벽 가이드</p>
            </div>
            <div class="border border-[#1a1a1a] p-6 relative">
              <span class="absolute top-3 right-3 text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 border border-[#B8A060]/30 text-[#B8A060]">Coming Soon</span>
              <p class="text-[10px] tracking-[0.3em] uppercase text-[#555] mb-2">Behind the Scene</p>
              <h3 class="font-['Playfair_Display'] text-lg text-[#666] mb-2">소믈리에 다이어리</h3>
              <p class="text-xs text-[#555] leading-relaxed">RAWISM 소믈리에의 와인 여정과 테이스팅 노트</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section class="max-w-5xl mx-auto px-4 pb-16">
        <div class="flex items-center justify-between mb-8">
          <div>
            <p class="text-[10px] tracking-[0.3em] uppercase text-[#B8A060] mb-1">Latest</p>
            <h2 class="font-['Playfair_Display'] text-xl text-[#E0E0E0]">최신 칼럼</h2>
          </div>
          <a href="/wine" class="text-[11px] tracking-[0.2em] uppercase text-[#B8A060] hover:text-[#E0E0E0] transition-colors">
            전체 보기 →
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article: WineColumn) => (
            <a href={`/wine/${article.slug}`} class="group border border-[#1a1a1a] hover:border-[#B8A060]/30 transition-all duration-300">
              <div class="p-5">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 border border-[#B8A060]/20 text-[#B8A060]">
                    {article.category}
                  </span>
                  <span class="text-[10px] text-[#555]">{article.readTime}분</span>
                </div>
                <h3 class="text-sm font-medium text-[#E0E0E0] mb-2 group-hover:text-[#B8A060] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p class="text-xs text-[#777] line-clamp-2 leading-relaxed">
                  {article.subtitle}
                </p>
                <p class="text-[10px] text-[#555] mt-3">{article.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter / Subscribe Teaser */}
      <section class="py-16 text-center border-t border-[#B8A060]/10 px-4 bg-[#0a0a0a]">
        <p class="text-[11px] tracking-[0.3em] uppercase text-[#B8A060] mb-4">Stay Updated</p>
        <h2 class="font-['Playfair_Display'] text-2xl text-[#E0E0E0] mb-3">
          새로운 이야기를 놓치지 마세요
        </h2>
        <p class="text-sm text-[#777] mb-6 max-w-md mx-auto">
          RAWISM의 와인 이야기, 이벤트, 특별 메뉴 소식을 가장 먼저 받아보세요
        </p>
        <div class="flex justify-center gap-4">
          <a
            href="https://www.instagram.com/rawism_theblack"
            target="_blank"
            rel="noopener"
            class="text-[11px] tracking-[0.15em] uppercase border border-[#B8A060] text-[#B8A060] px-6 py-3 hover:bg-[#B8A060] hover:text-[#080808] transition-all duration-300"
          >
            인스타그램 팔로우
          </a>
          <a
            href="https://naver.me/5qLSfCNC"
            target="_blank"
            rel="noopener"
            class="text-[11px] tracking-[0.15em] uppercase bg-[#B8A060] text-[#080808] px-6 py-3 hover:bg-[#C9A962] transition-all"
          >
            방문 예약하기
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-6 text-center text-[10px] text-[#555] border-t border-[#1a1a1a]">
        © 2024 RAWISM The Black. All rights reserved.
      </footer>
    </div>
  )
}
