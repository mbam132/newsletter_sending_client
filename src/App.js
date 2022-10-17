import React, { useRef } from 'react'
import './App.css'
import Homepage from "./pages/Homepage/index.tsx"

function App() {
  const inputRef = useRef(null)


  const onClickHandler = () => {
    console.log(inputRef.current.value)
    inputRef.current.focus()
  }

  return (
    <>
    <h1>the header</h1>
    <p>the paragraph</p>

    <input ref={inputRef} type="text"/>
    
    <button onClick={onClickHandler}> click me</button>
    </>
  )
}

export default App
