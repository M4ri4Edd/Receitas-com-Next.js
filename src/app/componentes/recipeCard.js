import Link from 'next/link';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <img src={recipe.image} alt={recipe.title} />
    <h2>{recipe.title}</h2>
    <p>{recipe.description}</p>
    <Link href={`/recipes/${recipe.id}`}>Ver Receita</Link>
  </div>
);

export default RecipeCard;
