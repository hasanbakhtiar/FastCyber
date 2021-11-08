import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';






class Book extends React.Component{

  constructor(props){
    super(props);
    this.newBook = this.newBook.bind(this);
    // console.log('constructor is runing...');
    this.state = {
      author: "Dostoyevski",
      bookname: "Cinayet ve Ceza",
      pagecount: 695
    }
    
  }

  newBook(){
    this.setState({
      author: "Hitler",
      bookname: "Benim Savasim",
      pagecount: 600
    })
  }



  render(){
    return(
        <div className="container">
          <h1>Author: {this.state.author}</h1>
          <p>Book Name: {this.state.bookname}</p>
          <p>Book Page Count: {this.state.pagecount}</p>
          <button className="btn btn-success" onClick={this.newBook}> New Book</button>
        </div>
    )
  }
}





ReactDOM.render(<Book />,document.getElementById('root'));



// class Book extends React.Component{
//       render(){
//         return(
//           <h1>{this.props.title}</h1>
//         )
// }
// }

// const App =()=>{
//   return(
//     <h1><Book title="Hello1" /></h1>
//   )
// }