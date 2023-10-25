import { useState } from "react";

export function InputForm(props) {
  const [currentTodo, setCurrentTodo] = useState("");
  const {
    saveTodo
  } = props;

  function validateTodo() {
    if (!currentTodo) {
      // do something it indicate an error occurred
    } else {
      setCurrentTodo("")
      saveTodo(currentTodo)
    }
  }

  return (
    <div>
      <input
        value={currentTodo}
        onChange={e => setCurrentTodo(e.target.value)}
        type="text"
      />
      <button onClick={validateTodo}>Save</button>
    </div>
  )
}