import LatestProduct from "../LatestProduct/LatestProduct";

const LatesProductsDetail = ({ lastProducts }) => {


    return (
        <div className="grid-last-products">
            {lastProducts.map((lastProduct, index) => (
                <LatestProduct key={index} lastProduct={lastProduct} />
            ))}
        </div>
    );
}

export default LatesProductsDetail;