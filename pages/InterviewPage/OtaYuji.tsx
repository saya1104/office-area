import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import MemberInterviewCarousel from '../../components/templates/InterViewPage/InterViewTop/MemberInterviewCarousel';
import Top from '../../components/templates/InterViewPage/InterViewTop/Top';
import InterviewDetail from '../../components/templates/InterViewPage/OtaYuji/InterviewDetail';

function OtaYuji() {
  return (
    <>
      <Header />
      <Top />
      <InterviewDetail />
      <MemberInterviewCarousel />
      <Footer />
    </>
  );
}

export default OtaYuji;
