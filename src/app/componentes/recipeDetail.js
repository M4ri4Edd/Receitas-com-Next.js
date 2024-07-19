const RecipeDetail = ({ recipe }) => (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h2>Ingredientes</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Modo de Preparo</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
  
  export default RecipeDetail;
  