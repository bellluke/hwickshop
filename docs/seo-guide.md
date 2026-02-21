# 🔍 hwick.shop SEO 가이드

## URL 구조

```
hwick.shop/                          ← 홈
hwick.shop/start/                    ← 스타터킷 시리즈 메인
hwick.shop/start/puppy/              ← 강아지 입양 준비물
hwick.shop/start/cat/                ← 고양이 입양 준비물
hwick.shop/start/running/            ← 러닝 시작
hwick.shop/start/camping/            ← 캠핑 입문
hwick.shop/home/studio-essentials/   ← 자취 필수템
hwick.shop/school/elementary-2026/   ← 초등 입학
hwick.shop/baby/newborn-checklist/   ← 출산 준비물
hwick.shop/health/home-training/     ← 홈트 장비
hwick.shop/gift/parents-60s/         ← 60대 부모 선물
```

### URL 규칙
- 영문 소문자 + 하이픈 (`-`)
- 2 depth까지만 (`/category/slug/`)
- 한글 URL 사용 안 함 (인코딩 이슈)
- 연도 포함 시 slug에 (`elementary-2026`)

---

## 메타 태그 템플릿

### Title (50~60자)
```
{핵심키워드} — {보조설명} | 휙
```
예:
- `초등학교 입학 준비물 총정리 — 2026 체크리스트 | 휙`
- `강아지 첫 입양 준비물 — 예산별 완벽 가이드 | 휙`
- `자취 시작 필수템 — 50만원이면 충분 | 휙`

### Description (120~155자)
```
{타겟 상황 공감} {핵심 가치 제안} {구체적 숫자}
```
예:
- `초등학교 입학, 뭘 사야 할지 막막하죠. 선배 학부모들이 뽑은 진짜 필수템만 정리했습니다. 예산 7만원이면 시작, 15만원이면 넉넉.`

### OG (소셜 공유)
```html
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:image" content="{썸네일 URL}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="휙 hwick.shop">
```

---

## 구조화 데이터 (Schema.org)

### 모든 글: Article
```json
{
  "@type": "Article",
  "headline": "초등학교 입학 준비물 총정리",
  "datePublished": "2026-02-22",
  "dateModified": "2026-02-22",
  "author": { "@type": "Organization", "name": "휙" },
  "publisher": { "@type": "Organization", "name": "휙", "url": "https://hwick.shop" }
}
```

### 체크리스트 글: ItemList
```json
{
  "@type": "ItemList",
  "name": "초등학교 입학 준비물",
  "numberOfItems": 15,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "책가방" },
    { "@type": "ListItem", "position": 2, "name": "실내화" }
  ]
}
```

### FAQ (자주 묻는 질문 있을 때)
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "초등학교 입학 준비물 비용은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "최소 7만원, 넉넉히 15만원이면 충분합니다."
      }
    }
  ]
}
```

---

## 키워드 전략

### 타겟 키워드 패턴
```
[대상] + [행동] + 준비물/필수템/추천
```
예:
- "초등학교 입학 준비물"
- "자취 시작 필수템"
- "강아지 입양 준비물"
- "캠핑 입문 장비"

### Long-tail 변형 (본문에 자연스럽게 포함)
- "초등학교 입학 준비물 **리스트**"
- "초등학교 입학 **비용**"
- "초등학교 입학 준비물 **어디서**"
- "1학년 입학 **뭐 사야**"

### 키워드 배치
| 위치 | 중요도 | 예 |
|------|--------|---|
| Title (H1) | ⭐⭐⭐ | 반드시 포함 |
| URL slug | ⭐⭐⭐ | 영문 변환 포함 |
| Meta description | ⭐⭐ | 자연스럽게 |
| H2 소제목 | ⭐⭐ | 변형 키워드 |
| 첫 100단어 | ⭐⭐ | 자연스럽게 |
| 이미지 alt | ⭐ | 설명형 |

---

## 내부 링크 전략

### 관련 글 추천 (글 하단)
- 같은 카테고리 2개 + 다른 카테고리 1개
- 예: 초등 입학 글 → [중학교 입학] [신학기 노트북] [자취 필수템]

### 본문 내 자연 링크
- "자취를 시작하는 분이라면 [자취 필수템 가이드](/home/studio-essentials/)도 참고하세요"
- 카테고리 관련성 있을 때만 (억지 링크 X)

### 사이트맵
```xml
<url>
  <loc>https://hwick.shop/start/puppy/</loc>
  <lastmod>2026-02-22</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## 기술 SEO 체크리스트

- [ ] SSL (HTTPS) — Cloudflare 자동
- [ ] sitemap.xml 생성
- [ ] robots.txt 설정
- [ ] 페이지 속도 < 2초 (정적 사이트라 OK)
- [ ] 모바일 퍼스트 (반응형)
- [ ] canonical URL 설정 (티스토리 중복 방지)
- [ ] 이미지 lazy loading + WebP
- [ ] Core Web Vitals (LCP < 2.5s, CLS < 0.1)

### ⚠️ 티스토리 중복 콘텐츠 대응
같은 주제를 hwick.shop + 티스토리에 올리므로:
- **다른 버전으로 작성** (같은 주제, 다른 톤/구조/길이)
- hwick.shop = 풀 버전 (체크리스트 + 상품카드 + 인터랙션)
- 티스토리 = 텍스트 중심 요약 버전
- canonical은 각각 자기 자신으로 (서로 다른 콘텐츠이므로)

---

## 검색 노출 목표

| 기간 | 목표 |
|------|------|
| 1개월 | Google Search Console 등록, 10개 글 색인 |
| 3개월 | 롱테일 키워드 30개 이상 노출 |
| 6개월 | 주력 키워드 10개 1페이지 진입 |
| 12개월 | 월 10,000+ 오가닉 방문 |
