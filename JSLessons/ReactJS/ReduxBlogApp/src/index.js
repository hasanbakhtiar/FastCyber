import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addBlog,removeBlog,editBlog} from './actions/blogs';

const store = configureStore();


store.subscribe(()=>{
  console.log(store.getState());
})



const blog1 = store.dispatch(addBlog({title:'b1',description:"desc1", dataAdded:Date().toLocaleString()}));
const blog2 = store.dispatch(addBlog({title:'b2',description:"desc2", dataAdded:Date.now()}));
const blog3 = store.dispatch(addBlog({title:'b2',description:"desc2", dataAdded:Date.now()}));
const blog4 = store.dispatch(addBlog({title:'b2',description:"desc2", dataAdded:Date.now()}));
const blog5 = store.dispatch(addBlog({title:'b2',description:"desc2", dataAdded:Date.now()}));
const blog6 = store.dispatch(addBlog({title:'b2',description:"desc2", dataAdded:Date.now()}));
const blog7 = store.dispatch(addBlog({title:'b2',description:"desc2", dataAdded:Date.now()}));
const newBlog = store.dispatch(addBlog({title:'My Blog',description:"my new blog", dataAdded:Date.now()}));

// store.dispatch(removeBlog({id:blog1.blog.id }))
store.dispatch(editBlog(blog2.blog.id, {title:"update"}))
// console.log(blog2.blog.id);

store.dispatch(
{type:"artir"}
)




const App =()=>{
  return(
    <Provider store={store}>
      <AppRouter />
    </Provider>
       
  );
}





ReactDOM.render(<App />,document.getElementById('root'));



