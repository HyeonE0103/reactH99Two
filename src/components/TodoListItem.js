import React from 'react';
import { MdDone, MdClear, MdOutlineReplay } from 'react-icons/md';
import '../style/TodoListItem.scss';
import cn from '../../node_modules/classnames/index';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, title, content, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn('text', { checked })}>
        <div>{title}</div>
        <div>{content}</div>
      </div>
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdOutlineReplay /> : <MdDone />}
      </div>
      <div className="checkbox remove" onClick={() => onRemove(id)}>
        <MdClear />
      </div>
    </div>
  );
};

export default TodoListItem;
