import { useRouter } from 'next/router';
import styled from 'styled-components';
import { pcMin, sp } from '../../styles/breakPoint';

type Props = {
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
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
    cursor: pointer;
    ${pcMin`
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
    ${pcMin`
    margin-top: 180px;
    margin-left: 100px;
    `}
    ${sp`
    margin-top: 230px;
    margin-left: 5px;
    `}
  }
`;

const HamburgerMenu: React.FC<Props> = (props) => {
  const router = useRouter();
  return (
    <Container onClick={props.onClick} isOpen={props.isOpen}>
      <ul>
        <li onClick={() => router.push('/AboutPage')}>ABOUT TEAM</li>
        <li onClick={() => router.push('/AboutPage#TeamCoreValues')}>TEAM CORE VALUES</li>
        <li onClick={() => router.push('/ProductPage')}>PRODUCT</li>
        <li>MEMBER</li>
        <li>RECRUIT</li>
      </ul>
    </Container>
  );
};

export default HamburgerMenu;
