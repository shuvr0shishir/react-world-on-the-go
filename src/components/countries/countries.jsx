import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ fetchCountries }) => {
    const countriesData = use(fetchCountries);
    const allCountries = countriesData.countries;



    const [visitedCountries, setVisitedCountries] = useState([]);

    function handleVisitedCountries(country) {
        setVisitedCountries([...visitedCountries, country])
    };


    return (
        <div >
            <h2>All Countries Here: {allCountries.length}</h2>
            <h3>Visited Countries: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.ccn3.ccn3}>
                        {country.name.common} <img style={{ height: '15px' }} src={country?.flags?.flags?.png} />
                    </li>)
                }
            </ol>


            <div className="countriesContainer">
                {
                    allCountries.map(country => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;