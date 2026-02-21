# 2-2 계획: BaseLayout 컴포넌트

## 목표
공통 레이아웃 (BaseLayout, Header, Footer) + 모바일 네비게이션 구현

## 작업 항목
1. BaseLayout.astro — HTML 셸, head, 폰트 로딩, global.css 임포트
2. Header.astro — 로고 "휙" + 햄버거 메뉴 (모바일)
3. Footer.astro — 태그라인 + 디스클레이머 + 카테고리 링크
4. MobileNav.astro — 햄버거 메뉴 열었을 때 카테고리 목록
5. index.astro 업데이트 — BaseLayout 적용

## 구현 상세

### Header
- 좌: 로고 "휙" (링크 → /)
- 우: 햄버거 메뉴 버튼 (Lucide icons 대신 SVG 직접 사용)
- 상단 고정 (sticky)
- 배경: 반투명 bg + backdrop-blur

### Footer
- 태그라인: "처음 사는 건 여기서부터"
- 카테고리 링크 그리드
- 쿠팡 파트너스 디스클레이머

### 모바일 네비게이션
- 햄버거 클릭 → 풀스크린 오버레이
- 카테고리 8개 + 이모지 라벨
- 닫기 버튼

### 카테고리 데이터
src/data/categories.ts에 카테고리 정보 집중 관리

## 셀프 검토
- 와이어프레임(wireframe.md) 네비게이션 구조 반영
- Lucide Icons 대신 인라인 SVG 사용 (외부 의존성 최소화)
- 모바일 우선 설계
- 접근성: aria-label, role, keyboard navigation
