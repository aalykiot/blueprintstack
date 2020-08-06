import dynamic from 'next/dynamic';
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

const EditorPage = () => {
  return (
    <BlueprintsProvider>
      <div className={CSS.container}>
        <Sidebar />
        <SplitPane />
      </div>
    </BlueprintsProvider>
  );
};

export default EditorPage;
