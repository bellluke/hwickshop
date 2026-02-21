# 3-3~3-5 결과: 예산박스, 팁박스, DontBuy, TOC

## 완료 항목
- [x] BudgetBox.astro — 절약/표준/넉넉 3단 바 차트 (색상: emerald/orange/violet)
- [x] TipBox.astro — 선배 팁 인용 (연노랑 배경, 좌측 주황 보더)
- [x] DontBuy.astro — 불필요 항목 경고 (연회색 배경, 좌측 빨간 보더, X 아이콘)
- [x] TableOfContents.tsx — Intersection Observer, 모바일 아코디언 / 데스크탑 sticky sidebar
- [x] 빌드 검증 통과

## 셀프 검토
- BUILD-PROMPT.md 모든 핵심 컴포넌트 구현 완료 ✓
- BudgetBox: CSS --percent 대신 인라인 style width% 사용 (Astro 서버 렌더링) ✓
- TOC: rootMargin 조정으로 정확한 섹션 감지 ✓
- 모든 SVG 아이콘 인라인 (외부 의존성 없음) ✓
