import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MemberConstants } from '../../features/domains/constants/MemberConstants';

import 'swiper/css';
import 'swiper/css/pagination';

const InterviewCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: fit-content;
  padding-right: 5px;
  transition-timing-function: linear;
`;

const InterviewImageStyle = styled.div`
  max-width: 280px;
  width: 100%;
  height: auto;
`;

const InterviewTextStyle = styled.div`
  margin-top: 20px;
  & > p {
    color: #4ef4ff;
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    line-height: 25px;
  }
`;

const SquareStyle = styled.div`
  position: relative;
  background: #16223f;
  width: 95%;
  padding: 6px 5px 6px 8px;
  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    margin: 0;
    text-align: left;
  }
  span {
    position: absolute;
    z-index: -1;
    top: 4px;
    left: 4px;
    background: linear-gradient(90deg, #ff318f 0%, #ff7d53 100%);
    width: 100%;
    height: 100%;
  }
`;

const MembersSwiper = () => {
  const viewWidth = document.documentElement.clientWidth;
  const router = useRouter();
  return (
    <Swiper
      // 一度に表示するスライドの数
      slidesPerView={1}
      // スライド間の余白
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      speed={6000}
      loop={viewWidth < 1450 ? true : false}
      watchOverflow={true}
      autoplay={{
        delay: 0,
      }}
      breakpoints={{
        770: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 3,
        },

        1445: {
          slidesPerView: 4,
        },
      }}
    >
      {MemberConstants.map((item, index) => {
        return (
          <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              href={router.pathname === 'interview/' ? `${item.href}` : `/interview/${item.href}`}
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              <InterviewCardStyle>
                <InterviewImageStyle>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={280}
                    height={387}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </InterviewImageStyle>
                <InterviewTextStyle>
                  <SquareStyle>
                    <p>
                      {item.message1}
                      <br />
                      {item.message2}
                    </p>
                    <span></span>
                  </SquareStyle>
                  <p>
                    {item.name} / {item.hireYear}年 入社
                    <br />
                    {item.position}
                  </p>
                </InterviewTextStyle>
              </InterviewCardStyle>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MembersSwiper;
