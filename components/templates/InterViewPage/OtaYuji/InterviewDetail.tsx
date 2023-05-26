import { OtaYujiInterview } from '../../../../features/domains/constants/InterView/OtaYujiInterview';
import { MemberInterviews } from '../../../elements/MemberInterviews';

function InterviewDetail() {
  return (
    <>
      {OtaYujiInterview.map((item, index) => (
        <MemberInterviews
          number={item.number}
          subTitle={item.subTitle}
          text={item.text}
          src={item.src}
          alt={item.alt}
          key={index}
        />
      ))}
    </>
  );
}

export default InterviewDetail;
