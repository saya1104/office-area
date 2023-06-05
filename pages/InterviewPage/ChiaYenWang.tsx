import { FollowBanner } from '../../components/elements/FollowBanner';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import ChiaYenWangInterviewDetail from '../../components/templates/InterViewPage/ChiaYenWang/ChiaYenWangInterviewDetail';
import ChiaYenWangTop from '../../components/templates/InterViewPage/ChiaYenWang/ChiaYenWangTop';
import MemberInterviewCarousel from '../../components/templates/InterViewPage/InterViewTop/MemberInterviewCarousel';

function ChiaYenWang() {
  return (
    <>
      <Header />
      <FollowBanner />
      <ChiaYenWangTop />
      <ChiaYenWangInterviewDetail />
      <MemberInterviewCarousel />
      <Footer />
    </>
  );
}

export default ChiaYenWang;
