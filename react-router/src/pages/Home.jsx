import { Link } from "react-router-dom"

const users = [
  {id: 1, name: "Joseph"},
  {id: 2, name: "Joseph"},
  {id: 3, name: "Joseph"},
  {id: 4, name: "Joseph"},
]


export function Home() {
  return (
    <div>
      {
        users.map(user => (
          <div key={user.id}>
            <Link to={`/profile/${user.id}`}>{user.name}</Link>
          </div>
        ))
      }
    </div>
  )
}