export const appleCategories = [
    {category: "Mac", storeImage: '/img/store/store-mac.png'},
    {category: "iPad", storeImage: '/img/store/store-ipad.png'},
    {category: "iPhone", storeImage: '/img/store/store-iphone.png'},
    {category: "Airpods", storeImage: '/img/store/store-airpods.png'},
    {category: "Vision", storeImage: '/img/store/store-vision.png'},
    {category: "Accessories", storeImage: '/img/store/store-accessories.png'}
]

export const getAppleCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(appleCategories);
        }, 1000);
    });
};
