import { useState } from 'react';
import styled from 'styled-components';
import type { AccordionType } from '../../features/domains/constants/AccordionConstants';

const Wrapper = styled.div`
  width: 580px;
`;
const AccordionMeue = styled.div`
  width: 580px;
  background: #16223f;
`;
const TitleStyle = styled.div`
  width: 140px;
  height: 40px;
  background: #4ef4ff;
  position: relative;
  margin-top:50px;
  .&isOpen{
	margin-top:30px;
  }
  p {
	font-weight:900;
	margin:0;
    position: absolute;
    top: 50%;
    left: 50%;
	transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);
    color: #16223f;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubTitleStyle = styled.div`
  margin-top: 10px;
  margin-right:0
  width: 540px;
  white-space: pre-wrap;
  p {
	font-size:25px;
	margin-bottom:0;
    color: #4ef4ff;
  }
`;

const Button = styled.div`
  margin-top: auto;
  margin-bottom: 7px;
  cursor: pointer;
  content: '';
  width: 13px; /* くの字を山なりに見た時、左側の長さ */
  height: 13px; /* くの字を山なりに見た時、右側の長さ */
  border-top: 2px solid #ff7d53; /* くの字を山なりに見た時、左側の太さと色 */
  border-right: 2px solid #ff7d53; /* くの字を山なりに見た時、右側の太さと色 */
  transform: rotate(135deg);
  &.isOpen {
    margin-bottom: 0;
    transform: rotate(315deg);
  }
`;

const DeatilStyle = styled.div`
  white-space: pre-wrap;
  p {
    line-height: 1.8em;
  }
  h3 {
    display: inline-block;
    font-weight: 200;
    font-size: 25px;
    color: #b7c4e5;
    margin-bottom: 0;
  }

  h4 {
    display: inline-block;
    margin: 25px 0 0 30px;
    font-weight: 200;
    font-size: 20px;
    color: #b7c4e5;
  }
`;

const AboutTeamAccordion = ({ title, subTitle, detail, detailTitle, detailSubTitle }: AccordionType) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickAccordionToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <AccordionMeue>
        <TitleStyle className={isOpen ? 'isOpen' : ''}>
          <p>{title}</p>
        </TitleStyle>
        <Flex>
          <SubTitleStyle>
            <p>{subTitle}</p>
          </SubTitleStyle>
          <Button onClick={onClickAccordionToggle} className={isOpen ? 'isOpen' : ''} />
        </Flex>
      </AccordionMeue>
      {isOpen && detailTitle && detailSubTitle && !detailSubTitle[3] && (
        <DeatilStyle>
          <h3>{detailTitle[0]} </h3>
          <h4>{detailSubTitle[0]}</h4>
          <p>{detail[0]}</p>
          <h3>{detailTitle[1]}</h3>
          <h4>{detailSubTitle[1]}</h4>
          <p>{detail[1]}</p>
          <h3>{detailTitle[2]}</h3>
          <h4>{detailSubTitle[2]}</h4>
          <p>{detail[2]}</p>
        </DeatilStyle>
      )}
      {isOpen && detailTitle && detailSubTitle && detailSubTitle[3] && (
        <DeatilStyle>
          <h3>{detailTitle[0]} </h3>
          <h4>{detailSubTitle[0]}</h4>
          <p>{detail[0]}</p>
          <h3>{detailTitle[1]}</h3>
          <h4>{detailSubTitle[1]}</h4>
          <p>{detail[1]}</p>
          <h3>{detailTitle[2]}</h3>
          <h4>{detailSubTitle[2]}</h4>
          <p>{detail[2]}</p>
          <h3>{detailTitle[3]}</h3>
          <h4>{detailSubTitle[3]}</h4>
          <p>{detail[3]}</p>
        </DeatilStyle>
      )}
      {isOpen && !detailTitle && (
        <DeatilStyle>
          <p>{detail[0]}</p>
        </DeatilStyle>
      )}
    </Wrapper>
  );
};

export default AboutTeamAccordion;
