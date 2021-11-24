import React from 'react'

const BlogDetailsItems = ({id, title, description,dataAdded}) => {
    return (
        <div>
            {/* <p>Blog id: {id}</p> */}
            <p>Blog title: {title}</p>
            <p>Blog description: {description}</p>
            <p>Blog dataAdded: {dataAdded}</p>
        </div>
    )
}

export default BlogDetailsItems
