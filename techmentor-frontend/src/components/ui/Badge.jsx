
const styles = {
  violet: 'border-violet-400/20 bg-violet-400/10 text-violet-300',
  cyan: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-300',
  green: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  orange: 'border-orange-400/20 bg-orange-400/10 text-orange-300',
  blue: 'border-blue-400/20 bg-blue-400/10 text-blue-300',
  neutral: 'border-white/10 bg-white/5 text-slate-300',
};

function Badge({ children, color = 'violet' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${styles[color] || styles.neutral}`}
    >
      {children}
    </span>
  );
}

export default Badge;
