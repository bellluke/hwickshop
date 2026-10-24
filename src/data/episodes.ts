// 휙 회차 데이터. 회차 하나 = 처음 맞는 상황 하나.
// 상품과 링크는 기존 글(쿠팡 파트너스 링크)에서 옮겨 왔다. 링크를 바꾸면 여기만 고치면 된다.

export * from './types';
import type { Episode } from './types';

const L = (code: string) => `https://link.coupang.com/a/${code}`;
import { firstCat } from './ep/first-cat';
import { firstRun } from './ep/first-run';
import { fortySupplements } from './ep/forty-supplements';

const ALL: Episode[] = [
  {
    slug: 'first-room', no: '01', title: '첫 자취', cat: '집', color: 'yolk', coverIcon: 'topper',
    hook: '방에 아무것도 없다', h1: '독립 첫날.', sub: '방에 아무것도 없다.', balloon: '…뭐부터 사지?',
    legacy: { href: '/home/studio-essentials/', title: '원룸 자취 시작 필수템 — 글로 자세히 보기' },
    published: '2026-10-24',
    choice: {
      q: '뭐부터\n해결할래?', eyebrow: '오늘 밤 기준',
      options: [
        { scene: 'night', big: '잠', sub: '잠부터 · 자고 씻을 곳' },
        { scene: 'eat', big: '밥', sub: '밥부터 · 첫 끼와 주방' },
      ],
    },
    scenes: [
      {
        key: 'night', color: 'cobalt', title: '오늘 밤,\n어디서 자지?', balloon: '바닥은 차갑고 딱딱해…', sfx: 'ZZZ', hero: 'stack',
        levels: [
          { k: '아끼기', s: '당일 필수', say: '침구 + 씻고 닦을 것. 오늘 밤은 이걸로 끝.', set: ['bedding', 'topper', 'shower', 'cleaning', 'plug'] },
          { k: '기본', s: '+건조대·행거', say: '이번 주 안에 빨래 말릴 곳, 옷 걸 곳까지.', set: ['bedding', 'topper', 'shower', 'cleaning', 'plug', 'rack', 'hanger'] },
          { k: '넉넉히', s: '+청소기', say: '밀대로 버티기 싫으면 청소기까지 한 번에.', set: ['bedding', 'topper', 'shower', 'cleaning', 'plug', 'rack', 'hanger', 'vacuum'] },
        ],
      },
      {
        key: 'eat', color: 'chili', title: '첫 끼는\n어떻게 먹지?', balloon: '첫날은 배달인데…', sfx: '꼬르륵', hero: 'equation',
        levels: [
          { k: '아끼기', s: '포트만', say: '첫 주는 전기포트 하나로. 라면·컵밥은 이걸로 돼요.', set: ['kettle'], res: '첫 끼 OK' },
          { k: '기본', s: '냄비+밥솥', say: '냄비·프라이팬 + 밥솥 + 포트. 이러면 집밥 시작.', set: ['cookware', 'ricecooker', 'kettle'], res: '집밥 시작' },
          { k: '넉넉히', s: '+에어프라이어', say: '1인가구는 3.5L 에어프라이어면 충분해요.', set: ['cookware', 'ricecooker', 'airfryer', 'kettle'], res: '+ 포트 = 요리 시작' },
        ],
      },
    ],
    items: [
      { id: 'bedding', name: '이불·베개 세트', icon: 'bedding', tier: 'must', scene: 'night', why: '계절마다 사면 수납이 문제예요. 사계절 이불 한 세트로 시작해요.', crit: ['사계절용 한 세트', '집 세탁기로 빨 수 있는지'], products: [] },
      { id: 'topper', name: '토퍼', icon: 'topper', tier: 'must', scene: 'night', why: '바닥이나 딱딱한 매트리스에서 자야 한다면 토퍼가 첫날 밤을 살려요.', crit: ['5~7cm 메모리폼', '커버를 벗겨 빨 수 있는지'], products: [] },
      { id: 'shower', name: '샤워기 필터', icon: 'shower', tier: 'must', scene: 'night', why: '원룸 수질은 믿기 어려워요. 녹물 나오는 곳도 있어요.', crit: ['수건 3~4장, 미끄럼 방지 매트도 같이', '휴지는 이사 당일 제일 많이 빠뜨리는 것'], products: [{ name: '녹물 제거 샤워기 필터', url: L('dQxpCh') }] },
      { id: 'cleaning', name: '청소 도구', icon: 'mop', tier: 'must', scene: 'night', why: '전 세입자 흔적부터 지우고 들어가요. 청소기는 나중에 사도 돼요.', crit: ['밀대걸레로 시작', '곰팡이 제거제는 화장실·창틀용', '종량제 봉투는 우리 구·시 것으로'], products: [{ name: '밀대걸레 세트', url: L('dQuwUq') }, { name: '곰팡이 제거제', url: L('dQuwtb') }] },
      { id: 'plug', name: '멀티탭', icon: 'plug', tier: 'must', scene: 'night', why: '원룸 콘센트는 보통 2~3개뿐이에요.', crit: ['개별 스위치 있는 6구 하나면 충분'], products: [{ name: 'USB 멀티탭 6구 개별스위치', url: L('dQuxMV') }] },
      { id: 'rack', name: '빨래 건조대', icon: 'rack', tier: 'soon', scene: 'night', why: '건조기 없는 원룸이면 필수예요.', crit: ['접이식이면 안 쓸 때 자리를 안 차지해요'], products: [{ name: '접이식 빨래 건조대', url: L('dQuxst') }] },
      { id: 'hanger', name: '행거', icon: 'hanger', tier: 'soon', scene: 'night', why: '옷장이 작거나 없는 원룸이 많아요.', crit: ['이사가 잦으면 이동식 스탠드형'], products: [{ name: '스탠드 행거 이동식', url: L('dQuw2n') }] },
      { id: 'vacuum', name: '무선청소기', icon: 'vacuum', tier: 'soon', scene: 'night', why: '밀대로 버티다 먼지가 쌓이면 그때 사도 늦지 않아요.', crit: ['원룸은 가벼운 무선형이면 충분'], products: [{ name: '무선청소기 가성비 원룸', url: L('dQuwMZ') }] },
      { id: 'shelf', name: '욕실 선반·수납함', icon: 'box', tier: 'later', scene: 'night', why: '살아보고 부족한 자리에 맞춰 사요.', crit: [], products: [] },
      { id: 'cookware', name: '냄비·프라이팬', icon: 'cookware', tier: 'soon', scene: 'eat', why: '첫날은 배달, 주방은 이번 주 안에. 냄비 하나 프라이팬 하나면 시작돼요.', crit: ['처음엔 세트 하나로', '인덕션 집이면 겸용인지 확인'], products: [{ name: '테팔 냄비+프라이팬 세트', url: L('dQuxF1') }] },
      { id: 'ricecooker', name: '전기밥솥', icon: 'ricecooker', tier: 'soon', scene: 'eat', why: '1~2인이면 작은 밥솥으로 충분해요.', crit: ['혼자면 3인용까지면 넉넉'], products: [{ name: '쿠쿠 3인용 전기밥솥', url: L('dQuxy4') }] },
      { id: 'kettle', name: '전기포트', icon: 'kettle', tier: 'soon', scene: 'eat', why: '라면, 커피, 컵밥까지. 제일 자주 쓰게 돼요.', crit: ['스테인리스 1L면 1인가구에 딱'], products: [{ name: '전기포트 1L 스테인리스', url: L('dQuxlS') }] },
      { id: 'airfryer', name: '에어프라이어', icon: 'airfryer', tier: 'soon', scene: 'eat', why: '냉동식품 데우기가 쉬워져요. 1인가구는 3.5L면 충분.', crit: ['주방 자리와 콘센트 위치 먼저 확인'], products: [{ name: '에어프라이어 3.5L 1인가구', url: L('dQuw8I') }] },
      { id: 'fridge', name: '미니 냉장고', icon: 'box', tier: 'later', scene: 'eat', why: '냉장고 없는 원룸이 많아요. 있으면 안 사도 되고, 없으면 미니로 시작.', crit: [], products: [] },
      { id: 'bin', name: '음식물 쓰레기통', icon: 'box', tier: 'later', scene: 'eat', why: '뚜껑 있는 것으로. 여름 오기 전에.', crit: [], products: [] },
    ],
    skip: [
      { name: '식기 풀세트', why: '혼자라면 그릇 2~3개로 충분' },
      { name: '커피 머신', why: '살아보고 취향 파악 먼저' },
      { name: '소파', why: '원룸은 공간이 문제' },
      { name: '전신거울', why: '화장실 거울로 당분간 OK' },
    ],
  },
  {
    slug: 'first-puppy', no: '03', title: '첫 강아지', cat: '반려', color: 'pink', coverIcon: 'puppy', mascot: 'puppy',
    hook: '데려오는 날', h1: '데려오는 날.', sub: '집에 아무것도 없다.', balloon: '…여기가 우리 집?',
    legacy: { href: '/pet/puppy-starter/', title: '강아지 첫 입양 준비물 총정리 — 글로 자세히 보기' },
    published: '2026-10-24',
    choice: {
      q: '뭐부터\n준비할래?', eyebrow: '데려오는 날 기준',
      options: [
        { scene: 'home', big: '집', sub: '집부터 · 쉴 곳과 화장실' },
        { scene: 'eat', big: '밥', sub: '밥부터 · 사료와 그릇' },
      ],
    },
    scenes: [
      {
        key: 'home', color: 'cobalt', title: '어디서 쉬고,\n어디서 쌀까?', balloon: '숨을 데가 필요해…', sfx: '낑?', hero: 'stack',
        levels: [
          { k: '아끼기', s: '첫날 필수', say: '켄넬 + 배변패드 + 탈취제. 첫날 밤은 이걸로 버텨요.', set: ['kennel', 'pad', 'deodorizer'] },
          { k: '기본', s: '+방석·울타리', say: '일주일 안에 방석과 울타리로 생활 공간을 정해요.', set: ['kennel', 'pad', 'deodorizer', 'cushion', 'fence'] },
          { k: '넉넉히', s: '+하네스', say: '산책 준비까지. 하네스는 몸에 맞는 모양부터 확인.', set: ['kennel', 'pad', 'deodorizer', 'cushion', 'fence', 'harness'] },
        ],
      },
      {
        key: 'eat', color: 'chili', title: '첫 밥은\n뭘 주지?', balloon: '배고파…', sfx: '킁킁', hero: 'equation',
        levels: [
          { k: '아끼기', s: '사료+그릇', say: '먹던 사료 + 밥·물그릇. 첫 밥은 이걸로 충분.', set: ['food', 'bowls'], res: '첫 밥 OK' },
          { k: '기본', s: '+장난감', say: '이갈이용 장난감이 없으면 가구를 씹어요.', set: ['food', 'bowls', 'toys'], res: '밥 + 이갈이' },
          { k: '넉넉히', s: '+간식·급수기', say: '훈련 간식에 자동 급수기까지. 외출이 길어도 안심.', set: ['food', 'bowls', 'toys', 'treats', 'waterer'], res: '+ 간식·급수기 = 훈련 시작' },
        ],
      },
    ],
    items: [
      { id: 'kennel', name: '켄넬 (이동장 겸 잠자리)', icon: 'kennel', tier: 'must', scene: 'home', why: '강아지에게 자기만의 공간이 필요해요. 잠자리 겸 이동장으로 써요.', crit: ['소프트 켄넬은 가볍고 접혀요. 대형견은 탈출 주의', '하드 켄넬은 튼튼하지만 무거워요'], products: [{ name: '소프트 켄넬 접이식', url: L('dQxqhc') }, { name: '강아지 이동장 중형', url: L('dQxquj') }] },
      { id: 'pad', name: '배변패드', icon: 'pad', tier: 'must', scene: 'home', why: '강아지는 냄새로 화장실 위치를 기억해요. 처음엔 넓게 깔아두기.', crit: ['대형 패드(60×90cm)가 실패가 적어요', '탄소 탈취 패드면 냄새 관리가 쉬워요'], products: [{ name: '강아지 배변패드 대형 100매', url: L('dQxpWW') }, { name: '탄소 탈취 배변패드', url: L('dQxqzt') }] },
      { id: 'deodorizer', name: '배변 탈취제', icon: 'spray', tier: 'must', scene: 'home', why: '실수한 자리를 완전히 지우지 않으면 같은 자리에 또 싸요.', crit: ['일반 세정제로는 냄새 성분이 남아요'], products: [{ name: '강아지 배변 탈취제', url: L('dQxp05') }] },
      { id: 'cushion', name: '방석·쿠션', icon: 'house', tier: 'soon', scene: 'home', why: '켄넬 안에 깔거나 정해진 잠자리로 써요.', crit: ['세탁할 수 있는 것으로'], products: [{ name: '강아지 방석 쿠션 세탁가능', url: L('dQxpUs') }] },
      { id: 'fence', name: '울타리', icon: 'fence', tier: 'soon', scene: 'home', why: '생활 공간을 나누면 배변 훈련이 쉬워져요.', crit: ['조립식이면 공간에 맞춰 늘렸다 줄였다'], products: [{ name: '강아지 울타리 펜스 조립식', url: L('dQxqoO') }] },
      { id: 'harness', name: '하네스·리드줄', icon: 'harness', tier: 'soon', scene: 'home', why: '소형견·퍼피는 Y자 하네스가 목에 부담이 적어요.', crit: ['소형견·퍼피: Y자 하네스', '중형견 이상: H형 하네스', '훈련된 성견: 목줄 + 리드줄'], products: [{ name: 'Y자 하네스 + 리드줄 세트 소형', url: L('dQxqFx') }, { name: '강아지 목줄 + 리드줄 세트 중형', url: L('dQxpOp') }] },
      { id: 'grooming', name: '미용·위생', icon: 'grooming', tier: 'later', scene: 'home', why: '처음 몇 주는 없어도 돼요. 시기에 맞춰 하나씩.', crit: ['슬리커 브러시: 입양 후 1~2주', '샴푸: 첫 목욕 전 (3~4주 후)', '귀 세정제: 수의사 진료 후', '발톱깎이: 익숙해진 후'], products: [{ name: '강아지 슬리커 브러시', url: L('dQxql0') }, { name: '강아지 샴푸 저자극 퍼피', url: L('dQxqfi') }, { name: '강아지 귀 세정제', url: L('dQxpF6') }, { name: '강아지 발톱깎이 LED', url: L('dQxpR2') }] },
      { id: 'food', name: '사료', icon: 'food', tier: 'must', scene: 'eat', why: '먹던 사료와 같은 제품으로 시작해요. 환경에 사료까지 바뀌면 배탈이 나기 쉬워요.', crit: ['분양처·보호소에서 먹던 사료부터 확인', '퍼피용(1세 이하)인지 확인', '소포장으로 입맛 확인 후 대용량'], products: [{ name: '로얄캐닌 미니 퍼피', url: L('dQxqLT') }, { name: '뉴트리나 건강백서 퍼피', url: L('dQxqIb') }, { name: '오리젠 퍼피', url: L('dQxqPd') }] },
      { id: 'bowls', name: '밥그릇·물그릇', icon: 'bowls', tier: 'must', scene: 'eat', why: '스테인리스는 세균 번식이 적고 잘 안 뒤집혀요.', crit: ['스테인리스 이중 그릇 추천', '도자기도 OK, 깨질 수는 있어요', '플라스틱은 흠집에 세균이 번식해요'], products: [{ name: '스테인리스 이중 밥그릇 세트', url: L('dQxqjn') }] },
      { id: 'toys', name: '장난감', icon: 'toys', tier: 'soon', scene: 'eat', why: '이갈이 중인 퍼피는 뭔가를 씹어야 해요. 없으면 가구를 씹어요.', crit: ['씹는 장난감 하나, 노즈워크 하나로 시작'], products: [{ name: '강아지 콩 장난감 이갈이', url: L('dQxqwV') }, { name: '강아지 노즈워크 매트', url: L('dQxpIZ') }, { name: '강아지 봉제 인형 장난감 소형', url: L('dQxp4A') }] },
      { id: 'treats', name: '훈련 간식', icon: 'treats', tier: 'soon', scene: 'eat', why: '배변 성공, 앉아, 기다려. 간식으로 칭찬하면 훈련이 빨라요.', crit: ['작게 잘라 줄 수 있는 것'], products: [{ name: '강아지 훈련용 간식 퍼피', url: L('dQxqC8') }, { name: '동결건조 닭가슴살 간식', url: L('dQxpL4') }] },
      { id: 'waterer', name: '자동 급수기', icon: 'waterer', tier: 'soon', scene: 'eat', why: '물그릇보다 위생적이에요. 하루 종일 외출한다면 특히 필요해요.', crit: ['통째로 씻기 쉬운지'], products: [{ name: '강아지 자동 급수기', url: L('dQxqrn') }] },
    ],
    skip: [
      { name: '비싼 강아지 침대', why: '취향 파악하고 사도 늦지 않아요' },
      { name: '옷·부츠', why: '적응하고 천천히' },
      { name: '자동 급식기', why: '퍼피는 먹는 양을 조절해 줘야 해요' },
    ],
  },
  firstCat, firstRun, fortySupplements,
];

// 공개일 게이트: 오늘(KST)보다 공개일이 늦은 회차는 빌드에서 뺀다 (소재 선공개 방지).
// 미리보기는 HWICK_PREVIEW=1 npm run dev
const todayKST = new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);
const preview = typeof process !== 'undefined' && process.env?.HWICK_PREVIEW === '1';
export const episodes: Episode[] = ALL.filter((e) => preview || e.published <= todayKST)
  .sort((a, b) => b.published.localeCompare(a.published) || a.no.localeCompare(b.no));

// 준비 중인 회차 (목차·홈 예고용) — 공개 전 회차 제목은 여기 넣지 않는다
export const upcoming = [
  { no: '02', title: '이사', cat: '집', icon: 'box', hook: '짐은 많고 박스는 없다', color: 'sky' },
  { no: '04', title: '수능 응원', cat: '시즌', icon: 'book', hook: 'D-day 전에 챙길 것', color: 'yolk' },
];

export const getEpisode = (slug: string) => episodes.find((e) => e.slug === slug);

// 실상품으로 교체 (products.ts)
import { PRODUCTS } from './products';
for (const ep of ALL) for (const it of ep.items) {
  const list = PRODUCTS[ep.slug]?.[it.id];
  if (list?.length) it.products = list;
}
