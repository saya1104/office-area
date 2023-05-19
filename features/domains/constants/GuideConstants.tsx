import type { ReactNode } from 'react';

export type GuideType = {
  headline: string;
  text: ReactNode;
};

export const GuideText: GuideType[] = [
  {
    headline: '通報相談者',
    text: '当社選考にエントリーした方',
  },
  {
    headline: '受付内容',
    text: '通報にあたっては、以下内容をご連絡ください。ご連絡内容：通報いただける方の氏名、連絡先（TEL番号、メールアドレス等）、事案の内容、調査結果等の連絡要否※匿名でも受付させていただきますが、調査の範囲が限定的となったり、調査結果等のご連絡ができない場合がございますのであらかじめご了承ください。',
  },
  {
    headline: '受付方法',
    text: (
      <>
        メール、郵送にて受け付けをします。以下の宛先へご連絡ください。
        <br />
        eメール：<a href="mailto:compliance@aiful.co.jp">compliance@aiful.co.jp</a>
        <br />
        郵送：〒600-8420 京都市下京区烏丸通五条上る高砂町381-1 アイフル株式会社 リスク統括部
      </>
    ),
  },
  {
    headline: '個人情報の取り扱い',
    text: '相談・通報された方の個人情報および相談・通報内容は、調査および対処にのみ利用するものとし、調査関係者以外には開示いたしません。',
  },
];
