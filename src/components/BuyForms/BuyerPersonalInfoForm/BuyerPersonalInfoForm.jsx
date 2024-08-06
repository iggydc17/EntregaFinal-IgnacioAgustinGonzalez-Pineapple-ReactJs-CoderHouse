import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../../contexts/OrderContext";
import { useNotification } from "../../../hooks/useNotification";
import SummarySideInfo from "../../SummarySideInfo/SummarySideInfo";
import '../BuyInfoForms.css';

const BuyerPersonalInfoForm = () => {

    const { order, setOrder } = useOrder();
    const { setNotification } = useNotification();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phoneNumber: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedOrder = {
            ...order,
            personalInfo: formData
        };

        setOrder(updatedOrder);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setNotification("success", "Buyer Info pass successfully!");

        setTimeout(() => {
            navigate("/shipping-form");
        }, 3000);
    };

    document.title = "Buyer Form - PineApple";

    return (
        <main className="cart-form-main-container buyer-personal-info-form-container">
            <div className="cart-form-container">
                <h1 className="cart-form-title">Personal Info</h1>
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
                    <div className="cart-form-continue-btn-container">
                            <button type="submit" className="continue-button">Continue</button>
                    </div>
                </form>
            </div>
            <div className="summary-side-container">
                <SummarySideInfo />
            </div>
        </main>
    );
}

export default BuyerPersonalInfoForm;