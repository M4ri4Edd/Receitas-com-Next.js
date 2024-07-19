import { useRouter } from 'next/router';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeDetail from './components/RecipeDetail';

export default function Recipe() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <main>
        <RecipeDetail id={id} />
      </main>
      <Footer />
    </div>
  );
}
