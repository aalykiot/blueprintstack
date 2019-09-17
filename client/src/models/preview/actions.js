export const UPDATE_PREVIEW = 'app/UPDATE_PREVIEW';
export const UPDATE_PREVIEW_ASYNC = 'app/UPDATE_PREVIEW_ASYNC';

export const updatePreview = payload => ({
  type: UPDATE_PREVIEW,
  payload,
});

export const updatePreviewAsync = () => ({
  type: UPDATE_PREVIEW_ASYNC,
});
