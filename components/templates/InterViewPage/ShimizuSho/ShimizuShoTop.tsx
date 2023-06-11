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
        subTitle="AWSテックリード & Ruby エンジニア"
        src="../assets/Main_Shimizu_Sho.png"
      >
        新設部署のスタートアップから携わり、組織を成長させたい。
      </EachPageTop>
    </Wrapper>
  );
}

export default ShimizuShoTop;
