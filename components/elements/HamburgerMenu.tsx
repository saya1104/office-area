import styled from 'styled-components';
import { sp } from '../../styles/breakPoint';

type Props = {
  isOpen: boolean;
};

const Container = styled.div<Props>`
  display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
  flex-direction: column;
  padding-top: 150px;
  padding-left: 150px;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(17, 19, 24, 0.9);
  ${sp`
    padding-top: 230px;
    padding-left: 30px;
  `}

  li {
    list-style: none;
    font-size: 34px;
    font-weight: 600;
    margin-bottom: 80px;
  }
`;

const HamburgerMenu: React.FC<Props> = ({ isOpen }) => {
  return (
    <Container isOpen={!isOpen}>
      <ul>
        <li>TOP</li>
        <li>ABOUT TEAM</li>
        <li>TEAM CORE VALUES</li>
        <li>PRODUCT</li>
        <li>MEMBER</li>
        <li>RECRUIT</li>
      </ul>
    </Container>
  );
};

export default HamburgerMenu;
