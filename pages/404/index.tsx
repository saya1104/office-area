import HeadMeta from '../../components/elements/HeadMeta';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import ErrorTop from '../../components/templates/404Page/ErrorTop';

function Custom404() {
  return (
    <>
      <HeadMeta title="404 Page Not Found | AIFUL ENGINEER RECRUITMENT " />
      <Header />
      <ErrorTop />
      <Footer />
    </>
  );
}

export default Custom404;
