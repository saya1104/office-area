import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { sp, spMin, tablet } from '../../styles/breakPoint';
import type { ProductConstants } from '../../features/domains/constants/ProductConstants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 100px 0;
`;

const DetailStyle = styled.div`
  ${tablet`
  display: flex;
  flex-direction: column;
  align-items: center;
  `}
`;

const HeadLine = styled.div`
  display: flex;
  align-items: center;
  background: #b7c4e5;
  width: 450px;
  height: 65px;
  &.isCompany {
    width: 250px;
    justify-content: center;
  }
  ${tablet`
    width:90vw;
    height:50px;
  `}
`;

const CompanyNameStyle = styled.div`
  background: #ffdada;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95px;
  height: 30px;
  margin-left: 15px;
  border-radius: 5px;
  font-weight: bold;
  border: 0.15rem solid #16223f;
  p {
    font-size: 15px;
    color: #16223f;
  }
  &.isAiful {
    width: 120px;
    background: #fff7da;
  }
  ${sp`
    height:20px;
    width:80px;
    min-width:70px;
    &.isAiful {
      width: 100px;
      min-width:90px;
    }
    p{
      margin:5px 0;
      font-size:12px
    }
  `}
`;

const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  p {
    font-weight: bold;
    font-size: 20px;
    color: #16223f;
  }
  br {
    display: none;
  }
  &.isCompany {
    margin-left: 0;
  }
  ${spMin`
  text-align:center;
  br{
    display:block;
  }
  P{
    font-size:17px;
  }
  `}
`;

const TextStyle = styled.div`
  width: 550px;
  white-space: pre-wrap;
  p {
    margin-top: 20px;
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
  }
  ${tablet`
    width:90vw;
  `}
`;

const PcImageStyle = styled.div`
  margin-right: 10vw;
  width: 440px;
  ${tablet`
   display:none;
  `}
`;

const SpImageStyle = styled.div`
  display: none;
  ${tablet`
    display: block;
    text-align: center;
    max-width: 546px;
    margin: 50px 0 0 0 ;
  `}
`;

const DevelopedProducts = ({ src, companyName, title, children }: ProductConstants) => {
  const [isAiful, setIsAiful] = useState<boolean>(false);
  const [isCompany, setIsCompany] = useState<boolean>(false);
  useEffect(() => {
    if (!companyName) {
      setIsCompany((prev) => !prev);
    } else if (companyName !== 'アイフル') {
      setIsAiful((prev) => !prev);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <PcImageStyle>
        <Image
          src={src}
          alt="DevelopmentColunm"
          width={150}
          height={150}
          sizes="50vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </PcImageStyle>
      <DetailStyle>
        <HeadLine className={isCompany ? 'isCompany' : ''}>
          {!isCompany && (
            <CompanyNameStyle className={isAiful ? 'isAiful' : ''}>
              <p>{companyName}</p>
            </CompanyNameStyle>
          )}
          <TitleStyle className={isCompany ? 'isCompany' : ''}>
            <p>{title}</p>
          </TitleStyle>
        </HeadLine>
        <SpImageStyle>
          <Image
            src={src}
            alt="DevelopmentColunm"
            width={150}
            height={150}
            sizes="50vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </SpImageStyle>
        <TextStyle>
          <p>{children}</p>
        </TextStyle>
      </DetailStyle>
    </Wrapper>
  );
};

export default DevelopedProducts;
