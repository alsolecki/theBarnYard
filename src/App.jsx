import { useState } from 'react'
import './App.css'
import Barn from './components/barn.jsx';
import Content from './components/content.jsx'
import Background from './components/background.jsx'
import Duck from './components/Duck.jsx'

function App() {

  function openBarndoor() {
    const [open, setOpen] = useState(true);
    return open;
  }

  const toggleDoor = () => {


    console.log('toggleDoor')
    const doorOpen = openBarndoor();
    setOpen(doorOpen);
  } 

  return (
    <>   
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

