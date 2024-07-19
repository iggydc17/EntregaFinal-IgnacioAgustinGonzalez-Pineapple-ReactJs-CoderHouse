import { Link } from 'react-router-dom';
import './Missing404.css';


const Missing404 = () => {
    return (
        <main className='missing-container'>
            <div className="missing">
                <h1>Error 404</h1>
                <h3>Not Found</h3>
                <Link to="/" className='home-btn'>Home </Link>
            </div>
        </main>
    );
}

export default Missing404;