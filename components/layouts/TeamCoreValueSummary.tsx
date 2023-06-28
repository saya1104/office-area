import Image from 'next/image';
import styled from 'styled-components';
import { TitleGradationStyle } from '../../styles/Styled';
import { tablet, spMin } from '../../styles/breakPoint';
import { SubTitle } from '../elements/SubTitle';
import type { TeamCoreValueType } from '../../features/domains/constants/TeamCoreValueConstants';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  &.isReverse {
    flex-direction: row-reverse;
    margin-top: 100px;
  }
`;
const Summary = styled.div`
  width: 600px;
  min-width: 100px;
  position: relative;
  h5 {
    margin-top: 0;
    ${tablet`
     margin-top:5vw;
    `}
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 40px;
    text-align: left;
  }
`;

const TitleStyle = styled.div`
  position: absolute;
  top: -150px;
  ${tablet`
    position: static;
  `}
  h2 {
    ${TitleGradationStyle}
    font-weight: 200;
    font-size: 60px;
    white-space: nowrap;
    font-family: Inter, sans-serif;
    ${tablet`
      white-space: normal;
    `}
    ${spMin`
      text-align: center;
      margin-bottom:10px;
      font-size: 10vw;
    `};
  }
`;

const PcImageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  &.isReverse {
    padding: 30px;
  }
  ${tablet`
  display: none;
  `};
`;

const SpImageStyle = styled.div`
  display: none;
  ${tablet`
  display: flex;
  justify-content: center;
  align-items: center;
    &.isReverse {
    padding: 40px;
  }
  `}
`;

export const TeamCoreValueSummary = ({ title, subtitle, text, src, alt }: TeamCoreValueType) => {
  const teamCoreValueImageClassName = src === '/assets/TeamCoreValuesImage.svg' ? 'isReverse' : '';
  return (
    <Wrapper className={teamCoreValueImageClassName}>
      <Summary>
        <TitleStyle id="TeamCoreValues">
          <h2>{title}</h2>
        </TitleStyle>
        <SubTitle>{subtitle}</SubTitle>
        <SpImageStyle className={teamCoreValueImageClassName}>
          <Image
            src={src}
            alt={alt}
            width={646}
            height={619}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </SpImageStyle>
        {text}
      </Summary>
      <PcImageStyle className={teamCoreValueImageClassName}>
        <Image
          src={src}
          alt={alt}
          width={646}
          height={619}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </PcImageStyle>
    </Wrapper>
  );
};
