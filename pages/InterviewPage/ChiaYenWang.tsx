import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import MemberInterviewCarousel from '../../components/templates/InterViewPage/InterViewTop/MemberInterviewCarousel';
import ChiaYenWangInterviewDetail from '../../components/templates/InterViewPage/ChiaYenWang/ChiaYenWangInterviewDetail';
import ChiaYenWangTop from '../../components/templates/InterViewPage/ChiaYenWang/ChiaYenWangTop';

function OtaYuji() {
  return (
    <>
      <Header />
      <ChiaYenWangTop />
      <ChiaYenWangInterviewDetail />
      <MemberInterviewCarousel />
      <Footer />
    </>
  );
}

export default OtaYuji;
