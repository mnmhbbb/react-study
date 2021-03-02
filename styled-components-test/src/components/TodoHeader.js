import React from "react";

function TodoHeader({ item }) {
  return (
    <div>
      <b>2021년 03월 02일</b>
      <p>할 일 {item.length}개 남음</p>
    </div>
  );
}

export default TodoHeader;
