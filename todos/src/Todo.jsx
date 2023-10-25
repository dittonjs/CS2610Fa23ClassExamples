export function Todo(props) {
  const {
    todo,
    toggleTodo
  } = props;

  return (
    <div>
      <div>
        <input type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo)}/>
        {todo.content}
      </div>
    </div>
  )
}