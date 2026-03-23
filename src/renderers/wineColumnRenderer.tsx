import { jsxRenderer } from 'hono/jsx-renderer'
import { html } from 'hono/html'
import type { WineColumn } from '../data'

// ============================
// Wine Column LIST Renderer
// ============================
export const createWineListRenderer = () => {
  return jsxRenderer(({ children }) => {
    return (
      <html lang="ko">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>와인 칼럼 | RAWISM The Black | 연남동 샴페인바 와인 가이드</title>
          <meta name="description" content="RAWISM The Black 소믈리에가 전하는 와인·샴페인 칼럼. 샴페인 기초, 와인 입문, 한우 페어링 가이드, 프리미엄 셀렉션. 연남동 최고의 와인바에서 전하는 32편의 와인 이야기." />
          <meta name="keywords" content="와인 칼럼, 샴페인 가이드, 와인 입문, 한우 와인 페어링, 연남동 와인바, RAWISM 소믈리에, 브뤼 뜻, 탄닌 뜻, 디캔팅, 샴페인 종류, 로제 샴페인, 블랑 드 블랑, 와인 잔 종류, 와인 용어, 음식 와인 매칭" />
          <meta name="author" content="RAWISM The Black" />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href="https://rawism.kr/wine" />
          {html`<link rel="alternate" hreflang="ko" href="https://rawism.kr/wine" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/wine" />`}

          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="theme-color" content="#080808" />

          <meta name="geo.region" content="KR-11" />
          <meta name="geo.placename" content="연남동, 마포구, 서울" />

          {/* Open Graph */}
          <meta property="og:title" content="와인 칼럼 | RAWISM The Black 와인 가이드" />
          <meta property="og:description" content="소믈리에가 전하는 와인·샴페인 이야기. 입문부터 프리미엄까지, 한우 페어링 완벽 가이드." />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:site_name" content="RAWISM The Black" />
          <meta property="og:url" content="https://rawism.kr/wine" />
          <meta property="og:image" content="https://rawism.kr/static/og-image.jpg" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="와인 칼럼 | RAWISM The Black" />
          <meta name="twitter:description" content="소믈리에가 전하는 와인·샴페인 이야기. 입문부터 프리미엄까지." />
          <meta name="twitter:image" content="https://rawism.kr/static/og-image.jpg" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Noto+Serif+KR:wght@300;400;500;600;700&family=Pretendard:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

          {/* Tailwind */}
          <script src="https://cdn.tailwindcss.com"></script>
          <script dangerouslySetInnerHTML={{__html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'deep-black': '#080808',
                    'soft-black': '#141414',
                    'champagne': '#B8A060',
                    'off-white': '#E0E0E0',
                  },
                  fontFamily: {
                    'playfair': ['Playfair Display', 'serif'],
                    'noto-serif': ['Noto Serif KR', 'serif'],
                    'pretendard': ['Pretendard', 'sans-serif'],
                  }
                }
              }
            }
          `}} />

          <link href="/static/style.css" rel="stylesheet" />

          {/* Schema.org - CollectionPage */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "와인 칼럼 | RAWISM The Black",
            "description": "RAWISM The Black 소믈리에가 전하는 와인·샴페인 칼럼 컬렉션",
            "url": "https://rawism.kr/wine",
            "inLanguage": "ko",
            "isPartOf": { "@id": "https://rawism.kr/#website" },
            "publisher": {
              "@type": "Organization",
              "name": "RAWISM The Black",
              "url": "https://rawism.kr",
              "logo": "https://rawism.kr/static/logo.png"
            }
          })}} />

          {/* BreadcrumbList */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "RAWISM The Black", "item": "https://rawism.kr" },
              { "@type": "ListItem", "position": 2, "name": "와인 칼럼", "item": "https://rawism.kr/wine" }
            ]
          })}} />
        </head>
        <body class="bg-deep-black text-off-white font-pretendard">
          {children}
        </body>
      </html>
    )
  })
}

// ============================
// Wine Column DETAIL Renderer
// ============================
export const createWineDetailRenderer = (article: WineColumn) => {
  return jsxRenderer(({ children }) => {
    const faqSchema = article.faq && article.faq.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": article.faq.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    } : null

    return (
      <html lang="ko">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{article.title} | RAWISM The Black 와인 칼럼</title>
          <meta name="description" content={article.description} />
          <meta name="keywords" content={article.keywords.join(', ')} />
          <meta name="author" content="RAWISM The Black" />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href={`https://rawism.kr/wine/${article.slug}`} />
          {html`<link rel="alternate" hreflang="ko" href="https://rawism.kr/wine/${article.slug}" />
          <link rel="alternate" hreflang="x-default" href="https://rawism.kr/wine/${article.slug}" />`}

          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="theme-color" content="#080808" />

          {/* Open Graph */}
          <meta property="og:title" content={`${article.title} | RAWISM`} />
          <meta property="og:description" content={article.description} />
          <meta property="og:type" content="article" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:site_name" content="RAWISM The Black" />
          <meta property="og:url" content={`https://rawism.kr/wine/${article.slug}`} />
          <meta property="og:image" content="https://rawism.kr/static/og-image.jpg" />
          <meta property="article:published_time" content={article.date} />
          <meta property="article:section" content={article.category} />
          {article.keywords.map(kw => (
            <meta property="article:tag" content={kw} />
          ))}

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={article.title} />
          <meta name="twitter:description" content={article.description} />
          <meta name="twitter:image" content="https://rawism.kr/static/og-image.jpg" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Noto+Serif+KR:wght@300;400;500;600;700&family=Pretendard:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

          {/* Tailwind */}
          <script src="https://cdn.tailwindcss.com"></script>
          <script dangerouslySetInnerHTML={{__html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'deep-black': '#080808',
                    'soft-black': '#141414',
                    'champagne': '#B8A060',
                    'off-white': '#E0E0E0',
                  },
                  fontFamily: {
                    'playfair': ['Playfair Display', 'serif'],
                    'noto-serif': ['Noto Serif KR', 'serif'],
                    'pretendard': ['Pretendard', 'sans-serif'],
                  }
                }
              }
            }
          `}} />

          <link href="/static/style.css" rel="stylesheet" />

          {/* Schema.org - Article */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.description,
            "image": "https://rawism.kr/static/og-image.jpg",
            "datePublished": article.date,
            "dateModified": article.date,
            "author": {
              "@type": "Organization",
              "name": "RAWISM The Black",
              "url": "https://rawism.kr"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RAWISM The Black",
              "logo": { "@type": "ImageObject", "url": "https://rawism.kr/static/logo.png" }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://rawism.kr/wine/${article.slug}`
            },
            "articleSection": article.category,
            "keywords": article.keywords.join(', '),
            "wordCount": Math.round(article.content.replace(/<[^>]*>/g, '').length / 3),
            "inLanguage": "ko"
          })}} />

          {/* BreadcrumbList */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "RAWISM The Black", "item": "https://rawism.kr" },
              { "@type": "ListItem", "position": 2, "name": "와인 칼럼", "item": "https://rawism.kr/wine" },
              { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://rawism.kr/wine/${article.slug}` }
            ]
          })}} />

          {/* FAQ Schema */}
          {faqSchema && (
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
          )}
        </head>
        <body class="bg-deep-black text-off-white font-pretendard">
          {children}
        </body>
      </html>
    )
  })
}
