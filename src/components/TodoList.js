import React from 'react';
import TodoListItem from './TodoListItem';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StTodoList = styled.div`
  height: 230px;
  overflow-y: scroll;
`;

const TodoList = ({ listCheck }) => {
  const todosStore = useSelector((state) => state.todos);
  const todos = todosStore.filter((todo) => todo.checked === listCheck);
  return (
    <StTodoList>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </StTodoList>
  );
};

export default TodoList;
