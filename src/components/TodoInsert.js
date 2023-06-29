import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { todosInsert } from '../redux/modules/todos';
import StTodoInsert from '../style/StTodoInsrt';

const TodoInsert = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const onChangeTitle = useCallback((e) => {
    if (e.target.value.length > 20) {
      alert('제목은 20자 이내입니다');
      setTitle(e.target.value.slice(0, 20));
    } else {
      setTitle(e.target.value);
    }
  }, []);
  const onChangeContent = useCallback((e) => {
    if (e.target.value.length > 600) {
      alert('본문은 600자 이내입니다');
      setTitle(e.target.value.slice(0, 601));
    } else {
      setContent(e.target.value);
    }
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
      } else {
        alert('글을 입력해주세요');
      }
      //새로고침 방지
      e.preventDefault();
    },
    [title, content],
  );
  return (
    <StTodoInsert onSubmit={onSubmit}>
      <input
        placeholder="제목"
        value={title}
        onChange={onChangeTitle}
        maxLength={21}
      />
      <input
        placeholder="내용"
        value={content}
        onChange={onChangeContent}
        maxLength={601}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </StTodoInsert>
  );
};

export default TodoInsert;
