import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { GradationStyle } from '../../../styles/Styled';
import { sp, tablet,  } from '../../../styles/breakPoint';
import ReadMore from '../../elements/ReadMore';

const OfiiceSpaceStyle = styled.div`
  position: relative;
`;

const ImagePcStyle = styled.div`
  width: 546px;
  display: block;
  margin-right: 8%;
  ${sp`
  display: none;
`}
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10vw 30vw;
  ${tablet`
   margin: 0 8vw 30vw;
  `} ${sp`
    margin: 0 30px 60vw;
  `};
`;

const TextStyle = styled.div`
  width: 500px;
  ${sp`
  width: auto;
  margin: 0;
  `}
  h3 {
    font-weight: 600;
  }
  p {
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
  }
`;

const Gradation = styled.span`
  ${GradationStyle}
`;




const OfficeSpace = () => {
    const router = useRouter();

  return (
<>
<OfiiceSpaceStyle>
        <Flex>
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

          <TextStyle>
            <h3>
              <Gradation>OFFICE SPACE</Gradation>
            </h3>
            <p>
                アイフルの働く空間。出社すると一日の中で最も長時間過ごす場所で、社員の皆さまが働きやすい環境づくりを目指して、個人ではリラックスしながらも集中でき、社員同士ではコミュニケーションが取りやすいオフィス空間が創出されています。
            </p>
            <ReadMore onClick={() => router.push('/officespace')} />
          </TextStyle>
        </Flex>
      </OfiiceSpaceStyle>

</>
    )
}

export default OfficeSpace;