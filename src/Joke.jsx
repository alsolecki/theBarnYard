import React, { useState, useEffect } from 'react'
import  "./Dadjoke.css"

const Joke = () => {

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => {
               if(response.ok) {
                return response.json()
               } 
               throw response;
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })

    }, []);

    if (loading) return "Loading...";
    if (error) return "Error!";

   
    const randomNum = Math.floor(Math.random() * 250) 
    const randomCountryName = data[randomNum].name.common;
    const randomCountryFlag = data[randomNum].flag
    
   console.log(randomCountryFlag)
    
  return (
    <>
        <div className="joke show">{ randomCountryName }</div>
        <div className="joke flag show">{ randomCountryFlag }</div>
        
    </>
  )
}

export default Joke