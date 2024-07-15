export const categories = [
    { category: 'mac', image: '../../public/img/store/store-mac.png' },
    { category: 'ipad', image: '../../public/img/store/store-ipad.png' },
    { category: 'iphone', image: '../../public/img/store/store-iphone.png' },
    { category: 'airpods', image: '../../public/img/store/store-airpods.png' },
    { category: 'vision', image: '../../public/img/store/store-vision.png' },
    { category: 'accessories', image: '../../public/img/store/store-accessories.png' }
];


export const getCategories = () => {
    return new Promise((res) => {
        setTimeout(()=> {
            res(categories);
        }, 1000);
    });
};
