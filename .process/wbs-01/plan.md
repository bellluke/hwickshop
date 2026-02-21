# WBS-01 실행 계획: hwick.shop 사이트 구축

## 개요

**목표**: 쿠팡 파트너스 어필리에이트 쇼핑 가이드 사이트 구축
**도메인**: hwick.shop
**배포**: Cloudflare Workers (Static Assets) — Pages 폐지에 따른 새 방식

## 기술 스택 결정

### golagola 프로젝트 기준 스택 적용

| 기술 | 버전 | 용도 | 비고 |
|------|------|------|------|
| Astro | ^5 | SSG 프레임워크 | Content Collections로 34개 마크다운 관리 |
| React | ^19 | 인터랙티브 컴포넌트 | 체크리스트, TOC 등 클라이언트 상호작용 |
| Tailwind CSS | ^4 | 스타일링 | @tailwindcss/vite 플러그인 방식 |
| TypeScript | strict | 타입 안전성 | astro/tsconfigs/strict 상속 |
| wrangler | ^4 | 배포 CLI | wrangler.jsonc (새 표준) |
| @astrojs/react | ^4 | Astro-React 통합 | |
| @astrojs/sitemap | ^3 | SEO sitemap 자동 생성 | |

### 기획서(BUILD-PROMPT.md) 대비 변경사항

기획서에서는 `HTML + Tailwind CDN + Vanilla JS`를 명시했으나, 아래 이유로 Astro 스택으로 변경:

1. **콘텐츠 관리**: 34개 마크다운 문서 → Astro Content Collections가 최적
2. **컴포넌트 재사용**: 상품 카드, 체크리스트 등 반복 컴포넌트 → Astro/React 컴포넌트
3. **빌드 결과 동일**: Astro는 최종적으로 정적 HTML을 생성하므로 성능 차이 없음
4. **SEO**: Astro의 빌트인 기능(sitemap, RSS, head 관리)이 수동 관리보다 우수
5. **사용자 요청**: golagola 프로젝트와 동일 스택 사용 지시

### Cloudflare 배포 변경사항

- Pages는 2025년 4월 공식 폐지(deprecated), Workers로 통합
- `wrangler pages deploy` → `wrangler deploy`
- `wrangler.toml` → `wrangler.jsonc` (신규 프로젝트 권장)
- `pages_build_output_dir` → `assets.directory`
- 로컬 개발 포트: 8788 → 8787

---

## Phase 1: 프로젝트 초기 설정

### 1-1. Astro 프로젝트 생성 및 의존성 설치

**작업 내용:**
- `npm create astro@latest` 또는 수동 package.json 구성
- 핵심 의존성 설치: astro, react, @astrojs/react, @astrojs/sitemap
- 개발 의존성: tailwindcss, @tailwindcss/vite, typescript, wrangler

**산출물:** package.json, node_modules

### 1-2. Cloudflare Workers 배포 설정

**작업 내용:**
- `wrangler.jsonc` 생성
  ```jsonc
  {
    "name": "hwickshop",
    "compatibility_date": "2026-02-20",
    "assets": {
      "directory": "./dist"
    }
  }
  ```
- npm scripts 설정: dev, build, preview, deploy
- `.gitignore` 설정

**산출물:** wrangler.jsonc, .gitignore

### 1-3. TypeScript, Tailwind CSS 4 설정

**작업 내용:**
- `tsconfig.json`: astro/tsconfigs/strict 상속, path alias `@/*`
- `astro.config.mjs`: React 통합, sitemap, Tailwind Vite 플러그인
- Tailwind CSS 4 설정 (Vite 플러그인 방식, 별도 config 파일 불필요)

**산출물:** tsconfig.json, astro.config.mjs

---

## Phase 2: 디자인 시스템 & 레이아웃

### 2-1. 디자인 시스템

