import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { ListConstants, IsOpenListConstants } from '../../../features/domains/constants/ListConstants';
import { tablet } from '../../../styles/breakPoint';
import { ProductLists } from '../../elements/ProductLists';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background-color: #596480;
`;

const WavePcStyle = styled.div`
  display: block;
  z-index: -1;
  ${tablet`
  display: none;

`}
`;

const WaveSpStyle = styled.div`
  display: none;
  ${tablet`
  display: block;
  z-index: -1;
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
          src="/assets/Wave_Top.png"
          alt="aiful engineer recruitment"
          width={1511}
          height={858}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            marginTop: '-5px',
          }}
        />
        <ProductLists
          ListData={ListConstants}
          isOpenData={IsOpenListConstants}
          onClick={onClickAccordionToggle}
          isOpen={isOpen}
        />
        <Image
          src="/assets/Wave_Bottom.png"
          alt="aiful engineer recruitment"
          width={1511}
          height={858}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            marginBottom: '-5px',
          }}
        />
      </WavePcStyle>
      <WaveSpStyle className={isOpen ? 'isOpen' : ''}>
        <Image
          src="/assets/Wave_Top.png"
          alt="aiful engineer recruitment"
          width={1511}
          height={858}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            marginTop: '-5px',
          }}
        />
        <ProductLists
          ListData={ListConstants}
          isOpenData={IsOpenListConstants}
          onClick={onClickAccordionToggle}
          isOpen={isOpen}
        />
        <Image
          src="/assets/Wave_Bottom.png"
          alt="aiful engineer recruitment"
          width={1511}
          height={858}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            marginBottom: '-5px',
          }}
        />
      </WaveSpStyle>
    </Wrapper>
  );
}

export default TechnologySection;
