import styled from 'styled-components';
import { StepBannerData } from '../../../features/domains/constants/StepBannerConstants';
import { sp } from '../../../styles/breakPoint';
import StepBanner from '../../elements/StepBanner';
import { SubTitle } from '../../elements/SubTitle';

const Wrapper = styled.div`
  margin: 150px 8vw 0 8vw;
  ${sp`
    margin:0 3vw;
  `};
`;

const SubTitleWrapper = styled.div`
  margin-bottom: 50px;
`;

const OmissionStyle = styled.div`
  margin-top: 100px;
  p {
    margin: 0;
    line-height: 30px;
  }
`;

const SelectionFlow = () => {
  return (
    <Wrapper>
      <SubTitleWrapper>
        <SubTitle>選考フロー</SubTitle>
      </SubTitleWrapper>
      {StepBannerData.map((item, index) => (
        <StepBanner key={index} title={item.title} headline={item.headline} text={item.text} />
      ))}
      <OmissionStyle>
        <p>※採用を見送らせていただくこととなった場合、お預かりした履歴書等の応募書類は破棄させていただきます。</p>
      </OmissionStyle>
    </Wrapper>
  );
};

export default SelectionFlow;
