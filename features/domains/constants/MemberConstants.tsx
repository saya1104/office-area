export type Membertypes = {
  imageSrc: string;
  imageAlt: string;
  message1: string;
  message2: string;
  name: string;
  hireYear: string;
  position: string;
  href: string;
};

export const MemberConstants: Membertypes[] = [
  {
    imageSrc: '/assets/InterviewOta.png',
    imageAlt: 'Y.O/2021年入社 AWSチーム チーフエンジニア',
    message1: 'グループデジタル推進部',
    message2: 'デジタル推進 2課',
    name: 'Y.O',
    hireYear: '2021年 中途入社',
    position: 'チーフエンジニア 兼 AWS テックリード',
    href: 'otayuji',
  },
  {
    imageSrc: '/assets/InterviewWang.png',
    imageAlt: 'C.W/2022年入社 フロントエンドエンジニア',
    message1: 'グループデジタル推進部',
    message2: 'デジタル推進 2課',
    name: 'C.W',
    hireYear: '2022年 中途入社',
    position: 'フロントエンドエンジニア',
    href: 'chiayenwang',
  },
  {
    imageSrc: '/assets/InterviewShimizu.png',
    imageAlt: 'T.M/20XX年入社 iOSアプリエンジニア',
    message1: 'グループデジタル推進部',
    message2: 'デジタル推進 2課',
    name: 'S.S',
    hireYear: '2023年 中途入社',
    position: 'バックエンドエンジニア 兼 AWSエンジニア',
    href: 'shimizusho',
  },
  {
    imageSrc: '/assets/InterviewOu.png',
    imageAlt: 'K.O/2022年入社 バックエンドエンジニア',
    message1: 'グループデジタル推進部',
    message2: 'デジタル推進 3課',
    name: 'K.O',
    hireYear: '2022年 中途入社',
    position: 'バックエンドエンジニア',
    href: 'oukinhou',
  },
];
