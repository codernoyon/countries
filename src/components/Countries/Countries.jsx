import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res=> res.json())
            .then(data => setCountries(data));
    }, []);

    // countries.map(country => console.log(country))

    return (
        <div className="container py-3 overflow-hidden">
            <div className="row g-4 px-3 px-md-0">
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    )
   
};

export default Countries;