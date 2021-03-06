import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Folder() {
  const { folder } = useParams();
  const words = useFetch(`http://localhost:3001/words?folder=${folder}`);
  const history = useHistory();
  console.log(folder); // test(현재 폴더)

  const deleteFolder = () => {
    fetch(`http://localhost:3001/folders/`, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify({
      //   id: 0,
      // }),
    }).then((res) => {
      if (res.ok) {
        history.push("/");
      }
    });
  };

  // if (word.id === 0) {
  //   return null;
  // }

  return (
    <>
      <div className="folder">
        <h2>{folder}</h2>
        {/* <div>
          <button className="folder_btn">폴더 수정</button>
          <button className="folder_btn" onClick={deleteFolder}>
            폴더 삭제
          </button>
        </div> */}
      </div>
      {words.length === 0 && <span>loading...</span>}
      <table>
        <tbody>
          {words.map((v) => {
            return <Word word={v} key={v.id} />;
          })}
        </tbody>
      </table>
    </>
  );
}
