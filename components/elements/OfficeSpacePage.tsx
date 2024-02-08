import Image from 'next/image';
import styled from 'styled-components';
import { sp } from '../../styles/breakPoint';


const SectionStyle = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
  align-items: center;
  ${sp`
   display:block;
   margin:200px 0 0 30px;;
  `}
`;

const Rightstyle = styled(SectionStyle)`
flex-direction: row;
`;

const Leftstyle = styled(SectionStyle)`
flex-direction: row-reverse;
`;



const OfficeSpaceStyle = styled.div`
  position: relative;
  width: 520px;
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

const ImagePcStyle = styled.div`
  width: 450px;
  display: block;
  ${sp`
   display:none;
  `}
`;

const Fontsize = styled.div`
font-size:100px;
display: inline;

`;

const Pstyle = styled.p`
margin-bottom:-15px;
`;

const Pstyled = styled.p`
display: inline-block;
margin-left:20px;
`;

const Centerstyle = styled.div`
display:flex;
align-items: center;
`;


type Props = {
  area?: string;
  number?: string;
  subtitle?: string;
  src: string;
  message?: string;
  isright?: boolean;
}

const OfficeSpacePage: React.FC<Props> = (props) => {
  const { area, number, subtitle, src, message, isright } = props;
  return (
    <SectionStyle>
      {isright ? <Rightstyle /> : <Leftstyle />}
      <ImagePcStyle>
        <Image
          src={src}
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
      <OfficeSpaceStyle>
        <Pstyle> {area}</Pstyle>
        <Centerstyle>
          <Fontsize>{number} </Fontsize>
          <Pstyled>{subtitle}</Pstyled>
        </Centerstyle>
        <p>{message}</p>
      </OfficeSpaceStyle>
    </SectionStyle>
  );
}

export default OfficeSpacePage;


