import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lewis L. Wood Home</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
Here I begin hosting my website on my Kubernetes server.  Current two Raspberry PI's make up this kubernetes server in my home office. I plan on implementing a variety of servers, databases, and much more.  So keep checking back.

        </p>
      </div>
      <p className="read-the-docs">
The blog  will be coming soon!!
      </p>
    </>
  )
}

export default App
