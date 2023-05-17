import styled from 'styled-components';
import { productData, AWSData } from '../../../features/domains/constants/ProductConstants';
import { sp } from '../../../styles/breakPoint';
import DevelopmentColumn from '../../elements/DevelopmentColumn';
import EachPageTop from '../../elements/EachPageTop';
import { SubTitle } from '../../elements/SubTitle';

const Wrapper = styled.div`
  margin: 0 8vw;
  ${sp`
    margin:0 3vw;
  `};
`;

const MarginStyle = styled.div`
  margin-top: 200px;
`;

function ProductDetails() {
  return (
    <>
      <EachPageTop TitleChildren={'PRODUCT'} SubTitleChildren={'開発プロダクト'} src="/assets/ProductHand.png">
        開発プロダクト紹介。内製開発の経緯など。開発プロダクト紹介。内製開発の経緯など。開発プロダクト紹介。内製開発の経緯など。
        開発プロダクト紹介。内製開発の経緯など。開発プロダクト紹介。内製開発の経緯など。
      </EachPageTop>
      <Wrapper>
        <SubTitle>内製開発システム・アプリ</SubTitle>
        {productData.map((item, index) => (
          <DevelopmentColumn src={item.src} companyName={item.companyName} title={item.title} key={index}>
            {item.children}
          </DevelopmentColumn>
        ))}
        <MarginStyle>
          <SubTitle>開発環境</SubTitle>
        </MarginStyle>
        {AWSData.map((item, index) => (
          <DevelopmentColumn src={item.src} title={item.title} key={index}>
            {item.children}
          </DevelopmentColumn>
        ))}
      </Wrapper>
    </>
  );
}
export default ProductDetails;
