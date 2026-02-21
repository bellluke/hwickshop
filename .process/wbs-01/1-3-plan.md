# 1-3 계획: TypeScript, Tailwind CSS 4 설정

## 목표
Astro 빌드 환경 완성 — TypeScript strict, Tailwind v4 Vite 플러그인, Astro 설정

## 작업 항목
1. tsconfig.json 생성 (astro/tsconfigs/strict, path alias @/*)
2. astro.config.mjs 생성 (react, sitemap, tailwindcss vite 플러그인)
3. 빌드 검증 (astro build)

## 참고 (golagola 설정)
- tsconfig: extends "astro/tsconfigs/strict", jsx: "react-jsx"
- astro.config: react(), sitemap(), tailwindcss() vite 플러그인
- site URL: https://hwick.shop

## 셀프 검토
- Tailwind v4는 별도 config 파일 불필요 (CSS에서 @theme 사용)
- Vite 플러그인 방식으로 통합 (@tailwindcss/vite)
- golagola 패턴과 일치
