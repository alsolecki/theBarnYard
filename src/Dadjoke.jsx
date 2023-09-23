import React, { useState, useEffect} from 'react'
import './Dadjoke.css'

const Dadjoke = () => {

    //workflow function

   
 const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });

    const jsonJokeData = await response.json();

    const joke = jsonJokeData.joke; 
    return joke;

 }
 getDadJoke();

  return (
    <div className="joke noshow"
     style={{ "fontSize" : "1.3rem" }} >{ 'joke' }</div>
  )
}

export default Dadjoke