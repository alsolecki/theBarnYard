import { useState } from 'react'
import './App.css'
import Barn from './components/barn.jsx';
import Content from './components/content.jsx'
import Background from './components/background.jsx'
import Duck from './components/Duck.jsx'
import Cow from './components/Cow.jsx'
import Dadjoke from './Dadjoke.jsx'
import Origin from './Origin.jsx'
import Joke from './Joke.jsx'
import Quote from './components/Quote.jsx'


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
        {/* <Dadjoke /> */}
        {/* <Joke /> */}
        {/* <Origin /> */}
        <Quote />
      </div>
    </>
  )
}

export default App

