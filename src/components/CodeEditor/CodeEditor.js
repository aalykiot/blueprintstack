import { useState } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

const CSS = {
  editor: 'flex-1 h-full text-lg',
};

const CodeEditor = () => {
  const [value, setValue] = useState('');
  return (
    <CodeMirror
      className={CSS.editor}
      value={value}
      onChange={value => setValue(value)}
      options={{
        mode: 'markdown',
        theme: 'ayu-mirage',
        lineNumbers: true,
        lineWrapping: true,
        showCursorWhenSelecting: true,
        autofocus: true,
      }}
    />
  );
};

export default CodeEditor;
