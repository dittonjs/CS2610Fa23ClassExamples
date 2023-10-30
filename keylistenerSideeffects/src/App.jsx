import { useState, useEffect } from 'react';

export function App() {
  const [value, setValue] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    console.log("I get called");
  }, [])

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false)
      }, 3000)
    }
  }, [showToast])

  return (
    <div>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => {
        setShowToast(true);
      }}>Show Toast</button>
      {showToast && <div>Toast!</div>}
      {/* ... */}
      <button onClick={() => setShowToast(true)}>
        Show toast again
      </button>
    </div>
  )
}
