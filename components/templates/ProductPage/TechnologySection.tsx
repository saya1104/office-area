import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { ListConstants } from '../../../features/domains/constants/ListConstants';
import { tablet } from '../../../styles/breakPoint';
import { ProductLists } from '../../elements/ProductLists';

const Wrapper = styled.div`
  position: relative;
`;

const WavePcStyle = styled.div`
  display: block;
  z-index: -1;
  ${tablet`
  display: none;
  &.isOpen{
    margin-bottom:800px;
  }
`}
`;

const WaveSpStyle = styled.div`
  display: none;
  ${tablet`
  height:650px;
  display: block;
  z-index: -1;
  &.isOpen{
    margin-bottom:800px;
  }
`}
`;

function TechnologySection() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickAccordionToggle = () => {
    setIsOpen(!isOpen);
  };
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
      <WaveSpStyle className={isOpen ? 'isOpen' : ''}>
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
      <ProductLists
        ListData={ListConstants.technologyData}
        isOpenData={ListConstants.isOpenData}
        onClick={onClickAccordionToggle}
        isOpen={isOpen}
      />
    </Wrapper>
  );
}

export default TechnologySection;
