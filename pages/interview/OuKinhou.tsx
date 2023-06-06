import { FollowBanner } from '../../components/elements/FollowBanner';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import MemberInterviewCarousel from '../../components/templates/InterViewPage/InterViewTop/MemberInterviewCarousel';
import OuKinhouInterviewDetail from '../../components/templates/InterViewPage/OuKinhou/OuKinhouInterviewDetail';
import OuKinhouTop from '../../components/templates/InterViewPage/OuKinhou/OuKinhouTop';

function OuKinhou() {
  return (
    <>
      <Header />
      <FollowBanner />
      <OuKinhouTop />
      <OuKinhouInterviewDetail />
      <MemberInterviewCarousel />
      <Footer />
    </>
  );
}

export default OuKinhou;
