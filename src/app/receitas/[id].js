import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipeDetail from '../../components/RecipeDetail';

const Recipe = () => {
  const router = useRouter();
  const { id } = router.query;

  // Simulação de fetch de receita individual
  const recipe = {
    id,
    title: 'Bolo de Chocolate',
    image: '/images/bolo-chocolate.jpg',
    ingredients: ['2 ovos', '1 xícara de açúcar', '1 xícara de farinha de trigo', '1/2 xícara de óleo', '1 xícara de leite', '1/2 xícara de cacau em pó', '1 colher de fermento'],
    instructions: 'Misture todos os ingredientes e asse por 30 minutos.'
  };

  return (
    <div>
      <Header />
      <main>
        <RecipeDetail recipe={recipe} />
      </main>
      <Footer />
    </div>
  );
};

export default Recipe;
