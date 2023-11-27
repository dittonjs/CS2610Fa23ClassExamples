import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../utils/make_request";

export function CreateNote() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    await makeRequest("/api/create_note/", "post", {
      title,
      content,
    });
    // TODO make sure request succeeded

    navigate(-1);
  }

  return (
    <div>
      <h2>New Note</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            <div>
              Content
            </div>
            <textarea value={content} onChange={e => setContent(e.target.value)}/>
          </label>
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}