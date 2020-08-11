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

const EditorPage = () => {
  return (
    <Seo title="BlueprintStack - Editor">
      <ReactQueryConfigProvider config={queryConfig}>
        <BlueprintsProvider>
          <div className={CSS.container}>
            <Sidebar />
            <SplitPane />
          </div>
        </BlueprintsProvider>
      </ReactQueryConfigProvider>
    </Seo>
  );
};

export default EditorPage;
