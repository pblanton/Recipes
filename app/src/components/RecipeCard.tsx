import { Link } from 'react-router-dom';
import type { Recipe } from '../types';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link to={`/recipe/${recipe.slug}`} className="recipe-card">
      <h2>{recipe.title}</h2>
      {recipe.tagline && <p className="tagline">{recipe.tagline}</p>}
      {recipe.quickInfo && <p className="quick-info">{recipe.quickInfo}</p>}
    </Link>
  );
}
