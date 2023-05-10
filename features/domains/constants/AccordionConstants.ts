export type AccordionType = {
  title: string;
  subTitle: string;
  detailTitle?: string[] | undefined;
  detailSubTitle?: string[] | undefined;
  detail: string[];
};

export const visionData: AccordionType[] = [
  {
    title: 'VISION',
    subTitle: '私たちが目指す社会\nFor Colorful Life. 自分の色が輝く社会に',
    detail: [
      '私たちの社会の役割を、お客様の「自分の色が輝く社会」を実現することと定義することで、ストレスのない社会を目指します。\nアイフルグループがお客様を輝かせるのではなく、お客様に負の感情が無くなった結果として、輝いていただく。そこに少しでもアプローチできるのが私たちの商品と定義し、その結果として「自分の色が輝く社会」を実現します。自分の色が自然と輝きだす社会の一助となれれば幸いです。',
    ],
  },
];

export const missionData: AccordionType[] = [
  {
    title: 'MISSION',
    subTitle: 'VISIONを実現するために私たちがやるべきこと',
    detailTitle: ['Go beyond', 'Step forward', 'Be unique'],
    detailSubTitle: ['お客様の期待を超えよう', 'より良い明日を作ろう', '個性を認めあおう'],
    detail: [
      'サービス業なら普遍的に重要なことであり、お客様に接する際には常に意識をして行動すべき。\nお客様を理解し、お客様の立場で考え、先回りしてご提案することでお客様の期待を越え続ける。',
      '日々、今日より明日を 良くする努力を続けていくことで、 業務改善、 またはお客様へのサービスもさらに進化していく。\nそしてそれを社会に還元することで、より多くの人が幸せになるための一助となる。',
      '個性は発揮するものではなく、認め合うもの。個性が無い人が駄目なのではなく、個性を認め合うという気持ちが大切であり、そうすることで、会社全体のパフォーマンスを向上させる 。',
    ],
  },
];

export const valueData: AccordionType[] = [
  {
    title: 'VALUE',
    subTitle: 'MISSIONを達成するために持つべき価値観',
    detailTitle: ['Be honest', 'Try Harder', 'Build Relationship', 'Be grateful'],
    detailSubTitle: ['誠実', '努力', '信頼', '感恩'],
    detail: [
      '仲間やルールを心の中で裏切らないこと。',
      '人により基準は異なるが、肉体的なことでは無く、結果を考えながら自身の持てる力を100%以上出すこと。',
      '信用は経済行為で積み重ねられるが、信頼は心と心が通う必要があるので、心の中でまず相手を信じること。',
      '立場は関係なく、目下の人やお世話になった方などあらゆる相手に\n感謝・敬意を払うこと。',
    ],
  },
];