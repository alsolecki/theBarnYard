import React, { useState, useEffect } from 'react'

const FetchQuote = ({ setQuote }) => {

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

    //Logic for randomizing then setting quote
    const random30 = Math.floor(Math.random() * 30);
    const randomQuote = data.quotes[random30].quote;
    setQuote(randomQuote);
    
  return (
    <>
    </>
  )
}

export default FetchQuote