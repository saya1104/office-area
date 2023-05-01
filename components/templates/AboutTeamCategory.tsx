import Image from 'next/image';
import styled from 'styled-components';
import { GradationStyle } from '../../styles/Styled';
import { sp, spMin, tablet } from '../../styles/breakPoint';
import ReadMore from '../elements/ReadMore';

const CategoryBoxStyle = styled.div`
  display: flex;
  margin-top: 200px;
  justify-content: space-between;
  align-items: center;
`;

const AboutTeamStyle = styled.div`
  position: relative;
  width: 516px;
  min-width: 300px;
  margin: 0 10%;
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
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
    ${spMin`
	  margin: 30px;
	  `}
  }
`;

const Gradation = styled.span`
  ${GradationStyle}
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

const AboutTeamCategory = () => {
  return (
    <CategoryBoxStyle>
      <AboutTeamStyle>
        <h3>
          <Gradation>ABOUT TEAM</Gradation>
        </h3>
        <ImageSpMinStyle>
          <Image
            src="/assets/AboutTeamImageSp.png"
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
        <p>
          テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          テキストが入ります。 テキストが入ります。 テキストが入ります。 テキストが入ります。 テキストが入ります。
          テキストが入ります。 テキストが入ります。
        </p>
        <ReadMore />
      </AboutTeamStyle>
      <ImageSpStyle>
        <Image
          src="/assets/AboutTeamImageSp.png"
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
          src="/assets/AboutTeamImage.png"
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
    </CategoryBoxStyle>
  );
};

export default AboutTeamCategory;
