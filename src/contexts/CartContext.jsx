import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    // Check if is in Cart.
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    // Add item to Cart.
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd]);
        }
        else {
            console.error("The product is already in the Cart.");
        }
    }

    // Remove item from de Cart.
    const removeItem = (id) => {
        const cartUpdated = cart.filter((prod) => prod.id != id)
        setCart(cartUpdated);
    }

    // Clear Cart.
    const clearCart = () => {
        setCart([]);
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
    
    const obj = { cart, isInCart, addItem, removeItem, clearCart, totalQuantity, getTotalPrice }

    return (
        <CartContext.Provider value={ obj }>
            { children }
        </CartContext.Provider>
    );
}

