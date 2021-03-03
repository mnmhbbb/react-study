import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
  height: 300px;
  text-align: start;
  padding: 5px 28px;
  overflow-y: scroll;
`;

const TodoList = () => {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            checked={todo.checked}
          />
        );
      })}
    </TodoListBlock>
  );
};

export default TodoList;
