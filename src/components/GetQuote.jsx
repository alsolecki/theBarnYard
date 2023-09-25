import React, { useState, useEffect } from 'react'

const GetQuote = () => {

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
        <div className="quote-bubble">
            <p>{ randomQuote }</p>
        </div>
        <div className="quote-tail"
                style={ tailPosition }></div>
    </>
  )
}

const tailPosition = { "position" : "relative", "top" : "-320px", "left" : "90px" };

export default GetQuote