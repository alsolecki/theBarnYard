import './barn.css'
import Duck from './Duck.jsx'
import Cow from './Cow.jsx'

function Barndoor( {doorIsClosed, setDoorIsClosed} ) {

  const toggleDoor = () => {
    setDoorIsClosed(!doorIsClosed)
  };

  return (
    <>
      <div 
        className={ doorIsClosed ? "barn-door left open" : "barn-door left"}
          onClick={ toggleDoor }
      >
      </div>
      <div
        className={ doorIsClosed ? "barn-door right open" : "barn-door right"}
          onClick={ toggleDoor }
      >
      </div>
    </>
  )
} 


const Barn = ({ doorIsClosed, setDoorIsClosed, duckIsVisible, cowIsVisible }) => {

  return (
    <div className="barn-container">
      <div className="barn">
          <Barndoor 
               doorIsClosed={ doorIsClosed }
            setDoorIsClosed={ setDoorIsClosed }/>

          <div className="front-wall"></div>
          <div className="front-door"></div>
          <div className="roof"
              onDoubleClick={() => console.log('rooftime')}></div>
      </div>

      {duckIsVisible && <Duck />}
      {cowIsVisible && <Cow />}
      
    </div>


  )
}

export default Barn