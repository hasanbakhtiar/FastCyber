const root = document.querySelector('#root');

var myTime = ()=>{
    var infoTime = (
        <div>
            <h2>Time is: {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    
ReactDOM.render(infoTime,root);
}

setInterval(myTime,1000);
