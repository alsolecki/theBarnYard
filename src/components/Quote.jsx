import React, { useState, useEffect } from 'react'
import './Quote.css'
import GetQuote from './GetQuote.jsx'


const quoteBubble = document.querySelector('quote-bubble');

const Quote = () => {

    const [ visible, setVisible ] = useState('false');

    const toggleVisible = () => {
        setVisible(!visible)
      };
    
    console.log(quoteBubble);


  return (
    <>
        <GetQuote />
        <div className="button">
            <button onClick={ toggleVisible }>NEW QUOTE</button>
        </div>
    </>
  )
}



export default Quote