import React from 'react';
import './Cosmetic.css';


const Cosmetic = (props) => {

    const {name, price, id} = props.cosmetic;

    // Use local Storage to Manage cart Data
    const addToCart = (id) => {

    let shoppingCart;

    // get the shopping cart

    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {

        shoppingCart = JSON.parse(storedCart);
    }

    else {
     shoppingCart = {};
    }
     
    // Add Quantity
    const quantity = shoppingCart[id];

    if (quantity) {
      
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }

    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        
    }
    return (
        <div className='product'>
            <h2>Buy This: {name} </h2>
            <p>Only for: ${price}</p>
            <p><small>Unique Id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;