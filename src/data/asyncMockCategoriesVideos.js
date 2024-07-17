export const categoriesVideos = [
    { category: 'mac', video: 'https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/large.mp4' },
    { category: 'ipad', video: 'https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/large.mp4' },
    { category: 'iphone', video: 'https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/large.mp4' },
    { category: 'airpods', video: 'https://www.apple.com/105/media/us/airpods/2022/dc1310af-8cb9-4218-8d40-26bbe6a1d307/anim/hero/large.mp4' },
    { category: 'vision', image: 'https://www.apple.com/v/apple-vision-pro/e/images/overview/hero/portrait_base_us__fucaqiry5e2q_large.jpg', video: 'https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/foundation/large.mp4' },
    { category: 'accessories', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/aalp-magsafe-header-07-202403?wid=2880&hei=960&fmt=png-alpha&.v=1709153439488' }
];

export const getCategoriesVideos = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoriesVideos.filter((categoryVid) => categoryVid.category === category));
        }, 1000);
    });
};
