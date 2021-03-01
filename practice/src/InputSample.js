import React, { useState } from "react";
export default function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  function onChangeInput(e) {
    console.log(e.target.value);
    console.log(e.target.name);
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function onSubmitForm(e) {
    e.preventDefault();
  }

  function onReset() {
    setInputs({
      name: "",
      nickname: "",
    });
  }

  return (
    <form onSubmit={onSubmitForm}>
      <label>이름</label>
      <input name="name" type="text" value={name} onChange={onChangeInput} />
      <label>닉네임</label>
      <input
        name="nickname"
        type="text"
        value={nickname}
        onChange={onChangeInput}
      />
      <button onClick={onReset}>초기화</button>
      <p>
        미리보기: {name}, {nickname}
      </p>
    </form>
  );
}
