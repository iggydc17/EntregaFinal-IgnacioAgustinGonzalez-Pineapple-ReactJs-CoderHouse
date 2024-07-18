import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Accessories.css';

const Accessories = () => {

    const firstImage = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/aalp-magsafe-header-01-202403?wid=2880&hei=960&fmt=png-alpha&.v=1709153437080";
    return (
        <main className='accessories-page main-page'>
            <div className='section-titles'>
                <h1 className='section-title'>Accessories</h1>
                <p className='section-second-title'>Find the accessories<br /> you’re looking for.</p>
            </div>
            <div className='image-container'>
                <img 
                    className='accessories-first-image' 
                    src={firstImage}
                    alt="accessories-image" 
                />
                <div className="image-text">
                    <h2 className='image-title'>Mix. Match.<br /> MagSafe.</h2>
                    <h3 className='image-subtitle'>Snap on a case, wallet, or <br /> wireless charger.</h3>
                </div>
            </div>
            <ItemListContainer category="accessories" />
        </main>
    );
}

export default Accessories;