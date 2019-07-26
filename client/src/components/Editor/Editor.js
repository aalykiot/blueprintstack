import React from 'react';
import CodeMirror from 'react-codemirror';
import injectSheet from 'react-jss';
import { useQuery, useMutation } from '@apollo/react-hooks';

import styles from './EditorStyles';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';

import 'codemirror/theme/railscasts.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/neat.css';

import { GET_EDITOR, UPDATE_EDITOR } from '../../graphql/queries';

const Editor = ({ classes }) => {
  const { data } = useQuery(GET_EDITOR);
  const [updateEditor] = useMutation(UPDATE_EDITOR);

  const options = {
    lineNumbers: true,
    theme: data.settings.themes.editor,
    mode: 'markdown',
  };

  return (
    <CodeMirror
      value={data.editor}
      onChange={value => updateEditor({ variables: { value } })}
      options={options}
      autoFocus
      className={classes.editor}
    />
  );
};

export default injectSheet(styles)(Editor);
