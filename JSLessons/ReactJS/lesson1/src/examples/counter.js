const root = document.querySelector('#root');

// const temp = (
//    <div>
//        <h1 style={{'color':'red','background-color':'green'}}>Hello react</h1>
//        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim quasi tenetur quod at recusandae corrupti tempora ipsam. Asperiores assumenda repellendus ab vitae facilis numquam? Ullam error vero quas deleniti!</p>
//    </div>
// )
// import React from 'react'

// const infoData = {
//     name : "Hello"
// }

let number = 0;

const minusOne =()=>{
    number --;
    renderApp();

}

const plusOne =()=>{
    number ++;
    renderApp();
}

var renderApp = ()=>{
var temp =    <div>
 {/* <h1>This is Counter </h1> */}
 <h1>Number: {number}</h1>
 <button onClick={minusOne}>-1</button>
 <button onClick={plusOne}>+1</button>
</div>
ReactDOM.render(temp,root);
}
    

renderApp();



