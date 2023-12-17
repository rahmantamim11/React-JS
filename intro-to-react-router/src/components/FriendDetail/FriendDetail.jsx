import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    return (
        <div style={{backgroundColor: 'salmon', margin: '10px', padding: '10px', borderRadius: '10px'}}>
            <h2>Everything About This Person is Here</h2>
            <h4>Name: {friend.name}</h4>
            <h6>Phone Number: {friend.phone}</h6>
        </div>
    );
};

export default FriendDetail;