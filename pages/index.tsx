import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import AboutTeamCategory from '../components/templates/AboutTeamCategory';
import MainVisualCategory from '../components/templates/MainVisualCategory';

function Home() {
  return (
    <>
      <Header />
      <MainVisualCategory />
      <AboutTeamCategory />
      <Footer />
    </>
  );
}

export default Home;
