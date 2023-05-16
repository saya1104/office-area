import Image from 'next/image';
import styled from 'styled-components';
import { ListConstants } from '../../../features/domains/constants/ListConstants';
import { sp } from '../../../styles/breakPoint';
import { ProductList } from '../../elements/ProductList';

const Wrapper = styled.div`
  position: relative;
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

function TechnologySection() {
  return (
    <Wrapper>
      <WavePcStyle>
        <Image
          src="/assets/PRODUCT_wave_PC.png"
          alt="alful engineer recruitment"
          width={1511}
          height={858}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </WavePcStyle>
      <WaveSpStyle>
        <Image
          src="/assets/PRODUCT_wave_SP.png"
          alt="alful engineer recruitment"
          width={390}
          height={656}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </WaveSpStyle>
      <ProductList ListData={ListConstants.data} />
    </Wrapper>
  );
}

export default TechnologySection;
