import EachPageTop from '../../elements/EachPageTop';
import DevelopmentColumn from '../../elements/DevelopmentColumn';
import { productData } from '../../../features/domains/constants/ProductConstants';

function ProductDetails() {
  return (
    <>
      <EachPageTop TitleChildren={'PRODUCT'} SubTitleChildren={'開発プロダクト'} src="/assets/ProductHand.png">
        開発プロダクト紹介。内製開発の経緯など。開発プロダクト紹介。内製開発の経緯など。開発プロダクト紹介。内製開発の経緯など。
        開発プロダクト紹介。内製開発の経緯など。開発プロダクト紹介。内製開発の経緯など。
      </EachPageTop>
      {productData.map((item, index) => (
        <DevelopmentColumn
          src={item.src}
          companyName={item.companyName}
          title={item.title}
          children={item.children}
          key={index}
        />
      ))}
    </>
  );
}
export default ProductDetails;
