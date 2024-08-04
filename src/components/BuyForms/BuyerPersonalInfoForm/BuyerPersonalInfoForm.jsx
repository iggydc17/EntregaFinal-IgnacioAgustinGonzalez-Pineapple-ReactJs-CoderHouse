import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../../contexts/OrderContext";
import SummarySideInfo from "../../SummarySideInfo/SummarySideInfo";
import { toast } from "react-toastify";
import { useCart } from "../../../hooks/useCart";

const BuyerPersonalInfoForm = () => {

    const { cart, totalQuantity, getTotalPrice } = useCart();

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phoneNumber: '',
        email: ''
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
            personalInfo: formData
        }));

        toast.success("Buyer Info pass successfully!");

        setTimeout(() => {
            navigate("/shipping-form");
        }, 1500);
    };

    return (
        <main className="cart-form-container buyer-personal-info-form-container">
            <h2>Personal Info</h2>
                <form className="cart-form buyer-cart-form" onSubmit={handleSubmit}>
                    <label htmlFor="name-input">Name: </label>
                    <input 
                        type="text"
                        name="name"
                        className="name-input"
                        placeholder="Enter your name" 
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="last-name-input">Last name: </label>
                    <input 
                        type="text"
                        name="lastName"
                        className="last-name-input"
                        placeholder="Enter your last name" 
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor="phone-number-input">Phone Number: </label>
                    <input 
                        type="text"
                        name="phoneNumber"
                        className="phone-number-input"
                        placeholder="Enter your phone number" 
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <label htmlFor="email-input">Email: </label>
                    <input 
                        type="email"
                        name="email"
                        className="email-input"
                        placeholder="example@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                    />
                    
                    <button type="submit" className="continue-button">Continue</button>
                </form>
                <div className="summary-side-container">
                    <SummarySideInfo formData={formData} cart={cart} totalQuantity={totalQuantity} getTotalPrice={getTotalPrice} />
                </div>
        </main>
    );
}

export default BuyerPersonalInfoForm;