import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';
// BLOG
// Blog Create
const addBlog = ({title="",description="",dataAdded = 0})=>({
  type:"ADD_BLOG",
  blog:{
    id: uuid(),
    title:title,
    description:description,
    dataAdded:dataAdded

  }

})
// Blog Remove

const removeBlog = ({id}) => (
  {
    type: "REMOVE_BLOG",
    id: id
  }
)
// Blog Edit
const editBlog = (id,updates) =>({
  type:"EDIT_BLOG",
  id,
  updates
})

const blogState = [];

const blogsReducer = (state = blogState,action)=>{
    switch(action.type){
      case "ADD_BLOG":
        return [
          ...state,
          action.blog
        ]
        case "REMOVE_BLOG":
          return state.filter(({id})=>{
            return id !== action.id
          })
          case "EDIT_BLOG":
            return state.map((blog)=>{
              if (blog.id === action.id) {
                return {
                  ...blog,
                  ...action.updates
                }
                
              }else{
                return blog
              }
            })
      default:
        return state;
    }
}

const authState = {
  name: "Pasha"
};
const authReducer = (state = authState ,action)=>{
  switch(action.type){
    case "artir":
      return state
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    blogs: blogsReducer,
    auth: authReducer
  })
)

store.subscribe(()=>{
  console.log(store.getState());
})



const blog1 = store.dispatch(addBlog({title:'b1',description:"desc1", dataAdded:Date.now()}));
const blog2 = store.dispatch(addBlog({title:'b2',description:"desc2", dataAdded:"2"+Date.now()}));

store.dispatch(removeBlog({id:blog1.blog.id }))
store.dispatch(editBlog(blog2.blog.id, {title:"update"}))
// console.log(blog2.blog.id);

store.dispatch(
{type:"artir"}
)












const App =()=>{
  return(
    <h1>Hello</h1>
  );
}



ReactDOM.render(<App />,document.getElementById('root'));



