import '../styles/reset.css';
import { useEffect } from 'react';
import { FollowBanner } from '../components/elements/FollowBanner';
import { useChangeBottom } from '../features/domains/hooks/useChangeBottom';
import GlobalStyle from '../styles/globalstyles';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  const { isBottom, changeBottom } = useChangeBottom();
  useEffect(() => {
    window.addEventListener('scroll', changeBottom);
    return () => window.removeEventListener('scroll', changeBottom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <FollowBanner isBottom={isBottom} />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
