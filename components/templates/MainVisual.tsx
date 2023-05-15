import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import styled from 'styled-components';
import { GradationStyle } from '../../styles/Styled';
import { sp, tablet } from '../../styles/breakPoint';

const MainVisualStyle = styled.div`
  position: relative;
  ${sp`
  display: block;
  height:150vw;
  overflow: hidden;`}
`;

const TextStyle = styled.div`
  position: absolute;
  top: 254px;
  left: 58px;
  z-index: 1;
  ${sp`
  top:110vw;
  left: 0;
  margin: 10px;
  `}
  h2 {
    ${GradationStyle}
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
  animation-name: Frame-Animation;
  animation-iteration-count;
  animation-duration: 1s;
  width:1025px;
  height:1030px;
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
        d: 'M1025 0H0V1030H1025V0ZM146.898 371.679C152.765 338.008 158.427 305.515 179.073 278.73C188.094 267.027 196.943 252.074 206.88 235.282C244.181 172.251 296.821 83.2998 431.5 42.9702C602.059 -8.10353 879.659 68.0511 920.593 114.109C921.509 115.139 922.422 116.164 923.332 117.185C963.064 161.787 995.872 198.617 963 360C929.376 525.078 844.584 635.103 732.015 731.322C619.446 827.541 444.491 883.076 315.841 873.5C187.191 863.924 -127.612 764.387 108.247 478.921C134.022 445.579 140.579 407.946 146.898 371.679Z',
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
            alt="alful engineer recruitment"
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
            <path
              ref={imageRef}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1025 0H0V1030H1025V0ZM209.23 372.012C243.762 338.222 277.096 305.603 297.81 278.73C306.832 267.027 315.68 252.074 325.618 235.282C362.918 172.251 415.558 83.2998 550.237 42.9702C720.796 -8.10357 879.659 68.0511 920.593 114.109C922.661 116.435 924.78 118.79 926.938 121.187C967.487 166.245 1021.23 225.962 989.304 382.702C955.679 547.78 870.888 667.712 758.319 763.931C645.75 860.15 444.491 892.984 315.841 883.407C187.191 873.831 -127.612 764.387 108.247 478.921C133.943 445.681 172.272 408.175 209.23 372.012Z"
              fill="#16223F"
            />
          </svg>
        </FrameImageStyle>
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
