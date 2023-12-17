import React from 'react';
import "./Friend.css"
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend)
    const {id, name, email, phone} = friend;
    return (
        <div className='friend'>
            <h1>{name}</h1>
            <h4>Email: {email}</h4>
            <h6>Phone Number: {phone}</h6>
            <p><Link to={`/friend/${id}`} >Show Me Details</Link></p>
        </div>
    );
};

export default Friend;