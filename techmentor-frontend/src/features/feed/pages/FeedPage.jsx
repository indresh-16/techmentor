
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import FeedFilters from '../components/FeedFilters';
import PostFeed from '../components/PostFeed';
import { getPosts } from '../../../services/posts/postService';

const SAMPLE_POSTS = [
  {
    id: '1',
    title: 'Getting Started with React 19 — What Changed?',
    excerpt:
      'Explore the newest features in React 19, including the compiler, server components, and simplified hooks.',
    category: 'web-development',
    readTime: '6 min read',
  },
  {
    id: '2',
    title: 'Build Your First RAG Pipeline with LangChain',
    excerpt:
      'Learn how to combine retrieval-augmented generation with LangChain to build smarter AI applications.',
    category: 'ai-engineering',
    readTime: '8 min read',
  },
  {
    id: '3',
    title: 'Top 10 VS Code Extensions for 2026',
    excerpt:
      'Boost your productivity with these must-have Visual Studio Code extensions every developer should know.',
    category: 'developer-tools',
    readTime: '4 min read',
  },
  {
    id: '4',
    title: 'How to Ace Your Technical Interview',
    excerpt:
      'A comprehensive guide to preparing for coding interviews at top tech companies.',
    category: 'career',
    readTime: '7 min read',
  },
  {
    id: '5',
    title: 'Understanding CSS Container Queries',
    excerpt:
      'Container queries let you style elements based on their container size — a game changer for component-driven design.',
    category: 'web-development',
    readTime: '5 min read',
  },
  {
    id: '6',
    title: 'Fine-Tuning Open Source LLMs — A Practical Guide',
    excerpt:
      'Step-by-step walkthrough of fine-tuning Llama and Mistral models for domain-specific tasks.',
    category: 'ai-engineering',
    readTime: '10 min read',
  },
];

function FeedPage() {
  const [active, setActive] = useState('All');
  const [posts, setPosts] = useState(SAMPLE_POSTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchPosts() {
      setLoading(true);
      try {
        const params = active !== 'All' ? { category: active } : {};
        const data = await getPosts(params);
        if (!cancelled) {
          setPosts(data.posts?.length ? data.posts : SAMPLE_POSTS);
        }
      } catch {
        // Backend not running — fall back to sample posts
        if (!cancelled) {
          setPosts(SAMPLE_POSTS);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchPosts();
    return () => {
      cancelled = true;
    };
  }, [active]);

  const filtered =
    active === 'All'
      ? posts
      : posts.filter(
          (p) =>
            p.category === active ||
            p.category ===
              active.toLowerCase().replace(/\s+/g, '-'),
        );

  return (
    <section className="container-main py-12">
      {/* Hero */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <Sparkles
            className="mr-2 inline text-violet-400"
            size={28}
          />
          Explore the <span className="gradient-text">Tech World</span>
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-slate-400">
          Curated posts on web development, AI engineering, developer
          tools, and career growth.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex justify-center">
        <FeedFilters active={active} onChange={setActive} />
      </div>

      {/* Posts */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet-400 border-t-transparent" />
        </div>
      ) : (
        <PostFeed posts={filtered} />
      )}
    </section>
  );
}

export default FeedPage;
