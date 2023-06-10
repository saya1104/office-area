import styled from 'styled-components';
import EachPageTop from '../../../elements/EachPageTop';
import { sp } from '../../../../styles/breakPoint';

const Wrapper = styled.div`
  p {
    font-size: 50px;
    font-weight: 400;
    line-height: 60px;
    ${sp`
    margin-top: 40px;
    font-size: 35px;
    line-height: 40px;
  `}
  }
`;

function OuKinhouTop() {
  return (
    <Wrapper>
      <EachPageTop title="Ou Kinhou" subTitle="バックエンドエンジニア" src="../assets/Main_Ou_Kinhou.png">
        たくさんの人から好かれる ”アイフル“ を目指して。
      </EachPageTop>
    </Wrapper>
  );
}

export default OuKinhouTop;
