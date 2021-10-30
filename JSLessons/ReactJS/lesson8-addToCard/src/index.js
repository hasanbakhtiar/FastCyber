import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './components/App';


// const Text =(props)=>{
//   return(
//     <div>
//       <h1>{props.basliq}</h1>
//       <p>{props.metn}</p>
     
//     </div>
//     )
// }


// const App =()=>{
//   return(
//       <div>
//         <Text basliq="Rebiyye" metn="Text"/>
//         <Text basliq="Qaya" metn="Text1"/>
//         <Text basliq="Pasha" metn="Text2"/>
//         <Text />
//       </div>
//   )
// }



ReactDOM.render(<App />,document.getElementById('root'));



