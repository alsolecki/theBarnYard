import React from 'react'
import './Cow.css'

const Cow = () => {
  return (
    <div className="cow">
        <div className="cow-head">
        <div>
            <div className="cow-ear right"></div>
            <div className="cow-ear left"></div>
        </div>
            <div className="cow-eye right">
            <div className="cow-eye-outer"></div>
            <div className="cow-eye-inner"></div>
        </div>
            <div className="cow-eye left">
            <div className="cow-eye-outer"></div>
            <div className="cow-eye-inner"></div>
        </div>
        <div>
            <div className="cow-mouth-outer"></div>
            <div className="cow-nostril left"></div>
            <div className="cow-nostril right"></div>

        </div>
        </div>
        <div className="cow-body"></div>
        <div className="cow-leg left front"></div>
        <div className="cow-leg right front"></div>
        <div className="cow-leg left back"></div>
        <div className="cow-leg right back"></div>
        <div className="cow-leg tail"></div>

    </div>
  )
}

export default Cow