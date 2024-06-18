import React from 'react';

import Cart from './Cart';

const Header = (props) => {

    const cart = props.shoppingCart;
    const clicked = props.clicked;
    const openCart = props.openCart;

    return (
        <div>
            <h2>Welcome to Online-Store!</h2>
            <button onClick={openCart}>View your Cart {cart.items.length}</button>
            {
                clicked === true && <Cart />
            }
        </div>
    );
};

export default Header;
