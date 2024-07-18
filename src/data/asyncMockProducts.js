export const appleProducts = {

    Mac: [
        { 
            id: 1, 
            category: "mac", 
            name: 'Mac Pro', 
            price: 5999, 
            year: 2019, 
            stock: 24, 
            description: 'Ultimate workstation with Intel Xeon processors and modular design.', 
            image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mac-pro-2019_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1585849393420',
            technicalDetails: {
                processor: "Intel Xeon W",
                memory: "Up to 1.5TB DDR4 ECC",
                storage: "Up to 8TB SSD",
                graphics: "AMD Radeon Pro Vega II Duo",
                ports: "8 PCIe slots, 2 Thunderbolt 3, 2 USB-A"
            }
        },
        { 
            id: 2, 
            category: "mac", 
            name: 'MacBook Pro 16-inch', 
            price: 2499, 
            year: 2021, 
            stock: 70, 
            description: 'Ultimate performance with M1 Max chip.', 
            image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111901_mbp16-gray.png',
            technicalDetails: {
                processor: "Apple M1 Max",
                memory: "Up to 64GB unified",
                storage: "Up to 8TB SSD",
                graphics: "32-core GPU",
                ports: "3 Thunderbolt 4, HDMI, SDXC card slot, MagSafe 3"
            }
        },
        { 
            id: 3, 
            category: "mac", 
            name: 'Mac Studio', 
            price: 1999, 
            year: 2022, 
            stock: 24, 
            description: 'High-performance desktop for creative professionals with M1 Max or M1 Ultra chip.', 
            image: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple-Mac-Studio-Studio-Display-Photoshop-220308_big.jpg.slideshow-large_2x.jpg',
            technicalDetails: {
                processor: "Apple M1 Max or M1 Ultra",
                memory: "Up to 128GB unified",
                storage: "Up to 8TB SSD",
                graphics: "Integrated 32-core GPU (M1 Max) or 64-core GPU (M1 Ultra)",
                ports: "4 Thunderbolt 4, HDMI, USB-A, SDXC card slot"
            }
        },
        { 
            id: 4, 
            category: "mac", 
            name: 'MacBook Pro 14-inch', 
            price: 1999, 
            year: 2021, 
            stock: 55, 
            description: 'Ultimate performance with M1 Pro chip.', 
            image: 'https://m.media-amazon.com/images/I/61wjh-I8dHL._AC_UF894,1000_QL80_.jpg',
            technicalDetails: {
                processor: "Apple M1 Pro",
                memory: "Up to 32GB unified",
                storage: "Up to 4TB SSD",
                graphics: "16-core GPU",
                ports: "3 Thunderbolt 4, HDMI, SDXC card slot, MagSafe 3"
            }
        },
        { 
            id: 5, 
            category: "mac", 
            name: 'iMac 27-inch', 
            price: 1799, 
            year: 2020, 
            stock: 44, 
            description: 'Powerful all-in-one desktop with Intel processors and 5K Retina display.', 
            image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111913_sp821-imac-27.png',
            technicalDetails: {
                processor: "Intel Core i9",
                memory: "Up to 128GB DDR4",
                storage: "Up to 8TB SSD",
                graphics: "AMD Radeon Pro 5700 XT",
                ports: "USB-C, USB-A, Thunderbolt 3, SD card slot"
            }
        },
        { 
            id: 6, 
            category: "mac", 
            name: 'iMac 24-inch', 
            price: 1299, 
            year: 2021, 
            stock: 24, 
            description: 'All-in-one desktop with M1 chip and stunning 4.5K Retina display.', 
            image: 'https://m.media-amazon.com/images/I/61eoyE0l9gS.jpg',
            technicalDetails: {
                processor: "Apple M1",
                memory: "Up to 16GB unified",
                storage: "Up to 2TB SSD",
                graphics: "Integrated 7-core or 8-core GPU",
                ports: "2 Thunderbolt 3, USB-C"
            }
        },
        { 
            id: 7, 
            category: "mac", 
            name: 'MacBook Pro 13-inch', 
            price: 1299, 
            year: 2020, 
            stock: 14, 
            description: 'High performance for professionals with M1 chip.', 
            image: 'https://http2.mlstatic.com/D_NQ_NP_711351-MLM51375704853_092022-O.webp',
            technicalDetails: {
                processor: "Apple M1",
                memory: "Up to 16GB unified",
                storage: "Up to 2TB SSD",
                graphics: "Integrated 8-core GPU",
                ports: "2 Thunderbolt 3, USB-C"
            }
        },
        { 
            id: 8, 
            category: "mac", 
            name: 'MacBook Air M2', 
            price: 1199, 
            year: 2022, 
            stock: 21, 
            description: 'Next generation performance with M2 chip.', 
            image: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple-WWDC22-MacBook-Air-lp-220606.jpg.og.jpg?202405240035',
            technicalDetails: {
                processor: "Apple M2",
                memory: "Up to 24GB unified",
                storage: "Up to 2TB SSD",
                graphics: "Integrated 8-core GPU",
                ports: "2 Thunderbolt 3, USB-C"
            }
        },
        { 
            id: 9, 
            category: "mac", 
            name: 'MacBook Air M1', 
            price: 999, 
            year: 2020, 
            stock: 3, 
            description: 'Lightweight and powerful with M1 chip.', 
            image: 'https://m.media-amazon.com/images/I/71fMZDz2sEL._AC_UF894,1000_QL80_.jpg',
            technicalDetails: {
                processor: "Apple M1",
                memory: "Up to 16GB unified",
                storage: "Up to 2TB SSD",
                graphics: "Integrated 7-core or 8-core GPU",
                ports: "2 Thunderbolt 3, USB-C"
            }
        },
        { 
            id: 10, 
            category: "mac", 
            name: 'Mac Mini M1', 
            price: 699, 
            year: 2020, 
            stock: 0, 
            description: 'Compact desktop with M1 chip.', 
            image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-og-image-202301?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1670361046478',
            technicalDetails: {
                processor: "Apple M1",
                memory: "Up to 16GB unified",
                storage: "Up to 2TB SSD",
                graphics: "Integrated 8-core GPU",
                ports: "2 Thunderbolt 3, USB-A, HDMI"
            }
        },
    ],
    
    iPad: [
        { 
            id: 11, 
            category: "ipad", 
            name: 'iPad Pro', 
            price: 1200, 
            year: 2024, 
            stock: 80, 
            description: 'Thinpossible', 
            image: 'https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_large.png',
            technicalDetails: {
                processor: "Apple M2",
                memory: "Up to 16GB",
                storage: "Up to 2TB",
                display: "11-inch Liquid Retina or 12.9-inch Liquid Retina XDR",
                ports: "USB-C with Thunderbolt"
            }
        },
        { 
            id: 12, 
            category: "ipad", 
            name: 'iPad', 
            price: 999, 
            year: 2021, 
            stock: 19, 
            description: 'Affordable and powerful.', 
            image: 'https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_large.png',
            technicalDetails: {
                processor: "Apple A14 Bionic",
                memory: "Up to 4GB",
                storage: "Up to 256GB",
                display: "10.9-inch Liquid Retina",
                ports: "USB-C"
            }
        },
        { 
            id: 13, 
            category: "ipad", 
            name: 'iPad Air', 
            price: 900, 
            year: 2020, 
            stock: 20, 
            description: 'Powerful and versatile.', 
            image: 'https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_air__cr381zljqdiu_large.png',
            technicalDetails: {
                processor: "Apple M1",
                memory: "Up to 16GB",
                storage: "Up to 256GB",
                display: "10.9-inch Liquid Retina",
                ports: "USB-C"
            }
        },
        { 
            id: 14, 
            category: "ipad", 
            name: 'iPad Mini', 
            price: 699, 
            year: 2021, 
            stock: 0, 
            description: 'Compact, powerful, and portable.', 
            image: 'https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_mini__f3iy3qb50gia_large.png',
            technicalDetails: {
                processor: "Apple A15 Bionic",
                memory: "Up to 8GB",
                storage: "Up to 256GB",
                display: "8.3-inch Liquid Retina",
                ports: "USB-C"
            }
        },
    ],
    
    iPhone: [
        { 
            id: 15, 
            category: "iphone", 
            name: 'iPhone 15 Pro Max', 
            price: 1400, 
            year: 2024, 
            description: "The ultimate iPhone.", 
            stock: 200, 
            image: 'https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_15_pro__bpnjhcrxofqu_large.png',
            technicalDetails: {
                processor: "A17 Pro",
                memory: "Up to 8GB",
                storage: "Up to 1TB",
                display: "6.7-inch Super Retina XDR",
                camera: "48MP wide, 12MP ultra-wide"
            }
        },
        { 
            id: 16, 
            category: "iphone", 
            name: 'iPhone 15 Pro', 
            price: 1300, 
            year: 2024, 
            description: "A total powerhouse.", 
            stock: 60, 
            image: 'https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_15__fm75iyqlkjau_large.png',
            technicalDetails: {
                processor: "A17 Pro",
                memory: "Up to 8GB",
                storage: "Up to 1TB",
                display: "6.1-inch Super Retina XDR",
                camera: "48MP wide, 12MP ultra-wide"
            }
        },
        { 
            id: 17, 
            category: "iphone", 
            name: 'iPhone 15', 
            price: 1200, 
            year: 2024, 
            description: "Innovation at its finest.", 
            stock: 240, 
            image: 'https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_14__cjgvgyn9cquu_large.png',
            technicalDetails: {
                processor: "A16 Bionic",
                memory: "Up to 6GB",
                storage: "Up to 512GB",
                display: "6.1-inch Super Retina XDR",
                camera: "48MP wide, 12MP ultra-wide"
            }
        },
        { 
            id: 18, 
            category: "iphone", 
            name: 'iPhone 14 Pro Max', 
            price: 1100, 
            year: 2023, 
            description: "As amazing as ever.", 
            stock: 5, 
            image: 'https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_14__cjgvgyn9cquu_large.png',
            technicalDetails: {
                processor: "A16 Bionic",
                memory: "Up to 6GB",
                storage: "Up to 1TB",
                display: "6.7-inch Super Retina XDR",
                camera: "48MP wide, 12MP ultra-wide"
            }
        },
        { 
            id: 19, 
            category: "iphone", 
            name: 'iPhone 14 Pro', 
            price: 1000, 
            year: 2023, 
            description: "Professional power in your hands.", 
            stock: 22, 
            image: 'https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_14__cjgvgyn9cquu_large.png',
            technicalDetails: {
                processor: "A16 Bionic",
                memory: "Up to 6GB",
                storage: "Up to 1TB",
                display: "6.1-inch Super Retina XDR",
                camera: "48MP wide, 12MP ultra-wide"
            }
        },
        { 
            id: 20, 
            category: "iphone", 
            name: 'iPhone 14', 
            price: 900, 
            year: 2023, 
            description: "Powerful and stylish.", 
            stock: 240, 
            image: 'https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_14__cjgvgyn9cquu_large.png',
            technicalDetails: {
                processor: "A15 Bionic",
                memory: "Up to 6GB",
                storage: "Up to 512GB",
                display: "6.1-inch Super Retina XDR",
                camera: "12MP wide, 12MP ultra-wide"
            }
        },
        { 
            id: 21, 
            category: "iphone", 
            name: 'iPhone 13 Pro Max', 
            price: 800, 
            year: 2021, 
            description: "The pinnacle of performance.", 
            stock: 99, 
            image: 'https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_13__gnwdyqfq7i2y_large.png',
            technicalDetails: {
                processor: "A15 Bionic",
                memory: "Up to 6GB",
                storage: "Up to 1TB",
                display: "6.7-inch Super Retina XDR",
                camera: "12MP wide, 12MP ultra-wide"
            }
        },
        { 
            id: 22, 
            category: "iphone", 
            name: 'iPhone 13 Pro', 
            price: 700, 
            year: 2021, 
            description: "Masterpiece of technology.", 
            stock: 23, 
            image: 'https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_13__gnwdyqfq7i2y_large.png',
            technicalDetails: {
                processor: "A15 Bionic",
                memory: "Up to 6GB",
                storage: "Up to 1TB",
                display: "6.1-inch Super Retina XDR",
                camera: "12MP wide, 12MP ultra-wide"
            }
        },
        { 
            id: 23, 
            category: "iphone", 
            name: 'iPhone 13', 
            price: 600, 
            year: 2021, 
            description: "Performance and value.", 
            stock: 0, 
            image: 'https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_13__gnwdyqfq7i2y_large.png',
            technicalDetails: {
                processor: "A15 Bionic",
                memory: "Up to 4GB",
                storage: "Up to 512GB",
                display: "6.1-inch Super Retina XDR",
                camera: "12MP wide"
            }
        },
        { 
            id: 24, 
            category: "iphone", 
            name: 'iPhone SE', 
            price: 580, 
            year: 2022, 
            description: "Serious power. Serious value.", 
            stock: 0, 
            image: 'https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_se__gmvp19w01mum_large.png',
            technicalDetails: {
                processor: "A15 Bionic",
                memory: "Up to 4GB",
                storage: "Up to 256GB",
                display: "4.7-inch Retina HD",
                camera: "12MP wide"
            }
        },
    ],

    AirPods: [
        { 
            id: 25, 
            category: "airpods", 
            name: 'AirPods Max', 
            price: 549, 
            year: 2023, 
            stock: 28, 
            description: 'Spatial audio with dynamic head tracking.', 
            image: 'https://m.media-amazon.com/images/I/81thV7SoLZL._AC_UF894,1000_QL80_.jpg',
            technicalDetails: {
                audioTechnology: "Active Noise Cancellation",
                batteryLife: "20 hours",
                connectivity: "Bluetooth 5.0",
                weight: "384.8 grams",
                features: "Spatial audio, Transparency mode"
            }
        },
        { 
            id: 26, 
            category: "airpods", 
            name: 'AirPods Pro', 
            price: 249, 
            year: 2021, 
            stock: 18, 
            description: 'Spatial audio with dynamic head tracking.', 
            image: 'https://m.media-amazon.com/images/I/51DMT40Xr2L.__AC_SY300_SX300_QL70_ML2_.jpg',
            technicalDetails: {
                audioTechnology: "Active Noise Cancellation",
                batteryLife: "4.5 hours (up to 24 hours with case)",
                connectivity: "Bluetooth 5.0",
                weight: "5.4 grams (each)",
                features: "Transparency mode, Adaptive EQ"
            }
        },
        { 
            id: 27, 
            category: "airpods", 
            name: 'AirPods 3rd Generation', 
            price: 169, 
            year: 2020, 
            stock: 28, 
            description: 'High-fidelity audio.', 
            image: 'https://m.media-amazon.com/images/I/61fTopgP4bL._AC_UF350,350_QL80_.jpg',
            technicalDetails: {
                audioTechnology: "Spatial audio",
                batteryLife: "6 hours (up to 30 hours with case)",
                connectivity: "Bluetooth 5.0",
                weight: "4.28 grams (each)",
                features: "Adaptive EQ, Sweat and water resistant"
            }
        },
        { 
            id: 28, 
            category: "airpods", 
            name: 'AirPods 2nd Generation', 
            price: 129, 
            year: 2019, 
            stock: 48, 
            description: 'Noise cancellation and superior sound.', 
            image: 'https://m.media-amazon.com/images/I/710rzW2RGcL.__AC_SX300_SY300_QL70_ML2_.jpg',
            technicalDetails: {
                audioTechnology: "Dual beamforming microphones",
                batteryLife: "5 hours (up to 24 hours with case)",
                connectivity: "Bluetooth 5.0",
                weight: "4 grams (each)",
                features: "Quick access to Siri"
            }
        },
    ],
    
    Vision: [
        { 
            id: 29, 
            category: "vision", 
            name: 'Apple Vision Pro', 
            price: 3499, 
            year: 2024, 
            stock: 280, 
            description: 'Augmented reality headset.', 
            image: 'https://m.media-amazon.com/images/I/61Rit1LERjL._AC_UF894,1000_QL80_.jpg',
            technicalDetails: {
                display: "Micro-OLED",
                batteryLife: "2 hours",
                connectivity: "Wi-Fi 6E, Bluetooth 5.3",
                weight: "300 grams",
                features: "Spatial audio, Eye tracking, Gesture control"
            }
        },
    ],
    
    Accessories: [
        { 
            id: 30, 
            category: "accessories", 
            name: 'PineApple Pencil Pro', 
            price: 129, 
            year: 2024, 
            stock: 33, 
            description: 'Advanced stylus for iPad Pro with precise control.', 
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX2D3?wid=532&hei=582&fmt=png-alpha&.v=1713841707336",
            technicalDetails: {
                connectivity: "Bluetooth",
                batteryLife: "N/A",
                weight: "N/A",
                features: "Precision control, Tilt and pressure sensitivity"
            }
        },
        { 
            id: 31, 
            category: "accessories", 
            name: 'Magic Keyboard for iPad Pro', 
            price: 349, 
            year: 2024, 
            stock: 112, 
            description: 'Full-size keyboard with integrated trackpad for iPad Pro.', 
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWR43?wid=532&hei=582&fmt=png-alpha&.v=1713934214856",
            technicalDetails: {
                connectivity: "Bluetooth",
                batteryLife: "N/A",
                weight: "N/A",
                features: "Integrated trackpad, Backlit keys"
            }
        },
        { 
            id: 32, 
            category: "accessories", 
            name: 'Smart Folio for iPad Pro 13', 
            price: 99, 
            year: 2024, 
            stock: 33, 
            description: 'Lightweight cover for iPad Pro with front and back protection.', 
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWK43?wid=532&hei=582&fmt=png-alpha&.v=1713656833377",
            technicalDetails: {
                material: "Polyurethane",
                weight: "N/A",
                features: "Front and back protection, Auto wake/sleep"
            }
        },
        { 
            id: 33, 
            category: "accessories", 
            name: 'HomePod Midnight', 
            price: 299, 
            year: 2024, 
            stock: 22, 
            description: 'Smart speaker with high-fidelity audio.', 
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-midnight-202210?wid=532&hei=582&fmt=png-alpha&.v=1670557210097",
            technicalDetails: {
                audioTechnology: "High-fidelity audio",
                connectivity: "Wi-Fi, Bluetooth",
                weight: "2.5 kg",
                features: "Siri integration, Multi-room audio"
            }
        },
        { 
            id: 34, 
            category: "accessories", 
            name: 'Case for iPhone 15 Pro', 
            price: 49, 
            year: 2024, 
            stock: 0, 
            description: 'Durable and stylish case for iPhone 15 Pro.', 
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HR052?wid=532&hei=582&fmt=png-alpha&.v=1692888734736",
            technicalDetails: {
                material: "Silicone",
                weight: "N/A",
                features: "Shock-absorbent, Stylish design"
            }
        },
        { 
            id: 35, 
            category: "accessories", 
            name: 'MagSafe Charger', 
            price: 39, 
            year: 2024, 
            stock: 33, 
            description: 'Wireless charger with fast charging capability.', 
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=532&hei=582&fmt=png-alpha&.v=1661269793559",
            technicalDetails: {
                chargingTechnology: "MagSafe",
                output: "15W",
                weight: "N/A",
                features: "Fast charging, Easy alignment"
            }
        },
        { 
            id: 36, 
            category: "accessories", 
            name: 'Magic Keyboard with Touch ID and Numeric Keypad', 
            price: 199, 
            year: 2024, 
            stock: 25, 
            description: 'Full-size keyboard with Touch ID and numeric keypad.', 
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=532&hei=582&fmt=png-alpha&.v=1645719947833",
            technicalDetails: {
                connectivity: "Bluetooth",
                batteryLife: "N/A",
                weight: "N/A",
                features: "Touch ID, Numeric keypad"
            }
        },
        { 
            id: 37, 
            category: "accessories", 
            name: 'Magic Mouse', 
            price: 99, 
            year: 2024, 
            stock: 0, 
            description: 'Sleek and rechargeable wireless mouse.', 
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3?wid=532&hei=582&fmt=png-alpha&.v=1645138486301",
            technicalDetails: {
                connectivity: "Bluetooth",
                batteryLife: "N/A",
                weight: "N/A",
                features: "Rechargeable battery, Multi-touch surface"
            }
        },
        { 
            id: 38, 
            category: "accessories", 
            name: 'HomePod Mini Blue', 
            price: 99, 
            year: 2024, 
            stock: 63, 
            description: 'Compact smart speaker with great sound.', 
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-blue-202110?wid=532&hei=582&fmt=png-alpha&.v=1632925511000",
            technicalDetails: {
                audioTechnology: "High-fidelity audio",
                connectivity: "Wi-Fi, Bluetooth",
                weight: "0.77 kg",
                features: "Siri integration, Compact design"
            }
        }
    ]
};

export const getAppleProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const flattenedProducts = Object.values(appleProducts).flat();
            resolve(flattenedProducts);
        }, 1500);
    });
};

export const getProductsById = (productId) => {
    return new Promise((res) => {
        setTimeout(() => {
            const flattenedProducts = Object.values(appleProducts).flat();
            res(flattenedProducts.filter((prod) => prod.id === productId));
        }, 1000);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((res) => {
        setTimeout(() => {
            const flattenedProducts = Object.values(appleProducts).flat();
            res(flattenedProducts.filter((prod) => prod.category === category));
        }, 1000);
    });
};


