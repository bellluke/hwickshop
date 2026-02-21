# 3-1 계획: 상품 카드 컴포넌트

## 목표
BUILD-PROMPT.md 상품 카드 스펙 구현 (Astro 컴포넌트)

## 구현 상세
- Props: image, imageAlt, name, rating, reviewCount, price, oneLiner, link
- 모바일: 세로 (이미지 위, 텍스트 아래)
- 데스크탑: 가로 (이미지 좌, 텍스트 우)
- CTA: "쿠팡에서 보기", primary 배경, rel="nofollow sponsored"
- hover: translateY(-1px), shadow 변화
- 가격: font-price (Space Mono)

## 셀프 검토
- BUILD-PROMPT.md 상품 카드 HTML 구조 반영
- nofollow sponsored 필수 포함
- 이미지: lazy loading, width/height → 추후 콘텐츠에서 지정
