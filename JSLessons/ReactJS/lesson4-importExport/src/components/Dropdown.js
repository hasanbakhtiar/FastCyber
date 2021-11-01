import React from 'react'

const Dropdown=(props)=>{
    return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {props.title}
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="#">{props.model1}</a></li>
        <li><a className="dropdown-item" href="#">{props.model2}</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">{props.model3}</a></li>
      </ul>
    </li>
    );
  }
export default Dropdown
