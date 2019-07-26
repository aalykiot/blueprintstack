import React from 'react';
import CodeMirror from 'react-codemirror';
import injectSheet from 'react-jss';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

import styles from './EditorStyles';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';

import 'codemirror/theme/railscasts.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/neat.css';

const GET_EDITOR_VALUE = gql`
  {
    editorValue @client
  }
`;

const UPDATE_EDITOR_VALUE = gql`
  mutation UpdateEditorValue($value: String!) {
    updateEditorValue(value: $value) @client
  }
`;

const Editor = ({ classes }) => {
  const { data } = useQuery(GET_EDITOR_VALUE);
  const [updateEditorValue] = useMutation(UPDATE_EDITOR_VALUE);

  const editorOptions = {
    lineNumbers: true,
    theme: 'railscasts',
    mode: 'markdown',
  };

  return (
    <CodeMirror
      value={data.editorValue}
      onChange={value => updateEditorValue({ variables: { value } })}
      options={editorOptions}
      autoFocus
      className={classes.editor}
    />
  );
};

export default injectSheet(styles)(Editor);
