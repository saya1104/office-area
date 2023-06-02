import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { GradationStyle } from '../../../styles/Styled';
import { sp, tablet } from '../../../styles/breakPoint';
import ReadMore from '../../elements/ReadMore';

const ProductStyle = styled.div`
  position: relative;
`;

const TextStyle = styled.div`
  position: absolute;
  top: 20vw;
  left: 10%;
  width: 35%;
  max-width: 520px;
  height: auto;
  ${tablet`
  width: 42%;
  `}
  ${sp`
  max-width:none;
  top: 12%;
  left: auto;
  width: auto;
  margin: 0 30px;
  `}
  h3 {
    font-size: 34px;
    font-weight: 600;
  }
  p {
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 7%;
  }
`;

const Gradation = styled.span`
  ${GradationStyle}
`;

const ImagePcStyle = styled.div`
  position: absolute;
  width: 38%;
  top: 23%;
  right: 10%;
  ${tablet`
  margin-top:12vw;
  width: 35%;
  `}
  ${sp`
  display: none;
  `}
`;

const ImageSpStyle = styled.div`
  display: none;
  ${sp`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;    
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
          <h3>
            <Gradation>PRODUCT</Gradation>
          </h3>
          <ImageSpStyle>
            <div>
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
            </div>
          </ImageSpStyle>
          <p>
            お客様に提供する価値を向上させるために、サービスの利便性を日々追求しています。開発するシステムは多岐に渡り、WEB
            サイトや WEB
            アプリケーションに限らず、スマートフォンアプリやそれらを支えるインフラに至るまで、内製化を推進している真っ最中。既存の手法にとらわれず、モダンな技術を積極的に採用していくチャレンジングな環境で開発が行われています。
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
