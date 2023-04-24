import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import AboutTeamCategory from '../components/templates/AboutTeamCategory';
import MainVisualCategory from '../components/templates/MainVisualCategory';
import TeamCoreValuesCategory from '../components/templates/TeamCoreValuesCategory';

function Home() {
  return (
    <>
      <Header />
      <MainVisualCategory />
      <AboutTeamCategory />
      <TeamCoreValuesCategory />
      <Footer />
    </>
  );
}

export default Home;
