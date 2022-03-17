import React from 'react';
import "./Country.css";

const Country = (props) => {
    const { name, capital, flags, region, currency, population, timezones, cca2 } = props.country;
    console.log(name.common);
    return (
        <div className='col-md-6 col-lg-4'>
            <div className="country shadow-sm p-3 rounded-2">
                <div className="d-flex align-items-center mb-3">
                    <div className="w-25 me-3">
                        <img className='w-100' src={flags.png} alt="" />
                    </div>
                    <h5>{name.common} ({cca2})</h5>
                </div>
                <div className="country-details text-start">
                    <p className='m-0'><strong>Capital</strong> {capital}</p>
                    <p className='m-0'><strong>Population</strong> {population}</p>
                    <p className='m-0'><strong>Region</strong> {region}</p>
                    <p className='m-0'><strong>Time Zone</strong> {timezones}</p>
                </div>
            </div>
        </div>
    );
};

export default Country;