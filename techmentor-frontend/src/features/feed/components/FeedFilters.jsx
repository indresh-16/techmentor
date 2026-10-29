
const categories = [
  'All',
  'Web Development',
  'AI Engineering',
  'Developer Tools',
  'Career',
];

function FeedFilters({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={active === category}
          className={`rounded-xl border px-4 py-2.5 text-sm transition ${
            active === category
              ? 'border-violet-400/30 bg-violet-400/10 text-violet-200'
              : 'border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FeedFilters;
