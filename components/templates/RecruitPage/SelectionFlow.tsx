import StepBanner from '../../elements/StepBanner';
import { StepBannerData } from '../../../features/domains/constants/StepBannerConstants';

const SelectionFlow = () => {
  return (
    <>
      {StepBannerData.map((item, index) => (
        <StepBanner key={index} title={item.title} headline={item.headline} text={item.text} />
      ))}
    </>
  );
};

export default SelectionFlow;
