import Head from 'next/head';

type Props = {
  title: string;
};

const HeadMeta: React.FC<Props> = (props) => {
  const { title } = props;
  return (
    <Head>
      <meta charSet="UTF-8"></meta>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <title>{title}</title>
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="アイフルグループのエンジニア専用採用サイトです。" />
      <meta property="og:site_name" content="AIFUL ENGINEER RECRUITMENT" />
      <meta property="og:image" content="/assets/OGP_Image.png" />
      <meta
        content="アイフルグループのエンジニア専用採用サイトです。お客様への愛、会社の愛、同僚への愛、自分の将来への愛など様々な「愛」に溢れている職場を紹介します。"
        name="description"
      ></meta>
    </Head>
  );
};

export default HeadMeta;
