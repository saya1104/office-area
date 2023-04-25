import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import AboutTeamCategory from '../components/templates/AboutTeamCategory';
import InterviewCategory from '../components/templates/InterviewCategory';
import MainVisualCategory from '../components/templates/MainVisualCategory';
import TeamCoreValuesCategory from '../components/templates/TeamCoreValuesCategory';

function Home() {
  return (
    <>
      <Header />
      <MainVisualCategory />
      <AboutTeamCategory />
      <TeamCoreValuesCategory />
      <InterviewCategory />
      <Footer />
    </>
  );
}

export default Home;
