import Image from 'next/image';
import styled from 'styled-components';
import { sp } from '../../../styles/breakPoint';

const RecruitStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${sp`
  display: inline;
  position: relative;
  `}
`;

const RecruitLeftImageStyle = styled.div`
  ${sp`
  max-width: 354px;
`}
`;

const RecruitTextStyle = styled.div`
  display: block;
  text-align: center;
  width: 40%;
  min-width: 350px;
  ${sp`
  margin: 0 auto;
  width: 50%;
  min-width: auto;
  position: absolute;
  top: 280px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  `}
  h3 {
    background: linear-gradient(90deg, #ff318f 32.75%, #ff7d53 67.17%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 60px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
  }
`;

const EntryButtonStyle = styled.div`
  padding: 13px 0;
  width: 260px;
  margin: 60px auto 0 auto;
  color: #ff388a;
  border: solid 3px #ff388a;
  border-radius: 50px;
  cursor: pointer;
  ${sp`
  width: 200px;
  `}
  a {
    font-size: 25px;
    font-weight: 700;
    color: inherit;
    text-decoration: none;
  }
`;

const RecruitRightImageStyle = styled.div`
  ${sp`
  max-width: 339px;
  margin: 0 0 0 auto;
  position: absolute;
  top: 550px;
  right: 0;
`}
`;

const Recruit = () => {
  return (
    <RecruitStyle>
      <RecruitLeftImageStyle>
        <Image
          src="/assets/RecruitLeft.svg"
          alt="RecruitLeft"
          width={411}
          height={381}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </RecruitLeftImageStyle>
      <RecruitTextStyle>
        <h3>RECRUIT</h3>
        <p>
          募集要項テキストがここに入ります。募集要項テキストがここに入ります。募集要項テキストがここに入ります。募集要項テキストがここに入ります。
        </p>
        <EntryButtonStyle>
          <a
            href="https://hrmos.co/pages/aifulgroup/jobs?category=1825093156045836289"
            target="_blank"
            rel="noreferrer"
          >
            ENTRY
          </a>
        </EntryButtonStyle>
      </RecruitTextStyle>
      <RecruitRightImageStyle>
        <Image
          src="/assets/RecruitRight.svg"
          alt="RecruitRight"
          width={744}
          height={730}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </RecruitRightImageStyle>
    </RecruitStyle>
  );
};

export default Recruit;
