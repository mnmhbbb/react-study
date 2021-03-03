import React, { useState } from "react";
import styled from "styled-components";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const TodoInputBlock = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  border: none;

  .divider {
    border: 0.1px solid #e5e5e5;
    width: 90%;
    margin: 3px auto;
  }
`;

const InputBtn = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 25px 8px 30px;

  input {
    border: none;
    outline: none;
    text-align: start;
    font-size: 16px;
    width: 80%;
  }

  input:focus {
    border: none;
    outline: none;
  }

  button {
    border: none;
    border-radius: 50%;
    font-size: 18px;
    width: 30px;
    heigth: 30px;
    cursor: pointer;
    transition: all 300ms ease-in;
    &:hover {
      transform: scale(1.1);
    }

    button:focus {
      border: none;
      outline: none;
    }
  }
`;

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD",
      todo: {
        id: nextId.current,
        text: value,
        checked: false,
      },
    });
    setValue("");
    nextId.current += 1;
  };

  return (
    <TodoInputBlock>
      <div className="divider"></div>
      <InputBtn onSubmit={onSubmit}>
        <input
          placeholder="오늘 할 일을 입력하세요!"
          value={value}
          onChange={onChange}
          required
        />
        <button>⬆</button>
      </InputBtn>
    </TodoInputBlock>
  );
};

export default TodoInput;
