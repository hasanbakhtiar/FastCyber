import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


const App =(props)=>{
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    console.log('count');
    localStorage.setItem('count', count)
  },[count])

    return(
        <div className="container">
          <p>Count Number :{count}</p>
          <button onClick={()=>setCount(count + 1)}>+1</button>
          <button onClick={()=>setCount(count - 1)}>-1</button>
        </div>
    )
}
App.defaultProps ={
  count:0
}


ReactDOM.render(<App />,document.getElementById('root'));



