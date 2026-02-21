# 1-2 결과: Cloudflare Workers 배포 설정

## 완료 항목
- [x] wrangler.jsonc 생성 (Workers Static Assets 방식)
- [x] .gitignore 생성

## 생성된 파일
- `wrangler.jsonc`: name=hwickshop, compatibility_date=2026-02-20, assets.directory=./dist
- `.gitignore`: node_modules, dist, .astro, .wrangler, .env, .DS_Store

## 셀프 검토
- wrangler.jsonc 형식 사용 (신규 프로젝트 표준) ✓
- assets.directory가 Astro 빌드 출력(dist)과 일치 ✓
- package.json scripts(preview, deploy)와 연동 확인 ✓
