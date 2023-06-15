import '../styles/reset.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FollowBanner } from '../components/elements/FollowBanner';
import { useChangeBottom } from '../features/domains/hooks/useChangeBottom';
import { useLoading } from '../features/domains/hooks/useLoading';
import GlobalStyle from '../styles/globalstyles';
import type { AppProps } from 'next/app';
import { GATag } from '../components/elements/GaTag';
import { pageview } from '../features/domains/constants/PageView';

function App({ Component, pageProps }: AppProps) {
  const { isBottom, changeBottom } = useChangeBottom();
  const { isLoading } = useLoading();
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);
  useEffect(() => {
    window.addEventListener('scroll', changeBottom);
    return () => window.removeEventListener('scroll', changeBottom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) return null;
  return (
    <>
      <GATag />
      <FollowBanner isBottom={isBottom} />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
