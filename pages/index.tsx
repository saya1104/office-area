import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import MainVisualCategory from '../components/templates/MainVisualCategory';
import ProductCategory from '../components/templates/ProductCategory';

function Home() {
  return (
    <>
      <Header />
      <MainVisualCategory />
      <ProductCategory />
      <Footer />
    </>
  );
}

export default Home;
