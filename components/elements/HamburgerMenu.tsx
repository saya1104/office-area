import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';
import Link from 'next/link';
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
    ${pcMin`
    margin-bottom: 60px;
    `}
    ${sp`
    margin-bottom: 45px;
    `}
  }
  ul {
    margin: 180px 0 0 140px;
    ${pcMin`
    margin: 150px 0 0 100px;
    `}
    ${sp`
    margin:80px 0 0 5px;
    `}
  }
`;

const HamburgerMenu: React.FC<Props> = (props) => {
  return (
    <Container onClick={props.onClick} isOpen={props.isOpen}>
      <ul>
        <li>
          <Link href={'/'} style={{ textDecoration: 'none', color: '#ffffff' }}>
            TOP
          </Link>
        </li>
        <li>
          <Link href={'/about'} style={{ textDecoration: 'none', color: '#ffffff' }}>
            ABOUT TEAM
          </Link>
        </li>
        <li>
          <Link href={'/product'} style={{ textDecoration: 'none', color: '#ffffff' }}>
            PRODUCT
          </Link>
        </li>
        <li>
          <Link href={'/interview'} style={{ textDecoration: 'none', color: '#ffffff' }}>
            INTERVIEW
          </Link>
        </li>
        <li>
          <Link href={'/recruit'} style={{ textDecoration: 'none', color: '#ffffff' }}>
            RECRUIT
          </Link>
        </li>
        <li>
          <Link
            href={'https://group.aiful.co.jp/'}
            target="_blank"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            GROUP SITE
            <OpenInNewSharpIcon style={{ color: '#ff328f', width: '38px', height: '38px', marginLeft: '10px' }} />
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default HamburgerMenu;
