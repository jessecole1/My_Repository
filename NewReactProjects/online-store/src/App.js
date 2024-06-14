import './App.css';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import { useState } from 'react';

import Shop from './components/Shop';
import Header from './components/Header'

function App() {

  const [shoppingCart, setShoppingCart] = useState({
    items: []
  })

  const handleAddItemToCart = (id) => {
    console.log("getting here?");
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      const existingItem = updatedItems[existingItemIndex];

      if(existingItem) {
        const updatedItem = {
          existingItem, quantity: existingItem.quantity + 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        const newItem = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1
        });
        console.log(shoppingCart);
      }

      return {
        items: updatedItems
      };
    });
  }

  return (
    <div>
      <Header shoppingCart={shoppingCart}/>
      <Shop onAddItemToCart={handleAddItemToCart}/>
    </div>
  );
}

export default App;
