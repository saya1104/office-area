import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import type { ProductConstants } from '../../features/domains/constants/ProductConstants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 100px 0;
`;

const DetailStyle = styled.div``;

const HeadLine = styled.div`
  display: flex;
  align-items: center;
  background: #b7c4e5;
  width: 450px;
  height: 65px;
  &.isNotCompany {
    width: 250px;
    justify-content: center;
  }
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
  &.isNotCompany {
    margin-left: 0;
  }
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
`;

const PcImageStyle = styled.div`
  margin-right: 10vw;
  width: 440px;
`;

const DevelopmentColumn = ({ src, companyName, title, children }: ProductConstants) => {
  const [isAiful, setisAiful] = useState(false);
  const [isNotCompany, setisNotCompany] = useState(false);
  useEffect(() => {
    if (!companyName) {
      setisNotCompany(!isNotCompany);
    } else if (companyName !== 'アイフル') {
      setisAiful(!isAiful);
    }
  }, [companyName, isAiful, isNotCompany]);
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
        <HeadLine className={isNotCompany ? 'isNotCompany' : ''}>
          {!isNotCompany && (
            <CompanyNameStyle className={isAiful ? 'isAiful' : ''}>
              <p>{companyName}</p>
            </CompanyNameStyle>
          )}
          <TitleStyle className={isNotCompany ? 'isNotCompany' : ''}>
            <p>{title}</p>
          </TitleStyle>
        </HeadLine>
        <TextStyle>
          <p>{children}</p>
        </TextStyle>
      </DetailStyle>
    </Wrapper>
  );
};

export default DevelopmentColumn;
