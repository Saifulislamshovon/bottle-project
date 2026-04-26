import React, { useEffect } from 'react';
import { use } from 'react';
import Bottle from './../Bottle/Bottle';
import './Bottles.css';
import { useState } from 'react';
import { getItemToCartLS, getCartFromLocalStorage } from '../../../utilities/LocalStorage';
import Cart from './../Cart/Cart'




function Bottles({ bottlesPromise }) {

    const bottles = use(bottlesPromise);
    // console.log(bottles);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        // console.log('button clicked', bottle);
        //save the bottle id to LS
        getItemToCartLS(bottle.id);
    };

    useEffect(() => {
        const storedIds = getCartFromLocalStorage();
        // console.log(storedIds, bottles);
        const storedCart = [];

        for (const id of storedIds) {
            // console.log(id)
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }
        // console.log("storeCart" , storedCart);
        setCart(storedCart);

    }, [bottles]);

    const handleRemoveFromCart = id =>{
        // console.log("remove clicked", id );
        const remainingCart = cart.filter(bottle => bottle.id !== id  );
        setCart(remainingCart);
    }

    return (
        <>
            <h1>Totall Bottle: {bottles.length}</h1>
            <h3> Item in the Cart: {cart.length} </h3>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}  ></Cart>
            <button>x</button>
            <div className='all-bottles'>

                {bottles.map(bottle => <Bottle key={bottle.id}
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}
                >
                </Bottle>)}
            </div>

        </>);
}

export default Bottles;