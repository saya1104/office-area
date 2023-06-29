import { ShimizuShoConstants } from '../../../../features/domains/constants/InterView/ShimizuShoConstants';
import { MemberInterviews } from '../../../elements/MemberInterviews';

function ShimizuShoInterviewDetail() {
  return (
    <>
      {ShimizuShoConstants.map((item, index) => (
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

export default ShimizuShoInterviewDetail;
