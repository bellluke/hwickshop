# 1-2 계획: Cloudflare Workers 배포 설정

## 목표
Cloudflare Workers Static Assets 방식으로 배포 설정 (Pages 폐지 후 새 표준)

## 작업 항목
1. wrangler.jsonc 생성 (신규 프로젝트 권장 형식)
2. .gitignore 생성

## wrangler.jsonc 설정
```jsonc
{
  "name": "hwickshop",
  "compatibility_date": "2026-02-20",
  "assets": {
    "directory": "./dist"
  }
}
```

## .gitignore 항목
- node_modules/, dist/, .astro/, .wrangler/
- .env, .env.*, .dev.vars
- OS 파일 (.DS_Store)

## 셀프 검토
- golagola의 wrangler.toml → jsonc로 형식 변경 (새 표준)
- assets.directory: "./dist" (Astro 빌드 출력 경로)
- compatibility_date: 최신 날짜 설정
