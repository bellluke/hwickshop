`docs/coupang-links.json`의 shortLink를 `src/content/articles/`와 `docs/content/` 양쪽 md 파일에 적용합니다.

## 실행 절차

1. `docs/coupang-links.json`을 읽는다
2. `shortLink`가 비어있지 않은 항목만 필터링한다
3. 각 항목에 대해 두 파일 모두 처리한다:
   - `src/content/articles/{article}.md` — 파일 내 `fullLink`를 `shortLink`로 치환
   - `docs/content/{category}/{ID}-{slug}.md` — 동일하게 치환 (ID-slug 매핑은 파일 탐색으로 확인)
   - 변경이 있으면 파일을 저장한다
4. 결과 요약: 치환된 링크 수, 파일 수, shortLink 미입력으로 건너뛴 링크 수

## 주의사항

- `shortLink`가 빈 문자열인 항목은 건너뛴다 (치환하지 않음)
- 이미 shortLink로 치환된 파일은 변경하지 않는다
- 양쪽 디렉토리를 모두 치환해야 `/sync-content` 실행 시 원본 링크로 되돌아가지 않는다
- 치환 후 `npx astro build`로 빌드 검증한다
