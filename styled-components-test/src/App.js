import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTable from "./components/TodoTable";
import TodoProvider from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body{
    font-family: Noto Sans KR, sans-serif;
    background: #e5e5e5;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  }
`;

function App() {
  return (
    <div>
      <TodoProvider>
        <GlobalStyle />
        <TodoTable>
          <TodoHeader />
          <TodoList />
          <TodoInput />
        </TodoTable>
      </TodoProvider>
    </div>
  );
}

export default App;
