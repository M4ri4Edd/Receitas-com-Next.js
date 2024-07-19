import { useState, useEffect } from 'react';
import Header from './componentes/header';
import Footer from './componentes/footer';
import RecipeCard from '../componentes/recipeCard';
import FilterBar from '../componentes/filterBar';
import SearchBar from '../componentes/searchBar';

const Receitas = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    // Simulação de fetch de receitas
    const fetchedRecipes = [
      { id: 1, title: 'Bolo de Chocolate', description: 'Delicioso bolo de chocolate', image: '/images/bolo-chocolate.jpg' },
      // Outras receitas
    ];
    setRecipes(fetchedRecipes);
    setFilteredRecipes(fetchedRecipes);
  }, []);

  const handleFilterChange = (filter) => {
    const filtered = recipes.filter(recipe => recipe.category === filter);
    setFilteredRecipes(filtered);
  };

  const handleSearch = (query) => {
    const filtered = recipes.filter(recipe => recipe.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Receitas</h1>
        <SearchBar onSearch={handleSearch} />
        <FilterBar onFilterChange={handleFilterChange} />
        <div className="recipe-list">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Receitas;
