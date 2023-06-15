import styled from 'styled-components';
import { sp } from '../../styles/breakPoint';

const FollowBannerStyle = styled.button<Props>`
  opacity: ${({ isBottom }) => (isBottom ? '0' : '')};
  pointer-events: ${({ isBottom }) => (isBottom ? 'none' : '')};
  transition: opacity 0.5s;
  position: fixed;
  z-index: 30;
  top: 70vh;
  right: 5px;
  display: inline-grid;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  text-align: center;
  align-content: center;
  background: linear-gradient(180deg, #ff398a 0%, #ff705d 100%);
  transform: rotate(-60deg);
  margin-right: 35px;
  cursor: pointer;
  border: none;
  ${sp`
    top: 75vh; 
    width: 110px;
    height: 110px;
    margin-right:10px
  `}
`;

const ArrowStyle = styled.p`
  color: #16223f;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  transform: rotate(60deg);
  position: relative;
  margin: 0 auto;
  padding-bottom: 10px;
  text-align: center;
  width: fit-content;
  border-bottom: 2px solid;

  &::before {
    content: '';
    margin: auto;
    position: absolute;
    right: -0.5px;
    bottom: -6px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 9px solid #16223f;
  }
  ${sp`
		font-size:12px;
		line-height: 18px;
	`}
`;

type Props = {
  isBottom: boolean;
};

export const FollowBanner: React.FC<Props> = ({ isBottom }) => {
  return (
    <FollowBannerStyle
      onClick={() => window.open('https://hrmos.co/pages/aifulgroup/jobs?category=1825093156045836289')}
      isBottom={isBottom}
    >
      <ArrowStyle>
        キャリア採用 <br />
        ENTRY
      </ArrowStyle>
    </FollowBannerStyle>
  );
};
