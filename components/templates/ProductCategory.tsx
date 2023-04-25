import Image from 'next/image';
import styled from 'styled-components';
import { sp, tablet } from '../../styles/breakPoint';

const ProductStyle = styled.div`
  position: relative;
`;

const TextStyle = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  width: 35%;
  height: auto;
  ${tablet`
  width: 40%
  `}
  ${sp`
  top: 12%;
  left: auto;
  width: auto;
  margin: 0 30px;
  `}
  h3 {
    font-size: 34px;
    font-weight: 600;
    ${tablet`
    font-size: 3vw;
    `}
    ${sp`
    font-size: 34px;
    `}
  }
  p {
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
    ${tablet`
    font-size: 1.6vw;
    line-height: 3vw;
    `}
    ${sp`
    margin-top: 60px;
    font-size: 3.8vw;
    line-height: 7vw;
    `}
  }
`;

const ImagePcStyle = styled.div`
  position: absolute;
  width: 38%;
  top: 23%;
  right: 10%;
  ${tablet`
  width: 30%;
  `}
  ${sp`
  display: none;
  `}
`;

const ImageSpStyle = styled.div`
  display: none;
  ${sp`
  display: block;
  margin-top: 80px;
`}
`;

const PcWaveStyle = styled.div`
  display: block;
  z-index: -1;
  ${sp`
  display: none;
`}
`;

const SpWaveStyle = styled.div`
  display: none;
  ${sp`
  display: block;
  z-index: -1;
`}
`;

const ProductCategory = () => {
  return (
    <>
      <ProductStyle>
        <PcWaveStyle>
          <Image
            src="/assets/TopProductWavePc.svg"
            alt="TopProductWave"
            width={1514}
            height={968}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </PcWaveStyle>
        <SpWaveStyle>
          <Image
            src="/assets/TopProductWaveSp.svg"
            alt="TopProductWave"
            width={390}
            height={889}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </SpWaveStyle>
        <TextStyle>
          <h3>PRODUCT</h3>
          <ImageSpStyle>
            <Image
              src="/assets/ProductImage.svg"
              alt="ProductImage"
              width={609}
              height={478}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </ImageSpStyle>
          <p>
            開発プロダクト紹介テキスト。開発プロダクト紹介テキスト。開発プロダクト紹介テキスト。開発プロダクト紹介テキスト。
            開発プロダクト紹介テキスト。 開発プロダクト紹介テキスト。
            開発プロダクト紹介テキスト。開発プロダクト紹介テキスト。
          </p>
        </TextStyle>
        <ImagePcStyle>
          <Image
            src="/assets/ProductImage.svg"
            alt="ProductImage"
            width={609}
            height={478}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </ImagePcStyle>
      </ProductStyle>
    </>
  );
};

export default ProductCategory;
