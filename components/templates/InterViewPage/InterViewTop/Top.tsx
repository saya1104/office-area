import Image from 'next/image';
import styled from 'styled-components';
import { MemberConstants } from '../../../../features/domains/constants/MemberConstants';
import { sp } from '../../../../styles/breakPoint';
import EachPageTop from '../../../elements/EachPageTop';

const Wrapper = styled.div`
  margin: 100px 8vw 0 8vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  ${sp`
    margin:0 3vw;
  `};
`;

const InterviewCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: fit-content;
  padding: 0 10px 50px 10px;
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

function Top() {
  return (
    <>
      <EachPageTop title={'INTERVIEW'} subTitle={'社員インタビュー'} src="assets/InterView_Top.png">
        エンジニアチームで活躍するチームメンバーを紹介します。
      </EachPageTop>
      <Wrapper>
        {MemberConstants.map((item, index) => {
          return (
            <InterviewCardStyle key={index}>
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
          );
        })}
      </Wrapper>
    </>
  );
}
export default Top;
