import React, { useEffect, useState } from 'react'
import './Dadjoke.css'

const Origin = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        fetch('https://randomuser.me/api')
            .then(response => {
                if (response.ok) {
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

    console.log(data.results[0].location.country);

    let randomName = data.results[0].name.first;
    let randomCountry = data.results[0].location.country;

  return (
    <>
        <div className="joke noshow">{ randomName }</div>
        <div className="country show">{ randomCountry }</div>
    </>
  )
};

export default Origin;
