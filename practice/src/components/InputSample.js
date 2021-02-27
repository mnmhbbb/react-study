import { useRef, useState } from "react";

export default function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    //e.target.value
    //e.target.name
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // name 키를 가진 값을 value 로 설정!!!
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameRef.current.focus();
  };

  const nameRef = useRef();

  return (
    <div>
      <input name="name" onChange={onChange} value={name} ref={nameRef} />
      <input name="nickname" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {name} ({nickname})
      </div>
    </div>
  );
}
