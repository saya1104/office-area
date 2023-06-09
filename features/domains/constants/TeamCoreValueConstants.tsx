import type { ReactNode } from 'react';

export type TeamCoreValueType = {
  title?: ReactNode;
  subtitle: ReactNode;
  text: ReactNode;
  src: string;
  alt: string;
};

export const TeamCoreValueConstants: TeamCoreValueType[] = [
  {
    title: 'TEAM CORE VALUES',
    subtitle: (
      <>
        アイフルエンジニア
        <br className="br-sp" />
        チームの特徴
      </>
    ),
    text: (
      <p>
        お客様への価値を追求するためには「誰もが率直な意見を言える環境づくり
        (心理的安全性の担保)」が最も重要だと考えています。
        <br />
        ただし、それは単に居心地のよい職場や緊張感のない関係性などでは決してなく「お互いを尊重しながらも、全員が目指すべきゴールに向かって建設的な議論ができるチーム像」と捉えています。
        <br />
        <br />
        こうした環境づくりの一環として「チームコアバリュー」をはじめ「リーダークラスのメンバーやプロジェクトごとの振り返りミーティング
        (KPT)」や失敗から教訓を得る「ポストモーテム」などの特徴的な取り組みがあります。
      </p>
    ),
    src: '/assets/TeamCoreValuePerson.png',
    alt: 'TeamCoreValuePerson',
  },
  {
    subtitle: <>チームの目指す姿</>,
    text: (
      <p>
        「お客様の暮らしや仕事を変える、素晴らしいサービスを提供する」をテーマに掲げ、実現するために、守るべき大切な価値観や行動指針を「チームコアバリュー」として定義しています。
        <br />
        チームコアバリューは、心理的安全性を土台にしつつ、それぞれの要素がお互いを補完し合うような位置付けを行っています。
        お客様への提供価値を最大化するためには、いずれの要素も欠かすことなく、常に切磋琢磨していくことが求められます。
      </p>
    ),
    src: '/assets/TeamCoreValuesImage.svg',
    alt: 'TEAM CORE VALUES',
  },
];
