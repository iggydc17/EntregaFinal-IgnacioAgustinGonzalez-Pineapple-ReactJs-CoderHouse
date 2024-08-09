import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../../contexts/OrderContext";
import { useNotification } from "../../../hooks/useNotification";
import SummarySideInfo from "../../SummarySideInfo/SummarySideInfo";
import '../BuyInfoForms.css';

const ShippingForm = () => {

    
    const { order, setOrder } = useOrder();
    const { setNotification } = useNotification();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        country: "",
        state: "",
        city: "",
        street: "",
        streetNumber: "",
        zipCode: ""
    });

    const [errors, setErrors] = useState({
        country: '',
        state: '',
        city: '',
        street: '',
        streetNumber: '',
        zipCode: ''
    });

    useEffect(() => {
        const savedData = localStorage.getItem('shippingInfo');
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

        const onlyLettersRegex = /^[a-zA-Z\s]+$/;

        if (!formData.country) {
            newErrors.country = "Country is required.";
        } else if (!onlyLettersRegex.test(formData.country)) {
            newErrors.country = "Country cannot contain numbers.";
        }
    
        if (!formData.state) {
            newErrors.state = "State is required.";
        } else if (!onlyLettersRegex.test(formData.state)) {
            newErrors.state = "State cannot contain numbers.";
        }
    
        if (!formData.city) {
            newErrors.city = "City is required.";
        } else if (!onlyLettersRegex.test(formData.city)) {
            newErrors.city = "City cannot contain numbers.";
        }
    
        if (!formData.street) {
            newErrors.street = "Street is required.";
        } else if (!onlyLettersRegex.test(formData.street)) {
            newErrors.street = "Street cannot contain numbers.";
        }

        if (!formData.streetNumber) {
            newErrors.streetNumber = "Street number is required";
        } else if (!/^\d{1,7}$/.test(formData.streetNumber)) {
            newErrors.streetNumber = "Street number must be between 1 and 7 digits.";
        }
    
        const zipCodeRegex = /^[0-9]{4,5}$/;
        if (!formData.zipCode) {
            newErrors.zipCode = "Zip Code is required.";
        } else if (!zipCodeRegex.test(formData.zipCode)) {
            newErrors.zipCode = "Zip Code must be 4 or 5 digits, only numbers.";
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            scrollUp();
        }

        return Object.keys(newErrors).length === 0;
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        localStorage.setItem('shippingInfo', JSON.stringify({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setNotification("danger", "Please fix the errors in the form");
            return;
        }

        const updatedOrder = {
            ...order,
            shippingInfo: formData
        };

        setOrder(updatedOrder);
        scrollUp();
        setNotification("success", "Shipping Info pass successfully!");    
        
        setTimeout(() => {
            navigate("/payment-form/");
        }, 3000);
    };

    document.title = "Shipping Form - PineApple";

    
    return (
        <main className="cart-form-main-container shipping-info-form-container">
            <div className="cart-form-container">
                <h1 className="cart-form-title">Shipping Info</h1>
                <form className="cart-form shipping-cart-form" onSubmit={handleSubmit}>
                    <div className="form-box-container">
                        <div className="form-box">
                            <label htmlFor="country-input">Country: </label>
                            <input 
                                type="text"
                                name="country"
                                style={{ border: errors.country ? '2px solid tomato' : formData.country ? '2px solid #21B531' : '' }}
                                className="country-input"
                                placeholder="Enter your country" 
                                value={formData.country}
                                onChange={handleChange}
                            />
                            {errors.country && <span className="error-msg">{errors.country}</span>}
                        </div>
                        <div className="form-box">
                            <label htmlFor="state-input">State: </label>
                            <input 
                                type="text"
                                name="state"
                                style={{ border: errors.state ? '2px solid tomato' : formData.state ? '2px solid #21B531' : '' }}
                                className="state-input"
                                placeholder="Enter your state" 
                                value={formData.state}
                                onChange={handleChange}
                            />
                            {errors.state && <span className="error-msg">{errors.state}</span>}
                        </div>
                    </div>
                    <div className="form-box-container">
                        <div className="form-box">
                            <label htmlFor="city-input">City: </label>
                            <input 
                                type="text"
                                name="city"
                                style={{ border: errors.city ? '2px solid tomato' : formData.city ? '2px solid #21B531' : '' }}
                                className="city-input"
                                placeholder="Enter your city" 
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && <span className="error-msg">{errors.city}</span>}
                        </div>
                        <div className="form-box">
                            <label htmlFor="street-input">Street: </label>
                            <input 
                                type="text"
                                name="street"
                                style={{ border: errors.street ? '2px solid tomato' : formData.street ? '2px solid #21B531' : '' }}
                                className="street-input"
                                placeholder="Enter your street" 
                                value={formData.street}
                                onChange={handleChange}
                            />
                            {errors.street && <span className="error-msg">{errors.street}</span>}
                        </div>
                    </div>
                    <div className="form-box-container">
                        <div className="form-box">
                            <label htmlFor="street-number-input">Street number: </label>
                            <input 
                                type="text"
                                name="streetNumber"
                                style={{ border: errors.streetNumber ? '2px solid tomato' : formData.streetNumber ? '2px solid #21B531' : '' }}
                                className="street-number-input"
                                placeholder="Enter the street number" 
                                value={formData.streetNumber}
                                onChange={handleChange}
                            />
                            {errors.streetNumber && <span className="error-msg">{errors.streetNumber}</span>}
                        </div>
                        <div className="form-box">
                            <label htmlFor="zip-code-input">Zip Code: </label>
                            <input 
                                type="text"
                                name="zipCode"
                                style={{ border: errors.zipCode ? '2px solid tomato' : formData.zipCode ? '2px solid #21B531' : '' }}
                                className="zip-code-input"
                                placeholder="Enter the zip code" 
                                value={formData.zipCode}
                                onChange={handleChange}
                            />
                            {errors.zipCode && <span className="error-msg">{errors.zipCode}</span>}
                        </div>
                    </div>
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

export default ShippingForm;