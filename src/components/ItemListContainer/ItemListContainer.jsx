import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';

const ItemListContainer = () => {

    return(
        <>
            <ItemList arrayProducts={[]} category="Mac" />
            <ItemList arrayProducts={[]} category="iPad" />
            <ItemList arrayProducts={[]} category="iPhone" />
            <ItemList arrayProducts={[]} category="AirPods" />
            <ItemList arrayProducts={[]} category="Accessories" />
        </>
    );
}

export default ItemListContainer;