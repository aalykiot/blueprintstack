import React, { useState } from 'react';
import injectSheet from 'react-jss';
import SplitterLayout from 'react-splitter-layout';

import Editor from '../Editor';
import Preview from '../Preview';

import styles from './PlaygroundStyles';

import 'react-splitter-layout/lib/index.css';

const Playground = ({ classes }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className={classes.playground}>
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
            isDragging ? classes.notInteractive : classes.isInteractive
          }
        >
          <Preview />
        </div>
      </SplitterLayout>
    </div>
  );
};

export default injectSheet(styles)(Playground);
