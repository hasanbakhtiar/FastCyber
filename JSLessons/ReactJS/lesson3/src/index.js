import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import BasicCounter from './examples/BasicCounter';



// class App extends React.Component{
//   render(){
//     return(
//       <h1 className='btn btn-success'>Hello</h1>
//     )
//   }
// }


ReactDOM.render(
 <BasicCounter />, document.getElementById('root')
 
);


