import { ClassicSpinner } from 'react-spinners-kit';

const CSS = {
  container: 'flex flex-1',
  editor: 'flex-1 flex items-center justify-center',
  // splitter: 'splitter-layout-loader',
  // preview: ' empty-preview flex-1 flex items-center justify-center',
};

const SplitPaneLoader = () => {
  return (
    <div className={CSS.container}>
      <div className={CSS.editor} style={{ backgroundColor: '#1f2430' }}>
        <ClassicSpinner size={25} loading={true} color="#ced6e0" />
      </div>
      {/* <div className={CSS.splitter} />
      <div className={CSS.preview}>
        <ClassicSpinner size={25} loading={true} color="#1f2430" />
      </div> */}
    </div>
  );
};

export default SplitPaneLoader;
