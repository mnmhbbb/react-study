import { useReducer } from "react";

function reducerFunc(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default function Counter() {
  //   const [number, setNumber] = useState(0);
  const [number, dispatch] = useReducer(reducerFunc, 0);

  const onIncrease = () => {
    // setNumber((prevNumber) => prevNumber + 1);
    dispatch({ type: "INCREMENT" });
  };
  const onDecrease = () => {
    // setNumber((prevNumber) => prevNumber - 1);
    dispatch({ type: "DECREMENT" });
  };
  return (
    <>
      <button onClick={onIncrease}>+</button>
      <b> {number} </b>
      <button onClick={onDecrease}>-</button>
    </>
  );
}
