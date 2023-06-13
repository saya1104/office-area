import Image from 'next/image';
import styled from 'styled-components';
import { sp } from '../../../styles/breakPoint';

const RecruitStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;
  ${sp`
  display: inline;
  `}
`;

const RecruitLeftImageStyle = styled.div`
  width: calc(100% / 3);
  ${sp`
  max-width: 250px;
  margin:200px 0 -50px -60px ;
`}
`;

const RecruitTextStyle = styled.div`
  text-align: center;
  width: 40%;
  min-width: 350px;
  ${sp`
  display:block;
  margin: 0 auto;
  width: 90%;
  min-width: auto;
  `}
  h3 {
    background: linear-gradient(90deg, #ff318f 32.75%, #ff7d53 67.17%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 60px;
  }
  p {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    ${sp`
       text-align: left;
    `}
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
  width: calc(100% / 3);
  ${sp`
  max-width: 200px;
  margin: -80px 0 0 auto;

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
          アイフルでは、一緒に働くメンバーを募集しています。
          <br />
          私たちと一緒に「お客様の暮らしを変える」より良いサービスを創っていきませんか？
          <br />
          みなさんのご応募をお待ちしています。
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
