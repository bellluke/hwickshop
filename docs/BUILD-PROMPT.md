# 🛠️ hwick.shop 빌드 프롬프트

> Claude Code에게 이 파일을 통째로 주세요.
> 스킬 설치 후 사용: `npx skills install nextlevelbuilder/ui-ux-pro-max-skill`

---

## 프로젝트 개요

**사이트명**: 휙 (hwick.shop)
**태그라인**: "처음 사는 건 여기서부터"
**목적**: 쇼핑 체크리스트 & 추천 가이드 (쿠팡 파트너스 어필리에이트)
**스택**: HTML + Tailwind CSS + Vanilla JS → Cloudflare Pages 배포
**디자인 스킬**: `ui-ux-pro-max` 사용

---

## Step 0: 디자인 시스템 생성

아래 명령어를 순서대로 실행해서 디자인 시스템을 먼저 만들어줘:

```bash
# 마스터 디자인 시스템
python3 skills/ui-ux-pro-max/scripts/search.py "shopping curation checklist guide warm friendly" --design-system --persist -p "hwick.shop"

# 홈페이지
python3 skills/ui-ux-pro-max/scripts/search.py "landing hero category grid cards" --design-system --persist -p "hwick.shop" --page "home"

# 글 페이지 (핵심)
python3 skills/ui-ux-pro-max/scripts/search.py "article checklist product cards comparison table budget" --design-system --persist -p "hwick.shop" --page "article"

# 카테고리 페이지
python3 skills/ui-ux-pro-max/scripts/search.py "category listing cards grid filter" --design-system --persist -p "hwick.shop" --page "category"

# 스택 가이드
python3 skills/ui-ux-pro-max/scripts/search.py "layout responsive form cards" --stack html-tailwind
```

생성된 `design-system/MASTER.md`를 참조하되, 아래 브랜드 스펙이 우선이야.

---

## Step 1: 브랜드 스펙 (이것이 최종 우선)

### 컬러
```css
:root {
  --primary: #F97316;
  --primary-hover: #EA580C;
  --bg: #FFFBF5;
  --text: #1C1917;
  --text-sub: #78716C;
  --card-bg: #FFFFFF;
  --card-shadow: 0 2px 8px rgba(0,0,0,0.06);
  --card-shadow-hover: 0 4px 16px rgba(0,0,0,0.1);
  
  /* 카테고리 */
  --pet: #F59E0B;
  --sport: #10B981;
  --travel: #0EA5E9;
  --home: #8B5CF6;
  --baby: #F43F5E;
  --school: #6366F1;
  --health: #14B8A6;
  --gift: #EC4899;
}
```

### 타이포그래피
```html
<link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap" rel="stylesheet">
```
- 제목: Pretendard 800 / 32px (모바일 26px)
- 소제목: Pretendard 700 / 24px (모바일 20px)
- 본문: Pretendard 400 / 17px (모바일 16px), line-height 1.75
- 숫자/가격: Space Mono 700
- 본문 max-width: 720px

### 아이콘
- **Lucide Icons** (SVG) 사용. 이모지를 아이콘으로 쓰지 말 것.
- 카테고리 라벨에만 이모지 허용 (🐾, 🚴, ✈️ 등)

---

## Step 2: 페이지 구조

### 공통 레이아웃
```
헤더 (고정): 로고 "휙" + 검색 + 햄버거 메뉴
본문: max-width 720px, 좌우 padding 16px
푸터: 태그라인 + 디스클레이머 + 카테고리 링크
```

### 페이지 목록

#### 1. 홈 (`/index.html`)
- 히어로: "처음 사는 건 여기서부터" + 서브카피
- 카테고리 그리드: 8개 카드 (아이콘 + 이름 + 한줄 설명)
  - 🐾 반려동물, 🚴 운동&취미, ✈️ 여행, 🏠 자취&이사
  - 👶 육아, 🎒 신학기, 💪 건강, 🎁 선물, 🐶 강아지, 🐱 고양이
