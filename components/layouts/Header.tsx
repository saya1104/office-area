import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { spMin } from '../../styles/breakPoint';
import HamburgerButton from '../elements/HamburgerButton';
import HamburgerMenu from '../elements/HamburgerMenu';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 29px;
  margin-left: 2vw;
  ${spMin`
    margin-top: 10px;
  `}
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderStyle>
      <h1>
        <Image src="/assets/AifulLogo.svg" alt="アイフル" width={131} height={57} />
      </h1>
      <HamburgerButton isOpen={isOpen} onClick={handleToggle} />
      <HamburgerMenu isOpen={isOpen} onClick={handleToggle} />
    </HeaderStyle>
  );
};

export default Header;
