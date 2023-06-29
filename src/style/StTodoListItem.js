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
      font-size: 1.7rem;
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
`;

export default StTodoListItem;
