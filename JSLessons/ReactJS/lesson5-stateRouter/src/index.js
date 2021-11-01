import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Nav extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">


        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link active" aria-current="page" href="#">About</Link>
        </li>

        <li className="nav-item">
          <Link to="/blog" className="nav-link active" aria-current="page" href="#">Blog</Link>
        </li>

        <li className="nav-item">
          <Link to="/contact"  className="nav-link active" aria-current="page" href="#">Contact</Link>
        </li>
      
       
       
      </ul>
    
    </div>
  </div>
</nav>
    )
  }
}

const Home=()=>{
  return(
    <h1>Home</h1>
  );

}

const About=()=>{
  return(
    <h1>About</h1>
  );

}


const Blog=()=>{
  return(
    <h1>Blog</h1>
  );

}

const Contact=()=>{
  return(
    <h1>Contact</h1>
  );

}
const App =()=>{
  return(
    
    <BrowserRouter>
    <Nav />
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/contact" component={Contact}></Route>
    </BrowserRouter>
  )
}





ReactDOM.render(<App />,document.getElementById('root'));



