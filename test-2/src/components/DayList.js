import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");

  return (
    <>
      <ul className="list_day">
        {days.map((v) => {
          return (
            <li key={v.id}>
              <Link to={`/day/${v.day}`}>Day {v.day}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
