import HeadMeta from '../../../components/elements/HeadMeta';
import Footer from '../../../components/layouts/Footer';
import Header from '../../../components/layouts/Header';
import MemberInterviewCarousel from '../../../components/templates/InterViewPage/InterViewTop/MemberInterviewCarousel';
import OtaYujiInterviewDetail from '../../../components/templates/InterViewPage/OtaYuji/OtaYujiInterviewDetail';
import OtaYujiTop from '../../../components/templates/InterViewPage/OtaYuji/OtaYujiTop';

function otayuji() {
  return (
    <>
      <HeadMeta title="Ota Yuji | AIFUL ENGINEER RECRUITMENT" />
      <Header />
      <OtaYujiTop />
      <OtaYujiInterviewDetail />
      <MemberInterviewCarousel />
      <Footer />
    </>
  );
}

export default otayuji;
