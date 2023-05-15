
export type AccordionType = {
  title: string;
  subTitle: string;
  detail:
    {
      title?:string 
      subtitle?:string,
      text:string 
    }[]
  
};

export const accodionData: AccordionType[] = [
  {
    title: 'VISION',
    subTitle: '私たちが目指す社会\nFor Colorful Life. 自分の色が輝く社会に',
    detail:[
      {
        text:"私たちの社会の役割を、お客様の「自分の色が輝く社会」を実現することと定義することで、ストレスのない社会を目指します。\nアイフルグループがお客様を輝かせるのではなく、お客様に負の感情が無くなった結果として、輝いていただく。そこに少しでもアプローチできるのが私たちの商品と定義し、その結果として「自分の色が輝く社会」を実現します。自分の色が自然と輝きだす社会の一助となれれば幸いです。"
      }
    ]
  },
  {
    title: 'MISSION',
    subTitle: 'VISIONを実現するために私たちがやるべきこと',
    detail:[
      {
        title:'Go beyond',
        subtitle:'お客様の期待を超えよう',
        text:'サービス業なら普遍的に重要なことであり、お客様に接する際には常に意識をして行動すべき。\nお客様を理解し、お客様の立場で考え、先回りしてご提案することでお客様の期待を越え続ける。',
      },
      {
        title: 'Step forward',
        subtitle:'より良い明日を作ろう',
        text: '日々、今日より明日を 良くする努力を続けていくことで、 業務改善、 またはお客様へのサービスもさらに進化していく。\nそしてそれを社会に還元することで、より多くの人が幸せになるための一助となる。'
      },
      {
        title:'Be unique',
        subtitle:'個性を認めあおう',
        text: '個性は発揮するものではなく、認め合うもの。個性が無い人が駄目なのではなく、個性を認め合うという気持ちが大切であり、そうすることで、会社全体のパフォーマンスを向上させる 。'
      }
    ]
    },
    {
     title: 'VALUE',
      subTitle: 'MISSIONを達成するために持つべき価値観',
      detail:[
        {
          title:'Be honest',
          subtitle:'誠実',
          text: '仲間やルールを心の中で裏切らないこと。',
        },
        {
          title:'Try Harder',
          subtitle:'努力',
          text:  '人により基準は異なるが、肉体的なことでは無く、結果を考えながら自身の持てる力を100%以上出すこと。'
        },
        {
          title:'Build Relationship',
          subtitle:'信頼',
          text:'信用は経済行為で積み重ねられるが、信頼は心と心が通う必要があるので、心の中でまず相手を信じること。',
        },
        {
          title:'Be grateful',
          subtitle:'感恩',
          text:'立場は関係なく、目下の人やお世話になった方などあらゆる相手に\n感謝・敬意を払うこと。',
        }
      ]
    }
];


