import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddBookMarks, handleMarksAsRead}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    })

    return (
        <div className="md:w-2/3 bg-gray-100 p-5 rounded-lg mt-8">
            
            <h1 className="text-2xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => 
                <Blog Blog key={blog.id}
                blog={blog}
                handleAddBookMarks={handleAddBookMarks}
                handleMarksAsRead={handleMarksAsRead}
                ></Blog>)   
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookMarks: PropTypes.func,
    handleMarksAsRead: PropTypes.func
}

export default Blogs;

