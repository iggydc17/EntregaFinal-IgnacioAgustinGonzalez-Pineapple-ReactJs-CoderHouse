import { useNavigate } from "react-router-dom";
import { useOrder } from "../../../contexts/OrderContext";
import { useEffect, useState } from "react";
import SummarySideInfo from "../../SummarySideInfo/SummarySideInfo";
import { toast } from "react-toastify";
import { useCart } from "../../../hooks/useCart";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../../libraries/firebase";
import '../BuyInfoForms.css';


const PaymentInfo = () => {
    const [formData, setFormData] = useState({
        cardholderName: '',
        cardType: 'Visa',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const [orderCreated, setOrderCreated] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { order, setOrder } = useOrder();
    const { cart, totalQuantity, getTotalPrice } = useCart();
    const navigate = useNavigate();

    const total = getTotalPrice();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOrderGeneration = async (e) => {
        e.preventDefault();
        console.log('Submitting Payment Info:', formData);

        const updatedOrder = {
            ...order,
            paymentInfo: formData
        };

        setOrder(updatedOrder);
        console.log('Order after setting payment info:', updatedOrder);

        toast.success("Payment Info passed successfully!");

        setIsLoading(true);
        try {
            const objectOrder = {
                buyerPersonalInfo: order.personalInfo,
                shippingInfo: order.shippingInfo,
                paymentInfo: updatedOrder.paymentInfo,
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            };

            console.log('Creating order:', objectOrder);

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
                    batch.update(doc.ref, { stock: stockDB - productQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objectOrder);
                toast.success(`The order's id is: ${orderAdded.id}`);
                setOrderCreated(true);
            } 
            else {
                toast.error("Product out of stock.");
            }
        } catch (error) {
            setFetchError(error);
        } finally {
            setIsLoading(false);
        }

        setTimeout(() => {
            navigate("/check-summary-info/");
        }, 1500);
    };

    useEffect(() => {
        if (orderCreated) {
            toast.success("The order has been created successfully!");
        }
    }, [orderCreated]);

    if (fetchError) {
        return <p className='fetch-error'>{fetchError}</p>;
    }

    if (isLoading) {
        return <p className='is-loading'>Loading order...</p>;
    }

    document.title = "Payment Form - PineApple";

    return (
        <main className="cart-form-container payment-info-form-container">
            <h2>Payment Info</h2>
            <div className="forms-general-container">
                <form className="cart-form payment-cart-form" onSubmit={handleOrderGeneration}>
                    <label htmlFor="cardholder-name">Cardholder Name:</label>
                    <input
                        type="text"
                        name="cardholderName"
                        id="cardholder-name"
                        placeholder="John Doe"
                        value={formData.cardholderName}
                        onChange={handleChange}
                    />
                    <label htmlFor="card-type">Choose Payment Card Type:</label>
                    <div>
                        <input
                            name="cardType"
                            type="radio"
                            id="visa"
                            value="Visa"
                            checked={formData.cardType === 'Visa'}
                            onChange={handleChange}
                        />
                        <label htmlFor="visa">Visa</label>
                        <input
                            name="cardType"
                            type="radio"
                            id="mastercard"
                            value="Mastercard"
                            checked={formData.cardType === 'Mastercard'}
                            onChange={handleChange}
                        />
                        <label htmlFor="mastercard">Mastercard</label>
                    </div>
                    <label htmlFor="card-number-input">Card Number:</label>
                    <input
                        name="cardNumber"
                        type="text"
                        id="card-number-input"
                        placeholder="1111-1111-1111-1111"
                        value={formData.cardNumber}
                        onChange={handleChange}
                    />
                    <label htmlFor="expiry-date">Expiry Date:</label>
                    <input
                        name="expiryDate"
                        type="text"
                        id="expiry-date"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleChange}
                    />
                    <label htmlFor="cvv">CVV:</label>
                    <input
                        name="cvv"
                        type="text"
                        id="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleChange}
                    />
                    <div className='generate-order-button-container'>
                        <button type="submit" className='generate-order-button'>Generate Order</button>
                    </div>
                </form>
                <div className="summary-side-container">
                    <SummarySideInfo />
                </div>
            </div>
        </main>
    );
}

export default PaymentInfo;
