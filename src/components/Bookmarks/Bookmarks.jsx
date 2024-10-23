import PropTypes from 'prop-types'
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div className='mt-8 ml-5 bg-slate-300 p-5 rounded-xl'>
                <h2 className='text-4xl'>Reading Time: {readingTime} min
                </h2>
            </div>
            <h2 className="mt-7 ml-4 text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmarks.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    )
};

Bookmarks.propTypes ={
    bookmarks:PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;