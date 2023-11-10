import { useParams, useNavigate } from "react-router-dom"

export function Profile() {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>I am on the profile page for user with id {params.id}!</h1>
    </>
  )
}