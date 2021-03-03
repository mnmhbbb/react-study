import React from "react";
import styled from "styled-components";

const TodoTableBlock = styled.div`
  width: 350px;
  padding: 10px;
  border-radius: 10px;
  background: white;
`;

const TodoTable = ({ children }) => {
  return <TodoTableBlock>{children}</TodoTableBlock>;
};

export default TodoTable;
