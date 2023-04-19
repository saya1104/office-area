import Image from 'next/image';
import styled from 'styled-components';
import { GradationStyle } from '../../styles/Styled';
import { sp, tablet } from '../../styles/breakPoint';

export const MainStyle = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  ${sp`
  display: block;
  overflow: hidden;`}
`;

export const TextStyle = styled.div`
  position: absolute;
  top: 254px;
  left: 58px;
  z-index: 1;
  ${sp`
  position: relative;
  top: 0;
  left: 0;`}
  h2 {
    ${GradationStyle}
    white-space: nowrap;
    ${tablet`
    // font-size: 6vw;
    font-size: 60px;
    `}
    ${sp`
    font-size: 40px;`}
  }
  p {
    font-size: 30px;
    white-space: nowrap;
    ${sp`
    font-size: 20px;`}
  }
`;

export const ImageStyle = styled.div`
  z-index: 0;
  margin: 0 0 0 auto;
  width: 1002px;
  height: 938px;
  ${sp`
  width: 120%;
  height: auto;
  margin-left: -10%;`}
`;

const MainVisualCategory = () => {
  return (
    <MainStyle>
      <ImageStyle>
        <Image
          src="/assets/MainVisual.png"
          alt="MainVisual"
          width={1002}
          height={938}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </ImageStyle>
      <TextStyle>
        <h2>
          京都発の技術で
          <br />
          サービスを革新する
        </h2>
        <p>AIFUL ENGINEER RECRUITMENT</p>
      </TextStyle>
    </MainStyle>
  );
};

export default MainVisualCategory;
