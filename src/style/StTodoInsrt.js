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
    font-size: 1.05rem;
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

export default StTodoInsert;
