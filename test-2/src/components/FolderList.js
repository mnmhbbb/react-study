import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function FolderList() {
  const folders = useFetch("http://localhost:3001/folders");

  return (
    <>
      <ul className="list_folder">
        {folders.map((v) => {
          return (
            <li key={v.id}>
              <Link to={`/folder/${v.folder}`}>{v.folder}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
