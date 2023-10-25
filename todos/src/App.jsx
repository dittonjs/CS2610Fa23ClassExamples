import { useState } from 'react'


export function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  console.log(todos);

  function saveTodo() {
    if (!currentTodo) {
      // do something it indicate an error occurred
    } else {
      setCurrentTodo("")
      const newTodo = {
        id: "asdflkj1q23",
        content: currentTodo,
        checked: false,
      }
      setTodos([...todos, newTodo])
    }
  }

  function toggleTodo(todo) {
    todo.checked = !todo.checked;
    setTodos([...todos]);
  }

  return (
    <div>
      <div>
        <input
          value={currentTodo}
          onChange={e => setCurrentTodo(e.target.value)}
          type="text"
        />
        <button onClick={saveTodo}>Save</button>
      </div>
      <div>
        {
          todos.length === 0 ? (
            <div>Type something and press save!</div>
          ) : (
            todos.map((todo, index) => {
              return !todo.checked && (
                  <div key={index}>
                    <div>
                      <input type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo)}/>
                      {todo.content}
                    </div>
                  </div>
                )
            })
          )
        }
      </div>
    </div>
  )
}
