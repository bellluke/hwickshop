import type { Episode } from '../types';

// EP.07 마흔, 첫 영양제 — 효능을 말하지 않는다. 랭킹·리뷰 수·라벨 확인법만.
export const fortySupplements: Episode = {
  slug: 'forty-supplements', no: '07', title: '마흔, 첫 영양제', cat: '건강', color: 'sky', coverIcon: 'pills',
  hook: '다들 뭐 먹지?', h1: '마흔이 됐다.', sub: '영양제 앞에서 멈췄다.', balloon: '…종류가 왜 이렇게 많아?',
  published: '2026-10-26',
  tiers: { must: '많이 찾는', soon: '하나 더', later: '상담 먼저' },
  notice: '건강기능식품은 질병을 예방·치료하는 약이 아니에요. 휙은 효과를 말하지 않고 쿠팡 랭킹과 리뷰 수만 보여줘요. 먹기 전에 약사나 의사와 상담하세요. 먹는 약이 있거나 임신·수유 중이면 꼭 상담하세요.',
  choice: {
    q: '어떻게\n시작할래?', eyebrow: '처음 챙기는 사람 기준',
    options: [
      { scene: 'base', big: '기본', sub: '기본부터 · 많이 찾는 것' },
      { scene: 'more', big: '추가', sub: '하나 더 · 40대가 찾는 것' },
    ],
  },
  scenes: [
    {
      key: 'base', color: 'cobalt', title: '딱 하나만\n먹는다면?', balloon: '종류가 너무 많아…', sfx: '?!', hero: 'stack',
      levels: [
        { k: '한 알', s: '종합비타민', say: '종합비타민 한 알로 시작하는 사람이 많아요.', set: ['multi'] },
        { k: '기본', s: '+비타민D·오메가3', say: '많이 찾는 조합. 성분이 겹치는지만 확인해요.', set: ['multi', 'vitd', 'omega3'] },
        { k: '넉넉히', s: '+유산균', say: '여기까지가 장바구니에 자주 같이 담기는 조합이에요.', set: ['multi', 'vitd', 'omega3', 'probiotic'] },
      ],
    },
    {
      key: 'more', color: 'chili', title: '40대가\n더 찾는 건?', balloon: '다들 하나씩 더 먹던데…', sfx: '흠', hero: 'equation',
      levels: [
        { k: '하나', s: '루테인', say: '40대에 들어 찾는 사람이 늘어나는 성분이에요.', set: ['lutein'], res: '하나 더' },
        { k: '둘', s: '+마그네슘', say: '종합비타민에 이미 들어 있는지 먼저 확인해요.', set: ['lutein', 'magnesium'], res: '두 개 더' },
        { k: '셋', s: '+코엔자임Q10', say: '먹는 약이 있다면 여기부터는 상담 먼저.', set: ['lutein', 'magnesium', 'coq10'], res: '+ 상담 먼저' },
      ],
    },
  ],
  items: [
    { id: 'multi', name: '종합비타민', icon: 'pills', tier: 'must', scene: 'base', why: '여러 성분이 한 알에 들어 있어서 처음 시작하는 사람이 많이 골라요.', crit: ['하루 몇 알인지(섭취량) 확인', '다른 영양제와 성분이 겹치지 않는지'], products: [] },
    { id: 'vitd', name: '비타민D', icon: 'sachet', tier: 'must', scene: 'base', why: '종합비타민 다음으로 많이 찾는 단일 성분이에요.', crit: ['종합비타민에 이미 들어 있는 양 확인 (중복 주의)', '함량(IU) 표시 확인'], products: [] },
    { id: 'omega3', name: '오메가3', icon: 'capsule', tier: 'must', scene: 'base', why: '40대 장바구니에 자주 들어가는 영양제예요.', crit: ['EPA+DHA 함량 표시 확인', '알 크기 (삼키기 편한지)'], products: [] },
    { id: 'probiotic', name: '유산균', icon: 'sachet', tier: 'soon', scene: 'base', why: '꾸준히 찾는 사람이 많은 영양제예요.', crit: ['보관 방법(실온·냉장) 확인'], products: [] },
    { id: 'lutein', name: '루테인', icon: 'capsule', tier: 'soon', scene: 'more', why: '40대에 들어 찾는 사람이 늘어나는 성분이에요.', crit: ['루테인·지아잔틴 함량 표시 확인', '종합비타민에 들어 있는지 확인'], products: [] },
    { id: 'magnesium', name: '마그네슘', icon: 'pills', tier: 'soon', scene: 'more', why: '종합비타민 다음에 하나 더 추가하는 사람이 많아요.', crit: ['종합비타민에 이미 들어 있는 양 확인'], products: [] },
    { id: 'coq10', name: '코엔자임Q10', icon: 'capsule', tier: 'later', scene: 'more', why: '찾는 사람은 많지만, 먹는 약이 있다면 상담이 먼저예요.', crit: ['복용 중인 약이 있으면 약사와 먼저 상담'], products: [] },
    { id: 'milkthistle', name: '밀크씨슬', icon: 'pills', tier: 'later', scene: 'more', why: '많이 찾지만, 먹는 약이 있다면 상담이 먼저예요.', crit: ['복용 중인 약이 있으면 약사와 먼저 상담'], products: [] },
  ],
  skip: [
    { name: '고함량 여러 통 한꺼번에', why: '성분이 겹칠 수 있어요' },
    { name: '처음부터 대용량', why: '몸에 맞는지 먼저 확인' },
    { name: '효과 광고만 보고 고르기', why: '라벨의 함량·섭취량부터 확인' },
  ],
};
