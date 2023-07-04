import Link from 'next/link';
import styled from 'styled-components';
import { sp, tablet } from '../../../styles/breakPoint';
import EachPageTop from '../../elements/EachPageTop';

const TopButtonStyle = styled.div`
  padding: 13px 0;
  width: 500px;
  margin: 50px 0 0 5%;
  color: #ff388a;
  border: solid 3px #ff388a;
  border-radius: 50px;
  cursor: pointer;
  ${tablet`
   margin: 50px 0 0 8%;
  `}
  ${sp`
  width: 300px;
  margin: 0 auto;
  `}
  p {
    font-size: 25px;
    font-weight: 700;
    color: inherit;
    text-align: center;
    text-decoration: none;
    margin: 0 auto;
  }
`;

const ErrorTop = () => {
  return (
    <>
      <EachPageTop
        src="/assets/ErrorImage.png"
        title={`お探しのページは\nみつかりませんでした`}
        subTitle="Sorry... 404 Page Not Found"
      >
        ページが見つかりませんでした。
        <br />
        URLが変更・削除されたか、現在ご利用できない可能性がございます。
      </EachPageTop>
      <Link href={'/'} style={{ textDecoration: 'none' }}>
        <TopButtonStyle>
          <p>Topへ戻る</p>
        </TopButtonStyle>
      </Link>
    </>
  );
};

export default ErrorTop;
