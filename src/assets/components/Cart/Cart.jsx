import React from 'react';
import Bottle from '../Bottle/Bottle';
import './cart.css'


const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div className='cart-container'     >
           {
            cart.map(bottle =>  <div key={bottle.id}>
                <img 
                src={bottle.image_url}
                
                />  
                
                <button onClick={() => handleRemoveFromCart(bottle.id)}> x </button>
            </div> )
           }
        </div>
    );
};

export default Cart;