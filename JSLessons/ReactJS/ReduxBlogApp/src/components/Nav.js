import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/" exact>Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/blogs">Blogs</NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/create">Create</NavLink>
              </li>

              
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/service">Service</NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
              </li>
             
              
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Nav
