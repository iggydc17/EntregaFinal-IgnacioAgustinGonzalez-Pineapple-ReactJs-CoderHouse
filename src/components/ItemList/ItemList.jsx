import Item from "../Item/Item";


const ItemList = ( { items }) => {

    const sortedItems = items.sort((a, b) => b.price - a.price);

    return (
        <>
            <ul className="items-list">
                {sortedItems.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
}

export default ItemList;