import Image from 'next/image';
import styled from 'styled-components';

export const MainStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextStyle = styled.div``;

const MainVisualCategory = () => {
  return (
    <MainStyle>
      <TextStyle>
        <p>京都発の技術でサービスを革新する</p>
        <p>AIFUL ENGINEER RECRUITMENT</p>
      </TextStyle>
      <Image src="/assets/MainVisual.png" alt="Main" width={938} height={1002} />
    </MainStyle>
  );
};

export default MainVisualCategory;
