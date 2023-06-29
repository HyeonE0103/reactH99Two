const CHECKED_TRUE = 'CHECKED_TRUE';
const CHECKED_FASLE = 'CHECKED_FASLE';

export const modalTrue = (todo) => {
  return { type: CHECKED_TRUE, todo };
};

export const modalFalse = () => {
  return { type: CHECKED_FASLE };
};

const initialState = {
  Checked: false,
};
// 리듀서
const ModalChecked = (state = initialState, action) => {
  switch (action.type) {
    case CHECKED_TRUE:
      return { Checked: true, todo: action.todo };
    default:
      return state;
    case CHECKED_FASLE:
      return { Checked: false };
  }
};
export default ModalChecked;
