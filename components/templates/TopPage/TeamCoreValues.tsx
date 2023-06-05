import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { GradationStyle } from '../../../styles/Styled';
import { sp, tablet } from '../../../styles/breakPoint';
import ReadMore from '../../elements/ReadMore';

const SectionStyle = styled.div`
  display: flex;
  margin: 200px 12%;
  justify-content: space-between;
  align-items: center;
  ${tablet`
  margin: 200px 8%;
  `}
  ${sp`
  margin: 200px 30px;
  `}
`;
const TeamCoreValuesStyle = styled.div`
  position: relative;
  width: 500px;
  ${sp`
  width: auto;
  margin: 0;
  `}
  h3 {
    font-weight: 600;
  }
  p {
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
  }
`;

const Gradation = styled.span`
  ${GradationStyle}
`;

const ImagePcStyle = styled.div`
  width: 546px;
  display: block;
  margin-right: 8%;
  ${sp`
  display: none;
`}
`;

const ImageSpStyle = styled.div`
  display: none;
  ${sp`
  display: block;
  max-width: 400px;
  margin: 0 auto;
`}
`;

const TeamCoreValues = () => {
  const router = useRouter();
  return (
    <SectionStyle>
      <ImagePcStyle>
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
      </ImagePcStyle>
      <TeamCoreValuesStyle>
        <h3>
          <Gradation>TEAM CORE VALUES</Gradation>
        </h3>
        <ImageSpStyle>
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
        </ImageSpStyle>
        <p>
          チームで (継続的な / 着実に) 成果を (上げていく / 上げる) ためには、同じ方向を
          (見続ける/見る)ための「羅針盤」が必要です。アイフルエンジニアチームでは、VMV
          (経営理念)に準拠させた「チームコアバリュー」を掲げ、心理的安全性の担保を中心に据えています。さまざまな個性を尊重しながら、自律型チームの運営に取り組んでいる最中です。
        </p>
        <ReadMore onClick={() => router.push('/AboutPage#TeamCoreValues')} />
      </TeamCoreValuesStyle>
    </SectionStyle>
  );
};

export default TeamCoreValues;
