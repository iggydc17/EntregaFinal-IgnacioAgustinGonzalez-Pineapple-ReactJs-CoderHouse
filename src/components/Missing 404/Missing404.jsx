import { Link } from 'react-router-dom';
import './Missing404.css';


const Missing404 = () => {
    return (
        <div className='missing-container'>
            <div className="missing">
            <h1>Error 404</h1>
            <h3>Not Found</h3>
            <Link to="/" className='home-btn'> Go back to PineApple Home </Link>
            </div>
        </div>
    );
}

export default Missing404;