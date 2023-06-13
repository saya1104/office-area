import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import AifulLogo from '../../public/assets/AifulLogo.svg';
import { sp, tablet } from '../../styles/breakPoint';

const FooterStyle = styled.footer`
  position: relative;
  padding: 45px 100px 80px;
  margin-top: 300px;

  ${tablet`
    padding: 45px 20px 80px ;
  `}
`;

const LogoStyle = styled.div`
  display: flex;
  & p {
    margin: auto auto 0 43px;
  }

  ${sp`
    display: block;
    & p {
      margin: 20px 0 0 0;
  `}
`;

const UlStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: auto;

  ${sp`
    display: block;
    min-width: 100%;
  `}
`;

const ListStyle = styled.li`
  list-style: none;
  position: relative;
  padding: 0px 0px 0px 1em;
  margin-top: 50px;
  justify-content: space-around;
  min-width: 180px;
  font-size: 20px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 5px 0 5px 8px;
    border-color: transparent transparent transparent #ff368c;
  }
`;

const ArrowUp = styled.span`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    border-bottom: 10px solid #ff328f;
    border-top: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2.5em;
    left: 50%;
    transform: translateX(-50%);
    width: 0.1em;
    height: 4em;
    background-color: #ff328f;
  }
`;

const ArrowStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 50px;
  bottom: 60px;

  ${tablet`
    position: initial;
    width: 100px;
    margin: -60px 0 0 auto;

  `}
`;

const PagetopLink = styled.p`
  color: #ff328f;
  text-decoration: none;
  margin-top: 50px;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <LogoStyle>
        <AifulLogo />
        <p>アイフルエンジニア採用サイト</p>
      </LogoStyle>
      <UlStyle>
        <ListStyle>
          <Link href={'/'} style={{ textDecoration: 'none', color: '#ffffff' }}>
            TOP
          </Link>
        </ListStyle>
        <ListStyle>
          <Link href={'/about'} style={{ textDecoration: 'none', color: '#ffffff' }}>
            ABOUT TEAM
          </Link>
        </ListStyle>
        <ListStyle>
          <Link href={'/product'} style={{ textDecoration: 'none', color: '#ffffff' }}>
            PRODUCT
          </Link>
        </ListStyle>
        <ListStyle>
          <Link href={'/interview'} style={{ textDecoration: 'none', color: '#ffffff' }}>
            INTERVIEW
          </Link>
        </ListStyle>
        <ListStyle>
          <Link href={'/recruit'} style={{ textDecoration: 'none', color: '#ffffff' }}>
            RECRUIT
          </Link>
        </ListStyle>
      </UlStyle>
      <Link href={'#'}>
        <ArrowStyle>
          <ArrowUp />
          <PagetopLink>PAGE TOP</PagetopLink>
        </ArrowStyle>
      </Link>
    </FooterStyle>
  );
};

export default Footer;
