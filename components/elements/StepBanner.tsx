import styled from 'styled-components';
import { sp } from '../../styles/breakPoint';
import type { StepBannerType } from '../../features/domains/constants/StepBannerConstants';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  margin: 0 8vw;
  ${sp`
    margin:0 3vw;
  `};
`;

const TitleWrapper = styled.div``;

const TitleStyle = styled.div`
  width: 140px;
  height: 40px;
  background: #4ef4ff;
  position: relative;
  p {
    font-weight:900;
    margin:0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit- transform: translateY(-50%) translateX(-50%);
    color: #16223f;
  }
`;
const BorderStyle = styled.div`
  margin: 0 auto;
  width: 0;
  height: 150px;
  border: 1px solid;
  color: #4ef4ff;
  &.isBorder {
    display: none;
  }
`;

const DashedWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 200px;
  margin-left: 30px;
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

const DetailWrapper = styled.div`
  margin-left: 20px;
  p {
    margin: 10px 0 0 0;
  }
`;

const HeadlineStyle = styled.div`
  display: flex;

  align-items: center;
  height: 40px;
  h3 {
    margin: 0;
    font-size: 25px;
  }
`;

const StepBanner = ({ title, headline, text }: StepBannerType) => {
  const [isBorder, setIsBorder] = useState<boolean>(false);
  useEffect(() => {
    if (headline === '内定') {
      setIsBorder((pref) => !pref);
    }
  }, []);
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <TitleStyle>
            <p>{title}</p>
          </TitleStyle>
          <BorderStyle className={isBorder ? 'isBorder' : ''} />
        </TitleWrapper>
        <DashedWrapper>
          <DashedStyle />
        </DashedWrapper>
        <DetailWrapper>
          <HeadlineStyle>
            <h3>{headline}</h3>
          </HeadlineStyle>
          <p>{text}</p>
        </DetailWrapper>
      </Wrapper>
    </>
  );
};

export default StepBanner;
