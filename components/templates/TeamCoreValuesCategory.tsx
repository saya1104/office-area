import Image from 'next/image';
import styled from 'styled-components';
import { GradationStyle } from '../../styles/Styled';
import { sp, tablet } from '../../styles/breakPoint';
import ReadMore from '../elements/ReadMore';

const CategoryBox = styled.div`
  display: flex;
  margin: 200px 12%;
  justify-content: space-between;
  align-items: center;
  ${tablet`
  margin: 200px 8%;
  `}
  ${sp`
  margin: 200px 30px;
  `}
`;
const TeamCoreValuesStyle = styled.div`
  position: relative;
  width: 500px;
  min-width: 300px;
  ${sp`
  width: auto;
  margin: 0;
  `}
  h3 {
    ${GradationStyle}
    font-weight: 600;
  }
  p {
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
  }
`;

const ImagePcStyle = styled.div`
  width: 546px;
  display: block;
  margin-right: 8%;
  ${sp`
  display: none;
`}
`;

const ImageSpStyle = styled.div`
  display: none;
  ${sp`
  display: block;
  max-width: 546px;
  margin: 0 auto;
`}
`;

const TeamCoreValuesCategory = () => {
  return (
    <CategoryBox>
      <ImagePcStyle>
        <Image
          src="/assets/TeamCoreValuesImage.svg"
          alt="TEAM CORE VALUES"
          width={546}
          height={546}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </ImagePcStyle>
      <TeamCoreValuesStyle>
        <h3>TEAM CORE VALUES</h3>
        <ImageSpStyle>
          <Image
            src="/assets/TeamCoreValuesImage.svg"
            alt="TEAM CORE VALUES"
            width={546}
            height={546}
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
        </p>
        <ReadMore />
      </TeamCoreValuesStyle>
    </CategoryBox>
  );
};

export default TeamCoreValuesCategory;
