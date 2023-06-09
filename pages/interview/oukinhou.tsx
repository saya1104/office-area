import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import MemberInterviewCarousel from '../../components/templates/InterViewPage/InterViewTop/MemberInterviewCarousel';
import OuKinhouInterviewDetail from '../../components/templates/InterViewPage/OuKinhou/OuKinhouInterviewDetail';
import OuKinhouTop from '../../components/templates/InterViewPage/OuKinhou/OuKinhouTop';

function oukinhou() {
  return (
    <>
      <Header />
      <OuKinhouTop />
      <OuKinhouInterviewDetail />
      <MemberInterviewCarousel />
      <Footer />
    </>
  );
}

export default oukinhou;
