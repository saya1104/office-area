import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import SelectionFlow from '../components/templates/RecruitPage/SelectionFlow';
import Table from '../components/templates/RecruitPage/Table';
import TopVisual from '../components/templates/RecruitPage/TopVisual';

function RecruitPage() {
  return (
    <>
      <Header />
      <TopVisual />
      <Table />
      <SelectionFlow />
      <Footer />
    </>
  );
}

export default RecruitPage;
