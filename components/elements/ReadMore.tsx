import styled from 'styled-components';

const ArrowStyle = styled.a`
  position: relative;
  display: inline-block;
  padding-right: 80px;
  cursor: pointer;
  &::before {
    animation: arrowMove 1s ease-in-out infinite;
    content: '';
    position: absolute;
    width: 182px;
    height: 2px;
    top: 25px;
    margin-right: 5px;
    background-color: #ff328f;
  }
  &::after {
    animation: arrowMove 1s ease-in-out infinite;
    content: '';
    position: absolute;
    top: 19px;
    border-style: solid;
    border-width: 7px 0 7px 10px;
    border-color: transparent transparent transparent #ff388a;
  }
  @keyframes arrowMove {
    0% {
      right: 1%;
    }
    50% {
      right: 3%;
    }
    100% {
      right: 1%;
    }
  }
`;

const ReadMoreStyle = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  a {
    color: #ff388a;
    margin-bottom: 0;
  }
`;

type Props = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const ReadMore: React.FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <ReadMoreStyle onClick={onClick}>
      <ArrowStyle>READ MORE</ArrowStyle>
    </ReadMoreStyle>
  );
};

export default ReadMore;
