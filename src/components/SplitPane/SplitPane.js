import SplitterLayout from 'react-splitter-layout';
import CodeEditor from 'src/components/CodeEditor';
import Preview from 'src/components/Preview';

const CSS = {
  splitter: 'flex-1',
};

const SplitPane = () => {
  return (
    <SplitterLayout
      customClassName={CSS.splitter}
      percentage
      secondaryInitialSize={50}
      primaryMinSize={0}
      secondaryMinSize={0}
    >
      <CodeEditor />
      <Preview />
    </SplitterLayout>
  );
};

export default SplitPane;
