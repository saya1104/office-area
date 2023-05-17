import styled from 'styled-components';
import { sp } from '../../../styles/breakPoint';

const Wrapper = styled.div`
  margin: 0 8vw;
  ${sp`
    margin:0 3vw;
  `};
`;

const TableStyle = styled.table`
  width: 84vw;
  margin-top 50px;:
  border-collapse: collapse;
  border: 2px solid;
  border-color: #596480;
  border-radius:50px;
  th {
	position: relative;
	width: 25%;
	p {
		position: absolute;
		color: #ff318f;
		font-size: 20px;
		top: 70px;
		left: 70px;
		margin: 0;
	}
  }

  tr {
  }
  td {
    padding-left: 40px;
	border-collapse: collapse;
	border-left:2px solid;
	border-color: #596480;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    li {
      font-weight: 400px;
      font-size: 18px;
      line-height: 30px;
    }
    &.td-top {	
      margin-top: 40px;
	  padding-top:30px;
    }
    &.td-bottom {
      margin-bottom: 40px;
	  padding-bottom:30px;
    }
  }
  ${sp`
	width:94vw;
	`} ;
`;

const Table = () => {
  return (
    <Wrapper>
      <TableStyle>
        <tbody>
          <tr>
            <th>
              <p>諸手当</p>
            </th>
            <td className="td-top">
              <li>リファラル採用報奨金（1名につき最大30万円/条件有）</li>
            </td>
            <td>
              <li>
                住宅手当：持家の場合 月25,000円支給
                <br />
                &emsp;&nbsp;賃貸の場合上寮（自己負担:9,000円）、借上社宅（自己負担:賃料の28%~50%）（条件有）
              </li>
            </td>
            <td>
              <li>通勤手当：月51,500円まで全額支給</li>
            </td>
            <td>
              <li>時間外勤務手当：1分単位で全額支給</li>
            </td>
            <td>
              <li>子女教育手当：1人につき月8,000円</li>
            </td>
            <td>
              <li>転勤手当：100,000円（単身者50%/引越費用会社全額負担）</li>
            </td>
            <td>
              <li>単身赴任手当：月42,000円</li>
            </td>
            <td className="td-bottom">
              <li>帰宅手当：毎月1回自宅まで交通費を全額負担（単身者のみ）</li>
            </td>
          </tr>
        </tbody>
      </TableStyle>
    </Wrapper>
  );
};

export default Table;
