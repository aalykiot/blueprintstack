import superagent from 'superagent';
import { updatePreview, updatePreviewAsync } from './actions';

export const getPreviewAsync = () => {
  return (dispatch, getState) => {
    const state = getState();

    dispatch(updatePreviewAsync());

    superagent
      .post(process.env.REACT_APP_SERVER_URL)
      .send({
        blueprint: state.editor.value,
        theme: state.settings.theme.preview,
      })
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          dispatch(updatePreview(res.body.html));
        }
      });
  };
};
