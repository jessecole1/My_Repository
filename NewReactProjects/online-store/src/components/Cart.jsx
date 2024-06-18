import React from 'react';

const Cart = (props) => {

    const shoppingCart = props.shoppingCart.items;
    const handleCartItemQuantity = props.handleCartItemQuantity;


    return (
        <div>
            <ul>
            {
                shoppingCart.map((product, key) => (
                    <div>
                        <li>{product.name}</li>
                        <li>{product.price}</li>
                        <p>Quantity: {product.quantity}</p>
                        <button onClick={() => handleCartItemQuantity(product.id, 1)} class="border p-2">+</button>
                        {/* <button onClick={() => handleCartItemQuantity(product.id, -1)} class="border p-2">-</button> */}
                    </div>
                ))
            }
            </ul>
        </div>
    );
};

export default Cart;
