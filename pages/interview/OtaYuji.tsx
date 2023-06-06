import { FollowBanner } from '../../components/elements/FollowBanner';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import MemberInterviewCarousel from '../../components/templates/InterViewPage/InterViewTop/MemberInterviewCarousel';
import OtaYujiInterviewDetail from '../../components/templates/InterViewPage/OtaYuji/OtaYujiInterviewDetail';
import OtaYujiTop from '../../components/templates/InterViewPage/OtaYuji/OtaYujiTop';

function OtaYuji() {
  return (
    <>
      <Header />
      <FollowBanner />
      <OtaYujiTop />
      <OtaYujiInterviewDetail />
      <MemberInterviewCarousel />
      <Footer />
    </>
  );
}

export default OtaYuji;
