import Image from 'next/image';
import styled from 'styled-components';
import { TitleGradationStyle } from '../../../styles/Styled';
import { spMin, tablet, sp } from '../../../styles/breakPoint';
import { SubTitle } from '../../elements/SubTitle';
import { TeamCoreValueSummary } from '../../layouts/TeamCoreValueSummary';

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
      margin: 10px;
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

const PcPersonImageStyle = styled.div`
  width: 546px;
  margin: 5% 8% 0 0;
  ${tablet`
    display: none;
  `}
`;

const SpPersonImageStyle = styled.div`
  display: none;
  ${tablet`
   display: block;
  `}
`;

const PcTeamCoreImageStyle = styled.div`
  width: 546px;
  display: block;
  margin: 70px 0% 0 8%;
  ${tablet`
    display: none;
  `}
`;

const SpTeamCoreImageStyle = styled.div`
  display: none;
  ${tablet`
    display:block;
    text-align: center;
    margin:40px 0 40px 0 
  `}
`;

const TeamCoreValueDetail = () => {
  return (
    <>
      <TitleStyle id="TeamCoreValues">
        <h2>TEAM CORE VALUES</h2>
      </TitleStyle>
      <TeamCoreValueSummary />
      <SectionStyle>
        <PcTeamCoreImageStyle>
          <Image
            src="/assets/TeamCoreValuesImage.svg"
            alt="TEAM CORE VALUES"
            width={546}
            height={546}
            sizes="100vw"
            style={{
              width: '80%',
              height: 'auto',
            }}
          />
        </PcTeamCoreImageStyle>
        <TeamCoreValueStyle>
          <SubTitle>チームの目指す姿</SubTitle>
          <SpTeamCoreImageStyle>
            <Image
              src="/assets/TeamCoreValuesImage.svg"
              alt="TEAM CORE VALUES"
              width={546}
              height={546}
              sizes="100vw"
              style={{
                width: '70%',
                height: 'auto',
              }}
            />
          </SpTeamCoreImageStyle>
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
