import { useState } from 'react'
import './App.css'
import Barn from './components/barn.jsx';
import Content from './components/content.jsx'
import Background from './components/background.jsx'
import Duck from './components/Duck.jsx'

function App() {

  const [open, setOpen] = useState(false)

  function dooOpen() {
    
  } 

  return (
    <>
    {/* <section
        className="colorBox"
        style={{
            backgroundColor: colorValue,
            color: isDarkText ? "#000" : "#FFF"
        }}
    >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
    </section> */}
      
      <div>

        <Barn />

        
        <Content />
        <Background />

        <Duck />
      </div>
    </>
  )
}

export default App

