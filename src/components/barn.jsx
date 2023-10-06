import React from 'react'

import './barn.css'

const Barn = ({ setDoor, door }) => {

  const toggleDoor = () => {
    setDoor(!door)
  };

  return (
    <>
    <div className="barn">
        <div className={ door ? "barn-door left open" : "barn-door left"}
            onClick={ toggleDoor }></div>
        <div className={ door ? "barn-door right open" : "barn-door right"}
            onClick={ toggleDoor }></div>
        <div className="front-wall"></div>
        <div className="front-door"></div>
        <div className="roof"
            onDoubleClick={() => console.log('rooftime')}></div>
    </div>
    </>
  )
}

export default Barn