import React from 'react'
import './background.css'

const Background = () => {
  return (
    <div className="background">
        <div className="title">
          <h1>The Barn Yard</h1>
        </div>
        <div className="sky"></div>
        <div className="horizon"></div>
        <div className="hill left"></div>
        <div className="hill right"></div>
        <div className="hill middle"></div>
        <div className="fence"></div>

        <div className="barn-fg"></div>
    </div>
  )
}

export default Background