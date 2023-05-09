import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import TightenEachPage from '../components/templates/TightenEachPage';

function AboutPage() {
  return (
    <>
      <Header />
      <TightenEachPage
        SubTitlechildren={'自分の色が輝く社会に'}
        Titlechildren={'ABOUT TEAM'}
        src="/assets/AboutTeamImage.png"
      >
        誰かと比べることで感じてしまう 負の感情を、社会から無くしたい。
        私たちのサービスにより、少しでも多くのお客様の感情を満たし、
        自然と輝いてもらうためにVISION・MISSION・VALUEを理念に掲げ、 「自分の色が輝く社会」 の実現を目指します。
      </TightenEachPage>
      <Footer />
    </>
  );
}

export default AboutPage;
