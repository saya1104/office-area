import styled from 'styled-components';
import { sp, tablet } from '../../../styles/breakPoint';
import { SubTitle } from '../../elements/SubTitle';

const Wrapper = styled.div`
  margin: 0 8vw;
  ${sp`
    margin:0 3vw;
  `};
`;

const TableStyle = styled.table`
  margin-top 50px;
  width: 84vw;
  border: 2px solid;
  border-color: #596480;
  border-radius:50px;
  border-spacing:0;
  th {
    position: relative;
    width: 25%;
    border-bottom: 2px solid;
    border-color: #596480;
    &.border-none{
      border-bottom:0px;
    }
    ${tablet`
    width:70%;
    display:block;
    border:0;
    `}
    p {
      position: absolute;
      color: #ff318f;
      font-size: 20px;
      top: 70px;
      left: 70px;
      margin: 0;
      ${tablet`
      display:block;
      top:20px;
      left:30px;
      `}
	  }
  }
  td {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    ul{
      border-spacing: 0;
      border-left: 2px solid #596480;
      margin:0 0 -2px;
      ${tablet`
        border:0;
      `}
    }
    li {
      font-weight: 400;
      font-size: 18px;
      line-height: 40px;
      padding-left: 10px;
      ${tablet`
        padding:0 10px;
        margin-left:0.5em;
      `}
    }
    p{
      border-left: 2px solid #596480;
      padding:0 20px;
      font-weight: 400px;
      font-size: 18px;
      line-height: 30px;
      margin:0 0 -2px 0;
      ${tablet`
        border:0;
      `}
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
      border-bottom: 2px solid #596480;
    }
  }
  ${sp`
	width:94vw;
	`} ;
`;

const Table = () => {
  return (
    <Wrapper>
      <SubTitle>募集要項</SubTitle>
      <TableStyle>
        <tbody>
          <tr>
            <th>
              <p>諸手当</p>
            </th>
            <td className="td-top">
              <ul>
                <li>時間外勤務手当：1分単位で全額支給</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>通勤手当：月51,500円まで全額支給</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  住宅手当：持家の場合 月25,000円支給賃貸の場合
                  <br />
                  借上寮（自己負担：9,000円）
                  <br />
                  借上社宅（自己負担：賃料の28%~50%）
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>子女教育手当：1人につき月8,000円</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>転勤手当：100,000円（単身者50% / 引越費用会社全額負担）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>単身赴任手当：月42,000円、別途自宅までの交通費を全額負担（1回 / 月）</li>
              </ul>
            </td>
            <td className="td-bottom">
              <ul>
                <li>リファラル採用報奨金（1名につき最大30万円）</li>
              </ul>
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
              <p>休日・休暇</p>
            </th>
            <td className="td-top">
              <p>年間休日120日以上</p>
            </td>
            <td>
              <ul>
                <li>完全週休2日制（休日は土日祝）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>リフレッシュ休暇（5日）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>年末年始（12/30～1/3）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>有給休暇（最大年20日/入社直後10日 ※半日利用可 ※取得率73.4%）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>積立有給休暇（最大60日）</li>
              </ul>
            </td>

            <td className="td-bottom">
              <ul>
                <li>育児休暇、看護休暇、介護休暇、結婚休暇、産前産後休暇、慶弔休暇、災害休暇 等</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th className="border-none">
              <p>研修・福利厚生</p>
            </th>
            <td className="td-top">
              <ul>
                <li>
                  階層別研修、戦略対応研修、選択型研修、選抜型研修
                  <br />
                  中途採用者は別途入社後2日間の研修あり
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>資格取得支援制度：資格受験料と交通費を全額負担</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>学習支援制度：会社が認めた場合、Udemy・Progate・Schoo 等のライセンスを付与</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>従業員持株会/確定拠出年金/職場積立NISA/財形貯蓄/共済会 等</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>育児休業制度：子が1歳に達するまで（最長2歳まで延長可）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>育児短時間勤務：小学6年生までの子と同居・養育する場合</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>その他育児関連：時間外・深夜労働等の免除・制限</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>人間ドッグ等補助：「最大35,000円/回」の範囲で補助あり</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>インフルエンザ予防接種補助：本人および被扶養者の費用を負担</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>各種社会保険完備</li>
              </ul>
            </td>
            <td className="td-last">
              <ul>
                <li>書籍購入補助</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </TableStyle>
    </Wrapper>
  );
};

export default Table;
