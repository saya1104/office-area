import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { GradationStyle } from '../../styles/Styled';
import { sp, tablet } from '../../styles/breakPoint';
import { gsap } from 'gsap';

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
  width: 120%;
  height: auto;
  margin-left: -10%;`}
`;

const PersonImageStyle = styled.div`
  position: absolute;
`;

const FrameImageStyle = styled.div`
  position: absolute;
  animation-name: Frame-Animation;
  animation-iteration-count;
  animation-duration: 1s;
`;

const MainVisual = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    gsap.to(imageRef.current, {
      attr: {
        d: 'M1002 0H0V1027H1002V0ZM114.278 566.749C164.635 493.856 251.325 368.371 259 313.5C274.095 205.58 390.707 100.863 533.5 52.0001C676.293 3.13691 812.5 95.4999 843.676 172.424C849.864 187.69 867.723 204.278 889.104 224.137C940.178 271.574 1011.34 337.672 991.5 449C965.398 595.442 920.756 646.972 813.043 771.305C804.591 781.061 795.75 791.266 786.5 802C708.181 892.879 445.079 917.588 337.372 908.426C229.666 899.264 -103.963 870.11 93.5 597C99.2021 588.571 106.282 578.323 114.278 566.749Z',
      },
      duration: 5,
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
          {/* <Image
            ref={imageRef}
            src="/assets/MainVisualFream.svg"
            alt="alful engineer recruitment"
            width={1002}
            height={1027}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          /> */}
          <svg width="1002" height="1027" viewBox="0 0 1002 1027" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              ref={imageRef}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1002 0H0V1027H1002V0ZM248.117 419.164C277.027 386.837 304.935 355.63 322.277 329.92C329.83 318.723 337.238 304.418 345.558 288.352C376.786 228.049 420.857 142.948 533.611 104.364C676.404 55.5009 809.406 128.359 843.676 172.424C845.407 174.649 847.182 176.903 848.988 179.196C882.936 222.304 927.93 279.436 901.201 429.392C873.051 587.325 802.062 702.066 707.819 794.121C613.575 886.176 445.079 917.588 337.372 908.426C229.666 899.264 -33.8898 794.557 163.573 521.447C185.086 489.645 217.175 453.763 248.117 419.164Z"
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
