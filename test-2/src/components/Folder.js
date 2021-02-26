import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Folder() {
  const { folder } = useParams();
  const words = useFetch(`http://localhost:3001/words?folder=${folder}`);

  return (
    <>
      <div className="folder">
        <h2>{folder}</h2>
        <div>
          <button className="folder_btn">폴더 변경</button>
          <button className="folder_btn">폴더 삭제</button>
        </div>
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
