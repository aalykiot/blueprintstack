import { RecoilRoot } from 'recoil';
import 'src/styles/main.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
