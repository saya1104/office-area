import styled from 'styled-components';
import { GradationStyle } from '../../../styles/Styled';
import { sp } from '../../../styles/breakPoint';
import MembersSwiper from '../../elements/MembersSwiper';

import 'swiper/css';
import 'swiper/css/pagination';

const InterviewStyle = styled.div`
  margin: 100px auto;
  text-align: center;
  max-width: 700px;
  width: 70%;
  ${sp`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `}
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
  }
`;

const Gradation = styled.span`
  ${GradationStyle}
`;

const Interview = () => {
  return (
    <>
      <InterviewStyle>
        <h3>
          <Gradation>INTERVIEW</Gradation>
        </h3>
        <p>
          メンバー紹介テキスト。メンバー紹介テキスト。メンバー紹介テキスト。メンバー紹介テキスト。メンバー紹介テキスト。
        </p>
      </InterviewStyle>
      <MembersSwiper />
    </>
  );
};

export default Interview;
