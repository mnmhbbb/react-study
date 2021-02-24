import { useState } from "react";
import UserName from "./UserName";
export default function Hello({ age }) {
  const [name, setName] = useState("Mike");

  const msg = age > 19 ? "성인입니다." : "미성년자입니다.";

  function changeName() {
    setName(name === "Mike" ? "Jane" : "Mike");
  }
  return (
    <div>
      <h1>Hello</h1>
      <h2>
        {name}({age}세): {msg}
      </h2>
      <UserName name={name} />
      <button onClick={changeName}>change!</button>
    </div>
  );
}
