import React, { useState, useEffect } from 'react'
import './Quote.css'
import GetQuote from './GetQuote.jsx'


const quoteBubble = document.querySelector('quote-bubble');

const Quote = ({ setOpenModal }) => {

    const pullQuote = (quote) => {
        console.log(quote);
    }

  return (
    <>
        <div className="titleCloseBtn">
            <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        <GetQuote
          func={pullQuote}
         />
        
    </>
  )
}



export default Quote