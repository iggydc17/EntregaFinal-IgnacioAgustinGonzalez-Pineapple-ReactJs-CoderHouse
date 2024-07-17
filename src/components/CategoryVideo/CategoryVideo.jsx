import PropTypes from 'prop-types';

const CategoryVideo = ({ video }) => {
    return (
        <>
            {video.video && video.image ? (
                <>
                    <img 
                        className="first-image"
                        src={video.image}
                        alt={video.category}                    
                    />
                    <video className="category-video" muted autoPlay loop role="img" controls>
                        <source src={video.video} alt={`${video.category} category`} type="video/mp4" />
                        Your browser does not support the video element.
                    </video>
                </>
            ) : video.video ? (
                <video className="category-video" muted autoPlay loop role="img" controls>
                    <source src={video.video} alt={`${video.category} category`} type="video/mp4" />
                    Your browser does not support the video element.
                </video>
            ) : (
                <img 
                    className="accessories-first-image"
                    src={video.image}
                    alt={video.category}                    
                />
            )}
        </>
    );
}

CategoryVideo.propTypes = {
    video: PropTypes.shape({
        video: PropTypes.string,
        image: PropTypes.string,
        category: PropTypes.string.isRequired,
    }).isRequired,
};

export default CategoryVideo;
