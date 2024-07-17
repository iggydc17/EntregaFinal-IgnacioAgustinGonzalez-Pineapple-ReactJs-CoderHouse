import CategoryVideo from '../CategoryVideo/CategoryVideo';
import './CategoriesVideosList.css';

const CategoriesVideosList = ({ videos }) => {


    return (
        <div className='categories-videos-container'>
            {videos.map((video, index) => (
                <CategoryVideo key={index} video={video} />
            ))}
        </div>
    );
}

export default CategoriesVideosList;