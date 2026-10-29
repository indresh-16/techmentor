
import PostCard from '../../posts/components/PostCard';

function PostFeed({ posts }) {
  if (!posts.length) {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 py-14 text-center">
        <p className="font-semibold text-white">No posts found</p>
        <p className="mt-2 text-sm text-slate-400">
          Try a different category or search term.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostFeed;
