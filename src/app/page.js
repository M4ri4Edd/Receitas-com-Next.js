import Header from './componentes/header';
import Footer from './componentes/footer';
import styles from './styles.css';

const Home = () => (
  <div>
    <Header />
    <main>
      <h1>Bem-vindo ao Meu Site de Receitas</h1>
      <p>Encontre as melhores receitas aqui!</p>
    </main>
    <Footer />
  </div>
);

export default Home;
