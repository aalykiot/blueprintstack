export const read = () => {
  return JSON.parse(localStorage.getItem('blueprint_stack_data'));
};

export const save = data => {
  localStorage.setItem('blueprint_stack_data', JSON.stringify(data));
};

export const clear = () => {
  localStorage.removeItem('blueprint_stack_data');
};
