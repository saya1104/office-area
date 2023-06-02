import { OtaYujiConstants } from '../../../../features/domains/constants/InterView/OtaYujiConstants';
import { MemberInterviews } from '../../../elements/MemberInterviews';

function OtaYujiInterviewDetail() {
  return (
    <>
      {OtaYujiConstants.map((item, index) => (
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

export default OtaYujiInterviewDetail;
