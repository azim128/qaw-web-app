import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../assets/qawlogo.png'
import './navbar.css'
const NavBar = () => {
  return (
    <>
    <nav className="navbar sticky-top navbar-expand-lg" style={{background: "#37517e"}}>
        <div className="container">
          <Link className="navbar-brand" to='/'><img src={LOGO} alt="Logo" width="auto" height="80" className="d-inline-block align-text-top"/></Link>
          <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbar-nav-scroll ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>about</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/portfolio'>Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/blog'>Blog</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to='/services' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to='/web'>Web Application</Link></li>
                  <li><Link className="dropdown-item" to='/app'>App Application</Link></li>
                  <li><Link className="dropdown-item" to='/ai'>AI & ML Solutions</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to='/iot'>IoT Application</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-primary custom-btn" to='/contact'>Contact Us</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar