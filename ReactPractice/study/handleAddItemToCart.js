const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

function handleAddItemToCart(id) {
    // Passing in the ID from the Product list being mapped through as a Product component 
    setShoppingCart((prevShoppingCart) => {

        // Assigning the previous shopping card to updatedItems 
      const updatedItems = [...prevShoppingCart.items];

      // Finding the product object where its ID is the same as the ID passed in the function.
      // Finding its index in the shoppingCard array 
      // Returns -1 if no match is found (item is not yet in the shopping cart)
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );

      // Using the index to get the object
      const existingCartItem = updatedItems[existingCartItemIndex];

      // If the cart already has the item 
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem, quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }