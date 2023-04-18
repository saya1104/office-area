import React, { useState } from 'react';
import styled from 'styled-components';
import AifulLogo from '../../public/assets/AifulLogo.svg';
import HamburgerButton from '../elements/HamburgerButton';
import HamburgerMenu from '../elements/HamburgerMenu';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderStyle>
      <AifulLogo />
      <HamburgerButton isOpen={isOpen} onClick={handleToggle} />
      <HamburgerMenu isOpen={isOpen} />
    </HeaderStyle>
  );
};

export default Header;
