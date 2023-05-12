import styled from 'styled-components';
import { sp } from '../../styles/breakPoint';

const FollowBannerStyle = styled.button`
  position: fixed;
  z-index: 30;
  top: 70vh;
  right: 5px;
  display: inline-grid;
  color: #fff;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  text-align: center;
  align-content: center;
  background: linear-gradient(180deg, #ff398a 0%, #ff705d 100%);
  transform: rotate(-60deg);
  margin-right: 35px;
  ${sp`
	 top: 75vh;
	width: 110px;
	height: 110px;
	margin-right:10px
  `}
  }
  span {
    transform: rotate(60deg);
    position: relative;
    &::before {
      content: '';
      width: 130px;
      height: 3px;
      position: absolute;
      top: 20px;
      right: 80px;
      background-color: #16223f;
    }
    &::after {
      content: '';
      position: absolute;
      top: 14.5px;
      left: 115px;
      border-style: solid;
      border-width: 7px 0 7px 10px;
      border-color: transparent transparent transparent #16223f;
    }
  }
`;

const ArrowStyle = styled.p`
  color: #16223f;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  transform: rotate(60deg);
  position: relative;
  margin-top: 0px;
  margin-bottom: 0px;
  &::before {
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    bottom: -80px;
    left: 130px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 9px solid #16223f;
  }

  &::after {
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    bottom: -80px;
    left: 25px;
    width: 105px; /* 棒の長さ */
    height: 2px; /* 棒の太さ */
    background: #16223f; /* 棒の色 */
  }
  ${sp`
		font-size:12px;
		line-height: 18px;
    &::before{
      bottom: -60px;
      left: 70px;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-left: 8px solid #16223F;
    }
    &::after{
      bottom:-60px;
      left:15px;
      width:55px;
      height: 1.5px;
    }
	`}
`;

export const FollowBanner = () => {
  return (
    <FollowBannerStyle>
      <ArrowStyle>
        キャリア採用 <br />
        ENTRY
      </ArrowStyle>
    </FollowBannerStyle>
  );
};
