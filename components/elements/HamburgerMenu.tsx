import styled from 'styled-components';
import { pc_min, sp } from '../../styles/breakPoint';

type Props = {
  isOpen: boolean;
};

const Container = styled.div<Props>`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  transition: all 0.7s cubic-bezier(0.79, 0, 0.5, 0.99) 0s;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  background-color: rgba(17, 19, 24, 0.9);
  li {
    list-style: none;
    font-size: 34px;
    font-weight: 600;
    margin-bottom: 80px;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform: ${({ isOpen }) => (isOpen ? 'translateY(-100%)' : 'translateY(0)')};
    transition: all 0.3s 0.8s;
    ${pc_min`
    margin-bottom: 60px;
    `}
    ${sp`
    margin-bottom: 50px;
    font-size: 30px;
    `}
  }
  ul {
    margin-top: 200px;
    margin-left: 140px;
    ${pc_min`
    margin-top: 180px;
    margin-left: 100px;
    `}
    ${sp`
    margin-top: 230px;
    margin-left: 5px;
    `}
  }
`;

const HamburgerMenu: React.FC<Props> = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <ul>
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
