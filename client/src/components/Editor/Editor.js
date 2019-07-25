import React from 'react';
import CodeMirror from 'react-codemirror';
import injectSheet from 'react-jss';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import styles from './EditorStyles';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/railscasts.css';
import 'codemirror/mode/markdown/markdown';

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
  const editorOptions = {
    lineNumbers: true,
    theme: 'railscasts',
    mode: 'markdown',
  };

  return (
    <Query query={GET_EDITOR_VALUE}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error!</div>;

        return (
          <Mutation mutation={UPDATE_EDITOR_VALUE}>
            {updateEditorValue => (
              <CodeMirror
                value={data.editorValue}
                onChange={value => updateEditorValue({ variables: { value } })}
                options={editorOptions}
                autoFocus
                className={classes.editor}
              />
            )}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default injectSheet(styles)(Editor);
