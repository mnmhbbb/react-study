import { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function CreateFolder() {
  const history = useHistory();
  const nameRef = useRef(null);

  function addFolder() {
    fetch("http://localhost:3001/folders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        folder: nameRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("추가되었습니다.");
        history.push("/");
      }
    });
  }
  return (
    <>
      <div className="input_area">
        <label>새폴더 추가</label>
        <input
          text="text"
          required
          placeholder="폴더 이름을 입력하세요"
          ref={nameRef}
        />
      </div>
      <button onClick={addFolder}>추가</button>
    </>
  );
}
