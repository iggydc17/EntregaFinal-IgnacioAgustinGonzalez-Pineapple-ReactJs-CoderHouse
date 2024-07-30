import StoreAccessory from "../Store Accessory/StoreAccessory";

const StoreAccessoriesCards = ({ accessories }) => {

    const sortedAccessories = accessories.sort((a, b) => b.price - a.price);

    return (
        <section className="accessories-section">
            {sortedAccessories.map((accessory) => (
                <StoreAccessory key={accessory.id} accessory={accessory} />
            ))}
        </section>
    );
}

export default StoreAccessoriesCards;