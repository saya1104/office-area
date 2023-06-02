import { OuKinhouConstants } from '../../../../features/domains/constants/InterView/OuKinhouConstants';
import { MemberInterviews } from '../../../elements/MemberInterviews';

function OuKinhouInterviewDetail() {
  return (
    <>
      {OuKinhouConstants.map((item, index) => (
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

export default OuKinhouInterviewDetail;
