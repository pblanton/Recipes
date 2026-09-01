import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import recipesData from '../recipes-index.json';
import type { Recipe } from '../types';
import RecipeCard from '../components/RecipeCard';

const recipes = recipesData as Recipe[];

const fuse = new Fuse(recipes, {
  keys: ['title', 'tagline', 'content'],
  threshold: 0.3,
  includeScore: true,
});

const TAG_LABELS: Record<string, string> = {
  beef: 'Beef',
  bread: 'Bread',
  breakfast: 'Breakfast',
  chicken: 'Chicken',
  condiment: 'Condiment',
  dessert: 'Dessert',
  'gluten-free': 'Gluten Free',
  main: 'Main',
  salad: 'Salad',
  sauce: 'Sauce',
  seafood: 'Seafood',
  side: 'Side',
  'slow-cooker': 'Slow Cooker',
  soup: 'Soup',
  spicy: 'Spicy',
  vegetarian: 'Vegetarian',
};

const allTags = [...new Set(recipes.flatMap(r => r.tags ?? []))].sort();

export default function Home() {
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  function toggleTag(tag: string) {
    setActiveTags(prev => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  }

  const results = useMemo(() => {
    let pool = query.trim() ? fuse.search(query).map(r => r.item) : recipes;
    if (activeTags.size > 0) {
      pool = pool.filter(r =>
        [...activeTags].every(tag => (r.tags ?? []).includes(tag))
      );
    }
    return pool;
  }, [query, activeTags]);

  return (
    <div className="container">
      <div className="search-wrapper">
        <input
          type="search"
          placeholder="Search recipes, ingredients, techniques…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="search-input"
          autoFocus
        />
      </div>
      <div className="tag-filter">
        {allTags.map(tag => (
          <button
            key={tag}
            className={`tag-pill${activeTags.has(tag) ? ' active' : ''}`}
            onClick={() => toggleTag(tag)}
          >
            {TAG_LABELS[tag] ?? tag}
          </button>
        ))}
      </div>
      {results.length === 0 ? (
        <p className="no-results">No recipes match that combination.</p>
      ) : (
        <div className="recipe-grid">
          {results.map(recipe => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
