# 4-1 결과: Content Collections 스키마 정의

## 완료 항목
- [x] src/content/config.ts 생성
- [x] articles 컬렉션 스키마: title, description, category(8종), articleType(5종), tags, linkCount, readingTime, budget, seasonal, image
- [x] 빌드 검증 통과 (articles 디렉토리 미존재 경고는 정상)

## 셀프 검토
- golagola 패턴(defineCollection + z) 동일 ✓
- 카테고리 8종: home, baby, health, school, start, gift, pet, sport ✓
- 글 유형 5종: checklist, top5, comparison, guide, starter-kit ✓
- budget 옵셔널 객체(economy/standard/generous) ✓
