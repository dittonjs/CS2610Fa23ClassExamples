import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './Input';

function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)

  function submit() {
    setEmailError(true);
    setPasswordError(true);
  }

  return (
    <>
      <div>
        <Input
          type="email"
          value={email}
          hasError={emailError}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Input
          type="password"
          value={password}
          hasError={passwordError}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button onClick={submit}>Login</button>
    </>
  )
}

export default App
