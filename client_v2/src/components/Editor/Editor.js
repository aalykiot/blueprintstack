import React from 'react';
import CodeMirror from 'react-codemirror';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEditor } from '../../models/editor/actions';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/railscasts.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/neat.css';
import './editor.scss';

const Editor = ({ editor, theme, updateEditor }) => {
  const options = {
    lineNumbers: true,
    theme,
    mode: 'markdown',
  };

  return (
    <CodeMirror
      value={editor}
      onChange={value => updateEditor(value)}
      options={options}
      autoFocus
      className="editor"
    />
  );
};

const mapStateToProps = state => ({
  editor: state.editor.value,
  theme: state.settings.theme.editor,
});

const mapDispatchToProps = dispatch => ({
  updateEditor: bindActionCreators(updateEditor, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
