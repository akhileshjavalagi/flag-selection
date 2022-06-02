import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Flag from './components/Flag'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Flag/>
    </div>
  )
}

export default App
