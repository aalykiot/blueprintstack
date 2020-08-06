import { useState } from 'react';
import classnames from 'classnames';
import SplitterLayout from 'react-splitter-layout';
import CodeEditor from 'src/components/CodeEditor';
import Preview from 'src/components/Preview';

const CSS = {
  splitter: 'flex-1',
  interactive: 'h-full pointer-events-auto',
  notInteractive: 'h-full pointer-events-none',
};

const SplitPane = () => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <SplitterLayout
      customClassName={CSS.splitter}
      percentage
      secondaryInitialSize={50}
      primaryMinSize={0}
      secondaryMinSize={0}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
    >
      <CodeEditor />
      <Preview
        customClassName={classnames({
          [`${CSS.interactive}`]: !isDragging,
          [`${CSS.notInteractive}`]: isDragging,
        })}
      />
    </SplitterLayout>
  );
};

export default SplitPane;
