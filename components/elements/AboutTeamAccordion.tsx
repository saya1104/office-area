import React, { useState } from 'react';
import styled from 'styled-components';
import { tablet } from '../../styles/breakPoint';
import type { AccordionType } from '../../features/domains/constants/AccordionConstants';

const Wrapper = styled.div`
  width: 40vw;
  max-width: 580px;
  ${tablet`
    margin-top:50px;
    width:90vw;
    min-width:280px
  `}
`;
const AccordionMenuStyle = styled.div`
  max-width: 580px;
  background: #16223f;
  position: relative;
  ${tablet`
    width:90vw;
    min-width:280px;
  `};
`;
const TitleStyle = styled.div`
  max-width: 140px;
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

const FlexStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubTitleStyle = styled.div`
  margin: 10px 10px 0 0;
  max-width: 580px;
  white-space: pre-wrap;
  p {
    font-size: 25px;
    margin-bottom: 0;
    color: #4ef4ff;
    span {
      display: block;
    }
  }
  ${tablet`
  width:90vw;
  min-width:280px;
    p{
      color:#FF318F
    }
  `}
`;

const PcButtonStyle = styled.div`
  margin: auto 0 7px 0;
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
  ${tablet`
  display: none;
  `}
`;

const SpButtonStyle = styled.div`
  ${tablet`
  position: absolute;
  top:100%; 
  right:0%;
  cursor: pointer;
  content: '';
  width: 13px;
  height: 13px;
  border-top: 2px solid #ff7d53;
  border-right: 2px solid #ff7d53;
  transform: rotate(135deg);
  &.isOpen {
    margin-bottom: 0;
    transform: rotate(315deg);
  }
  `}
`;

const DetailStyle = styled.div`
  white-space: pre-wrap;
  animation-name: According-Animation;
  animation-iteration-count;
  animation-duration: 1s;
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
    ${tablet`
    display:block;
    margin: 10px 0 0 0;
    `}
  }
  @keyframes According-Animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const AboutTeamAccordion = ({ title, subTitle, detail }: AccordionType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickAccordionToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <AccordionMenuStyle>
        <TitleStyle className={isOpen ? 'isOpen' : ''}>
          <p>{title}</p>
        </TitleStyle>
        <FlexStyle>
          <SubTitleStyle>
            <p>{subTitle}</p>
          </SubTitleStyle>
          <PcButtonStyle onClick={onClickAccordionToggle} className={isOpen ? 'isOpen' : ''} />
        </FlexStyle>
        <SpButtonStyle onClick={onClickAccordionToggle} className={isOpen ? 'isOpen' : ''} />
      </AccordionMenuStyle>
      {isOpen && (
        <DetailStyle>
          {detail.map((item, index) => (
            <React.Fragment key={index}>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.text}</p>
            </React.Fragment>
          ))}
        </DetailStyle>
      )}
    </Wrapper>
  );
};

export default AboutTeamAccordion;
