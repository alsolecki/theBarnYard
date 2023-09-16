import React from 'react'
import { useState } from 'react'

import './barn.css'

const Barn = () => {

  const [open, setOpen] = useState(true);
  const toggleDoor = () => {
    setOpen(!open)
  };

  return (
    <>
    <div className="barn">
        <div className={ open ? "barn-door left open" : "barn-door left"}
            onClick={ toggleDoor }></div>
        <div className={ open ? "barn-door right open" : "barn-door right"}
            onClick={ toggleDoor }></div>
        <div className="front-wall"></div>
        <div className="front-door"></div>
        <div className="roof"></div>
    </div>
    </>
  )
}

export default Barn