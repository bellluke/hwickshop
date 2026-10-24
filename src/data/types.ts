// 회차·상품 타입과 단계 이름. 브라우저 스크립트는 이 파일만 가져간다
// (episodes.ts·products.ts를 가져가면 공개 전 회차 데이터까지 번들에 실린다).

export const PRODUCTS_AS_OF = '2026-10-24';

export type Tier = 'must' | 'soon' | 'later';
export const TIER_LABEL: Record<Tier, string> = { must: '오늘 꼭', soon: '이번 주', later: '천천히' };
// 회차마다 단계 이름을 바꿀 수 있다 (예: 영양제는 '오늘 꼭' 대신 '기본')
export const tierLabel = (ep: { tiers?: Record<Tier, string> }, t: Tier) => (ep.tiers ?? TIER_LABEL)[t];

export interface Product { name: string; url: string; image?: string; price?: number; rating?: number; reviews?: number; rocket?: boolean }
export interface Item {
  id: string; name: string; icon: string; tier: Tier; scene: string;
  why: string; crit: string[]; products: Product[];
}
export interface Level { k: string; s: string; say: string; set: string[]; res?: string }
export interface Scene {
  key: string; color: 'cobalt' | 'chili'; title: string; balloon?: string; sfx?: string;
  hero: 'stack' | 'equation'; levels: Level[];
}
export interface Episode {
  slug: string; no: string; title: string; cat: string; color: 'yolk' | 'pink' | 'sky';
  hook: string; h1: string; sub: string; balloon: string; mascot?: string; coverIcon: string;
  legacy?: { href: string; title: string };
  choice: { q: string; eyebrow: string; options: { scene: string; big: string; sub: string }[] };
  scenes: Scene[]; items: Item[]; skip: { name: string; why: string }[];
  published: string; // 공개일(KST). 이 날짜 전에는 빌드에 안 들어간다 — 쇼츠와 같은 날 연다
  tiers?: Record<Tier, string>;
  notice?: string; // 상단·상품 목록에 늘 보이는 주의 문구 (건강·안전)
}

