const TODOS_INSERT = 'TODOS_INSERT';
const TODOS_DELETE = 'TODOS_DELETE';
const TODOS_UPDATE = 'TODOS_UPDATE';
const TODOS_CHECKED = 'TODOS_CHECKED';

let num = 4;

export const todosInsert = ({ title, content }) => {
  return {
    type: TODOS_INSERT,
    payload: {
      id: num++,
      title,
      content,
      checked: false,
    },
  };
};

export const todosRemove = (id) => {
  return { type: TODOS_DELETE, id };
};

export const todosUpdate = (id) => {
  return { type: TODOS_UPDATE, id };
};

export const todosChecked = (id) => {
  return { type: TODOS_CHECKED, id };
};

const initialState = [
  {
    id: 1,
    title: '리액트 공부ㅎㅎ',
    content: '리액트를 다루는 기술 완독',
    checked: false,
  },
  {
    id: 2,
    title: 'JS공부',
    content: '코테 풀기',
    checked: true,
  },
  {
    id: 3,
    title: 'CS공부',
    content: 'CS 스터디 열심히 임하기',
    checked: false,
  },
];
// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_INSERT:
      return state.concat(action.payload); //블럭을 지웠는데 되는 이유는 무엇인가
    case TODOS_DELETE:
      return state.filter((todo) => todo.id !== action.id);
    case TODOS_UPDATE:
      return {};
    case TODOS_CHECKED:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );

    default:
      return state;
  }
};
export default todos;
