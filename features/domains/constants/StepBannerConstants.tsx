import type { ReactNode } from 'react';

export type StepBannerType = {
  title: ReactNode;
  headline: string;
  text?: ReactNode;
};

export const StepBannerData: StepBannerType[] = [
  {
    title: <>STEP&nbsp;01</>,
    headline: 'ご応募',
    text: '当サイトのエントリーフォームからご応募ください。',
  },
  {
    title: <>STEP&nbsp;02</>,
    headline: '書類選考',
  },
  {
    title: <>STEP&nbsp;03</>,
    headline: '適正検査',
  },
  {
    title: <>STEP&nbsp;04</>,
    headline: '面接(１〜２回)',
  },
  {
    title: <>STEP&nbsp;05</>,
    headline: '内定',
    text: '面接回数や内容は、場合によって変更となる場合があります。',
  },
];
