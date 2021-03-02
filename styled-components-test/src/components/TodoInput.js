import React from "react";

function TodoInput() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodoInput;
