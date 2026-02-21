import { useState, useEffect } from 'react';

interface TocItem {
  id: string;
  text: string;
  depth: number;
}

interface Props {
  headings: TocItem[];
}

export default function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' },
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile: accordion */}
      <nav className="mb-6 overflow-hidden rounded-2xl border border-stone-200 bg-[var(--color-surface)] lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-bold"
          aria-expanded={isOpen}
        >
          <span>
            <svg className="mr-1.5 inline-block h-4 w-4 align-text-bottom" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            목차
          </span>
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {isOpen && (
          <ul className="border-t border-stone-200 px-5 py-3">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block py-1.5 text-sm no-underline transition-colors duration-150 ${
                    h.depth > 2 ? 'pl-4' : ''
                  } ${
                    activeId === h.id
                      ? 'font-medium text-[var(--color-primary)]'
                      : 'text-[var(--color-text-sub)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Desktop: sticky sidebar */}
      <nav className="sticky top-20 hidden max-h-[calc(100dvh-6rem)] overflow-y-auto lg:block">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--color-text-sub)]">
          목차
        </p>
        <ul className="border-l-2 border-stone-200">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block border-l-2 py-1.5 text-sm no-underline transition-colors duration-150 ${
                  h.depth > 2 ? 'pl-6' : 'pl-4'
                } ${
                  activeId === h.id
                    ? '-ml-px border-[var(--color-primary)] font-medium text-[var(--color-primary)]'
                    : '-ml-px border-transparent text-[var(--color-text-sub)] hover:text-[var(--color-text)]'
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
