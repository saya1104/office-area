import Image from 'next/image';
import styled from 'styled-components';
import { tablet, sp } from '../../styles/breakPoint';
import { SubTitle } from '../elements/SubTitle';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 8vw;
  ${sp`
    margin:0 3vw;
  `};
`;

const Summary = styled.div`
  width: 600px;
  min-width: 300px;

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 40px;
    text-align: left;
  }
`;

const PcImageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${tablet`
  display: none;
  `}
`;

const SpImageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  ${tablet`
   display: block;
  `}
`;

export const TeamCoreValueSummary = () => {
  return (
    <Wrapper>
      <Summary>
        <SubTitle>
          アイフルエンジニア
          <br className="br-sp" />
          チームの特徴
        </SubTitle>
        <SpImageStyle>
          <Image
            src="/assets/TeamCoreValuePerson.png"
            alt="TeamCoreValuePerson"
            width={646}
            height={619}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </SpImageStyle>
        <p>
          お客様への価値を追求するためには「誰もが率直な意見を言える環境づくり
          (心理的安全性の担保)」が最も重要だと考えています。
          <br />
          ただし、それは単に居心地のよい職場や緊張感のない関係性などでは決してなく「お互いを尊重しながらも、全員が目指すべきゴールに向かって建設的な議論ができるチーム像」と捉えています。
          <br />
          <br />
          こうした環境づくりの一環として「チームコアバリュー」をはじめ「リーダークラスのメンバーやプロジェクトごとの振り返りミーティング
          (KPT)」や失敗から教訓を得る「ポストモーテム」などの特徴的な取り組みがあります。
        </p>
      </Summary>
      <PcImageStyle>
        <Image
          src="/assets/TeamCoreValuePerson.png"
          alt="TeamCoreValuePerson"
          width={646}
          height={619}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </PcImageStyle>
    </Wrapper>
  );
};
