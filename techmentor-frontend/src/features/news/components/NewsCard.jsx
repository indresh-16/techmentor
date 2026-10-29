
import { ArrowUpRight, Clock3 } from 'lucide-react';
import Badge from '../../../components/ui/Badge';

function NewsCard({ article }) {
  return (
    <article className="surface-card flex flex-col overflow-hidden">
      <div className={`relative flex min-h-32 items-end overflow-hidden p-5 ${article.coverStyle}`}>
        <span className="absolute -right-3 -top-10 text-8xl font-black opacity-10">
          {article.symbol}
        </span>
        <Badge color={article.color}>{article.category}</Badge>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-7 text-white">
          {article.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
          {article.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
          <span className="truncate text-xs text-slate-500">
            {article.source}
          </span>
          <span className="flex shrink-0 items-center gap-1 text-xs text-slate-500">
            <Clock3 size={13} /> {article.readTime}
          </span>
        </div>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200"
        >
          Read more <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}

export default NewsCard;
