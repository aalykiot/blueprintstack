import React from 'react';
import injectSheet from 'react-jss';
import SplitPane from 'react-split-pane';

import Editor from '../Editor';
import Preview from '../Preview';

import styles from './styles';

const Playground = ({ classes }) => {
  return (
    <div className={classes.playground}>
      <SplitPane
        split="vertical"
        defaultSize="50%"
        resizerClassName={classes.resizer}
      >
        <Editor />
        <Preview />
      </SplitPane>
    </div>
  );
};

export default injectSheet(styles)(Playground);
