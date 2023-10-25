import { useState } from 'react';
import { Todo } from './Todo';
import { InputForm } from './InputForm';

export function App() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false)

  function saveTodo(currentTodo) {
      const newTodo = {
        content: currentTodo,
        checked: false,
      }
      setTodos([...todos, newTodo])
  }

  function toggleTodo(todo) {
    todo.checked = !todo.checked;
    setTodos([...todos]);
  }

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        /> Show Completed
      </div>
      <InputForm saveTodo={saveTodo}/>
      <div>
        {
          todos.length === 0 ? (
            <div>Type something and press save!</div>
          ) : (
            todos.map((todo, index) => {
              return (!todo.checked || showCompleted) && (
                <Todo todo={todo} key={index} toggleTodo={toggleTodo} />
              )
            })
          )
        }
      </div>
    </div>
  )
}
