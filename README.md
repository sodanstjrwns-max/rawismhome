# ROWISM The Black - 연남동 프리미엄 샴페인바

## Project Overview
- **Name**: ROWISM The Black
- **Goal**: 연남동 프리미엄 샴페인바의 브랜드 아이덴티티 전달 및 예약 전환율 극대화
- **Features**: 
  - 다국어 지원 (한국어/영어/일본어/중국어)
  - 14개 JSON-LD 스키마, 33개 스키마 타입 적용
  - SEO 최적화 (hreflang, canonical, OG, Twitter Cards)

## URLs

### Production
- **Main Site**: https://rawism.pages.dev
- **Custom Domain** (예정): https://rawism.kr

### Pages (다국어 지원)

| Page | Korean | English | Japanese | Chinese |
|------|--------|---------|----------|---------|
| Home | [/](https://rawism.pages.dev/) | [/en](https://rawism.pages.dev/en) | [/ja](https://rawism.pages.dev/ja) | [/zh](https://rawism.pages.dev/zh) |
| Menu | [/menu](https://rawism.pages.dev/menu) | [/en/menu](https://rawism.pages.dev/en/menu) | [/ja/menu](https://rawism.pages.dev/ja/menu) | [/zh/menu](https://rawism.pages.dev/zh/menu) |
| About | [/about](https://rawism.pages.dev/about) | [/en/about](https://rawism.pages.dev/en/about) | [/ja/about](https://rawism.pages.dev/ja/about) | [/zh/about](https://rawism.pages.dev/zh/about) |

### Technical Pages
- **Sitemap**: https://rawism.pages.dev/sitemap.xml
- **Robots**: https://rawism.pages.dev/robots.txt

## Tech Stack
- **Framework**: Hono (TypeScript)
- **Styling**: Tailwind CSS (CDN)
- **Fonts**: Playfair Display, Noto Serif KR, Pretendard
- **Deployment**: Cloudflare Pages
- **Build Tool**: Vite

## 완료된 기능

### 다국어 SEO 최적화
- ✅ hreflang 태그 (ko/en/ja/zh + x-default)
- ✅ Canonical URL 설정
- ✅ Open Graph 다국어 메타
- ✅ Twitter Cards 다국어 메타
- ✅ 언어별 메타 title/description/keywords

### 구조화 데이터 (14개 스키마 블록, 33개 타입)
- ✅ Restaurant (주요 정보)
- ✅ LocalBusiness (지역 비즈니스)
- ✅ Organization (조직 정보)
- ✅ WebSite (사이트 정보)
- ✅ WebPage (페이지 정보)
- ✅ FAQPage (6개 Q&A × 4개 언어)
- ✅ Menu (6개 메뉴 아이템 × 4개 언어)
- ✅ Place (위치/편의시설)
- ✅ Event (이벤트)
- ✅ Review/Rating (리뷰/별점)
- ✅ ItemList (메뉴 리스트)
- ✅ FoodEstablishment (음식점)
- ✅ BarOrPub (바)
- ✅ BreadcrumbList (네비게이션)

### 페이지 구성

#### 홈페이지 (/)
1. **Hero Section** - 풀스크린 블랙 베이스, 로고
2. **Quote Section** - 브랜드 철학
3. **Pain Points Section** - 타겟 고객 공감
4. **Philosophy Section** - 브랜드 스토리
5. **Menu Section** - 시그니처 메뉴 쇼케이스
6. **Experience Section** - 방문 경험 타임라인
7. **Recommend Section** - 추천 대상
8. **Occasions Section** - 특별한 순간
9. **Location Section** - 위치 및 접근성
10. **Reviews Section** - 고객 후기
11. **FAQ Section** - 자주 묻는 질문
12. **CTA Section** - 예약 유도
13. **Footer** - 연락처 및 SNS

#### 메뉴 페이지 (/menu)
- 시그니처 메뉴 상세 설명
- 전체 메뉴 리스트 (가격 포함)
- 메뉴별 재료 정보
- Menu 스키마 + BreadcrumbList 스키마

#### 소개 페이지 (/about)
- 브랜드 히스토리
- ROWISM 철학 상세
- 공간 소개 (8석 프라이빗)
- 팀/서비스 소개
- AboutPage 스키마 + BreadcrumbList 스키마

## 프로젝트 구조
```
webapp/
├── src/
│   ├── index.tsx              # 메인 라우터 + 홈페이지
│   ├── renderer.tsx           # 홈페이지 SEO 렌더러
│   ├── pages/
│   │   ├── MenuPage.tsx       # 메뉴 페이지 컴포넌트
│   │   └── AboutPage.tsx      # 소개 페이지 컴포넌트
│   └── renderers/
│       ├── menuRenderer.tsx   # 메뉴 페이지 SEO 렌더러
│       └── aboutRenderer.tsx  # 소개 페이지 SEO 렌더러
├── public/
│   └── static/
│       ├── logo.png
│       ├── og-image.jpg
│       ├── menu_*.jpg         # 메뉴 이미지들
│       ├── style.css
│       └── translations.js    # 다국어 번역 데이터
├── ecosystem.config.cjs       # PM2 설정
├── wrangler.jsonc             # Cloudflare 설정
├── package.json
├── vite.config.ts
├── SEO_REPORT.md              # SEO 분석 리포트
└── ROWISM_VALUE_REPORT.md     # 가치 제안 리포트
```

## 개발 명령어

```bash
# 빌드
npm run build

# PM2로 개발 서버 시작 (샌드박스)
pm2 start ecosystem.config.cjs

# 로그 확인
pm2 logs --nostream

# Cloudflare Pages 배포
npx wrangler pages deploy dist --project-name rawism

# 전체 재시작
fuser -k 3000/tcp; npm run build; pm2 start ecosystem.config.cjs
```

## SEO 점수 현황 (목표 대비)

| 카테고리 | 점수 | 상세 |
|---------|------|------|
| 기술 SEO | 95/100 | 모바일 최적화, 속도, 보안 |
| 온페이지 SEO | 90/100 | 메타태그, 콘텐츠 최적화 |
| 다국어 SEO | 100/100 | hreflang, 다국어 콘텐츠 |
| 로컬 SEO | 90/100 | 지역 스키마, 지도 |
| 구조화 데이터 | 95/100 | 14개 스키마 블록 |

## 다음 단계 (미구현)

### 즉시 실행 가능
1. ⬜ Google Search Console 등록
2. ⬜ 네이버 Search Advisor 등록
3. ⬜ 실제 전화번호 업데이트
4. ⬜ Google Analytics 연동
5. ⬜ 네이버 사이트 인증 코드 적용

### 1-2주 내
6. ⬜ 전용 OG 이미지 제작 (1200x630)
7. ⬜ 실제 매장 사진으로 교체
8. ⬜ /reviews 페이지 추가
9. ⬜ 블로그/뉴스 섹션

### 장기적
10. ⬜ PWA 설정
11. ⬜ Microsoft Clarity 연동
12. ⬜ 예약 위젯 통합
13. ⬜ 인스타그램 피드 연동

## 배포 상태
- **Platform**: Cloudflare Pages
- **Status**: ✅ Production 배포 완료
- **Domain**: rawism.pages.dev (rawism.kr 연결 예정)
- **Last Updated**: 2026-02-06
