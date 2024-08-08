import { useNavigate } from "react-router-dom";
import { useOrder } from "../../../contexts/OrderContext";
import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../../libraries/firebase";
import { useNotification } from "../../../hooks/useNotification";
import SummarySideInfo from "../../SummarySideInfo/SummarySideInfo";
import '../BuyInfoForms.css';


const PaymentInfo = () => {
    
    const [orderCreated, setOrderCreated] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { order, setOrder } = useOrder();
    const { cart, totalQuantity, getTotalPrice } = useCart();
    const { setNotification } = useNotification();
    const navigate = useNavigate();    
    const total = getTotalPrice();
    
    const [formData, setFormData] = useState({
        cardholderName: '',
        cardType: 'Visa',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    
    useEffect(() => {
        const savedData = localStorage.getItem('paymentInfo');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        localStorage.setItem('paymentInfo', JSON.stringify({ ...formData, [name]: value }));
    };

    const handleOrderGeneration = async (e) => {
        e.preventDefault();

        if (!formData.cardholderName || !formData.cardNumber || !formData.expiryDate || !formData.cvv) {
            setNotification("danger", "Please fill in all fields");
            return;
        }

        const updatedOrder = {
            ...order,
            paymentInfo: formData
        };

        setOrder(updatedOrder);
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
                console.log(`The order's id is: ${orderAdded.id}\n ${orderCreated}`);
                setOrderCreated(true);
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });    
                setNotification("success", "The order has been created successfully");

                setTimeout(() => {
                    navigate("/check-summary-info/");
                }, 3000);            } 
            else {
                setNotification("danger", "Product out of stock.");
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

    document.title = "Payment Form - PineApple";

    return (
        <main className="cart-form-main-container payment-info-form-container">
            <div className="cart-form-container">
                <h1 className="cart-form-title">Payment Info</h1>
                <form className="cart-form payment-cart-form" onSubmit={handleOrderGeneration}>
                    <label htmlFor="cardholder-name">Cardholder Name:</label>
                    <input
                        type="text"
                        name="cardholderName"
                        className="card-holder-name-input"
                        id="cardholder-name"
                        placeholder="Card holder's name"
                        value={formData.cardholderName}
                        onChange={handleChange}
                    />
                    <label className="choose-payment-p">Choose Payment Card Type:</label>
                    <div className="card-type-container">
                        <div className="card-type">
                            <input
                                name="cardType"
                                type="radio"
                                id="visa"
                                value="Visa"
                                checked={formData.cardType === 'Visa'}
                                onChange={handleChange}
                            />
                            <label className="type-card-label" htmlFor="visa">Visa</label>
                        </div>
                        <div className="card-type">
                            <input
                                name="cardType"
                                type="radio"
                                id="mastercard"
                                value="Mastercard"
                                checked={formData.cardType === 'Mastercard'}
                                onChange={handleChange}
                            />
                            <label className="type-card-label" htmlFor="mastercard">Mastercard</label>
                        </div>
                    </div>
                    <label htmlFor="card-number-input">Card Number:</label>
                    <input
                        name="cardNumber"
                        type="text"
                        id="card-number-input"
                        className="card-number-input"
                        placeholder="1111-1111-1111-1111"
                        value={formData.cardNumber}
                        onChange={handleChange}
                    />
                    <div className="form-box-container">
                        <div className="form-box">
                            <label htmlFor="expiry-date">Expiry Date:</label>
                            <input
                                name="expiryDate"
                                type="text"
                                className="expiry-date-input"
                                id="expiry-date"
                                placeholder="MM/YY"
                                value={formData.expiryDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-box">
                            <label htmlFor="cvv" className="cvv-label">CVV:</label>
                            <input
                                name="cvv"
                                type="text"
                                className="cvv-input"
                                id="cvv"
                                placeholder="123"
                                value={formData.cvv}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='cart-form-continue-btn-container generate-order-button-container'>
                        <button type="submit" className='continue-button generate-order-button'>Generate Order</button>
                    </div>
                </form>
            </div>  
            <div className="summary-side-container">
                <SummarySideInfo />
            </div>
        </main>
    );
}

export default PaymentInfo;
