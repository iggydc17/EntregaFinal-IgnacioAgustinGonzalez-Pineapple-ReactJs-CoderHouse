import CategorySubtitles from "../CategorySubtitles/CategorySubtitles";

const CategorySubtitlesList = ({ videos }) => {


    return (
        <>
            {videos.map((sub, index) => (
                <CategorySubtitles key={index} sub={sub} />
            ))}
        </>
    );
}

export default CategorySubtitlesList;