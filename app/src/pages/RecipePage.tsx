import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import recipesData from '../recipes-index.json';
import type { Recipe } from '../types';

const recipes = recipesData as Recipe[];

const components: Components = {
  img({ src, alt }) {
    const resolvedSrc = src?.startsWith('./')
      ? `${import.meta.env.BASE_URL}images/${src.slice(2)}`
      : src;
    return (
      <img
        src={resolvedSrc}
        alt={alt ?? ''}
        onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
    );
  },
};

export default function RecipePage() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find(r => r.slug === slug);

  if (!recipe) return <Navigate to="/" replace />;

  return (
    <div className="container recipe-view">
      <Link to="/" className="back-link">← All Recipes</Link>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {recipe.content}
      </ReactMarkdown>
    </div>
  );
}
