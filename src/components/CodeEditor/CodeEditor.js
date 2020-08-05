import _ from 'lodash';
import { useState, useEffect, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { blueprintsState, selectedBlueprintState } from 'src/recoil/atoms';
import { useUpdateBlueprint } from 'src/recoil/hooks';
import 'codemirror/mode/markdown/markdown';

const CSS = {
  editor: 'flex-1 h-full text-lg',
};

const CodeEditor = () => {
  const blueprints = useRecoilValue(blueprintsState);
  const selected = useRecoilValue(selectedBlueprintState);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(blueprints[selected]?.code);
  }, [selected]);

  const updateBlueprint = useUpdateBlueprint();
  const updateBlueprintDebounced = useCallback(
    _.debounce(value => {
      updateBlueprint(value);
    }, 300),
    []
  );

  const handleOnBeforeChange = (editor, data, value) => {
    setValue(value);
    updateBlueprintDebounced(value);
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
        lineWrapping: true,
        showCursorWhenSelecting: true,
        autofocus: true,
      }}
    />
  );
};

export default CodeEditor;
