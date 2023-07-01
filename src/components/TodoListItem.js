import React from 'react';
import { MdDone, MdClear, MdOutlineReplay } from 'react-icons/md';
import cn from '../../node_modules/classnames/index';
import { useDispatch } from 'react-redux';
import { todosRemove, todosChecked } from '../redux/modules/todos';
import { modalFalse, modalTrue } from '../redux/modules/ModalChecked';
import StTodoListItem from '../style/StTodoListItem';

const TodoListItem = ({ todo }) => {
  const { title, content, checked, id } = todo;
  const dispatch = useDispatch();
  const onRemove = (id) => dispatch(todosRemove(id));
  const onChecked = (id) => dispatch(todosChecked(id));
  const onModalChecked = (todo) => dispatch(modalTrue(todo));

  return (
    <>
      <StTodoListItem>
        <div
          className={cn('text', { checked })}
          onClick={() => onModalChecked(todo)}
        >
          <div>{title}</div>
          <div>
            {content.length < 20
              ? content
              : content.slice(0, 22).padEnd(25, '.')}
          </div>
        </div>
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onChecked(id)}
        >
          {checked ? <MdOutlineReplay /> : <MdDone />}
        </div>
        <div
          className="checkbox remove"
          onClick={() => {
            onRemove(id);
            dispatch(modalFalse());
          }}
        >
          <MdClear />
        </div>
      </StTodoListItem>
    </>
  );
};

export default TodoListItem;
