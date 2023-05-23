import type { ReactNode } from 'react';

export type StepBannerType = {
  title: ReactNode;
  headline: string;
  text?: ReactNode;
};

export const StepBannerData: StepBannerType[] = [
  {
    title: <span>STEP 01</span>,
    headline: 'ご応募',
    text: '当サイトのエントリーフォームからご応募ください。',
  },
  {
    title: <span>STEP 02</span>,
    headline: '書類選考',
  },
  {
    title: <span>STEP 03</span>,
    headline: '適正検査',
  },
  {
    title: <span>STEP 04</span>,
    headline: '面接(１〜２回)',
  },
  {
    title: <span>STEP 05</span>,
    headline: '内定',
    text: '面接回数や内容は、場合によって変更となる場合があります。',
  },
];
