import React, { useState, useEffect } from 'react'
import './Quote.css'

const Quote = () => {

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState('true');
    const [ error, setError ] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                setData(data)
            })
            .then(error => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(()=> {
                setLoading(false);
            })

    }, []);

    if (loading) return "Loading...";
    if (error) return "Error!";


    const random30 = Math.floor(Math.random() * 30);
    console.log(data.quotes[random30].quote);

    const randomQuote = data.quotes[random30].quote;


  return (
    <>

        <div className="quote">{ randomQuote }</div>
        <div className="quote-tail"></div>

    </>
  )
}

export default Quote