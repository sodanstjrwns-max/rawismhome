import type { FC } from 'hono/jsx'
import type { WineColumn } from '../data'
import { getRelatedColumns, categories } from '../data'

interface Props {
  article: WineColumn
}

export const WineColumnDetailPage: FC<Props> = ({ article }) => {
  const related = getRelatedColumns(article.relatedSlugs)
  const category = categories.find(c => c.slug === article.categorySlug)

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
            <a href="/wine" class="text-[11px] tracking-[0.2em] uppercase text-champagne/70 hover:text-champagne transition-colors">Wine Guide</a>
            <a href="/gallery" class="text-[11px] tracking-[0.2em] uppercase text-off-white/50 hover:text-champagne transition-colors">Gallery</a>
            <a href="/blog" class="text-[11px] tracking-[0.2em] uppercase text-off-white/50 hover:text-champagne transition-colors">Blog</a>
            <a href="/quiz" class="text-[11px] tracking-[0.2em] uppercase text-champagne/50 hover:text-champagne transition-colors">🍾 Quiz</a>
            <a href="/about" class="text-[11px] tracking-[0.2em] uppercase text-off-white/50 hover:text-champagne transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div class="pt-24 pb-2">
        <div class="max-w-3xl mx-auto px-6 md:px-12">
          <nav class="flex items-center gap-2 text-[10px] text-off-white/30 tracking-wider" aria-label="Breadcrumb">
            <a href="/" class="hover:text-champagne/60 transition-colors">RAWISM</a>
            <span>/</span>
            <a href="/wine" class="hover:text-champagne/60 transition-colors">와인 칼럼</a>
            <span>/</span>
            <span class="text-off-white/50">{category?.name || article.category}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <header class="pt-8 pb-12 md:pt-12 md:pb-16">
        <div class="max-w-3xl mx-auto px-6 md:px-12">
          <div class="flex items-center gap-3 mb-6">
            <span class="text-[10px] tracking-[0.2em] uppercase text-champagne/60 bg-champagne/8 px-3 py-1 rounded-sm border border-champagne/10">
              {category?.icon} {article.category}
            </span>
            <span class="text-[10px] text-off-white/25">{article.readTime}분 읽기</span>
            <span class="text-[10px] text-off-white/25">{article.date}</span>
          </div>
          <h1 class="font-playfair text-2xl md:text-4xl font-light tracking-wide leading-snug mb-4">
            {article.title}
          </h1>
          <p class="font-noto-serif text-base md:text-lg text-off-white/50 font-light leading-relaxed">
            {article.subtitle}
          </p>
          <div class="mt-8 h-px bg-gradient-to-r from-champagne/20 via-champagne/10 to-transparent"></div>
        </div>
      </header>

      {/* Article Body */}
      <article class="pb-16 md:pb-24">
        <div class="max-w-3xl mx-auto px-6 md:px-12">
          <div 
            class="wine-article-content prose prose-invert prose-sm md:prose-base max-w-none"
            dangerouslySetInnerHTML={{__html: article.content}}
          />
        </div>
      </article>

      {/* Inline CTA Banner - 칼럼→예약 전환 */}
      <section class="py-12 md:py-16 border-t border-white/5 bg-gradient-to-r from-champagne/[0.03] via-transparent to-champagne/[0.03]">
        <div class="max-w-3xl mx-auto px-6 md:px-12">
          <div class="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div class="flex-1 text-center md:text-left">
              <p class="text-champagne/60 text-[10px] tracking-[0.3em] uppercase mb-2">Experience at RAWISM</p>
              <p class="font-noto-serif text-base md:text-lg text-off-white/70 font-light leading-relaxed">
                {article.categorySlug === 'pairing-guide' 
                  ? '이 칼럼의 페어링을 RAWISM The Black에서 직접 경험해보세요. 소믈리에가 추천하는 최적의 조합을 만나실 수 있습니다.' 
                  : article.categorySlug === 'champagne-basics' || article.categorySlug === 'premium-selection'
                  ? '칼럼에서 읽은 샴페인을 RAWISM The Black에서 잔으로 만나보세요. 소믈리에가 큐레이팅한 프리미엄 셀렉션이 기다립니다.'
                  : '읽는 것에서 그치지 마세요. RAWISM The Black에서 와인과 한우의 완벽한 조화를 직접 경험해보세요.'}
              </p>
            </div>
            <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener" 
               class="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 bg-champagne/10 border border-champagne/30 text-champagne hover:bg-champagne/20 transition-all duration-500">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
              </svg>
              <span class="text-[11px] tracking-[0.15em] uppercase font-medium">예약하기</span>
            </a>
          </div>
          {/* Cross-links to related menu items */}
          <div class="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="/menu" class="text-[10px] text-off-white/30 hover:text-champagne/60 transition-colors border border-white/5 px-3 py-1 rounded-full hover:border-champagne/20">
                🥩 시그니처 메뉴 보기
              </a>
              <a href="/wine" class="text-[10px] text-off-white/30 hover:text-champagne/60 transition-colors border border-white/5 px-3 py-1 rounded-full hover:border-champagne/20">
                🍷 와인 칼럼 전체보기
              </a>
              <a href="/quiz" class="text-[10px] text-off-white/30 hover:text-champagne/60 transition-colors border border-white/5 px-3 py-1 rounded-full hover:border-champagne/20">
                🍾 나의 샴페인 찾기
              </a>
              <a href="/gallery" class="text-[10px] text-off-white/30 hover:text-champagne/60 transition-colors border border-white/5 px-3 py-1 rounded-full hover:border-champagne/20">
                📸 갤러리
              </a>
              <a href="/blog" class="text-[10px] text-off-white/30 hover:text-champagne/60 transition-colors border border-white/5 px-3 py-1 rounded-full hover:border-champagne/20">
                📝 블로그
              </a>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      {article.faq && article.faq.length > 0 && (
        <section class="py-16 md:py-20 border-t border-white/5 bg-soft-black/20">
          <div class="max-w-3xl mx-auto px-6 md:px-12">
            <h2 class="font-playfair text-xl md:text-2xl font-light mb-10 text-center">
              자주 묻는 질문
            </h2>
            <div class="space-y-4">
              {article.faq.map((item, idx) => (
                <details class="group border border-white/5 rounded-sm bg-soft-black/30 hover:border-champagne/10 transition-colors">
                  <summary class="cursor-pointer p-5 md:p-6 flex items-center justify-between text-sm md:text-base text-off-white/80 font-light">
                    <span class="flex items-center gap-3">
                      <span class="text-champagne/40 font-playfair">Q.</span>
                      {item.question}
                    </span>
                    <span class="text-champagne/30 group-open:rotate-45 transition-transform duration-300 text-lg">+</span>
                  </summary>
                  <div class="px-5 pb-5 md:px-6 md:pb-6 pt-0">
                    <div class="pl-6 text-[13px] text-off-white/50 font-light leading-relaxed border-l border-champagne/10">
                      <span class="text-champagne/40 font-playfair mr-1">A.</span>
                      {item.answer}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {related.length > 0 && (
        <section class="py-16 md:py-20 border-t border-white/5">
          <div class="max-w-5xl mx-auto px-6 md:px-12">
            <h2 class="font-playfair text-xl md:text-2xl font-light mb-10 text-center">
              관련 칼럼
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map(r => r && (
                <a href={`/wine/${r.slug}`} class="group block bg-soft-black/40 border border-white/5 rounded-sm p-6 hover:border-champagne/20 hover:bg-soft-black/60 transition-all duration-500">
                  <span class="text-[9px] tracking-wider uppercase text-champagne/50">{r.category}</span>
                  <h3 class="font-noto-serif text-[15px] text-off-white/85 group-hover:text-champagne transition-colors mt-2 mb-2 leading-snug line-clamp-2">
                    {r.title}
                  </h3>
                  <p class="text-[11px] text-off-white/30 line-clamp-2">{r.subtitle}</p>
                  <span class="text-[10px] text-champagne/40 mt-3 inline-block group-hover:text-champagne transition-colors">Read →</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back + CTA */}
      <section class="py-16 md:py-20 bg-soft-black/30 border-t border-white/5">
        <div class="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <a href="/wine" class="text-[11px] tracking-[0.2em] uppercase text-off-white/40 hover:text-champagne transition-colors mb-8 inline-block">
            ← 칼럼 목록으로
          </a>
          <div class="mt-6">
            <p class="text-off-white/30 text-sm font-light mb-6">이 칼럼의 와인을 직접 경험해보세요</p>
            <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener" class="inline-block text-[11px] tracking-[0.2em] uppercase border border-champagne/40 text-champagne px-8 py-3 hover:bg-champagne/10 transition-all duration-500">
              RAWISM 예약하기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-12 border-t border-white/5">
        <div class="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="/" class="group">
            <img src="/static/logo.png" alt="RAWISM The Black" class="h-6 opacity-50 group-hover:opacity-70 transition-opacity" />
          </a>
          <div class="flex items-center gap-4 md:gap-6 text-[10px] text-off-white/30 flex-wrap justify-center">
            <a href="/" class="hover:text-champagne/60 transition-colors">Home</a>
            <a href="/menu" class="hover:text-champagne/60 transition-colors">Menu</a>
            <a href="/wine" class="hover:text-champagne/60 transition-colors text-champagne/50">Wine Guide</a>
            <a href="/gallery" class="hover:text-champagne/60 transition-colors">Gallery</a>
            <a href="/blog" class="hover:text-champagne/60 transition-colors">Blog</a>
            <a href="/quiz" class="hover:text-champagne/60 transition-colors">Quiz</a>
            <a href="/about" class="hover:text-champagne/60 transition-colors">About</a>
          </div>
          <div class="flex flex-col items-center md:items-end gap-1">
            <a href="tel:02-332-7753" class="text-[10px] text-champagne/40 hover:text-champagne transition-colors">📞 02-332-7753</a>
            <p class="text-[10px] text-off-white/20">&copy; 2026 RAWISM The Black</p>
          </div>
        </div>
      </footer>

      {/* Article Styling */}
      <style dangerouslySetInnerHTML={{__html: `
        .wine-article-content {
          font-family: 'Noto Serif KR', 'Pretendard', serif;
          color: rgba(224, 224, 224, 0.7);
          font-weight: 300;
          line-height: 2;
          font-size: 15px;
        }
        .wine-article-content h3 {
          font-family: 'Playfair Display', serif;
          color: rgba(224, 224, 224, 0.9);
          font-size: 1.25rem;
          font-weight: 400;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(184, 160, 96, 0.15);
        }
        .wine-article-content h4 {
          color: rgba(184, 160, 96, 0.8);
          font-size: 1rem;
          font-weight: 500;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .wine-article-content p {
          margin-bottom: 1.25rem;
        }
        .wine-article-content strong {
          color: rgba(224, 224, 224, 0.9);
          font-weight: 500;
        }
        .wine-article-content ul, .wine-article-content ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        .wine-article-content li {
          margin-bottom: 0.5rem;
          color: rgba(224, 224, 224, 0.6);
        }
        .wine-article-content li strong {
          color: rgba(224, 224, 224, 0.85);
        }
        .wine-article-content blockquote {
          border-left: 2px solid rgba(184, 160, 96, 0.3);
          padding-left: 1.25rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: rgba(224, 224, 224, 0.5);
        }
        .wine-article-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 13px;
        }
        .wine-article-content th {
          background: rgba(184, 160, 96, 0.08);
          color: rgba(184, 160, 96, 0.8);
          font-weight: 500;
          text-align: left;
          padding: 0.75rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .wine-article-content td {
          padding: 0.6rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: rgba(224, 224, 224, 0.6);
        }
        .wine-article-content a {
          color: rgba(184, 160, 96, 0.8);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .wine-article-content a:hover {
          color: rgb(184, 160, 96);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .wine-article-content { font-size: 16px; }
          .wine-article-content h3 { font-size: 1.4rem; }
        }
      `}} />
    </main>
  )
}
