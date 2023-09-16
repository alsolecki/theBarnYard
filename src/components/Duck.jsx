import React from 'react'
import './duck.css'

const Duck = () => {
  return (
    <div className="duck">
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