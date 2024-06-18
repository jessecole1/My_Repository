import React from 'react';

import Cart from './Cart';

const Header = (props) => {

    const cart = props.shoppingCart;
    const clicked = props.clicked;
    const openCart = props.openCart;
    const shoppingCart = props.shoppingCart;
    const handleCartItemQuantity = props.handleCartItemQuantity;

    return (
        <div class="border pb-4">
            <h2>Welcome to Online-Store!</h2>
            <button onClick={openCart}>View your Cart</button>
            {
                clicked === true && <Cart shoppingCart={shoppingCart} handleCartItemQuantity={handleCartItemQuantity}/>
            }
        </div>
    );
};

export default Header;
