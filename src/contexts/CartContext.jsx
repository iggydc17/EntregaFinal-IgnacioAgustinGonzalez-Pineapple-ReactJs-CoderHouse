import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    // localStorage trigger
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCart(storedCart);
        }
    }, []);

    // Update localStorage
    const updateLocalStorage = (newCart) => {
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    // Check if is in Cart.
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    // Add item to Cart.
    const addItem = (productToAdd) => {
        const index = cart.findIndex(prod => prod.id === productToAdd.id);

        if (index !== -1) {
            // Product is already in cart, update its quantity
            const updatedCart = [...cart];
            updatedCart[index].quantity += productToAdd.quantity;
            setCart(updatedCart);
            updateLocalStorage(updatedCart);
        } else {
            // Product is not in cart, add it
            const updatedCart = [...cart, productToAdd];
            setCart(updatedCart);
            updateLocalStorage(updatedCart);
        }
    }
    // Remove item from de Cart.
    const removeItem = (id) => {
        const cartUpdated = cart.filter((prod) => prod.id !== id);
        setCart(cartUpdated);
        updateLocalStorage(cartUpdated);
    }

    // Clear Cart.
    const clearCart = () => {
        setCart([]);
        updateLocalStorage([]);
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

