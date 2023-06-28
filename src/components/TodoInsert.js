import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { todosInsert } from '../redux/modules/todos';
import styled from 'styled-components';

const StTodoInsert = styled.form`
  display: flex;
  background: #495057;
  input {
    background: none;
    outline: none;
    border: none;
    border-right: #868e96 1px solid;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
  }
  button {
    width: 100%;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    font-size: 1.5rem;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
`;

const TodoInsert = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);
  const onChangeContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      let blank_pattern = /^\s+|\s+$/g;
      if (
        title.replace(blank_pattern, '') &&
        content.replace(blank_pattern, '')
      ) {
        dispatch(todosInsert({ title, content }));
        setTitle('');
        setContent('');
      }
      //새로고침 방지
      e.preventDefault();
    },
    [title, content],
  );
  return (
    <StTodoInsert onSubmit={onSubmit}>
      <input placeholder="제목" value={title} onChange={onChangeTitle} />
      <input placeholder="내용" value={content} onChange={onChangeContent} />
      <button type="submit">
        <MdAdd />
      </button>
    </StTodoInsert>
  );
};

export default TodoInsert;
