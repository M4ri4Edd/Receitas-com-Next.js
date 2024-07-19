import { useEffect, useState } from 'react';
import IngredientList from './IngredientList';

export default function RecipeDetail({ id }) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`/api/recipes/${id}`)
      .then(response => response.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <IngredientList ingredients={recipe.ingredients} />
    </div>
  );
}
