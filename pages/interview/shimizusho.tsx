import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import MemberInterviewCarousel from '../../components/templates/InterViewPage/InterViewTop/MemberInterviewCarousel';
import TominagaRyoInterviewDetail from '../../components/templates/InterViewPage/ShimizuSho/ShimizuShoInterviewDetail';
import TominagaRyoTop from '../../components/templates/InterViewPage/ShimizuSho/ShimizuShoTop';

function shimizusho() {
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

export default shimizusho;
