import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import MemberInterviewCarousel from '../../components/templates/InterViewPage/InterViewTop/MemberInterviewCarousel';
import InterviewDetail from '../../components/templates/InterViewPage/OtaYuji/InterviewDetail';
import OtaYujiTop from '../../components/templates/InterViewPage/OtaYuji/OtaYujiTop';

function OtaYuji() {
  return (
    <>
      <Header />
      <OtaYujiTop />
      <InterviewDetail />
      <MemberInterviewCarousel />
      <Footer />
    </>
  );
}

export default OtaYuji;
