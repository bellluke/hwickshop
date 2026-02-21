# 4-1 계획: Content Collections 스키마 정의

## 목표
Astro Content Collections로 34개 마크다운 콘텐츠를 관리하기 위한 스키마 정의

## 작업 항목
1. src/content.config.ts 생성 (Astro 5 Content Layer API)
2. 글 스키마 (articles 컬렉션): title, description, category, articleType, tags, linkCount, readingTime, budget, seasonal 등
3. 카테고리 타입 정의 (src/types/)

## Astro 5 Content Collections
- Astro 5에서는 content.config.ts (또는 content/config.ts)에서 defineCollection + glob loader 사용
- Zod 스키마 기반 타입 자동 추론

## 셀프 검토
- docs/topic-list.md의 카테고리/글 유형 구조 반영
- frontmatter 필드가 docs/content/ 마크다운과 호환되는지 확인
