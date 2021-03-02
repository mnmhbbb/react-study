import React, { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState({
    text: "",
    checked: false,
  });

  const todos = {
    item: [
      {
        id: 1,
        text: "밥먹기",
        checked: false,
      },
      {
        id: 2,
        text: "산책하기",
        checked: false,
      },
      {
        id: 3,
        text: "청소하기",
        checked: true,
      },
    ],
  };

  const { item } = todos;

  return (
    <div>
      <TodoHeader item={item} />
      <TodoList item={item} />
      <TodoInput />
    </div>
  );
}

export default App;
