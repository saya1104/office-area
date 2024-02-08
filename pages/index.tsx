import styled from 'styled-components';
import HeadMeta from '../components/elements/HeadMeta';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import AboutTeam from '../components/templates/TopPage/AboutTeam';
import Interview from '../components/templates/TopPage/Interview';
import MainVisual from '../components/templates/TopPage/MainVisual';
import OfficeSpace from '../components/templates/TopPage/OfficeSpace';
import Product from '../components/templates/TopPage/Product';
import Recruit from '../components/templates/TopPage/Recruit';
import TeamCoreValues from '../components/templates/TopPage/TeamCoreValues';
import { useLoading } from '../features/domains/hooks/useLoading';

//Recruitがpostionの影響により高さが認識されなくなったため、marginで調整
const FooterMargin = styled.div`
  margin-top: 100px;
`;

function Home() {
  const { isLoading } = useLoading();
  if (isLoading) return null;
  return (
    <>
      <HeadMeta title="AIFUL ENGINEER RECRUITMENT" />
      <Header />
      <MainVisual />
      <AboutTeam />
      <TeamCoreValues />
      <Product />
      <OfficeSpace/>
      <Interview />
      <Recruit />
      <FooterMargin>
        <Footer />
      </FooterMargin>
    </>
  );
}

export default Home;
