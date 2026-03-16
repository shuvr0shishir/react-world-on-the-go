import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ fetchCountries }) => {
    const countriesData = use(fetchCountries);
    const allCountries = countriesData.countries;

    // console.log(allCountries);

    return (
        <div >
            <h2 style={{textAlign:'center', color:'yellow', margin:'20px auto'}}>All Countries Here: {allCountries.length}</h2>

            <div className="countriesContainer">
                {
                    allCountries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;