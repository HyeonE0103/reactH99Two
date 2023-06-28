import React, { useCallback } from 'react';
import { MdDone, MdClear, MdOutlineReplay } from 'react-icons/md';
import cn from '../../node_modules/classnames/index';
import { useDispatch } from 'react-redux';
import { todosRemove, todosChecked } from '../redux/modules/todos';
import styled from 'styled-components';

const StTodoListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dee2e6;

  &:nth-child(even) {
    background: #f8f9fa;
  }

  .text {
    flex: 10;

    &.checked {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }

  .checkbox {
    height: 100%;
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: green;

    svg {
      font-size: 1.5rem;
    }

    &.checked {
      color: blue;
    }

    &.remove {
      color: red;
    }

    &.check .checked {
      svg {
        color: #22b8cf;
      }
    }
  }

  // 엘리먼트 사이사이에 테두리를 넣어줌
  // & + & {
  // border-top: 1px solid #dee2e6;
  // }
`;

const TodoListItem = ({ todo }) => {
  const { title, content, checked, id } = todo;
  const dispatch = useDispatch();
  const onRemove = useCallback((id) => dispatch(todosRemove(id)), []);
  const onChecked = useCallback((id) => dispatch(todosChecked(id)), []);
  return (
    <>
      <StTodoListItem>
        <div className={cn('text', { checked })}>
          <div>{title}</div>
          <div>{content}</div>
        </div>
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onChecked(id)}
        >
          {checked ? <MdOutlineReplay /> : <MdDone />}
        </div>
        <div className="checkbox remove" onClick={() => onRemove(id)}>
          <MdClear />
        </div>
      </StTodoListItem>
    </>
  );
};

export default TodoListItem;
