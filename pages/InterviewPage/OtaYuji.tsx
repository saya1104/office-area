import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import Swiper from '../../components/templates/InterViewPage/InterViewTop/Swiper';
import InterviewDetail from '../../components/templates/InterViewPage/OtaYuji/InterviewDetail';
import Top from '../../components/templates/InterViewPage/OtaYuji/Top';

function OtaYuji() {
  return (
    <>
      <Header />
      <Top />
      <InterviewDetail />
      <Swiper />
      <Footer />
    </>
  );
}

export default OtaYuji;
