import styled from 'styled-components';
import { tablet } from '../../styles/breakPoint';

const ListStyle = styled.div`
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
	width:50vw;
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

type Props = {
  ListData: string[];
};

export const ProductList: React.FC<Props> = (props) => {
  const { ListData } = props;
  return (
    <ListStyle>
      <p>使用技術スタック</p>
      <ul>
        {ListData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ListStyle>
  );
};
