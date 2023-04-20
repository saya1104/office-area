import styled from 'styled-components';

const Arrow = styled.span`
  position: relative;
  display: inline-block;
  &::before {
    content: '';
    position: absolute;
    width: 182px;
    height: 2px;
	bottom: 15px;
    background-color: #ff328f;
  }
  &::after {
    content: '';
    position: absolute;
	bottom: 9px;
	left: 180px;
	border-style: solid;
    border-width: 7px 0 7px 10px;
    border-color: transparent transparent transparent #ff388a;
  }
  }`;

const ReadMeStyle = styled.div`
  position: absolute;
  right: 80px;
  p {
    color: #ff388a;
    margin-bottom: 0;
  }
`;
const ArrowStyle = styled.div``;

const ReadMore = () => {
  return (
    <ReadMeStyle>
      <p>READ MORE</p>
      <ArrowStyle>
        <Arrow />
      </ArrowStyle>
    </ReadMeStyle>
  );
};

export default ReadMore;
