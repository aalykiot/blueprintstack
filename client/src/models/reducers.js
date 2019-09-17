import { combineReducers } from 'redux';
import settingsReducer from './settings/reducer';
import editorReducer from './editor/reducer';
import previewReducer from './preview/reducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  editor: editorReducer,
  preview: previewReducer,
});

export default rootReducer;
