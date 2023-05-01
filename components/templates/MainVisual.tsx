import Image from 'next/image';
import styled from 'styled-components';
import { TitleGradationStyle } from '../../styles/Styled';
import { sp, tablet } from '../../styles/breakPoint';

const MainVisualStyle = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  ${sp`
  display: block;
  overflow: hidden;`}
`;

const TextStyle = styled.div`
  position: absolute;
  top: 254px;
  left: 58px;
  z-index: 1;
  ${sp`
  position: relative;
  top: 0;
  left: 0;
  margin: 10px;
  `}
  h2 {
    ${TitleGradationStyle}
    white-space: nowrap;
    ${tablet`
    font-size: 60px;
    `}
    ${sp`
    font-size: 10vw;

    `}
  }
  p {
    font-size: 30px;
    white-space: nowrap;
    font-family: YuGothic;
    ${sp`
    font-size: 5vw;
    margin-left:8px;
    `};
  }
`;

const ImageStyle = styled.div`
  z-index: 0;
  margin: 0 0 0 auto;
  width: 1002px;
  height: 938px;
  ${sp`
  width: 120%;
  height: auto;
  margin-left: -10%;`}
`;

const MainVisual = () => {
  return (
    <MainVisualStyle>
      <ImageStyle>
        <Image
          src="/assets/MainVisual.png"
          alt="alful engineer recruitment"
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
    </MainVisualStyle>
  );
};

export default MainVisual;
