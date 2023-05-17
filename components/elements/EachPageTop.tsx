{
  /*
【概要】
各ページのトップ部分をコンポーネント化
*/
}

import type { ReactNode } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { GradationStyle } from '../../styles/Styled';
import { sp, spMin, tablet } from '../../styles/breakPoint';

const SectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  ${tablet`
    margin: 50px 8%;
  `}
`;

const AboutTeamStyle = styled.div`
  position: relative;
  width: 570px;
  min-width: 300px;
  margin: 0 5%;
  ${sp`
    margin: 0 6%;
  `}
  ${spMin`
    width: auto;
    margin: auto;
  `}
h3 {
    font-weight: 600;
    ${spMin`
      margin-left: 20px;
    `}
  }
  p {
    margin-top: 5px;
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;

    ${spMin`
      margin: 10px 10px 10px 10px;
    `}
  }
`;

const TitleStyle = styled.div`
  h2 {
    white-space: normal;
    ${GradationStyle}
    font-weight: 200;
    font-size: 60px;
    ${spMin`
      text-align: center;
      margin-bottom:10px;
      font-size: 10vw;
    `}
  }
`;

const SubTitleStyle = styled.div`
  margin-top: 15px;
  a {
    color: #ff388a;
    margin-bottom: 0;
  }
  ${spMin`
    margin:30px 10px 0px 10px
  `}
`;

const ImagePcStyle = styled.div`
  width: 666px;
  display: block;
  ${tablet`
    min-width: 280px;
  `}
  ${sp`
    display: none;
  `}
`;

const ImageSpStyle = styled.div`
  display: none;
  ${sp`
    display: block;
    width: 260px;
    height: auto;
    min-width: 240px;
    margin: 0 0 0 auto;
  `}
  ${spMin`
    display: none;
  `}
`;

const ImageSpMinStyle = styled.div`
  display: none;
  ${spMin`
    display: block;
    max-width: 380px;
    margin: 0 0 0 auto;
  `}
`;

type Props = {
  TitleChildren?: ReactNode;
  SubTitleChildren?: ReactNode;
  children?: ReactNode;
  src: string;
};

const EachPageTop: React.FC<Props> = (props) => {
  const { TitleChildren, SubTitleChildren, children, src } = props;
  return (
    <SectionStyle>
      <AboutTeamStyle>
        <TitleStyle>
          <h2>{TitleChildren}</h2>
        </TitleStyle>
        <ImageSpMinStyle>
          <Image
            src={src}
            alt="ABOUT TEAM"
            width={382}
            height={442}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </ImageSpMinStyle>
        <SubTitleStyle>
          <a>{SubTitleChildren}</a>
        </SubTitleStyle>
        <p>{children}</p>
      </AboutTeamStyle>
      <ImageSpStyle>
        <Image
          src={src}
          alt="ABOUT TEAM"
          width={382}
          height={442}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </ImageSpStyle>
      <ImagePcStyle>
        <Image
          src={src}
          alt="ABOUT TEAM"
          className="AboutTeamImage"
          width={666}
          height={536}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </ImagePcStyle>
    </SectionStyle>
  );
};

export default EachPageTop;
