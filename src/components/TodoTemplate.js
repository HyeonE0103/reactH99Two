import React from 'react';
import { AppTitle, Content, StTodoTemplate } from '../style/StTodoTemplate';


const TodoTemplate = ({ children }) => {
  return (
    <StTodoTemplate>
      <AppTitle>일정 관리</AppTitle>
      <Content>{children}</Content>
    </StTodoTemplate>
  );
};

export default TodoTemplate;
