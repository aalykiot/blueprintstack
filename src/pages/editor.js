import dynamic from 'next/dynamic';
import { ReactQueryConfigProvider } from 'react-query';
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
    <ReactQueryConfigProvider config={queryConfig}>
      <BlueprintsProvider>
        <div className={CSS.container}>
          <Sidebar />
          <SplitPane />
        </div>
      </BlueprintsProvider>
    </ReactQueryConfigProvider>
  );
};

export default EditorPage;
