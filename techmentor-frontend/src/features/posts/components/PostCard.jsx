
import { Link } from 'react-router-dom';
import { Clock, ArrowUpRight } from 'lucide-react';

function PostCard({ post }) {
  const categoryColors = {
    'web-development': 'violet',
    'ai-engineering': 'blue',
    'developer-tools': 'green',
    career: 'orange',
  };

  const colorClass = categoryColors[post.category] || 'violet';

  return (
    <article className="surface-card flex flex-col overflow-hidden">
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-44 w-full object-cover"
        />
      )}

      <div className="flex flex-1 flex-col p-5">
        {post.category && (
          <span
            className={`category-${colorClass} mb-3 w-fit rounded-lg px-3 py-1 text-xs font-semibold`}
          >
            {post.category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
          </span>
        )}

        <h3 className="mb-2 text-base font-bold leading-snug text-white">
          {post.title}
        </h3>

        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-400">
          {post.excerpt || post.description}
        </p>

        <div className="flex items-center justify-between border-t border-white/[0.08] pt-4">
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock size={13} />
            {post.readTime || '5 min read'}
          </span>

          <Link
            to={`/posts/${post._id || post.id}`}
            className="flex items-center gap-1 text-xs font-semibold text-violet-400 transition hover:text-violet-300"
          >
            Read more <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
