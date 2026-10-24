import type { Episode } from '../types';

// EP.06 러닝 입문 — 겨울 시작 기준
export const firstRun: Episode = {
  slug: 'first-run', no: '06', title: '러닝 입문', cat: '운동', color: 'yolk', coverIcon: 'shoe',
  hook: '운동화 하나면 될까?', h1: '달려 보기로 했다.', sub: '근데 뭘 신지?', balloon: '…일단 나가 볼까?',
  legacy: { href: '/start/running-starter/', title: '러닝 입문 준비물 — 글로 자세히 보기' },
  published: '2026-10-27',
  choice: {
    q: '뭐부터\n챙길래?', eyebrow: '첫 달 기준',
    options: [
      { scene: 'gear', big: '발', sub: '신발부터 · 신고 챙길 것' },
      { scene: 'cold', big: '겨울', sub: '추위부터 · 손·목·바람' },
    ],
  },
  scenes: [
    {
      key: 'gear', color: 'cobalt', title: '뭘 신고\n나가지?', balloon: '발이 아파…', sfx: '탁탁', hero: 'stack',
      levels: [
        { k: '아끼기', s: '신발+양말', say: '러닝화 + 러닝 양말. 첫 달은 이것만.', set: ['shoes', 'socks'] },
        { k: '기본', s: '+암밴드', say: '폰 들고 뛰기 불편하면 암밴드나 러닝 벨트.', set: ['shoes', 'socks', 'armband'] },
        { k: '넉넉히', s: '+폼롤러', say: '달린 뒤 풀어줄 폼롤러까지.', set: ['shoes', 'socks', 'armband', 'roller'] },
      ],
    },
    {
      key: 'cold', color: 'chili', title: '추운 날엔\n뭘 입지?', balloon: '손이 꽁꽁…', sfx: '후—', hero: 'equation',
      levels: [
        { k: '아끼기', s: '장갑', say: '겨울엔 손이 제일 먼저 시려요. 장갑부터.', set: ['gloves'], res: '손 OK' },
        { k: '기본', s: '+넥워머', say: '목까지 막으면 찬 바람이 훨씬 덜 들어와요.', set: ['gloves', 'neckwarmer'], res: '손 + 목' },
        { k: '넉넉히', s: '+바람막이', say: '가볍게 접히는 바람막이까지면 겨울 러닝 준비 끝.', set: ['gloves', 'neckwarmer', 'windbreaker'], res: '+ 바람막이 = 겨울 러닝' },
      ],
    },
  ],
  items: [
    { id: 'shoes', name: '러닝화', icon: 'shoe', tier: 'must', scene: 'gear', why: '러닝용으로 나온 신발로 시작하는 사람이 많아요.', crit: ['평소보다 5mm 크게 신는 사람이 많아요', '가능하면 매장에서 신어 보고 사요'], products: [] },
    { id: 'socks', name: '러닝 양말', icon: 'socks', tier: 'must', scene: 'gear', why: '면양말은 땀에 젖으면 물집이 잘 생겨요.', crit: ['쿠션형·발가락형 중 취향', '여러 켤레 묶음이 편해요'], products: [] },
    { id: 'armband', name: '암밴드·러닝 벨트', icon: 'armband', tier: 'soon', scene: 'gear', why: '폰을 손에 들고 뛰면 금방 불편해져요.', crit: ['내 폰 크기가 들어가는지'], products: [] },
    { id: 'roller', name: '폼롤러', icon: 'roller', tier: 'later', scene: 'gear', why: '달린 뒤 풀어주는 용도로 많이 사요.', crit: ['처음엔 너무 딱딱하지 않은 것'], products: [] },
    { id: 'gloves', name: '러닝 장갑', icon: 'gloves', tier: 'soon', scene: 'cold', why: '겨울엔 손이 제일 먼저 시려요.', crit: ['스마트폰 터치가 되는지'], products: [] },
    { id: 'neckwarmer', name: '넥워머', icon: 'scarf', tier: 'soon', scene: 'cold', why: '목을 막으면 찬 바람이 덜 들어와요.', crit: ['얇고 땀이 잘 마르는 소재'], products: [] },
    { id: 'windbreaker', name: '바람막이', icon: 'jacket', tier: 'soon', scene: 'cold', why: '두꺼운 패딩은 금방 더워져요. 얇은 바람막이가 편해요.', crit: ['접어서 주머니에 들어가는 경량형'], products: [] },
  ],
  skip: [
    { name: '고가 카본 러닝화', why: '첫 달엔 필요 없어요' },
    { name: '러닝머신', why: '밖에서 습관부터' },
    { name: '스마트워치', why: '기록이 재미있어지면 그때' },
  ],
};
