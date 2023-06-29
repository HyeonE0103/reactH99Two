import React, { useEffect, useState } from 'react';
import StModalTemplate from '../style/StModalTemplate';
import { MdClear } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { todosUpdate } from '../redux/modules/todos';
import { modalFalse } from '../redux/modules/ModalChecked';

function Modal() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.ModalChecked.todo);
  const { title, content, id } = todo;
  const [okay, setOkay] = useState(false);
  const [inputTitle, setInputTitle] = useState('');
  const [inputcontent, setInputContent] = useState('');

  useEffect(() => {
    setInputTitle(title);
    setInputContent(content);
  }, [title, content]);

  const onChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setInputContent(e.target.value);
  };
  const onChangeOkey = () => {
    okay && dispatch(todosUpdate(inputTitle, inputcontent, id));
    setOkay(!okay);
  };
  const modalDelete = () => {
    dispatch(modalFalse());
  };

  return (
    <StModalTemplate>
      <header>
        <div onClick={modalDelete}>
          <MdClear />
        </div>
      </header>
      {okay === true ? (
        <div className="body">
          <input
            type="text"
            value={inputTitle}
            onChange={onChangeTitle}
            maxLength={20}
          />
          <textarea
            type="text"
            value={inputcontent}
            onChange={onChangeContent}
            maxLength={600}
          />
          <div> {inputcontent.length}/600 </div>
        </div>
      ) : (
        <div className="body">
          <h1>{inputTitle}</h1>
          <h3>{inputcontent}</h3>
        </div>
      )}
      <footer>
        <button onClick={onChangeOkey}>
          {okay === true ? '수정완료' : '수정하기'}
        </button>
        {/* 완료하기와 수정하기 */}
      </footer>
    </StModalTemplate>
  );
}

export default Modal;
