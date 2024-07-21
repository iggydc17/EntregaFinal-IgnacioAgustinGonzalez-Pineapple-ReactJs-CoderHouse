import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    console.log(cart);

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    // Add to Cart.
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd]);
        }
        else {
            console.error("The product is already in the Cart.");
        }
    }

    // Calculate total quantity of elements in the Cart.
    const getTotalQuantity = () => {
        let amount = 0;
        cart.forEach(prod => {
            amount += prod.quantity
        });

        return amount;
    }

    const totalQuantity = getTotalQuantity();

    
    
    //Calculate total price of elements in the Cart.
    const getTotalPrice = () => {
        let total = 0;
        cart.forEach(prod => {
            total += prod.price * prod.quantity
        });

        return total;
    }

    const totalToPay = getTotalPrice();
    
    // Delete an item in the Cart.
    /*  const deleteItem = (id) => {

    } */
    
    const obj = { cart, isInCart, addItem, totalQuantity, totalToPay }

    return (
        <CartContext.Provider value={ obj }>
            { children }
        </CartContext.Provider>
    );
}

