import React, { useState } from 'react'
import './App.css'
import Barn from './components/barn.jsx';
import Steps from './components/Steps.jsx';
import Background from './components/background.jsx'
import Navbar2 from './navbar/Navbar2.jsx'
import Duck from './components/Duck.jsx'


function App() {

  const [doorIsClosed, setDoorIsClosed] = useState(true);
  const [ duckIsVisible, setDuckIsVisible ] = useState(false);
  const [ cowIsVisible, setCowIsVisible ] = useState(false);

  return (
    <>   
      <Navbar2 />

      <Background />

      <Barn doorIsClosed={ doorIsClosed }
            setDoorIsClosed={ setDoorIsClosed }
            duckIsVisible={ duckIsVisible }
            cowIsVisible={ cowIsVisible }
        />
      
      <Steps doorIsClosed={ doorIsClosed }
            duckIsVisible={ duckIsVisible }
            setDuckIsVisible={ () => setDuckIsVisible() }
            cowIsVisible={ cowIsVisible }
            setCowIsVisible={ setCowIsVisible }
      />
      
      {duckIsVisible && <Duck />}

    </>
  )
}

export default App

