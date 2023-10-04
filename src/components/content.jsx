import React from 'react'
import { useState } from 'react'
import './content.css'


const Content = () => {

  const [check, setCheck] = useState(true);
  const toggleCheck = () => {
    setCheck(!check)
  };

  return (
    <>
      <div className="content">
       <h1 className="title">The Barn Yard</h1>
       <div>
        <ul className="animal-list">
          <li className="avatar hide">
          <p>Duckie</p></li>
          <li className="avatar hide">
          <p>Cowie</p></li>
          <li className="avatar hide">
          <p>Pigie</p></li>
          <li className="avatar hide">
          <p>Horsie</p></li>
          <li className="avatar hide">
          <p>Goatie</p></li>
          <li className="avatar hide">
          <p>Sheepie</p></li>
          <li className="avatar hide">
          <p>Doggie</p></li>
        </ul>
       </div>
        <section className="welcome-text">
          <p>A Place for Animals!</p>
        </section>
      </div>
    </>
  )
}

export default Content