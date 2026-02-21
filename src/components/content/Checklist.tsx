import { useState, useEffect } from 'react';

export interface ChecklistItem {
  name: string;
  price?: number;
  link?: string;
  category?: string;
}

interface Props {
  id: string;
  items: ChecklistItem[];
  title?: string;
}

function formatPrice(price: number): string {
  return price.toLocaleString('ko-KR') + '원';
}

export default function Checklist({ id, items, title }: Props) {
  const [checked, setChecked] = useState<boolean[]>(() => {
    if (typeof window === 'undefined') return new Array(items.length).fill(false);
    try {
      const saved = localStorage.getItem(`checklist-${id}`);
      if (saved) {
        const parsed = JSON.parse(saved) as boolean[];
        if (parsed.length === items.length) return parsed;
      }
    } catch { /* ignore */ }
    return new Array(items.length).fill(false);
  });

  useEffect(() => {
    try {
      localStorage.setItem(`checklist-${id}`, JSON.stringify(checked));
    } catch { /* ignore */ }
  }, [checked, id]);

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const total = items.reduce(
    (sum, item, i) => (checked[i] && item.price ? sum + item.price : sum),
    0,
  );

  const checkedCount = checked.filter(Boolean).length;

  const hasCategories = items.some((item) => item.category);
  const categories = hasCategories
    ? [...new Set(items.map((item) => item.category || '기타'))]
    : null;

  const renderItem = (item: ChecklistItem, index: number) => (
    <label
      key={index}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-stone-50"
    >
      <input
        type="checkbox"
        checked={checked[index]}
        onChange={() => toggle(index)}
        className="h-4 w-4 flex-shrink-0 cursor-pointer rounded accent-[var(--color-primary)]"
      />
      <span
        className={`flex-1 text-sm ${checked[index] ? 'text-[var(--color-text-muted)] line-through' : ''}`}
      >
        {item.name}
      </span>
      {item.price != null && (
        <span
          className={`font-price flex-shrink-0 text-sm ${checked[index] ? 'text-[var(--color-text-muted)] line-through' : ''}`}
        >
          {formatPrice(item.price)}
        </span>
      )}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="nofollow sponsored"
          className="flex-shrink-0 text-sm text-[var(--color-primary)] no-underline hover:text-[var(--color-primary-hover)]"
          onClick={(e) => e.stopPropagation()}
        >
          보기 →
        </a>
      )}
    </label>
  );

  return (
    <div className="my-6">
      {title && (
        <h4 className="mb-2 text-sm font-semibold text-[var(--color-text-sub)]">{title}</h4>
      )}

      <div className="space-y-0.5">
        {categories
          ? categories.map((cat) => (
              <div key={cat} className="mt-3 first:mt-0">
                <p className="px-3 py-1.5 text-xs font-semibold text-[var(--color-text-muted)]">
                  {cat}
                </p>
                {items.map(
                  (item, i) => item.category === cat && renderItem(item, i),
                )}
              </div>
            ))
          : items.map((item, i) => renderItem(item, i))}
      </div>

      <div className="mt-3 flex items-center justify-between px-3 text-sm">
        <span className="text-[var(--color-text-muted)]">
          {checkedCount}/{items.length} 선택
        </span>
        <span className="font-price">
          {formatPrice(total)}
        </span>
      </div>
    </div>
  );
}
