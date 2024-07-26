import PropTypes from 'prop-types';

const CategoryVideo = ({ video }) => {
    return (
        <>
            {video.video ? (
                <video className="category-video" muted autoPlay loop role="img" controls>
                    <source src={video.video} alt={`${video.category} category`} type="video/mp4" />
                    Your browser does not support the video element.
                </video>
            ) : (
                <img className='accessories-first-image' src={video.image} alt="Accessories Land Image" />
            )}
        </>
    );
}

CategoryVideo.propTypes = {
    video: PropTypes.shape({
        video: PropTypes.string,
        category: PropTypes.string.isRequired,
    }).isRequired,
};

export default CategoryVideo;
