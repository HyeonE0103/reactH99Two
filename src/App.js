import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import GlobalStyle from './utils/GlobalStyle';

function App() {
  return (
    <TodoTemplate>
      <GlobalStyle />
      <TodoInsert />
      <div className="Tag">할일</div>
      <TodoList listCheck={false} />
      <div className="Tag">완료</div>
      <TodoList listCheck={true} />
    </TodoTemplate>
  );
}

export default App;
