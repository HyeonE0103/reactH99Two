import React from 'react';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { todosInsert } from '../redux/modules/todos';
import StTodoInsert from '../style/StTodoInsrt';
import useInput from '../hooks/useInput';

const TodoInsert = () => {
  const dispatch = useDispatch();
  const [{ title, content }, setForm, onChange] = useInput({
    title: '',
    content: '',
  });

  const onChangeNum = (e, num) => {
    if (e.target.value.length > num) {
      alert(`${num}자 이내입니다`);
    }
    onChange(e);
  };

  const onSubmit = (e) => {
    let blank_pattern = /^\s+|\s+$/g;
    if (
      title.replace(blank_pattern, '') &&
      content.replace(blank_pattern, '')
    ) {
      dispatch(todosInsert({ title, content }));
      setForm({
        title: '',
        content: '',
      });
    } else {
      alert('글을 입력해주세요');
    }
    //새로고침 방지
    e.preventDefault();
  };
  return (
    <StTodoInsert onSubmit={onSubmit}>
      <input
        placeholder="제목"
        name="title"
        value={title}
        onChange={(e) => onChangeNum(e, 20)}
        maxLength={20}
      />
      <input
        placeholder="내용"
        name="content"
        value={content}
        onChange={(e) => onChangeNum(e, 600)}
        maxLength={600}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </StTodoInsert>
  );
};

export default TodoInsert;
