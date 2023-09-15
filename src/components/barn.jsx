import React from 'react'
import './barn.css'
import { useState } from 'react'

const Barn = () => {

  function BarnDoor() {
    const [open, setOpen] = useState(true);

  }
  console.log('Open Door')
  return (
    <>
    <div className="barn"
      // onMouseEnter={() => setOpen(true)}
      // onMouseLeave={() => setOpen(false)}
      >
        <div className="barn-door left open"></div>
        <div className="barn-door right open"></div>
        <div className="front-wall"></div>
        <div className="front-door"></div>
        <div className="roof"></div>
    </div>
    </>
  )
}

export default Barn