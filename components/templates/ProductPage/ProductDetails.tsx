import styled from 'styled-components';
import { productData, AwsData } from '../../../features/domains/constants/ProductConstants';
import DevelopmentColumn from '../../elements/DevelopmentColumn';
import EachPageTop from '../../elements/EachPageTop';
import { SubTitle } from '../../elements/SubTitle';

const Wrapper = styled.div`
  margin: 0 8vw 0 8vw;
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
        <SubTitle>開発環境</SubTitle>
        {AwsData.map((item, index) => (
          <DevelopmentColumn src={item.src} title={item.title} key={index}>
            {item.children}
          </DevelopmentColumn>
        ))}
      </Wrapper>
    </>
  );
}
export default ProductDetails;
