import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  function addDay() {
    fetch("http://localhost:3001/days", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
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
      <h3>현재 일수: {days.length}</h3>
      <button onClick={addDay}>Day 추가</button>
    </>
  );
}
