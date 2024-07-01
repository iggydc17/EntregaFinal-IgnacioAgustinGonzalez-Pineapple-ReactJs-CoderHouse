import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';

const ItemListContainer = () => {

    const macImg = '/img/store/store-mac.png';
    const iPadImg = '/img/store/store-ipad.png';
    const iPhoneImg = '/img/store/store-iphone.png';
    const AirPodsImg = '/img/store/store-airpods.png';
    const visionImg = '/img/store/store-vision.png';

    return(
        <>
            <h1 id="category-title">Categories</h1>
            <div className="item-container">
                <ItemList arrayProducts={[]} category="Mac" img={macImg} />
                <ItemList arrayProducts={[]} category="iPad" img={iPadImg} />
                <ItemList arrayProducts={[]} category="iPhone" img={iPhoneImg} />
                <ItemList arrayProducts={[]} category="AirPods" img={AirPodsImg} />
                <ItemList arrayProducts={[]} category="Vision" img={visionImg} />
            </div>
        </>

    );
}

export default ItemListContainer;