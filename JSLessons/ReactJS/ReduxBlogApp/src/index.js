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



