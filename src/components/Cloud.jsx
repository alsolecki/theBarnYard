import React, { useState } from 'react'
import './Cloud.css'
import FetchQuote from './FetchQuote.jsx'

const tailPosition = { "position" : "relative", 
                            "top" : "-320px", 
                           "left" : "90px" };

const Cloud = ( { closeModal } ) => {

    const [quote, setQuote] = useState('Placeholder Quote.')

  return (
    <div id="cloud">
        <div className="quote-parts">
            <button className="cloud-close-btn" onClick={() => {
                closeModal(false)
            }}>X</button>
            <p>{ quote }</p>
            <div className="quote-tail"
                style={ tailPosition }></div>
        </div>

           <FetchQuote setQuote={ setQuote } /> 

    </div>
  )
}

export default Cloud