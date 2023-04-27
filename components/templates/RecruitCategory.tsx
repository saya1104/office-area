import Image from 'next/image';
import styled from 'styled-components';

const RecruitStyle = styled.div`
  display: flex;
`;

const RecruitLeftImageStyle = styled.div``;

const EntryButtonStyle = styled.a``;

const RecruitRightImageStyle = styled.div``;

const RecruitCategory = () => {
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
      <h3>RECRUIT</h3>
      <p>
        募集要項テキストがここに入ります。募集要項テキストがここに入ります。募集要項テキストがここに入ります。募集要項テキストがここに入ります。
      </p>
      <EntryButtonStyle>ENTRY</EntryButtonStyle>
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

export default RecruitCategory;
