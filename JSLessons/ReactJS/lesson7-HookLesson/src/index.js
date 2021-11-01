import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

class App extends Component{

  // Ümumiyyətlə hər bir methoddan öncə
  // constructor işlərir sonra digər methodlar çalışır.

  componentDidMount(){

    // component işə düşdüyü zaman ilk çalışan methoddur.
    console.log("Component DidMount runing...");
  }
  componentDidUpdate(){
    console.log("New User");
  }
  componentWillUnmount(){
    console.log("Delete");

  }


  constructor(props){
    super(props);
    console.log("constructor runing...");
    this.nextUser = this.nextUser.bind(this);
    this.state={
      user: "Pasha"
    }
  }
 
  nextUser(){
    this.setState({
      user: "Qaya"
    })
  }
  render(){
    return(
 <div>
        <h1>{this.state.user} </h1>
      <button onClick={this.nextUser}>Next User</button>
 </div>
    )
  }
}








ReactDOM.render(<App />,document.getElementById('root'));



