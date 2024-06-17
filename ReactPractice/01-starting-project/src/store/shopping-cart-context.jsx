import { createContext } from "react";

// Can pass value in createContext() that will be provided to multiple components 
// all the components that will be wrapped by this context
const CartContext = createContext({
    items: []
});

export default CartContext;