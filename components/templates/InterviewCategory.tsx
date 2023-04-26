import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GradationStyle } from '../../styles/Styled';
import { sp } from '../../styles/breakPoint';
import InterviewMember from '../elements/InterviewMember';

import 'swiper/css';
import 'swiper/css/pagination';

const InterviewStyle = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 700px;
  width: 70%;
  ${sp`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `}
  h3 {
    ${GradationStyle}
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
  }
`;

// const MembersListStyle = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 100px;
//   margin-right: 8%;
//   margin-left: 8%;
// `;

const InterviewCategory = () => {
  return (
    <>
      <InterviewStyle>
        <h3>INTERVIEW</h3>
        <p>
          メンバー紹介テキスト。メンバー紹介テキスト。メンバー紹介テキスト。メンバー紹介テキスト。メンバー紹介テキスト。
        </p>
      </InterviewStyle>
      {/* <MembersListStyle>
        <InterviewMember />
        <InterviewMember />
        <InterviewMember />
        <InterviewMember />
      </MembersListStyle> */}
      {/* <SwiperMembersStyle> */}
      <Swiper
        // 一度に表示するスライドの数
        slidesPerView={4}
        // スライド間の余白
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <InterviewMember />
        </SwiperSlide>
        <SwiperSlide>
          <InterviewMember />
        </SwiperSlide>
        <SwiperSlide>
          <InterviewMember />
        </SwiperSlide>
        <SwiperSlide>
          <InterviewMember />
        </SwiperSlide>
        <SwiperSlide>
          <InterviewMember />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default InterviewCategory;
