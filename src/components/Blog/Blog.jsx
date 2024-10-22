import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddBookMarks}) => {
    const {title,cover_img,author_img,author,post_date,reading_time,hashtags} = blog;


    
    return (
        <div>
            <img className="w-full md:h-[400px] h-64 my-6 rounded-lg" src={cover_img} alt={`Cover picture of the title ${title}`}></img>
            <div className="flex justify-between items-center">
                <div>
                <div className="flex items-center gap-5">
                <div>
                    <img className="rounded-full w-20 h-20" src={author_img}></img>
                </div>
                <div>
                    <p className="text-2xl font-bold">{author}</p>
                    <p>{post_date}</p>
                </div>
                </div>
                </div>
                <div className="flex items-center gap-2">
                    <span>{`0${reading_time} min read`}</span>

                    <button 
                    onClick={() => handleAddBookMarks(blog)} 
                    className="bg-white rounded-full p-2">
                    <FaBookmark></FaBookmark>
                    </button>

                </div>
            </div>
            <h2 className="md:text-4xl text-2xl font-bold my-3">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes= {
    blog: PropTypes.object.isRequired,
    handleAddBookMarks: PropTypes.func
}

export default Blog;