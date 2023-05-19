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
  margin-top 50px;
  border: 2px solid;
  border-color: #596480;
  border-radius:50px;
  border-spacing:0;
  th {
    position: relative;
    width: 25%;;
    border-bottom: 2px solid;
    border-color: #596480;
    &.border-none{
      border-bottom:0px;
    }
	p {
		position: absolute;
		color: #ff318f;
		font-size: 20px;
		top: 70px;
		left: 70px;
		margin: 0;
	}
  }
  td {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    li {
      border-spacing: 0;
      border-left: 2px solid;
      border-color: #596480;
      font-weight: 400;
      font-size: 18px;
      line-height: 40px;
      padding-left: 40px;
      margin-bottom:-2px;
    }
    p{
      border-left: 2px solid;
      border-color: #596480;
      padding-left:35px;
      font-weight: 400px;
      font-size: 18px;
      line-height: 30px;
      margin:0;
      margin-bottom:-2px;
    }
    &.td-top {	
	    padding-top:70px;
    }
    &.td-bottom {
	    padding-bottom:70px;
      border-bottom: 2px solid;
      border-color: #596480;
    }
    &.td-last {
	    padding-bottom:70px;
    }
    &.only-td{
      padding:70px 0 70px;
      border-bottom: 2px solid;
      border-color: #596480;
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
          <tr>
            <th>
              <p>昇給・賞与</p>
            </th>

            <td className="only-td">
              <p>昇給年1回、賞与年2回（1回あたり平均3ヵ月程度。6月・12月支給）</p>
            </td>
          </tr>
          <tr>
            <th>
              <p>勤務形態</p>
            </th>

            <td className="only-td">
              <p>
                リモートワーク
                <br />
                スーパーフレックス（コアタイムレス）
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <p>休日</p>
            </th>
            <td className="td-top">
              <p>年間休日120日以上</p>
            </td>
            <td>
              <li>完全週休2日制（休日は土日祝／配属部署によっては休日出社あり）</li>
            </td>
            <td>
              <li>夏季休暇（3日）</li>
            </td>
            <td>
              <li>年末年始（5日）</li>
            </td>
            <td>
              <li>有給（最大年20日/入社3ヶ月後4日、半年後10日 ※半日休暇利用可 ※取得率73.4%）</li>
            </td>
            <td>
              <li>積立有給休暇（最大60日）</li>
            </td>

            <td className="td-bottom">
              <li>育児休暇、看護休暇、介護休暇、結婚休暇、産前産後休暇、慶弔休暇、災害休暇 等</li>
            </td>
          </tr>
          <tr>
            <th className="border-none">
              <p>研修・福利厚生</p>
            </th>
            <td className="td-top">
              <li>
                階層別研修、戦略対応研修、選択型研修、選抜型研修
                <br />
                &emsp;&nbsp;中途採用者は別途入社後2日間の研修あり
              </li>
            </td>
            <td>
              <li>資格取得支援制度：資格受験料と交通費を全額負担</li>
            </td>
            <td>
              <li>学習支援制度：希望者にUdemy・Progate・Schooのライセンスを配布</li>
            </td>
            <td>
              <li>従業員持株会/確定拠出年金/職場積立NISA/財形貯蓄/共済会 等</li>
            </td>
            <td>
              <li>育児休業制度：子が1歳に達するまで（最長2歳まで延長可）</li>
            </td>
            <td>
              <li>育児短時間勤務：小学3年生までの子と同居・養育する場合</li>
            </td>
            <td>
              <li>その他育児関連：時間外・深夜労働等の免除・制限</li>
            </td>
            <td>
              <li>人間ドッグ等補助：「最大35,000円/回」の範囲で補助あり</li>
            </td>
            <td>
              <li>インフルエンザ予防接種補助：本人および被扶養者の費用を負担</li>
            </td>
            <td>
              <li>各種社会保険完備</li>
            </td>
            <td className="td-last">
              <li>書籍購入補助</li>
            </td>
          </tr>
        </tbody>
      </TableStyle>
    </Wrapper>
  );
};

export default Table;
