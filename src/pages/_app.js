import { RecoilRoot } from 'recoil';
import 'react-splitter-layout/lib/index.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-mirage.css';
import 'src/styles/main.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
