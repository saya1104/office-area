import styled from 'styled-components';
import { tablet } from '../../styles/breakPoint';
import type { StepBannerType } from '../../features/domains/constants/StepBannerConstants';

const Wrapper = styled.div`
  display: flex;
  margin: 0;
`;

const TitleWrapper = styled.div``;

const TitleStyle = styled.div`
  width: 140px;
  height: 40px;
  background: #4ef4ff;
  position: relative;
  span {
    font-weight:900;
    margin:0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit- transform: translateY(-50%) translateX(-50%);
    color: #16223f;
    white-space: pre;
  }
`;
const BorderStyle = styled.div`
  margin: 0 auto;
  width: 0;
  height: 150px;
  border: 1px solid #4ef4ff;
  &.isHidden {
    display: none;
  }
  ${tablet`
    width:100%;
    border-width:0 0 0 1px;
  &.isHidden {
    display: block;
  }
  `}
`;

const DashedWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 200px;
  margin-left: 30px;
  ${tablet`
    display:none;
  `}
`;

const DashedStyle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: 1px dashed;
  height: 0;
`;

const PcDetailWrapper = styled.div`
  margin-left: 20px;
  p {
    margin: 10px 0 0 0;
  }
  ${tablet`
    display:none;
  `}
`;

const PcHeadlineStyle = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  h3 {
    margin: 0;
    font-size: 25px;
  }
  ${tablet`
    display:none;
  `}
`;

const SpDetailWrapper = styled.div`
  display: none;
  ${tablet`
    display:block;
    h3 {
    margin: 0 0 0 20px;
    padding-top:20px;
    font-size: 25px;
    }
    p {
    margin: 0 0 0 20px;
    padding-top:20px;
    line-height:30px;
    }
  `}
`;

const StepBanner = ({ title, headline, text }: StepBannerType) => {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <TitleStyle>{title}</TitleStyle>
          <BorderStyle className={headline === '内定' ? 'isHidden' : ''}>
            <SpDetailWrapper>
              <h3>{headline}</h3>
              <p>{text}</p>
            </SpDetailWrapper>
          </BorderStyle>
        </TitleWrapper>
        <DashedWrapper>
          <DashedStyle />
        </DashedWrapper>
        <PcDetailWrapper>
          <PcHeadlineStyle>
            <h3>{headline}</h3>
          </PcHeadlineStyle>
          <p>{text}</p>
        </PcDetailWrapper>
      </Wrapper>
    </>
  );
};

export default StepBanner;
