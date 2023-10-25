import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function App(props) {
  const [count, setCount] = useState(0);
  console.log(count);

  function increment() {
    setCount((asdf) => asdf + 1);
    setCount((asdf) => asdf + 1);
    setCount((asdf) => asdf + 1);
    setCount((asdf) => asdf + 1);
    setCount((asdf) => asdf + 1);
    setCount((asdf) => asdf + 1);
    setCount((asdf) => asdf + 1);
    setCount((asdf) => asdf + 1);
    setCount((asdf) => asdf + 1);
    setCount((asdf) => asdf + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
