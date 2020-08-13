import merge from 'lodash/merge';

export const read = () => {
  return JSON.parse(localStorage.getItem('blueprint_stack'));
};

export const save = data => {
  const snapshot = read();
  localStorage.setItem(
    'blueprint_stack',
    JSON.stringify(merge(snapshot, data))
  );
};

export const clear = () => {
  localStorage.removeItem('blueprint_stack');
};
