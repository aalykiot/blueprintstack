import dynamic from 'next/dynamic';
import { ReactQueryConfigProvider } from 'react-query';
import Seo from 'src/layouts/Seo';
import Sidebar from 'src/components/Sidebar';
import SplitPaneLoader from 'src/components/SplitPaneLoader';
import { BlueprintsProvider } from 'src/context/blueprints';

const SplitPane = dynamic(() => import('src/components/SplitPane'), {
  ssr: false,
  loading: () => <SplitPaneLoader />, // eslint-disable-line
});

const CSS = {
  container: 'flex h-full',
};

const queryConfig = {
  queries: { refetchOnWindowFocus: false },
};

const EditorPage = ({ appVersion }) => {
  return (
    <Seo title="BlueprintStack - Editor">
      <ReactQueryConfigProvider config={queryConfig}>
        <BlueprintsProvider>
          <div className={CSS.container}>
            <Sidebar appVersion={appVersion} />
            <SplitPane />
          </div>
        </BlueprintsProvider>
      </ReactQueryConfigProvider>
    </Seo>
  );
};

export const getStaticProps = async () => {
  // require nodejs modules
  const fs = require('fs');
  const path = require('path');

  // read package.json file
  const jsonData = fs.readFileSync(path.join(process.env.PWD, 'package.json'), {
    encoding: 'utf-8',
  });
  const { version } = JSON.parse(jsonData);

  return {
    props: { appVersion: version },
  };
};

export default EditorPage;
