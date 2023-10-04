import { useState } from 'react'
import './App.css'
import Barn from './components/barn.jsx';
import Content from './components/content.jsx'
import Background from './components/background.jsx'
import Duck from './components/Duck.jsx'
import Cow from './components/Cow.jsx'
import Cloud from './components/Cloud.jsx'
import Navbar2 from './navbar/Navbar2.jsx'


function App() {

  const [openModal, setOpenModal] = useState(false);

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
      <Navbar2 />
      <div>
        <Barn />
        <Content />
        <Background />
        <button 
          className={openModal ? "hide" : "quote-button" }
          onClick={() => {
            setOpenModal(true)
          }}>
        {"Get Quote"}
        </button>

        <Cow />
        <Duck />

        {openModal && <Cloud closeModal={setOpenModal}  />}
       
      </div>
    </>
  )
}

export default App

