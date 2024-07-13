export const theLatestProducts = [
    {name: 'iPhone 15 Pro', price: 1400, description: 'Titanium', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844'},
    {name: 'PineApple Vision Pro', price: 3499, description: 'Welcome to spatial computing.', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-vision-pro-202401?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1705097770616'},
    {name: 'MacBook Air', price: 1199, description: 'Designed to go places.', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595'},
    {name: 'iPad Pro', price: 1200, description: 'Thinpossible', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-pro-202405?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1713308272816'},
    {name: 'PineApple Pencil Pro', price: 129, description: 'Engineered for limitless creativity.', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-apple-pencil-202405?wid=800&hei=1000&fmt=png-alpha&.v=1716327768944'},
    {name: 'iPad Air', price: 900, description: 'Fresh Air', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1713308272877'},
];

export const getLastProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(theLatestProducts);
        }, 1000);
    });
};
