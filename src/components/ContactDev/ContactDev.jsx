import { Link } from 'react-router-dom';
import { useNotification } from '../../hooks/useNotification';
import { useState } from 'react';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import './ContactDev.css';

const ContactDev = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const { setNotification } = useNotification();
    const form = useRef();


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!fullName) {
            newErrors.fullName = "Full name is required.";
        }

        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email address is invalid.";
        }

        if (!subject) {
            newErrors.subject = "Subject is required.";
        }

        if (!message) {
            newErrors.message = "Message is required.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            scrollUp();
        }

        return Object.keys(newErrors).length === 0;
    };

    const handleSendContactDevForm = (event) => {
        event.preventDefault();
        
        if (!validateForm()) {
            setNotification("danger", "Please fix the errors in the form.");
            return;
        }
        
        const serviceId = "service_na7wbck";
        const templateId = "template_313kwoq";
        const publicKey = "ku9vHrA_hzRkxb4P9";
        
        const templateParams = {
            user_name: "Ignacio Gonzalez",
            from_email: email,
            subject: subject,
            to_name: fullName,
            message: message
        };

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then(() => {
                scrollUp();     
                setNotification("success", "Email sent successfully");
                setTimeout(() => {
                    window.location.href = "https://www.linkedin.com/in/ignacio-agustin-gonzalez-110768270/";
                }, 3000);
            }, (error) => {
                setNotification("danger", error.text);
            });
    };

    document.title = "Contact Dev - PineApple";

    return (
        <main className='contact-dev-container'>
            <div className='general-container'>
                
                <div className="form-container">
                    <h1 className='contact-dev-title'>Send me an email</h1>
                    <form ref={form} onSubmit={handleSendContactDevForm} className='email-form'>
                        <input 
                            className='contact-dev-input'
                            type="text"
                            name='user_name'
                            placeholder='Enter your full name'
                            value={fullName}
                            style={{ border: errors.fullName ? '2px solid tomato' : '' }}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        {errors.fullName && <span className="error-msg">{errors.fullName}</span>}

                        <input
                            className='contact-dev-input'
                            type="email"
                            name='from_email'
                            placeholder='example@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ border: errors.email ? '2px solid tomato' : '' }}
                        />
                        {errors.email && <span className="error-msg">{errors.email}</span>}

                        <input
                            className='contact-dev-input'
                            type="text"
                            name='from_subject'
                            placeholder='Enter a subject conversation'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            style={{ border: errors.subject ? '2px solid tomato' : '' }}
                        />
                        {errors.subject && <span className="error-msg">{errors.subject}</span>}

                        <textarea
                            name="message"
                            id="contact-dev-textarea"
                            placeholder='Ask me something...'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{ border: errors.message ? '2px solid tomato' : '' }}
                        ></textarea>
                        {errors.message && <span className="error-msg">{errors.message}</span>}

                        <button
                            type='submit'
                            onClick={handleSendContactDevForm}
                            className='send-contact-form-button'>
                                Send Email
                        </button>
                    </form>
                </div>

                <div className="contact-info-container">
                    <h1 className='contact-dev-title'>Contact Me</h1>
                    <div className="contact-info">
                        <div className="contact-logo">
                            <i className="bi bi-geo-alt-fill"></i>
                        </div>
                        <div className="contact-text">
                            <p>Address: <Link to={"https://maps.app.goo.gl/Rh6JugHfL2iVJ7NJ9"} target='_blank'>Tepoztlán, Morelos, México</Link></p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-logo">
                            <i className="bi bi-envelope"></i>
                        </div>
                        <div className="contact-text">
                            <p>Email: <Link to={"mailto:iggy.dc17@gmail.com"} target='_blank'>iggy.dc17@gmail.com</Link></p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-logo">
                            <i className="bi bi-phone"></i>
                        </div>
                        <div className="contact-text">
                            <p>Telephone: <Link to={"tel:+5491140890453"}>+5491140890453</Link></p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-logo">
                            <i className="bi bi-linkedin"></i>
                        </div>
                        <div className="contact-text">
                            <p>LinkedIn: <Link to={"https://www.linkedin.com/in/ignacio-agustin-gonzalez-110768270/"} target='_blank'>Ignacio Agustín González</Link></p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-logo">
                        <i className="bi bi-globe"></i>
                        </div>
                        <div className="contact-text">
                            <p>Portfolio: <Link to={"#"} target='_blank'>Dev Portfolio</Link></p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-logo">
                        <i className="bi bi-file-person"></i>
                        </div>
                        <div className="contact-text">
                            <p>Curriculum: <Link to={"#"} target='_blank'>CV</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ContactDev;
