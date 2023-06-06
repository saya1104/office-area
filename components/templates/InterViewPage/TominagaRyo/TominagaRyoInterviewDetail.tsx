import { TominagaRyoConstants } from '../../../../features/domains/constants/InterView/TominagaRyoConstants';
import { MemberInterviews } from '../../../elements/MemberInterviews';

function TominagaRyoInterviewDetail() {
  return (
    <>
      {TominagaRyoConstants.map((item, index) => (
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

export default TominagaRyoInterviewDetail;
