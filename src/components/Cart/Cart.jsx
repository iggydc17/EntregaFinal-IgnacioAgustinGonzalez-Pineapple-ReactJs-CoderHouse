
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { db } from '../../libraries/firebase';
import { useOrder } from '../../contexts/OrderContext';
import './Cart.css';

const Cart = () => {

    const [orderCreated, setOrderCreated] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { cart, totalQuantity, getTotalPrice } = useCart();
    const { order } = useOrder();
    const total = getTotalPrice();

    useEffect(() => {
        if (orderCreated) {
            toast.success("The order has been created successfully!");
        }
    }, [orderCreated]);

    const createOrder = async () => {
        setIsLoading(true);
        try {
            const objectOrder = {
                buyerPersonalInfo: order.personalInfo,
                shippingInfo: order.shippingInfo,
                paymentInfo: order.paymentInfo,
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            };
            
            const ids = cart.map((prod) => prod.id);

            const productRef = collection(db, "pineappleProducts");
            const productsAddedFromDB = await getDocs(query(productRef, where(documentId(), "in", ids)));
            const { docs } = productsAddedFromDB;

            const outOfStock = [];
            const batch = writeBatch(db);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDB = dataDoc.stock;

                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const productQuantity = productAddedToCart?.quantity;

                if (stockDB >= productQuantity) {
                    batch.update(doc.ref, {stock: stockDB - productQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            });

            if(outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objectOrder);
                toast.success(`The order's id is: ${orderAdded.id}`);
                setOrderCreated(true);

                // clean cart
            } else {
                toast.warning("Product out of stock.");
            }
        } catch (error) {            
            setFetchError(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (fetchError) {
        return <p className='fetch-error'>{fetchError}</p>;
    }

    if (isLoading) {
        return <p className='is-loading'>Loading order...</p>;
    }

    document.title = "Cart - PineApple";

    return (
        <main className='cart-main'>
            <h1 className='cart-title'>Cart</h1>
            {totalQuantity === 0 ? (
                <div className='empty-cart-container'>
                    <h2 className='empty-cart-h2'>Your Cart is Empty</h2>
                    <Link className="go-to-store-button empty-cart-button" to={"/store/"} >Check out our store!</Link>
                </div>
            ) : (
                <>
                    <p className='total-products-in-cart'>Total products in the cart: <strong>{totalQuantity}</strong></p>
                    <div className='cart-products-resume-container'>
                        {cart.map((prod) => (
                            <CartItem key={prod.id} {...prod}  />
                        ))}
                    </div>
                    <div className='down-cart-container'>
                        <button className='clear-cart-button'>Clear Cart &nbsp; <i className="bi bi-trash3"></i></button>
                        <h3 className='cart-total-pay'>Total: ${total}</h3>
                        <Link 
                            to={"/buyer-personal-info-form/"}
                            className='go-to-store-button create-order-button'
                            onClick={createOrder} >
                                Generate Order 
                        </Link>
                    </div>
                </>
            )}
        </main>
    );
}

export default Cart;