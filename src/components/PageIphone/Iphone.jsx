import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Iphone.css';

const Iphone = () => {

    return (
        <main className='iphone-page main-page'>
            <div className='section-titles'>
                <h1 className='section-title'>iPhone</h1>
                <p className='section-second-title'>Designed to be loved.</p>
            </div>
            <ItemListContainer category="iphone" />
        </main>
    );
}

export default Iphone;