import { useState } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

interface IProps {
  word: IWord;
}

export interface IWord {
  "eng": string,
  "kor": string,
  "folder": string,
  "isDone": boolean,
  "id": number,
}

export default function Word({ word: w }: IProps) {
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
        setWord({ 
          ...word,
          id: 0 });
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
          <label>
            <input
              className="hide"
              type="checkbox"
              checked={isDone}
              onChange={toggleDone}
            />
            <div>{isDone ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</div>
          </label>
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <button onClick={toggleIsShow}>
            {isShow ? "숨기기" : "뜻 보기"}
          </button>
          <button className="btn_del" onClick={del}>
            삭제
          </button>
        </td>
      </tr>
    </>
  );
}
