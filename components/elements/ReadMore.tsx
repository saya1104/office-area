import styled from 'styled-components';

const ArrowStyle = styled.a`
  position: relative;
  display: inline-block;
  padding-right: 80px;
  &::before {
    content: '';
    position: absolute;
    width: 182px;
    height: 2px;
	top: 25px;
    background-color: #ff328f;
  }
  &::after {
    content: '';
    position: absolute;
	top: 19px;
	left: 180px;
	border-style: solid;
    border-width: 7px 0 7px 10px;
    border-color: transparent transparent transparent #ff388a;
  }
  }`;

const ReadMoreStyle = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  a {
    color: #ff388a;
    margin-bottom: 0;
  }
`;

const ReadMore = () => {
  return (
    <ReadMoreStyle>
      <ArrowStyle>READ MORE</ArrowStyle>
    </ReadMoreStyle>
  );
};

export default ReadMore;
