import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Mac.css';

const Mac = () => {

    return (
        <main className='mac-page main-page'>
            <div className='section-titles'>
                <h1 className='section-title'>Mac</h1>
                <p className='section-second-title'>If you can dream it,<br /> Mac can do it.</p>
            </div>
            <ItemListContainer category="mac" />
        </main>
    );
}

export default Mac;