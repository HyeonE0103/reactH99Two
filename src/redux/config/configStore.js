import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todos from '../modules/todos';
import ModalChecked from '../modules/ModalChecked';

const rootReducer = combineReducers({
  todos,
  ModalChecked,
});
const store = createStore(rootReducer);

export default store;
