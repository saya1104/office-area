import Image from 'next/image';
import styled from 'styled-components';
import { sp, tablet } from '../../../styles/breakPoint';
import { pcMin } from '../../../styles/breakPoint';
import ReadMore from '../../elements/ReadMore';
import { useRouter } from 'next/router';

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
  width: 42%
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
    ${pcMin`
    font-size: 2.7vw;
    `}
    ${sp`
    font-size: 34px;
    `}
  }
  p {
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 7%;
    ${tablet`
    font-size: 1.8vw;
    line-height: 3.2vw;
    `}
    ${sp`
    margin-top: 10vw;
    font-size: 3.4vw;
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

const WavePcStyle = styled.div`
  display: block;
  z-index: -1;
  ${sp`
  display: none;
`}
`;

const WaveSpStyle = styled.div`
  display: none;
  ${sp`
  display: block;
  z-index: -1;
`}
`;

const Product = () => {
  const router = useRouter();
  return (
    <>
      <ProductStyle>
        <WavePcStyle>
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
        </WavePcStyle>
        <WaveSpStyle>
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
        </WaveSpStyle>
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
          <ReadMore onClick={() => router.push('/ProductPage')} />
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

export default Product;
