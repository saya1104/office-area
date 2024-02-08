
import React from 'react';
import styled from 'styled-components';
import { productData } from '../../../features/domains/constants/ProductConstants';
import { sp } from '../../../styles/breakPoint';
import DevelopedProducts from '../../elements/DevelopedProducts';
import EachPageTop from '../../elements/EachPageTop';
import { SubTitle } from '../../elements/SubTitle';

const Wrapper = styled.div`
  margin: 0 8vw;
  ${sp`
    margin:0 3vw;
  `};
`;

function ProductDetails() {
  return (
    <>
      <EachPageTop title={'PRODUCT'} subTitle={'開発プロダクト'} src="/assets/ProductHand.png">
        お客様に提供する価値を向上させるために、サービスの利便性を日々追求しています。開発するシステムは多岐に渡り、WEBサイトやWEBアプリケーションに限らず、スマートフォンアプリやそれらを支えるインフラに至るまで、内製化を推進している真っ最中。既存の手法にとらわれず、モダンな技術を積極的に採用していくチャレンジングな環境で開発が行われています。
      </EachPageTop>
      <Wrapper>
        <SubTitle>内製開発システム・アプリ</SubTitle>
        {productData.map((item, index) => (
          <DevelopedProducts src={item.src} companyName={item.companyName} title={item.title} key={index}>
            {item.children}
          </DevelopedProducts>
        ))}
      </Wrapper>
    </>
  );
}
export default ProductDetails;
