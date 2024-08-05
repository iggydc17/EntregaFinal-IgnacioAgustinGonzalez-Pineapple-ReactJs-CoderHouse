import CategorySubtitles from "../CategorySubtitles/CategorySubtitles";

const CategorySubtitlesList = ({ subtitles }) => {


    return (
        <>
            {subtitles.map((sub, index) => (
                <CategorySubtitles key={index} sub={sub} />
            ))}
        </>
    );
}

export default CategorySubtitlesList;