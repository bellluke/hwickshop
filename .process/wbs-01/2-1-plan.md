# 2-1 계획: 디자인 시스템

## 목표
BUILD-PROMPT.md와 style-guide.md 브랜드 스펙을 CSS 커스텀 프로퍼티 + Tailwind v4 테마로 구현

## 작업 항목
1. global.css에 CSS 커스텀 프로퍼티 정의 (컬러, 타이포, 그림자, 라운딩)
2. Tailwind v4 @theme 확장 (커스텀 프로퍼티 연동)
3. 폰트 로딩 설정 (Pretendard, Space Mono)
4. 기본 리셋 및 타이포그래피 스타일

## 컬러 팔레트 (BUILD-PROMPT.md 기준)
- primary: #F97316 (오렌지)
- primary-hover: #EA580C
- bg: #FFFBF5 (크림)
- text: #1C1917
- text-sub: #78716C
- 카테고리: pet=#F59E0B, sport=#10B981, travel=#0EA5E9, home=#8B5CF6, baby=#F43F5E, school=#6366F1, health=#14B8A6, gift=#EC4899

## 타이포그래피
- 제목: Pretendard 800 / 32px (모바일 26px)
- 소제목: Pretendard 700 / 24px (모바일 20px)
- 본문: Pretendard 400 / 17px (모바일 16px), line-height 1.75
- 숫자/가격: Space Mono 700
- 본문 max-width: 720px

## 셀프 검토
- 안티패턴 준수: AI 보라/핑크 그라데이션 금지, 네온 금지, 다크모드 금지
- Tailwind v4 방식: @theme 디렉티브로 커스텀 값 등록
