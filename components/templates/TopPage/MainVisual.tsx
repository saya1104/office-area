import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import styled from 'styled-components';
import { svgPath, svgPathChange } from '../../../features/domains/constants/MainVisualSvgPath';
import { GradationStyle } from '../../../styles/Styled';
import { sp, tablet } from '../../../styles/breakPoint';

const MainVisualStyle = styled.div`
  position: relative;
  ${sp`
  display: block;
  height:190vw;
  overflow: hidden;`}
`;

const TextStyle = styled.div`
  position: absolute;
  top: 400px;
  left: 58px;
  z-index: 10;
  ${sp`
  top:110vw;
  left: 0;
  width:94vw;
  height:auto;
  margin: 3vw;
  `}
  h2 {
    ${GradationStyle}
    font-size: 83px;
    ${tablet`
    font-size: 60px;
    `}
    ${sp`
    font-size: 40px;
    `}
    br {
      &.br-sp {
        ${sp`
      display:none;
      `}
      }
    }
  }
  p {
    font-size: 30px;
    white-space: nowrap;
    ${sp`
    font-size: 5vw;
    `}
  }
`;

const ImageStyle = styled.div`
  z-index: 0;
  position: relative;
  margin: 0 0 0 auto;
  width: 1002px;
  height: 938px;
  ${sp`
    width:100vw;
    height:auto;
  `}
`;

const PersonImageStyle = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  ${sp`
  width: 120%;
  height: auto;
  margin-left: -10%
`};
`;

const FrameImageStyle = styled.div`
  position: absolute;
  width: 1025px;
  height: 1030px;
  ${sp`
    width: 120%;
    height: auto;
    margin-left: -10%
  `}
`;

const MainVisual = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    gsap.to(imageRef.current, {
      attr: {
        d: svgPathChange,
      },
      duration: 10,
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return (
    <MainVisualStyle>
      <ImageStyle>
        <PersonImageStyle>
          <Image
            src="/assets/MainVisualPerson.png"
            alt="aiful engineer recruitment"
            width={1000}
            height={940}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </PersonImageStyle>
        <FrameImageStyle>
          <svg viewBox="0 0 1025 1030" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={imageRef} fillRule="evenodd" clipRule="evenodd" d={svgPath} fill="#16223F" />
          </svg>
        </FrameImageStyle>
      </ImageStyle>
      <TextStyle>
        <h2>
          京都発の IT 金融グループ
          <br className="br-sp" />
          でサービスを革新する
        </h2>
        <p>AIFUL ENGINEER RECRUITMENT</p>
      </TextStyle>
    </MainVisualStyle>
  );
};

export default MainVisual;
