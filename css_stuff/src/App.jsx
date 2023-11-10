import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './Input';

const letters = "asdfjkl;".split("")

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
      <div className="row">
        {
          letters.map(letter => (
            <div className="letter">{letter}</div>
          ))
        }
      </div>
    </>
  )
}

export default App
