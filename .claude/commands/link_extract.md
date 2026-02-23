`src/content/articles/`와 `docs/content/`의 모든 md 파일에서 쿠팡 링크를 추출하여 `docs/coupang-links.json`에 저장합니다.

## 실행 절차

1. `src/content/articles/` 하위 모든 `.md` 파일을 읽는다
2. 각 파일에서 `https://www.coupang.com/` 또는 `https://link.coupang.com/`으로 시작하는 URL을 모두 추출한다
3. 각 링크에 대해 아래 형식의 JSON 객체를 생성한다:
   ```json
   {
     "article": "{category}/{slug}",
     "fullLink": "추출된 쿠팡 URL",
     "shortLink": ""
   }
   ```
   - `article`: 파일 경로에서 `src/content/articles/` 제거, `.md` 확장자 제거 (예: `school/elementary-2026`)
   - `fullLink`: 추출된 전체 URL
   - `shortLink`: 빈 문자열 (사용자가 쿠팡 파트너스에서 생성 후 입력)
4. `docs/content/` 파일도 동일하게 처리한다. article 키는 접두사를 제거한 slug를 사용한다 (예: `S01-elementary-2026` → `school/elementary-2026`)
5. 두 디렉토리에서 추출한 링크를 합치고 중복 제거한다 (같은 fullLink는 하나만)
6. 기존 `docs/coupang-links.json`이 있으면 읽어서:
   - 이미 같은 `fullLink`가 있는 항목은 기존 `shortLink` 값을 보존한다
   - 새로운 링크만 추가한다
   - 더 이상 md 파일에 없는 링크는 제거한다
7. `article` → `fullLink` 순으로 정렬하여 `docs/coupang-links.json`에 저장한다
8. 결과 요약: 총 링크 수, 신규 추가 수, shortLink 입력 완료 수, 미입력 수
