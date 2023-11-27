import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeRequest } from "../utils/make_request";

export function Home() {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const results = await makeRequest("/api/notes/")
    setNotes(results.notes)
    console.log(results);
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <div>
      <Link to="/create_note">New Note</Link>
      <div>
        {
          notes.map(note => (
            <div key={note.id}>
              <h2>{note.title}</h2>
              <div>{note.content}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}