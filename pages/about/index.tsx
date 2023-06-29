import HeadMeta from '../../components/elements/HeadMeta';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import AboutTeamDetails from '../../components/templates/AboutTeamPage/AboutTeamDetails';
import TeamCoreValueDetail from '../../components/templates/AboutTeamPage/TeamCoreValueDetail';

function about() {
  return (
    <>
      <HeadMeta title="ABOUT TEAM | AIFUL ENGINEER RECRUITMENT" />
      <Header />
      <AboutTeamDetails />
      <TeamCoreValueDetail />
      <Footer />
    </>
  );
}

export default about;
