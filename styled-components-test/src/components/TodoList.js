import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ item }) {
  return (
    <div>
      {item.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default TodoList;
