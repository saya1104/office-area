import HeadMeta from '../../../components/elements/HeadMeta';
import Footer from '../../../components/layouts/Footer';
import Header from '../../../components/layouts/Header';
import ChiaYenWangInterviewDetail from '../../../components/templates/InterViewPage/ChiaYenWang/ChiaYenWangInterviewDetail';
import ChiaYenWangTop from '../../../components/templates/InterViewPage/ChiaYenWang/ChiaYenWangTop';
import MemberInterviewCarousel from '../../../components/templates/InterViewPage/InterViewTop/MemberInterviewCarousel';

function chiayenwang() {
  return (
    <>
      <HeadMeta title="Chia Yen Wang | AIFUL ENGINEER RECRUITMENT" />
      <Header />
      <ChiaYenWangTop />
      <ChiaYenWangInterviewDetail />
      <MemberInterviewCarousel />
      <Footer />
    </>
  );
}

export default chiayenwang;
