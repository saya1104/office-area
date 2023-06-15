import React from 'react';
import styled from 'styled-components';
import { sp, tablet } from '../../styles/breakPoint';

const ListStyle = styled.div`
  margin: 0 auto;
  width: 70vw;
  h3 {
    font-size: 40px;
    font-weight: 400;
    margin: 0;
    &.isUndefined {
      display: none;
    }
  }
  h4 {
    font-size: 25px;
    color: #4ef4ff;
    margin: 50px 0 20px;
    &.isUndefined {
      display: none;
    }
  }

  h5 {
    font-size: 25px;
    margin: 80px 0 20px;
    position: relative;
    border-left: inset 10px #ff318f;
    padding-left: 10px;
    &.isUndefined {
      display: none;
    }
  }
  h6 {
    font-size: 25px;
    margin: 20px 0 10px;
    &.isUndefined {
      display: none;
    }
  }
  p {
    margin: 0;
    font-size: 25px;
    font-weight: 300;
    line-height: 35px;
    &.isUndefined {
      display: none;
    }
  }
  ${sp`
   width: 92vw;
   p{
    word-break: break-all;
   }
  `}
`;

const PcStyle = styled.div`
  ${tablet`
  display: none;
  `};
`;
const SpStyle = styled.div`
  display: none;
  ${tablet`
  display:block;
  }
  `};
`;
const SpTextStyle = styled.div`
  display: none;
  ${tablet`
  display:block;
  position: relative;
  &.isOpen{
    &::before{
    content: "";
    position: absolute;
    border-style: none;
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 100px;
    background: linear-gradient(rgba(89,100,128,0) 0, #596480 100px);   
    }
  }
  }
  `};
`;

const ReadMoreStyle = styled.div`
  display: none;
  ${tablet`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 30px auto;
    justify-content: space-evenly;
    border-radius: 50px;
    border: 0.15rem solid #ffffff;
    width:  210px;
    height: 40px;
    p{
      margin:0;
      color:#ffffff;
      font-size:20px;
    }
  `}
`;

const ButtonStyle = styled.div`
  display: none;
  ${tablet`
    margin-bottom:5px ;
    display:block;
    content: '';
    width: 13px; /* くの字を山なりに見た時、左側の長さ */
    height: 13px; /* くの字を山なりに見た時、右側の長さ */
    border: 2px solid #ffffff;
    border-bottom-width: 0;
    border-left-width: 0;
    transform: rotate(135deg);
    &.isOpen {
      margin: 5px 0 0 0 ;
      transform: rotate(315deg);
    }
  `}
`;

type Props = {
  ListData: {
    title?: string;
    subtitle?: string;
    category?: string;
    text?: string;
  }[];
  isOpenData: {
    title?: string;
    subtitle?: string;
    category?: string;
    text?: string;
  }[];
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const ProductLists: React.FC<Props> = (props) => {
  const { ListData, isOpenData, isOpen, onClick } = props;
  return (
    <>
      <ListStyle>
        <PcStyle>
          <h3>使用技術スタック</h3>

          {ListData.map((item, index) => (
            <React.Fragment key={index}>
              <h4 className={item.title === undefined ? 'isUndefined' : ''}>{item?.title}</h4>
              <h5 className={item.subtitle === undefined ? 'isUndefined' : ''}>{item?.subtitle}</h5>
              <h6 className={item.category === undefined ? 'isUndefined' : ''}>{item?.category}</h6>
              <p className={item.text === undefined ? 'isUndefined' : ''}>{item?.text}</p>
            </React.Fragment>
          ))}
          {isOpenData.map((item, index) => (
            <React.Fragment key={index}>
              <h4 className={item.title === undefined ? 'isUndefined' : ''}>{item?.title}</h4>
              <h5 className={item.subtitle === undefined ? 'isUndefined' : ''}>{item?.subtitle}</h5>
              <h6 className={item.category === undefined ? 'isUndefined' : ''}>{item?.category}</h6>
              <p className={item.text === undefined ? 'isUndefined' : ''}>{item?.text}</p>
            </React.Fragment>
          ))}
        </PcStyle>
        <SpStyle>
          <SpTextStyle className={isOpen ? '' : 'isOpen'}>
            <h3>使用技術スタック</h3>
            {ListData.map((item, index) => (
              <React.Fragment key={index}>
                <h4 className={item.title === undefined ? 'isUndefined' : ''}>{item?.title}</h4>
                <h5 className={item.subtitle === undefined ? 'isUndefined' : ''}>{item?.subtitle}</h5>
                <h6 className={item.category === undefined ? 'isUndefined' : ''}>{item?.category}</h6>
                <p className={item.text === undefined ? 'isUndefined' : ''}>{item?.text}</p>
              </React.Fragment>
            ))}
            {isOpen && (
              <>
                {isOpenData.map((item, index) => (
                  <React.Fragment key={index}>
                    <h4 className={item.title === undefined ? 'isUndefined' : ''}>{item?.title}</h4>
                    <h5 className={item.subtitle === undefined ? 'isUndefined' : ''}>{item?.subtitle}</h5>
                    <h6 className={item.category === undefined ? 'isUndefined' : ''}>{item?.category}</h6>
                    <p className={item.text === undefined ? 'isUndefined' : ''}>{item?.text}</p>
                  </React.Fragment>
                ))}
              </>
            )}
          </SpTextStyle>
          <ReadMoreStyle onClick={onClick}>
            <p>READ MORE</p>
            <ButtonStyle className={isOpen ? 'isOpen' : ''} />
          </ReadMoreStyle>
        </SpStyle>
      </ListStyle>
    </>
  );
};
