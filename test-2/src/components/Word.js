import { useState } from "react";

export default function Word({ word: w }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(w.isDone);
  const [word, setWord] = useState(w);

  function toggleIsShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setWord({ id: 0 });
      }
    });
  }

  if (word.id === 0) {
    return null;
  }

  return (
    <>
      <tr className={isDone ? "off" : ""}>
        <td>
          <input type="checkbox" checked={isDone} onChange={toggleDone} />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <button onClick={toggleIsShow}>
            {isShow ? "뜻 보기" : "뜻 숨기기"}
          </button>
          <button className="btn_del" onClick={del}>
            삭제
          </button>
        </td>
      </tr>
    </>
  );
}