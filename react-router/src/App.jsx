import './App.css'
import { Outlet, Link } from 'react-router-dom'
function App() {

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
