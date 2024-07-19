import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';

export default function Recipes() {
  return (
    <div>
      <Header />
      <main>
        <h1>Lista de Receitas</h1>
        <RecipeList />
      </main>
      <Footer />
    </div>
      );
}