- 인기 가이드: 카드 3~4개 가로 스크롤 (모바일)
- 시즌 배너: "3월: 신학기 준비 시작하셨나요?"

#### 2. 카테고리 (`/school/index.html` 등)
- 카테고리 타이틀 + 설명
- 글 카드 리스트 (썸네일 + 제목 + 요약 + 링크 수)

#### 3. 글 페이지 (`/school/elementary-2026.html` 등) ⭐핵심
- 카테고리 뱃지 (컬러)
- H1 제목
- 메타: 날짜 · 읽는 시간 · 링크 수
- 목차 (TOC): 데스크탑=사이드 고정, 모바일=접히는 아코디언
- 본문 (마크다운 → HTML 변환)
- **상품 카드 컴포넌트** (아래 참조)
- **체크리스트 컴포넌트** (아래 참조)
- **예산 요약 컴포넌트** (아래 참조)
- 관련 글 추천 (하단)
- 쿠팡 파트너스 디스클레이머 (고정)

---

## Step 3: 핵심 컴포넌트

### 상품 카드
```html
<div class="product-card">
  <img src="상품이미지.webp" alt="상품명" loading="lazy">
  <div class="product-info">
    <h3>로얄캐닌 미니 퍼피 사료 3kg</h3>
    <div class="rating">★ 4.7 · 리뷰 2,340개</div>
    <div class="price">29,900원</div>
    <p class="one-liner">수의사 추천율 1위, 소형견 전용</p>
    <a href="쿠팡링크" class="cta-button" target="_blank" rel="nofollow sponsored">
      🛒 쿠팡에서 보기
    </a>
  </div>
</div>
```
- 모바일: 풀 너비, 이미지 위 텍스트 아래
- 데스크탑: 이미지 좌 텍스트 우 (가로 배치)
- CTA: `--primary` 배경, 흰 텍스트, 라운드 8px, min-height 48px
- 호버: `--primary-hover`, `translateY(-1px)`, 그림자 깊어짐
- `rel="nofollow sponsored"` 필수

### 인터랙티브 체크리스트
```html
<div class="checklist" data-category="필수">
  <div class="checklist-item">
    <input type="checkbox" id="item-1">
    <label for="item-1">
      <span class="item-name">연필 (HB) 12자루</span>
      <span class="item-price" data-price="3900">3,900원</span>
      <a href="쿠팡링크" class="item-link" target="_blank" rel="nofollow sponsored">보기→</a>
    </label>
  </div>
  <!-- 더 많은 아이템 -->
  <div class="checklist-total">
    체크한 항목 합계: <span class="total-price">0원</span>
  </div>
</div>
```
- JS: 체크 시 합계 자동 계산, 체크한 항목 줄 긋기 (text-decoration: line-through)
- localStorage에 체크 상태 저장 (재방문 시 유지)

### 예산 요약 박스
```html
<div class="budget-summary">
  <h3>💰 예산 총정리</h3>
  <div class="budget-tier" data-tier="save">
    <span class="tier-label">절약형</span>
    <div class="budget-bar" style="--percent: 35%"></div>
    <span class="tier-price">7만원</span>
  </div>
  <div class="budget-tier" data-tier="standard">
    <span class="tier-label">표준형</span>
    <div class="budget-bar" style="--percent: 65%"></div>
    <span class="tier-price">14만원</span>
  </div>
  <div class="budget-tier" data-tier="comfort">
    <span class="tier-label">넉넉형</span>
    <div class="budget-bar" style="--percent: 100%"></div>
    <span class="tier-price">22만원</span>
  </div>
</div>
```
- 바 차트: CSS `--percent` 변수로 너비
- 색상: 절약=#10B981, 표준=#F97316, 넉넉=#8B5CF6

### "안 사도 되는 것" 섹션
```html
<div class="dont-buy">
  <h3>❌ 안 사도 되는 것</h3>
  <ul>
    <li><strong>필통</strong> — 학교에서 주는 곳 많음</li>
    <li><strong>36색 색연필</strong> — 12색이면 충분</li>
  </ul>
</div>
```
- 배경: 연한 회색 (`#F5F5F4`)
- 좌측 빨간 보더 4px

