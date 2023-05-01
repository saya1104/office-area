import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import AboutTeam from '../components/templates/AboutTeam';
import Interview from '../components/templates/Interview';
import MainVisual from '../components/templates/MainVisual';
import Product from '../components/templates/Product';
import Recruit from '../components/templates/Recruit';
import TeamCoreValues from '../components/templates/TeamCoreValues';

function Home() {
  return (
    <>
      <Header />
      <MainVisual />
      <AboutTeam />
      <TeamCoreValues />
      <Product />
      <Interview />
      <Recruit />
      <Footer />
    </>
  );
}

export default Home;
