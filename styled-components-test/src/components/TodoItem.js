import React from "react";
import styled, { css } from "styled-components";
import { MdClear, MdDone } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

const TodoItemBlock = styled.div`
  padding: 2px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
  transition: all 300ms ease-in;
  cursor: pointer;

  div {
    display: flex;
    vertical-align: middle;
  }

  transition: all 300ms ease-in;
  &:hover {
    background: whitesmoke;
  }
`;

const CheckBtn = styled.div`
  cursor: pointer;
  font-size: 20px;
  width: 20px;
  height: 20px;
  margin: 0 10px 3px;
  color: #616161;
  border-radius: 16px;
  border: 1px solid #495057;

  ${(props) =>
    props.checked &&
    css`
      border: 1px solid #495057;
      color: #495057;
      opacity: 0.4;
    `}
`;

const Text = styled.div`
  font-size: 18px;
  margin-left: 5px;
  line-height: 0.9;
  text-align: start;
  ${(props) =>
    props.checked &&
    css`
      color: #495057;
      opacity: 0.4;
    `}
`;

const Delete = styled.div`
  cursor: pointer;
  padding: 10px;
  color: thistle;
  font-size: 20px;
  transition: all 300ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const TodoItem = ({ id, text, checked }) => {
  const dispatch = useTodoDispatch();
  const onDelete = () => dispatch({ type: "DELETE", id });
  const onToggle = () => dispatch({ type: "TOGGLE", id });

  return (
    <TodoItemBlock>
      <div>
        <CheckBtn checked={checked} onClick={onToggle}>
          {checked && <MdDone />}
        </CheckBtn>
        <Text checked={checked}>{text}</Text>
      </div>
      <Delete onClick={onDelete}>
        <MdClear />
      </Delete>
    </TodoItemBlock>
  );
};

export default TodoItem;
