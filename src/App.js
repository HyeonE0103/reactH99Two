import styled from 'styled-components';
import './App.css';
import Modal from './components/Modal';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import GlobalStyle from './utils/GlobalStyle';
import { useSelector } from 'react-redux';

const TodoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const modalCheck = useSelector((state) => state.ModalChecked.Checked);
  const todoss = useSelector((state) => state.todos);
  console.log(todoss);
  return (
    <TodoWrap>
      <TodoTemplate>
        <GlobalStyle />
        <TodoInsert />
        <div className="Tag">할일</div>
        <TodoList listCheck={false} />
        <div className="Tag">완료</div>
        <TodoList listCheck={true} />
      </TodoTemplate>
      {modalCheck === true ? <Modal /> : null}
    </TodoWrap>
  );
}

export default App;
