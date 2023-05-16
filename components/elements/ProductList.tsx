import styled from 'styled-components';
import { tablet } from '../../styles/breakPoint';

const PcListStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);
  width:70vw;
  height:520px;
  p{
	font-size:40px;
	margin:0 0 50px 0 ;
  }
  ul{
	margin:0 auto;
	height:400px;
	width:70vw;
	display: flex;
  flex-flow: column wrap;
  }
  li{
	 line-height: 30px;
	 width:200px;
  }
  ${tablet`
  	display:none			
  `}
`;

const SpListStyle = styled.div`
  display: none;
  ${tablet`
  display:block;
  position: absolute;
  width:90vw;
  top: 80px;
  margin:0 5vw;
  ul{
	display: flex;
  flex-flow: column wrap;
  }
  p{
	  font-size:30px;
	  margin:0 0 20px 0 ;
  }
  li{
	 line-height: 40px;
	 width:300px;
   font-size:25px;
  }
  `};
`;

const ReadMoreStyle = styled.div`
  display: none;
  ${tablet`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin:0 auto;
    align-items: center;
    border-radius: 50px;
    border: 0.15rem solid #ffffff;
    width:210px;
    height:40px;
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
    border-top: 2px solid #ffffff; /* くの字を山なりに見た時、左側の太さと色 */
    border-right: 2px solid #ffffff; /* くの字を山なりに見た時、右側の太さと色 */
    transform: rotate(135deg);
    &.isOpen {
      margin:5px 0 0 0 ;
      transform: rotate(315deg);
    }
  `}
`;

type Props = {
  ListData: string[];
  isOpenData: string[];
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const ProductList: React.FC<Props> = (props) => {
  const { ListData, isOpenData, isOpen, onClick } = props;
  return (
    <>
      <PcListStyle>
        <p>使用技術スタック</p>
        <ul>
          {ListData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {isOpenData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </PcListStyle>
      <SpListStyle>
        <p>使用技術スタック</p>
        <ul>
          {ListData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {isOpen && (
            <>
              {isOpenData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </>
          )}
        </ul>
        <ReadMoreStyle onClick={onClick}>
          <p>READ MORE</p>
          <ButtonStyle className={isOpen ? 'isOpen' : ''} />
        </ReadMoreStyle>
      </SpListStyle>
    </>
  );
};
