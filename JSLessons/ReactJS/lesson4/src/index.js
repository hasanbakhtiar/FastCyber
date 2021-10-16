import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css';
import App from './components/App';




// class App extends React.Component{ //stateless component 
//   render(){
//     return(
//       <h1>This Component for App with React Extends</h1>
//     )

//   }
// }


// const App =()=>{ //statefull component 
//   return(
//     <h1>This Component for App with Arrow Func</h1>
//   )
// }






ReactDOM.render(
  <App />,
  document.getElementById('root')
  );



