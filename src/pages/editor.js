import dynamic from 'next/dynamic';
import Sidebar from 'src/components/Sidebar';
import SplitPaneLoader from 'src/components/SplitPaneLoader';

const SplitPane = dynamic(() => import('src/components/SplitPane'), {
  ssr: false,
  loading: () => <SplitPaneLoader />, // eslint-disable-line
});

const CSS = {
  container: 'flex h-full',
};

const EditorPage = () => {
  return (
    <div className={CSS.container}>
      <Sidebar />
      <SplitPane />
    </div>
  );
};

export default EditorPage;
