import Item from "../Item/Item";


const ItemList = ( { items }) => {


    return (
        <ul className="items-list">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    );
}

export default ItemList;