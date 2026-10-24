import type { Episode } from '../types';

// EP.05 첫 고양이 — 공개일에 쇼츠(고양이 모래 TOP 3)와 같이 연다
export const firstCat: Episode = {
  slug: 'first-cat', no: '05', title: '첫 고양이', cat: '반려', color: 'pink', coverIcon: 'cat', mascot: 'cat',
  hook: '숨을 곳부터', h1: '고양이 오는 날.', sub: '숨을 데가 없다.', balloon: '…여긴 어디냥.',
  legacy: { href: '/pet/cat-starter/', title: '고양이 첫 입양 준비물 총정리 — 글로 자세히 보기' },
  published: '2026-10-25',
  choice: {
    q: '뭐부터\n준비할래?', eyebrow: '데려오는 날 기준',
    options: [
      { scene: 'home', big: '집', sub: '집부터 · 화장실과 숨을 곳' },
      { scene: 'eat', big: '밥', sub: '밥부터 · 사료와 물' },
    ],
  },
  scenes: [
    {
      key: 'home', color: 'cobalt', title: '어디 숨고,\n어디서 쌀까?', balloon: '일단 숨을래…', sfx: '스윽', hero: 'stack',
      levels: [
        { k: '아끼기', s: '첫날 필수', say: '화장실 + 모래 + 이동장. 첫날은 이걸로 돼요.', set: ['litterbox', 'litter', 'carrier'] },
        { k: '기본', s: '+스크래처·숨숨집', say: '일주일 안에 긁을 곳과 숨을 곳까지.', set: ['litterbox', 'litter', 'carrier', 'scratcher', 'hideout'] },
        { k: '넉넉히', s: '+캣타워', say: '높은 곳 좋아하는지 보이면 캣타워까지.', set: ['litterbox', 'litter', 'carrier', 'scratcher', 'hideout', 'tower'] },
      ],
    },
    {
      key: 'eat', color: 'chili', title: '첫 밥은\n뭘 주지?', balloon: '배고프다냥…', sfx: '냠', hero: 'equation',
      levels: [
        { k: '아끼기', s: '사료+그릇', say: '먹던 사료 + 넓고 얕은 그릇. 첫 밥은 이걸로.', set: ['food', 'bowls'], res: '첫 밥 OK' },
        { k: '기본', s: '+정수기', say: '물을 잘 안 마시는 고양이가 많아요. 정수기까지.', set: ['food', 'bowls', 'fountain'], res: '밥 + 물' },
        { k: '넉넉히', s: '+장난감·간식', say: '낚싯대 놀이와 간식으로 친해지기.', set: ['food', 'bowls', 'fountain', 'wand', 'treats'], res: '+ 놀이 = 친해지기' },
      ],
    },
  ],
  items: [
    { id: 'litterbox', name: '고양이 화장실', icon: 'litterbox', tier: 'must', scene: 'home', why: '고양이는 오자마자 화장실부터 찾아요. 몸길이의 1.5배 정도가 기준이에요.', crit: ['몸길이 1.5배 이상', '처음엔 뚜껑 없는 평판형이 적응이 쉬워요'], products: [] },
    { id: 'litter', name: '고양이 모래', icon: 'sand', tier: 'must', scene: 'home', why: '먹던 모래와 같은 종류로 시작하면 화장실 실수가 적어요.', crit: ['분양처·보호소에서 쓰던 모래 종류부터 확인', '벤토나이트: 잘 뭉치지만 무겁고 먼지가 날 수 있어요', '두부·카사바: 가볍고 변기에 버릴 수 있는 것도 있어요'], products: [] },
    { id: 'carrier', name: '이동장', icon: 'kennel', tier: 'must', scene: 'home', why: '데려오는 날, 병원 가는 날 꼭 필요해요.', crit: ['위로도 열리는 형태가 병원에서 편해요'], products: [] },
    { id: 'scratcher', name: '스크래처', icon: 'scratcher', tier: 'soon', scene: 'home', why: '긁을 곳이 없으면 소파와 벽지를 긁어요.', crit: ['골판지형으로 시작해 세운 것·눕힌 것 취향을 봐요'], products: [] },
    { id: 'hideout', name: '숨숨집', icon: 'house', tier: 'soon', scene: 'home', why: '낯선 집에서는 숨을 곳이 있어야 빨리 자리를 잡아요.', crit: ['처음엔 택배 상자로 대신해도 돼요'], products: [] },
    { id: 'tower', name: '캣타워', icon: 'cattower', tier: 'later', scene: 'home', why: '높은 곳을 좋아하는지 보고 천천히 사도 돼요.', crit: ['흔들리지 않는지', '천장 고정형은 설치 높이 확인'], products: [] },
    { id: 'food', name: '사료', icon: 'food', tier: 'must', scene: 'eat', why: '먹던 사료로 시작해요. 바꿀 땐 일주일에 걸쳐 조금씩 섞어요.', crit: ['1세 미만이면 키튼용인지 확인', '분양처·보호소에서 먹던 사료부터', '소포장으로 입맛 먼저 확인'], products: [] },
    { id: 'bowls', name: '밥그릇·물그릇', icon: 'bowls', tier: 'must', scene: 'eat', why: '수염이 그릇에 닿는 걸 싫어하는 고양이가 많아요.', crit: ['넓고 얕은 그릇', '도자기·스테인리스는 세척이 쉬워요'], products: [] },
    { id: 'fountain', name: '정수기', icon: 'waterer', tier: 'soon', scene: 'eat', why: '고양이는 물을 적게 마시는 편이에요. 흐르는 물을 더 잘 마시는 고양이도 있어요.', crit: ['필터 가격과 교체 주기', '분해해서 씻기 쉬운지'], products: [] },
    { id: 'wand', name: '낚싯대 장난감', icon: 'wand', tier: 'soon', scene: 'eat', why: '사냥 놀이는 친해지는 데 제일 많이 쓰는 방법이에요.', crit: ['끝 장식을 갈아 끼울 수 있는지'], products: [] },
    { id: 'treats', name: '간식', icon: 'treats', tier: 'later', scene: 'eat', why: '친해질 때, 발톱 깎을 때 보상으로 써요.', crit: ['짜 먹는 간식은 하루 양 확인'], products: [] },
  ],
  skip: [
    { name: '고양이 옷', why: '입히는 걸 싫어하는 고양이가 많아요' },
    { name: '자동 화장실', why: '일반 화장실에 적응하고 나서' },
    { name: '큰 캣타워', why: '높은 곳 취향 확인 후' },
  ],
};
