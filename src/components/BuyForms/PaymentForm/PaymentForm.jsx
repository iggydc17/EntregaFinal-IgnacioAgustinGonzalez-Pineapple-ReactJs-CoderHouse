import { useNavigate } from "react-router-dom";
import { useOrder } from "../../../contexts/OrderContext";
import { useState } from "react";
import SummarySideInfo from "../../SummarySideInfo/SummarySideInfo";
import { toast } from "react-toastify";
const PaymentInfo= () => {

    const [formData, setFormData] = useState({
        cardholderName: '',
        cardType: 'Visa', 
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const { setOrder } = useOrder();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setOrder(prevOrder => ({
            ...prevOrder,
            paymentInfo: formData
        }));    
        toast.success("Buyer Info pass successfully!");

        setTimeout(() => {
            navigate("/check-summary-info/"); 
        }, 1500);

    };

    return (
        <main className="cart-form-container payment-info-form-container">
            <h2>Payment Info</h2>
            <div className="forms-general-container">
                <form className="cart-form payment-cart-form" onSubmit={handleSubmit}>
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
                        id="cvv" className
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleChange}
                    />
                    <button type="submit" className="continue-button">Continue</button>
                </form>
                <div className="summary-side-container">
                    <SummarySideInfo />
                </div>
            </div>
        </main>
    );
}

export default PaymentInfo;