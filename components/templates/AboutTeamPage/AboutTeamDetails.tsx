import Image from 'next/image';
import styled from 'styled-components';
import { accodionData } from '../../../features/domains/constants/AccordionConstants';
import { tablet } from '../../../styles/breakPoint';
import AboutTeamAccordion from '../../elements/AboutTeamAccordion';
import EachPageTop from '../../elements/EachPageTop';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
`;

const ImageStyle = styled.div`
  width: 546px;
  margin-top: 50px;
  display: block;
  margin-right: 8%;
  ${tablet`
    display: none;
  `}
`;

const ImageSpStyle = styled.div`
  display: none;
  ${tablet`
    display: block;
    text-align: center;
    max-width: 546px;
    margin: 0 auto;
  `}
`;

function AboutTeamDetails() {
  return (
    <>
      <EachPageTop
        SubTitleChildren={'自分の色が輝く社会に'}
        TitleChildren={'ABOUT TEAM'}
        src="/assets/AboutTeamImage.png"
      >
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
        <div>
          {accodionData.map((item, index) => (
            <AboutTeamAccordion title={item.title} subTitle={item.subTitle} detail={item.detail} key={index} />
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default AboutTeamDetails;
