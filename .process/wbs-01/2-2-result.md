# 2-2 결과: BaseLayout 컴포넌트

## 완료 항목
- [x] categories.ts — 8개 카테고리 데이터 (id, name, emoji, path, color)
- [x] BaseLayout.astro — HTML 셸, 메타 태그, 폰트 로딩 (Pretendard Variable + Space Mono)
- [x] Header.astro — 로고 + 햄버거 메뉴 + 모바일 네비게이션 (sticky, backdrop-blur)
- [x] Footer.astro — 태그라인 + 카테고리 링크 + 쿠팡 디스클레이머
- [x] index.astro — BaseLayout 적용
- [x] 빌드 검증 통과 (632ms)

## 생성된 파일
- `src/data/categories.ts`
- `src/components/layout/BaseLayout.astro`
- `src/components/layout/Header.astro`
- `src/components/layout/Footer.astro`

## 셀프 검토
- wireframe.md 네비게이션 구조 반영 ✓
- 모바일 우선: 햄버거 메뉴, 2열 그리드 카테고리 ✓
- 접근성: aria-label, aria-expanded, aria-controls ✓
- OG 태그 시스템 BaseLayout에 통합 ✓
- 폰트: Pretendard Variable + Space Mono 로딩 ✓
