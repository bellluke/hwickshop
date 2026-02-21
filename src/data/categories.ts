export interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
  path: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'start', name: '스타터킷', emoji: '🚀', description: '처음 시작하는 당신을 위한', path: '/start', color: 'var(--color-cat-start)' },
  { id: 'pet', name: '반려동물', emoji: '🐾', description: '반려동물과 함께하는 삶', path: '/pet', color: 'var(--color-cat-pet)' },
  { id: 'home', name: '자취·이사', emoji: '🏠', description: '처음 살아보는 거, 도와줄게요', path: '/home', color: 'var(--color-cat-home)' },
  { id: 'baby', name: '육아·출산', emoji: '👶', description: '초보 부모를 위한 가이드', path: '/baby', color: 'var(--color-cat-baby)' },
  { id: 'school', name: '신학기', emoji: '🎒', description: '입학부터 졸업까지', path: '/school', color: 'var(--color-cat-school)' },
  { id: 'health', name: '건강·운동', emoji: '💪', description: '건강한 시작을 위한 준비', path: '/health', color: 'var(--color-cat-health)' },
  { id: 'gift', name: '선물', emoji: '🎁', description: '마음을 전하는 선물 가이드', path: '/gift', color: 'var(--color-cat-gift)' },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
