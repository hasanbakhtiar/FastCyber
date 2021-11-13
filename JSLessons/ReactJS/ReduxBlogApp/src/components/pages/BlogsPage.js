import React from 'react'
import { Link } from 'react-router-dom';
import BlogList from './BlogList';
const BlogsPage = () => {
    return (
        <div>
            <h1>Blogs</h1>
            <BlogList />
            <p><Link to="/blog/1">Blog 1</Link></p>
            <p><Link to="/blog/2">Blog 2</Link></p>
        </div>
    )
}

export default BlogsPage
