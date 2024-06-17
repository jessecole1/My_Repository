import React from 'react';

const Header = (props) => {

    const cart = props.shoppingCart;

    return (
        <>
        <h3>Your cart</h3>
            <p>{cart.items.length}</p>
        </>
    );
};

export default Header;
