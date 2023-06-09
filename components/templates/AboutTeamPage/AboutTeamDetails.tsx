import Image from 'next/image';
import styled from 'styled-components';
import { accodionData } from '../../../features/domains/constants/AccordionConstants';
import { spMin, tablet } from '../../../styles/breakPoint';
import AboutTeamAccordion from '../../elements/AboutTeamAccordion';
import EachPageTop from '../../elements/EachPageTop';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px 8vw 400px;
  ${tablet`
    margin:100px 3vw 200px ;
  `};
`;

const ImageStyle = styled.div`
  width: 546px;
  margin-top: 50px;
  display: block;
  text-align: center;
  ${tablet`
    display: none;
  `}
`;

const ImageSpStyle = styled.div`
  display: none;
  ${tablet`
    display: block;
    text-align: center;
    margin: 0 auto;
    max-width: 546px;
  `}
`;

const BrStyled = styled.div`
  span {
    display: inline-block;
  }
  br {
    display: none;
    &.isPc {
      display: block;
    }
    ${spMin`
     display:block;
    `}
  }
`;

function AboutTeamDetails() {
  return (
    <>
      <EachPageTop subTitle={'自分の色が輝く社会に'} title={'ABOUT TEAM'} src="/assets/AboutTeamImage.png">
        誰かと比べることで感じてしまう負の感情を、社会から無くしたい。
        <br />
        私たちのサービスにより、少しでも多くのお客様の感情を満たし、
        自然と輝いてもらうためにVISION・MISSION・VALUEを理念に掲げ、「自分の色が輝く社会」の実現を目指します。
      </EachPageTop>
      <ImageSpStyle>
        <Image
          src="/assets/TeamPyramid.png"
          alt="TeamPyramid"
          width={491}
          height={486}
          sizes="100vw"
          style={{
            width: '83%',
            height: 'auto',
          }}
        />
      </ImageSpStyle>
      <Wrapper>
        <ImageStyle>
          <Image
            src="/assets/TeamPyramid.png"
            alt="TeamPyramid"
            width={491}
            height={486}
            sizes="100vw"
            style={{
              width: '83%',
              height: 'auto',
            }}
          />
        </ImageStyle>
        <BrStyled>
          {accodionData.map((item, index) => (
            <AboutTeamAccordion title={item.title} subTitle={item.subTitle} detail={item.detail} key={index} />
          ))}
        </BrStyled>
      </Wrapper>
    </>
  );
}

export default AboutTeamDetails;
