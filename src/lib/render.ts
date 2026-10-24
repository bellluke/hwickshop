// 회차 페이지의 바뀌는 부분(그림·상품 컷·단계 묶음)을 그리는 함수.
// 서버(첫 화면)와 브라우저(버튼을 누를 때)가 같은 함수를 쓴다.
import { svg } from './icons';
import { TIER_LABEL, type Episode, type Item, type Product, type Scene, type Tier } from '../data/episodes';
import { PRODUCTS_AS_OF } from '../data/products';

const won = (n: number) => n.toLocaleString('ko-KR') + '원';
const asOf = PRODUCTS_AS_OF.slice(5).replace('-', '/');
export const thumb = (p: Product, fallback: string, cls = '') =>
  p.image ? `<img class="${cls}" src="${p.image}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer">` : svg(fallback, cls);

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));
export const pkey = (itemId: string, i: number) => `${itemId}:${i}`;
const place = (html: string, css: string) => html.replace('<svg', `<svg style="${css}"`);

// 쌓기 그림: 고른 물건을 최대 4개까지 겹쳐 배치
const STACK = [
  ['left:2%;top:26%;width:70%;height:70%'],
  ['left:-2%;top:28%;width:66%;height:66%', 'left:42%;top:8%;width:58%;height:58%'],
  ['left:-2%;top:32%;width:62%;height:62%', 'left:44%;top:40%;width:56%;height:56%', 'left:28%;top:2%;width:46%;height:46%'],
  ['left:-4%;top:36%;width:56%;height:56%', 'left:46%;top:44%;width:52%;height:52%', 'left:2%;top:4%;width:44%;height:44%', 'left:50%;top:6%;width:44%;height:44%'],
];

export function renderArt(ep: Episode, scene: Scene, lv: number): string {
  const level = scene.levels[lv];
  const items = level.set.map((id) => ep.items.find((i) => i.id === id)!).filter(Boolean);
  if (scene.hero === 'equation') {
    const cells = items.slice(0, 3);
    const body = cells.map((it) => `<div class="cell">${svg(it.icon)}<b>${esc(it.name.replace(/ \(.+\)/, ''))}</b></div>`).join('<span class="op">+</span>');
    return `<div class="eq${cells.length === 1 ? ' solo' : ''}">${body}<div class="res">= ${esc(level.res ?? '준비 끝')}</div></div>`;
  }
  const pick = items.slice(0, 4);
  const pos = STACK[pick.length - 1] ?? STACK[0];
  const mascot = ep.mascot ? place(svg(ep.mascot), 'left:30%;top:16%;width:40%;height:40%') : '';
  return pick.map((it, i) => place(svg(it.icon), pos[i])).join('') + (pick.length < 3 ? mascot : '');
}

export function renderBudget(scene: Scene, lv: number): string {
  return scene.levels.map((l, i) => `<button type="button" role="radio" aria-checked="${i === lv}" data-b="${i}">${esc(l.k)}<small>${esc(l.s)}</small></button>`).join('');
}

function productCard(it: Item, i: number, picked: Set<string>): string {
  const p = it.products[i];
  const on = picked.has(pkey(it.id, i));
  const facts = p.reviews ? `<span class="stars">★ ${p.rating} · 리뷰 ${p.reviews.toLocaleString('ko-KR')}</span>` : '<span>가격·후기는 쿠팡에서 확인</span>';
  const price = p.price ? `<span class="price">${won(p.price)}${p.rocket ? '<i class="rocket">로켓</i>' : ''}</span>` : '';
  return `<div class="pcard${on ? ' sel' : ''}"><div class="pic${p.image ? ' photo' : ' halftone'}"><span class="rank">${p.reviews ? '쿠팡 랭킹 ' + (i + 1) + '위' : '후보 ' + (i + 1)}</span>${thumb(p, it.icon)}</div>
  <div class="meta"><b>${esc(p.name)}</b>${facts}${price}</div>
  <div class="pacts"><button type="button" class="pk" data-pick="${it.id}" data-i="${i}" aria-pressed="${on}">${on ? '담음' : '담기'}</button><a class="go" href="${p.url}" target="_blank" rel="sponsored noopener">쿠팡 ↗</a></div></div>`;
}

export function renderShop(ep: Episode, scene: Scene, lv: number, picked: Set<string>): string {
  const level = scene.levels[lv];
  const items = level.set.map((id) => ep.items.find((i) => i.id === id)!).filter(Boolean);
  const blocks = items.map((it) => `<div class="iblk"><div class="ih">${svg(it.icon)}<button type="button" data-info="${it.id}"><b>${esc(it.name)}</b><small>${esc(it.crit[0] ?? it.why)}</small></button><span class="tstamp ${it.tier}">${TIER_LABEL[it.tier]}</span></div>
    ${it.products.length ? `<div class="rail">${it.products.map((_, i) => productCard(it, i, picked)).join('')}</div>` : '<p class="noprod">살아보고 필요하면 사요. 상품은 아직 안 골랐어요.</p>'}</div>`).join('');
  return `<div class="shop-h"><strong>쿠팡에서 이걸 사면 돼</strong><span class="tape">${esc(level.k)} · ${items.length}품목</span></div><p class="basis">쿠팡 랭킹순 상위 · 리뷰 100개 이상 · ${asOf} 기준 가격 (바뀔 수 있어요)</p>${blocks}
  <div class="shop-acts"><button class="btn" type="button" data-addset="${scene.key}">휙 추천으로 다 담기</button></div>
  <p class="disc"><span>이 페이지는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</span></p>`;
}

export function renderTiers(ep: Episode, scene: Scene, picked: Set<string>): string {
  const tiers: Tier[] = ['must', 'soon', 'later'];
  return tiers.map((t) => {
    const items = ep.items.filter((i) => i.scene === scene.key && i.tier === t);
    if (!items.length) return '';
    return `<div class="tier ${t}"><div class="stamp">${TIER_LABEL[t].replace(' ', '<br>')}</div><div class="chips">${items.map((it) => {
      const n = it.products.filter((_, i) => picked.has(pkey(it.id, i))).length;
      return `<div class="chip">${svg(it.icon)}<button type="button" class="nm" data-info="${it.id}">${esc(it.name)}<small>왜 이거? 고르는 법</small></button><span class="n">${n ? `${n}개 담음` : it.products.length ? `후보 ${it.products.length}` : '나중에'}</span></div>`;
    }).join('')}</div></div>`;
  }).join('');
}

// 빈 방에 떨어지는 자리 (360×300 방 그림 기준)
export const ROOM_SLOTS = [
  'translate(6 150) scale(1.25)', 'translate(212 168) scale(.86)', 'translate(258 210) scale(.8)',
  'translate(150 214) scale(.66)', 'translate(170 50) scale(.78)', 'translate(40 128) scale(.72)',
];
