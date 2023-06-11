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
import { spMin, tablet } from '../../styles/breakPoint';

const SectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  ${tablet`
    display:block;
  `}
`;

const AboutTeamStyle = styled.div`
  position: relative;
  width: 600px;
  min-width: 300px;
  margin: 0 5%;
  ${tablet`
  width:auto;
  margin: 0 0 0 8%;
  `}
  ${spMin`
    width: auto;
  `}
  }
  h3 {
    font-weight: 600;
    ${spMin`
      margin-left: 20px;
    `}
  }
  p {
    margin:0;
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
    ${tablet`
      margin:10px 8% 50px 0
    `}
    ${spMin`
      margin: 10px 8% 50px 0;
    `}
  }
`;

const TitleStyle = styled.div`
  margin-right: 8%;
  h2 {
    white-space: normal;
    width: fit-content;
    ${GradationStyle}
    font-weight: 200;
    font-size: min(10vw, 60px);
    ${tablet`
      margin: 0 auto 20px auto;
      
    `};
  }
`;

const SubTitleStyle = styled.div`
  margin: 30px 0;
  a {
    color: #ff388a;
    margin-bottom: 0;
  }
  ${tablet`
    margin:30px 8% 0px 0
  `}
`;

const ImagePcStyle = styled.div`
  width: 666px;
  display: block;
  ${tablet`
    display: none;
  `}
`;

const ImageSpStyle = styled.div`
  display: none;
  ${tablet`
    display: block;
    width: 600px;
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
  title?: string;
  subTitle?: string;
  children?: ReactNode;
  src: string;
};

const EachPageTop: React.FC<Props> = (props) => {
  const { title, subTitle, children, src } = props;
  return (
    <SectionStyle>
      <AboutTeamStyle>
        <TitleStyle>
          <h2>{title}</h2>
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
        <SubTitleStyle>
          <a>{subTitle}</a>
        </SubTitleStyle>
        <p>{children}</p>
      </AboutTeamStyle>
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
