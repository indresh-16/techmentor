
import { useState } from 'react';
import {
  ArrowRight,
  Code2,
  Menu,
  Search,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Explore', href: '#explore' },
  { label: 'AI & Tools', href: '#tools' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Tech News', href: '#news' },
];

function PublicLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090b12] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090b12]/90 backdrop-blur-xl">
        <nav className="container-main flex min-h-[76px] items-center justify-between gap-5">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500 text-white shadow-lg shadow-violet-500/20">
              <Code2 size={23} />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              TechMentor<span className="text-violet-400">.</span>
              <span className="text-slate-400">Hub</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle search"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMenuOpen(false);
              }}
              className="rounded-xl border border-white/10 p-2.5 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              <Search size={18} />
            </button>

            <Link
              to="/login"
              className="hidden rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white sm:inline-flex"
            >
              Log in
            </Link>

            <Link
              to="/register"
              className="hidden items-center gap-2 rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400 sm:inline-flex"
            >
              Join Hub <ArrowRight size={15} />
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSearchOpen(false);
              }}
              className="rounded-xl border border-white/10 p-2.5 text-white lg:hidden"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>

        {searchOpen && (
          <div className="container-main pb-4">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const input = event.currentTarget.elements.namedItem('q');
                const query = input.value.trim();
                if (query) {
                  window.location.hash = `explore?q=${encodeURIComponent(query)}`;
                }
                setSearchOpen(false);
              }}
              className="flex gap-2"
            >
              <input
                name="q"
                autoFocus
                placeholder="Search tech, tools, jobs..."
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-violet-400/50"
              />
              <button className="rounded-xl bg-violet-500 px-4 text-sm font-semibold text-white">
                Search
              </button>
            </form>
          </div>
        )}

        {menuOpen && (
          <div className="border-t border-white/[0.08] bg-[#0d1019] px-5 py-3 lg:hidden">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-3 border-t border-white/10 pt-3 sm:hidden">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-xl border border-white/10 py-3 text-center text-sm"
              >
                Log in
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-xl bg-violet-500 py-3 text-center text-sm font-semibold"
              >
                Join Hub
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/[0.08] bg-[#0b0e16]">
        <div className="container-main flex flex-col gap-7 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <Code2 className="text-violet-400" size={22} />
              <span className="font-bold text-white">
                TechMentor Hub
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Discover tools, learn new technologies, and find your next
              opportunity.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            <a href="#explore" className="hover:text-white">Explore</a>
            <a href="#tools" className="hover:text-white">Tools</a>
            <a href="#jobs" className="hover:text-white">Jobs</a>
            <a href="#news" className="hover:text-white">News</a>
          </div>
        </div>

        <div className="container-main border-t border-white/[0.06] py-5 text-xs text-slate-600">
          © {new Date().getFullYear()} TechMentor Hub. Built for curious minds.
        </div>
      </footer>
    </div>
  );
}

export default PublicLayout;
