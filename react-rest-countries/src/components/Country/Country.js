import React from 'react';
import './Country.css'

const Country = (props) => {

    // console.log(props.country.area);
    return (
        <div className='country'>

            {/* <h2>Country Name: {props.country.name.common}</h2>
            <p>Population: {props.country.population}</p>
            <p><small>Region: {props.country.region}</small></p>
            <p><small>Area: {props.country.area}</small></p> */}

            <h2>Country Name: {props.name}</h2>
            {/* <img src={props.flags.png} alt="" /> */}
            <p>Population: {props.population}</p>
            <p><small>Region: {props.region}</small></p>
            <p><small>Area: {props.area}</small></p>
        
        </div>
    );
};

export default Country;
