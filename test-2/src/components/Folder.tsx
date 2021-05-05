import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word, { IWord } from "./Word";

export default function Folder() {
  const { folder }  = useParams<{ folder: string }>();
  const words: IWord[] = useFetch(`http://localhost:3001/words?folder=${folder}`);


  return (
    <>
      <div className="folder">
        <h2>{folder}</h2>
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
