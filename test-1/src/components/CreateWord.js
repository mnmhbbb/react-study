import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("http://localhost:3065/days");
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  function onSubmitbtn(e) {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      fetch("http://localhost:3065/words/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eng: engRef.current.value,
          kor: korRef.current.value,
          day: dayRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("저장되었습니다.");
          history.push(`day/${dayRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  }

  return (
    <form onSubmit={onSubmitbtn}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" required ref={engRef}></input>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" required ref={korRef}></input>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((v) => {
            return (
              <option key={v.id} value={v.value}>
                {v.day}
              </option>
            );
          })}
        </select>
        <button style={{ opacity: isLoading ? 0.3 : 1 }}>
          {isLoading ? "저장 중..." : "저장"}
        </button>
      </div>
    </form>
  );
}
