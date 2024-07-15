import StoreAccessory from "../Store Accessory/StoreAccessory";

const StoreAccessoriesCards = ({ accessories }) => {

    return (
        <section className="accessories-section">
            {accessories.map((accessory) => (
                <StoreAccessory key={accessory.id} accessory={accessory} />
            ))}
        </section>
    );
}

export default StoreAccessoriesCards;