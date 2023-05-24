import Image from 'next/image';
import styled from 'styled-components';
import { sp } from '../../../../styles/breakPoint';
import MembersSwiper from '../../../elements/MembersSwiper';

const Wrapper = styled.div`
  margin-top: 300px;
  margin-bottom: 400px;

  position: relative;
  h3 {
    text-align: center;
    margin-bottom: 100px;
  }
`;

const PcWaveStyle = styled.div`
  position: absolute;
  z-index: -1;
  top: -10vw;
  ${sp`
	display:none;
  `}
`;

const SpWaveStyle = styled.div`
  display: none;
  ${sp`
top: -10vw;
  display:block;
  position: absolute;
  z-index: -1;
  `}
`;

function Swiper() {
  return (
    <Wrapper>
      <PcWaveStyle>
        <Image
          src="../assets/InterviewWavePc.png"
          alt="Wave Image"
          width={1512}
          height={996}
          sizes="100vw"
          style={{
            width: '100vw',
            height: 'auto',
          }}
        />
      </PcWaveStyle>
      <SpWaveStyle>
        <Image
          src="../assets/InterviewWaveSp.png"
          alt="Wave Image"
          width={390}
          height={858}
          sizes="100vw"
          style={{
            width: '100vw',
            height: 'auto',
          }}
        />
      </SpWaveStyle>
      <h3>MEMBER</h3>
      <MembersSwiper />
    </Wrapper>
  );
}

export default Swiper;
