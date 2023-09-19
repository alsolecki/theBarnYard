import { useState } from 'react'
import './App.css'
import Barn from './components/barn.jsx';
import Content from './components/content.jsx'
import Background from './components/background.jsx'
import Duck from './components/Duck.jsx'
import Cow from './components/Cow.jsx'

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
      {/* <Navbar2 /> */}

      <div>
        <Barn />

        <Content />
        <Background />

        <Duck />
        <Cow />
      </div>
    </>
  )
}

export default App

