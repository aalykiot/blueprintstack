import Sidebar from 'src/components/Sidebar';

const CSS = {
  container: 'flex h-full',
};

const EditorPage = () => {
  return (
    <div className={CSS.container}>
      <Sidebar />
    </div>
  );
};

export default EditorPage;
