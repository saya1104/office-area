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

function ShimizuShoTop() {
  return (
    <Wrapper>
      <EachPageTop
        title="Shimizu Sho"
        subTitle="バックエンドエンジニア 兼 AWS エンジニア"
        src="../assets/Main_Shimizu_Sho.png"
      >
        最高のユーザー体験をつくるために、お客様と技術の架け橋になる。
      </EachPageTop>
    </Wrapper>
  );
}

export default ShimizuShoTop;
