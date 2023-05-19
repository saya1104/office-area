import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import ProductDetails from '../components/templates/ProductPage/ProductDetails';
import TechnologySection from '../components/templates/ProductPage/TechnologySection';

function ProductPage() {
  return (
    <>
      <Header />
      <ProductDetails />
      <TechnologySection />
      <Footer />
    </>
  );
}

export default ProductPage;
