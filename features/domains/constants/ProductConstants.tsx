import type { ReactNode } from 'react';

export type ProductConstants = {
  src: string;
  companyName: ReactNode;
  title: ReactNode;
  children: ReactNode;
};

export const productData: ProductConstants[] = [
  {
    src: 'assets/sp_app.svg',
    companyName: 'アイフル',
    title: 'スマホアプリ',
    children:
      '24時間365日、スマートフォン1台あれば融資申込や返済などをワンストップで行える消費者向けプロダクト。\n顧客価値向上のために、複数部門にまたがるメンバーとのコミュニケーションが日々活発に行われています。',
  },
  {
    src: 'assets/Web_App_Form.png',
    companyName: 'アイフル',
    title: '融資受付用WEBフォーム',
    children:
      'スマートフォンユーザー向け融資申込WEB フォーム。\nアイフル独自のスコアリングAPIと連動し、最短経路での融資をサポートする消費者向けプロダクト。',
  },
  {
    src: 'assets/Loan_Application.png',
    companyName: 'アイフル',
    title: '融資申込ステータス管理システム',
    children:
      'コールセンターの業務効率化を目的とした顧客ステータス管理システム。\n前述の「スマホ向け融資申込 WEB フォーム」での受付情報をもとに融資申込から審査までに生じるお客様とのやり取りを一元管理できる社内向けプロダクト。',
  },
  {
    src: 'assets/Lease_Back.png',
    companyName: 'グループ会社',
    title: 'リースバック案件管理システム',
    children:
      '「リースバック」と呼ばれる不動産サービスを提供するグループ会社向けの案件管理システム。\nサービス申込から成約にかかわる業務 (案件のステータス管理から社内決裁まで) を一元管理できる社内向けプロダクト。',
  },
  {
    src: 'assets/Call_Log.png',
    companyName: 'アイフル',
    title: '通話履歴全文検索システム',
    children:
      'コールセンターのオペレーション改善を目的とした全文検索システム。\nAmazon Connect経由で行われたお客様との通話記録や音声データの検索および参照が可能な社内向けプロダクト。\nAmazon Connectと統合することで音声通話の文字起こしや感情分析の結果を閲覧できる。',
  },
  {
    src: 'assets/Web_Contents.png',
    companyName: 'アイフル',
    title: 'アイフル Web コンテンツ (HP)',
    children:
      'アイフルWebコンテンツ（HP）の説明。アイフルWebコンテンツ（HP）の説明。アイフルWebコンテンツ（HP）の説明。アイフルWebコンテンツ（HP）の説明。アイフルWebコンテンツ（HP）の説明。アイフルWebコンテンツ（HP）の説明。アイフルWebコンテンツ（HP）の説明。',
  },
];
