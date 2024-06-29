
const Footer = () => {

    return (

        <footer>
            <div className="info-box">
                <p><a href="#">About Pineapple</a> | <a href="#">Contact Us</a></p>
            </div>
            <hr />
            <p className="copy">&copy; {new Date().getFullYear()} Pineapple Inc. All Rights Reserved</p>
        </footer>
    );
}

export default Footer