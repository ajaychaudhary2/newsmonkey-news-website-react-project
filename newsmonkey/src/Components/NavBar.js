import React from 'react'
import {
  Link
} from "react-router-dom";

const NavBar =()=> {
  
    
    return (
      
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="navbar-brand size"  to="/" >News <span className="clr">Monkey</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item padding-left">
        <Link className="nav-link  hover" to="/">Home</Link>
        </li>
        <li className="nav-item padding-left">
        <Link className="nav-link hover1 " to="/business">Business</Link>
        </li>
        <li className="nav-item padding-left">
        <Link className="nav-link  hover2" to="/entertainment">entertainment</Link>
        </li>
        <li className="nav-item padding-left">
        <Link className="nav-link hover1 " to="/health">health</Link>
        </li>
        <li className="nav-item padding-left">
        <Link className="nav-link hover3" to="/science">science</Link>
        </li>
        <li className="nav-item padding-left">
        <Link className="nav-link hover2 " to="/sports">sports</Link>
        </li>
        <li className="nav-item padding-left">
        <Link className="nav-link hover3 " to="/technology">technology</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )

}

export default NavBar
