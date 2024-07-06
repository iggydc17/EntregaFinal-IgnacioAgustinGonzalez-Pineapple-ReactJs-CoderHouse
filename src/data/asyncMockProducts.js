export const appleProducts = {
    mac: [
        { id: 1, name: 'MacBook Air M1', price: 999, year: 2020, description: 'Lightweight and powerful with M1 chip.', image: 'path_to_macbook_air_m1_image'},
        { id: 2, name: 'MacBook Air M2', price: 1199, year: 2022, description: 'Next generation performance with M2 chip.', image: 'path_to_macbook_air_m2_image'},
        { id: 3, name: 'MacBook Pro 13-inch', price: 1299, year: 2020, description: 'High performance for professionals with M1 chip.', image: 'path_to_macbook_pro_13_image'},
        { id: 4, name: 'MacBook Pro 14-inch', price: 1999, year: 2021, description: 'Ultimate performance with M1 Pro chip.', image: 'path_to_macbook_pro_14_image'},
        { id: 5, name: 'MacBook Pro 16-inch', price: 2499, year: 2021, description: 'Ultimate performance with M1 Max chip.', image: 'path_to_macbook_pro_16_image'},
        { id: 6, name: 'iMac 24-inch', price: 1299, year: 2021, description: 'All-in-one desktop with M1 chip and stunning 4.5K Retina display.', image: 'path_to_imac_24_image'},
        { id: 7, name: 'iMac 27-inch', price: 1799, year: 2020, description: 'Powerful all-in-one desktop with Intel processors and 5K Retina display.', image: 'path_to_imac_27_image'},
        { id: 8, name: 'Mac Mini M1', price: 699, year: 2020, description: 'Compact desktop with M1 chip.', image: 'path_to_mac_mini_image'},
        { id: 9, name: 'Mac Studio', price: 1999, year: 2022, description: 'High-performance desktop for creative professionals with M1 Max or M1 Ultra chip.', image: 'path_to_mac_studio_image'},
        { id: 10, name: 'Mac Pro', price: 5999, year: 2019, description: 'Ultimate workstation with Intel Xeon processors and modular design.', image: 'path_to_mac_pro_image'}
    ],
    iPad: [
        { id: 1, name: 'iPad Air', price: 599, year: 2020, description: 'Powerful and versatile.', image: 'path_to_ipad_air_image' },
        { id: 2, name: 'iPad Pro 11-inch', price: 799, year: 2021, description: 'Ultimate iPad experience with 11-inch Liquid Retina display.', image: 'path_to_ipad_pro_11_image' },
        { id: 3, name: 'iPad Pro 12.9-inch', price: 999, year: 2021, description: 'Ultimate iPad experience with 12.9-inch Liquid Retina XDR display.', image: 'path_to_ipad_pro_12_image' },
        { id: 4, name: 'iPad Mini', price: 499, year: 2021, description: 'Compact, powerful, and portable.', image: 'path_to_ipad_mini_image' },
        { id: 5, name: 'iPad 10.2-inch', price: 329, year: 2021, description: 'Affordable and powerful.', image: 'path_to_ipad_10_2_image' }
    ],
    iPhone: [
        { id: 1, name: 'iPhone 14 Pro Max', price: 1099, year: 2023, description: 'Pro camera system and Super Retina XDR display.', image: 'path_to_iphone_14_pro_max_image' },
        { id: 2, name: 'iPhone 14 Pro', price: 999, year: 2023, description: 'Pro camera system and Super Retina XDR display.', image: 'path_to_iphone_14_pro_image' },
        { id: 3, name: 'iPhone 14', price: 799, year: 2023, description: 'The latest iPhone.', image: 'path_to_iphone_14_image' },
        { id: 4, name: 'iPhone SE (2022)', price: 399, year: 2022, description: 'Compact and affordable.', image: 'path_to_iphone_se_2022_image' },
        { id: 5, name: 'iPhone 13 Pro Max', price: 1099, year: 2021, description: 'Pro camera system and Super Retina XDR display.', image: 'path_to_iphone_13_pro_max_image' },
        { id: 6, name: 'iPhone 13 Pro', price: 999, year: 2021, description: 'Pro camera system and Super Retina XDR display.', image: 'path_to_iphone_13_pro_image' },
        { id: 7, name: 'iPhone 13', price: 699, year: 2021, description: 'Advanced dual-camera system.', image: 'path_to_iphone_13_image' },
        { id: 8, name: 'iPhone 12 Mini', price: 699, year: 2020, description: 'Compact and powerful.', image: 'path_to_iphone_12_mini_image' }
    ],
    airPods: [
        { id: 1, name: 'AirPods Pro', price: 249, year: 2019, description: 'Noise cancellation and superior sound.', image: 'path_to_airpods_pro_image' },
        { id: 2, name: 'AirPods Max', price: 549, year: 2020, description: 'High-fidelity audio.', image: 'path_to_airpods_max_image' },
        { id: 3, name: 'AirPods (3rd generation)', price: 179, year: 2021, description: 'Spatial audio with dynamic head tracking.', image: 'path_to_airpods_3rd_gen_image' }
    ],
    vision: [
        { id: 1, name: 'Apple Vision Pro', price: 3499, year: 2024, description: 'Augmented reality headset.' }
    ]
};

export const appleCategories = [
    {category: "Mac", storeImage: '/img/store/store-mac.png'},
    {category: "iPad", storeImage: '/img/store/store-ipad.png'},
    {category: "iPhone", storeImage: '/img/store/store-iphone.png'},
    {category: "Airpods", storeImage: '/img/store/store-airpods.png'},
    {category: "Vision", storeImage: '/img/store/store-vision.png'}
]

export const getAppleProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(appleProducts)
        }, 2500);
    });
}; 

export const getAppleCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(appleCategories);
        }, 500);
    });
};
