import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import MemberInterviewCarousel from '../../components/templates/InterViewPage/InterViewTop/MemberInterviewCarousel';
import TominagaRyoInterviewDetail from '../../components/templates/InterViewPage/TominagaRyo/TominagaRyoInterviewDetail';
import TominagaRyoTop from '../../components/templates/InterViewPage/TominagaRyo/TominagaRyoTop';

function TominagaRyo() {
  return (
    <>
      <Header />
      <TominagaRyoTop />
      <TominagaRyoInterviewDetail />
      <MemberInterviewCarousel />
      <Footer />
    </>
  );
}

export default TominagaRyo;
