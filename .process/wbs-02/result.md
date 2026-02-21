# WBS-02 실행 결과: UI/UX 개선

## 빌드 결과
- 12페이지, 1.28초 — 정상 빌드 완료

## 변경 파일 목록 (11개)

### 디자인 토큰
- `src/styles/global.css` — 색상·타이포·그림자·라운드 전면 재설계

### 레이아웃
- `src/components/layout/Header.astro` — 절제된 헤더
- `src/components/layout/Footer.astro` — 배경 제거, 텍스트 좌측 정렬

### 페이지
- `src/pages/index.astro` — 홈 레이아웃 재설계
- `src/pages/[category]/index.astro` — 카테고리 페이지 단순화
- `src/pages/[category]/[slug].astro` — 글 페이지 prose 스타일 재설계

### 컴포넌트
- `src/components/content/ProductCard.astro` — 텍스트 링크 CTA로 변경
- `src/components/content/Checklist.tsx` — 카드 제거, 본문 흐름 통합
- `src/components/content/BudgetBox.astro` — 단색 오렌지 투명도 3단계
- `src/components/content/TipBox.astro` — 배경색/이탤릭 제거, 얇은 좌측 선만
- `src/components/content/DontBuy.astro` — 배경/보더 제거, 미니멀 스타일

## 주요 변경 사항 요약

### 1. 색상 — "8색 고채도" → "1+뉴트럴"
| 항목 | Before | After |
|------|--------|-------|
| 카테고리 색상 | Tailwind 기본 팔레트 8색 (100% 채도) | 뮤트 톤 8색 (60-70% 채도) |
| 배지 스타일 | 컬러 배경(20% 투명도) + 컬러 텍스트 | 텍스트만 (stone 컬러) |
| 이모지 | 전 페이지 이모지 사용 | 전면 제거 |
| 그라디언트 | 시즌 배너에 amber-to-orange | 전면 제거 |
| 텍스트 색상 체계 | text, text-sub 2단계 | text, text-sub, text-muted 3단계 |

### 2. 타이포그래피 — "납작한 위계" → "복합 위계"
| 항목 | Before | After |
|------|--------|-------|
| h1 weight | 800 (extrabold) | 700 (bold) |
| h2 weight | 700 | 600 (semibold) |
| h3 weight | 700 | 600, color: #44403c |
| line-height | 1.75 | 1.7 |
| letter-spacing h1 | -0.02em | -0.03em |
| h2 border-bottom | 1px solid | 제거 |
| strong weight | 700 | 600 |
| content max-width | 720px | 680px |
| padding-inline | 1rem | 1.25rem |

### 3. 그림자·라운드·보더 — "2종 획일" → "4단계 + 절제"
| 항목 | Before | After |
|------|--------|-------|
| 그림자 | shadow-card, shadow-card-hover 2종 | xs/sm/md/lg 4단계 |
| 카드 라운드 | rounded-2xl (16px) | rounded-xl (12px) |
| 배지 라운드 | rounded-full (pill) | 제거 (텍스트만) |
| 카드 보더 | border-stone-200 | border-stone-100 |
| 호버 효과 | -translate-y-px + shadow 변경 | bg-stone-50 (배경색 변화만) |

### 4. 컴포넌트 — "제네릭 위젯" → "글 흐름의 일부"
| 컴포넌트 | Before | After |
|----------|--------|-------|
| ProductCard | 독립 카드 + 풀 CTA 버튼 | 인라인 블록 + 텍스트 링크 |
| Checklist | 카드 + 쇼핑카트 합계 바 | 본문 목록 + 작은 합계 텍스트 |
| BudgetBox | 3색 프로그레스 바 (emerald/orange/violet) | 1색 오렌지 투명도 3단계 |
| TipBox | border-l-4 + 노란 배경 + italic | border-l-1 + 들여쓰기만 |
| DontBuy | border-l-4 + 빨간색 + 배경 | x 아이콘 + 일반 텍스트 |
| Header | 오렌지 로고 + 이모지 메뉴 | 검은 로고 + 텍스트 메뉴 |
| Footer | 회색 배경 + 이모지 링크 | 투명 배경 + 텍스트 링크 |

### 5. 페이지 레이아웃 — "균등 나열" → "리듬과 여백"
| 항목 | Before | After |
|------|--------|-------|
| 홈 카테고리 | 2×4 이모지 카드 그리드 | 텍스트 리스트 + 글 개수 |
| 홈 인기글 | 컬러 배지 + 그림자 카드 | 연한 보더 카드 + 작은 카테고리 텍스트 |
| 시즌 배너 | 그라디언트 배경 카드 | 단순 텍스트 한 줄 |
| 카테고리 페이지 | 이모지 타이틀 + pill 배지 | 텍스트 타이틀 + 인라인 메타 |
| 글 페이지 배지 | 컬러 pill 배지 | 작은 텍스트 링크 |
| 디스클레이머 | 카드 형태 (보더 + 배경) | 상단 구분선만 |
