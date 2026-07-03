import { useState } from 'react';

export type MenuLink = {
  href: string;
  label: string;
  active: boolean;
};

export type RecentPost = {
  href: string;
  title: string;
  dateLabel: string;
  category: string;
};

type Props = {
  brandName: string;
  tagline: string;
  links: MenuLink[];
  recentPosts: RecentPost[];
  alternateHref: string;
  alternateLabel: string;
  recentPostsLabel: string;
  currentLanguageLabel: string;
  switchLanguageLabel: string;
};

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[2.2]">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[2.2]">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

export default function MobileMenu({
  brandName,
  tagline,
  links,
  recentPosts,
  alternateHref,
  alternateLabel,
  recentPostsLabel,
  currentLanguageLabel,
  switchLanguageLabel,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <header className="sticky top-0 z-50 border-b border-white/12 bg-[linear-gradient(180deg,rgba(122,15,91,0.98),rgba(42,10,46,0.96))] px-4 py-4 text-white shadow-[0_18px_40px_rgba(42,10,46,0.18)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <a href={links[0]?.href ?? '/fr/'} className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl font-black tracking-tight">
              N
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-[#FFD6EC]">{brandName}</span>
              <span className="block max-w-[18rem] text-xs leading-5 text-white/72">{tagline}</span>
            </span>
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[4.75rem] z-40 overflow-y-auto bg-[linear-gradient(180deg,rgba(122,15,91,0.98),rgba(42,10,46,0.98))] px-4 pb-8 pt-6 text-white backdrop-blur-xl">
          <div className="mx-auto grid max-w-5xl gap-6">
            <nav aria-label="Primary" className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                    link.active ? 'bg-white text-[color:var(--accent)]' : 'bg-white/0 text-white/90 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFD6EC]">{recentPostsLabel}</p>
                <a
                  href={alternateHref}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em]"
                >
                  {switchLanguageLabel}: {alternateLabel}
                </a>
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/65">{currentLanguageLabel}</p>
              <div className="grid gap-3">
                {recentPosts.map((post) => (
                  <a
                    href={post.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-white/8 p-3 transition hover:bg-white/12"
                  >
                    <div className="h-16 w-16 overflow-hidden rounded-xl bg-[#FFD6EC]">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_25%),linear-gradient(135deg,rgba(255,61,165,0.45),rgba(122,15,91,0.9))]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFD6EC]">{post.category}</p>
                      <h3 className="truncate text-lg font-semibold text-white">{post.title}</h3>
                      <p className="text-sm text-white/70">{post.dateLabel}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
