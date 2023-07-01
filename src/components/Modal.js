import React, { useEffect, useState } from 'react';
import StModalTemplate from '../style/StModalTemplate';
import { MdClear } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { todosUpdate } from '../redux/modules/todos';
import { modalFalse } from '../redux/modules/ModalChecked';
import useInput from '../hooks/useInput';

function Modal() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.ModalChecked.todo);
  const { title, content, id } = todo;
  const [okay, setOkay] = useState(false);
  const [{ inputTitle, inputcontent }, setForm, onChange] = useInput({
    inputTitle: title,
    inputcontent: content,
  });

  useEffect(() => {
    setForm({ inputTitle: title, inputcontent: content });
    setOkay(false);
  }, [title, content, setForm]);

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
            name="inputTitle"
            value={inputTitle}
            onChange={onChange}
            maxLength={20}
          />
          <textarea
            type="text"
            name="inputcontent"
            value={inputcontent}
            onChange={onChange}
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
