import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../style/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);
  const onChangeContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(title, content);
      setTitle('');
      setContent('');
      //새로고침 방지
      e.preventDefault();
    },
    [onInsert, title, content],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="제목" value={title} onChange={onChangeTitle} />
      <input placeholder="내용" value={content} onChange={onChangeContent} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
