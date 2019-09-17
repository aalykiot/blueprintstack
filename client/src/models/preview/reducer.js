import { UPDATE_PREVIEW, UPDATE_PREVIEW_ASYNC } from './actions';

const initState = {
  html: null,
  loading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_PREVIEW:
      return {
        ...state,
        html: action.payload,
        loading: false,
      };

    case UPDATE_PREVIEW_ASYNC:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default reducer;
