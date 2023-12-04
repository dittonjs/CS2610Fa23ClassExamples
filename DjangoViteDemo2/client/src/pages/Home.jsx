import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { makeRequest } from "../utils/make_request";

export function Home() {
  const [searchParams] = useSearchParams()
  const [notes, setNotes] = useState([]);
  const [numPages, setNumPages] = useState(1);
  async function getNotes() {
    const results = await makeRequest(`/api/notes/?page=${searchParams.get('page')}`)
    setNotes(results.notes);
    setNumPages(results.num_pages);
    console.log(results);
  }

  useEffect(() => {
    getNotes()
  }, [searchParams.get("page")])

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
        <div className="pages">
          {
            Array.from({length: numPages}, (x, i) => {
              return (
                <Link to={`/?page=${i+1}`}>{i+1}</Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}