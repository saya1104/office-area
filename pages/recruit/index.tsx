import HeadMeta from '../../components/elements/HeadMeta';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import Guide from '../../components/templates/RecruitPage/Guide';
import SelectionFlow from '../../components/templates/RecruitPage/SelectionFlow';
import Table from '../../components/templates/RecruitPage/Table';
import TopVisual from '../../components/templates/RecruitPage/TopVisual';

function recruit() {
  return (
    <>
      <HeadMeta title="RECRUIT | AIFUL ENGINEER RECRUITMENT" />
      <Header />
      <TopVisual />
      <Table />
      <SelectionFlow />
      <Guide />
      <Footer />
    </>
  );
}

export default recruit;
