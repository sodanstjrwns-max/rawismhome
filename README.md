# ROWISM The Black - 프리미엄 와인바 홈페이지

## Project Overview
- **Name**: ROWISM The Black
- **Goal**: 연남동 프리미엄 와인바의 브랜드 아이덴티티 전달 및 예약 전환율 극대화
- **Features**: 블랙 베이스 프리미엄 디자인, 설득 구조 (Problem → Solution → CTA), SEO/GEO 최적화

## URLs
- **Preview**: https://3000-i3qbbw9ggr4fmfqk442tc-a402f90a.sandbox.novita.ai
- **Production**: (Cloudflare Pages 배포 후 업데이트)

## Tech Stack
- **Framework**: Hono (TypeScript)
- **Styling**: Tailwind CSS (CDN)
- **Fonts**: Playfair Display, Noto Serif KR, Pretendard
- **Deployment**: Cloudflare Pages
- **Build Tool**: Vite

## 완료된 기능

### 1. Hero Section (첫 화면)
- 풀스크린 블랙 베이스 배경
- 샴페인 버블 애니메이션
- "ROWISM The Black" 로고 타이포그래피
- 슬로건: "연남동에서 가장 특별한 밤"
- CTA 버튼 (예약하기)

### 2. Problem Section (공감)
- 타겟 고객의 페인포인트 5가지
- 카드 형태 레이아웃
- 호버 효과

### 3. Solution Section (해결책)
- ROWISM의 4가지 핵심 가치
- 아이콘 + 설명 구조
- 스크롤 애니메이션

### 4. Menu Section (메뉴)
- 시그니처 메뉴 강조 (로위즘 뭉티기 시그니처 ₩92,000)
- 사이드 메뉴 5가지
- 가격 투명성

### 5. Experience Section (경험)
- 웰컴 스파클링, 무드 라이팅, 큐레이팅 뮤직, 고디바 피니시
- 원형 아이콘 디자인

### 6. When to Visit Section (추천 상황)
- 기념일 데이트, 프로포즈, 축하할 일, 나를 위한 밤
- 호버 시 상승 효과

### 7. Location Section (위치)
- Google Maps 임베드 (다크 모드 필터 적용)
- 주소, 지하철, 영업시간, 주차 정보

### 8. FAQ Section (SEO/GEO 최적화)
- 아코디언 형태
- 지역 관련, 메뉴 관련, 예약/방문 관련 질문
- Schema.org 구조화 데이터

### 9. CTA Section (예약 유도)
- 네이버 예약 버튼 (그린)
- 전화 예약 버튼 (골드)

### 10. Footer
- 브랜드 정보
- 연락처
- SNS 링크 (Instagram, Naver)

## SEO 최적화

### Meta Tags
- Title: "ROWISM The Black | 연남동 프리미엄 와인바 & 한우 뭉티기 | 데이트 기념일 맛집"
- Description: 트러플 한우 뭉티기와 샴페인이 만나는 특별한 밤
- Keywords: 연남동 와인바, 연남동 데이트, 홍대 와인바, 한우 뭉티기 등

### Schema.org
- Restaurant 타입 구조화 데이터
- 주소, 영업시간, 메뉴 정보 포함

## 디자인 시스템

### Color Palette
- Deep Black: `#0A0A0A`
- Soft Black: `#1A1A1A`
- Deep Wine: `#8B2D3A`
- Champagne Gold: `#C9A962`
- Off White: `#E8E8E8`

### Typography
- 영문: Playfair Display (고급스러운 세리프)
- 한글: Noto Serif KR, Pretendard

## 프로젝트 구조
```
webapp/
├── src/
│   ├── index.tsx       # 메인 페이지 (원페이지)
│   └── renderer.tsx    # HTML 렌더러 (SEO, 메타태그)
├── public/
│   └── static/
│       ├── style.css   # 커스텀 CSS (애니메이션, 스크롤바 등)
│       └── app.js      # 인터랙티브 기능 (FAQ, 모바일 메뉴 등)
├── ecosystem.config.cjs # PM2 설정
├── wrangler.jsonc      # Cloudflare 설정
├── package.json
└── vite.config.ts
```

## 개발 명령어

```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# PM2로 서버 실행 (샌드박스)
pm2 start ecosystem.config.cjs

# Cloudflare Pages 배포
npm run deploy
```

## 미구현 / 향후 개선 사항

1. **실제 매장 사진 추가**
   - Hero 섹션 배경 이미지/영상
   - 메뉴 사진
   - 인테리어 사진

2. **실제 연락처 업데이트**
   - 전화번호 (현재 010-0000-0000)
   - 네이버 예약 실제 링크
   - 인스타그램 실제 링크

3. **네이버 지도 임베드**
   - Google Maps → Naver Maps 변경 고려

4. **추가 FAQ 콘텐츠**
   - 더 많은 SEO 최적화 질문 추가

5. **성능 최적화**
   - 이미지 최적화 (WebP 포맷)
   - 폰트 서브셋팅

## 배포 상태
- **Platform**: Cloudflare Pages (예정)
- **Status**: 개발 완료, 배포 대기
- **Last Updated**: 2025-02-03
