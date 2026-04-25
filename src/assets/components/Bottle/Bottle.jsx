import React from 'react';
import './Bottle.css';

const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(bottle);
    const { image_url, bottle_name , btl_capacity, materials, bottle_price } = bottle;
    
    return (
        <div className='btl-card'>
            <img src={image_url}  />
            <h2>Name: {bottle_name}</h2>
            <h3>Capacity: {btl_capacity}</h3>
            <h3> Materials: {materials}</h3>
            <h2>Price: ${bottle_price}</h2>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;