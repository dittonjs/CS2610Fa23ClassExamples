import { useEffect, useState } from 'react';

function App() {

  const [pressedKeys, setPressedKeys] = useState("")

  // one way to do this
  // useEffect(() => {
  //   const keydownListener = (e) => {
  //     if (e.repeat) return;
  //     setPressedKeys(pressedKeys + e.key)
  //     console.log(e);
  //   }

  //   window.addEventListener("keydown", keydownListener);
  //   return () => {
  //     window.removeEventListener("keydown", keydownListener);
  //   }
  // }, [pressedKeys]);

  // slightly shorted way to do this
  useEffect(() => {
    const keydownListener = (e) => {
      if (e.repeat) return;
      setPressedKeys(old => old + e.key)
      console.log(e);
    }

    window.addEventListener("keydown", keydownListener);
  }, []);

  useEffect(() => {
    const keyupListener = (e) => {
      setPressedKeys(old => old.replace(e.key, ""))
    }
    window.addEventListener("keyup", keyupListener);
  }, [])

  return (
    <>
      {pressedKeys}
    </>
  )
}

export default App
