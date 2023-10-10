import { useState } from 'react'
import './App.css'
import Barn from './components/barn.jsx';
import Background from './components/background.jsx'
import Duck from './components/Duck.jsx'
import Cow from './components/Cow.jsx'
import Cloud from './components/Cloud.jsx'
import Directions from './components/Directions.jsx'
import Navbar2 from './navbar/Navbar2.jsx'
import Cartoon from './components/Cartoon.jsx'


function App() {

  const [openModal, setOpenModal] = useState(false);
  const [viewCow, setViewCow] = useState(false);
  const [viewDuck, setViewDuck] = useState(false);

  const [door, setDoor] = useState(true);
  const [directionStep, setDirectionStep ] = useState(1);
  const [step, setStep] = useState(1);

  function handleClick() {
    setStep(step + 1);
  }

  const changeStep = () => {
    () => {
      setDirectionStep(0);
    }
    console.log('open door');
  }

  if (!door) { () => { changeStep() }  };


  return (
    <>   
      <Navbar2 />

      

      <div>
        <Barn door={ door }
              setDoor={ setDoor }
              message='release the animals!'
              setDirectionStep={ setDirectionStep }
              directionStep={ directionStep }
        />
        <Background />
        
        <Directions setDirectionStep={ setDirectionStep }
                    directionStep={ directionStep }
                    door={ door }
                    message='good day'
        />

        {viewCow && <Cow closeModal={ setViewCow } />}
        
        {viewDuck && <Duck viewDuck={ setViewDuck } />}

        {openModal && <Cloud closeModal={setOpenModal}  />}

        {/* <Cartoon /> */}
       
      </div>
    </>
  )
}

export default App

