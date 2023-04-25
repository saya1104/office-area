import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import AboutTeamCategory from '../components/templates/AboutTeamCategory';
import MainVisualCategory from '../components/templates/MainVisualCategory';
import ProductCategory from '../components/templates/ProductCategory';
import TeamCoreValuesCategory from '../components/templates/TeamCoreValuesCategory';

function Home() {
  return (
    <>
      <Header />
      <MainVisualCategory />
      <AboutTeamCategory />
      <TeamCoreValuesCategory />
      <ProductCategory />
      <Footer />
    </>
  );
}

export default Home;
