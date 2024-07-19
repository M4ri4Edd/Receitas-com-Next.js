import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Bem-vindo ao Site de Receitas</h1>
        <RecipeList />
      </main>
      <Footer />
    </div>
  );
}
