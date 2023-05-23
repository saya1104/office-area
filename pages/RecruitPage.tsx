import { FollowBanner } from '../components/elements/FollowBanner';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Guide from '../components/templates/RecruitPage/Guide';
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
      <Guide />
      <FollowBanner />
      <Footer />
    </>
  );
}

export default RecruitPage;
