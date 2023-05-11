import Image from 'next/image';
import styled from 'styled-components';
import { TitleGradationStyle } from '../../../styles/Styled';
import { spMin, tablet, sp } from '../../../styles/breakPoint';

const SectionStyle = styled.div`
  display: flex;
  justify-content: center;
  ${tablet`
  margin: 50px 8%;
  `}
`;

const TeamCoreValueStyle = styled.div`
  position: relative;
  width: 600px;
  min-width: 300px;
  margin: 0 0 0 5%;
  ${sp`
    margin: 0 6%;
  `}
  ${spMin`
    width: auto;
    margin: auto;
  `}
  p {
    margin-top: 40px;
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;

    ${spMin`
      margin: 10px 10px 10px 10px;
    `}
  }
`;

const TitleStyle = styled.div`
  h2 {
    white-space: normal;
    ${TitleGradationStyle}
    font-weight: 200;
    font-size: 60px;
    ${spMin`
	text-align: center;
	margin-bottom:10px;
    font-size: 10vw;
    `}
  }
`;

const SubTitle = styled.div`
  border-bottom: solid 2px #ff318f;
  p {
    line-height: 1.5;
    color: #ff318f;
    font-size: 40px;
    margin: 70px 0 20px 0;
  }
`;

const PersonImageStyle = styled.div`
  width: 546px;
  display: block;
  margin: 5% 8% 0 0;

  ${sp`
  display: none;
`}
`;
const TeamCoreImageStyle = styled.div`
  width: 546px;
  display: block;
  margin: 5% 0% 0 8%;

  ${sp`
  display: none;
`}
`;

const TeamCoreValueDetail = () => {
  return (
    <>
      <SectionStyle>
        <TeamCoreValueStyle>
          <TitleStyle>
            <h2>TEAM CORE VALUES</h2>
          </TitleStyle>
          <SubTitle>
            <p>アイフルエンジニアチームの特徴</p>
          </SubTitle>
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
        </TeamCoreValueStyle>
        <PersonImageStyle>
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
        </PersonImageStyle>
      </SectionStyle>
      <SectionStyle>
        <TeamCoreImageStyle>
          <Image
            src="/assets/TeamCoreValuesImage.svg"
            alt="TEAM CORE VALUES"
            width={546}
            height={546}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </TeamCoreImageStyle>
        <TeamCoreValueStyle>
          <SubTitle>
            <p>チームの目指す姿</p>
          </SubTitle>
          <p>
            「お客様の暮らしや仕事を変える、素晴らしいサービスを提供する」をテーマに掲げ、実現するために、守るべき大切な価値観や行動指針を「チームコアバリュー」として定義しています。
            <br />
            チームコアバリューは、心理的安全性を土台にしつつ、それぞれの要素がお互いを補完し合うような位置付けを行っています。
            お客様への提供価値を最大化するためには、いずれの要素も欠かすことなく、常に切磋琢磨していくことが求められます。
          </p>
        </TeamCoreValueStyle>
      </SectionStyle>
    </>
  );
};

export default TeamCoreValueDetail;
