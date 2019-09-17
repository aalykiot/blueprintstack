import { UPDATE_EDITOR } from './actions';

const initState = {
  value:
    '\n# GET /message\n  + Response 200 (text/plain)\n\n           Hello World!',
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_EDITOR:
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
