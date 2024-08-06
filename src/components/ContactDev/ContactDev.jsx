import { Link } from 'react-router-dom';
import { useNotification } from '../../hooks/useNotification';
import './ContactDev.css';

const ContactDev = () => {

    const { setNotification } = useNotification();

    const handleSendContactDevForm = (event) => {
        event.preventDefault();
        setNotification("success", "Mail sent successfully! I will get in touch as soon as possible.");
        setTimeout(() => {
            window.location.href = "https://www.linkedin.com/in/ignacio-agustin-gonzalez-110768270/";
        }, 3000);
    };

    document.title = "Contact Dev - PineApple";

    return (
        <main className='contact-dev-container'>
            <div className='general-container'>
                
                <div className="form-container">
                    <h1 className='contact-dev-title'>Send me an email</h1>
                    <form>
                        <input className='contact-dev-input' type="text" placeholder='Enter your full name' />
                        <input className='contact-dev-input' type="email" placeholder='example@gmail.com'/>
                        <input className='contact-dev-input' type="text" placeholder='Enter a subject conversation' />
                        <textarea name="message" id="contact-dev-textarea" placeholder='Ask me something...'></textarea>
                        <button
                            type='submit'
                            onClick={handleSendContactDevForm}
                            className='send-contact-form-button'>
                            Send
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
