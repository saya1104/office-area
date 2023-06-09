import Image from 'next/image';
import styled from 'styled-components';
import MembersSwiper from '../../../elements/MembersSwiper';

const Wrapper = styled.div`
  position: relative;
  background-color: #596480;
  h3 {
    text-align: center;
    margin-bottom: 100px;
  }
`;

function MemberInterviewCarousel() {
  return (
    <Wrapper>
      <Image
        src="/assets/Wave_Top.png"
        alt="aiful engineer recruitment"
        width={1511}
        height={858}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <h3>MEMBER</h3>
      <MembersSwiper />
      <Image
        src="/assets/Wave_Bottom.png"
        alt="aiful engineer recruitment"
        width={1511}
        height={858}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
          marginBottom: '-5px',
        }}
      />
    </Wrapper>
  );
}

export default MemberInterviewCarousel;
