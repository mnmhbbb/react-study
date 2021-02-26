import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const folders = useFetch("http://localhost:3001/folders");
  const engRef = useRef(null);
  const korRef = useRef(null);
  const folderRef = useRef(null);
  const [isloading, setIsLoading] = useState(false);
  const history = useHistory();

  function onSubmitBtn(e) {
    e.preventDefault();

    if (!isloading) {
      setIsLoading(true);

      fetch("http://localhost:3001/words", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eng: engRef.current.value,
          kor: korRef.current.value,
          folder: folderRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("추가되었습니다.");
          history.push(`/folder/${folderRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  }

  return (
    <form onSubmit={onSubmitBtn}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" required ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" required ref={korRef} />
      </div>
      <div className="input_area">
        <label>폴더 목록</label>
        <select ref={folderRef}>
          {folders.map((v) => {
            return <option key={v.id}>{v.folder}</option>;
          })}
        </select>
      </div>
      <button style={{ opacity: isloading ? 0.3 : 1 }}>
        {isloading ? "저장 중..." : "추가"}
      </button>
    </form>
  );
}
