import Link from 'next/link';

export default function RecipeCard({ recipe }) {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <Link href={`/recipes/${recipe.id}`}>Ver Detalhes</Link>
    </div>
  );
}
