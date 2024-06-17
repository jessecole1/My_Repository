import React from 'react';

const Product = (props) => {

    const p = props.product;

    const onAddItem = props.onAddItem;

    return (
        <>
            <ul>
                <li>{p.title}</li>
                <li>{p.price}</li>
                <button onClick={() => onAddItem(p.id)}>Add to Cart</button>
            </ul>
        </>
    );
};

export default Product;
