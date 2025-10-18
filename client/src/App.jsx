import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Register from './component/Register'
import CheckStatus from './component/check'
import { Route,Routes } from 'react-router-dom'
import Api from './component/Api'
function App() {
  const [count, setCount] = useState(10)
  return (
    <>
     
      <div class="accent-purple-600">
        <Nav />
        <Api />
        <Routes>
          <Route path = "/register" element={<Register />} />
          <Route path = "/Check" element={<CheckStatus />} />
        </Routes>
        
        {/* <CheckStatus />
        <Register /> */} 
        </div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
  
}
export default App
