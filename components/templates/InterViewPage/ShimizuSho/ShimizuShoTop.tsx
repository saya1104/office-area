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

function ShimizuShoTop() {
  return (
    <Wrapper>
      <EachPageTop
        title="Shimizu Sho"
        subTitle="AWSテックリード & Ruby エンジニア"
        src="../assets/Main_Shimizu_Sho.png"
      >
        新設部署のスタートアップから携わり、組織を成長させたい。
      </EachPageTop>
    </Wrapper>
  );
}

export default ShimizuShoTop;
