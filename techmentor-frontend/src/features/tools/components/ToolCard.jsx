
import { ArrowUpRight, Sparkles } from 'lucide-react';
import Badge from '../../../components/ui/Badge';

function ToolCard({ tool }) {
  return (
    <article className="surface-card flex flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-xl font-bold text-cyan-300">
          {tool.icon}
        </div>
        <Badge color={tool.color}>{tool.category}</Badge>
      </div>

      <h3 className="mt-5 flex items-center gap-2 font-semibold text-white">
        {tool.name}
        {tool.featured && <Sparkles size={14} className="text-amber-300" />}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
        {tool.description}
      </p>

      <a
        href={tool.url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
      >
        Explore tool <ArrowUpRight size={15} />
      </a>
    </article>
  );
}

export default ToolCard;
