import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { GradationStyle } from '../../../styles/Styled';
import { sp, tablet } from '../../../styles/breakPoint';
import ReadMore from '../../elements/ReadMore';

const ProductStyle = styled.div`
  position: relative;
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10vw 30vw;
  ${tablet`
   margin: 0 8vw 30vw;
  `} ${sp`
    margin: 0 30px 60vw; 
  `};
`;

const TextStyle = styled.div`
  width: 500px;
  ${sp`
  width: auto;
  margin: 0;
  `}
  h3 {
    font-weight: 600;
  }
  p {
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
  }
`;

const Gradation = styled.span`
  ${GradationStyle}
`;

const ImagePcStyle = styled.div`
  margin-left: 8%;

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
  position: absolute;
  width: 100vw;
  margin: 0 calc(50% - 50vw);
  display: block;
  z-index: -1;
  ${tablet`
   width:120vw;
   right:0.5%;
  `}
  ${sp`
  width:100vw;
  display: none;
`}
`;

const WaveSpStyle = styled.div`
  display: none;
  ${sp`
  position: absolute;
  width: 100vw;
  margin: 0 calc(50% - 50vw);
  display: block;
  z-index: -1;
`}
`;

const Product = () => {
  const router = useRouter();
  return (
    <>
      <ProductStyle>
        <Flex>
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
              お客様に提供する価値を向上させるために、サービスの利便性を日々追求しています。開発するシステムは多岐に渡り、WEBサイトやWEBアプリケーションに限らず、スマートフォンアプリやそれらを支えるインフラに至るまで、内製化を推進している真っ最中。既存の手法にとらわれず、モダンな技術を積極的に採用していくチャレンジングな環境で開発が行われています。
            </p>
            <ReadMore onClick={() => router.push('/product')} />
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
          <WavePcStyle>
            <Image
              src="/assets/TopProductWavePc.svg"
              alt="TopProductWave"
              width={1514}
              height={968}
              sizes="100vw"
              style={{
                width: '110%',
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
                width: '110%',
                height: 'auto',
              }}
            />
          </WaveSpStyle>
        </Flex>
      </ProductStyle>
    </>
  );
};

export default Product;
