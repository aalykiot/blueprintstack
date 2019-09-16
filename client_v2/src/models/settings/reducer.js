import { UPDATE_SETTINGS } from './actions';

const initState = {
  theme: {
    editor: 'railscasts',
    preview: 'default',
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
