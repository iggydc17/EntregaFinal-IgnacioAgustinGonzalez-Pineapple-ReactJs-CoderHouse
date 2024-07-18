import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './AirPods.css';

const AirPods = () => {

    return (
        <main className='airpods-page main-page'>
            <div className='section-titles'>
                <h1 className='section-title'>AirPods</h1>
                <p className='section-second-title'>Enjoy the highest audio quality.</p>
            </div>
            <ItemListContainer category="airpods" />
        </main>
    );
}

export default AirPods;