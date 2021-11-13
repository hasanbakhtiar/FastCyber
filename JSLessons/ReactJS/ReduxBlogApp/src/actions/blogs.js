import {v4 as uuid} from 'uuid';

// BLOG
// Blog Create
export const addBlog = ({title="",description="",dataAdded = 0})=>({
    type:"ADD_BLOG",
    blog:{
      id: uuid(),
      title:title,
      description:description,
      dataAdded:dataAdded
  
    }
  
  })
  // Blog Remove
  
  export const removeBlog = ({id}) => (
    {
      type: "REMOVE_BLOG",
      id: id
    }
  )
  // Blog Edit
  export const editBlog = (id,updates) =>({
    type:"EDIT_BLOG",
    id,
    updates
  })