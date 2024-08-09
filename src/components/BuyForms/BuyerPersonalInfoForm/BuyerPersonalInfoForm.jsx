import { useEffect, useState } from "react";
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

    const [errors, setErrors] = useState({
        name: '',
        lastName: '',
        phoneNumber: '',
        email: ''
    });

    useEffect(() => {
        const savedData = localStorage.getItem('buyerPersonalInfo');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = "Name is required";
        } else if (/\d/.test(formData.name)) {
            newErrors.name = "Name must not contain numbers";
        }

        if (!formData.lastName) {
            newErrors.lastName = "Last name is required";
        } else if (/\d/.test(formData.lastName)) {
            newErrors.lastName = "Last name must not contain numbers";
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (!phoneRegex.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be a 10-digit number";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Email must be a valid email address";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            scrollUp();
        }

        return Object.keys(newErrors).length === 0;
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        localStorage.setItem('buyerPersonalInfo', JSON.stringify({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setNotification("danger", "Please fix the errors in the form");
            return;
        }

        const updatedOrder = {
            ...order,
            personalInfo: formData
        };

        setOrder(updatedOrder);
        scrollUp();
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
                        style={{ border: errors.name ? '2px solid tomato' : formData.name ? '2px solid #21B531' : '' }}
                        className="name-input"
                        placeholder="Enter your name" 
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error-msg">{errors.name}</p>}
                    <label htmlFor="last-name-input">Last name: </label>
                    <input 
                        type="text"
                        name="lastName"
                        style={{ border: errors.lastName ? '2px solid tomato' : formData.lastName ? '2px solid #21B531' : '' }}
                        className="lastName-input"
                        placeholder="Enter your last name" 
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <p className="error-msg">{errors.lastName}</p>}
                    <label htmlFor="phone-number-input">Phone Number: </label>
                    <input 
                        type="text"
                        name="phoneNumber"
                        style={{ border: errors.phoneNumber ? '2px solid tomato' : formData.phoneNumber ? '2px solid #21B531' : '' }}
                        className="phone-number-input"
                        placeholder="1234-1234" 
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <p className="error-msg">{errors.phoneNumber}</p>}
                    <label htmlFor="email-input">Email: </label>
                    <input 
                        type="email"
                        name="email"
                        style={{ border: errors.email ? '2px solid tomato' : formData.email ? '2px solid #21B531' : '' }}
                        className="email-input"
                        placeholder="example@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error-msg">{errors.email}</p>}
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