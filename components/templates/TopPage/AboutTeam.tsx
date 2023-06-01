import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { GradationStyle } from '../../../styles/Styled';
import { sp } from '../../../styles/breakPoint';
import ReadMore from '../../elements/ReadMore';

const SectionStyle = styled.div`
  display: flex;
  margin-top: 200px;
  justify-content: space-between;
  align-items: center;
  ${sp`
   display:block;
   margin:200px 0 0 30px;;
  `}
`;

const AboutTeamStyle = styled.div`
  position: relative;
  width: 500px;
  min-width: 300px;
  margin: 0 10%;
  ${sp`
    margin: 0;
    width:auto;
  `}

  h3 {
    font-weight: 600;
  }
  p {
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
    ${sp`
     margin-right:30px;
    `}
  }
`;

const Gradation = styled.span`
  ${GradationStyle}
`;

const ReadMoreStyle = styled.div`
  ${sp`
    margin-right: 30px;
  `}
`;

const ImagePcStyle = styled.div`
  width: 666px;
  display: block;
  ${sp`
   display:none;
  `}
`;

const ImageSpStyle = styled.div`
  display: none;
  ${sp`
    margin: 0 0 0 auto;
    display: block;
    max-width:500px;
  `}
`;

const AboutTeam = () => {
  const router = useRouter();
  return (
    <SectionStyle>
      <AboutTeamStyle>
        <h3>
          <Gradation>ABOUT TEAM</Gradation>
        </h3>
        <ImageSpStyle>
          <Image
            src="/assets/AboutTeamImage.png"
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
        <p>
          テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          テキストが入ります。 テキストが入ります。 テキストが入ります。 テキストが入ります。 テキストが入ります。
          テキストが入ります。 テキストが入ります。
        </p>
        <ReadMoreStyle>
          <ReadMore onClick={() => router.push('/AboutPage')} />
        </ReadMoreStyle>
      </AboutTeamStyle>
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
    </SectionStyle>
  );
};
export default AboutTeam;
