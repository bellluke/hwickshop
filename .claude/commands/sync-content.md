`docs/content/`의 마크다운 파일을 `src/content/articles/`로 반영합니다.

## 반영 규칙

### 파일 매핑
- **경로**: `docs/content/{category}/{ID}-{slug}.md` → `src/content/articles/{category}/{slug}.md`
- **파일명**: 접두사(B01-, H07-, HE01-, G02-, SP01-, T01-, L03- 등) 제거
- **폴더**: category 폴더명 그대로 유지 (baby, gift, health, home, pet, school, start)

### 기존 파일 업데이트
1. `src/content/articles/`에 이미 존재하는 파일은 **frontmatter를 보존**
2. 본문만 `docs/content/` 내용으로 교체
3. 본문 = docs 파일에서 `# 제목` 줄을 제외한 나머지

### 신규 파일 생성
1. `docs/content/` 파일에서 아래 정보 추출:
   - `title`: 첫 번째 `# ` 헤딩
   - `description`: 첫 번째 `> ` 인용문
   - `linkCount`: `coupang.com` URL 개수
   - `readingTime`: 본문 글자수 ÷ 500 (최소 5분)
2. `docs/topic-list.md`에서 articleType 매핑:
   - 📋 → checklist
   - 💡 → guide
   - 🏆 → top5
   - 🎁 → guide
   - ⚔️ → comparison
   - 파일명에 starter가 포함되면 → starter-kit
3. `category`는 폴더명 사용
4. `publishedAt`은 `2026-02-01` 기본값
5. `tags`는 콘텐츠 주제에서 3~4개 키워드 추출
6. `budget`은 본문에 예산 정보가 있으면 economy/standard/generous 추출
7. `seasonal`은 topic-list.md의 시즌성 컬럼 참고

### 본문 정제
반영 시 아래 내용은 **제거**:
- `*이 글에는 쿠팡 파트너스 활동의 일환으로*` 문구 (페이지 템플릿에서 이미 표시)
- 기타 중복 disclaimer 텍스트

### frontmatter 스키마 (`src/content/config.ts`)
```yaml
title: string (필수)
description: string (필수)
category: enum [home, baby, health, school, start, gift, pet] (필수)
articleType: enum [checklist, top5, comparison, guide, starter-kit] (필수)
tags: string[] (기본 [])
linkCount: number (기본 0)
readingTime: string (기본 "5분")
publishedAt: date (필수)
updatedAt: date (선택)
budget: { economy, standard, generous } (선택)
seasonal: string (선택)
image: string (선택)
```

## 실행 절차

1. `docs/content/` 전체 파일 목록 확인
2. `src/content/articles/` 기존 파일 목록 확인
3. 각 파일별로 기존/신규 판단 후 반영
4. 쿠팡 파트너스 disclaimer 문구 제거
5. `npx astro build`로 검증
6. 결과 요약 (생성 N건, 업데이트 N건)
