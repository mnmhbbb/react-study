import React, { useCallback } from "react";

function TodoItem({ item }) {
  const checkedToggle = useCallback(() => {
    return item.checked === !item.checked;
  });
  const deleteItem = useCallback(() => {
    return console.log(item.id);
  }, [item]);
  return (
    <div>
      <li>
        <b>
          <input
            type="checkbox"
            onChange={checkedToggle}
            checked={item.checked}
          />
        </b>
        {item.text}
        <button onClick={deleteItem}>X</button>
      </li>
    </div>
  );
}

export default TodoItem;
