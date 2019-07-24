import React, { useState } from 'react';
import injectSheet from 'react-jss';
import SplitPane from 'react-split-pane';

import Editor from '../Editor';
import Preview from '../Preview';

import styles from './PlaygroundStyles';

const Playground = ({ classes }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className={classes.playground}>
      <SplitPane
        split="vertical"
        defaultSize="50%"
        resizerClassName={classes.resizer}
        onDragStarted={() => setIsDragging(true)}
        onDragFinished={() => setIsDragging(false)}
      >
        <Editor />

        <div
          className={
            isDragging ? classes.notInteractive : classes.isInteractive
          }
        >
          <Preview />
        </div>
      </SplitPane>
    </div>
  );
};

export default injectSheet(styles)(Playground);
