import React from 'react';
import TodoListItem from './TodoListItem';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StTodoList = styled.div`
  height: 230px;
  overflow-y: scroll;
`;

const Tag = styled.div`
  font-size: 1.3rem;
  padding: 0.5rem;
  background: #bdbdbd;
  display: flex;
  justify-content: space-between;
  p:last-child {
    font-size: 1rem;
    color: #495057;
  }
`;

const TodoList = ({ listCheck }) => {
  const todosStore = useSelector((state) => state.todos);
  const todos = todosStore.filter((todo) => todo.checked === listCheck);
  return (
    <>
      <Tag>
        <p>{listCheck ? '완료' : '할일'}</p>
        <p>count: {todos.length}</p>
      </Tag>
      <StTodoList>
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
      </StTodoList>
    </>
  );
};

export default TodoList;
