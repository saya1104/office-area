import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import AboutTeamDetails from '../components/templates/AboutTeamPage/AboutTeamDetails';
import TeamCoreValueDetail from '../components/templates/AboutTeamPage/TeamCoreValueDetail';

function about() {
  return (
    <>
      <Header />
      <AboutTeamDetails />
      <TeamCoreValueDetail />
      <Footer />
    </>
  );
}

export default about;
