import React from 'react'

const BlogPageDetails = ({match}) => {
    return (
        <div>
            Blog detail:{match.params.id}
        </div>
    )
}

export default BlogPageDetails
