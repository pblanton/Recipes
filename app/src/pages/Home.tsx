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

export default function Home() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return recipes;
    return fuse.search(query).map(r => r.item);
  }, [query]);

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
      {results.length === 0 ? (
        <p className="no-results">No recipes found for &ldquo;{query}&rdquo;</p>
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
