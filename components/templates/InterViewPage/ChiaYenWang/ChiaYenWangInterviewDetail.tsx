import { ChiaYenWangConstants } from '../../../../features/domains/constants/InterView/ChiaYenWangConstants';
import { MemberInterviews } from '../../../elements/MemberInterviews';

function ChiaYenWangInterviewDetail() {
  return (
    <>
      {ChiaYenWangConstants.map((item, index) => (
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

export default ChiaYenWangInterviewDetail;
