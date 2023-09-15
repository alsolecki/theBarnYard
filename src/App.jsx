import { useState } from 'react'
import './App.css'
import Barn from './components/barn.jsx';
import Content from './components/content.jsx'
import Background from './components/background.jsx'

function App() {
  const [count, setCount] = useState(0)

  function dooOpen() {
    
  } 

  return (
    <>
      
      <div>
        <Barn />
        <Content />
        <Background />
      </div>
    </>
  )
}

export default App
