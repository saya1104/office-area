import styled from 'styled-components';
import { tablet } from '../../../../styles/breakPoint';
import EachPageTop from '../../../elements/EachPageTop';

const Wrapper = styled.div`
  p {
    font-size: 50px;
    font-weight: 400;
    line-height: 60px;
    ${tablet`
    margin-top: 40px;
    font-size: 35px;
    line-height: 40px;
  `}
  }
`;

function OuKinhouTop() {
  return (
    <Wrapper>
      <EachPageTop title="Ou Kinhou" subTitle="バックエンドエンジニア" src="../../assets/Main_Ou_Kinhou.png">
        たくさんの人から好かれる ”アイフル“ を目指して。
      </EachPageTop>
    </Wrapper>
  );
}

export default OuKinhouTop;
