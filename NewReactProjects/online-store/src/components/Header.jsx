import React from 'react';

const Header = (props) => {

    const cart = props.shoppingCart;

    return (
        <>
        Header
            <p>{cart.items.length}</p>
        </>
    );
};

export default Header;
