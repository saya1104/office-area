import Image from 'next/image';
import styled from 'styled-components';
import { GradationStyle } from '../../styles/Styled';
import ReadMore from '../elements/ReadMore';

const CategoryBox = styled.div`
  display: flex;
  margin-top: 200px;
  justify-content: space-between;
  align-items: center;
`;

const AboutTeamStyle = styled.div`
  position: relative;
  width: 516px;
  height: 284px;
  margin-left: 160px;
  h3 {
    ${GradationStyle}
    font-weight: 500;
  }
  p {
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
  }
`;

const AboutTeamCategory = () => {
  return (
    <CategoryBox>
      <AboutTeamStyle>
        <h3>ABOUT TEAM</h3>
        <p>
          アイフルエンジニアチームはグループ会社を含む自社サービスや社内システムの内製化を推進するスペシャリスト集団です。現場から日々生まれるお客様のニーズを迅速かつ正確に捉え、お客様への提供価値の最大化に常にチャレンジしています。
        </p>
        <ReadMore />
      </AboutTeamStyle>
      <Image src="/assets/AboutTeamImage.png" alt="ABOUT TEAM" width={666} height={536} />
    </CategoryBox>
  );
};

export default AboutTeamCategory;
