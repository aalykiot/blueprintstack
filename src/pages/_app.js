import { useEffect, useRef } from 'react';
import Router from 'next/router';
import LoadingBar from 'react-top-loading-bar';

import 'react-splitter-layout/lib/index.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-mirage.css';
import 'src/styles/main.css';

const MyApp = ({ Component, pageProps }) => {
  const topBarRef = useRef(null);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      topBarRef.current.continuousStart();
    });
    Router.events.on('routeChangeComplete', () => {
      topBarRef.current.complete();
    });
    Router.events.on('routeChangeError', () => {
      topBarRef.current.complete();
    });
  }, []);

  return (
    <>
      <LoadingBar color="#667eea" ref={topBarRef} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
