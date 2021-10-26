import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App =(props)=>{

const [count, qaya] = useState(props.count);

const addCount=()=>{
  qaya(count+1)
}
const clearCount=()=>{
if (count > 0) {
  qaya(count-1);
}
}

  return(
    <div>
      <p>U clicked {count}</p>
      <button onClick={addCount}>+1</button>
      <button onClick={clearCount}>-1</button>
    </div>
  );
}
App.defaultProps = {
  count :0
}








ReactDOM.render(<App />,document.getElementById('root'));



