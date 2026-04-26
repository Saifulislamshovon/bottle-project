const getCartFromLocalStorage = () => {
    const cartItem = localStorage.getItem('cart');
    if(cartItem){
        return JSON.parse(cartItem); 
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const removeFromLS = id => {
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !== id );
    saveCartToLS(remainingCart);
}

const getItemToCartLS = id => {
    const cart = getCartFromLocalStorage();
    cart.push(id);   
    
    // save the cart in LS
    saveCartToLS(cart); 
}

export{ getCartFromLocalStorage, getItemToCartLS , removeFromLS}