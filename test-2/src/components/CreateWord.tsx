import {  useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IFolder } from "./FolderList";

export default function CreateWord() {
  const folders: IFolder[] = useFetch("http://localhost:3001/folders");
  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const folderRef = useRef<HTMLSelectElement>(null);
  const [isloading, setIsLoading] = useState(false);
  const history = useHistory();

  function onSubmitBtn(e: React.FormEvent) {
    e.preventDefault();

    if (!isloading && engRef.current && korRef.current && folderRef.current) {
      setIsLoading(true);

      const eng = engRef.current.value;
      const kor = korRef.current.value;
      const folder = folderRef.current.value;

      fetch("http://localhost:3001/words", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eng,
          kor,
          folder,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("추가되었습니다.");
          history.push(`/folder/${folder}`);
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
        {isloading ? "저장 중" : "추가"}
      </button>
    </form>
  );
}
