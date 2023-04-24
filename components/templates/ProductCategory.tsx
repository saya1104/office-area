import Image from 'next/image';
import styled from 'styled-components';
import { sp } from '../../styles/breakPoint';

const PcWaveStyle = styled.div`
  display: block;
  ${sp`
display: none;
`}
`;

const SpWaveStyle = styled.div`
  display: none;
  ${sp`
display: block;
`}
`;

const ProductCategory = () => {
  return (
    <>
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

      <h3>PRODUCT</h3>
      <p>
        開発プロダクト紹介テキスト。開発プロダクト紹介テキスト。開発プロダクト紹介テキスト。開発プロダクト紹介テキスト。
        開発プロダクト紹介テキスト。 開発プロダクト紹介テキスト。 開発プロダクト紹介テキスト。
      </p>
      <Image src="/assets/ProductImage.svg" alt="ProductImage" width={609} height={478} />
    </>
  );
};

export default ProductCategory;
