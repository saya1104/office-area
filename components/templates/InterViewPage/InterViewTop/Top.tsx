import EachPageTop from '../../../elements/EachPageTop';
import MembersSwiper from '../../../elements/MembersSwiper';

function Top() {
  return (
    <>
      <EachPageTop TitleChildren={'INTERVIEW'} SubTitleChildren={'社員インタビュー'} src="assets/InterView_Top.png">
        エンジニアチームで活躍するチームメンバーを紹介します。
      </EachPageTop>
      <MembersSwiper />
    </>
  );
}
export default Top;
