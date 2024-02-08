import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { GradationStyle } from '../../../styles/Styled';
import { sp } from '../../../styles/breakPoint';
import ReadMore from '../../elements/ReadMore';

const SectionStyle = styled.div`
  display: flex;
  margin-top: 200px;
  justify-content: space-between;
  align-items: center;
  ${sp`
   display:block;
   margin:200px 0 0 30px;;
  `}
`;

const AboutTeamStyle = styled.div`
  position: relative;
  width: 520px;
  min-width: 300px;
  margin: 0 10%;
  ${sp`
    margin: 0;
    width:auto;
  `}

  h3 {
    font-weight: 600;
  }
  p {
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
    ${sp`
     margin-right:30px;
    `}
  }
`;

const Gradation = styled.span`
  ${GradationStyle}
`;

const ReadMoreStyle = styled.div`
  ${sp`
    margin-right: 30px;
  `}
`;

const ImagePcStyle = styled.div`
  width: 666px;
  display: block;
  ${sp`
   display:none;
  `}
`;


const AboutTeam = () => {
  const router = useRouter();
  return (
    <SectionStyle>
      <AboutTeamStyle>
        <h3>
          <Gradation>ABOUT TEAM</Gradation>
        </h3>
        <p>
          アイフルエンジニアチームはグループ会社を含む自社サービスや社内システムの内製化を推進するスペシャリスト集団です。現場から日々生まれるお客様のニーズを迅速かつ正確に捉え、お客様への提供価値の最大化に常にチャレンジしています。
        </p>
        <ReadMoreStyle>
          <ReadMore onClick={() => router.push('/about')} />
        </ReadMoreStyle>
      </AboutTeamStyle>
      <ImagePcStyle>
        <Image
          src="/assets/AboutTeamImage.png"
          alt="ABOUT TEAM"
          className="AboutTeamImage"
          width={666}
          height={536}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </ImagePcStyle>
    </SectionStyle>
  );
};
export default AboutTeam;
