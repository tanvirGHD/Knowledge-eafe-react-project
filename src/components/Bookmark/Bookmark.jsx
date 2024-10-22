import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    
    const {title} = bookmark;
    return (
        <div className=' bg-slate-300 rounded-sm p-4 ml-5'>
            <h3 className='text-2xl rounded-xl font-bold p-7 text-center bg-slate-100 '>{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;