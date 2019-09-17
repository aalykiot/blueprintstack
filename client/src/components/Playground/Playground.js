import React, { useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import Editor from '../Editor';
import Preview from '../Preview';

import 'react-splitter-layout/lib/index.css';
import './playground.scss';

const Playground = () => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="playground">
      <SplitterLayout
        percentage
        secondaryInitialSize={50}
        primaryMinSize={0}
        secondaryMinSize={0}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <Editor />
        <div
          className={
            isDragging
              ? 'playground_not_interactive'
              : 'playground_is_interactive'
          }
        >
          <Preview />
        </div>
      </SplitterLayout>
    </div>
  );
};

export default Playground;
