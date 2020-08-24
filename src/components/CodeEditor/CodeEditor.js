import _ from 'lodash';
import { useState, useEffect, useCallback, useContext } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { BlueprintsContext } from 'src/context/blueprints';
import 'codemirror/mode/markdown/markdown';

const CSS = {
  editor: 'flex-1 h-full text-lg',
};

const CodeEditor = () => {
  const { blueprint, selected, update } = useContext(BlueprintsContext);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(blueprint?.code);
  }, [selected]);

  const updateDebounced = useCallback(
    _.debounce((id, value) => {
      update(id, value);
    }, 300),
    []
  );

  const handleOnBeforeChange = (editor, data, value) => {
    if (selected !== -1) {
      setValue(value);
      updateDebounced(blueprint.id, value);
    }
  };

  return (
    <CodeMirror
      className={CSS.editor}
      value={value}
      onBeforeChange={handleOnBeforeChange}
      options={{
        mode: 'markdown',
        theme: 'ayu-mirage',
        lineNumbers: true,
        lineWrapping: false,
        showCursorWhenSelecting: true,
        autofocus: true,
      }}
    />
  );
};

export default CodeEditor;
