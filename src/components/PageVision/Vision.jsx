import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { Link } from 'react-router-dom';
import './Vision.css';

const Vision = () => {

    const firstImage = "https://www.apple.com/v/apple-vision-pro/e/images/overview/hero/portrait_base_us__fucaqiry5e2q_large.jpg";
    const YouTubeVideo = "https://www.youtube.com/watch?v=TX9qSaGXFyg";
    const visionCloserImage = "https://www.apple.com/v/apple-vision-pro/e/images/overview/intro/hardware_base__ecl2v43j73o2_large.jpg";
    const entertainmentVideo = "https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/foundation/large.mp4";
    const productivityVideo = "https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-productivity/large.mp4";
    const photosAndVideosVideo = "https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-photos-videos/large.mp4";
    const sideImage = "https://www.apple.com/v/apple-vision-pro/e/images/overview/design/portrait_right_base__cd0c4xdglcs2_large.jpg";
    const frontImage = "https://www.apple.com/v/apple-vision-pro/e/images/overview/design/portrait_front_base__gmqifatci56q_large.jpg";
    const topImage = "https://www.apple.com/v/apple-vision-pro/e/images/overview/design/light_seal__fo87cv0zkcmm_large.jpg";
    const frontCloseImage = "https://www.apple.com/v/apple-vision-pro/e/images/overview/technology/displays/hero_base__bpxhq09r962u_large.jpg";
    const spatialImage = "https://www.apple.com/v/apple-vision-pro/e/images/overview/technology/spatial_audio_base__d8zvuse3yu4i_large.jpg";
    const insideImage = "https://www.apple.com/v/apple-vision-pro/e/images/overview/technology/features/eye_tracking_on__ln11reqs6mi6_large.jpg";
    const frontDownImage = "https://www.apple.com/v/apple-vision-pro/e/images/overview/technology/features/sensors_all__dp0a8e4y4u4i_large.jpg";
    const dualChipImage = "https://www.apple.com/v/apple-vision-pro/e/images/overview/technology/features/sensors_chips__s805s5o3gkii_large.jpg";


    return (
        <main className='vision-landing-page'>
            <div className='section-titles'>
                <h1 className='section-title'>Vision</h1>
                <p className='section-second-title'>The ultimate theater.<br /> Wherever you are.</p>
            </div>
            <div className="vision-image-container">
                <img
                    className='vision-first-image'
                    src={firstImage} 
                    alt="Vision Pro" 
                />
                <div className="vision-image-text">
                    <h1 className='vision-image-fig'>
                        <figure>
                            <i className="bi bi-apple"></i>
                            Vision Pro
                        </figure>
                    </h1>
                    <Link to={'/detail/29/'} className='buy-vision-button'>Buy</Link>
                </div>
            </div>
            <div className='watch-youtube-video-container'>
                <h1>Apple Vision Pro seamlessly blends digital <br />content with your physical space.</h1>
                <h1>So you can work, watch, relive memories, and <br /> connect in ways never before possible.</h1>
                <h1>The era of spatial computing is here.</h1>
                <Link to={YouTubeVideo} className='watch-youtube-video-button' target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-play-circle"></i>
                    Watch Film
                </Link>
                <h1 className='vision-image-fig'>
                    <figure>
                        <i className="bi bi-apple"></i>
                        Vision Pro
                    </figure>
                </h1>
                <img src={visionCloserImage} alt="PineApple Vision Pro" className='vision-closer-image' />
            </div>
            <div className="entertainment-container">
                <h3>Entertainment</h3>
                <h1>The ultimate theater. <br />Wherever you are.</h1>
                <video className="category-video" muted autoPlay loop role="img" controls>
                    <source src={entertainmentVideo} alt="Entertainment Video" type='video/mp4' />
                </video>
                <div className="entertainment-box box">
                    <h3 className='box-subtitle'>A new dimension for <br />entertainment.</h3>
                    <p className='box-p'>Apple Vision Pro can transform any room into your own personal theater. Expand your movies, shows, and games to your perfect size and experience them in Spatial Audio. Apple Immersive Video puts you in the center of the action with mind‑blowing immersion. And with more pixels than a 4K TV for each eye, you can enjoy stunning content wherever you are — on a long flight or the couch at home.</p>
                </div>
            </div>
            <div className="productivity-container">
                <h3>Productivity</h3>
                <h1>A workspace with <br /> infinite space.</h1>
                <video className="category-video" muted autoPlay loop role="img" controls>
                    <source src={productivityVideo} alt="Productivity Video" type='video/mp4' />
                </video>
                <div className="productivity-box box">
                    <h3 className="box-subtitle">Discover new ways <br /> to work.</h3>
                    <p className='box-p'>Apple Vision Pro gives you limitless space to get things done. Organize everything you need anywhere around you, in any way you like. Seamlessly bring in your Mac workflows using Mac Virtual Display. Connect a Magic Keyboard, a Magic Trackpad, and other Bluetooth accessories to expand how you navigate. And with SharePlay in FaceTime, you can collaborate with colleagues using apps together in real time.</p>
                </div>
            </div>
            <div className="photos-and-videos-container">
                <h3>Photos and Videos</h3>
                <h1>Be in the moment. <br />All over again.</h1>
                <video className="category-video" muted autoPlay loop role="img" controls>
                    <source src={photosAndVideosVideo} alt="Photos and Videos Video" type='video/mp4' />
                </video>
                <div className="photos-and-videos-box box">
                    <h3 className="box-subtitle">Your memories <br /> come alive.</h3>
                    <p className="box-p">Apple Vision Pro is Apple’s first 3D camera. You can capture magical spatial photos and spatial videos in 3D, then relive those cherished moments like never before with immersive Spatial Audio. Your existing library of photos and videos looks incredible at remarkable scale — and coming this fall, you’ll be able to transform your 2D photos into spatial photos with just a tap. Even panoramas wrap around you — making you feel like you’re standing right where you took them. You can also take spatial videos with iPhone 15 Pro, then view them on Apple Vision Pro.</p>
                </div>
            </div>
            <div className="design-container">
                <h3>Design</h3>
                <h1>Designed by Apple.</h1>
                <p className='typography'>Apple Vision Pro is the result of decades of experience designing high‑performance, mobile, and wearable devices — culminating in the most ambitious product Apple has ever created. Apple Vision Pro integrates incredibly advanced technology into an elegant, compact form, resulting in an amazing experience every time you put it on.</p>
                <div className='super-img-description-container'>
                    <div className="descriptions">
                        <p className='description-p'><span className='description-p-span'>Front.</span> A singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that curves to wrap around your face.</p>
                        <p className='description-p'><span className='description-p-span'>Light Seal.</span> The Light Seal gently flexes to conform to your face, delivering a precise fit while blocking out stray light.</p>
                        <p className='description-p'><span className='description-p-span'>Head bands.</span> The Solo Knit Band provides cushioning, breathability, and stretch, and a Fit Dial lets you adjust Apple Vision Pro precisely to your head. The Dual Loop Band offers an additional option for a personalized fit. </p>
                        <p className='description-p'><span className='description-p-span'>Power.</span> The external battery supports up to 2 hours of general use and up to 2.5 hours of video playback.1 </p>
                        <p className='description-p'><span className='description-p-span'>Sound.</span> Speakers positioned close to your ears deliver rich Spatial Audio while keeping you aware of your surroundings.</p>
                    </div>
                    <div className='image-side'>
                        <img src={sideImage} alt="Vision Pro Side Image" className='side-image' />
                    </div>
                </div>
                <div className="front-image-container">
                    <figure>
                        <img src={frontImage} alt="Vision Pro Front Image" className='front-image' />
                        <figcaption> <span className='front-image-description-span'>EyeSight</span>. An outward display reveals your eyes while wearing Apple Vision Pro, letting <br /> others know when you are using apps or fully immersed.</figcaption>
                    </figure>
                </div>
                <div className="top-angle-container">
                    <p>A singular piece of three-dimensionally formed laminated glass acts as an optical surface for the cameras and sensors that view the world. It flows seamlessly into a custom aluminum alloy frame that gently curves to wrap around your face while serving as an attachment point for the Light Seal.</p>
                    <img src={topImage} alt="Vision Pro Top Image" className='top-image' />
                </div>
                <div className="technology-container">
                    <h3>Technology</h3>
                    <h1>Innovation you can <br /> see, hear, and feel.</h1>
                    <p><strong>Pushing boundaries from the inside out.</strong> Spatial experiences on Apple Vision Pro are only possible through groundbreaking Apple technology. Displays the size of a postage stamp that deliver more pixels than a 4K TV to each eye. Incredible advances in Spatial Audio. A revolutionary dual‑chip design featuring custom Apple silicon. A sophisticated array of cameras and sensors. All the elements work together to create an unprecedented experience you have to see to believe.</p>
                    <img src={frontCloseImage} alt="Front Close Image" className='front-close-image' />
                    <h2>More pixels than a 4K TV. For each eye.</h2>
                    <p>The <strong>custom micro‑OLED display system</strong> features 23 million pixels, delivering stunning resolution and colors. And a specially designed three‑element lens creates the feeling of a display that’s everywhere you look.</p>
                </div>
                <div className="spatial-container">
                    <img src={spatialImage} alt="Vision Pro Spatial Image" className='spatial-image' />
                    <h2>Our most advanced <br /> Spatial Audio system ever.</h2>
                    <p>Dual-driver audio pods positioned next to each ear deliver personalized sound while letting you hear what’s around you. <strong>Spatial</strong> Audio makes sounds feel like they’re coming from your surroundings. Audio ray tracing analyzes your room’s acoustic properties to adapt and match sound to your space. And if you want to use headphones with Apple Vision Pro, AirPods Pro (2nd generation) with USB‑C offer the perfect experience, featuring Lossless Audio with ultra-low latency enabled by the H2 chip in both devices.</p>
                </div>
                <div className="angle-container">
                    <img src={insideImage} alt="Vision Pro Inside Image" />
                    <h2>Responsive, precision eye tracking.</h2>
                    <p>A high‑performance eye‑tracking system of <strong>LEDs</strong> and <strong>infrared cameras</strong> projects invisible light patterns onto each eye. This advanced system provides ultraprecise input without your needing to hold any controllers, so you can accurately select elements just by looking at them.</p>
                    <img src={frontDownImage} alt="Vision Pro Front Down Image" className='front-down-image' />
                    <h2>A sophisticated sensor array.</h2>
                    <p>A pair of high-resolution cameras transmit over one billion pixels per second to the displays so you can see the world around you clearly. The system also helps deliver precise head and hand tracking and real‑time 3D mapping, all while understanding your hand gestures from a wide range of positions.</p>
                </div>
                <div className="dual-chip-container">
                    <img src={dualChipImage} alt="Vision Pro Dual Chip" className='dual-chip-image' />
                    <h2>Revolutionary dual‑chip <br />performance.</h2>
                    <p>A unique dual‑chip design enables the spatial experiences on Apple Vision Pro. The powerful <strong>M2</strong> chip simultaneously runs visionOS, executes advanced computer vision algorithms, and delivers stunning graphics, all with incredible efficiency. And the brand-new <strong>R1</strong> chip is specifically dedicated to process input from the cameras, sensors, and microphones, streaming images to the displays within 12 milliseconds — for a virtually lag-free, real-time view of the world.</p>
                    <Link to={'/detail/29/'} className='buy-vision-button'>Buy</Link>
                </div>
            </div>
            <ItemListContainer category="vision" />
        </main>
    );
}

export default Vision;