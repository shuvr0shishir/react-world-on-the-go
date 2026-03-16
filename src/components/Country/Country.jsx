import React, { useState } from 'react';
import './Country.css'


const Country = ({ country, handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false);
    function handleCountryVisit() {
        // setVisited(visited ? false : true);

        // modern way
        // setVisited(!visited)

        setVisited(true)
        handleVisitedCountries(country);
    };


    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <div>

            <img style={{width:'100%'}} src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            </div>
            <h3>Name: {country.name.common}</h3>
            <p>Area: {country.area.area} km<sup>2</sup> {country.area.area > 300000 ? '(Big Country)' : ''}</p>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Continents: {country.continents.continents}</p>
            <button onClick={handleCountryVisit}>{visited ? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;

/**
 * {
    "name": {
        "common": "Samoa",
        "official": "Independent State of Samoa"
    },
    "ccn3": {
        "ccn3": "882"
    },
    "currencies": {
        "currencies": {
            "WST": {
                "name": "Samoan tālā",
                "symbol": "T"
            }
        }
    },
    "capital": {
        "capital": [
            "Apia"
        ]
    },
    "region": {
        "region": "Oceania"
    },
    "languages": {
        "languages": {
            "eng": "English",
            "smo": "Samoan"
        }
    },
    "area": {
        "area": 2842
    },
    "cca3": {
        "cca3": "WSM"
    },
    "population": {
        "population": 198410
    },
    "continents": {
        "continents": [
            "Oceania"
        ]
    },
    "flags": {
        "flags": {
            "png": "https://flagcdn.com/w320/ws.png",
            "svg": "https://flagcdn.com/ws.svg",
            "alt": "The flag of Samoa has a red field. A blue rectangle, bearing a representation of the Southern Cross made up of five large and one smaller five-pointed white stars, is superimposed in the canton."
        }
    }
}
 */