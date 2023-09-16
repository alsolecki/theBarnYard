import React from 'react'
import './duck.css'
import { useState } from 'react';

const Duck = () => {

  const [ waddle, setWaddle] = useState(true)
  const toggleWaddle = () => {
    setWaddle(!waddle)
  };

  return (
    <div className={ waddle ? "duck" : "duck walk"}
          onClick={ toggleWaddle }
        >
        <div className="head"></div>
        <div className="eye">
            <div className="eye-outer"></div>
            <div className="eye-inner"></div>
        </div>
        <div className="bill">
            <div className="bill-top"></div>
            <div className="bill-bottom"></div>
        </div>
        <div className="body"></div>
        <div className="leg-left"></div>
        <div className="foot-left"></div>
    </div>
  )
}

export default Duck