import styled from 'styled-components';
import { FollowBanner } from '../components/elements/FollowBanner';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import AboutTeam from '../components/templates/TopPage/AboutTeam';
import Interview from '../components/templates/TopPage/Interview';
import MainVisual from '../components/templates/TopPage/MainVisual';
import Product from '../components/templates/TopPage/Product';
import Recruit from '../components/templates/TopPage/Recruit';
import TeamCoreValues from '../components/templates/TopPage/TeamCoreValues';
import { useLoading } from '../features/domains/hooks/useLoading';

//Recruitがpostionの影響により高さが認識されなくなったため、marginで調整
const FooterMargin = styled.div`
  margin-top: 500px;
`;

function Home() {
  const { isLoading } = useLoading();
  if (isLoading) return null;
  return (
    <>
      <Header />
      <FollowBanner />
      <MainVisual />
      <AboutTeam />
      <TeamCoreValues />
      <Product />
      <Interview />
      <Recruit />
      <FooterMargin>
        <Footer />
      </FooterMargin>
    </>
  );
}

export default Home;
