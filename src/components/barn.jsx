import React from 'react'
import { useState } from 'react'

import './barn.css'

const Barn = () => {

  const [open, setOpen] = useState(true);
  const toggleDoor = () => {
    setOpen(!open)
  };

  const handleClick = (e) => {
    console.log(e.target)
  }

  return (
    <>
    <div className="barn">
        <div className={ open ? "barn-door left open" : "barn-door left"}
            onClick={ toggleDoor }></div>
        <div className={ open ? "barn-door right open" : "barn-door right"}
            onClick={ toggleDoor }></div>
        <div className="front-wall"
            onDoubleClick={ handleClick }></div>
        <div className="front-door"></div>
        <div className="roof"
            onDoubleClick={() => console.log('rooftime')}></div>
    </div>
    </>
  )
}

export default Barn