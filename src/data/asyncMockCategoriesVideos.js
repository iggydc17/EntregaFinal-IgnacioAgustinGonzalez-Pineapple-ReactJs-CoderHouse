export const categoriesVideos = [
    { category: 'mac', video: 'https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/large.mp4' },
    { category: 'ipad', video: 'https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/large.mp4' },
    { category: 'iphone', video: 'https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/large.mp4' },
    { category: 'airpods', video: 'https://www.apple.com/105/media/us/airpods/2022/dc1310af-8cb9-4218-8d40-26bbe6a1d307/anim/hero/large.mp4' },
    { category: 'vision' },
    { category: 'accessories' }
];

export const getCategoriesVideos = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoriesVideos.filter((categoryVid) => categoryVid.category === category));
        }, 1000);
    });
};
