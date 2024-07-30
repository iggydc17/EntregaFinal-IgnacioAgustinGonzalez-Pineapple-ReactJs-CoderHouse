import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {

    return (
        <main className="about-us">
            <div className="about-us-content">
                <h1>About Pineapple</h1>
                <p>Welcome to <Link to="/"><strong>PineApple</strong></Link>, your number one source for all Apple products. We are dedicated to giving you the very best of Apple, with a focus on dependability, customer service, and uniqueness.</p>
                <p>Founded in 2024, <Link to="/"><strong>PineApple</strong></Link> has come a long way from its beginnings. When we first started out, our passion for <Link to="/"><strong>PineApple</strong></Link> products drove us to do intense research, quit our day job, and gave us the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the world, and are thrilled to be a part of the infinity wing of the technology industry.</p>
                <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please do not hesitate to contact us.</p>
                <Link to={"/store/"} className='go-to-store-button'>
                    Check Our Products!
                </Link>
            </div>
        </main>
    );
}

export default AboutUs;
