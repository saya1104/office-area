import styled from 'styled-components';
import { GuideText } from '../../../features/domains/constants/GuideConstants';
import { sp } from '../../../styles/breakPoint';
import HarassmentText from '../../elements/HarassmentText';
import { SubTitle } from '../../elements/SubTitle';

const Wrapper = styled.div`
  margin: 150px 8vw 0 8vw;
  ${sp`
    margin:0 3vw;
  `};
`;

const TextStyle = styled.div`
  margin: 50px 0;
  line-height: 30px;
`;

const Guide = () => {
  return (
    <Wrapper>
      <SubTitle>就活ハラスメント相談窓口のご案内</SubTitle>
      <TextStyle>
        <p>
          当社では、就職活動中の皆さまが安心して当社の採用試験に参加できるように当社従業員からハラスメント被害（就活セクハラ・オワハラ等）に遭った場合に相談・通報できる窓口として「就活ハラスメント相談窓口」を設置しています。
        </p>
      </TextStyle>
      {GuideText.map((item, index) => (
        <HarassmentText key={index} headline={item.headline} text={item.text} />
      ))}
    </Wrapper>
  );
};

export default Guide;
