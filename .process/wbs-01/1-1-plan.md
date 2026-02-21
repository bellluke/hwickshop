# 1-1 계획: Astro 프로젝트 생성 및 의존성 설치

## 목표
golagola 프로젝트와 동일한 기술 스택으로 Astro 프로젝트 초기 구조 생성

## 작업 항목
1. package.json 생성 (golagola 기준 의존성)
2. 의존성 설치 (npm install)
3. 기본 디렉토리 구조 생성

## 의존성 목록

### dependencies
- astro: ^5
- @astrojs/react: ^4
- @astrojs/sitemap: ^3
- react: ^19
- react-dom: ^19

### devDependencies
- typescript: ^5
- tailwindcss: ^4
- @tailwindcss/vite: ^4
- @types/react: ^19
- @types/react-dom: ^19
- wrangler: ^4

## 디렉토리 구조
```
src/
├── components/
│   ├── layout/
│   ├── content/
│   └── ui/
├── pages/
├── content/
├── data/
├── types/
├── utils/
└── styles/
public/
```

## 셀프 검토
- golagola의 package.json과 버전 범위 일치 확인
- 불필요한 의존성(zustand, framer-motion) 제외 확인
- Astro 5 + React 19 + Tailwind 4 호환성 확인 → OK
