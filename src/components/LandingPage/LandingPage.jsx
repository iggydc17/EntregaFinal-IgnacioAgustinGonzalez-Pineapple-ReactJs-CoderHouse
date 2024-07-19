import { Link } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {

    const landingVideo = "https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/foundation/large.mp4";

    return (
        <main className='landing-page-main'>
            <div id='space-nav'></div>
            <div className="landing-video-container">
                <video className="landing-page-video" muted autoPlay loop role="img" controls>
                    <source src={landingVideo} alt="Landing Page Vision Pro Video" type='video/mp4' />
                </video>
                <div className='vision-text-box'>
                    <h1 className='vision-image-fig'>
                        <figure>
                            <i className="bi bi-apple"></i>
                            Vision Pro
                        </figure>
                    </h1>
                    <h2 className='vision-landing-subtitle'>
                        You´ve never seen everything like this before.
                    </h2>
                    <Link to={'/detail/29/'} className='buy-button'>Buy</Link>
                </div>
            </div>
            <section className="articles-container">
                <article id="iPhone-article" className='landing-article'>
                    <h1>iPhone 15 Pro</h1>
                    <h2>Our most powerful camera yet.</h2>
                    <h2>Ultrafast chips. And USB-C.</h2>
                    <div className="button-box">
                    <Link to={"/detail/15/"} className='buy-button'>Buy</Link>
                    </div>
                    <img id="iPhone-img" src="img/iPhone-pro.jpg" alt="iPhone 15 Pro" />
                </article>
                <article id="store-article" className='landing-article'>
                    <h1>Buy Mac or iPad for collage!</h1>
                    <img src="img/store.jpeg" alt="Store" />
                    <Link to={"/store"} className="shop-button" >Shop</Link>
                </article>
                <article id="iPad-article" className='landing-article'>
                    <h1>iPad Pro</h1>
                    <h2>Unbelievable thin. Incredible powerful.</h2>
                    <div className="button-box">
                        <Link className='buy-button' to={"/detail/11/"}>Buy</Link>
                    </div>
                        <img src="img/iPad-pro.jpg" alt="iPad Pro" />
                </article>
            </section>
        </main>
    );
}

export default LandingPage;