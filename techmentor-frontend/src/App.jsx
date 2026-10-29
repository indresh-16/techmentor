
import { useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Bookmark,
  BriefcaseBusiness,
  Check,
  Code2,
  Compass,
  Flame,
  Layers3,
  Menu,
  Newspaper,
  Search,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

const categories = ['All', 'Web Development', 'AI & ML', 'Tools', 'Career'];

const initialPosts = [
  {
    id: 1,
    category: 'AI & ML',
    label: 'AI ENGINEERING',
    title: 'Your first RAG application: from documents to intelligent answers',
    description:
      'Understand how retrieval, embeddings and language models work together to build useful AI applications.',
    author: 'TechMentor Editorial',
    date: '8 min read',
    tag: 'Learning guide',
    color: 'violet',
    icon: '✳',
    featured: true,
  },
  {
    id: 2,
    category: 'Web Development',
    label: 'WEB DEVELOPMENT',
    title: 'Build a production-minded React project, one feature at a time',
    description:
      'A practical approach to component design, reusable services and maintainable application structure.',
    author: 'Dev Community',
    date: '6 min read',
    tag: 'Development',
    color: 'blue',
    icon: '</>',
  },
  {
    id: 3,
    category: 'Tools',
    label: 'DEVELOPER TOOLS',
    title: 'Developer tools that make your everyday workflow better',
    description:
      'Discover practical tools for debugging, API testing, version control and writing cleaner code.',
    author: 'Tools Desk',
    date: '4 min read',
    tag: 'Toolbox',
    color: 'green',
    icon: '⌘',
  },
  {
    id: 4,
    category: 'Career',
    label: 'CAREER & INTERNSHIPS',
    title: 'How to make your first developer portfolio stand out',
    description:
      'Show what you can build, explain your decisions and turn small projects into convincing proof of skill.',
    author: 'Career Desk',
    date: '5 min read',
    tag: 'Career advice',
    color: 'orange',
    icon: '↗',
  },
];

const navItems = [
  { label: 'Explore', href: '#explore', icon: Compass },
  { label: 'AI & Tools', href: '#ai-tools', icon: Sparkles },
  { label: 'Career', href: '#career', icon: BriefcaseBusiness },
];

function Brand() {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500 text-white shadow-lg shadow-violet-500/25">
        <Code2 size={23} strokeWidth={2.5} />
      </span>
      <span className="text-lg font-bold tracking-tight text-white">
        TechMentor<span className="text-violet-400">.</span>
        <span className="text-slate-400">Hub</span>
      </span>
    </a>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090b12]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Brand />

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#explore"
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Explore posts
          </a>
          <a
            href="#join"
            className="rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
          >
            Join community <ArrowRight className="ml-1 inline" size={15} />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-white sm:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 px-5 py-4 sm:hidden">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5"
            >
              {label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-xl bg-violet-500 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Join community
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/[0.08] px-4 py-2 text-xs font-medium text-violet-300">
            <Sparkles size={14} />
            YOUR DAILY DOSE OF TECH
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Learn. Build.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              Stay ahead.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Your corner of the internet for developer insights, emerging AI
            tools, practical guides and opportunities that move your tech
            journey forward.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#explore"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-400"
            >
              Explore the hub <ArrowRight size={17} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.07]"
            >
              What you'll find <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <Check size={15} className="text-emerald-400" />
              Curated tech content
            </span>
            <span className="flex items-center gap-2">
              <Check size={15} className="text-emerald-400" />
              Built for developers
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-violet-500/25 to-cyan-400/10 blur-2xl" />

          <div className="relative rounded-3xl border border-white/10 bg-[#11141f]/95 p-5 shadow-2xl shadow-black/40 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div>
                <p className="text-xs text-slate-500">YOUR LEARNING SPACE</p>
                <h2 className="mt-1 text-lg font-semibold text-white">
                  The developer feed
                </h2>
              </div>
              <span className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                <Zap size={21} />
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {[
                {
                  icon: '✳',
                  color: 'bg-violet-400/15 text-violet-300',
                  title: 'AI Engineering',
                  subtitle: 'LLMs · RAG · Vector databases',
                  tag: 'EXPLORE',
                },
                {
                  icon: '</>',
                  color: 'bg-cyan-400/15 text-cyan-300',
                  title: 'Build real projects',
                  subtitle: 'React · APIs · Full stack',
                  tag: 'BUILD',
                },
                {
                  icon: '↗',
                  color: 'bg-orange-400/15 text-orange-300',
                  title: 'Career opportunities',
                  subtitle: 'Jobs · Internships · Skills',
                  tag: 'GROW',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition hover:border-white/15 hover:bg-white/[0.045]"
                >
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl font-bold ${item.color}`}
                  >
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-100">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>
                  <span className="text-[9px] font-bold tracking-wider text-slate-500">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-violet-400/15 bg-violet-400/[0.06] p-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Small steps. Real progress.
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Learn something. Build something.
                </p>
              </div>
              <Sparkles size={24} className="text-violet-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PostCard({ post, saved, onBookmark }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#10131d] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-xl hover:shadow-violet-950/20 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className={`category-${post.color} rounded-md px-2.5 py-1.5 text-[10px] font-bold tracking-wider`}>
          {post.label}
        </span>
        <button
          type="button"
          aria-label={saved ? 'Remove bookmark' : 'Bookmark post'}
          onClick={() => onBookmark(post.id)}
          className={`rounded-lg border p-2 transition ${
            saved
              ? 'border-violet-400/30 bg-violet-400/10 text-violet-300'
              : 'border-white/10 text-slate-500 hover:text-white'
          }`}
        >
          <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className={`my-6 grid h-14 w-14 place-items-center rounded-2xl text-xl font-bold category-icon-${post.color}`}>
        {post.icon}
      </div>

      <h3 className="text-lg font-semibold leading-7 text-white transition group-hover:text-violet-300">
        {post.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
        {post.description}
      </p>

      <div className="mt-6 flex items-center justify-between gap-2 border-t border-white/[0.08] pt-4">
        <span className="truncate text-xs text-slate-500">{post.author}</span>
        <span className="shrink-0 text-xs text-slate-500">{post.date}</span>
      </div>
    </article>
  );
}

function FeedSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [savedPosts, setSavedPosts] = useState([]);

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return initialPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch =
        !query ||
        `${post.title} ${post.description} ${post.category}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  function toggleBookmark(id) {
    setSavedPosts((current) =>
      current.includes(id)
        ? current.filter((savedId) => savedId !== id)
        : [...current, id]
    );
  }

  return (
    <section id="explore" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-violet-300">
            <Flame size={15} /> THE LATEST
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Explore the feed<span className="text-violet-400">.</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Useful reads, practical resources and ideas worth exploring.
          </p>
        </div>

        <label className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 md:max-w-xs">
          <Search size={17} className="shrink-0 text-slate-500" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search the feed..."
            aria-label="Search posts"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
          />
          {search && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setSearch('')}
              className="text-slate-500 hover:text-white"
            >
              <X size={15} />
            </button>
          )}
        </label>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-xl border px-4 py-2.5 text-xs font-medium transition sm:text-sm ${
              activeCategory === category
                ? 'border-violet-400/40 bg-violet-500/15 text-violet-200'
                : 'border-white/[0.08] bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            saved={savedPosts.includes(post.id)}
            onBookmark={toggleBookmark}
          />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-white/15 px-6 py-16 text-center">
          <Search size={28} className="mx-auto text-slate-500" />
          <h3 className="mt-4 font-semibold text-white">No matching posts</h3>
          <p className="mt-2 text-sm text-slate-400">
            Try another search or select a different category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setActiveCategory('All');
            }}
            className="mt-5 rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}

function DiscoverSection() {
  const items = [
    {
      id: 'ai-tools',
      icon: Sparkles,
      number: '01',
      title: 'AI & developer tools',
      description:
        'Explore tools and technologies that help you learn faster and build smarter.',
      color: 'text-violet-300 bg-violet-400/10',
      href: '#explore',
    },
    {
      id: 'career',
      icon: BriefcaseBusiness,
      number: '02',
      title: 'Jobs & internships',
      description:
        'Find opportunities to turn your learning into practical experience.',
      color: 'text-cyan-300 bg-cyan-400/10',
      href: '#explore',
    },
    {
      id: 'news',
      icon: Newspaper,
      number: '03',
      title: 'Tech updates',
      description:
        'Keep up with interesting ideas, software releases and industry trends.',
      color: 'text-orange-300 bg-orange-400/10',
      href: '#explore',
    },
  ];

  return (
    <section id="about" className="border-y border-white/[0.06] bg-[#0d1019]">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold tracking-[0.18em] text-cyan-300">
            MORE THAN A FEED
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Find your next rabbit hole<span className="text-cyan-300">.</span>
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            A space to discover new skills, explore useful resources and stay
            connected to what is happening in technology.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <a
                id={item.id}
                key={item.id}
                href={item.href}
                className="group rounded-2xl border border-white/[0.08] bg-[#11141f] p-6 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span className={`grid h-12 w-12 place-items-center rounded-xl ${item.color}`}>
                    <Icon size={22} />
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-slate-600">
                    {item.number}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition group-hover:text-white">
                  Explore <ArrowRight size={15} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="join" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="flex flex-col justify-between gap-6 border-b border-white/[0.08] pb-9 sm:flex-row sm:items-center">
        <div>
          <Brand />
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
            A community for curious minds, practical builders and the next
            generation of tech professionals.
          </p>
        </div>
        <a
          href="mailto:hello@techmentorhub.dev"
          className="inline-flex items-center gap-2 self-start rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white sm:self-center"
        >
          Get in touch <ArrowRight size={15} />
        </a>
      </div>
      <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-slate-600 sm:flex-row">
        <span>© {new Date().getFullYear()} TechMentor Hub.</span>
        <span>Made for people who love to learn and build.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#090b12] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <FeedSection />
        <DiscoverSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
