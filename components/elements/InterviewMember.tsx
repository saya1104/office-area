import Image from 'next/image';
import styled from 'styled-components';
import { sp } from '../../styles/breakPoint';

const InterviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 14px;
`;

const InterviewImageStyle = styled.div`
  max-width: 280px;
  width: 100%;
  height: auto;
  ${sp`
  margin: 50px 0 20px 0;
  `}
`;

const InterviewTextStyle = styled.div`
  margin: 0 auto 0 0;
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
  width: 100%;
  padding: 6px 15px 6px 8px;
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
    ${sp`
    width: 98%;
    left: 2px;
    `}
  }
`;

const InterviewMember = () => {
  return (
    <InterviewStyle>
      <InterviewImageStyle>
        <Image
          src="/assets/InterviewOta.png"
          alt="InterviewOta"
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
            新規事業企画を経て、
            <br />
            プロモーション戦略を担当。
          </p>
          <span></span>
        </SquareStyle>
        <p>
          Y.O / 2021年 入社
          <br />
          AWSチーム チーフエンジニア
        </p>
      </InterviewTextStyle>
    </InterviewStyle>
  );
};

export default InterviewMember;
