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

function OtaYujiTop() {
  return (
    <Wrapper>
      <EachPageTop title="Ota Yuji" subTitle="チーフエンジニア 兼 AWS テックリード" src="../assets/Main_Ota_Yuji.png">
        アイフルを「日本を代表する FinTech カンパニー」に育てていく。
      </EachPageTop>
    </Wrapper>
  );
}

export default OtaYujiTop;
