import HeadMeta from '../../components/elements/HeadMeta';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import ProductDetails from '../../components/templates/ProductPage/ProductDetails';
import TechnologySection from '../../components/templates/ProductPage/TechnologySection';

function product() {
  return (
    <>
      <HeadMeta title="PRODUCT | AIFUL ENGINEER RECRUITMENT" />
      <Header />
      <ProductDetails />
      <TechnologySection />
      <Footer />
    </>
  );
}

export default product;
