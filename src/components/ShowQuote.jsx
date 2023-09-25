import React, { useState, useEffect } from 'react'

const ShowQuote = () => {

    const [ visible, setVisible ] = useState('false');

    const toggleVisible = () => {
        setVisible(!visible)
      };


  return (
    <div>
        <button onClick={ toggleVisible }>QUOTE</button>
    </div>
  )
}

export default ShowQuote