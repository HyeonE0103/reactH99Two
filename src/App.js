import { useCallback, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '리액트 공부',
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
  ]);
  const onInsert = useCallback((title, content) => {
    let blank_pattern = /^\s+|\s+$/g;
    if (
      title.replace(blank_pattern, '') &&
      content.replace(blank_pattern, '')
    ) {
      if (content.length > 24) {
        content = content.slice(0, 23).padEnd(26, '.');
      }
      const todo = {
        id: todos[todos.length - 1].id + 1,
        title,
        content,
        checked: false,
      };
      setTodos(todos.concat(todo));
    }
  });
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <div className="Tag">할일</div>
      <TodoList
        todos={todos.filter((todo) => todo.checked === false)}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div className="Tag">완료</div>
      <TodoList
        todos={todos.filter((todo) => todo.checked === true)}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </TodoTemplate>
  );
}

export default App;
