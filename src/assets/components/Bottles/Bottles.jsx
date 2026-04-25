import React from 'react';
import { use } from 'react';
import Bottle from './../Bottle/Bottle';
import './Bottles.css';
import { useState } from 'react';


const Bottles = ({bottlesPromise}) => {

    const bottles = use(bottlesPromise);
    // console.log(bottles);

    const [cart , setCart] = useState([]);

    const handleAddToCart = (bottle) => {
        const newCart = [...cart , bottle];
        setCart(newCart);
        console.log('button clicked', bottle);
    }

    return (
<>
 <h1>Totall Bottle: {bottles.length}</h1>
        <div className='all-bottles'>
        
{
     
                bottles.map(bottle => 
                <Bottle key = {bottle.id}
                bottle= {bottle}
                handleAddToCart= {handleAddToCart}
                >
                 </Bottle>)
                
}
        </div>

</>  );
};

export default Bottles;