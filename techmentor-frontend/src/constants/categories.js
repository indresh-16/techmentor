
export const CATEGORIES = [
  {
    label: 'Web Development',
    slug: 'web-development',
    color: 'violet',
    icon: '🌐',
  },
  {
    label: 'AI Engineering',
    slug: 'ai-engineering',
    color: 'blue',
    icon: '🤖',
  },
  {
    label: 'Developer Tools',
    slug: 'developer-tools',
    color: 'green',
    icon: '🛠️',
  },
  {
    label: 'Career',
    slug: 'career',
    color: 'orange',
    icon: '🚀',
  },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c]),
);
