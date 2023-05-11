import Image from 'next/image';
import styled from 'styled-components';
import { visionData, missionData, valueData } from '../../../features/domains/constants/AccordionConstants';
import { tablet } from '../../../styles/breakPoint';
import AboutTeamAccordion from '../../elements/AboutTeamAccordion';
import TightenEachPage from '../../elements/TightenEachPage';

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
      <TightenEachPage
        SubTitlechildren={'自分の色が輝く社会に'}
        Titlechildren={'ABOUT TEAM'}
        src="/assets/AboutTeamImage.png"
      >
        誰かと比べることで感じてしまう 負の感情を、社会から無くしたい。
        私たちのサービスにより、少しでも多くのお客様の感情を満たし、
        自然と輝いてもらうためにVISION・MISSION・VALUEを理念に掲げ、 「自分の色が輝く社会」 の実現を目指します。
      </TightenEachPage>
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
          {visionData.map((item, index) => (
            <AboutTeamAccordion
              title={item.title}
              subTitle={item.subTitle}
              detailTitle={item.detailTitle}
              detailSubTitle={item.detailSubTitle}
              detail={item.detail.map((value) => {
                return value;
              })}
              key={index}
            />
          ))}
          {missionData.map((item, index) => (
            <AboutTeamAccordion
              title={item.title}
              subTitle={item.subTitle}
              detail={item.detail.map((value) => {
                return value;
              })}
              detailTitle={item.detailTitle?.map((value) => {
                return value;
              })}
              detailSubTitle={item.detailSubTitle?.map((value) => {
                return value;
              })}
              key={index}
            />
          ))}
          {valueData.map((item, index) => (
            <AboutTeamAccordion
              title={item.title}
              subTitle={item.subTitle}
              detail={item.detail.map((value) => {
                return value;
              })}
              detailTitle={item.detailTitle?.map((value) => {
                return value;
              })}
              detailSubTitle={item.detailSubTitle?.map((value) => {
                return value;
              })}
              key={index}
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default AboutTeamDetails;