### 선배 팁 박스
```html
<div class="tip-box">
  <p>"1학년은 가방이 걸어다니는 수준이에요. 예쁜 것보다 가벼운 것이 답입니다."</p>
  <span class="tip-author">— 초등 학부모 6년차</span>
</div>
```
- 배경: `#FFFBEB` (연한 노랑)
- 좌측 `--primary` 보더 4px

---

## Step 4: SEO

### 메타 태그 (모든 페이지)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{핵심키워드} — {보조설명} | 휙</title>
<meta name="description" content="{120~155자 설명}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:image" content="{썸네일}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="휙 hwick.shop">
<link rel="canonical" href="https://hwick.shop/{path}/">
```

### 구조화 데이터
- 모든 글: `Article` schema
- 체크리스트 글: `ItemList` schema
- FAQ 있으면: `FAQPage` schema

### sitemap.xml, robots.txt 자동 생성

---

## Step 5: 기술 요구사항

### 성능
- 정적 HTML (빌드 도구 없음)
- 이미지: WebP, lazy loading, width/height 명시
- CSS: Tailwind CDN 또는 빌드된 CSS 파일
- JS: Vanilla만, 번들러 없음
- Core Web Vitals: LCP < 2.5s, CLS < 0.1

### 접근성 (Pre-Delivery Checklist)
- [ ] 모든 이미지에 alt 텍스트
- [ ] 클릭 가능 요소에 cursor-pointer
- [ ] 호버 시 smooth transition (200ms)
- [ ] 포커스 링 visible (키보드 네비게이션)
- [ ] 텍스트 대비 4.5:1 이상
- [ ] prefers-reduced-motion 존중
- [ ] 반응형: 375px, 768px, 1024px, 1440px
- [ ] 모바일 가로 스크롤 없음
- [ ] 터치 타겟 44px 이상
- [ ] 이모지를 UI 아이콘으로 사용하지 않음 (Lucide SVG)

### 안 할 것 (Anti-Patterns)
- ❌ AI 보라/핑크 그라데이션
- ❌ 네온 컬러
- ❌ 과한 애니메이션 (500ms 이상)
- ❌ 다크 모드 (밝은 테마만)
- ❌ 배경 패턴/노이즈
- ❌ scale transform 호버 (레이아웃 시프트 유발)

---

## Step 6: 파일 구조

```
hwick-shop/
├── index.html                    ← 홈
├── school/
│   ├── index.html                ← 신학기 카테고리
│   └── elementary-2026.html      ← S01 글
├── home/
│   ├── index.html                ← 생활 카테고리
│   └── studio-essentials.html    ← H01 글
├── start/
│   ├── index.html                ← 스타터킷 메인
│   ├── puppy.html                ← P01 글
│   └── running.html              ← SP01 글
├── css/
│   └── style.css                 ← Tailwind + 커스텀
├── js/
│   ├── checklist.js              ← 체크리스트 인터랙션
│   └── toc.js                    ← 목차 하이라이트
├── images/
├── sitemap.xml
├── robots.txt
└── design-system/                ← ui-ux-pro-max 생성
    ├── MASTER.md
    └── pages/
```

---

## Step 7: 샘플 콘텐츠

첫 번째 글로 아래 마크다운을 HTML로 변환해줘:
- `samples/S01-elementary-entrance.md` → `/school/elementary-2026.html`

쿠팡 링크 자리(`(쿠팡링크)`)는 `href="#"` + `data-product="상품명"`으로 플레이스홀더 처리.
나중에 실제 링크로 교체할 거야.

---

## 우선 빌드 순서

1. 공통 레이아웃 (헤더, 푸터, CSS 변수)
2. 글 페이지 템플릿 + 컴포넌트 (상품카드, 체크리스트, 예산박스)
3. S01 초등 입학 준비물 (샘플 콘텐츠 적용)
4. 홈페이지
5. 카테고리 페이지
6. sitemap.xml, robots.txt
