/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Device = (props) => {
    return (
        <div>
            <h3>I have a Device: {props.name}</h3>
            <h4>Price: {props.price}</h4>
        </div>
    );
};

export default Device;