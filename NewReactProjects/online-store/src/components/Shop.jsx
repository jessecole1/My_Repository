import React from 'react';

import { DUMMY_PRODUCTS } from '../dummy-products';
import Product from './Product';

const Shop = (props) => {

    const onAddItem = props.onAddItemToCart;

    return (
        <div class="pt-4">
            <ul>
                {
                    DUMMY_PRODUCTS.map((product) => (
                        <li>
                            <Product product={product} onAddItem={onAddItem}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Shop;
