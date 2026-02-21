# hwick.shop 프로젝트 설정

## 프로젝트 개요

**사이트명**: 휙 (hwick.shop)
**목적**: 쇼핑 체크리스트 & 추천 가이드 (쿠팡 파트너스 어필리에이트)
**기술 스택**: Astro 5 + React 19 + Tailwind CSS 4 + TypeScript
**배포**: Cloudflare Workers (Static Assets)

## 기술 스택 (golagola 프로젝트 기준)

| 패키지 | 용도 |
|--------|------|
| astro | 메타 프레임워크 (SSG) |
| react | 인터랙티브 컴포넌트 (체크리스트 등) |
| tailwindcss v4 | 스타일링 (@tailwindcss/vite) |
| typescript | 타입 안전성 |
| wrangler | Cloudflare Workers 배포 |
| @astrojs/react | React 통합 |
| @astrojs/sitemap | SEO sitemap |

## 운영 원칙

1. 모든 작업은 **계획 → 셀프 검토 → 실행 → 셀프 검토** 과정을 거친다
2. 사용자 의사결정이 필요한 경우에만 요청한다
3. 각 단계 체크포인트마다 handoff 정보를 갱신한다
4. 모든 산출물은 MD 형식으로 기록한다

## WBS 프로토콜

### 구조
```
.process/
├── wbs-01.md                    # WBS 목록 (단계, 작업명, 상태)
├── wbs-01/
│   ├── plan.md                  # 전체 실행 계획
│   ├── {단계}-plan.md           # 세부 단계 계획 (예: 1-1-plan.md)
│   └── {단계}-result.md         # 세부 단계 결과 (예: 1-1-result.md)
└── handoff.md                   # 세션 인수인계 정보
```

### 작업 흐름 (각 세부 단계마다)
1. **준비**: wbs-01.md에 상태를 `진행`으로 업데이트
2. **계획**: `{단계}-plan.md`에 계획 기록 후 셀프 검토
3. **실행**: 구현 후 `{단계}-result.md`에 결과 기록 후 셀프 검토
4. **완료**: wbs-01.md에 상태를 `완료`로 업데이트

### wbs-01.md 형식
```markdown
| 단계 | 작업명 | 상태 |
|------|--------|------|
| 1-1 | 작업 설명 | 대기/진행/완료 |
```

## Handoff 프로토콜

### /handoff - 세션 종료 대비 인수인계 기록

실행 시점: 각 단계의 체크포인트(준비/계획/실행/완료) 또는 세션 종료 전

`.process/handoff.md`에 아래 항목을 기록:
- **현재 진행 중인 WBS**: 파일 경로
- **마지막 완료 단계**: 예) `1-1 프로젝트 초기 설정`
- **다음 작업**: 예) `1-2 Cloudflare Workers 배포 설정`
- **작업 상태**: `계획 완료` / `구현 완료` / `검토 중`
- **주의사항**: 진행 중 발견된 이슈, 의존성, 결정사항
- **마지막 갱신**: 타임스탬프

### /takeover - 이전 세션 이어받기

실행 시:
1. `.process/handoff.md` 읽기
2. 현재 WBS 파일(`.process/wbs-01.md`) 상태 확인
3. 마지막 완료 단계의 result 파일 확인
4. 다음 작업 준비 또는 바로 시작

## 디렉토리 구조

```
hwickshop/
├── src/
│   ├── components/
│   │   ├── layout/          # 공통 레이아웃 (Header, Footer, BaseLayout)
│   │   ├── content/         # 콘텐츠 컴포넌트 (ProductCard, Checklist, BudgetBox 등)
│   │   └── ui/              # 공통 UI 컴포넌트
│   ├── pages/               # Astro 파일 기반 라우팅
│   ├── content/             # Content Collections (마크다운 콘텐츠)
│   ├── data/                # 정적 데이터 (카테고리, 메타 등)
│   ├── types/               # TypeScript 타입 정의
│   ├── utils/               # 유틸리티 함수
│   └── styles/              # 글로벌 스타일, CSS 변수
├── public/                  # 정적 에셋 (이미지, favicon 등)
├── docs/                    # 기획 문서
├── .process/                # WBS 프로세스 관리
├── wrangler.jsonc           # Cloudflare Workers 설정
├── astro.config.mjs         # Astro 설정
├── tsconfig.json            # TypeScript 설정
└── package.json             # 의존성
```

## 콘텐츠 반영 프로토콜

`docs/content/`에서 콘텐츠를 수정한 후 `src/content/articles/`에 반영할 때는 `/sync-content` 스킬을 사용한다.

- **소스**: `docs/content/{category}/{ID}-{slug}.md` (frontmatter 없음, `# 제목` + 본문)
- **타겟**: `src/content/articles/{category}/{slug}.md` (frontmatter + 본문)
- 기존 파일은 frontmatter 보존, 본문만 교체
- 신규 파일은 frontmatter 자동 생성
- 쿠팡 파트너스 disclaimer 문구는 페이지 템플릿에 있으므로 본문에서 제거

## 참고 문서

- 기획: `docs/README.md`, `docs/BUILD-PROMPT.md`
- 디자인: `docs/style-guide.md`, `docs/wireframe.md`
- SEO: `docs/seo-guide.md`
- 콘텐츠: `docs/topic-list.md`, `docs/content/` 하위 34개 문서
- 참고 프로젝트: `/Users/zag/work/projects/toys/golagola`
