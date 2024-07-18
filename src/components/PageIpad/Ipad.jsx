import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Ipad.css';

const Ipad = () => {

    return (
        <main className='ipad-page main-page'>
            <div className='section-titles'>
                <h1 className='section-title'>iPad</h1>
                <p className='section-second-title'>Touch, draw, and type<br /> on one magical device.</p>
            </div>
            <ItemListContainer category="ipad" />
        </main>
    );
}

export default Ipad;