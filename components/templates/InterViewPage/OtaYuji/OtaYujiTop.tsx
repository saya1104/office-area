import styled from 'styled-components';
import EachPageTop from '../../../elements/EachPageTop';

const Wrapper = styled.div`
  p {
    font-size: 50px;
    font-weight: 400;
    line-height: 60px;
  }
`;

function OtaYujiTop() {
  return (
    <Wrapper>
      <EachPageTop title="Ota Yuji" subTitle="AWSテックリード & Ruby エンジニア" src="../assets/Main_Ota_Yuji.png">
        新設部署のスタートアップから携わり、組織を成長させたい。
      </EachPageTop>
    </Wrapper>
  );
}

export default OtaYujiTop;
