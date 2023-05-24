import { OtaYujiText } from '../../../../features/domains/constants/InterView/OtaYujiText';
import { MembersInterview } from '../../../elements/MembersInterview';

function InterviewDetail() {
  return (
    <>
      {OtaYujiText.map((item, index) => (
        <MembersInterview number={item.number} subTitle={item.subTitle} text={item.text} src={item.src} key={index} />
      ))}
    </>
  );
}

export default InterviewDetail;
