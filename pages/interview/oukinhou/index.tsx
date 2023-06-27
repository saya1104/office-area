import HeadMeta from '../../../components/elements/HeadMeta';
import Footer from '../../../components/layouts/Footer';
import Header from '../../../components/layouts/Header';
import MemberInterviewCarousel from '../../../components/templates/InterViewPage/InterViewTop/MemberInterviewCarousel';
import OuKinhouInterviewDetail from '../../../components/templates/InterViewPage/OuKinhou/OuKinhouInterviewDetail';
import OuKinhouTop from '../../../components/templates/InterViewPage/OuKinhou/OuKinhouTop';

function oukinhou() {
  return (
    <>
      <HeadMeta title="Ou Kinhou | AIFUL ENGINEER RECRUITMENT" />
      <Header />
      <OuKinhouTop />
      <OuKinhouInterviewDetail />
      <MemberInterviewCarousel />
      <Footer />
    </>
  );
}

export default oukinhou;
