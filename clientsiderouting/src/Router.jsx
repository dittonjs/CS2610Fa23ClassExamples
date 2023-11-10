import { useEffect, useState } from "react";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

const routes = {
  '#/': Home,
  '#/dashboard': Dashboard,
  '#/profile': Profile,
}


export function Router() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setHash(window.location.hash);
    })
  }, [])

  const Page = routes[hash]

  return (
    <div>
      <div>
        <a href="#/">Home</a>
        <a href="#/dashboard">Dashboard</a>
        <a href="#/profile">Profile</a>
        <a href="#/settings">Settings</a>
      </div>
      {Page ? <Page /> : <h1>Not found</h1>}
    </div>
  )
}
