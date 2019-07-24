import React, { useState } from 'react';
import CodeMirror from 'react-codemirror';
import injectSheet from 'react-jss';

import styles from './EditorStyles';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/railscasts.css';
import 'codemirror/mode/markdown/markdown';

const Editor = ({ classes }) => {
  const [value, setValue] = useState(
    '\n# GET /message\n  + Response 200 (text/plain)\n\n           Hello World!'
  );
  const editorOptions = {
    lineNumbers: true,
    theme: 'railscasts',
    mode: 'markdown',
  };
  return (
    <CodeMirror
      value={value}
      onChange={code => setValue(code)}
      options={editorOptions}
      autoFocus
      className={classes.editor}
    />
  );
};

export default injectSheet(styles)(Editor);
