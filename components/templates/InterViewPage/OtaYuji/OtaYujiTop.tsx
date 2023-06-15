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

function OtaYujiTop() {
  return (
    <Wrapper>
      <EachPageTop
        title="Ota Yuji"
        subTitle="チーフエンジニア 兼 AWS テックリード"
        src="../../assets/Main_Ota_Yuji.png"
      >
        アイフルを「日本を代表する FinTech カンパニー」に育てていく。
      </EachPageTop>
    </Wrapper>
  );
}

export default OtaYujiTop;