**작업 내용:**
- CSS 커스텀 프로퍼티 정의 (BUILD-PROMPT.md 브랜드 스펙 기준)
  - 컬러: primary(#F97316), bg(#FFFBF5), 카테고리별 컬러 8종
  - 타이포: Pretendard (본문), Space Mono (숫자/가격)
- 글로벌 스타일: 리셋, 기본 타이포, 본문 max-width 720px
- Tailwind CSS 4 theme 확장 (CSS 변수 연동)

**참조:** `docs/style-guide.md`, `docs/BUILD-PROMPT.md`
**산출물:** src/styles/global.css

### 2-2. BaseLayout 컴포넌트

**작업 내용:**
- `BaseLayout.astro`: HTML 셸, 메타 태그 슬롯, 폰트 로딩
- `Header.astro`: 로고 "휙" + 검색 아이콘 + 햄버거 메뉴
- `Footer.astro`: 태그라인 + 디스클레이머 + 카테고리 링크
- 모바일 네비게이션 메뉴 (8개 카테고리)
- Lucide Icons SVG 사용 (이모지 아이콘 금지)

**참조:** `docs/wireframe.md`
**산출물:** src/components/layout/BaseLayout.astro, Header.astro, Footer.astro

---

## Phase 3: 콘텐츠 컴포넌트

### 3-1. 상품 카드 컴포넌트

**작업 내용:**
- `ProductCard.astro`: 이미지, 상품명, 별점, 가격, 한줄 설명, CTA
- 반응형: 모바일(세로) ↔ 데스크탑(가로)
- CTA 버튼: `rel="nofollow sponsored"` 필수
- hover 효과: translateY(-1px), 그림자 변화

**산출물:** src/components/content/ProductCard.astro

### 3-2. 인터랙티브 체크리스트 (React)

**작업 내용:**
- `Checklist.tsx`: React 클라이언트 컴포넌트 (`client:load`)
- 체크 시 합계 자동 계산
- 체크 상태 line-through 스타일
- localStorage 체크 상태 저장/복원
- 카테고리별 그룹핑 (필수/선택/나중에)

**산출물:** src/components/content/Checklist.tsx

### 3-3. 예산 요약 박스

**작업 내용:**
- `BudgetBox.astro`: 절약형/표준형/넉넉형 3단 바 차트
- CSS --percent 변수로 바 너비 제어
- 색상: 절약=#10B981, 표준=#F97316, 넉넉=#8B5CF6

**산출물:** src/components/content/BudgetBox.astro

### 3-4. 팁 박스, "안 사도 되는 것" 컴포넌트

**작업 내용:**
- `TipBox.astro`: 선배 팁 인용 박스 (연노랑 배경, 좌측 주황 보더)
- `DontBuy.astro`: 불필요 항목 경고 (연회색 배경, 좌측 빨간 보더)

**산출물:** src/components/content/TipBox.astro, DontBuy.astro

### 3-5. 목차(TOC) 컴포넌트

**작업 내용:**
- `TableOfContents.tsx`: React 클라이언트 컴포넌트
- 데스크탑: 사이드 고정 (sticky)
- 모바일: 상단 접히는 아코디언
- Intersection Observer로 현재 섹션 하이라이트

**산출물:** src/components/content/TableOfContents.tsx

---

## Phase 4: 콘텐츠 시스템

### 4-1. Content Collections 스키마 정의

**작업 내용:**
- 콘텐츠 스키마 정의 (content/config.ts):
  ```typescript
  {
    title: string,
    description: string,
    category: 'home' | 'baby' | 'health' | 'school' | 'start' | 'gift' | 'pet',
    articleType: 'checklist' | 'top5' | 'comparison' | 'guide' | 'starter-kit',
    tags: string[],
    linkCount: number,
    readingTime: string,
    publishedAt: Date,
    updatedAt?: Date,
    budget?: { economy: number, standard: number, generous: number },
    seasonal?: string,
  }
  ```
- 카테고리 데이터 정의 (src/data/)

**산출물:** src/content/config.ts, src/data/categories.ts

### 4-2. 마크다운 콘텐츠 구조화 (샘플 3개)

**작업 내용:**
- docs/content/ 마크다운을 Astro Content Collections 형식으로 변환
- frontmatter 추가
- 커스텀 컴포넌트를 MDX 또는 커스텀 remark 플러그인으로 처리
- 샘플 3개 우선 이식: S01(초등입학), H01(자취필수), P01(강아지입양)

**산출물:** src/content/articles/*.md (또는 *.mdx)

### 4-3. 글 페이지 템플릿

**작업 내용:**
- `src/pages/[category]/[...slug].astro`: 동적 라우팅
- 카테고리 뱃지, H1, 메타(날짜/읽는시간/링크수)
- TOC + 본문 + 관련 글 추천
- 쿠팡 파트너스 디스클레이머 (고정)

**산출물:** src/pages/[category]/[...slug].astro

### 4-4. 카테고리 페이지 템플릿

**작업 내용:**
- `src/pages/[category]/index.astro`: 카테고리별 글 목록
- 카테고리 타이틀 + 설명 + 글 카드 리스트
- 썸네일 + 제목 + 요약 + 링크 수

**산출물:** src/pages/[category]/index.astro

### 4-5. 홈페이지

**작업 내용:**
- 히어로: "처음 사는 건 여기서부터"
- 카테고리 그리드: 8개 카드
- 인기 가이드: 가로 스크롤 카드
- 시즌 배너

**참조:** `docs/wireframe.md`
**산출물:** src/pages/index.astro

---

## Phase 5: SEO & 메타데이터

### 5-1. 메타 태그, OG 태그 시스템

**작업 내용:**
- BaseLayout에 동적 메타 태그 슬롯
- OG 태그: title, description, image, type, site_name
- canonical URL 자동 생성

**참조:** `docs/seo-guide.md`

### 5-2. 구조화 데이터

**작업 내용:**
- Article schema (모든 글)
- ItemList schema (체크리스트 글)
- FAQPage schema (FAQ 포함 글)
- JSON-LD 스크립트 자동 삽입

### 5-3. sitemap.xml, robots.txt

**작업 내용:**
- @astrojs/sitemap 활용 자동 생성
- robots.txt 정적 파일 (public/)

---

## Phase 6: 배포 & 최적화

### 6-1. Cloudflare Workers 배포 테스트

**작업 내용:**
- `npm run build && wrangler deploy` 실행
- 도메인 연결 확인 (hwick.shop)
- HTTPS, 리다이렉트 확인

### 6-2. 성능 최적화 및 접근성 검증

**작업 내용:**
- Core Web Vitals: LCP < 2.5s, CLS < 0.1
- 이미지: lazy loading, width/height 명시
- 접근성: alt 텍스트, 포커스 링, 터치 타겟 44px, 대비 4.5:1
- 반응형: 375px, 768px, 1024px, 1440px

---

## Phase 7: 콘텐츠 확장

### 7-1. 나머지 콘텐츠 이식 (31개)

**작업 내용:**
- docs/content/ 나머지 31개 마크다운 → Content Collections 변환
- 카테고리별 일괄 처리

### 7-2. 최종 QA 및 배포

**작업 내용:**
- 전체 페이지 링크 점검
- SEO 검증 (구조화 데이터, sitemap)
- 최종 프로덕션 배포

---

## 주요 고려사항

### 이슈 없음 — 스택 적용 무리 없음

1. **콘텐츠 형식**: 34개 마크다운 문서가 이미 잘 구조화되어 있어 Astro Content Collections 적용 용이
2. **인터랙티브 요소**: 체크리스트(합계 계산, localStorage 저장)는 React 컴포넌트로 자연스럽게 구현
3. **정적 사이트**: Astro SSG 빌드 → Cloudflare Workers 정적 에셋 배포, 서버 사이드 로직 불필요
4. **golagola 대비 불필요한 것**: Zustand, Framer Motion (hwick.shop은 단순한 콘텐츠 사이트)

### 콘텐츠 마크다운 처리 전략

기획 문서의 마크다운에 HTML 컴포넌트(상품 카드, 체크리스트 등)가 직접 포함되어 있음.
두 가지 접근 가능:
- **방법 A**: MDX 사용 — 마크다운 안에서 React/Astro 컴포넌트 직접 임포트
- **방법 B**: 커스텀 remark 플러그인 — 특정 마크다운 패턴을 컴포넌트로 변환

→ **방법 A(MDX) 채택 예정**: 기존 콘텐츠를 MDX로 변환하고 컴포넌트 임포트

### 예상 일정

| Phase | 단계 수 | 예상 규모 |
|-------|---------|----------|
| 1. 초기 설정 | 3 | 소 |
| 2. 디자인 & 레이아웃 | 2 | 중 |
| 3. 콘텐츠 컴포넌트 | 5 | 대 |
| 4. 콘텐츠 시스템 | 5 | 대 |
| 5. SEO | 3 | 중 |
| 6. 배포 & 최적화 | 2 | 중 |
| 7. 콘텐츠 확장 | 2 | 대 |
