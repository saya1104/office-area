import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';

import MemberInterviewCarousel from '../../components/templates/InterviewPage/InterviewTop/MemberInterviewCarousel';
import InterviewDetail from '../../components/templates/InterviewPage/OtaYuji/InterviewDetail';
import Top from '../../components/templates/InterviewPage/OtaYuji/Top';

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
