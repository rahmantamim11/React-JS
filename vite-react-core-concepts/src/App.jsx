/* eslint-disable react/jsx-no-undef */
import { useState } from 'react'
import './App.css'
import Device from './components/device/device'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Device name="Uphone" price="70700"></Device>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
